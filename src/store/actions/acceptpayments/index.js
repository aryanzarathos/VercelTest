import { showToast } from "../successmessagepopup";
import acceptPaymentRequest from "./acceptPaymentRequest";
import { Accept_Payment_Types } from "./actionTypes";

export const postPartialChanges = (data) => {
    return dispatch => {
        dispatch({
            type: Accept_Payment_Types.POST_PARTIAL_CHARGES_LOADING,
            loading: true
        })

        acceptPaymentRequest.post(acceptPaymentRequest.acceptPaymentEndpoint.postPartialCharges, data,
            (success) => {
                dispatch({
                    type: Accept_Payment_Types.POST_PARTIAL_CHARGES_LOADED,
                    payload: success.data
                })
                dispatch(showToast("Changed Successfully"));
            },
            error => {
                dispatch(setCommonError(error.message))
            }
        );
    }
}

export const getPartialChanges = (id) => {
    return dispatch => {
        dispatch({
            type: Accept_Payment_Types.GET_PARTIAL_CHARGES_LOADING,
            loading: true
        })

        acceptPaymentRequest.post(acceptPaymentRequest.acceptPaymentEndpoint.getPartialCharges.replace("_business_", id), {},
            (success) => {
                dispatch({
                    type: Accept_Payment_Types.GET_PARTIAL_CHARGES_LOADED,
                    payload: success.data
                })
            },
            error => {
                dispatch(setCommonError(error.message))
            }
        );
    }
}

export const patchPartialChanges = (data) => {
    return dispatch => {
        dispatch({
            type: Accept_Payment_Types.UPDATE_PARTIAL_CHARGES_LOADING,
            loading: true
        })

        acceptPaymentRequest.post(acceptPaymentRequest.acceptPaymentEndpoint.updatetPartialCharges, data,
            (success) => {
                dispatch({
                    type: Accept_Payment_Types.UPDATE_PARTIAL_CHARGES_LOADED,
                    payload: success.data
                })
                dispatch(showToast("Changed Successfully"));
            },
            error => {
                dispatch(setCommonError(error.message))
            }
        );
    }
}