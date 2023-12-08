import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OptionsState {
  isOpen: boolean;
}

const initialState: OptionsState = {
  isOpen: false,
};

export const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    toggleOptions: (state, action: PayloadAction<OptionsState>) => {
      const { isOpen } = action.payload;
      state.isOpen = isOpen;
    },
  },
});

export const { toggleOptions } = OptionsSlice.actions;
export default OptionsSlice.reducer;
