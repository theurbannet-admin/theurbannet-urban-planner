from database.db import Base

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Integer,
    String,
    Text,
    func,
)


class ServiceCategory(Base):
    __tablename__ = "service_categories"

    category_id = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    category_name = Column(
        String(100),
        nullable=False,
        unique=True
    )

    description = Column(
        Text,
        nullable=True
    )

    is_active = Column(
        Boolean,
        nullable=False,
        default=True
    )

    created_at = Column(
        DateTime,
        server_default=func.now()
    )

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now()
    )

    #Relationships
    provider_services = relationship("ProviderService", back_populates="category")
    plan_items = relationship("PlanItem", back_populates="category")