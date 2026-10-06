import uuid
from datetime import datetime, timezone

from database.db import Base
from database.db import BINARY_UUID
from sqlalchemy import Column, String, Enum, DateTime, func
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    user_id = Column(BINARY_UUID, primary_key=True, default=lambda: uuid.uuid4())
    email = Column(String(150), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    phone_number = Column(String(20), nullable=True)
    user_type = Column(Enum('customer', 'provider', 'admin', name = 'user_type_enum'), nullable=False, default='customer')
    created_at = Column(DateTime, server_default=func.now())
    # updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # Relationships
    customer_profile = relationship("Customer", back_populates="user", uselist=False, cascade="all, delete-orphan")
    provider_profile = relationship("ServiceProvider", back_populates="user", uselist=False, cascade="all, delete-orphan")