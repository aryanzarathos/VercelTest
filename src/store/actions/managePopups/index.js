import { UPDATE_GRID_DATA } from "@/store/reducers/websiteTemplate";
import ManagePopupRequest from "./request"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateManagePopupData = createAsyncThunk(
    "updateManagePopupData",
    async ({ body, pageId, grid, indexesData }, { dispatch }) => {
        let payload = {};
        await ManagePopupRequest.patch(
            ManagePopupRequest.manageRequests.updateManageData
                .replace("__PAGEID__", pageId)
                .replace("__GRIDID__", grid),
            body,
            (success) => {
                payload = success.data.data.data;
                dispatch(UPDATE_GRID_DATA({ data: { data: payload }, ...indexesData }));
            },
            (error) => {
                return error.message;
            }
        );
        return payload;
    }
);

export const updateVideoManagePopup = createAsyncThunk(
    "updateVideoManagePopup",
    async ({ body, pageId, grid, indexesData }, { dispatch }) => {
        let payload = {};
        await ManagePopupRequest.patch(
            ManagePopupRequest.manageRequests.updateManageData
                .replace("__PAGEID__", pageId)
                .replace("__GRIDID__", grid),
            body,
            (success) => {
                payload = body;
                dispatch(UPDATE_GRID_DATA({ data: payload, ...indexesData }));
            },
            (error) => {
                return error.message;
            }
        );
        return payload;
    }
);