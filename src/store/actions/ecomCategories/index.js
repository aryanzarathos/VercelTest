import { setCommonError } from "../commonerror";
import { CategoryActionTypes } from "./ActionTypes";
import CategoryRequest from "./Request";

export const getAllCategoryList = (insID) => {
    return dispatch => {

        dispatch({
            type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_LOADING,
            payload: [],
        })

        CategoryRequest.get(CategoryRequest.endpoint.getCategoryEcomAdmin.replace("__BUSINESS__", insID),
            (success) => {
                dispatch({
                    type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_LOADED,
                    payload: success.data

                })
            },
            error => {
                dispatch(setCommonError(error.message))

                dispatch({
                    type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_ERROR,
                    payload: []
                })
            });
    }
}


export const resetGetCategoryList = () => {
    return dispatch => {
        dispatch({
            type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_RESET,
            payload: {}
        })
    }
}

export const searchCategoryList = (insID, owner, search) => {
    return dispatch => {

        dispatch({
            type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_LOADING,
            payload: [],
        })

        CategoryRequest.get(CategoryRequest.endpoint.searchCategory.replace("__BUSINESS__", insID).replace("_OWNER_", owner)
            .replace("_SEARCH_", search),
            (success) => {
                dispatch({
                    type: CategoryActionTypes.SEARCH_CATEGORY_LIST_LOADED,
                    payload: success.data

                })
            },
            error => {
                dispatch(setCommonError(error.message))

                dispatch({
                    type: CategoryActionTypes.ECOMM_ADMIN_CATEGORY_LIST_ERROR,
                    payload: []
                })
            });
    }
}