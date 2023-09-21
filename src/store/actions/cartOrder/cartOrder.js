// import Auth from "../../../Classes/Auth";
// import { setCommonError } from "../../commonerror";
import { showToast } from "../successmessagepopup";
import CartOrderRequest from "./cartOrderRequest"
import { CartActionTypes } from "./cartOrderAction";
import { guestAction } from "../guestCart/guestAction";
import { getWishList } from "../wishlist";
import Storage from "@/Classes/Storage";
import { clientGuestgetAllSubordersClient } from "../guestCart/index";
import { openErrorPopup, openSuccesspopup } from "../createOrder";

export const Postcart = (body, flowType) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART_POST_LOADING });
    CartOrderRequest.post(
      CartOrderRequest.endpoint.addtoCart,
      body,
      (success) => {

        dispatch(showToast(`${1} item's added to cart.`, "Eblouiussante_Toast"))
        dispatch({
          type: CartActionTypes.ADD_TO_CART_POST_LOADED,
          payload: success.data
        })

        if (flowType === "Guest") {
          // window.location.reload()
        }
      },
      (error) => {
        dispatch({ type: CartActionTypes.ADD_TO_CART_POST_ERROR, payload: error });
      }
    )
  };
}

export const Getcart = (userId, business, guest) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADING });
    if (guest) {
      CartOrderRequest.get(
        CartOrderRequest.endpoint.getGuestCart.replace("__userId__", userId).replace("__businessId__", business),
        (success) => {
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data });
          dispatch({
            type: guestAction.POST_GUEST_CART_SUCCESS,
            payload: success.data
          })
          dispatch({
            type: CartActionTypes.ADD_TO_CART_POST_LOADED,
            payload: success.data
          })
        },
        (error) => {
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_ERROR, payload: error });
        }
      )
    } else {
      CartOrderRequest.get(
        CartOrderRequest.endpoint.getaddtoCart.replace("user", userId).replace("business", business),
        (success) => {
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_LOADED, payload: success.data });
        },
        (error) => {
          dispatch({ type: CartActionTypes.ADD_TO_CART_GET_ERROR, payload: error });
        }
      )
    }

  };
}


export const cartOperations = (body, apiHit) => {
  return (dispatch) => {
    // dispatch({ type: CartActionTypes.CUSTOMER_CART_LOADING });
    CartOrderRequest.post(
      CartOrderRequest.endpoint.addProduct,
      body,
      (list) => {
        if (body.status === "add to wishList") {
          dispatch(showToast("1 item Wishlisted.Check out now!", "Eblouiussante_Toast"))
        } else if (body.status === "remove from wishList") {
          dispatch(showToast("1 item remove from Wishlist. Check out now!", "Eblouiussante_Toast"))
        } else {
          dispatch(showToast("Success"))
        }

        if (apiHit) {

          dispatch(getWishList({ userId: body.userId, status: "readWishList" }));
        }
      },
      (error) => {
        dispatch({ type: CartActionTypes.CUSTOMER_CART_FAIL, payload: error });
      }
    )
  };
}

export const readCart = (body) => async (dispatch) => {
  dispatch({ type: CartActionTypes.READ_CART_LOADING });
  CartOrderRequest.post(
    CartOrderRequest.endpoint.addProduct,
    body,
    (list) => {
      dispatch({ type: CartActionTypes.READ_CART_SUCCESS, payload: list.data.data });
    },
    (error) => {
      dispatch({ type: CartActionTypes.READ_CART_FAIL, payload: error });
    }
  )
};

