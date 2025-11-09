export enum ReservationStatus {
  PENDING,
  CONFIRMED,
  CANCELLED,
}

export class Reservation {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  status: ReservationStatus;
  expiresAt: string;
  createdAt: string;
}
