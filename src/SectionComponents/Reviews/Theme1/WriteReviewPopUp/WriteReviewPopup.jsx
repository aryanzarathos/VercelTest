import React from 'react'
import FormTextArea from '../../../../SectionCommon/Form/FormTextArea';
import UploadImage from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/uploadImg.png';
import ReviewImage from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/reviewImage.png';
import ReviewImage2 from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/reviewImage2.png';
import { useState } from 'react';
import FormError from '../../../../SectionCommon/Form/FormError';
import Image from 'next/image';
import RatingStar from '../RatingStar/RatingStar';
// import CrossImg from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/cross.svg';
import { useContext } from 'react';
import { ReviewContext } from '../Theme1';

import { AnimLabelTop, BorowseMediaPara, BrowseMediaWrap, Circle, HrLine, HrLineLast, IconCross, ImageUploadText, ImageUploaderLimitText, ImageWrap, ImageWrapper, ImgeUploaderButtonWrap, PopUpHeading, PublishBtn, ReviewWrapper, SelectRatingPara, SelectRatingStar, SelectRatingTextWrap, SelectRatingWrapper, UploadImageWrap, UploadImageWrapper, UploadMediaSection, WriteReviewPopups } from './WriteReviewPopUp.style';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import CrossImg from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/cross.svg'
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import ValidationFile from '@/Classes/ValidationFile';
import useReviewCreate from '@/TemplateCustomHooks/useReviewCreate';
import Uploader from '@/CommonComponents/ImageUploader';




