import { setCommonError } from "../commonerror";
import { showToast } from "../successmessagepopup";
import { INS_BLOG_ACTION_TYPES } from "./actionTypes";
import InstituteBlogsRequest from "./blogsRequest";

//get Blog list
export const getBlogList = (id) => {
  return (dispatch) => {
    dispatch({
      type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADING,
      loading: true,
    })
    InstituteBlogsRequest.get(InstituteBlogsRequest.instituteBlogsEndpoint.getBlogList.replace("_Id_", id),
      (success) => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADED,
          // payload: success && success.data.length ? success.data.reverse() : ""
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const searchBlogs = (id, search) => {
  return (dispatch) => {
    InstituteBlogsRequest.get(InstituteBlogsRequest.instituteBlogsEndpoint.searchBlogs.replace("_Id_", id).replace("_value_", search),
      (success) => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADED,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const sortBlogs = (id, sort) => {
  return (dispatch) => {
    InstituteBlogsRequest.get(InstituteBlogsRequest.instituteBlogsEndpoint.sortBlogs.replace("_Id_", id).replace("_value_", sort),
      (success) => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADED,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const getBlogListReset = () => {
  return (dispatch) => {
    dispatch({
      type: INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_RESET,
      payload: []
    })
  }
}


