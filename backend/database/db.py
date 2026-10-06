import os
import uuid

from dotenv import load_dotenv
from sqlalchemy import BINARY, TypeDecorator, create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import declarative_base, sessionmaker


load_dotenv()


database_url = URL.create(
    drivername="mysql+pymysql",
    username=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS"),
    host=os.getenv("DB_HOST"),
    port=int(os.getenv("DB_PORT", "3306")),
    database=os.getenv("DB_NAME"),
)


connect_args = {}

database_ca = os.getenv("DB_CA")

if database_ca:
    connect_args["ssl"] = {
        "ca": database_ca
    }


engine = create_engine(
    database_url,
    connect_args=connect_args,
    pool_pre_ping=True,
)


class BINARY_UUID(TypeDecorator):
    """
    Converts Python UUID values to MySQL BINARY(16) values and
    converts database BINARY(16) values back into uuid.UUID objects.
    """

    impl = BINARY(16)
    cache_ok = True

    def process_bind_param(self, value, dialect):
        if value is None:
            return None

        if isinstance(value, uuid.UUID):
            return value.bytes

        if isinstance(value, memoryview):
            return value.tobytes()

        if isinstance(value, (bytes, bytearray)):
            return bytes(value)

        if isinstance(value, str):
            return uuid.UUID(value).bytes

        raise ValueError(
            f"Unsupported UUID value type: {type(value).__name__}"
        )

    def process_result_value(self, value, dialect):
        if value is None:
            return None

        if isinstance(value, uuid.UUID):
            return value

        if isinstance(value, memoryview):
            value = value.tobytes()

        return uuid.UUID(bytes=bytes(value))


Base = declarative_base()

Session = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)