const WriteReviewPopup = ({ onclose, id }) => {

  const [closeModal, handleRatingStars, ratings, ratingsError, reviewDesc, handleOnChange, reviewDescError, reviewMedia, openCropper,
    disableButton, handlePublishButton, uploadReviewMedia, openCropperRef, handleCrossIcon] = useReviewCreate(onclose)

  const data = useContext(ReviewContext);
  // console.log(id, "line no 32");

  // console.log(ratings, "line no 130", reviewDesc);

  let ImgData = [ReviewImage, ReviewImage2]
  let styles = {
    WriteReviewPopups: data?.custom_section_editable[51]?.style,
    PopUpHeading: data?.custom_section_editable[52]?.style,
    HrLine: data?.custom_section_editable[53]?.style,
    SelectRatingWrapper: data?.custom_section_editable[54]?.style,
    SelectRatingPara: data?.custom_section_editable[55]?.style,
    SelectRatingStar: data?.custom_section_editable[56]?.style,
    ReviewWrapper: data?.custom_section_editable[57]?.style,
    FormTextLabel: data?.custom_section_editable[58]?.style,
    FormTextInput: data?.custom_section_editable[59]?.style,
    UploadMediaSection: data?.custom_section_editable[60]?.style,
    AnimLabelTop: data?.custom_section_editable[61]?.style,
    UploadImageWrapper: data?.custom_section_editable[62]?.style,
    UploadImageWrap: data?.custom_section_editable[63]?.style,
    UploadImageWrap: data?.custom_section_editable[63]?.style,
    UploadImageWrapImage: data?.custom_section_editable[64]?.style,
    ImageUploadText: data?.custom_section_editable[65]?.style,
    BrowseMediaWrap: data?.custom_section_editable[66]?.style,
    BorowseMediaPara: data?.custom_section_editable[67]?.style,
    ImageUploaderLimitText: data?.custom_section_editable[68]?.style,
    ImageWrapper: data?.custom_section_editable[69]?.style,
    ImageWrap: data?.custom_section_editable[70]?.style,
    ImageWrapImage: data?.custom_section_editable[71]?.style,
    Circle: data?.custom_section_editable[72]?.style,
    CrossImg: data?.custom_section_editable[73]?.style,
    HrLineLast: data?.custom_section_editable[74]?.style,
    ImgeUploaderButtonWrap: data?.custom_section_editable[75]?.style,
    PublishBtn: data?.custom_section_editable[76]?.style,

  }



  return (
    <React.Fragment>
      <div Position="center" slide="center" ClosePopUp={() => closeModal()} ModalsSize={'modal-md'}>
        <div title={'Write a review'} className={'writeReviewpopup-haeder'}></div>
        <div>
          <WriteReviewPopups item={styles?.WriteReviewPopups}>
            {/* <PopUpHeading>
              Write a review
            </PopUpHeading> */}
            <Text tagType={"h1"} style={styles?.PopUpHeading} text={data?.custom_section_editable[52]?.text} />
            <HrLine item={styles?.HrLine} />
            <SelectRatingWrapper item={styles?.SelectRatingWrapper}>
              <Text tagType={"p"} style={styles?.SelectRatingPara} text={data?.custom_section_editable[55]?.text} />
              {/* <SelectRatingPara>Select Rating</SelectRatingPara> */}
              <SelectRatingStar item={styles?.SelectRatingStar}>

                {/* <Rating onRatingClick={handleRatingStars} ratingStar={ratings} IsClickable={true} /> */}
                <RatingStar onRatingClick={handleRatingStars} />
                <FormError
                  show={ratingsError}
                  error="Please select stars."
                />
              </SelectRatingStar>
            </SelectRatingWrapper>

            <ReviewWrapper item={styles?.ReviewWrapper}>
              <FormTextArea
                rows={4}
                label={'Review'}
                labelPosition={'top'}
                value={reviewDesc}
                onChange={(e) => handleOnChange(e)}
                maxlength={350}
                styleFormLabel={styles?.FormTextLabel}
                styleFormTextArea={styles?.FormTextInput}
              />
              <FormError
                show={reviewDescError}
                error="Please enter your review."
              />
            </ReviewWrapper>

            <UploadMediaSection item={styles?.UploadMediaSection}>
              <AnimLabelTop item={styles?.AnimLabelTop}>Upload Media</AnimLabelTop>
              <UploadImageWrapper item={styles?.UploadImageWrapper} aria-disabled={reviewMedia.length === 5 ? true : false}
                onClick={openCropper}
                disabled={reviewMedia.length === 5}
              >
                <UploadImageWrap item={styles?.UploadImageWrap} itemUpload={styles?.UploadImageWrapImage}>
                  <Image src={UploadImage} alt="" />
                  <Text tagType={"p"} style={styles?.ImageUploadText} text={data?.custom_section_editable[65]?.text} />
                </UploadImageWrap>
                <BrowseMediaWrap item={styles?.BrowseMediaWrap}>
                  <Text tagType={"p"} style={styles?.BorowseMediaPara} text={data?.custom_section_editable[67]?.text} />
                </BrowseMediaWrap>
              </UploadImageWrapper>

              <Text tagType="p" style={styles?.ImageUploaderLimitText} text={data?.custom_section_editable[68]?.text} />

              <ImageWrapper item={styles?.ImageWrapper}>
                {reviewMedia && reviewMedia.length > 0 ?
                  reviewMedia.map((item, key) => (
                    <ImageWrap key={key} item={styles?.ImageWrap}>
                      {/* <ImageElement src={item.image} style={styles?.ImageWrapImage} />
                       */}
                      <ImageElement src={item} alt="" style={styles?.ImageWrapImage} />
                      {true ? <Circle item={styles?.Circle} itemCrossSvg={styles?.CrossImg}>
                        <CrossImg onClick={() => handleCrossIcon(item)} />
                      </Circle> : ''}
                    </ImageWrap>
                  )) : ""
                }
              </ImageWrapper>
            </UploadMediaSection>
            <HrLineLast item={styles?.HrLineLast} />
            <ImgeUploaderButtonWrap item={styles?.ImgeUploaderButtonWrap}>
              <Button style={styles?.PublishBtn} aria-disabled="false" text={"Publish Review"} onClick={() => handlePublishButton(id)}></Button>
              {/* <PublishBtn  >Publish Review</PublishBtn> */}
            </ImgeUploaderButtonWrap>
          </WriteReviewPopups>

        </div>
      </div>
      <Uploader size={5}
        accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
        onclose={() => openCropperRef?.current?.close()}
        multiSelect={true} discartRef={openCropperRef} onUploaded={(val) => uploadReviewMedia(val)} uploadLimit={5 - reviewMedia.length} />
    </React.Fragment>

  )
}

export default WriteReviewPopup