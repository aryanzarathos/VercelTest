import { createSlice } from "@reduxjs/toolkit";
import Auth from "../../Classes/Auth";

const initialState = {
  modalState: false,
};
const commonStatesSlice = createSlice({
  name: "commonStates",
  initialState: initialState,
  reducers: {
    MODAL_STATE(state, { payload }) {
      return {
        ...state,
        modalState:payload,
      };
    },
  },
});

export const { MODAL_STATE } = commonStatesSlice.actions;

export default commonStatesSlice.reducer;
