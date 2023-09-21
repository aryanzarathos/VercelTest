import { setCommonError } from "../commonerror"
import { AppointmentActionTYpes } from "./ActionTypes"
import AppointmentRequest from "./Request"

export const getAllCollection = (industry, businessId, ownerId, Svalue) => {
  return (dispatch) => {
    dispatch({
      type: AppointmentActionTYpes.GET_COLLECTION_LOADING,
      loading: true,
    })
    AppointmentRequest.get(AppointmentRequest.endpoint.getAllServiceCollection.replace("_Type_", industry).replace("_buesinessid_", businessId).replace("_ownerID_", ownerId).replace("_value_", Svalue),
      (success) => {
        dispatch({
          type: AppointmentActionTYpes.GET_COLLECTION_SUCCESS,
          payload: success.data.data
        })
      },
      (error) => {
        dispatch({
          type: AppointmentActionTYpes.GET_COLLECTION_ERROR
        })
        dispatch(setCommonError(error.message))
      }
    )
  }
}

export const getAllCollectionReset = () => {
  return (dispatch) => {
    dispatch({
      type: AppointmentActionTYpes.GET_COLLECTION_RESET,
      payload: []
    })
  }
}

export const getAllMainCategoryList = (bid, owner, type) => {
  return (dispatch) => {
    dispatch({
      type: AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_LOADING,
      loading: true,
    });
    AppointmentRequest.get(AppointmentRequest.endpoint.getAllMainCategoryList.replace("__bid__", bid).replace("__ownerid__", owner).replace("__type__", type),
      (success) => {
        dispatch({
          type: AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_SUCCESS,
          payload: success.data.data
        })
      },
      (error) => {
        dispatch({
          type: AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    )
  }
}

export const getServicesBycategories = (businessId, ownerId, value, industry, data) => {
  return (dispatch) => {
    dispatch({
      type: AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_LOADING,
      loading: true,
    });
    AppointmentRequest.post(AppointmentRequest.endpoint.getServicesBycategories.replace("_insID_", businessId).replace("_ownerID_", ownerId)
      .replace("_VALUE_", value).replace("__type__", industry),
      data,
      (success) => {
        dispatch({
          type: AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_SUCCESS,
          payload: success.data.data
        })
      },
      (error) => {
        dispatch({
          type: AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_ERROR
        })
        dispatch(setCommonError(error.message))
      }
    )
  }
}