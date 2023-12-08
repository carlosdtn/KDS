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
    timeOrderTaken: "2023-06-01T12:00:00.000Z",
    timeOrderInProcess: "2023-06-01T12:00:00.000Z",
    timeOrderCompleted: "2023-06-01T12:00:00.000Z",
  },
  {
    tableNumber: 3,
    orderItems: [
      { product: "Pizza Margarita", quantity: 1 },
      { product: "Tiramisú", quantity: 1 },
    ],
    orderStatus: OrderStatus.IN_PROCESS,
    timeOrderTaken: "2023-06-01T11:40:00.000Z",
    timeOrderInProcess: "2023-06-01T11:40:00.000Z",
    timeOrderCompleted: "2023-06-01T11:40:00.000Z",
  },
  {
    tableNumber: 5,
    orderItems: [
      { product: "Sushi Variado", quantity: 1 },
      { product: "Miso Soup", quantity: 2 },
    ],
    orderStatus: OrderStatus.COMPLETED,
    timeOrderTaken: "2023-06-01T17:44:00.000Z",
    timeOrderInProcess: "2023-06-01T17:40:00.000Z",
    timeOrderCompleted: "2023-06-01T17:40:00.000Z",
  },
  {
    tableNumber: 7,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.PENDING,
    timeOrderTaken: "2023-06-01T01:41:00.000Z",
    timeOrderInProcess: "2023-06-01T01:41:00.000Z",
    timeOrderCompleted: "2023-06-01T01:41:00.000Z",
  },
  {
    tableNumber: 2,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: "2023-06-01T05:20:00.000Z",
    timeOrderInProcess: "2023-06-01T05:20:00.000Z",
    timeOrderCompleted: "2023-06-01T05:20:00.000Z",
  },
  {
    tableNumber: 8,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.PENDING,
    timeOrderTaken: "2023-06-01T07:10:00.000Z",
    timeOrderInProcess: "2023-06-01T07:10:00.000Z",
    timeOrderCompleted: "2023-06-01T07:10:00.000Z",
  },
  {
    tableNumber: 9,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: "2023-06-01T07:15:00.000Z",
    timeOrderInProcess: "2023-06-01T07:15:00.000Z",
    timeOrderCompleted: "2023-06-01T07:15:00.000Z",
  },
  {
    tableNumber: 10,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.COMPLETED,
    timeOrderTaken: "2023-06-01T07:00:00.000Z",
    timeOrderInProcess: "2023-06-01T07:00:00.000Z",
    timeOrderCompleted: "2023-06-01T07:00:00.000Z",
  },
  {
    tableNumber: 11,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: "2023-06-01T01:11:00.000Z",
    timeOrderInProcess: "2023-06-01T01:11:00.000Z",
    timeOrderCompleted: "2023-06-01T01:11:00.000Z",
  },
  {
    tableNumber: 12,
    orderItems: [
      { product: "Hamburguesa", quantity: 1 },
      { product: "Patatas Fritas", quantity: 2 },
    ],
    orderStatus: OrderStatus.COMPLETED,
    timeOrderTaken: "2023-06-01T16:19:00.000Z",
    timeOrderInProcess: "2023-06-01T16:19:00.000Z",
    timeOrderCompleted: "2023-06-01T16:19:00.000Z",
  },
  {
    tableNumber: 13,
    orderItems: [
      { product: "Pasta Carbonara", quantity: 1 },
      { product: "Ensalada César", quantity: 2 },
    ],
    orderStatus: OrderStatus.CANCELLED,
    timeOrderTaken: "2023-06-01T19:01:00.000Z",
    timeOrderInProcess: "2023-06-01T19:01:00.000Z",
    timeOrderCompleted: "2023-06-01T19:01:00.000Z",
  },
];
