import uuid
from datetime import datetime, timezone

from database.db import Base
from database.db import BINARY_UUID
from sqlalchemy import Column, String, Text, Boolean, Numeric, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship

class ServiceProvider(Base):
    __tablename__ = "service_providers"

    provider_id = Column(BINARY_UUID, primary_key=True, default=lambda: uuid.uuid4())
    user_id = Column(BINARY_UUID, ForeignKey("users.user_id"), unique=True, nullable=False)
    business_name = Column(String(150), nullable=False)
    owner_name = Column(String(150), nullable=True)
    contact_email = Column(String(150), nullable=False)
    location = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    rating = Column(Numeric(2, 1), default=0.0)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="provider_profile")
    services = relationship("ProviderService", back_populates="provider", cascade="all, delete-orphan")
    