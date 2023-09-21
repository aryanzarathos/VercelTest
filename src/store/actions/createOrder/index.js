import { setCommonError } from "../commonerror";
import { showToast } from "../successmessagepopup";
import { CREATEORDERTYPES } from "./actionTypes";
import CreateOrderRequest from "./createOrderRequest";

export const getAllCustomerList = (id) => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.GET_CUSTOMER_LIST_LOADING,
      payload: [],
    })

    CreateOrderRequest.get(CreateOrderRequest.CreateOrderEndpoint.getCustomerList.replace("_BUSINESS_", id),
      (success) => {
        dispatch({
          type: CREATEORDERTYPES.GET_CUSTOMER_LIST_SUCCESS,
          payload: success.data

        })
      },
      error => {
        dispatch(setCommonError(error.message))
      });
  }
}

export const getAllCustomerListReset = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.GET_CUSTOMER_LIST_RESET,
      payload: []
    })
  }
}

export const postCustomerDetails = (data) => {
  return dispatch => {

    dispatch({
      type: CREATEORDERTYPES.POST_CUSTOMER_LOADING,
      payload: [],
    })

    CreateOrderRequest.post(CreateOrderRequest.CreateOrderEndpoint.postCustomer, data,
      (success) => {
        dispatch({
          type: CREATEORDERTYPES.POST_CUSTOMER_SUCCESS,
          payload: success.data
        })
      },
      error => {
        dispatch(setCommonError(error.message))
      });

  }
}

export const postCustomerDetailsReset = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.POST_CUSTOMER_RESET,
      payload: []
    })
  }
}

export const updateCustomerDetails = (data) => {
  return dispatch => {

    dispatch({
      type: CREATEORDERTYPES.PATCH_CUSTOMER_LOADING,
      payload: [],
    })

    CreateOrderRequest.post(CreateOrderRequest.CreateOrderEndpoint.patchCustomer, data,
      (success) => {
        dispatch({
          type: CREATEORDERTYPES.PATCH_CUSTOMER_SUCCESS,
          payload: success.data
        })
      },
      error => {
        dispatch(setCommonError(error.message))
      });

  }
}

export const updateCustomerDetailsReset = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.PATCH_CUSTOMER_RESET,
      payload: []
    })
  }
}

export const postOrderDetails = (data) => {
  return dispatch => {

    dispatch({
      type: CREATEORDERTYPES.POST_ORDER_LOADING,
      payload: [],
    })

    CreateOrderRequest.post(CreateOrderRequest.CreateOrderEndpoint.postOrder, data,
      (success) => {
        dispatch({
          type: CREATEORDERTYPES.POST_ORDER_SUCCESS,
          payload: success.data
        })
        dispatch(showToast("Order Created Successfully!"));
      },
      error => {
        dispatch(setCommonError(error.message))
      });

  }
}

export const postOrderDetailsReset = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.POST_ORDER_RESET,
      payload: []
    })
  }

}
export const saveCardDetails = (data) => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.POST_CARD_SAVE_LOADING,
      payload: [],
    })
    CreateOrderRequest.post(CreateOrderRequest.CreateOrderEndpoint.savecreditcard, data,
      (success) => {
        dispatch({
          type: CREATEORDERTYPES.POST_CARD_SAVE_LOADED,
          payload: success.data
        })
      }
    )
  }
}
export const handleDonation = (data) => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.POST_DONATION_LOADING,
      payload: [],
    })
    CreateOrderRequest.post(CreateOrderRequest.CreateOrderEndpoint.makeDonation, data,
      (success) => {

        if (success.data.result == "Approved") {

          dispatch({
            type: CREATEORDERTYPES.POST_DONATION_SUCCESS,
            payload: success.data
          })
        } else {

          dispatch({
            type: CREATEORDERTYPES.POST_DONATION_ERROR,
            payload: success.data
          })
        }

      }
    )
  }
}

export const openSuccesspopup = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.SUCCESS_POPUP_LOADED,
      payload: []
    })
  }

}
export const openErrorPopup = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.ERROR_POPUP_LOADED,
      payload: []
    })
  }

}
export const resetSuccessPopUp = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.SUCCESS_POPUP_RESET,
      payload: []
    })
  }

}
export const resetErrorPopUp = () => {
  return dispatch => {
    dispatch({
      type: CREATEORDERTYPES.ERROR_POPUP_RESET,
      payload: []
    })
  }

}