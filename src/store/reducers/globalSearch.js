import { createSlice } from "@reduxjs/toolkit";
import { getGlobalSearchList } from "../actions/globalSearch";


const initialState = {
  getSearchList: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
}
const globalSearchSlice = createSlice({
  name: "globalSearch",
  initialState: initialState,
  reducers: {
    GET_SEARCH_LIST(state, { payload }) {},
  },
  extraReducers: (builder) => {
    builder.addCase(getGlobalSearchList.pending, (state, action) => {
      state.getSearchList.loading = true;
      state.getSearchList.success = false;
      state.getSearchList.error = false;
    }),
      builder.addCase(getGlobalSearchList.fulfilled, (state, { payload }) => {
        state.getSearchList.data = payload;
        state.getSearchList.loading = false;
        state.getSearchList.success = true;
        state.getSearchList.error = false;
      }),
      builder.addCase(getGlobalSearchList.rejected, (state, action) => {
        state.getSearchList.error = true;
        state.getSearchList.loading = false;
        state.getSearchList.success = false;
      });
  },
});

export const { GET_SEARCH_LIST } = globalSearchSlice.actions;

export default globalSearchSlice.reducer;
