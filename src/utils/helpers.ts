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
export const formattedTime = (date: string | null) => {
  if (!date) return "";
  const time = new Date(date);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};
