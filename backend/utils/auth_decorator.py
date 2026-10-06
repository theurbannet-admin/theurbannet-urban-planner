from functools import wraps
from flask import request, jsonify
import jwt
import os
from database.db import Session
from models.user import User
import uuid

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # 1. Look for the token in the request headers
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]

        # 2. If no token is found, kick them out
        if not token:
            return jsonify({'message': 'Authentication Token is missing!'}), 401

        try:
            # 3. Decode the token using your secret key
            secret_key = os.getenv('JWT_SECRET_KEY', 'super-secret-urban-planner-key-123')
            data = jwt.decode(token, secret_key, algorithms=['HS256'])
            
            # 4. Find the user in the database using the ID saved inside the token
            session = Session()
            
            # Convert string UUID back to bytes for Aiven database lookup
            user_uuid_bytes = uuid.UUID(data['sub']).bytes
            current_user = session.query(User).filter_by(user_id=user_uuid_bytes).first()
            
            session.close()

            if not current_user:
                return jsonify({'message': 'User associated with this token no longer exists!'}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired! Please log in again.'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token!'}), 401
        except Exception as e:
            return jsonify({'message': f'Server authentication error: {str(e)}'}), 500

        # 5. If everything is valid, pass the user object to the actual route
        return f(current_user, *args, **kwargs)

    return decorated