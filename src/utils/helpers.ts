import { OrderStatus } from "./types";

export const getOrderStatusColor = (orderStatus: string) => {
  switch (orderStatus) {
    case OrderStatus.PENDING:
      return "--cd-pending";
    case OrderStatus.IN_PROCESS:
      return "--cd-in-process";
    case OrderStatus.COMPLETED:
      return "--cd-completed";
    case OrderStatus.LATE:
      return "--cd-late";
    case OrderStatus.CANCELLED:
      return "--cd-cancelled";
    default:
      return "--cd-default";
  }
};

export const addZeros = (tableNumber: number) => {
  return tableNumber < 10 ? `0${tableNumber}` : tableNumber;
};

export const formattedTime = (date: Date | null) => {
  if (!date) return "-";
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const time = `${hours}:${minutes}`;
  return time;
};
