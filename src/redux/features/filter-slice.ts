import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filter } from "../../utils/types";

interface FilterState {
  filter: Filter;
}

const initialState: FilterState = {
  filter: Filter.ALL,
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
