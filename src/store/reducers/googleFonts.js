import { createSlice } from "@reduxjs/toolkit";
import { getGoogleFonts } from "../actions/googleFonts";

const googleFonts = createSlice({
  name: "googleFonts",
  initialState: [],
  reducers: {
    GET_FONTS_LIST(state, { payload }) {
      state = [];
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getGoogleFonts.fulfilled, (state, { payload }) => {
      return payload;
    })
  },
});

export const { GET_FONTS_LIST } = googleFonts.actions;

export default googleFonts.reducer;
