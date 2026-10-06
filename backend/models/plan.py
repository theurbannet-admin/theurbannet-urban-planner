import uuid
from datetime import datetime, timezone

from database.db import Base, BINARY_UUID
from sqlalchemy import Column, Integer, String, Date, Numeric, Enum, DateTime, ForeignKey, Text, func 
from sqlalchemy.orm import relationship

class Plan(Base):
    __tablename__ = "plans"

    plan_id = Column(BINARY_UUID, primary_key=True, default=uuid.uuid4)
    customer_id = Column(BINARY_UUID, ForeignKey("customers.customer_id"), nullable=False)
    planner_id = Column(BINARY_UUID, ForeignKey("users.user_id"), nullable=False)
    plan_name = Column(String(150), nullable=False)
    event_type = Column(String(100), nullable=False)
    event_location = Column(String(255), nullable=True)
    event_date = Column(Date, nullable=True)
    guest_count = Column(Integer, nullable=True)
    theme = Column(String(150), nullable=True)
    notes = Column(Text, nullable=True)
    plan_type = Column(Enum('guided', 'self_managed', name='plan_type_enum'), nullable=False, default="guided")
    budget = Column(Numeric(10, 2), nullable=True)
    status = Column(Enum('draft', 'saved', 'completed', name='plan_status_enum'), nullable=False, default='draft')

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # Relationships
    customer = relationship("Customer", back_populates="plans")
    plan_items = relationship("PlanItem", back_populates="plan", cascade="all, delete-orphan")
    