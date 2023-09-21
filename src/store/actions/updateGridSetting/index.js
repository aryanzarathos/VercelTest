import { createAsyncThunk } from "@reduxjs/toolkit";
import GridSettingRequest from "./gridSettingRequest";
import { UPDATE_GRID_DATA } from "@/store/reducers/websiteTemplate";
import { UPDATE_EDITOR_GRID_DATA } from "@/store/reducers/SiteEditor";
export const updateGridSettings = createAsyncThunk(
  "updateGridSettings",
  async ({ pageId, gridId, body,indexesData }, { dispatch }) => {
    let payload = [];
    dispatch(
      UPDATE_GRID_DATA({
        data: body,
        ...indexesData,
      })
    );
    // dispatch(
    //   UPDATE_EDITOR_GRID_DATA({
    //     data: body,
    //   })
    // );
    await GridSettingRequest.patch(
      GridSettingRequest.gridSettings.updateGridSettings
        .replace("__PAGEID__", pageId)
        .replace("__GRIDID__", gridId),
      body,
      (success) => {
        payload = success.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);
