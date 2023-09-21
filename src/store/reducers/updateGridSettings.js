import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const initialState = store.getState();
const updateGridSettings = createSlice({
  name: "updateGridSettings",
  initialState: initialState,
  reducers: {
    UPDATE_GRID_SETTINGS_EDITOR(state, { payload }) {
        // console.log(state);
        // console.log(state.editor.selectedIndexAndId.gridData);
      state.editor.selectedIndexAndId.gridData = {
        ...state.editor.selectedIndexAndId.gridData,
        ...payload,
      };
        // console.log(JSON.parse(JSON.stringify(data)));
    },
  
    UPDATE_MAIN_CONTAINER_CONTAINER_GRID(state, { payload }) {
        // console.log(state);
      let data = state.editor.selectedIndexAndId.mainContainerData;
      data["data"][state.editor.selectedIndexAndId.subcontainerIndex]["data"][
        state.editor.selectedIndexAndId.sectionIndex
      ]["data"][state.editor.selectedIndexAndId.gridIndex] = {
        ...data["data"][state.editor.selectedIndexAndId.subcontainerIndex][
          "data"
        ][state.editor.selectedIndexAndId.sectionIndex]["data"][
          state.editor.selectedIndexAndId.gridIndex
        ],
        ...payload,
      };
       // console.log(JSON.parse(JSON.stringify(data)));
    },
    UPDATE_SECTION_GRID(state, { payload }) {
        // console.log(state);
        let data = state.editor.selectedIndexAndId.sectionData
        data["data"][state.editor.selectedIndexAndId.gridIndex] = {
          ...data["data"][state.editor.selectedIndexAndId.gridIndex],
          ...payload
        };
         // console.log(JSON.parse(JSON.stringify(data)));
    },
  },
});

export const {
  UPDATE_GRID_SETTINGS_EDITOR,
  UPDATE_GRID_SETTINGS_TEMPLATE,
  UPDATE_MAIN_CONTAINER_CONTAINER_GRID,
  UPDATE_SECTION_GRID,
} = updateGridSettings.actions;

export default updateGridSettings.reducer;