export const cartUpdate = (cart, vari, cond, userid, business, guest) => {
  let body = {

  }
  return (dispatch) => {
    dispatch({ type: CartActionTypes.CART_QUANTITY_LOADING });
    if (guest) {
      CartOrderRequest.patch(
        CartOrderRequest.endpoint.guestQuantityUpdate.replace("__CARTID__", cart).replace("__VAR__", vari).replace("__CON__", cond).replace("__USERID__", userid).replace("__BUSI__", business),
        body,
        (list) => {
          dispatch({ type: CartActionTypes.CART_PATCH_LOADED, payload: list.data });
        },
        (error) => {
          dispatch({ type: CartActionTypes.CUSTOMER_CART_FAIL, payload: error });
        }
      )
    } else {
      CartOrderRequest.patch(

        CartOrderRequest.endpoint.quantityupdate.replace("__CARTID__", cart).replace("__VAR__", vari).replace("__CON__", cond).replace("__USERID__", userid).replace("__BUSI__", business),
        body,
        (list) => {
          dispatch({ type: CartActionTypes.CART_PATCH_LOADED, payload: list.data });
        },
        (error) => {
          dispatch({ type: CartActionTypes.CUSTOMER_CART_FAIL, payload: error });
        }
      )
    }

  };
}

export const getShippingDetails = (busId, pincode, country, state) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.GET_SHIPPING_DETAILS_LOADING,
    })
    CartOrderRequest.get(CartOrderRequest.endpoint.getShippingDetails.replace("__BUSID__", busId).replace("__PINCODE__", pincode).replace("__COUNTRY__", country).replace("__STATE__", state),
      (success) => {
        dispatch({
          type: CartActionTypes.GET_SHIPPING_DETAILS_LOADED,
          payload: JSON.stringify(success.data.data) !== '{}' ? success.data.data : []
        })
        // dispatch(showToast("Shipping order successfully!"));
        // dispatch(setCommonError("Order Status : Delivered"))
      },
      error => {
        /*  dispatch({
           type: CHANGE_ORDER_STATUS_FAIL,
           payload: []
         }) */
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const resetShippingDetails = () => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.GET_SHIPPING_DETAILS_RESET
    })
  }
}
export const changeSelectedAddress = (id, type) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADING,
      payload: []
    });
    CartOrderRequest.get(
      CartOrderRequest.endpoint.updateSelectedAddress.replace("__ID__", id).replace("_TYPE_", type),
      (success) => {
        dispatch({
          type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADED,
          payload: { data: success.data.data, type: type }
        });
      },
      (error) => {
        dispatch({
          type: CartActionTypes.UPDATE_SELECTED_ADDRESS_ERROR,
          payload: error
        });
      }
    )
  }
}
export const deleteBillingAddressDetails = (id) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADING
    });

    CartOrderRequest.patch(CartOrderRequest.endpoint.deleteBillingAddress.replace("__ID__", id), {},
      (success) => {
        dispatch({
          type: CartActionTypes.DELETE_SHIPPING_BILLING_ADDRESS,
          payload: { data: success.data, type: "Billing" }
        });
        dispatch(showToast("Address removed successfully", "Eblouiussante_Toast"))
      },
      (error) => {
        dispatch({
          type: CartActionTypes.UPDATE_SELECTED_ADDRESS_ERROR,
          payload: error
        });
      }
    )
  }
}
export const deleteShippingAddressDetails = (id) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADING
    });

    CartOrderRequest.patch(CartOrderRequest.endpoint.deleteShippingAddress.replace("__ID__", id), {},
      (success) => {
        dispatch({
          type: CartActionTypes.DELETE_SHIPPING_BILLING_ADDRESS,
          payload: { data: success.data, type: "Shipping" }
        });
        dispatch(showToast("Address removed successfully", "Eblouiussante_Toast"))
      },
      (error) => {
        dispatch({
          type: CartActionTypes.UPDATE_SELECTED_ADDRESS_ERROR,
          payload: error
        });
      }
    )
  }
}
export const getCustomerAddressList = (id, guest) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.GET_ADDRESS_LIST_LOADING,
      payload: []
    });
    if (guest) {
      let payload = {
        Shipingaddress: Storage.alive("userShippingAddress") ? [Storage.getJson("userShippingAddress")] : [],
        Billingrderaddress: Storage.alive("userBillingAddress") ? [Storage.getJson("userBillingAddress")] : []
      }
      dispatch({
        type: CartActionTypes.GET_ADDRESS_LIST_LOADED,
        payload: payload
      });
    } else {
      CartOrderRequest.get(
        CartOrderRequest.endpoint.getShippingBillingAddress.replace("__USERID__", id),
        (success) => {
          dispatch({
            type: CartActionTypes.GET_ADDRESS_LIST_LOADED,
            payload: success.data.data
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.GET_ADDRESS_LIST_ERROR,
            payload: error
          });
        }
      )

    }
  }
}
export const postCustomerShippingAddress = (data, guest) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.ADDRESS_OPERATIONS_LOADING
    });
    if (guest) {
      dispatch({
        type: CartActionTypes.POST_SHIPPING_BILLING_ADDRESS,
        payload: { data: data, type: "Shipping" }
      });
    } else {
      CartOrderRequest.post(CartOrderRequest.endpoint.postShippingAddress,
        data,
        (success) => {
          dispatch({
            type: CartActionTypes.POST_SHIPPING_BILLING_ADDRESS,
            payload: { data: success.data.data, type: "Shipping" }
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.ADDRESS_OPERATIONS_FAIL,
            payload: error
          });
        }
      )
    }
  }
}

