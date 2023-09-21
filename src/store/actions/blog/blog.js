import { BlogActionTypes } from "./blogAction"



export const selectRouteForPreview = (item, preview) => {
  return (dispatch) => {
    dispatch({
      type: BlogActionTypes.SELECT_ROUTE_PREVIEW,
      payload: { item, preview }
    })
  }
}

export const setParamId = (item) => {
  return (dispatch) => {
    dispatch({
      type: BlogActionTypes.SET_PARAMS_ID,
      payload: item
    })
  }
}
export const getBlogItemList = (item) => {
  return (dispatch) => {
    dispatch({
      type: BlogActionTypes.GET_BLOG_ITEM_LIST_SUCCESS,
      payload: item
    })
  }
}


