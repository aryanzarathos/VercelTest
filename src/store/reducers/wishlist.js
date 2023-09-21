import {
    wishlistAction
  } from "../actions/wishlist/wishlistAction";
  
  const COLLECTION_LIST_INITIAL_STATE = {

    customerWishList: {
      data: [],
      loading: false,
      success: false,
      error: false,
    },

  };
  
  const wishListReducer = (
    state = COLLECTION_LIST_INITIAL_STATE,
    { type, payload }
  ) => {
    switch (type) {

      case wishlistAction.GET_WISHLIST_LOADING:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            loading: true,
            error: false,
            success: false,
          },
        };
      case wishlistAction.GET_WISHLIST_SUCCESS:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [...payload],
            loading: false,
            error: false,
            success: true,
          },
        };
      case wishlistAction.GET_WISHLIST_FAIL:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [],
            loading: false,
            error: true,
            success: false,
          },
        };
      case wishlistAction.GET_WISHLIST_RESET:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [],
            loading: false,
            error: false,
            success: false,
          },
        };
      case wishlistAction.MOVE_WISHLIST_TO_CART_LOADING:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [],
            loading: true,
            error: false,
            success: false,
          },
        };
      case wishlistAction.MOVE_WISHLIST_TO_CART_SUCCESS:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [...payload],
            loading: false,
            error: false,
            success: true,
          },
        };
      case wishlistAction.MOVE_WISHLIST_TO_CART_FAIL:
        return {
          ...state,
          customerWishList: {
            ...state.customerWishList,
            data: [],
            loading: false,
            error: true,
            success: false,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default wishListReducer ;
  