export const postCustomerBillingAddress = (data, guest) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.ADDRESS_OPERATIONS_LOADING
    });
    if (guest) {
      dispatch({
        type: CartActionTypes.POST_SHIPPING_BILLING_ADDRESS,
        payload: { data: data, type: "Billing" }
      });
    } else {
      CartOrderRequest.post(CartOrderRequest.endpoint.postBillingAddress,
        data,
        (success) => {
          dispatch({
            type: CartActionTypes.POST_SHIPPING_BILLING_ADDRESS,
            payload: { data: success.data, type: "Billing" }
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.ADDRESS_OPERATIONS_FAIL,
            payload: error
          });
        }
      )
    }
  }
}

export const updateClientOrderSuborderPage = (suborder, order, action, status, mainPage, limit, skip) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.CANCEL_CLIENT_ORDER_SUBORDER_LOADING,
    })
    CartOrderRequest.post(
      CartOrderRequest.endpoint.updateClientOrderSuborder.replace("__SUBORDERID__", suborder).replace("__ORDERID__", order).replace("__ACTION__", action).replace("__STATUS__", status).replace("__MAIN__", mainPage).replace("__LIMIT__", limit).replace("__SKIP__", skip),
      {},
      (success) => {
        dispatch({
          type: CartActionTypes.CANCEL_CLIENT_ORDER_SUBORDER_SUCCESS,
          payload: success.data
        })
      }

    )
  }
}

export const getClientAllSuborders = (business, userid, limit, skip, page) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.GET_ALL_ORDERS_CLIENT_LOADING });
    if (page) {
      CartOrderRequest.get(
        CartOrderRequest.endpoint.getClientSubordersPagination.replace("__BUSINESSID__", business).replace("__USERID__", userid).replace("__LIMIT__", limit).replace("__SKIP__", skip),
        (success) => {
          dispatch({
            type: CartActionTypes.GET_ALL_ORDERS_CLIENT_SUCCESS,
            payload: success.data
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.GET_ALL_ORDERS_CLIENT_ERROR,
            payload: error
          });
        }
      )
    } else {
      CartOrderRequest.get(
        CartOrderRequest.endpoint.getClientSuborders.replace("__BUSINESSID__", business).replace("__USERID__", userid),
        (success) => {
          dispatch({
            type: CartActionTypes.GET_ALL_ORDERS_CLIENT_SUCCESS,
            payload: success.data
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.GET_ALL_ORDERS_CLIENT_ERROR,
            payload: error
          });
        }
      )
    }
  }
};

export const updateShippingAddressDetails = (id, data, guest) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADING
    });
    if (guest) {
      dispatch({
        type: CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS,
        payload: { data: data, type: "Shipping" }
      });
    } else {
      CartOrderRequest.patch(CartOrderRequest.endpoint.patchShippingAddress.replace("__ID__", id), data,
        (success) => {
          dispatch({
            type: CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS,
            payload: { data: success.data, type: "Shipping" }
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.UPDATE_SELECTED_ADDRESS_ERROR,
            payload: error
          });
        }
      )
    }

  }
}

