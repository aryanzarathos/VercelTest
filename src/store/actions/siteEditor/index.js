import { createAsyncThunk } from "@reduxjs/toolkit";
import siteEditorRequest from "./siteEditorRequest";
import { UPDATE_FOOTER, UPDATE_HEADER, UPDATE_TOP_HEADER } from "@/store/reducers/websiteTemplate";

export const getAllPagesData = createAsyncThunk(
  "getAllPagesData",
  async ({ data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.getAllPages,
      data,
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

export const getAllSectionData = createAsyncThunk(
  "getAllSectionData",
  async (data, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.getSectionData, data,
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

export const updateButtonElement = createAsyncThunk(
  "updateButtonElement",
  async ({ pageId, gridId, body }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.updateButtonElement.replace("__PAGEID__", pageId).replace("__GRIDID__", gridId),
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
)
export const getSitePages = createAsyncThunk(
  "getSitePages",
  async (data, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.getSitePages,
      data,
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

export const getAddPagesList = createAsyncThunk(
  "getAddPagesList",
  async (data, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getAddPageList,
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

//top-header
export const getTopHeaderData = createAsyncThunk(
  "getTopHeaderData",
  async ({ id, templateId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getTopHeaderData.replace("_Business_", id).replace("_Template_", templateId),
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


export const updateTopHeaderData = createAsyncThunk(
  "updateTopHeaderData",
  async ({ headerId, body, pageId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.updateTopHeaderData.replace("_HeaderID_", headerId).replace("__PAGEID__", pageId),
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

//get top header layouts data
export const getTopHeaderLayoutData = createAsyncThunk(
  "getTopHeaderLayoutData",
  async ({ id, templateId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.getTopHeaderLayouts, {},
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

//main-header
export const getMainHeaderData = createAsyncThunk(
  "getMainHeaderData",
  async ({ id, templateId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getMainHeaderData.replace("_Business_", id).replace("_Template_", templateId),
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

export const updateMainHeaderData = createAsyncThunk(
  "updateMainHeaderData",
  async ({ headerId, body, pageId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.updateMainHeaderData.replace("_HeaderID_", headerId).replace("__PAGEID__", pageId),
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

// get navigation menu list
export const getNavigationMenuList = createAsyncThunk(
  "getNavigationMenuList",
  async ({ id, template }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getNavigationMenuList.replace("_Business_", id).replace("__TEMPLATEID__", template),
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

//get footer
export const getFooterData = createAsyncThunk(
  "getFooterData",
  async ({ id }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getFooterData.replace("_Template_", id),
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

export const updateFooterData = createAsyncThunk(
  "updateFooterData",
  async ({ id, body, pageId }, { dispatch }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.updateFooterData.replace("_Footer_", id).replace("__PAGEID__", pageId),
      body,
      (success) => {
        payload = success.data;
        dispatch(UPDATE_FOOTER({ updateMenu: true, data: success.data.data }))
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

//copy-right footer
export const getCopyRightData = createAsyncThunk(
  "getCopyRightData",
  async ({ id }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getCopyRightData.replace("_Template_", id),
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

export const updateCopyRightData = createAsyncThunk(
  "updateCopyRightData",
  async ({ id, body, pageId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.updateCopyRightData.replace("_Template_", id),
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

//get product list
export const getProductListData = createAsyncThunk(
  "getProductListData",
  async ({ subdomain }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getProductListData.replace(
        "_DOMAIN_",
        subdomain
      ),
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

//get category pages 
export const getCategoryPages = createAsyncThunk(
  "getCategoryPages",
  async ({ id, templateId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getCategoryPages.replace("_Business_", id).replace("_Template_", templateId),
      (success) => {
        payload = success.data.data;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

// dynamicPageCreate - add category collection page
export const addCategoryCollectionPage = createAsyncThunk(
  "addCategoryCollectionPage",
  async ({ type, template, theme, business, id, category_level, owner }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.addCategoryCollectionPage.replace("_Type_", type).replace("_ID_", id)
        .replace("__TEMPLATE__", template).replace("__BUSINESS__", business).replace("_Theme_", theme).replace("_Owner_", owner),
      { category_level },
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

//edit page
export const editPageData = createAsyncThunk(
  "editPageData",
  async ({ id, pageId, body, type, navigation }, { rejectWithValue }) => {
    //// console.log(navigation, "index, nav", typeof(navigation));
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.editPageData.replace("_Business_", id).replace("__PAGEID__", pageId),
      body,
      (success) => {
        payload = { data: success.data.data, type: type, navigation }
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

//delete pages
export const deletePages = createAsyncThunk(
  "deletePages",
  async ({ id, pageId, templateId, body }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.delete(
      siteEditorRequest.siteEditor.deletePages.replace("_Business_", id).replace("__PAGEID__", pageId).replace("_Template_", templateId),
      body,
      (success) => {
        payload = pageId;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

//delete navigation pages
export const deleteNavPages = createAsyncThunk(
  "deleteNavPages",
  async ({ id, pageId, body }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.deleteNavPages,
      body,
      (success) => {
        payload = body;
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

// page slug availabilty
export const checkPageSlugAvailability = createAsyncThunk(
  "checkPageSlugAvailability",
  async ({ id, slug, }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.checkPageSlugAvailability.replace("_Template_", id).replace("_Query_", slug),
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



//add-new page
export const addNewPage = createAsyncThunk(
  "addNewPage",
  async ({ pageId, template, business, owner }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.addNewPage
        .replace("__PAGEID__", pageId)
        .replace("__TEMPLATE__", template)
        .replace("__BUSINESS__", business)
        .replace("__OWNER__", owner),
      {},
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

export const addNewEmptyPage = createAsyncThunk(
  "addNewEmptyPage",
  async ({ name, template, owner, business, category_name }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.addNewEmptyPage.replace("__PAGENAME__", name).replace("__TEMPLATE__", template)
        .replace("__BUSINESS__", business).replace("__OWNER__", owner).replace("_CATEGORY_", category_name),
      {},
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

export const getGlobalThemeList = createAsyncThunk(
  "getGlobalThemeList",
  async ({ template }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.get(
      siteEditorRequest.siteEditor.getGlobalThemeList.replace("__TEMPLATE__", template),
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

export const createCustomTheme = createAsyncThunk(
  "createCustomTheme",
  async ({ data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.createCustomTheme,
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

export const deleteCustomTheme = createAsyncThunk(
  "deleteCustomTheme",
  async ({ themeId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.deleteCustomTheme.replace("__ID__", themeId),
      {},
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

export const editCustomTheme = createAsyncThunk(
  "editCustomTheme",
  async ({ themeId, data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.editCustomTheme.replace(
        "__THEMEID__",
        themeId
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


export const createCustomFonts = createAsyncThunk(
  "createCustomFonts",
  async ({ data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.createCustomFonts,
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

export const deleteCustomFonts = createAsyncThunk(
  "deleteCustomFonts",
  async ({ themeId }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.patch(
      siteEditorRequest.siteEditor.deleteCustomFonts.replace("__ID__", themeId),
      {},
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

export const editCustomFonts = createAsyncThunk(
  "editCustomFonts",
  async ({ themeId, data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.editCustomFonts.replace(
        "__THEMEID__",
        themeId
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

export const editFontSize = createAsyncThunk(
  "editFontSize",
  async ({ templateId, data }, { rejectWithValue }) => {
    let payload = [];
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.editFontSize.replace(
        "__TEMPLATEID__",
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

export const headerLayout = createAsyncThunk(
  "headerLayout",
  async ({ data, topHeader }, { dispatch }) => {
    let payload = {};
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.headerLayout,
      data,
      (success) => {
        payload = {
          ...success.data,
          variationId: data?.variationId,
          topHeader,
        };
        if (topHeader) {

          dispatch(UPDATE_TOP_HEADER({ mainContainerUpdate: true, mainContainerData: success.data.data[0] }))
        } else {

          dispatch(UPDATE_HEADER({ mainContainerUpdate: true, mainContainerData: success.data.data[0] }))
        }
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);


export const getHeaderStructure = createAsyncThunk(
  "getHeaderStructure",
  async ({ data }, { rejectWithValue }) => {
    let payload = {}
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.getHeaderStructure,
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

//publish website
export const publishSite = createAsyncThunk(
  "publishSite",
  async ({ data, screenshotData }, { dispatch }) => {
    let payload = {};
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.publishSite,
      data,
      (success) => {
        payload = success.data;
        dispatch(captureScreenshot({ data: screenshotData }))
      },
      (error) => {
        payload = error.message;
      }
    );
    return payload;
  }
);

export const captureScreenshot = createAsyncThunk(
  "publishSite",
  async ({ data }, { dispatch }) => {
    let payload = {};
    await siteEditorRequest.post(
      siteEditorRequest.siteEditor.captureScreenshot,
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
