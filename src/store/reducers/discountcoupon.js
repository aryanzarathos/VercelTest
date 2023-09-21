import { DISCOUNT_COUPON_TYPES } from "../actions/discountCoupon/actionTypes";
const DISCOUNT_COUPON_INITIAL_STATE = {
  customerDiscountList: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  applyCustomerCoupon: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  removeCustomerCoupon: {
    data: [],
    loading: false,
    error: false,
    success: false,
  },
  couponAvailable: "",
};

const discountCoupon = (state = DISCOUNT_COUPON_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DISCOUNT_COUPON_TYPES.GET_CUSTOMER_DISCOUNT_LIST_LOADING: {
      return {
        ...state,
        customerDiscountList: {
          ...state.customerDiscountList,
          data: [],
          loading: true,
          success: false,
          error: false
        }
      }
    }
    case DISCOUNT_COUPON_TYPES.GET_CUSTOMER_DISCOUNT_LIST_SUCCESS: {
      return {
        ...state,
        customerDiscountList: {
          ...state.customerDiscountList,
          data: payload,
          loading: false,
          success: true,
          error: false
        }
      }
    }
    case DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_LOADING: {
      return {
        ...state,
        applyCustomerCoupon: {
          ...state.applyCustomerCoupon,
          data: [],
          loading: true,
          error: false,
          success: false,
        },

      }
    }
    case DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_SUCCESS: {
      return {
        ...state,
        applyCustomerCoupon: {
          ...state.applyCustomerCoupon,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },

      }
    }
    case DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_RESET: {
      return {
        ...state,
        applyCustomerCoupon: {
          ...state.applyCustomerCoupon,
          data: [],
          loading: false,
          error: false,
          success: false,
        },

      }
    }
    case DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_LOADING: {
      return {
        ...state,
        removeCustomerCoupon: {
          ...state.removeCustomerCoupon,
          data: [],
          loading: true,
          error: false,
          success: false,
        },

      }
    }
    case DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_LOADED: {
      return {
        ...state,
        removeCustomerCoupon: {
          ...state.removeCustomerCoupon,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },

      }
    }
    case DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_RESET: {
      return {
        ...state,
        removeCustomerCoupon: {
          ...state.removeCustomerCoupon,
          data: [],
          loading: false,
          error: false,
          success: false,
        },

      }
    }
    default:
      return state;
  }
};
export default discountCoupon;