import jwt
import os
from datetime import datetime, timedelta, timezone

def generate_token(user_id, role):
    """
    Generates a JWT token for a user that expires in 24 hours.
    """
    # Create the payload (the data stored inside the token)
    payload = {
        'exp': datetime.now(timezone.utc) + timedelta(days=1), # Expires in 1 day
        'iat': datetime.now(timezone.utc),                     # Issued at
        'sub': str(user_id),                                   # Subject (The User ID)
        'role': role                                           # The User's Role
    }
    
    # Grab the secret key from your .env file, or use a fallback for testing
    secret_key = os.getenv('JWT_SECRET_KEY', 'super-secret-urban-planner-key-123')
    
    # Encode and return the token
    return jwt.encode(payload, secret_key, algorithm='HS256')