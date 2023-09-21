import { setCommonError } from "../commonerror";
import InstituteBlogsRequest from "./InstituteBlogsRequest";
import { InstituteBlogsActionTypes } from "./InstituteblogAction"



export const getWebsiteBlogs = (type, value) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_LOADING,
      loading: true,
    })
    InstituteBlogsRequest.get(InstituteBlogsRequest.endpoint.getWebsiteBlogs
      .replace("_TYPE_", type).replace("_VALUE_", value),
      (success) => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_LOADED,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const getAllCategories = (funType, type, value, search, page, Item) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADING,
      loading: true,
    })
    InstituteBlogsRequest.get(InstituteBlogsRequest.endpoint.getWebsiteCategoriesList
      .replace("_TYPE_", type).replace("_VALUE_", value).replace("_SEARCH_", search)
      .replace("__pageValue__", page),
      (success) => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADED,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}
export const getAllLocalApiCategories = (Item) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.LOCALAPI_CATEGORY_DATA,
      payload: Item
    })
  }
}

export const getSingleCategoryData = (Items) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.GET_SINGLE_CATEGORY_LOADED,
      payload: Items
    })
  }
}


export const getWebsiteCategoryBlogsSearch = (type, value, slug, search, Item) => {
  return (dispatch) => {
    InstituteBlogsRequest.get(InstituteBlogsRequest.endpoint.getWebsiteCategoryBlogsSearch
      .replace("_TYPE_", type).replace("_VALUE_", value).replace("_SLUG_", slug).replace("_SEARCH_", search),
      (success) => {
        dispatch({
          type: InstituteBlogsActionTypes.SEARCH_CATEGORY_BLOGS,
          payload: success.data
        })
      },
      error => {
        dispatch(setCommonError(error.message))
      }
    );
  }
}
export const getWebsiteCategory = (Item) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.LOCALAPISEARCH_CATEGORY_BLOGS,
      payload: Item
    })
  }
}

//get Category list
export const getCategoryLists = (id, type) => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADING,
      loading: true,
    })
    InstituteBlogsRequest.get(InstituteBlogsRequest.endpoint.getCategoryLists
      .replace("_Id_", id).replace("_TYPE_", type),
      (success) => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADED,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const getCategoryListReset = () => {
  return (dispatch) => {
    dispatch({
      type: InstituteBlogsActionTypes.GET_CATEGORY_LIST_RESET,
      payload: []
    })
  }
}