export const updateBillingAddressDetails = (id, data, guest) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADING
    });
    if (guest) {
      dispatch({
        type: CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS,
        payload: { data: data, type: "Billing" }
      });
    } else {
      CartOrderRequest.patch(CartOrderRequest.endpoint.patchBillingAddress.replace("__ID__", id), data,
        (success) => {
          dispatch({
            type: CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS,
            payload: { data: success.data, type: "Billing" }
          });
        },
        (error) => {
          dispatch({
            type: CartActionTypes.UPDATE_SELECTED_ADDRESS_ERROR,
            payload: error
          });
        }
      )
    }

  }
}

export const updateCustomerStatus = (SubOrderId, data) => async (dispatch) => {
  dispatch({ type: CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_LOADING });
  CartOrderRequest.patch(
    CartOrderRequest.endpoint.updateCustomerOrderStatus.replace("suborderId", SubOrderId), data,
    (success) => {
      dispatch({
        type: CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_SUCCESS,
        payload: success.data
      });
    },
    (error) => {
    }
  )
};

export const resetCancelUpdateStatus = () => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_RESET,
      payload: []
    })
  }
}

export const PostcartReset = (body) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART_POST_RESET });
  };
}

export const createOrderFromCart = (body, history, guest, businessName, business) => async (dispatch) => {
  dispatch({ type: CartActionTypes.CREATE_CART_ORDER_LOADING });

  CartOrderRequest.post(
    CartOrderRequest.endpoint.createOrderFromCart,
    body,
    (resp) => {

      CartOrderRequest.get(CartOrderRequest.endpoint.updateDiscountCoupon.replace("_COUPON_", body?.couponCode)
        .replace("__BUSINESSID__", body?.business).replace("__USERID__", body?.user),
        (success) => {
          //// console.log(success);
        },
        error => {
          //// console.log(error);
        }
      )

      if (guest) {
        localStorage.removeItem("userShippingAddress")
        localStorage.removeItem("billingAddressSame")
        localStorage.removeItem("userBillingAddress")
        localStorage.removeItem("guestEmail")
        Storage.remove("Uuid_For_Guest_Login")
      }

      if (body?.gateway === "usaepay") {
        dispatch(openSuccesspopup());
      }
      if (resp?.data?.data?._id) {
        if (body?.gateway === "Mojo") {
          window.location.href = resp?.data?.data?.mojo_payment_url
        }
        if (body.order_payment_method === "cashOnDelivery") {
          if (body.partialCod === true) {
            function loadScript(src) {
              return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                  resolve(true);
                };
                script.onerror = () => {
                  resolve(false);
                };
                document.body.appendChild(script);
              });
            }
            const openRazorPay = async () => {
              const response = await loadScript(
                process.env.REACT_APP_RAZOR_PAY_LOAD_SCRIPT
              );
              if (!response) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
              }
              if (resp.status === 200 && resp.data.data) {
                const options = {
                  key: business?.has_razorpay ? business.razorpay_api_key : process.env.REACT_APP_RAZOR_PAY_KEY,
                  amount: resp.data.data.orderTotal, //total
                  name: businessName, //business name
                  order_id: resp.data.data.razorpay_order_id,
                  image: business.business_logo?.src ? business.business_logo?.src : "https://webneed.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebneed-logo-old.3b97575c.png&w=640&q=75", //business logo
                  /*      "theme": {
                         "color": "#3399cc"
                       }, */
                  handler: async function (response) {
                    const data = {
                      orderCreationId: resp.data.data.razorpay_order_id,
                      razorpayPaymentId: response.razorpay_payment_id,
                      razorpayOrderId: response.razorpay_order_id,
                      razorpaySignature: response.razorpay_signature,
                    };
                    CartOrderRequest.post(
                      CartOrderRequest.endpoint.paymentcallback,
                      data,
                      (resp3) => {
                        if (
                          resp3.data.domainStatus === "Domain Bought" &&
                          resp3.data.paymentStatus === "Payment successfull"
                        ) {
                          history(`/order-successfull/${resp3.data}/${resp.data.data.razorpay_order_id}`);
                        } else {
                          history({
                            pathname: `/order-successfull/${resp3.data?.success}/${resp.data.data.razorpay_order_id}`,
                            state: { detail: true },
                          });
                        }
                      }
                    )
                  },
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
              }
            };

            openRazorPay();
          }
          else

            history(`/order-successfull/success/${resp.data.data.order_id}`);
        }
        else {
          if (resp.data.data.razorpay_order_id) {

            function loadScript(src) {
              return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                  resolve(true);
                };
                script.onerror = () => {
                  resolve(false);
                };
                document.body.appendChild(script);
              });
            }
            const openRazorPay = async () => {
              const response = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
              );
              if (!response) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
              }
              if (resp.status === 200 && resp.data.data) {
                const options = {
                  key: business?.has_razorpay ? business.razorpay_api_key : process.env.REACT_APP_RAZOR_PAY_KEY,
                  amount: resp.data.data.orderTotal, //total
                  name: businessName, //business name
                  order_id: resp.data.data.razorpay_order_id,
                  image: business.business_logo?.src ? business.business_logo?.src : "https://webneed.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebneed-logo-old.3b97575c.png&w=640&q=75", //business logo
                  /*      "theme": {
                         "color": "#3399cc"
                       }, */
                  handler: async function (response) {
                    const data = {
                      orderCreationId: resp.data.data.razorpay_order_id,
                      razorpayPaymentId: response.razorpay_payment_id,
                      razorpayOrderId: response.razorpay_order_id,
                      razorpaySignature: response.razorpay_signature,
                    };
                    CartOrderRequest.post(
                      CartOrderRequest.endpoint.paymentcallback,
                      data,
                      (resp3) => {
                        if (
                          resp3.data.domainStatus === "Domain Bought" &&
                          resp3.data.paymentStatus === "Payment successfull"
                        ) {
                          history(`/order-successfull/${resp3.data}/${resp.data.data.razorpay_order_id}`);
                        } else {
                          history({
                            pathname: `/order-successfull/${resp3.data?.success}/${resp.data.data.razorpay_order_id}`,
                            state: { detail: true },
                          });
                        }
                      }
                    )
                  },
                };
                const paymentObject = typeof window !== "undefined" && window.Razorpay(options);
                paymentObject.open();
              }
            };

            openRazorPay();
          }
        }
        dispatch({ type: CartActionTypes.CREATE_CART_ORDER_SUCCESS, payload: resp.data.data });
      } else {

        if (body?.gateway === "usaepay") {

          dispatch(openErrorPopup());
        }
      }

    },
    (error) => {
      dispatch({ type: CartActionTypes.CREATE_CART_ORDER_FAIL, payload: error });
    }
  )
};

