import { createSlice } from "@reduxjs/toolkit";
import googlefonts from "../actions/googleFonts/googleFonts.json";

const initialState = {
  updateMainContainerStyles:{
    data:[],
    loading,
    success:false,
    error:false
  }
};
const appearanceSettings = createSlice({
  name: "googleFonts",
  initialState: googlefonts.items,
  reducers: {
    UPDATE_MAIN_CONTAINER_STYLES(state,{payload}){
    }
  },
});

export const { UPDATE_MAIN_CONTAINER_STYLES } = appearanceSettings.actions;

export default appearanceSettings.reducer;
