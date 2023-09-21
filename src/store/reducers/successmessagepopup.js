import { SUCCESS_MSG_POPUP } from "../actions/successmessagepopup/actionTypes";

const INITIAL_ERROR_STATES = {
    show: false,
    message: "",
    toastType: "success",
    showToast: false,
    templateToastShow: false,
    templateToastMessage: "",
    template: ""
}

const successmessagepopup = (state = INITIAL_ERROR_STATES, { type, payload }) => {

    switch (type) {
        // case SUCCESS_MSG_POPUP.SET_SUCCESS:
        //     return {
        //         show: true,
        //         message: payload,
        //         toastType: "",
        //         showToast: false
        //     }

        // case SUCCESS_MSG_POPUP.HIDE_SUCCESS:
        //     return {
        //         show: false,
        //         message: "",
        //         toastType: "",
        //         showToast: false
        //     }
        // case SUCCESS_MSG_POPUP.SUCCESS_TOAST:
        //     return {
        //         show: false,
        //         message: payload,
        //         toastType: "success",
        //         showToast: true
        //     }
        // case SUCCESS_MSG_POPUP.WARNING_TOAST:
        //     return {
        //         show: false,
        //         message: payload,
        //         toastType: "warning",
        //         showToast: true
        //     }
        // case SUCCESS_MSG_POPUP.ERROR_TOAST:
        //     return {
        //         show: false,
        //         message: payload,
        //         toastType: "error",
        //         showToast: true
        //     }
        case SUCCESS_MSG_POPUP.SHOW_TEMPLATE_TOAST:
            return {
                message: payload.message,
                toastType: payload.toastType,
                showToast: true,
                templateToastMessage: payload.message,
                template: payload.template
            }
        case SUCCESS_MSG_POPUP.HIDE_TEMPLATE_TOAST:
            return {
                ...state,
                message: "",
                toastType: "",
                showToast: false,
            }
        default:
            return state;
    }
}

export default successmessagepopup;