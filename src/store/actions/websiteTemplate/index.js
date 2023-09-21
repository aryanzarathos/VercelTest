import { createAsyncThunk } from "@reduxjs/toolkit";
import websiteTemplateRequest from "./websiteTemplateRequest";

export const getTemplateData = createAsyncThunk(
  "getTemplateData",
  async (data, { rejectWithValue }) => {
    let tempData = [];
    await websiteTemplateRequest.get(
      websiteTemplateRequest.websiteTemplate.getTemplate
        .replace("__SLUG__", data.slug)
        .replace("__TYPE__", data.type)
        .replace("__VALUE__", data.value),
      (success) => {
        tempData = success.data;
      },
      (error) => {
        tempData = error.message;
      }
    );
    return tempData;
  }
);

export const deleteMainContainer = createAsyncThunk(
  "deleteMainContainer",
  async ({ pageId, mainContainerId }, { rejectWithValue }) => {
    let payload = "";
    await websiteTemplateRequest.patch(
      websiteTemplateRequest.websiteTemplate.deleteMainContainer
        .replace("__PAGEID__", pageId)
        .replace("__MAINCONTAINERID__", mainContainerId),
      {},
      (success) => {
        payload = mainContainerId;
      },
      (error) => {
        return error.message;
      }
    );
    return mainContainerId;
  }
);

export const repositionMainContainer = createAsyncThunk(
  "repositionMainContainer",
  async ({ pageId, position, mainContainerId, data }, { rejectWithValue }) => {
    let payload = [];
    await websiteTemplateRequest.patch(
      websiteTemplateRequest.websiteTemplate.repositionMainContainer
        .replace("__PAGEID__", pageId)
        .replace("__MAINCONTAINERID__", mainContainerId)
        .replace("__POSITION__", position),
      {},
      (success) => {
        payload = data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return data;
  }
);

export const duplicateMainContainer = createAsyncThunk(
  "duplicateMainContainer",
  async ({ pageId, position, mainContainerId }, { rejectWithValue }) => {
    let payload = [];
    await websiteTemplateRequest.post(
      websiteTemplateRequest.websiteTemplate.duplicateMainContainer
        .replace("__PAGEID__", pageId)
        .replace("__MAINCONTAINERID__", mainContainerId)
        .replace("__POSITION__", position),
      {},
      (success) => {
        payload = success.data.data[0];
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

export const addSection = createAsyncThunk(
  "addSection",
  async (
    { variationId, templateId, pageId, position, business, owner },
    { rejectWithValue }
  ) => {
    let tempData = [];
    await websiteTemplateRequest.get(
      websiteTemplateRequest.websiteTemplate.addSection
        .replace("__VARIATIONID__", variationId)
        .replace("__TEMPLATEID__", templateId)
        .replace("__PAGEID__", pageId)
        .replace("__POS__", position)
        .replace("__BUSINESSID__", business)
        .replace("__OWNERID__", owner),
      (success) => {
        tempData = success.data[0];
      },
      (error) => {
        tempData = error.message;
      }
    );
    return tempData;
  }
);

export const activateTheme = createAsyncThunk(
  "activateTheme",
  async ({ data ,themeId}, { rejectWithValue }) => {
    let payload = [];
    await websiteTemplateRequest.post(
      websiteTemplateRequest.websiteTemplate.activateTheme.replace("__THEMEID__",themeId),
      data,
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

export const activateFontFamily = createAsyncThunk(
  "activateFontFamily",
  async ({ data, templateId }, { rejectWithValue }) => {
    let payload = [];
    await websiteTemplateRequest.post(
      websiteTemplateRequest.websiteTemplate.activateFontFamily.replace(
        "__THEMEID__",
        templateId
      ),
      data,
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