import uuid
from datetime import datetime

from database.db import Base
from database.db import BINARY_UUID
from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, func 
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship

class PlanItem(Base):
    __tablename__ = "plan_items"

    plan_item_id = Column(BINARY_UUID, primary_key=True, default=uuid.uuid4)
    plan_id = Column(BINARY_UUID, ForeignKey("plans.plan_id"), nullable=False)
    category_id = Column(Integer, ForeignKey("service_categories.category_id"), nullable=False)
    provider_id = Column(BINARY_UUID, ForeignKey("service_providers.provider_id"), nullable=True)
    provider_service_id = Column(BINARY_UUID, ForeignKey("provider_services.service_id"), nullable=True)

    day_number = Column(Integer, nullable=False, default=1)
    sort_order = Column(Integer, nullable=False, default=1)
    estimated_quantity = Column(Integer, nullable=True, default=1)
    notes = Column(Text, nullable=True)

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())  

    # Relationships
    plan = relationship("Plan", back_populates="plan_items")
    category = relationship("ServiceCategory", back_populates="plan_items")
    provider = relationship("ServiceProvider", foreign_keys=[provider_id])
    service_booked = relationship("ProviderService", foreign_keys=[provider_service_id])