import { Order } from "../utils/types";

const DB_NAME = "kds_app";
const STORE_NAMES = {
  ORDERS: "orders",
};

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const target = event.target as IDBOpenDBRequest;
      const db = target.result;

      if (!db.objectStoreNames.contains(STORE_NAMES.ORDERS)) {
        db.createObjectStore(STORE_NAMES.ORDERS, { keyPath: "tableNumber" });
      }
    };

    request.onsuccess = (event) => {
      const target = event.target as IDBOpenDBRequest;
      const db = target.result;
      resolve(db);
    };

    request.onerror = (event) => {
      const target = event.target as IDBOpenDBRequest;
      reject(target.error);
    };
  });
};

export const initializateOrders = async (initialOrders: Order[]) => {
  const db = await openDatabase();
  const transaction = (db as IDBDatabase).transaction(
    STORE_NAMES.ORDERS,
    "readonly"
  );
  const store = transaction.objectStore(STORE_NAMES.ORDERS);
  const ordersExist = await new Promise((resolve) => {
    const request = store.openCursor();
    request.onsuccess = (event) => {
      const target = event.target as IDBRequest<IDBCursorWithValue>;
      const cursor = target.result;
      resolve(!!cursor);
    };
  });

  if (!ordersExist) {
    const transaction = (db as IDBDatabase).transaction(
      STORE_NAMES.ORDERS,
      "readwrite"
    );
    const store = transaction.objectStore(STORE_NAMES.ORDERS);
    initialOrders.forEach((order) => {
      store.add(order);
    });
  }
};

export const saveOrder = async (order: Order) => {
  const serializedOrder = JSON.parse(JSON.stringify(order));
  return openDatabase().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = (db as IDBDatabase).transaction(
        STORE_NAMES.ORDERS,
        "readwrite"
      );
      const store = transaction.objectStore(STORE_NAMES.ORDERS);
      const request = store.add(serializedOrder);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  });
};

export const updateOrder = async (order: Order) => {
  const serializedOrder = JSON.parse(JSON.stringify(order));
  return openDatabase().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = (db as IDBDatabase).transaction(
        STORE_NAMES.ORDERS,
        "readwrite"
      );
      const store = transaction.objectStore(STORE_NAMES.ORDERS);
      const request = store.put(serializedOrder);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  });
};

export const getOrders = async () => {
  return openDatabase().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = (db as IDBDatabase).transaction(
        STORE_NAMES.ORDERS,
        "readonly"
      );
      const store = transaction.objectStore(STORE_NAMES.ORDERS);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  });
};
