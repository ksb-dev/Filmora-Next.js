import { createSlice } from "@reduxjs/toolkit";

export interface ModeType {
  mode: boolean;
}

const initialState: ModeType = {
  mode: true,
};

export const ModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export default ModeSlice.reducer;

export const { toggleMode } = ModeSlice.actions;
