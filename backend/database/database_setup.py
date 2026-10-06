from database.db import Base, engine

from models.user import User
from models.customer import Customer
from models.service_category import ServiceCategory
from models.service_provider import ServiceProvider
from models.provider_service import ProviderService
from models.plan import Plan
from models.plan_item import PlanItem


def create_database_tables():
    Base.metadata.create_all(bind=engine)

    table_names = sorted(Base.metadata.tables.keys())

    print("Registered database tables:")

    for table_name in table_names:
        print(f" - {table_name}")

    print("Urban Planner tables checked successfully.")


if __name__ == "__main__":
    create_database_tables()