import React, { createContext, useRef } from 'react'
// import './reviewandrating.scss'
// import user1 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/user1.png'
// import user2 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/user2.png'
// import user3 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/user3.png'
// import item1 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/item1.png'
// import item2 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/item2.png'
// import item3 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/item3.png'
// import item4 from '../../../Assets/SectionComponent/Images/ReviewsAndRating/item4.png'
import StarSvgImg from '../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg';
import FormTextArea from '../../../SectionCommon/Form/FormTextArea'
import Modal from '../../../SectionCommon/Modal';
import ModalBody from '../../../SectionCommon/Modal/ModalBody';
import WriteReviewPopup from './WriteReviewPopUp/WriteReviewPopup';
import { BtnDone, CustomerReviewsWrapper, ImageDivider, ImageDividerThin, MainLeftReview, MainReview, MainRightReview, NameRatingDiv, NameRatingDivComment, NameRatingDivSubReply, PortraitDivider, ProductImageContainer, ProductRatingConatinerWrapper, ProductRatingContainerItem, RateShowBtn, RateShowBtnItem, RatingHeadingContainer, RatingHeadingItem, ReplayTab, ReplyBtn, ReplyBtnWrap, ReplyDivWrapper, ReplyDivWrapperComment, ReveiwItemLeft, ReveiwItemLeftComment, ReveiwItemLeftSubReply, ReveiwItemWrapper, ReviewContainer, ReviewHeading, ReviewInputBtn, ReviewItemRight, ReviewItemRightComment, ReviewItemRightSubReply, ReviewRating, ReviewWithOutOutReply, ReviewWithReply, StarSvg, UserImageWrapper, UserImageWrapperComment, UserImageWrapperSubReply, UserName, UserProductImageWrapper, UserReview, UsersReveiwWrapperContainer } from './ReviewsTheme1.style'
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import ShowRatingStar from './ShowRatingStar/ShowRatingStar'
import useReviews from '@/TemplateCustomHooks/useReviews';
import { useSelector } from 'react-redux';
import Auth from '@/Classes/Auth';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { dummyImgProduct, dummyUserImg } from '@/Constant/constants';
export const ReviewContext = createContext();



