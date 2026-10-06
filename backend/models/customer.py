import uuid
from database.db import Base
from database.db import BINARY_UUID
from sqlalchemy import Column, Text, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship

class Customer(Base):
    __tablename__ = "customers"

    customer_id = Column(BINARY_UUID, primary_key=True, default=lambda: uuid.uuid4())
    user_id = Column(BINARY_UUID, ForeignKey("users.user_id"), unique=True, nullable=False)
    preferences_notes = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="customer_profile")
    plans = relationship("Plan", back_populates="customer",)