export const cartToWishlist = (body) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.CUSTOMER_CART_LOADING });
    CartOrderRequest.get(
      CartOrderRequest.endpoint.cartToWishlist
        .replace('__VARIATION__', body.variation)
        .replace('__USER__', body.user)
        .replace('__BUSINESS__', body.business),
      (success) => {
        dispatch({ type: CartActionTypes.CUSTOMER_CART_SUCCESS, payload: success.data.data });
        dispatch(showToast("1 item(s) moved to wishlist.", "Eblouiussante_Toast"));
      },
      (error) => {
        dispatch({ type: CartActionTypes.CUSTOMER_CART_FAIL, payload: error });
      }
    )
  };
}


// order detail function

export const getClientSingleOrder = (orderId, business) => {
  return dispatch => {
    dispatch({
      type: CartActionTypes.GET_SINGLE_ORDER_CLIENT_LOADING,
      payload: []
    })
    CartOrderRequest.get(
      CartOrderRequest.endpoint.getClientSingleOrder
        .replace("__ORDERID__", orderId)
        .replace("__BUSINESSID__", business),
      (success) => {
        dispatch({
          type: CartActionTypes.GET_SINGLE_ORDER_CLIENT_SUCCESS,
          payload: success.data,
        });
      },
      (error) => {
        dispatch({
          type: CartActionTypes.GET_SINGLE_ORDER_CLIENT_ERROR,
          payload: error,
        });
      }
    );
  }
}

