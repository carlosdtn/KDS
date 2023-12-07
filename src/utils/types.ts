export interface Order {
  tableNumber: number;
  orderItems: { product: string; quantity: number }[];
  orderStatus: OrderStatus;
  timeOrderTaken: Date;
  timeOrderInProcess: Date;
  timeOrderCompleted: Date;
}

export enum OrderStatus {
  PENDING = "PENDIENTE",
  IN_PROCESS = "EN PROCESO",
  COMPLETED = "COMPLETADO",
  LATE = "TARDE",
  CANCELLED = "CANCELADO",
}

export enum Role {
  CHEF = "CHEF",
  WAITER = "WAITER",
}
