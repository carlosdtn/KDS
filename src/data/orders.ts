import { Order, OrderStatus } from "../utils/types";

export const dataOrders: Order[] = [
  {
    tableNumber: 1,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 3 },
      { product: "Ensalada César", quantity: 2 },
      { product: "Pizza Margarita", quantity: 1 },
      { product: "Tiramisú", quantity: 1 },
      { product: "Sushi Variado", quantity: 1 },
      { product: "Miso Soup", quantity: 2 },
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.PENDING,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 3,
    orderItems: [
      { product: "Pizza Margarita", quantity: 1 },
      { product: "Tiramisú", quantity: 1 },
    ],
    orderStatus: OrderStatus.IN_PROCESS,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 5,
    orderItems: [
      { product: "Sushi Variado", quantity: 1 },
      { product: "Miso Soup", quantity: 2 },
    ],
    orderStatus: OrderStatus.COMPLETED,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 7,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.LATE,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 2,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 8,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.LATE,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 9,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 10,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.LATE,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 11,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 12,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.LATE,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
  {
    tableNumber: 13,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: new Date(),
    timeOrderInProcess: new Date(),
    timeOrderCompleted: new Date(),
  },
];
