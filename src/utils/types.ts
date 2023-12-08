export interface Order {
  tableNumber: number;
  orderItems: { product: string; quantity: number }[];
  orderStatus: OrderStatus;
  timeOrderTaken: string;
  timeOrderInProcess: string;
  timeOrderCompleted: string;
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

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "process"
  | "completed"
  | "pending"
  | "disabled"
  | "header";

export enum Filter {
  ALL = "TODO",
  PENDING = "PENDIENTE",
  IN_PROCESS = "EN PROCESO",
  COMPLETED = "COMPLETADO",
}
