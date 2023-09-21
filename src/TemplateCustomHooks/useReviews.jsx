import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidationFile from "../Classes/ValidationFile";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { getProductReviewList, postReviewReply } from "@/store/actions/ecomReviews";
// import { getBuyerProductReviewDetails, postReviewReply } from "../../store/actions/ecomReviews";


const useReviews = () => {

  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate)
  const { user, subdomainuser, getbuyerProductStatusSuccess, getbuyerProductStatus, productDetails,
    customerproductDetailSuccess, getReviewsListSuccess, getReviewsListData } = useSelector((state) => {
      return {
        user: state.user,
        subdomainuser: state.subdomainuser,
        getbuyerProductStatusSuccess: state.reviews.BuyerProductReview.success,
        getbuyerProductStatus: state.reviews.BuyerProductReview.data,
        customerproductDetailSuccess: state.productList.customerproductDetail.success,
        productDetails: state.productList.customerproductDetail.data.product,
        getReviewsListSuccess: state.reviews.getProductReviewsData.success,
        getReviewsListData: state.reviews.getProductReviewsData.data,

      }
    });

  // const { user, getReviewsListSuccess, getReviewsListData, subdomainuser, businessInfoSuccess,
  //   businessInfoData, getbuyerProductStatusSuccess, getbuyerProductStatus,productDetails,  customerproductDetailSuccess } = useSelector((state) => {
  //     return {
  //       user: state.user,
  //       getReviewsListSuccess: state.ecomReviews.getProductReviewsData.success,
  //       getReviewsListData: state.ecomReviews.getProductReviewsData.data,
  //       subdomainuser: state.subdomainuser,
  //       businessInfoSuccess: state.businessInfo.ecomWebsite.success,
  //       // businessinfo: state.businessInfo.getInstituiteData.data,
  //       businessInfoData: state.businessInfo.ecomWebsite.data,
  //       getbuyerProductStatusSuccess: state.ecomReviews.getBuyerProductReview.success,
  //       getbuyerProductStatus: state.ecomReviews.getBuyerProductReview.data,
  //       customerproductDetailSuccess: state.productList.customerproductDetail.success,
  //       productDetails: state.productList.customerproductDetail.data.product,

  //     }
  //   });

  useEffect(() => {
    if (productDetails?._id)
      dispatch(getProductReviewList(productDetails?._id));
  }, [dispatch, productDetails?._id])


  const [addReply, setAddReply] = useState(-1);
  const [reply, setReply] = useState("");

  const openpopup = useRef();

  const openReviewAndRatingpopup = () => {
    openpopup.current.open();
  }

  const closeReviewAndRatingpopup = () => {
    openpopup.current.close();
  }

  const handleReplyButton = (id) => {
    setAddReply(addReply === id ? -1 : id);
  }

  const handleReplyInput = (e) => {
    let inputValue = e.target.value;
    let value = ValidationFile.spaceNotAccept(inputValue);
    setReply(value);
  }

  const handlePostReply = (reviewId) => {
    if (reply) {
      let payloaddata = {
        "user": AppLinkUrl.privateDomain() ? user._id : subdomainuser._id,
        "message": reply,
        "date": new Date(),
        "status": "Pending"
      }
      dispatch(postReviewReply(data.business, reviewId, payloaddata, "user", "Eblouiussante_Toast"));
      setReply("");
      setAddReply(-1);
    }
  }

  useEffect(() => {
    if (data?.businessData?.write_review === "buyer" && customerproductDetailSuccess && productDetails && subdomainuser && subdomainuser._id) {
      dispatch(getBuyerProductReviewDetails(data.business, productDetails?._id, subdomainuser._id))
    }
  }, [data, dispatch, subdomainuser, productDetails, customerproductDetailSuccess])

  const rating = () => {
    if (getReviewsListSuccess && getReviewsListData?.reviews.length > 0) {
      return Math.round(getReviewsListSuccess && getReviewsListData && getReviewsListData?.rate)
    } else {
      return ""
    }
  }

  return [getbuyerProductStatusSuccess, getbuyerProductStatus, openReviewAndRatingpopup, openpopup, closeReviewAndRatingpopup,
    handleReplyButton, addReply, handleReplyInput, handlePostReply, reply, productDetails?._id, user, subdomainuser, rating, getReviewsListSuccess, getReviewsListData];
}

export default useReviews;