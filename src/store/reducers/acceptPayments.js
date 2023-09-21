import { Accept_Payment_Types } from "../actions/acceptpayments/actionTypes";

const INITIAL_STATE = {

    getPartialChargesData: {
        loading: false,
        error: false,
        data: [],
        success: false
    },
    postPartialChargesData: {
        loading: false,
        error: false,
        data: [],
        success: false
    }
}

const acceptPayments = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {

        case Accept_Payment_Types.POST_PARTIAL_CHARGES_LOADING:
            return ({
                ...state,
                postPartialChargesData: {
                    ...state.postPartialChargesData,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case Accept_Payment_Types.POST_PARTIAL_CHARGES_LOADED:
            return ({
                ...state,
                postPartialChargesData: {
                    ...state.postPartialChargesData,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case Accept_Payment_Types.POST_PARTIAL_CHARGES_ERROR:
            return ({
                ...state,
                postPartialChargesData: {
                    ...state.postPartialChargesData,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case Accept_Payment_Types.POST_PARTIAL_CHARGES_RESET:
            return ({
                ...state,
                postPartialChargesData: {
                    ...state.postPartialChargesData,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case Accept_Payment_Types.GET_PARTIAL_CHARGES_LOADING:
            return ({
                ...state,
                getPartialChargesData: {
                    ...state.getPartialChargesData,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case Accept_Payment_Types.GET_PARTIAL_CHARGES_LOADED:
            return ({
                ...state,
                getPartialChargesData: {
                    ...state.getPartialChargesData,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case Accept_Payment_Types.GET_PARTIAL_CHARGES_ERROR:
            return ({
                ...state,
                getPartialChargesData: {
                    ...state.getPartialChargesData,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case Accept_Payment_Types.GET_PARTIAL_CHARGES_RESET:
            return ({
                ...state,
                getPartialChargesData: {
                    ...state.getPartialChargesData,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })


        default:
            return state;
    }

}

export default acceptPayments;