export const updateClientOrderSuborder = (suborder, order, action, status, mainPage, limit, skip) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.CANCEL_CLIENT_ORDER_LOADING,
    })
    CartOrderRequest.post(
      CartOrderRequest.endpoint.updateClientOrderSuborder.replace("__SUBORDERID__", suborder).replace("__ORDERID__", order).replace("__ACTION__", action).replace("__STATUS__", status).replace("__MAIN__", mainPage).replace("__LIMIT__", limit).replace("__SKIP__", skip),
      {},
      (success) => {
        dispatch({
          type: CartActionTypes.CANCEL_CLIENT_ORDER_SUCCESS,
          payload: success.data
        })
        dispatch(showToast("Your Order had been cancelled.", "Eblouiussante_Toast"))
      }

    )
  }
}

export const changeOrderStatus = (body) => async (dispatch) => {
  dispatch({ type: CartActionTypes.CHANGE_ORDER_STATUS_LOADING });
  CartOrderRequest.post(
    CartOrderRequest.endpoint.changeOrderStatus
      .replace("__ORDERID__", body.orderId)
      .replace("__STATUS__", body.Status),
    {},
    (list) => {
      dispatch({
        type: CartActionTypes.CHANGE_ORDER_STATUS_SUCCESS,
        payload: list.data.data,
      });
    },
    (error) => {
      dispatch({ type: CartActionTypes.CHANGE_ORDER_STATUS_FAIL, payload: error });
    }
  )
};

export const shippingDetails = (id, body) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.CHANGE_ORDER_STATUS_LOADING,
      loading: true,
      payload: {}
    })

    CartOrderRequest.post(CartOrderRequest.endpoint.shippingOrder.replace("_id_", id),
      body,
      (success) => {
        dispatch({
          type: CartActionTypes.CHANGE_ORDER_STATUS_SUCCESS,
          payload: success.data
        })
        let body = { orderId: id, status: "detail" };
        CartOrderRequest.post(
          CartOrderRequest.endpoint.customerOrder,
          body,
          (resp) => {
            dispatch({ type: CartActionTypes.CUSTOMER_ORDER_DETAIL_SUCCESS, payload: resp.data.data });
          },
          (error) => {
            dispatch({ type: CartActionTypes.CUSTOMER_ORDER_DETAIL_FAIL, payload: error });
          }
        )
        dispatch({
          type: CartActionTypes.GET_SHIP_ITEM_LOADING,
          payload: success.data
        })
        CartOrderRequest.get(
          CartOrderRequest.endpoint.getShipItemList.replace("__ID__", id),
          (success) => {
            dispatch({
              type: CartActionTypes.GET_SHIP_ITEM_LOADED,
              payload: success.data
            })
          }
        )

        CartOrderRequest.get(
          CartOrderRequest.endpoint.getDeliFailList.replace("__ID__", id).replace("__STATUS__", "Failed"),
          (success) => {
            dispatch({
              type: CartActionTypes.GET_FAIL_ITEM_LOADED,
              payload: success.data
            })
          }
        )

        CartOrderRequest.get(
          CartOrderRequest.endpoint.getDeliFailList.replace("__ID__", id).replace("__STATUS__", "Delivered"),
          (success) => {
            dispatch({
              type: CartActionTypes.GET_DELIVER_ITEM_LOADED,
              payload: success.data
            })
          }
        )
      },
      error => {
        dispatch({
          type: CartActionTypes.CHANGE_ORDER_STATUS_FAIL,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const orderListReject = (id, body, subId, ...args) => {
  body.suborderId = subId
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.UPDATE_ORDER_STATUS_LOADING,
      loading: true,
      payload: {}
    })

    CartOrderRequest.post(CartOrderRequest.endpoint.RejectedOrder.replace("_id_", id),
      body,
      (success) => {
        if (args && args.length) {
          dispatch(clientGuestgetAllSubordersClient(...args));
        }
        dispatch({
          type: CartActionTypes.GET_SINGLE_ORDER_SUCCESS,
          payload: success.data
        })
      },
      error => {
        dispatch({
          type: CartActionTypes.UPDATE_ORDER_STATUS_REJECT,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}