import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: ""
};

const commonerrorSlice = createSlice({
  name: "commonerror",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.show = true;
      state.message = action.payload;
    },
    hideError: (state) => {
      state.show = false;
      state.message = "";
    }
  }
});

export const { setError, hideError } = commonerrorSlice.actions;
export default commonerrorSlice.reducer;
