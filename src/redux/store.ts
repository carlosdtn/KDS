import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order-slice";
import filterReducer from "./features/filter-slice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
