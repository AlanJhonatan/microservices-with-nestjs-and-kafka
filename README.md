# Project Overview

This project showcases an e-commerce microservices architecture built with:

* NestJS
* Docker
* Prisma
* Postgres
* Kafka
* RabbitMQ

The project simulates an backend from a online store with functionalities for:

* Inventory management
* Order processing
* Payment handling
* Notification system


### Technologies Used

* **Frontend:** NodeJS, TypeScript, Markdown
* **Backend:** NestJS, Prisma, Kafka, RabbitMQ, Postgres
* **Databases:** Postgres

### Project Structure

- `docker-compose.yml`: Configures the microservices deployment.
- `consumer-inventory`: Kafka consumer for inventory updates.

### Next Steps

- **Inventory Management:** Real-time inventory updates via Kafka topics.
- **Order Processing:** Complete order flow with payment and notification services.
- **Detailed Order Schema:** Comprehensive data model for order details.
- **Flexible Payment Processing:** Support for various payment methods.
- **Notification System:** Send email, SMS, and push notifications.
- Implement unit tests, integration tests, and Swagger documentation.
- Develop a rollback strategy for handling order cancellations and payment denials.
- Integrate analytics tracking for order data.
