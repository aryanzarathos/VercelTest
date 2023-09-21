
import { createAsyncThunk } from '@reduxjs/toolkit';
import AltTextRequest from './AltTextRequest'
import { UPDATE_GRID_DATA } from '@/store/reducers/websiteTemplate';
export const updateAltText = createAsyncThunk(
  "updateAltText",
  async ({ apiUrl, body, business, grid, indexesData }, { dispatch }) => {
    let payload = {};
    await AltTextRequest.patch(
      AltTextRequest.altTextSetting.updateAltText
        .replace("__API_URL__", apiUrl)
        .replace("__BUSINESS__", business)
        .replace("__GRIDID__", grid),
      body,
      (success) => {
        payload = success.data.data;
        dispatch(UPDATE_GRID_DATA({ data: { data: payload }, ...indexesData }));
      },
      (error) => {
        return error.message;
      }
    );
    return payload;
  }
);

export const updateGalleryAltText = createAsyncThunk(
  "updateGalleryAltText",
  async ({  body, pageId, grid, indexesData }, { dispatch }) => {
    let payload = {};
    await AltTextRequest.patch(
      AltTextRequest.altTextSetting.updateGalleryAltText
        .replace("__PAGEID__", pageId)
        .replace("__GRIDID__", grid),
      body,
      (success) => {
        
        dispatch(UPDATE_GRID_DATA({ data:body, ...indexesData }));
        payload = success;
      },
      (error) => {
        return error.message;
      }
    );
    return payload;
  }
);
