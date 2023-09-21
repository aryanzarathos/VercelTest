
import guestRequest from "./guestRequest";
import { showToast } from "../successmessagepopup";
import { guestAction } from "./guestAction";
import { CartActionTypes } from "../cartOrder/cartOrderAction";
import { Getcart } from "../cartOrder/cartOrder";

export const postCartForGuest = (data, type) => {
  return (dispatch) => {
    dispatch({
      type: guestAction.POST_GUEST_CART_LOADING,
      loading: true,
    })

    guestRequest.post(guestRequest.guestEndpoint.postCartGuest, data,
      (success) => {
        dispatch({
          type: guestAction.POST_GUEST_CART_SUCCESS,
          payload: success.data
        })
        dispatch({
          type: CartActionTypes.ADD_TO_CART_POST_LOADED,
          payload: success.data
        })
        if (type === "dynamic") {
          dispatch(
            showToast(
              `${data.quantity} item's added to cart.`
            )
          );
        } else {
          dispatch(showToast("Product added successfully!"));
        }
      },
      error => {
        dispatch({
          type: guestAction.POST_GUEST_CART_ERROR,
          payload: []
        })
        // dispatch(setCommonError(error.message))
      }
    );
  }
}
export const updateShippingPrice = (data, history, activeBillingAddress, shippingAddressId) => {
  return (dispatch) => {
    guestRequest.post(
      guestRequest.guestEndpoint.updateShippingPrice,
      data,
      (success) => {
        dispatch(Getcart(data.user, data.business));
        if (shippingAddressId) {
          history(`/payment/${shippingAddressId}/${activeBillingAddress._id || 'guest'}`);
        } else {
          history("/Payment-Details-WL")
        }
      },
      (error) => {
        dispatch(setCommonError(error.message))
      }
    )
  }
}
export const guestafterlogincart = (user_Uuid, user_id, busniess_id) => {
  let data = {

  }

  return dispatch => {
    dispatch({ type: guestAction.GUEST_CART_UPDATE_AFTER_LOGIN_LOADING, })
    guestRequest.patch(guestRequest.guestEndpoint.guestLoginCartUpdate.replace("_UuidD_", user_Uuid).replace("_USER_", user_id).replace("_BUSNIESS_", busniess_id), data,
      (success) => {
        localStorage.removeItem("Uuid_For_Guest_Login")
        dispatch({
          type: guestAction.GUEST_CART_UPDATE_AFTER_LOGIN_SUCCESS,
          payload: success.data
        })
      },
      (error) => {
        dispatch(setCommonError(error.message))
      })
  }
}

export const clientGuestgetAllSubordersClient = (orderId, business) => {
  return (dispatch) => {
    dispatch({
      type: guestAction.GET_GUEST_ORDER_LIST_LOADING,
      loading: true,
    });
    guestRequest.get(
      guestRequest.guestEndpoint.clientGuestgetAllSubordersClient
        .replace("__ORDERID__", orderId)
        .replace("__BUSINESS__", business),
      (success) => {
        dispatch({
          type: guestAction.GET_GUEST_ORDER_LIST_SUCCESS,
          payload: success.data,
        });
      },
      (error) => {
        dispatch({
          type: guestAction.GET_GUEST_ORDER_LIST_ERROR,
          payload: [],
        });
      }
    );
  };
};

