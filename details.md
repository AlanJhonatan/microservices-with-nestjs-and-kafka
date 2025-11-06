## Docker Compose Structure

services:
  postgres-order:
    image: postgres:15
    
  postgres-inventory:  
    image: postgres:15
    
  mongodb-payment:
    image: mongo:6
    
  mongodb-notification:
    image: mongo:6


## Order Created Flow
  → Inventory (reserva estoque)
  → Payment (processa pagamento)
  → Customer (atualiza histórico)
  → Notification (envia email + push)
  → Analytics (registra métrica)


# Order Schema
  // schema.prisma - Order Service
model Order {
  id        String   @id @default(uuid())
  status    OrderStatus
  customerId String
  total     Float
  items     OrderItem[]
  createdAt DateTime @default(now())
  
  @@map("orders")
}

model OrderItem {
  id       String  @id @default(uuid())
  orderId  String
  order    Order   @relation(fields: [orderId], references: [id])
  productId String
  quantity Int
  price    Float
  
  @@map("order_items")
}

enum OrderStatus {
  PENDING
  CONFIRMED
  CANCELLED
  DELIVERED
}

# Inventory Schema
// schema.prisma - Inventory Service
model Product {
  id       String @id @default(uuid())
  sku      String @unique
  name     String
  price    Float
  stock    Int
  reserved Int    @default(0)
  
  @@map("products")
}

model Reservation {
  id      String @id @default(uuid())
  orderId String
  productId String
  quantity Int
  status  ReservationStatus
  
  @@map("reservations")
}

# Payment Schema
// schema.prisma - Payment Service
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["mongoDb"]
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Payment {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId
  orderId  String
  amount   Float
  status   PaymentStatus
  method   PaymentMethod // cartão, pix, etc
  metadata Json? // dados flexíveis por método
  
  @@map("payments")
}

# Notification Schema
``` js
// schema.prisma - Notification Service  
model Notification {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId
  userId   String
  type     NotificationType // email, sms, push
  template String // nome do template
  data     Json   // dados dinâmicos para o template
  status   DeliveryStatus
  
  @@map("notifications")
}
```