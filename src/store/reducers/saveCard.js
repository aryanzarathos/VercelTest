import { CREATEORDERTYPES } from "../actions/createOrder/actionTypes"


const cardInitalState = {
    data: [],
    loading: false,
    error: false,
    success: false,
    successModal: false
}

const saveCard = (state = cardInitalState, { type, payload }) => {
    switch (type) {
        case CREATEORDERTYPES.POST_CARD_SAVE_LOADING:
            return {
                ...state,
                data: [],
                loading: true,
                success: false,
            }

        case CREATEORDERTYPES.POST_CARD_SAVE_LOADED:
            return {
                ...state,
                data: payload,
                loading: false,
                success: true,
            }

        case CREATEORDERTYPES.POST_CARD_SAVE_ERROR:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: true
            }

        case CREATEORDERTYPES.POST_CARD_SAVE_RESET:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: false,
                successModal: false
            }
        case CREATEORDERTYPES.SUCCESS_POPUP_LOADED:
            return {
                ...state,
                successModal: true

            }
        case CREATEORDERTYPES.ERROR_POPUP_LOADED:
            return {
                ...state,
                ErrorPopUp: true

            }
        case CREATEORDERTYPES.SUCCESS_POPUP_RESET:
            return {
                ...state,
                successModal: false

            }
        case CREATEORDERTYPES.ERROR_POPUP_RESET:
            return {
                ...state,
                ErrorPopUp: false

            }

        default:
            return {
                ...state,
                data: [],
                loading: false,
                success: false,
                error: false
            }
    }
}

export default saveCard