import { setCommonError } from "../commonerror";
import { Review_ActionTypes } from "./ActionTypes";
import ReviewsRequest from "./ReviewsRequest"; import {

  showToast,
} from "../successmessagepopup";

export const getBuyerProductReviewDetails = (id, prodId, userId) => {
  return (dispatch) => {
    ReviewsRequest.get(
      ReviewsRequest.EcomCurrencyEndpoint.getBuyerProductRelation
        .replace("_PRODID_", prodId)
        .replace("_USER_", userId)
        .replace("_BUSINESS_", id),
      (success) => {
        dispatch({
          type: Review_ActionTypes.GET_BUYER_PRODUCT_RELATION,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch(setCommonError(error.message));
      }
    );
  };
};
export const postReviewReply = (id, reviewID, data, type, template) => {
  return (dispatch) => {
    dispatch({
      type: Review_ActionTypes.POST_REVIEW_REPLY_LOADING,
      payload: [],
    });

    ReviewsRequest.post(
      ReviewsRequest.EcomCurrencyEndpoint.postReply
        .replace("_BUSINESS_", id)
        .replace("_REVIEW_", reviewID),
      data,
      (success) => {
        dispatch({
          type: Review_ActionTypes.POST_REVIEW_REPLY_LOADED,
          payload: success.data.data,
        });
        if (type === "user") {
          if (template) {
            dispatch(
              showToast(
                `Reply Submitted Successfully!`,
                template
              )
            );
          } else {
            dispatch(showToast("Reply Submitted Successfully!"));
          }
        }
      },
      (error) => {
        dispatch(setCommonError(error.message));
      }
    );
  };
};