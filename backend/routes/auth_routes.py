from flask import Blueprint, request, jsonify
import bcrypt

from database.db import Session
from models.user import User
from models.customer import Customer                   # <-- ADD THIS
from models.service_provider import ServiceProvider
from utils.jwt_utils import generate_token
from utils.auth_decorator import token_required


auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/signup", methods=["POST"])
def register():
    session = Session()
    data = request.get_json()

    try:
        existing_user = session.query(User).filter_by(email=data["email"]).first()

        if existing_user:
            return jsonify({"message": "Email already exists"}), 400

        hashed_password = bcrypt.hashpw(
            data["password"].encode("utf-8"),
            bcrypt.gensalt()
        ).decode("utf-8")

        # 1. Determine the user type
        user_type = data.get("role", "customer")

        # 2. Create the base User
        new_user = User(
            first_name=data.get("first_name", "TestFirstName"),
            last_name=data.get("last_name", "TestLastName"),
            email=data["email"],
            password_hash=hashed_password,
            user_type=user_type
        )

        session.add(new_user)
        
        # 3. FLUSH to generate the new_user.user_id without permanently saving yet
        session.flush() 

        # 4. Create the specific profile based on user_type
        if user_type == "customer":
            new_customer = Customer(
                user_id=new_user.user_id
            )
            session.add(new_customer)

        elif user_type == "provider":
            # Providers have required fields in your schema (business_name, location, contact_email)
            # We use .get() with fallbacks in case your React frontend isn't sending these yet
            new_provider = ServiceProvider(
                user_id=new_user.user_id,
                business_name=data.get("business_name", f"{new_user.first_name}'s Business"),
                contact_email=data.get("contact_email", new_user.email),
                location=data.get("location", "Not specified")
            )
            session.add(new_provider)

        # 5. COMMIT everything together!
        session.commit()

        return jsonify({
            "message": f"{user_type.capitalize()} registered successfully",
            "user_id": str(new_user.user_id) 
        }), 201

    except Exception as e:
        session.rollback() # If ANYTHING fails, it undoes the User and the Profile
        return jsonify({"error": str(e)}), 500

    finally:
        session.close()


@auth_bp.route("/login", methods=["POST"])
def login():
    session = Session()
    data = request.get_json()

    try:
        user = session.query(User).filter_by(email=data["email"]).first()

        if not user:
            return jsonify({"message": "Invalid email or password"}), 401

        password_is_valid = bcrypt.checkpw(
            data["password"].encode("utf-8"),
            user.password_hash.encode("utf-8")
        )

        if not password_is_valid:
            return jsonify({"message": "Invalid email or password"}), 401

        token = generate_token(user.user_id, user.user_type)

        return jsonify({
            "message": "Login successful",
            "token": token,
            "user": {
                "user_id": str(user.user_id),
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "user_type": user.user_type
            }
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        session.close()


@auth_bp.route("/me", methods=["GET"])
@token_required
def get_current_user(current_user):
    return jsonify({
        "user": {
            "user_id": current_user.user_id,
            "first_name": current_user.first_name,
            "last_name": current_user.last_name,
            "email": current_user.email,
            "user_type": current_user.user_type
        }
    }), 200