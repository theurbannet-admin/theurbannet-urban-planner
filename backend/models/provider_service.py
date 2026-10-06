import uuid
from datetime import datetime, timezone

from database.db import Base
from database.db import BINARY_UUID
from sqlalchemy import Column, String, Text, Numeric, Enum, Integer, DateTime, ForeignKey, func
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship

class ProviderService(Base):
    __tablename__ = "provider_services"

    service_id = Column(BINARY_UUID, primary_key=True, default=lambda: uuid.uuid4())
    provider_id = Column(BINARY_UUID, ForeignKey("service_providers.provider_id"), nullable=False)
    category_id = Column(Integer, ForeignKey("service_categories.category_id"), nullable=False)
    service_name = Column(String(150), nullable=False)
    base_price = Column(Numeric(10, 2), nullable=False, default=0.00)
    price_unit = Column(Enum('fixed', 'per_event', 'per_hour', 'per_guest', name='price_unit_enum'), nullable=False, default='per_event')
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now()) 

    # Relationships
    provider = relationship("ServiceProvider", back_populates="services")
    category = relationship("ServiceCategory", back_populates="provider_services")