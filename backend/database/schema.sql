CREATE DATABASE IF NOT EXISTS urban_planner_db;

USE urban_planner_db;

-- Users table to store all user accounts, including customers, service providers, and admins
CREATE TABLE users (
    user_id BINARY(16) PRIMARY KEY,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NULL,
    user_type ENUM('customer', 'provider', 'admin') NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Customers table for customer specifikc information
CREATE TABLE customers (
    customer_id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL UNIQUE,
    preferences_notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Service Providers table for service provider specific information
CREATE TABLE service_providers (
    provider_id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL UNIQUE,
    business_name VARCHAR(150) NOT NULL,
    owner_name VARCHAR(100),
    contact_email VARCHAR(150) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description TEXT,
    rating DECIMAL(2,1) DEFAULT 0.0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Service Categories table to categorize the different types of services offered by providers
CREATE TABLE service_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    parent_category_id INT NULL,
    category_name VARCHAR(100) NOT NULL,
    slug VARCHAR(120) NOT NULL UNIQUE,
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (parent_category_id) REFERENCES service_categories(category_id) ON DELETE SET NULL,
    UNIQUE (parent_category_id, category_name)
);

-- Provider Services table to store the specific services offered by each provider, linked to categories
CREATE TABLE provider_services (
    service_id BINARY(16) PRIMARY KEY,
    provider_id BINARY(16) NOT NULL,
    category_id INT NOT NULL,
    service_name VARCHAR(150) NOT NULL,
    base_price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    price_unit ENUM('fixed','per_event', 'per_hour', 'per_guest') NOT NULL DEFAULT 'per_event',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (provider_id) REFERENCES service_providers(provider_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES service_categories(category_id) ON DELETE CASCADE
);

-- Plans table to store the event plans created by customers, which can be linked to service providers and their services
CREATE TABLE plans (
    plan_id BINARY(16) PRIMARY KEY,
    customer_id BINARY(16) NULL,
    planner_id BINARY(16) NULL,
    plan_name VARCHAR(150) NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_location VARCHAR(100) NOT NULL,
    event_date DATE,
    plan_type ENUM('example', 'template', 'guided', 'scratch', 'service_search') NOT NULL,
    budget DECIMAL(10,2),
    status ENUM('draft', 'saved', 'completed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (planner_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- Plan Items table to store the individual items (services) that are part of a plan, linked to providers and their services
CREATE TABLE plan_items (
    plan_item_id BINARY(16) PRIMARY KEY,
    plan_id BINARY(16) NOT NULL,
    category_id INT NOT NULL,
    provider_id BINARY(16),
    provider_service_id BINARY(16),
    day_number INT NOT NULL DEFAULT 1,
    sort_order INT NOT NULL DEFAULT 1,
    estimated_quantity INT NOT NULL DEFAULT 1,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (plan_id) REFERENCES plans(plan_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES service_categories(category_id) ON DELETE CASCADE,
    FOREIGN KEY (provider_id) REFERENCES service_providers(provider_id) ON DELETE SET NULL,
    FOREIGN KEY (provider_service_id) REFERENCES provider_services(service_id) ON DELETE SET NULL,

    CONSTRAINT check_day_num CHECK (day_number > 0),
    CONSTRAINT check_sort_order CHECK (sort_order > 0),
    CONSTRAINT check_quanity CHECK (estimated_quantity > 0)
);