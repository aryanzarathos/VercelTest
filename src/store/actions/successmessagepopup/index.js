import { SUCCESS_MSG_POPUP } from "./actionTypes";
// export const showToast = successmessage => {
//     return dispatch => {
//         dispatch({
//             type: SUCCESS_MSG_POPUP.SET_SUCCESS,
//             payload: successmessage
//         })
//     }
// }

// export const hideToast = () => {
//     return dispatch => {
//         dispatch({
//             type: SUCCESS_MSG_POPUP.HIDE_SUCCESS,
//             payload: ""
//         })
//     }
// }

// export const showSuccessToast = (successmessage) => {
//     return dispatch => {
//         dispatch({
//             type: SUCCESS_MSG_POPUP.SUCCESS_TOAST,
//             payload: successmessage
//         })
//     }
// }

// export const showErrorToast = (successmessage) => {
//     return dispatch => {
//         dispatch({
//             type: SUCCESS_MSG_POPUP.ERROR_TOAST,
//             payload: successmessage
//         })
//     }
// }

// export const showWarningToast = (successmessage) => {
//     return dispatch => {
//         dispatch({
//             type: SUCCESS_MSG_POPUP.WARNING_TOAST,
//             payload: successmessage
//         })
//     }
// }
// showToast   hideTemplateToast
export const showToast = (successmessage, template = "default", toastType = "success") => {
    return dispatch => {
        dispatch({
            type: SUCCESS_MSG_POPUP.SHOW_TEMPLATE_TOAST,
            payload: { message: successmessage, template: template, toastType }
        })
    }
}

export const hideToast = () => {
    return dispatch => {
        dispatch({
            type: SUCCESS_MSG_POPUP.HIDE_TEMPLATE_TOAST,
            payload: ""
        })
    }
}