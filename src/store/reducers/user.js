import { createSlice } from "@reduxjs/toolkit";
import Auth from "../../Classes/Auth";

const userSlice = createSlice({
  name: "user",
  initialState: Auth.user() ? Auth.user() : {},
  reducers: {
    UPDATE_USER(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
  },

});

export const { UPDATE_USER } = userSlice.actions;

export default userSlice.reducer;
