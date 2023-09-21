import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidationFile from "../Classes/ValidationFile";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { postReviewDetails } from "@/store/actions/ecomReviews";


const useReviewCreate = (onclose) => {
  const openCropperRef = useRef()
  let dispatch = useDispatch();
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate)
  const { user, subdomainuser, } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
    }
  });

  const [ratings, setRatings] = useState("");
  const [reviewDesc, setReviewDesc] = useState("");
  const [reviewMedia, setReviewMedia] = useState([]);
  const [disableButton, setDisablebutton] = useState(true);

  //error states
  const [ratingsError, setRatingsError] = useState("");
  const [reviewDescError, setReviewDescError] = useState("");

  const handleRatingStars = (value) => {
    setRatings(value);
    setRatingsError(ValidationFile.isEmpty(value));
    setDisablebutton(false);
  }
  // console.log("hihi")
  const handleOnChange = (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue, "line no 377",e);
    let value = ValidationFile.spaceNotAccept(inputValue);
    setReviewDesc(value);
    setReviewDescError(ValidationFile.isEmpty(value));
    setDisablebutton(false);
  }

  const closeModal = () => {
    onclose();
    setRatings("");
    setReviewDesc("");
    setReviewMedia([]);
    setDisablebutton(true);
  }

  const openCropper = () => {
    if (reviewMedia.length !== 5) {
      openCropperRef.current.open();
    }
  }

  const uploadReviewMedia = (data) => {
    let Tempdata = reviewMedia;
    Tempdata = Tempdata.concat(data)
    setReviewMedia([...Tempdata])
    setDisablebutton(false);
  }

  const handleCrossIcon = (item) => {
    let array = reviewMedia;
    let index = array.indexOf(item);
    array.splice(index, 1);
    setReviewMedia([...array]);
    setDisablebutton(false);
  }

  const validation = () => {
    let isvalid = true;
    if (ValidationFile.isNotEmpty(ratings) && ValidationFile.isNotEmpty(reviewDesc)) {
      isvalid = true;
    }
    else {
      isvalid = false;
    }
    return isvalid;
  }
  // console.log(data, "line no 83");
  const handlePublishButton = (id) => {
    let valid = validation();
    if (ValidationFile.isEmpty(ratings)) {
      setRatingsError(true);
    }
    if (ValidationFile.isEmpty(reviewDesc)) {
      setReviewDescError(true);
    }
    let payloaddata = {
      "product": id,
      "user": AppLinkUrl.privateDomain() ? user._id : subdomainuser._id,
      "business": data.business,
      "rating": ratings,
      "message": reviewDesc,
      "images": reviewMedia,
      "creator": "user",
      "date": new Date(),
      "status": "Pending"
    };
    if (valid) {
      dispatch(postReviewDetails(user?.user_business, payloaddata, "user"));
      closeModal();
    }
  }

  // useEffect(() => {
  //   if (postReviewSuccess) {
  //     closeModal();
  //   }

  // }, [postReviewSuccess])

  return [closeModal, handleRatingStars, ratings, ratingsError, reviewDesc, handleOnChange, reviewDescError, reviewMedia, openCropper, disableButton, handlePublishButton, uploadReviewMedia, openCropperRef, handleCrossIcon];
}

export default useReviewCreate;