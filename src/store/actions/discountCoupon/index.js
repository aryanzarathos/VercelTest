// import { setCommonError } from "../commonerror";
import { CartActionTypes } from "../cartOrder/cartOrderAction";
import { guestAction } from "../../actions/guestCart/guestAction";
import { DISCOUNT_COUPON_TYPES } from "./actionTypes";
import DiscountCouponRequest from "./DiscountCouponRequest";
import { showToast } from "../successmessagepopup";

export const getDiscountCouponList = (business, type, limit, search, page, sort) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.GET_COUPON_LIST_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.getCouponList.replace("__BUSINESSID__", business).replace("__STATUS__", type)
        .replace("__LIMIT__", limit).replace("__SEARCH__", search).replace("__PAGE__", page).replace("__SORT__", sort),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.GET_COUPON_LIST_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const createDiscountCoupon = (data) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.CREATE_COUPON_LOADING,
      payload: true,
    });
    DiscountCouponRequest.post(
      DiscountCouponRequest.couponEndpoint.createCoupon,
      data,
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.CREATE_COUPON_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const editDiscountCoupon = (data) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.EDIT_COUPON_LOADING,
      payload: true,
    });
    DiscountCouponRequest.patch(
      DiscountCouponRequest.couponEndpoint.editCoupon,
      data,
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.EDIT_COUPON_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const resetCreateEditCoupon = () => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.CREATE_COUPON_RESET
    })
  }
}

export const getSignleDiscountCoupon = (_id) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.GET_SINGLE_COUPON_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.getSingleCoupon.replace("", _id),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.GET_SINGLE_COUPON_SUCCESS,
          payload: "",
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const deleteDiscountCoupon = (_id) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.DELETE_COUPON_LOADING,
      payload: true,
    });
    DiscountCouponRequest.delete(
      DiscountCouponRequest.couponEndpoint.deleteCoupon.replace("__ID__", _id),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.DELETE_COUPON_SUCCESS,
          payload: _id,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const deactivateDiscountCoupon = (id, status) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.DEACTIVATE_COUPON_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.deactivateCoupon.replace("__ID__", id).replace("__STATUS__", status),

      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.DEACTIVATE_COUPON_SUCCESS,
          payload: { _id: id, status: status },
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const getProductsList = (business) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.GET_PRODUCT_LIST_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.getProductList.replace("", business),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.GET_PRODUCT_LIST_SUCCESS,
          payload: "",
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const getCategoryList = (business) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.GET_CATEGORY_LIST_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.getCategoryList.replace("", business),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.GET_CATEGORY_LIST_SUCCESS,
          payload: "",
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const checkCouponAvailability = (busId, code) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.CHECK_COUPON_AVAILABILITY_LOADING,
      payload: true,
    });
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.couponAvailable.replace("__BUSID__", busId).replace("__COUPONCODE__", code),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.CHECK_COUPON_AVAILABILITY_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const getCustomerDiscountList = (busId, cartId) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.GET_CUSTOMER_DISCOUNT_LIST_LOADING,
    })
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.getCustomerDiscountList.replace("__BUSID__", busId).replace("__CARTID__", cartId),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.GET_CUSTOMER_DISCOUNT_LIST_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const applyCustomerCoupon = (couponId, cartId, guest) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_LOADING,
    })
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.applyCustomerDiscount.replace("__COUPONID__", couponId).replace("__CARTID__", cartId),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_SUCCESS,
          payload: success.data.data,
        })
        if (success?.data?.data?.data) {
          if (guest) {
            dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data });
            dispatch({
              type: guestAction.POST_GUEST_CART_SUCCESS,
              payload: success.data.data
            })
            dispatch({
              type: CartActionTypes.ADD_TO_CART_POST_LOADED,
              payload: success.data.data
            })
          } else {
            dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data.data });
          }
          // dispatch(showToast("Coupon Applied Successsfully!", "Eblouiussante_Toast"));
        }
        else {
          // console.log(success?.data?.data?.msg, success?.data?.data, "line no 2588");
          dispatch(showToast(success?.data?.data?.msg, "Eblouiussante_Toast"));
        }
        dispatch({
          type: DISCOUNT_COUPON_TYPES.APPLY_CUSTOMER_DISCOUNT_RESET
        })
      },
      (error) => {
        // dispatch(setCommonError(error.message));
      }
    )
  }
}

export const removeAppliedCoupon = (cartId, guest) => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_LOADING,
      payload: []
    })
    DiscountCouponRequest.get(
      DiscountCouponRequest.couponEndpoint.removeDiscountCoupon.replace("__CARTID__", cartId),
      (success) => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_LOADED,
          payload: success.data
        })
        // dispatch(showToast("Coupon Removed Successsfully!", "Eblouiussante_Toast"));
        if (guest) {
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data });
          dispatch({
            type: guestAction.POST_GUEST_CART_SUCCESS,
            payload: success.data.data
          })
          dispatch({
            type: CartActionTypes.ADD_TO_CART_POST_LOADED,
            payload: success.data.data
          })
        } else {
          // console.log(success.data.data, "line no 297")
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data.data });
        }
      },
      error => {
        dispatch({
          type: DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_ERROR,
          payload: []
        })
      }
    )
  }
}

export const removeAppliedCouponReset = () => {
  return (dispatch) => {
    dispatch({
      type: DISCOUNT_COUPON_TYPES.REMOVE_APPLIED_COUPON_RESET,
      payload: []
    })
  }
}