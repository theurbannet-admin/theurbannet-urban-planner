# Dummy Data
from database.db import Session
from models.user import User
from models.customer import Customer
from models.service_provider import ServiceProvider

def seed_database():
    # Open a session to interact with the database
    session = Session()

    try:
        print("Creating dummy users...")

        # 1. Create a Customer User
        customer_user = User(
            email="sarah.customer@example.com",
            password_hash="fake_hashed_password_123", # In reality, your auth route hashes this
            first_name="Sarah",
            last_name="Jenkins",
            phone_number="555-0101",
            user_type="customer"
        )
        session.add(customer_user)
        session.flush() # Flush sends it to the DB to generate the user_id, but doesn't fully save it yet

        # Create the matching Customer profile
        customer_profile = Customer(
            user_id=customer_user.user_id,
            preferences_notes="Loves outdoor events and live music."
        )
        session.add(customer_profile)

        # 2. Create a Service Provider User
        provider_user = User(
            email="carlos.catering@example.com",
            password_hash="fake_hashed_password_456",
            first_name="Carlos",
            last_name="Rivera",
            phone_number="555-0202",
            user_type="provider"
        )
        session.add(provider_user)
        session.flush() 

        # Create the matching Service Provider profile
        provider_profile = ServiceProvider(
            user_id=provider_user.user_id,
            business_name="Rivera Premium Catering",
            owner_name="Carlos Rivera",
            contact_email="contact@riveracatering.com",
            location="Downtown Kigali",
            description="High-end catering for corporate and private events.",
            rating=4.8
        )
        session.add(provider_profile)

        # Commit all the changes to the database at once
        session.commit()
        print("Dummy data successfully added to the database!")

    except Exception as e:
        session.rollback() # If anything fails, undo everything
        print(f"An error occurred: {e}")
    finally:
        session.close()

if __name__ == "__main__":
    seed_database()