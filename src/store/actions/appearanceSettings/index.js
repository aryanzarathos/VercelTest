import { createAsyncThunk } from "@reduxjs/toolkit";
import AppearanceSettingRequest from './AppearanceSettingRequest'
export const updateMainContainerAppearance= createAsyncThunk(
  "updateMainContainerAppearance",
  async ({ pageId, mainContainerId,data,mainContainerIndex }, { rejectWithValue }) => {
    let payload = {};
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.updateAppearance
        .replace("__PAGEID__", pageId)
        .replace("__MAINCONTAINERID__", mainContainerId),
      data,
      (success) => {
        payload = { data, mainContainerId, mainContainerIndex };
      },
      (error) => {
        return error.message;
      }
    );
    return payload;
  }
);

export const updateBlockElements = createAsyncThunk(
  "updateBlockElements",
  async ({ pageId, gridId, body }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.updateBlockElements
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

export const createNewSlide = createAsyncThunk(
  "createNewSlide",
  async ({ gridId, body, dynamicUpdate }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.post(
      AppearanceSettingRequest.appearanceSetting.createNewSlide.replace(
        "__GRIDID__",
        gridId
      ),
      body,
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return { data: payload, dynamicUpdate: dynamicUpdate };
  }
);

export const deleteSlide = createAsyncThunk(
  "deleteSlide",
  async ({ gridId, body, dynamicUpdate }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.post(
      AppearanceSettingRequest.appearanceSetting.deleteSlide.replace(
        "__GRIDID__",
        gridId
      ),
      { sliderId: body },
      (success) => {
        payload = body;
      },
      (error) => {
        payload = error.message;
      }
    );
    return { selctedItems: payload, dynamicUpdate: dynamicUpdate };
  }
);

export const updateSlide = createAsyncThunk(
  "updateSlide",
  async ({ slideId,gridId, body,dynamicUpdate }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.updateSlide.replace(
        "__SLIDERID__",
        slideId
      ).replace("__GRIDID__",gridId),
      body,
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return { successData: payload, dynamicUpdate: dynamicUpdate };
  }
);
export const updateSliderGrid = createAsyncThunk(
  "updateSliderGrid",
  async ({ pageId, gridId, body }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.updateSliderGrid
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

export const changeLayout = createAsyncThunk(
  "changeLayout",
  async ({ pageId, gridId, body }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.changeLayout
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

export const updateMainContainerStatic = createAsyncThunk(
  "updateMainContainerStatic",
  async (
    { pageId, mainContainerId, data, mainContainerIndex },
    { rejectWithValue }
  ) => {
    let payload = {};
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.updateAppearance
        .replace("__PAGEID__", pageId)
        .replace("__MAINCONTAINERID__", mainContainerId),
      data,
      (success) => {
        payload = { data, mainContainerId, mainContainerIndex };
      },
      (error) => {
        return error.message;
      }
    );
    return payload;
  }
);

export const updateSection = createAsyncThunk(
  "updateSection",
  async ({ pageId, sectionId, body }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.sectionUpdate
        .replace("__PAGEID__", pageId)
        .replace("__SECTIONID__", sectionId),
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
export const updateSectionGrid = createAsyncThunk(
  "updateSection",
  async ({ pageId, sectionId, body }, { rejectWithValue }) => {
    let payload = [];
    await AppearanceSettingRequest.patch(
      AppearanceSettingRequest.appearanceSetting.section_gridEdit
        .replace("__PAGEID__", pageId)
        .replace("__SECTIONID__", sectionId),
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