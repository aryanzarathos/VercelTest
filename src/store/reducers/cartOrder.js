import {
  CartActionTypes,
} from "../actions/cartOrder/cartOrderAction";
const ORDER_LIST_INITIAL_STATE = {

  customerCart: {
    data: {},
    loading: false,
    success: false,
    error: false,
    postLoading: false,
    totalCartLength: 0,
  },
  customerAddressList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  customerCartQuantity: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  customerOrderList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  shippingDetails: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getShippingBillingAddressList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  patchActiveAddress: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  deleteAddresses: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  postAddresses: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getAllClientOrders: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  cancelClientProduct: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  updateCustomerStatus: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  getClientSingleOrder: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  customerOrderDetail: {
    data: {},
    loading: false,
    success: false,
    error: false,
  },
  adminOrderList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  orderListReject: {
    data: {},
    loading: false,
    success: false,
    error: false,
  }
};

const orderCartListReducer = (
  state = ORDER_LIST_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {

    case CartActionTypes.ADD_TO_CART_POST_LOADING:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          postLoading: true,
          postSuccess: false,
        },
      };
    case CartActionTypes.ADD_TO_CART_POST_LOADED:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: payload,
          postLoading: false,
          postSuccess: true,
          success: true,
          totalCartLength: state.customerCart.totalCartLength + 1,
        },
      };
    case CartActionTypes.ADD_TO_CART_POST_RESET:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: [],
          postLoading: false,
          postSuccess: false,
          success: false,
          totalCartLength: 0,
        },
      };
    case CartActionTypes.CART_PATCH_LOADED:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: payload,
          success: true,
          loading: false,
        },
        customerCartQuantity: {
          ...state.customerCartQuantity,
          data: [],
          loading: false,
        },
      };
    case CartActionTypes.CART_PATCH_LOADING:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: [],
          postLoading: false,
          postSuccess: false,
          success: false,
        },
      };
    case CartActionTypes.CART_PATCH_ERROR:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: [],
          postLoading: false,
          postSuccess: false,
          success: false,
        },
      };

    case CartActionTypes.CART_QUANTITY_LOADING:
      return {
        ...state,
        customerCartQuantity: {
          ...state.customerCartQuantity,
          data: [],
          loading: true,
          success: false,
        },
      };

    case CartActionTypes.ADD_TO_CART_POST_ERROR:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          error: true,
        },
      };
    case CartActionTypes.ADD_TO_CART_GET_LOADING:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: [],
          postLoading: false,
          success: false,
          loading: true,
        },
      };
    case CartActionTypes.ADD_TO_CART_GET_LOADED:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: payload,
          postLoading: false,
          success: true,
          loading: false,
          totalCartLength: payload.length ? payload.length : 0,
        },
      };
    case CartActionTypes.CUSTOMER_CART_FAIL:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case CartActionTypes.GET_SHIPPING_DETAILS_LOADING:
      return {
        ...state,
        shippingDetails: {
          ...state.shippingDetails,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CartActionTypes.GET_SHIPPING_DETAILS_LOADED:
      return {
        ...state,
        shippingDetails: {
          ...state.shippingDetails,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },
      };
    case CartActionTypes.GET_SHIPPING_DETAILS_RESET:
      return {
        ...state,
        shippingDetails: {
          ...state.shippingDetails,
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };
    case CartActionTypes.GET_ADDRESS_LIST_LOADING:
      return {
        ...state,
        getShippingBillingAddressList: {
          ...state.getShippingBillingAddressList,
          data: [],
          ShippingAddressData: [],
          BillingAddressData: [],
          loading: true,
          error: false,
          success: false,
        },
      };

    case CartActionTypes.GET_ADDRESS_LIST_LOADED:
      return {
        ...state,
        getShippingBillingAddressList: {
          ...state.getShippingBillingAddressList,
          data: payload,
          ShippingAddressData: payload.Shipingaddress,
          BillingAddressData: payload.Billingrderaddress,
          loading: false,
          error: false,
          success: true,
        },
      };
    case CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADED:
      if (payload.type === "Shipping") {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return item._id === payload.data._id
                    ? payload.data
                    : { ...item, activeAddress: false };
                }
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.map(
                (item) => {
                  return item._id === payload.data._id
                    ? payload.data
                    : { ...item, activeBillingAddress: false };
                }
              ),
            success: true,
          },
        };
      }

    case CartActionTypes.POST_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          postAddresses: {
            ...state.postAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData: state.getShippingBillingAddressList
              .ShippingAddressData.length
              ? state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return {
                    ...item,
                    activeAddress: false,
                  };
                }
              ).concat([payload.data])
              : state.getShippingBillingAddressList.ShippingAddressData.concat([
                payload.data,
              ]),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          postAddresses: {
            ...state.postAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.concat([
                payload.data,
              ]),
            success: true,
          },
        };
      }

    case CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return item._id === payload.data._id ? payload.data : item;
                }
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.map(
                (item) => {
                  return item._id === payload.data._id ? payload.data : item;
                }
              ),
            success: true,
          },
        };
      }

    case CartActionTypes.DELETE_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          deleteAddresses: {
            ...state.deleteAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.filter(
                (item) => item._id !== payload.data._id
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          deleteAddresses: {
            ...state.deleteAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.filter(
                (item) => item._id !== payload.data._id
              ),
            success: true,
          },
        };
      }

    case CartActionTypes.GET_ALL_ORDERS_CLIENT_LOADING: {
      return {
        ...state,
        getAllClientOrders: {
          ...state.getAllClientOrders,
          data: [],
          loading: true,
          success: false,
          error: false,
        },
      }
    }
    case CartActionTypes.GET_ALL_ORDERS_CLIENT_SUCCESS: {
      return {
        ...state,
        getAllClientOrders: {
          ...state.getAllClientOrders,
          data: payload?.returnData,
          suborderlength: payload?.suborderlength,
          loading: false,
          success: true,
          error: false,
        },
      }
    }
    case CartActionTypes.GET_ALL_ORDERS_CLIENT_RESET: {
      return {
        getAllClientOrders: {
          ...state.getAllClientOrders,
          data: [],
          loading: false,
          success: false,
          error: false,
        },
      }
    }
    case CartActionTypes.CANCEL_CLIENT_ORDER_SUBORDER_LOADING: {
      return {
        ...state,
        cancelClientProduct: {
          ...state.cancelClientProduct,
          data: [],
          loading: true,
          success: false,
          error: false,
        },
      }
    }
    case CartActionTypes.CANCEL_CLIENT_ORDER_SUBORDER_SUCCESS: {
      return {
        ...state,
        cancelClientProduct: {
          ...state.cancelClientProduct,
          data: payload,
          loading: false,
          success: true,
          error: false,
        },
        getAllClientOrders: {
          ...state.getAllClientOrders,
          data: payload?.returnData,
          suborderlength: payload?.suborderlength,
          loading: false,
          success: true,
          error: false,
        },
      }
    }

    case CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_LOADING:
      return {
        ...state,
        updateCustomerStatus: {
          ...state.updateCustomerStatus,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    case CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomerStatus: {
          ...state.updateCustomerStatus,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },
      };

    case CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_ERROR:
      return {
        ...state,
        updateCustomerStatus: {
          ...state.updateCustomerStatus,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CartActionTypes.UPDATE_ORDER_STATUS_BY_CUSTOMER_RESET:
      return {
        ...state,
        updateCustomerStatus: {
          ...state.updateCustomerStatus,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };
    case CartActionTypes.UPDATE_SELECTED_ADDRESS_LOADED:
      if (payload.type === "Shipping") {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return item._id === payload.data._id
                    ? payload.data
                    : { ...item, activeAddress: false };
                }
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.map(
                (item) => {
                  return item._id === payload.data._id
                    ? payload.data
                    : { ...item, activeBillingAddress: false };
                }
              ),
            success: true,
          },
        };
      }

    case CartActionTypes.POST_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          postAddresses: {
            ...state.postAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData: state.getShippingBillingAddressList
              .ShippingAddressData?.length
              ? state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return {
                    ...item,
                    activeAddress: false,
                  };
                }
              )?.concat([payload.data])
              : state.getShippingBillingAddressList.ShippingAddressData?.concat([
                payload.data,
              ]),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          postAddresses: {
            ...state.postAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.concat([
                payload.data,
              ]),
            success: true,
          },
        };
      }

    case CartActionTypes.PATCH_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.map(
                (item) => {
                  return item._id === payload.data._id ? payload.data : item;
                }
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          patchActiveAddress: {
            ...state.patchActiveAddress,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.map(
                (item) => {
                  return item._id === payload.data._id ? payload.data : item;
                }
              ),
            success: true,
          },
        };
      }

    case CartActionTypes.DELETE_SHIPPING_BILLING_ADDRESS:
      if (payload.type === "Shipping") {
        return {
          ...state,
          deleteAddresses: {
            ...state.deleteAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            ShippingAddressData:
              state.getShippingBillingAddressList.ShippingAddressData.filter(
                (item) => item._id !== payload.data._id
              ),
            success: true,
          },
        };
      } else {
        return {
          ...state,
          deleteAddresses: {
            ...state.deleteAddresses,
            data: payload,
            loading: false,
            error: false,
            success: true,
          },
          getShippingBillingAddressList: {
            ...state.getShippingBillingAddressList,
            BillingAddressData:
              state.getShippingBillingAddressList.BillingAddressData.filter(
                (item) => item._id !== payload.data._id
              ),
            success: true,
          },
        };
      }
    case CartActionTypes.CUSTOMER_CART_LOADING:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case CartActionTypes.CUSTOMER_CART_SUCCESS:
      return {
        ...state,
        customerCart: {
          ...state.customerCart,
          data: { ...payload },
          loading: false,
          error: false,
          success: true,
        },
      };

    case CartActionTypes.GET_SINGLE_ORDER_CLIENT_LOADING: {
      return {
        ...state,
        getClientSingleOrder: {
          ...state.getClientSingleOrder,
          data: [],
          loading: true,
          success: false,
          error: false,
        },
      }
    }
    case CartActionTypes.GET_SINGLE_ORDER_CLIENT_SUCCESS: {
      return {
        ...state,
        getClientSingleOrder: {
          ...state.getClientSingleOrder,
          data: payload,
          loading: false,
          success: true,
          error: false,
        },
      }
    }
    case CartActionTypes.GET_SINGLE_ORDER_CLIENT_RESET: {
      return {
        getClientSingleOrder: {
          ...state.getClientSingleOrder,
          data: [],
          loading: false,
          success: false,
          error: false,
        },
      }
    }
    case CartActionTypes.CHANGE_ORDER_STATUS_LOADING:
      return {
        ...state,
        customerOrderDetail: {
          ...state.customerOrderDetail,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };
    //cancellAllorder-user
    case CartActionTypes.CHANGE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        customerOrderDetail: {
          ...state.customerOrderDetail,
          data: {
            ...state.customerOrderDetail.data,
            ...state.orderListReject.data,
            Status: payload.Status,
            shipping_partner: payload.shipping_partner,
            shipping_tracking_id: payload.shipping_tracking_id,
            cancellaion_reason: payload.cancellaion_reason,
            rejection_reason: payload.rejection_reason,
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case CartActionTypes.CHANGE_ORDER_STATUS_FAIL:
      return {
        ...state,
        adminOrderList: {
          ...state.adminOrderList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };

    case CartActionTypes.UPDATE_ORDER_STATUS_LOADING:
      return {
        ...state,
        orderListReject: {
          ...state.orderListReject,
          data: [],
          postLoading: false,
          success: false,
          loading: true,
        },
      };
    case CartActionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        orderListReject: {
          ...state.orderListReject,
          data: payload,
          success: true,
          loading: false,
        },
        customerOrderDetail: {
          ...state.customerOrderDetail,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },
      };
    case CartActionTypes.UPDATE_ORDER_STATUS_RESET:
      return {
        ...state,
        orderListReject: {
          ...state.orderListReject,
          data: [],
          success: false,
          loading: false,
          error: false,
        },
      };
    case CartActionTypes.UPDATE_ORDER_STATUS_REJECT:
      return {
        ...state,
        orderListReject: {
          ...state.orderListReject,
          data: [],
          success: false,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default orderCartListReducer;
