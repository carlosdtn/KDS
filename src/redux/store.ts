import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order-slice";
import filterReducer from "./features/filter-slice";
import optionsReducer from "./features/options-slice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    filter: filterReducer,
    options: optionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
