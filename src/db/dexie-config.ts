import Dexie from "dexie";
import { Order } from "../utils/types";

const DB_NAME = "kds_app";

class DexieDB extends Dexie {
  orders!: Dexie.Table<Order, number>;

  constructor() {
    super(DB_NAME);
    this.version(1).stores({
      orders:
        "++i,tableNumber, orderItems, orderStatus, timeOrderTaken, timeOrderInProcess, timeOrderCompleted",
    });
  }

  async initializeOrders(initialOrders: Order[]) {
    const count = await this.orders.count();
    console.log("initial orders", initialOrders);
    if (count === 0) {
      await this.orders.bulkAdd(initialOrders);
    }
  }

  async saveOrder(order: Order) {
    const serializedOrder = JSON.parse(JSON.stringify(order));
    return this.orders.add(serializedOrder);
  }

  async updateOrder(order: Order) {
    const serializedOrder = JSON.parse(JSON.stringify(order));
    return this.orders.put(serializedOrder);
  }

  async getOrders() {
    return this.orders.toArray();
  }
}

export const db = new DexieDB();