const ReviewAndRating = ({ children }) => {
  const data = children;
  let ReviewData = children?.data?.data
  let AverageRating = ReviewData?.rate
  let reviewsAll = ReviewData?.reviews

  //// console.log(reviewsAll, "line 41")
  const  getTemplate  = useSelector((state) => state.websiteTemplate.getTemplate)

  const [getbuyerProductStatusSuccess, getbuyerProductStatus, openReviewAndRatingpopup, openpopup,
    closeReviewAndRatingpopup, handleReplyButton, addReply, handleReplyInput, handlePostReply, reply,
    prodId, user, subdomainuser, rating, getReviewsListSuccess, getReviewsListData] = useReviews()

  let styles = {
    ImageDivider: data?.custom_section_editable[0]?.style,
    ProductRatingConatinerWrapper: data?.custom_section_editable[1]?.style,
    ReviewHeading: data?.custom_section_editable[2]?.style,
    ProductRatingContainerItem: data?.custom_section_editable[3]?.style,
    RatingHeadingContainer: data?.custom_section_editable[4]?.style,
    RatingHeadingItem: data?.custom_section_editable[5]?.style,
    RateShowBtn: data?.custom_section_editable[6]?.style,
    RateShowBtnItem: data?.custom_section_editable[7]?.style,
    StarSvg: data?.custom_section_editable[8]?.style,
    ReviewInputBtn: data?.custom_section_editable[9]?.style,
    ImageDividerThin: data?.custom_section_editable[10]?.style,
    CustomerReviewsWrapper: data?.custom_section_editable[11]?.style,
    CustomerReviewHeading: data?.custom_section_editable[12]?.style,
    ReviewContainer: data?.custom_section_editable[13]?.style,
    UsersReveiwWrapperContainer: data?.custom_section_editable[14]?.style,
    ReviewWithReply: data?.custom_section_editable[15]?.style,
    ReveiwItemWrapper: data?.custom_section_editable[16]?.style,
    ReveiwItemWrapper: data?.custom_section_editable[16]?.style,
    ReveiwItemLeft: data?.custom_section_editable[17]?.style,
    PortraitDivider: data?.custom_section_editable[18]?.style,
    UserImageWrapper: data?.custom_section_editable[19]?.style,
    UserImageWrapperImage: data?.custom_section_editable[20]?.style,
    NameRatingDiv: data?.custom_section_editable[21]?.style,
    ReviewRating: data?.custom_section_editable[22]?.style,
    ReviewItemRight: data?.custom_section_editable[23]?.style,
    UserNameDesc: data?.custom_section_editable[24]?.style,
    UserName: data?.custom_section_editable[25]?.style,
    UserProductImageWrapper: data?.custom_section_editable[26]?.style,
    ProductImageContainer: data?.custom_section_editable[27]?.style,
    ProductImageContainerImage: data?.custom_section_editable[28]?.style,
    ReplyBtn: data?.custom_section_editable[29]?.style,
    ReviewItemRightComment: data?.custom_section_editable[30]?.style,
    ReplyDivWrapperComment: data?.custom_section_editable[31]?.style,
    ReveiwItemLeftComment: data?.custom_section_editable[32]?.style,
    UserImageWrapperComment: data?.custom_section_editable[33]?.style,
    UserImageWrapperCommentImage: data?.custom_section_editable[34]?.style,
    NameRatingDivComment: data?.custom_section_editable[35]?.style,
    UserNameComment: data?.custom_section_editable[36]?.style,
    ReplayTab: data?.custom_section_editable[37]?.style,
    ReplyBtnWrap: data?.custom_section_editable[38]?.style,
    DoneBtn: data?.custom_section_editable[39]?.style,
    ReplyDivWrapper: data?.custom_section_editable[40]?.style,
    ReveiwItemLeftSubReply: data?.custom_section_editable[41]?.style,
    UserImageWrapperSubReply: data?.custom_section_editable[42]?.style,
    UserImageWrapperSubReplyImage: data?.custom_section_editable[43]?.style,
    NameRatingDivSubReply: data?.custom_section_editable[44]?.style,
    UserNameSubReply: data?.custom_section_editable[45]?.style,
    ReviewItemRightSubReply: data?.custom_section_editable[46]?.style,
    UserNameDescSubReply: data?.custom_section_editable[47]?.style,
    MainReview: data?.custom_section_editable[82]?.style,
    MainLeftReview: data?.custom_section_editable[83]?.style,
    MainRightReview: data?.custom_section_editable[84]?.style,


  }
  // console.log(getTemplate, "line no 988");
  return (
    <>
      <ReviewContext.Provider value={data}>
        <Modal ref={openpopup} onclose={() => closeReviewAndRatingpopup()}>
          <ModalBody>
            <WriteReviewPopup id={prodId} onclose={() => closeReviewAndRatingpopup()} />
          </ModalBody>
        </Modal>


        <MainReview item={styles?.MainReview}>
          <MainLeftReview item={styles?.MainLeftReview}>
          </MainLeftReview>
          <MainRightReview item={styles?.MainRightReview}>

            <ImageDivider item={styles?.ImageDivider} />
            <ProductRatingConatinerWrapper item={styles?.ProductRatingConatinerWrapper}>
              <Text tagType="p" style={styles.ReviewHeading} text={data?.custom_section_editable[2]?.text} />
              <ProductRatingContainerItem item={styles?.ProductRatingContainerItem}>

                <RatingHeadingContainer item={styles?.RatingHeadingContainer}>
                  <Text tagType={"p"} style={styles?.RatingHeadingItem} text={data?.custom_section_editable[5]?.text} />

                  {rating() ?
                    <RateShowBtn item={styles?.RateShowBtn} itemStar={styles?.StarSvg} >
                      <RateShowBtnItem item={styles?.RateShowBtnItem} >{rating()}</RateShowBtnItem>
                      <span>
                        <StarSvgImg className="whiteIcon" width="10px" height="10px" />
                      </span>
                    </RateShowBtn> : ""}

                  {/* <RateShowBtn >
                    <RateShowBtnItem >{AverageRating}</RateShowBtnItem>
                  </RateShowBtn> */}

                </RatingHeadingContainer>
                {/* {
                  ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) &&
                  (getTemplate?.businessData?.write_review === "anyone" || getbuyerProductStatusSuccess && getbuyerProductStatus && getbuyerProductStatus?.verified_buyer) &&
                  <Button onClick={() => openReviewAndRatingpopup()} style={styles?.ReviewInputBtn} text={data?.custom_section_editable[9]?.text} />
                } */}

                {((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()))
                 && getTemplate?.data?.businessData?.write_review === "anyone"
                    ?
                  // <button className='buttonTrue btnTrue-o-secondary btn-xs  review-input-btn' onClick={openReviewAndRatingpopup}>Write a review  </button>
                  <Button onClick={() => openReviewAndRatingpopup()} style={styles?.ReviewInputBtn} text={"Write A Review"} />
                  :
                  ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) &&
                    getbuyerProductStatusSuccess && getbuyerProductStatus && getbuyerProductStatus?.verified_buyer ?
                    // <button className='buttonTrue btnTrue-o-secondary btn-xs  review-input-btn' onClick={openReviewAndRatingpopup}>Write a review  </button>
                    <Button onClick={() => openReviewAndRatingpopup()} style={styles?.ReviewInputBtn} text={"Write A Review"} />
                    : ""}


              </ProductRatingContainerItem>
              <ImageDividerThin item={styles?.ImageDividerThin} />
              <CustomerReviewsWrapper item={styles?.CustomerReviewsWrapper}>
                <Text tagType="p" style={styles.CustomerReviewHeading} text={"Customer Reviews"} />

                <ReviewContainer item={styles?.ReviewContainer}>
                  <React.Fragment>

                    <UsersReveiwWrapperContainer item={styles?.UsersReveiwWrapperContainer}>
                      {getReviewsListSuccess && getReviewsListData && getReviewsListData?.reviews.length ?
                        getReviewsListData?.reviews.map((data, key) => {
                          return (

                            <ReviewWithReply key={key} className='rrrrrr' item={styles?.ReviewWithReply}>
                              <ReveiwItemWrapper item={styles?.ReveiwItemWrapper}>
                                <ReveiwItemLeft item={styles?.ReveiwItemLeft}>
                                  <PortraitDivider item={styles?.PortraitDivider}>

                                    <UserImageWrapper item={styles?.UserImageWrapper}>
                                      {/* <Image src={user1} alt="" /> */}
                                      <ImageElement src={data.creator === "user" ? data?.user?.profile_picture : data?.profile_image} defaultImage={dummyUserImg} style={styles?.UserImageWrapperImage} />
                                    </UserImageWrapper>

                                  </PortraitDivider>
                                  <NameRatingDiv item={styles?.NameRatingDiv}>
                                    <Text tagType={"p"} style={styles?.UserName} text={data.creator === "user" ? data?.user?.fullname : data?.reviewer_name} />
                                    <ReviewRating item={styles?.ReviewRating}>
                                      <ShowRatingStar starsValue={data?.rating} />
                                    </ReviewRating>
                                  </NameRatingDiv>
                                </ReveiwItemLeft>
                                <ReviewItemRight item={styles?.ReviewItemRight}>
                                  <Text tagType={"p"} style={styles.UserNameDesc} text={data?.message} />
                                  <UserProductImageWrapper item={styles?.UserProductImageWrapper}>

                                    {data?.images && data?.images?.length ? data.images.map((img, key) => {
                                      return (
                                        <ProductImageContainer item={styles?.ProductImageContainer} key={key}>
                                          <ImageElement src={img} defaultImage={dummyImgProduct} style={styles?.ProductImageContainerImage} />
                                        </ProductImageContainer>
                                      );
                                    }) : ""}

                                  </UserProductImageWrapper>
                                  {/* <ReplyBtn>Reply</ReplyBtn> */}

                                  {((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) &&
                                    <Button onClick={() => handleReplyButton(data._id)} style={styles?.ReplyBtn} text={"Reply"}></Button>
                                  }

                                </ReviewItemRight>
                              </ReveiwItemWrapper>


                              {/* <ReplyDivWrapperComment item={styles?.ReplyDivWrapperComment} >
                                <ReveiwItemLeftComment item={styles?.ReveiwItemLeftComment}>
                                  <UserImageWrapperComment item={styles?.UserImageWrapperComment}>
                                    <ImageElement src={Auth.isLogin() && AppLinkUrl.privateDomain() ? user?.user_profile_picture : subdomainuser?.user_profile_picture} defaultImage={dummyUserImg} style={styles?.UserImageWrapperCommentImage} />
                                  </UserImageWrapperComment>
                                  <NameRatingDivComment item={styles?.NameRatingDivComment}>
                                    <Text tagType={"p"} style={styles?.UserNameComment} text={Auth.isLogin() && AppLinkUrl.privateDomain() ? user?.user_fullname : subdomainuser?.user_fullname} />
                                  </NameRatingDivComment>
                                </ReveiwItemLeftComment>
                              </ReplyDivWrapperComment> */}

                              {addReply === data._id ?
                                <ReviewItemRightComment item={styles?.ReviewItemRightComment}>
                                  <ReplayTab item={styles?.ReplayTab}>
                                    <FormTextArea
                                      rows={2}
                                      placeholder={'Reply'}
                                      value={reply}
                                      onChange={(e) => handleReplyInput(e)}
                                      maxLength={300}
                                    />
                                  </ReplayTab>
                                  <ReplyBtnWrap item={styles?.ReplyBtnWrap}>
                                    <Button onClick={() => handlePostReply(data._id)} style={styles?.DoneBtn} text={"Done"} />
                                    {/* <BtnDone >Done</BtnDone> */}
                                  </ReplyBtnWrap>
                                </ReviewItemRightComment>
                                :
                                ""
                              }
                              {
                                data?.reply && data?.reply?.length ? data.reply.map((element, key) => {
                                  return (
                                    <ReplyDivWrapper item={styles?.ReplyDivWrapper} key={key}>
                                      <ReveiwItemLeftSubReply item={styles?.ReveiwItemLeftSubReply}>
                                        <UserImageWrapperSubReply item={styles?.UserImageWrapperSubReply}>
                                          {/* <Image src={user2} alt="" /> */}
                                          <ImageElement src={element?.profile_picture ? element?.profile_picture : ""} defaultImage={dummyUserImg} style={styles?.UserImageWrapperSubReplyImage} />

                                        </UserImageWrapperSubReply>

                                        <NameRatingDivSubReply item={styles?.NameRatingDivSubReply}>
                                          {/* <UserName>Wahid Sharma</UserName> */}
                                          <Text tagType={"p"} style={styles?.UserNameSubReply} text={element.fullname} />
                                        </NameRatingDivSubReply>

                                      </ReveiwItemLeftSubReply>
                                      <ReviewItemRightSubReply item={styles?.ReviewItemRightSubReply}>
                                        {/* <UserReview>Yes definitely the product was amazing along with thier good customer support and the fast deliver services. </UserReview> */}
                                        <Text tagType={"p"} style={styles.UserNameDescSubReply} text={element?.message} />

                                      </ReviewItemRightSubReply>
                                    </ReplyDivWrapper>
                                  )
                                }) : (
                                  ""
                                )
                              }

                            </ReviewWithReply>
                          )
                        }) : ("")}
                    </UsersReveiwWrapperContainer>
                  </React.Fragment>
                </ReviewContainer>
              </CustomerReviewsWrapper>
            </ProductRatingConatinerWrapper>
          </MainRightReview>
        </MainReview>
      </ReviewContext.Provider>

    </>
  )
}

export default ReviewAndRating