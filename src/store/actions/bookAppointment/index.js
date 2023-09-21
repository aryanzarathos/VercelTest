import { setCommonError } from "../commonerror";
import { openSuccesspopup } from "../createOrder";
import { APPOINTMENTTYPES } from "./actionTypes";
import AppointmentRequest from "./request";

//Appointment

export const getAllMainServiceList = (value, industry) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_LOADING,
      loading: true,
    });
    AppointmentRequest.get(AppointmentRequest.AppointmentEndpoint.getAllMainServiceList.replace("inst", value).replace("__type__", industry),
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_LOADED,
          payload: success.data

        })
      },
      (error) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    )
  }
}


export const getSingleServiceDetail = (industry, body) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_SINGLE_SERVICE_LOADING,
      loading: true,
    });
    AppointmentRequest.post(AppointmentRequest.AppointmentEndpoint.getSingleServiceDetail.replace("__type__", industry), body,
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_SINGLE_SERVICE_SUCCESS,
          payload: success.data.data,
        })
      },
      (error) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_SINGLE_SERVICE_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const getAllSlot = (serviceid, insID, date, industry) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_ALL_SLOTS_LOADING,
      payload: [],
    })

    AppointmentRequest.get(AppointmentRequest.AppointmentEndpoint.getAllSlot.replace("serviceId", serviceid).replace("insID", insID).replace("_DATE_", date).replace("__type__", industry),
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_ALL_SLOTS_LOADED,
          payload: success.data
        })
      },
      (error) => {
        dispatch(setCommonError(error.message))
        dispatch({
          type: APPOINTMENTTYPES.GET_ALL_SLOTS_ERROR,
          payload: []
        })
      }
    );
  }
}

export const resetGetAllSlot = () => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_ALL_SLOTS_RESET,
      payload: []
    })
  }
}

export const resetPostAppointmentDetail = () => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.POST_APPOINTMENT_RESET,
      payload: []
    })
  }
}


export const postAppointmentCart = (industry, data, history) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.POST_APPOINTMENT_CART_LOADING,
      loading: true,
    })

    AppointmentRequest.post(AppointmentRequest.AppointmentEndpoint.postAppointmentcart.replace("__type__", industry),
      data,
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.POST_APPOINTMENT_CART_SUCCESS,
          payload: success.data.data
        })
        // dispatch(showToast("Appointment details added to cart successfully!"));
        history("/service-payment");
      },
      error => {
        dispatch({
          type: APPOINTMENTTYPES.POST_APPOINTMENT_CART_ERROR,
          payload: {}
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}


export const getAppointmentCart = (user, business) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_APPOINTMENT_CART_LOADING,
      loading: true,
    })

    AppointmentRequest.get(AppointmentRequest.AppointmentEndpoint.getAppointmentcart
      .replace("__user__", user)
      .replace("__business__", business),
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_APPOINTMENT_CART_SUCCESS,
          payload: success.data
        })
        // dispatch(showToast("Appointment details added to cart successfully!"));
      },
      error => {
        dispatch({
          type: APPOINTMENTTYPES.GET_APPOINTMENT_CART_ERROR,
          payload: {}
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}

export const postAppointmentDetail = (body, history, businessName, business, industry, data) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.POST_APPOINTMENT_LOADING,
      loading: true,
    })
    data.body = body;
    AppointmentRequest.post(AppointmentRequest.AppointmentEndpoint.postAppointment.replace("__type__", industry),
      data,
      (resp) => {
        if (resp.data.data._id) {
          if (body?.order_payment_method === "Mojo") {
            window.location.href = resp?.data?.data?.paymentUrl
          }
          if (body.order_payment_method === "cashOnDelivery") {
            history("/booking-success");

          } else if (body.order_payment_method === "Razorpay") {
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
              if (resp.status === 200 && resp.data) {
                const options = {
                  key: business?.has_razorpay ? business.razorpay_api_key : process.env.REACT_APP_RAZOR_PAY_KEY,
                  amount: resp.data.data.orderTotal, //total
                  name: businessName, //business name
                  order_id: resp.data.data.order_id,
                  image: business.business_logo ? business.business_logo : "https://webneed.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebneed-logo-old.3b97575c.png&w=640&q=75", //business logo
                  /*      "theme": {
                         "color": "#3399cc"
                       }, */
                  handler: async function (response) {
                    const data = {
                      orderCreationId: resp.data.data.order_id,
                      razorpayPaymentId: response.razorpay_payment_id,
                      razorpayOrderId: response.razorpay_order_id,
                      razorpaySignature: response.razorpay_signature,
                    };
                    AppointmentRequest.post(
                      AppointmentRequest.AppointmentEndpoint.paymentcallback,
                      data,
                      (resp3) => {
                        if (
                          resp3.data.domainStatus === "Domain Bought" &&
                          resp3.data.paymentStatus === "Payment successfull"
                        ) {
                          // history(`/ecom-orderConfirm/${resp3.data}/${resp.data.data.order_id}`);
                          history("/booking-success");
                        } else {
                          // history({
                          //   pathname: `/ecom-orderConfirm/${resp3.data}/${resp.data.data.order_id}`,
                          //   state: { detail: true },
                          // });
                          history("/booking-success");
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
          } else if (body.order_payment_method === "usaepay") {
            dispatch(openSuccesspopup())
          }
        }
        dispatch({
          type: APPOINTMENTTYPES.POST_APPOINTMENT_SUCCESS,
          payload: resp.data.data
        })
        // dispatch(showToast("Appointment details added successfully!"));
      },
      error => {
        dispatch({
          type: APPOINTMENTTYPES.POST_APPOINTMENT_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}


export const getuserBookingList = (userID, serviceid, industry) => {
  return (dispatch) => {
    dispatch({
      type: APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_LOADING,
      loading: true,
    })

    AppointmentRequest.get(AppointmentRequest.AppointmentEndpoint.getuserBookingList.replace("user", userID).replace("SERVICEID", serviceid).replace("__type__", industry),
      (success) => {
        dispatch({
          type: APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_LOADED,
          payload: success.data.appointmentInfo
        })
      },
      error => {
        dispatch({
          type: APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_ERROR,
          payload: []
        })
        dispatch(setCommonError(error.message))
      }
    );
  }
}