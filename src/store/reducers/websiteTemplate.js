import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import websiteTemplateRequest from "../actions/websiteTemplate/websiteTemplateRequest";
import {
  activateFontFamily,
  activateTheme,
  addSection,
  deleteMainContainer,
  duplicateMainContainer,
  getTemplateData,
  repositionMainContainer,
} from "../actions/websiteTemplate";
import { editFontSize, createCustomTheme, editCustomTheme, editCustomFonts } from "../actions/siteEditor";
import {
  createNewSlide,
  deleteSlide,
  updateBlockElements,
  updateMainContainerAppearance,
  updateSlide,
} from "../actions/appearanceSettings";
import store from "..";

const initialState = {
  getTemplate: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  deleteMainContainer: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  repositionMainContainer: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  duplicateMainContainer: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  addSection: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  activateTheme: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  activateFontFamily: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
};
const websiteTemplateSlice = createSlice({
  name: "websiteTemplate",
  initialState: initialState,
  reducers: {
    GET_TEMPLATE(state, { payload }) {
      return {
        ...state,
        getTemplate: {
          ...state.getTemplate,
          data: payload,
          success: true,
        },
      };
    },
    UPDATE_BUTTON: (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
      ][payload.sectionIndex]["data"][payload.gridIndex]["data"][
        payload.selectedElementIndex
      ]["style"] = payload.data;
    },
    UPDATE_BUTTON_DATA: (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
      ][payload.sectionIndex]["data"][payload.gridIndex]["data"][
        payload.selectedElementIndex
      ] = payload.data;
    },
    UPDATE_BLOCK_ELEMENTS: (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
      ][payload.sectionIndex]["data"][payload.gridIndex]["data"][
        payload.selectedElementIndex
      ] = payload.data;
    },
    RESET_DUPLICATE_CONTAINER: (state) => {
      state.duplicateMainContainer.loading = false;
      state.duplicateMainContainer.success = false;
      state.duplicateMainContainer.data = [];
      state.duplicateMainContainer.error = false;
      state.repositionMainContainer.loading = false;
      state.repositionMainContainer.success = false;
      state.repositionMainContainer.data = [];
      state.repositionMainContainer.error = false;
    },
    UPDATE_DYNAMIC_THEME: (state, { payload }) => {
      state.getTemplate.data.template.theme.color = payload;
    },
    UPDATE_DYNAMIC_FONTS: (state, { payload }) => {
      state.getTemplate.data.template.draftfontfamily = {
        ...state.getTemplate.data.template.draftfontfamily,
        ...payload
      };
    },
    UPDATE_SLIDER: (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
      ][payload.sectionIndex]["data"][payload.gridIndex] = payload.data;
    },
    RESET_ADD_SECTION: (state) => {
      state.addSection.loading = false;
      state.addSection.success = false;
      state.addSection.data = [];
      state.addSection.error = false;
    },
    CHANGE_LAYOUT(state, { payload }) {
      let data = state.getTemplate.data.data;
      if (payload.type === "RichText") {
        data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
          "data"
        ][payload.sectionIndex] = payload.data;
      } else {
        data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
          "data"
        ][payload.sectionIndex]["data"][payload.gridIndex] = payload.data;
      }
    },
    UPDATE_TOP_HEADER(state, { payload }) {
      if (payload?.pageUpdate) {
        let data = state.getTemplate.data;
        data["hide_topheader"] = payload.hide_topheader;
      } else if (payload.mainContainerUpdate) {
        let data = state.getTemplate.data.upper;
        data[0] = payload.mainContainerData;
      } else {
        let data = state.getTemplate.data.upper;
        data[0]["data"][0]["data"][0]["data"][0]["data"] = {
          ...data[0]["data"][0]["data"][0]["data"][0]["data"],
          ...payload.data,
        };
      }
    },
    UPDATE_HEADER(state, { payload }) {
      if (payload?.pageUpdate) {
        let data = state.getTemplate.data;
        data["hide_header"] = payload.hide_header;
      } else if (payload.mainContainerUpdate) {
        let data = state.getTemplate.data.upper;
        data[1] = payload.mainContainerData;
      } else {
        let data = state.getTemplate.data.upper;
        data[1]["data"][0]["data"][0]["data"][0]["data"] = {
          ...data[1]["data"][0]["data"][0]["data"][0]["data"],
          mainHeader: {
            ...data[1]["data"][0]["data"][0]["data"][0]["data"].mainHeader,
            ...payload.data,
          },
        };
      }
    },
    UPDATE_FOOTER(state, { payload }) {
      if (payload?.pageUpdate) {
        let data = state.getTemplate.data;
        data["hide_footer"] = payload.hide_footer;
      } else if (payload.mainContainerUpdate) {
        let data = state.getTemplate.data.lower;
        data[0] = payload.mainContainerData;
      } else if (payload.updateMenu) {
        let data = state.getTemplate.data.lower;
        data[0]["data"][0]["data"][0]["data"][0]["data"][0] = payload.data;
        data[0]["data"][0]["data"][1]["data"][0]["data"] = payload.data.data;
      } else {
        let data = state.getTemplate.data.lower;

        // data[0]["data"][0]["data"][0]["data"][0]["data"] = {
        //   ...data[1]["data"][0]["data"][0]["data"][0]["data"],
        //   data: {
        //     ...data[1]["data"][0]["data"][0]["data"][0]["data"].data,
        //     ...payload.data,
        //   },
        // };
      }
    },
    UPDATE_COPYRIGHT(state, { payload }) {
      if (payload?.pageUpdate) {
        let data = state.getTemplate.data;
        data["hide_low_footer"] = payload.hide_low_footer;
      } else if (payload.mainContainerUpdate) {
        let data = state.getTemplate.data.lower;
        data[1] = payload.mainContainerData;
      } else {
        let data = state.getTemplate.data.lower;
        data[1]["data"][0]["data"][0]["data"][0]["data"] = {
          ...data[1]["data"][0]["data"][0]["data"][0]["data"],

          ...payload.data,

        };
      }
    },
    UPDATE_GRID_DATA(state, { payload }) {
      let data = state.getTemplate.data.data;
      data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
      ][payload.sectionIndex]["data"][payload.gridIndex] = {
        ...data[payload.mainContainerIndex]["data"][payload.subcontainerIndex][
        "data"
        ][payload.sectionIndex]["data"][payload.gridIndex],
        ...payload.data
      };
    },
    UPDATE_FONTS_ARRAY(state, { payload }) {
      let data = state.getTemplate.data.font_family
      if (!data.includes(payload)) {
        data.push(payload)
      }
      state.getTemplate.data.font_family = data
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTemplateData.pending, (state, action) => {
      state.getTemplate.loading = true;
    }),
      builder.addCase(getTemplateData.fulfilled, (state, action) => {
        state.getTemplate.data = action.payload;
      }),
      builder.addCase(getTemplateData.rejected, (state, action) => {
        state.getTemplate.error = true;
      });

    builder.addCase(deleteMainContainer.pending, (state, action) => {
      state.deleteMainContainer.loading = true;
    }),
      builder.addCase(deleteMainContainer.fulfilled, (state, { payload }) => {
        return {
          ...state,
          deleteMainContainer: {
            ...state.deleteMainContainer,
            data: payload,
            success: true,
            loading: false,
            error: false,
          },
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              data: state.getTemplate.data.data
                .filter((item) => item._id !== payload)
                .map((item, key) => {
                  return {
                    ...item,
                    position: key,
                  };
                }),
            },
            success: true,
          },
        };
      }),
      builder.addCase(deleteMainContainer.rejected, (state, action) => {
        state.deleteMainContainer.error = true;
      });

    builder.addCase(repositionMainContainer.pending, (state, action) => {
      state.repositionMainContainer.loading = true;
    }),
      builder.addCase(
        repositionMainContainer.fulfilled,
        (state, { payload }) => {
          return {
            ...state,
            repositionMainContainer: {
              ...state.repositionMainContainer,
              data: payload,
              success: true,
              loading: false,
              error: false,
            },
            getTemplate: {
              ...state.getTemplate,
              data: {
                ...state.getTemplate.data,
                data: payload.map((item, key) => {
                  return {
                    ...item,
                    position: key,
                  };
                }),
              },
              success: true,
            },
          };
        }
      ),
      builder.addCase(repositionMainContainer.rejected, (state, action) => {
        state.repositionMainContainer.error = true;
      });

    builder.addCase(duplicateMainContainer.pending, (state, action) => {
      state.duplicateMainContainer.loading = true;
    }),
      builder.addCase(
        duplicateMainContainer.fulfilled,
        (state, { payload }) => {
          let data = [...state.getTemplate.data.data];
          data.splice(payload.position, 0, payload);
          return {
            ...state,
            duplicateMainContainer: {
              ...state.duplicateMainContainer,
              data: payload,
              success: true,
              loading: false,
              error: false,
            },
            getTemplate: {
              ...state.getTemplate,
              data: {
                ...state.getTemplate.data,
                data: data,
              },
              success: true,
            },
          };
        }
      ),
      builder.addCase(duplicateMainContainer.rejected, (state, action) => {
        state.duplicateMainContainer.error = true;
      });

    builder.addCase(addSection.pending, (state, action) => {
      state.addSection.loading = true;
    }),
      builder.addCase(addSection.fulfilled, (state, { payload }) => {
        let data = [...state.getTemplate.data.data];
        data.splice(payload.position, 0, payload);
        return {
          ...state,
          addSection: {
            ...state.addSection,
            data: payload,
            success: true,
            loading: false,
            error: false,
          },
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              data: data,
            },
            success: true,
          },
        };
      }),
      builder.addCase(addSection.rejected, (state, action) => {
        state.repositionMainContainer.error = true;
      });

    builder.addCase(activateTheme.pending, (state, action) => {
      state.activateTheme.loading = true;
    }),
      builder.addCase(activateTheme.fulfilled, (state, { payload }) => {
        return {
          ...state,
          activateTheme: {
            ...state.activateTheme,
            data: payload,
            success: true,
            loading: false,
            error: false,
          },
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              template: {
                ...state.getTemplate.data.template,
                theme: payload.data,
              },
            },
            success: true,
          },
        };
      }),
      builder.addCase(createCustomTheme.fulfilled, (state, { payload }) => {
        let data = {
          isDefault: payload.data?.isDefault,
          isDeleted: payload.data?.isDeleted,
          _id: state.getTemplate.data.template.theme._id,
          business: payload.data?.business,
          color: payload.data?.color,
          template: payload.data?.template,
          theme_Name: payload.data?.theme_Name,
          createdAt: payload.data?.createdAt,
          updatedAt: payload.data?.updatedAt,
        };
        return {
          ...state,
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              template: {
                ...state.getTemplate.data.template,
                theme: data,
              },
            },
            success: true,
          },
        };
      }),
      builder.addCase(editCustomTheme.fulfilled, (state, { payload }) => {
        let data = {
          isDefault: payload.data?.isDefault,
          isDeleted: payload.data?.isDeleted,
          _id: state.getTemplate.data.template.theme._id,
          business: payload.data?.business,
          color: payload.data?.color,
          template: payload.data?.template,
          theme_Name: payload.data?.theme_Name,
          createdAt: payload.data?.createdAt,
          updatedAt: payload.data?.updatedAt,
        };
        return {
          ...state,
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              template: {
                ...state.getTemplate.data.template,
                theme: data,
              },
            },
            success: true,
          },
        };
      }),

      builder.addCase(activateTheme.rejected, (state, action) => {
        state.activateTheme.error = true;
        state.activateTheme.loading = false;
      });

    builder.addCase(activateFontFamily.pending, (state, action) => {
      state.activateFontFamily.loading = true;
    }),
      builder.addCase(editFontSize.fulfilled, (state, { payload }) => {
        return {
          ...state,
          activateFontFamily: {
            ...state.activateFontFamily,
            data: payload,
            success: true,
            loading: false,
            error: false,
          },
          getTemplate: {
            ...state.getTemplate,
            data: {
              ...state.getTemplate.data,
              template: {
                ...state.getTemplate.data.template,
                draftfontsizes: payload.draftfontsizes,
              },
            },
            success: true,
          },
        };
      });
    builder.addCase(activateFontFamily.fulfilled, (state, { payload }) => {
      return {
        ...state,
        activateFontFamily: {
          ...state.activateFontFamily,
          data: payload,
          success: true,
          loading: false,
          error: false,
        },
        getTemplate: {
          ...state.getTemplate,
          data: {
            ...state.getTemplate.data,
            template: {
              ...state.getTemplate.data.template,
              draftfontfamily: payload.data,
            },
          },
          success: true,
        },
      };
    }),


      builder.addCase(activateFontFamily.rejected, (state, action) => {
        state.activateFontFamily.error = true;
        state.activateFontFamily.loading = false;
      });

    builder.addCase(
      updateMainContainerAppearance.fulfilled,
      (state, { payload }) => {
        let data = state.getTemplate.data.data;
        data[payload.mainContainerIndex] = payload.data;
      }
    );
    builder.addCase(createNewSlide.fulfilled, (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.dynamicUpdate.mainContainerIndex]["data"][
        payload.dynamicUpdate.subcontainerIndex
      ]["data"][payload.dynamicUpdate.sectionIndex]["data"][
        payload.dynamicUpdate.gridIndex
      ]["data"] = data[payload.dynamicUpdate.mainContainerIndex]["data"][
      payload.dynamicUpdate.subcontainerIndex
      ]["data"][payload.dynamicUpdate.sectionIndex]["data"][
      payload.dynamicUpdate.gridIndex
      ] = payload.data;
    });

    builder.addCase(updateSlide.fulfilled, (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.dynamicUpdate.mainContainerIndex]["data"][
        payload.dynamicUpdate.subcontainerIndex
      ]["data"][payload.dynamicUpdate.sectionIndex]["data"][
        payload.dynamicUpdate.gridIndex
      ]["data"][payload.dynamicUpdate.sliderKey] = payload.successData;
    });
    builder.addCase(deleteSlide.fulfilled, (state, { payload }) => {
      let data = state.getTemplate.data.data;
      data[payload.dynamicUpdate.mainContainerIndex]["data"][
        payload.dynamicUpdate.subcontainerIndex
      ]["data"][payload.dynamicUpdate.sectionIndex]["data"][
        payload.dynamicUpdate.gridIndex
      ]["data"] = data[payload.dynamicUpdate.mainContainerIndex]["data"][
        payload.dynamicUpdate.subcontainerIndex
      ]["data"][payload.dynamicUpdate.sectionIndex]["data"][
        payload.dynamicUpdate.gridIndex
      ]["data"].filter((item) => !payload.selctedItems.includes(item._id));
    });
  },
});

export const {
  GET_TEMPLATE,
  REPOSITION,
  DELETE_SECTION,
  UPDATE_BUTTON,
  UPDATE_BUTTON_DATA,
  UPDATE_BLOCK_ELEMENTS,
  UPDATE_DYNAMIC_THEME,
  UPDATE_DYNAMIC_FONTS,
  UPDATE_TOP_HEADER,
  UPDATE_HEADER,
  UPDATE_COPYRIGHT,
  UPDATE_FOOTER,
  CHANGE_LAYOUT,
  UPDATE_FONTS_ARRAY,
  UPDATE_SLIDER,
  RESET_DUPLICATE_CONTAINER,
  RESET_ADD_SECTION,
  UPDATE_GRID_DATA,
} = websiteTemplateSlice.actions;

export default websiteTemplateSlice.reducer;
