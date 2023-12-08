import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/dexie-config";
import { Order, OrderStatus } from "../../utils/types";

const initialState: Order[] = [];

export const getData = createAsyncThunk("order/fetchOrders", async () => {
  const data = await db.getOrders();
  return data;
});

export const saveData = createAsyncThunk(
  "order/saveOrders",
  async (data: Order) => {
    await db.saveOrder(data);
    return data;
  }
);

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
      db.saveOrder(action.payload);
    },
    changeStatus: (
      state,
      action: PayloadAction<{
        tableNumber: number;
        orderStatus: OrderStatus;
      }>
    ) => {
      const index = state.findIndex(
        (order) => order.tableNumber === action.payload.tableNumber
      );
      if (index !== -1) {
        state[index].orderStatus = action.payload.orderStatus;
        db.updateOrder({
          ...state[index],
          orderStatus: action.payload.orderStatus,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { addOrder, changeStatus } = OrderSlice.actions;
export default OrderSlice.reducer;
