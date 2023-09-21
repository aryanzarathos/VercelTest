import wishlistRequest from "./wishlistRequest";
import { wishlistAction } from "./wishlistAction";

export const wishlistToCart = (body) => async (dispatch) => {
  //// console.log("line 5")
    dispatch({ type: wishlistAction.GET_WISHLIST_LOADING });
    wishlistRequest.post(
      wishlistRequest.endpoint.wishlistToCart,
      body,
      (success) => {
        dispatch({ type: wishlistAction.GET_WISHLIST_SUCCESS, payload: success.data.data });
      },
      (error) => {
        dispatch({ type: wishlistAction.GET_WISHLIST_FAIL, payload: error.response.data.message });
      }
    )
  };
 export  const getWishList = (body) => async (dispatch) => {
    dispatch({ type: wishlistAction.GET_WISHLIST_LOADING });
    wishlistRequest.post(
      wishlistRequest.endpoint.addProduct,
      body,
      (success) => {
        dispatch({ type: wishlistAction.GET_WISHLIST_SUCCESS, payload: success.data.data });
      },
      (error) => {
        dispatch({ type: wishlistAction.GET_WISHLIST_FAIL, payload: error.response.data.message });
      }
    )
  };


  // export const cartOperations = (body, apiHit) => {
  //   return (dispatch) => {
  //     wishlistRequest.post(
  //       wishlistRequest.endpoint.addProduct,
  //       body,
  //       // (list) => {
  //       //   if (body.status === "add to wishList") {
  //       //     dispatch(showToast("1 item Wishlisted.Check out now!", "Eblouiussante_Toast"))
  //       //   } else if (body.status === "remove from wishList") {
  //       //     dispatch(showToast("1 item remove from Wishlist. Check out now!", "Eblouiussante_Toast"))
  //       //   } else {
  //       //     dispatch(showToast("Success", "Eblouiussante_Toast"))
  //       //   }
  
  //       //   if (apiHit) {
  
  //       //     dispatch(getWishList({ userId: body.userId, status: "readWishList" }));
  //       //   }
  //       // },
  //       (error) => {
  //         dispatch({ type: wishlistAction.CUSTOMER_CART_FAIL, payload: error });
  //       }
  //     )
  //   };
  // }