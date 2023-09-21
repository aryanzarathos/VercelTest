import { CategoryActionTypes } from "../actions/ecomCategories/ActionTypes";

const CATEGORY_LIST_INITIAL_STATE = {
  adminCategoryList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
};

const ecomCategory = (state = CATEGORY_LIST_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_LOADING:
      return ({
        ...state,
        adminCategoryList: {
          ...state.adminCategoryList,
          data: [],
          loading: true,
          error: false,
          success: false,
        }
      })

    case CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_LOADED:
      return ({
        ...state,
        adminCategoryList: {
          ...state.adminCategoryList,
          data: payload,
          loading: false,
          success: true,
          error: false,
        }
      })

    case CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_ERROR:
      return ({
        ...state,
        adminCategoryList: {
          ...state.adminCategoryList,
          data: [],
          loading: false,
          success: false,
          error: true,
        }
      })
    case CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_RESET:
      return ({
        ...state,
        adminCategoryList: {
          ...state.adminCategoryList,
          data: [],
          loading: false,
          success: false,
          error: false,
        }
      })

    case CategoryActionTypes.SEARCH_CATEGORY_LIST_LOADED:
      return ({
        ...state,
        adminCategoryList: {
          ...state.adminCategoryList,
          data: payload,
          loading: false,
          success: true,
          error: false,
        }
      })

    default:
      return state;
  }
};

export default ecomCategory;
