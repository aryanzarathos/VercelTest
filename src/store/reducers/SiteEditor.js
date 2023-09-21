import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPagesData,
  getAddPagesList,
  getAllSectionData,
  getSitePages,
  getTopHeaderData,
  getTopHeaderLayoutData,
  getMainHeaderData,
  getNavigationMenuList,
  getFooterData,
  getCopyRightData,
  getProductListData,
  getCategoryPages,
  checkPageSlugAvailability,
  addNewPage,
  addNewEmptyPage,
  getGlobalThemeList,
  createCustomTheme,
  deleteCustomTheme,
  editCustomTheme,
  createCustomFonts,
  deleteCustomFonts,
  editCustomFonts,
  editFontSize,
  editPageData,
  addCategoryCollectionPage,
  deletePages,
  deleteNavPages,
  headerLayout,
  getHeaderStructure,
  publishSite,
  updateMainHeaderData,
  updateFooterData,
  updateTopHeaderData,
} from "../actions/siteEditor";
import { activateFontFamily, activateTheme } from "../actions/websiteTemplate";
import {
  createNewSlide,
  deleteSlide,
  updateMainContainerAppearance,
  updateSlide,
} from "../actions/appearanceSettings";

const initialState = {
  rightSidebar: {
    heading: "",
    RenderComponent: "",
    active: false,
    activeItemList: false,
    innerHeading: "",
    RenderItemList: "",
  },
  leftSidebar: {
    leftSidebarActive: false,
    heading: "",
    IndexLevel1: "",
    RenderLeftComponent: "",
    level1Active: false,
    level1Heading: "",
    level1Data: [],
    level1Component: "",
    level2Active: false,
    IndexLevel2: "",
    level2Data: [],
    level2Component: "",
    level2Heading: "",
  },
  pageDropdownActive: false,
  activePage: "Home",
  selectedMainContainer: {
    index: -1,
    data: {},
  },
  getAllPagesData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  selectedIndexAndId: {
    mainContainerId: "",
    mainContainerIndex: 0,
    mainContainerData: {},
    activeMainContainer: "",
    subcontainerId: "",
    subcontainerIndex: 0,
    subcontainerData: {},
    sectionId: "",
    sectionIndex: 0,
    sectionData: {},
    gridId: "",
    gridIndex: 0,
    gridData: {},
    selectedElementId: "",
    selectedElementIndex: 0,
    selectedElementData: {},
    selectedElementActive: "",
    selectedSectionActive: "",
    buttonActive: false,
    textActive: false,
    sectionActive: false,
    pageId: "",
    addSectionTo: "",
    fieldName: "",
    fieldIdLabel: "",
    sliderValues: {
      currentIndex: "",
      isAutoplay: false,
    },
    arrayofImages: false,
  },
  sectionsData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  topHeaderData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  topHeaderLayouts: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  mainHeaderData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  navigationMenu: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  footerData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  copyRightData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  editPageData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  addCategoryCollectionPageData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  deletePages: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  productListData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getCategoryPagesData: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getSitePages: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  slugAvailabilty: {
    data: "",
    loading: false,
    success: false,
    error: false,
  },
  getAddPagesList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  addNewPage: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  addNewEmptyPage: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getGlobalThemeList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  createCustomTheme: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  editCustomTheme: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  deleteCustomTheme: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  createCustomFonts: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  editCustomFonts: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  deleteCustomFonts: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  editFontSize: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  HeaderStructureLayout: {
    data: {},
    loading: false,
    success: false,
    error: false,
  },
  HeaderStructure: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  publishSite: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    OPEN_RIGHTSIDEBAR(state, { payload }) {
      return {
        ...state,
        rightSidebar: {
          ...state.rightSidebar,
          // heading: payload.heading,
          // RenderComponent: payload.component,
          // active: payload.active,
          // innerHeading: payload.innerHeading,
          // activeItemList: payload.activeItemList,
          ...payload,
        },
        leftSidebar: {
          leftSidebarActive: false,
          heading: "",
          RenderLeftComponent: "",
          level1Active: false,
          level1Heading: "",
          IndexLevel1: "",
          level1Component: "",
          level2Active: false,
          IndexLevel2: "",
          level2Component: "",
          level2Heading: "",
        },
        pageDropdownActive: false,
      };
    },
    OPEN_LEFTSIDEBAR(state, { payload }) {
      return {
        ...state,
        leftSidebar: {
          ...state.leftSidebar,
          // heading: payload.heading,
          // RenderComponent: payload.component,
          // active: payload.active,
          // innerHeading: payload.innerHeading,
          // activeItemList: payload.activeItemList,
          ...payload,
        },
        rightSidebar: {
          heading: "",
          RenderComponent: "",
          active: false,
          activeItemList: false,
          innerHeading: "",
          RenderItemList: "",
        },
        pageDropdownActive: false,
      };
    },
    PAGE_DROPDOWN(state, { payload }) {
      return {
        ...state,
        pageDropdownActive: payload,
        rightSidebar: {
          heading: "",
          RenderComponent: "",
          active: false,
          activeItemList: false,
          innerHeading: "",
          RenderItemList: "",
        },
        leftSidebar: {
          leftSidebarActive: false,
          heading: "",
          RenderLeftComponent: "",
          IndexLevel1: "",
          level1Active: false,
          level1Heading: "",
          level1Component: "",
          level2Active: false,
          IndexLevel2: "",
          level2Component: "",
          level2Heading: "",
        },
      };
    },
    SELECT_OPTION(state, { payload }) {
      return {
        ...state,
        selectedIndexAndId: {
          ...state.selectedIndexAndId,
          ...payload,
        },
      };
    },
    TOP_HEADER(state, { payload }) {
      return {
        ...state,
        topHeaderData: {
          ...state.topHeaderData,
          data: payload,
        },
      };
    },
    MAIN_HEADER(state, { payload }) {
      return {
        ...state,
        mainHeaderData: {
          ...state.mainHeaderData,
          data: payload,
        },
      };
    },
    FOOTER(state, { payload }) {
      return {
        ...state,
        footerData: {
          ...state.footerData,
          data: payload,
        },
      };
    },
    COPY_RIGHT(state, { payload }) {
      return {
        ...state,
        copyRightData: {
          ...state.copyRightData,
          data: payload,
        },
      };
    },
    EDIT_PAGE_DATA(state, { payload }) {
      return {
        ...state,
        editPageData: {
          ...state.editPageData,
          data: payload,
        },
      };
    },
    updateMainContainer(state, { payload }) {
      state.selectedIndexAndId.mainContainerData = payload;
    },
    UPDATE_SLIDER_GRID(state, { payload }) {
      state.selectedIndexAndId.gridData = payload.data;
    },
    UPDATE_SELECTED_ELEMENT(state, { payload }) {
      state.selectedIndexAndId.selectedElementData = payload.elementData;
      state.selectedIndexAndId.gridData.data = payload.gridData;
    },
    UPDATE_SECTION_DATA(state, { payload }) {
      state.selectedIndexAndId.sectionData = payload;
    },
    RESET_DELETE_PAGES_DATA(state, { payload }) {
      return {
        ...state,
        deletePages: {
          data: [],
          loading: false,
          success: false,
          error: false,
        },
      };
    },
    UPDATE_EDITOR_GRID_DATA(state, { payload }) {
      state.selectedIndexAndId.gridData = {
        ...state.selectedIndexAndId.gridData,
        ...payload.data,
      };
    },
    UPDATE_EDITOR_SECTION_GRID_DATA(state, { payload }) {
      state.selectedIndexAndId.sectionData.data[
        state.selectedIndexAndId.gridIndex
      ] = {
        ...state.selectedIndexAndId.sectionData.data[
        state.selectedIndexAndId.gridIndex
        ],
        ...payload.data,
      };
    },
    UPDATE_MAINCONTAINER_GRID_DATA(state, { payload }) {
      if (payload?.updateSection) {
        state.selectedIndexAndId.mainContainerData["data"][
          state.selectedIndexAndId.subcontainerIndex
        ]["data"][state.selectedIndexAndId.sectionIndex] = {
          ...state.selectedIndexAndId.mainContainerData["data"][
          state.selectedIndexAndId.subcontainerIndex
          ]["data"][state.selectedIndexAndId.sectionIndex],
          ...payload.data,
        };
      } else {
        state.selectedIndexAndId.mainContainerData["data"][
          state.selectedIndexAndId.subcontainerIndex
        ]["data"][state.selectedIndexAndId.sectionIndex]["data"][
          state.selectedIndexAndId.gridIndex
        ] = {
          ...state.selectedIndexAndId.mainContainerData["data"][
          state.selectedIndexAndId.subcontainerIndex
          ]["data"][state.selectedIndexAndId.sectionIndex]["data"][
          state.selectedIndexAndId.gridIndex
          ],
          ...payload.data,
        };
      }
    },
    RESET_ADD_PAGE_DATA(state, { payload }) {
      return {
        ...state,
        addNewPage: {
          data: [],
          loading: false,
          success: false,
          error: false,
        },
        addNewEmptyPage: {
          data: [],
          loading: false,
          success: false,
          error: false,
        },
        addCategoryCollectionPageData: {
          data: [],
          loading: false,
          success: false,
          error: false,
        },
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPagesData.pending, (state, action) => {
      state.getAllPagesData.loading = true;
    }),
      builder.addCase(getAllPagesData.fulfilled, (state, { payload }) => {
        state.getAllPagesData.data = payload;
      }),
      builder.addCase(getAllPagesData.rejected, (state, action) => {
        state.getAllPagesData.error = true;
      });

    builder.addCase(getAllSectionData.pending, (state, action) => {
      state.sectionsData.loading = true;
    }),
      builder.addCase(getAllSectionData.fulfilled, (state, { payload }) => {
        state.sectionsData.data = payload;
      }),
      builder.addCase(getAllSectionData.rejected, (state, action) => {
        state.sectionsData.error = true;
      });

    //top-header
    builder.addCase(getTopHeaderData.pending, (state, action) => {
      state.topHeaderData.loading = true;
    }),
      builder.addCase(getTopHeaderData.fulfilled, (state, { payload }) => {
        state.topHeaderData.data = payload;
      }),
      builder.addCase(getTopHeaderData.rejected, (state, action) => {
        state.topHeaderData.error = true;
      });

    //update top header data
    builder.addCase(updateTopHeaderData.pending, (state, action) => {
      state.topHeaderData.loading = true;
    }),
      builder.addCase(updateTopHeaderData.fulfilled, (state, { payload }) => {
        state.topHeaderData.data = payload;
      }),
      builder.addCase(updateTopHeaderData.rejected, (state, action) => {
        state.topHeaderData.error = true;
      });

    //top-header layouts data
    builder.addCase(getTopHeaderLayoutData.pending, (state, action) => {
      state.topHeaderLayouts.loading = true;
    }),
      builder.addCase(getTopHeaderLayoutData.fulfilled, (state, { payload }) => {
        state.topHeaderLayouts.data = payload;
      }),
      builder.addCase(getTopHeaderLayoutData.rejected, (state, action) => {
        state.topHeaderLayouts.error = true;
      });

    //main-header
    builder.addCase(getMainHeaderData.pending, (state, action) => {
      state.mainHeaderData.loading = true;
    }),
      builder.addCase(getMainHeaderData.fulfilled, (state, { payload }) => {
        state.mainHeaderData.data = payload;
      }),
      builder.addCase(getMainHeaderData.rejected, (state, action) => {
        state.mainHeaderData.error = true;
      });

    //update main-header
    builder.addCase(updateMainHeaderData.pending, (state, action) => {
      state.mainHeaderData.loading = true;
    }),
      builder.addCase(updateMainHeaderData.fulfilled, (state, { payload }) => {
        state.mainHeaderData.data = payload;
      }),
      builder.addCase(updateMainHeaderData.rejected, (state, action) => {
        state.mainHeaderData.error = true;
      });

    //nav menu
    builder.addCase(getNavigationMenuList.pending, (state, action) => {
      state.navigationMenu.loading = true;
    }),
      builder.addCase(getNavigationMenuList.fulfilled, (state, { payload }) => {
        state.navigationMenu.data = payload;
      }),
      builder.addCase(getNavigationMenuList.rejected, (state, action) => {
        state.navigationMenu.error = true;
      });

    //footer
    builder.addCase(getFooterData.pending, (state, action) => {
      state.footerData.loading = true;
    }),
      builder.addCase(getFooterData.fulfilled, (state, { payload }) => {
        state.footerData.data = payload;
      }),
      builder.addCase(getFooterData.rejected, (state, action) => {
        state.footerData.error = true;
      });

    builder.addCase(updateFooterData.pending, (state, action) => {
      state.footerData.loading = true;
    }),
      builder.addCase(updateFooterData.fulfilled, (state, { payload }) => {
        state.footerData.data = {
          ...payload?.data?.data,
          Menus: payload?.data?.Menus.map((item) => {
            return {
              block_title: item.block_title,
              nav_head_menu: item?.nav_head_menu[0]._id
            }
          })
        };
      }),
      builder.addCase(updateFooterData.rejected, (state, action) => {
        state.footerData.error = true;
      });

    //copy-right
    builder.addCase(getCopyRightData.pending, (state, action) => {
      state.copyRightData.loading = true;
    }),
      builder.addCase(getCopyRightData.fulfilled, (state, { payload }) => {
        state.copyRightData.data = payload;
      }),
      builder.addCase(getCopyRightData.rejected, (state, action) => {
        state.copyRightData.error = true;
      });

    //get product data
    builder.addCase(getProductListData.pending, (state, action) => {
      state.productListData.loading = true;
    }),
      builder.addCase(getProductListData.fulfilled, (state, { payload }) => {
        state.productListData.data = payload;
      }),
      builder.addCase(getProductListData.rejected, (state, action) => {
        state.productListData.error = true;
      });

    //get category pages data
    builder.addCase(getCategoryPages.pending, (state, action) => {
      state.getCategoryPagesData.loading = true;
    }),
      builder.addCase(getCategoryPages.fulfilled, (state, { payload }) => {
        state.getCategoryPagesData.data = payload;
      }),
      builder.addCase(getCategoryPages.rejected, (state, action) => {
        state.getCategoryPagesData.error = true;
      });

    // page slug availabilty
    builder.addCase(checkPageSlugAvailability.pending, (state, action) => {
      state.slugAvailabilty.loading = true;
    }),
      builder.addCase(
        checkPageSlugAvailability.fulfilled,
        (state, { payload }) => {
          state.slugAvailabilty.data = payload;
        }
      ),
      builder.addCase(checkPageSlugAvailability.rejected, (state, action) => {
        state.slugAvailabilty.error = true;
      });

    builder.addCase(getSitePages.pending, (state, action) => {
      state.getSitePages.loading = true;
    }),
      builder.addCase(getSitePages.fulfilled, (state, { payload }) => {
        state.getSitePages.data = payload;
      }),
      builder.addCase(getSitePages.rejected, (state, action) => {
        state.getSitePages.error = true;
      });

    builder.addCase(getAddPagesList.pending, (state, action) => {
      state.getAddPagesList.loading = true;
      state.getAddPagesList.success = false;
    }),
      builder.addCase(getAddPagesList.fulfilled, (state, { payload }) => {
        state.getAddPagesList.data = payload;
        state.getAddPagesList.success = true;
      }),
      builder.addCase(getAddPagesList.rejected, (state, action) => {
        state.getAddPagesList.error = true;
        state.getAddPagesList.loading = false;
        state.getAddPagesList.success = false;
      });

    builder.addCase(addNewPage.pending, (state, action) => {
      state.addNewPage.loading = true;
      state.addNewPage.success = false;
    }),
      builder.addCase(addNewPage.fulfilled, (state, { payload }) => {
        state.addNewPage.data = payload;
        state.addNewPage.success = true;
      }),
      builder.addCase(addNewPage.rejected, (state, action) => {
        state.addNewPage.error = true;
        state.addNewPage.loading = false;
        state.addNewPage.success = false;
      });

    builder.addCase(addNewEmptyPage.pending, (state, action) => {
      state.addNewEmptyPage.loading = true;
      state.addNewEmptyPage.success = false;
    }),
      builder.addCase(addNewEmptyPage.fulfilled, (state, { payload }) => {
        state.addNewEmptyPage.data = payload;
        state.addNewEmptyPage.success = true;
      }),
      builder.addCase(addNewEmptyPage.rejected, (state, action) => {
        state.addNewEmptyPage.error = true;
        state.addNewEmptyPage.loading = false;
        state.addNewEmptyPage.success = false;
      });

    builder.addCase(getGlobalThemeList.pending, (state, action) => {
      state.getGlobalThemeList.loading = true;
      state.getGlobalThemeList.success = false;
    }),
      builder.addCase(getGlobalThemeList.fulfilled, (state, { payload }) => {
        state.getGlobalThemeList.data = payload;
        state.getGlobalThemeList.success = true;
      }),
      builder.addCase(getGlobalThemeList.rejected, (state, action) => {
        state.getGlobalThemeList.error = true;
        state.getGlobalThemeList.loading = false;
        state.getGlobalThemeList.success = false;
      });

    builder.addCase(createCustomTheme.pending, (state, action) => {
      state.createCustomTheme.loading = true;
      state.createCustomTheme.success = false;
    }),
      builder.addCase(createCustomTheme.fulfilled, (state, { payload }) => {
        state.createCustomTheme.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.createCustomTheme.success = true;
      }),
      builder.addCase(createCustomTheme.rejected, (state, action) => {
        state.createCustomTheme.error = true;
        state.createCustomTheme.loading = false;
        state.createCustomTheme.success = false;
      });

    builder.addCase(activateTheme.fulfilled, (state, { payload }) => {
      state.getGlobalThemeList.data = payload.themeData;
      state.createCustomTheme.success = true;
    });

    builder.addCase(deleteCustomTheme.pending, (state, action) => {
      state.deleteCustomTheme.loading = true;
      state.deleteCustomTheme.success = false;
    }),
      builder.addCase(deleteCustomTheme.fulfilled, (state, { payload }) => {
        state.deleteCustomTheme.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.deleteCustomTheme.success = true;
      }),
      builder.addCase(deleteCustomTheme.rejected, (state, action) => {
        state.deleteCustomTheme.error = true;
        state.deleteCustomTheme.loading = false;
        state.deleteCustomTheme.success = false;
      });
    builder.addCase(editCustomTheme.pending, (state, action) => {
      state.editCustomTheme.loading = true;
      state.editCustomTheme.success = false;
    }),
      builder.addCase(editCustomTheme.fulfilled, (state, { payload }) => {
        state.editCustomTheme.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.editCustomTheme.success = true;
      }),
      builder.addCase(editCustomTheme.rejected, (state, action) => {
        state.editCustomTheme.error = true;
        state.editCustomTheme.loading = false;
        state.editCustomTheme.success = false;
      });

    builder.addCase(createCustomFonts.pending, (state, action) => {
      state.createCustomFonts.loading = true;
      state.createCustomFonts.success = false;
    }),
      builder.addCase(createCustomFonts.fulfilled, (state, { payload }) => {
        state.createCustomFonts.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.createCustomFonts.success = true;
      }),
      builder.addCase(createCustomFonts.rejected, (state, action) => {
        state.createCustomFonts.error = true;
        state.createCustomFonts.loading = false;
        state.createCustomFonts.success = false;
      });

    builder.addCase(activateFontFamily.fulfilled, (state, { payload }) => {
      state.getGlobalThemeList.data = payload.themeData;
    });

    builder.addCase(deleteCustomFonts.pending, (state, action) => {
      state.deleteCustomFonts.loading = true;
      state.deleteCustomFonts.success = false;
    }),
      builder.addCase(deleteCustomFonts.fulfilled, (state, { payload }) => {
        state.deleteCustomFonts.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.deleteCustomFonts.success = true;
      }),
      builder.addCase(deleteCustomFonts.rejected, (state, action) => {
        state.deleteCustomFonts.error = true;
        state.deleteCustomFonts.loading = false;
        state.deleteCustomFonts.success = false;
      });
    builder.addCase(editCustomFonts.pending, (state, action) => {
      state.editCustomFonts.loading = true;
      state.editCustomFonts.success = false;
    }),
      builder.addCase(editCustomFonts.fulfilled, (state, { payload }) => {
        state.editCustomFonts.data = payload;
        state.getGlobalThemeList.data = payload.themeData;
        state.editCustomFonts.success = true;
      }),
      builder.addCase(editCustomFonts.rejected, (state, action) => {
        state.editCustomFonts.error = true;
        state.editCustomFonts.loading = false;
        state.editCustomFonts.success = false;
      });

    builder.addCase(editFontSize.pending, (state, action) => {
      state.editFontSize.loading = true;
      state.editFontSize.success = false;
    }),
      builder.addCase(editFontSize.fulfilled, (state, { payload }) => {
        state.editFontSize.data = payload;
        state.editFontSize.success = true;
      }),
      builder.addCase(createNewSlide.fulfilled, (state, { payload }) => {
        state.selectedIndexAndId.gridData = payload.data;
      }),
      builder.addCase(deleteSlide.fulfilled, (state, { payload }) => {
        state.selectedIndexAndId.gridData.data =
          state.selectedIndexAndId.gridData.data.filter(
            (item) => !payload.selctedItems.includes(item._id)
          );
      }),
      builder.addCase(updateSlide.fulfilled, (state, { payload }) => {
        state.selectedIndexAndId.gridData.data[
          payload?.dynamicUpdate?.sliderKey
        ] = payload?.successData;
      }),
      builder.addCase(editFontSize.rejected, (state, action) => {
        state.editFontSize.error = true;
        state.editFontSize.loading = false;
        state.editFontSize.success = false;
      });
    builder.addCase(
      updateMainContainerAppearance.fulfilled,
      (state, { payload }) => {
        state.selectedIndexAndId.mainContainerData = payload.data;
      }
    );

    builder.addCase(editPageData.fulfilled, (state, { payload }) => {
      if (payload?.type === "Add Page") {
        state.editPageData = {
          ...state.editPageData,
          data: payload?.data,
          success: true,
        };
      } else {
        if (payload?.navigation === "true" || payload?.navigation === true) {
          state.leftSidebar.level1Data = state.leftSidebar.level1Data?.map(
            (item) =>
              item?.pageId === payload?.data?._id
                ? {
                  ...item,
                  page: { ...payload?.data },
                }
                : {
                  ...item,
                  data: item?.data?.map((subItem) =>
                    subItem?.pageId === payload?.data?._id
                      ? {
                        ...subItem,
                        page: { ...payload?.data },
                      }
                      : {
                        ...subItem,
                        data: subItem?.data.map((subsubItem) =>
                          subsubItem?.pageId === payload?.data?._id
                            ? {
                              ...subsubItem,
                              page: { ...payload?.data },
                            }
                            : subsubItem
                        ),
                      }
                  ),
                }
          );
        } else {
          state.leftSidebar.level1Data = {
            ...state.leftSidebar.level1Data,
            pagemodels: state.leftSidebar.level1Data?.pagemodels.map(
              (item, index) =>
                item._id === payload?.data?._id
                  ? {
                    ...payload?.data,
                  }
                  : item
            ),
          };
          state.getSitePages.data.sitePages =
            state.getSitePages.data.sitePages.map((item) => {
              return item._id === state.leftSidebar.level1Data._id
                ? {
                  ...item,
                  pagemodels: item.pagemodels.map((subItem) => {
                    return subItem._id === payload?.data?._id
                      ? {
                        ...payload?.data,
                      }
                      : subItem;
                  }),
                }
                : item;
            });
        }
      }
    });

    builder.addCase(deletePages.fulfilled, (state, { payload }) => {
      state.deletePages = {
        ...state.deletePages,
        data: payload,
        success: true,
      };
      state.leftSidebar.level1Data = {
        ...state.leftSidebar.level1Data,
        pagemodels: state.leftSidebar.level1Data?.pagemodels.filter(
          (item) => item?._id !== payload
        ),
      };
      state.getSitePages.data.sitePages = state.getSitePages.data.sitePages.map(
        (item) => {
          return item._id === state.leftSidebar.level1Data._id
            ? {
              ...item,
              pagemodels: item.pagemodels.filter(
                (subItem) => subItem?._id !== payload
              ),
            }
            : item;
        }
      );
    });

    builder.addCase(deleteNavPages.fulfilled, (state, { payload }) => {
      (state.deletePages = {
        ...state.deletePages,
        data: payload,
        success: true,
      }),
        (state.leftSidebar.level1Data =
          payload?.level === 0
            ? state.leftSidebar.level1Data.filter(
              (item) => item?._id !== payload?._id
            )
            : payload?.level === 1
              ? state.leftSidebar.level1Data.map((item) => {
                return {
                  ...item,
                  data: item?.data?.filter(
                    (item) => item?._id !== payload?._id
                  ),
                };
              })
              : state.leftSidebar.level1Data.map((item) => {
                return {
                  ...item,
                  data: item?.data?.map((item) => {
                    return {
                      ...item,
                      data: item?.data?.filter(
                        (item) => item?._id !== payload?._id
                      ),
                    };
                  }),
                };
              }));
    });

    // add category and collection dynamic pages
    builder.addCase(addCategoryCollectionPage.pending, (state, action) => {
      state.addCategoryCollectionPageData.loading = true;
      state.addCategoryCollectionPageData.success = false;
    }),
      builder.addCase(
        addCategoryCollectionPage.fulfilled,
        (state, { payload }) => {
          state.addCategoryCollectionPageData.data = payload;
          state.addCategoryCollectionPageData.success = true;
          state.addCategoryCollectionPageData.loading = false;
        }
      ),
      builder.addCase(addCategoryCollectionPage.rejected, (state, action) => {
        state.addCategoryCollectionPageData.error = true;
        state.addCategoryCollectionPageData.loading = false;
        state.addCategoryCollectionPageData.success = false;
      });

    //publish site
    builder.addCase(publishSite.pending, (state, action) => {
      state.publishSite.loading = true;
      state.publishSite.success = false;
    }),
      builder.addCase(publishSite.fulfilled, (state, { payload }) => {
        state.publishSite.data = payload;
        state.publishSite.success = true;
        state.publishSite.loading = false;
      }),
      builder.addCase(publishSite.rejected, (state, action) => {
        state.publishSite.error = true;
        state.publishSite.loading = false;
        state.publishSite.success = false;
      });

    builder.addCase(headerLayout.pending, (state, action) => {
      state.HeaderStructureLayout.loading = true;
      state.HeaderStructureLayout.success = false;
    }),
      builder.addCase(headerLayout.fulfilled, (state, { payload }) => {
        if (payload.topHeader) {
          state.topHeaderLayouts.loading = false;
          state.topHeaderLayouts.data = payload;
          state.topHeaderLayouts.data[0].Variation =
            state.topHeaderLayouts.data[0]?.Variation?.map((item) => {
              return item._id === payload?.variationId
                ? {
                  ...item,
                  activated: true,
                }
                : { ...item, activated: false };
            });
          state.HeaderStructureLayout.success = true;
        } else {
          state.HeaderStructureLayout.loading = false;
          state.HeaderStructureLayout.data = payload;
          state.HeaderStructure.data[0].Variation =
            state.HeaderStructure.data[0].Variation.map((item) => {
              return item._id === payload?.variationId
                ? {
                  ...item,
                  activated: true,
                }
                : { ...item, activated: false };
            });
          state.HeaderStructureLayout.success = true;
        }
      }),
      builder.addCase(headerLayout.rejected, (state, action) => {
        state.HeaderStructureLayout.error = true;
        state.HeaderStructureLayout.loading = false;
        state.HeaderStructureLayout.success = false;
      });

    builder.addCase(getHeaderStructure.pending, (state, action) => {
      state.HeaderStructure.loading = true;
      state.HeaderStructure.success = false;
    }),
      builder.addCase(getHeaderStructure.fulfilled, (state, { payload }) => {
        state.HeaderStructure.data = payload;
        state.HeaderStructure.success = true;
      }),
      builder.addCase(getHeaderStructure.rejected, (state, action) => {
        state.HeaderStructure.error = true;
        state.HeaderStructure.loading = false;
        state.HeaderStructure.success = false;
      });
  },
});

export const {
  SELECT_OPTION,
  OPEN_RIGHTSIDEBAR,
  OPEN_LEFTSIDEBAR,
  RESET_ADD_PAGE_DATA,
  PAGE_DROPDOWN,
  TOP_HEADER,
  updateMainContainer,
  MAIN_HEADER,
  FOOTER,
  UPDATE_SELECTED_ELEMENT,
  COPY_RIGHT,
  UPDATE_SLIDER_GRID,
  EDIT_PAGE_DATA,
  UPDATE_EDITOR_GRID_DATA,
  RESET_DELETE_PAGES_DATA,
  UPDATE_EDITOR_SECTION_GRID_DATA,
  UPDATE_MAINCONTAINER_GRID_DATA,
} = editorSlice.actions;

export default editorSlice.reducer;
