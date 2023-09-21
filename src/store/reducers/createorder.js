import { CREATEORDERTYPES } from "../actions/createOrder/actionTypes"

const CREATE_ORDER_INITITAL_STATE = {
  postcustomer: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  getcustomers: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  patchcustomer: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  postOrder: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  saveCard: {
    data: [],
    loading: false,
    error: false,
    success: false,
  }
}
const cardInitalState = {
  data: [],
  loading: false,
  error: false,
  success: false,
}

const saveCard = (state = cardInitalState, { type, payload }) => {
  switch (type) {
    case CREATEORDERTYPES.POST_CARD_SAVE_LOADING:
      return {
        ...state,
        cardInitalState: {
          data: [],
          loading: true,
          success: false,
        }
      }

    case CREATEORDERTYPES.POST_CARD_SAVE_LOADED:
      return {
        ...state,
        cardInitalState: {
          data: payload,
          loading: false,
          success: true,
        }
      }

    case CREATEORDERTYPES.POST_CARD_SAVE_ERROR:
      return {
        ...state,
        cardInitalState: {
          data: [],
          loading: false,
          success: false,
          error: true
        }
      }

    case CREATEORDERTYPES.POST_CARD_SAVE_RESET:
      return {
        ...state,
        cardInitalState: {
          data: [],
          loading: false,
          success: false,
          error: false
        }
      }

  }
}

const createOrder = (state = CREATE_ORDER_INITITAL_STATE, { type, payload }) => {
  switch (type) {

    case CREATEORDERTYPES.POST_CUSTOMER_LOADING:
      return {
        ...state,
        postcustomer: {
          ...state.postcustomer,
          data: [],
          loading: true,
          success: false,
        }
      }

    case CREATEORDERTYPES.POST_CUSTOMER_SUCCESS:
      return {
        ...state,
        postcustomer: {
          ...state.postcustomer,
          data: payload,
          loading: false,
          success: true,
        }
      }

    case CREATEORDERTYPES.POST_CUSTOMER_ERROR:
      return {
        ...state,
        postcustomer: {
          ...state.postcustomer,
          data: [],
          loading: false,
          success: false,
          error: true
        }
      }

    case CREATEORDERTYPES.POST_CUSTOMER_RESET:
      return {
        ...state,
        postcustomer: {
          ...state.postcustomer,
          data: [],
          loading: false,
          success: false,
          error: false
        }
      }

    case CREATEORDERTYPES.GET_CUSTOMER_LIST_LOADING:
      return {
        ...state,
        getcustomers: {
          ...state.getcustomers,
          data: [],
          loading: true,
          success: false,
        }
      }

    case CREATEORDERTYPES.GET_CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        getcustomers: {
          ...state.getcustomers,
          data: payload,
          loading: false,
          success: true,
        }
      }

    case CREATEORDERTYPES.GET_CUSTOMER_LIST_ERROR:
      return {
        ...state,
        getcustomers: {
          ...state.getcustomers,
          data: [],
          loading: false,
          success: false,
          error: true
        }
      }

    case CREATEORDERTYPES.GET_CUSTOMER_LIST_RESET:
      return {
        ...state,
        getcustomers: {
          ...state.getcustomers,
          data: [],
          loading: false,
          success: false,
          error: false
        }
      }

    case CREATEORDERTYPES.PATCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        patchcustomer: {
          ...state.patchcustomer,
          data: payload,
          loading: false,
          success: true,
        }
      }

    case CREATEORDERTYPES.PATCH_CUSTOMER_RESET:
      return {
        ...state,
        patchcustomer: {
          ...state.patchcustomer,
          data: [],
          loading: false,
          success: false,
          error: false
        }
      }

    case CREATEORDERTYPES.POST_ORDER_SUCCESS:
      return {
        ...state,
        postOrder: {
          ...state.postOrder,
          data: payload,
          loading: false,
          success: true,
        }
      }

    case CREATEORDERTYPES.POST_ORDER_RESET:
      return {
        ...state,
        postOrder: {
          ...state.postOrder,
          data: [],
          loading: false,
          success: false,
          error: false
        }
      }

    default:
      return state;

  }

}

export default createOrder;