import { CollectionActionTypes } from "./ActionTypes";
import CollectionRequest from "./Request";

export const getCollectionList = (val) => {
    return dispatch => {
        dispatch({
            type: CollectionActionTypes.GET_COLLECTION_LIST_LOADING,
            payload: []
        });
        CollectionRequest.get(CollectionRequest.endpoint.CollectionListBusiness.replace("__VAL__", val),
            (success) => {
                dispatch({
                    type: CollectionActionTypes.GET_COLLECTION_LIST_SUCCESS,
                    payload: success.data.data
                });
            },
            (error) => {
                dispatch({
                    type: CollectionActionTypes.GET_COLLECTION_LIST_FAIL,
                    payload: error?.response?.data?.message
                });
            }
        )
    }
};

export const resetGetCollectionList = () => {
    return dispatch => {
        dispatch({
            type: CollectionActionTypes.GET_COLLECTION_LIST_RESET,
            payload: {}
        })
    }
}