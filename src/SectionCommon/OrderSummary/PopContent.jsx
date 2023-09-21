import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormInput from '../Form/FormInput';
import FormError from '../Form/FormError';
// import FormInput from '../../../CommonComponent/Form/FormInput';
import ArrowSvg from '../../Assets/SectionComponent/Icons/arrowSvg.svg';
import { HeadingContainer, TopContainer, RightContainerButton, Midcontainer, BottomContainer, BottomCuponCards, CardsTopContainer, TopLeftContainer, RightButton, CardsSubContainer, DetailsWrap, } from './PopContent.style'
import Text from '../../SectionsLayout/Elements/TextElement/Text'
import { ButtonElement } from '@/SectionsLayout/Elements/ButtonElement/ButtonStyle.js';
import useDiscountCart from '@/TemplateCustomHooks/useDiscountCart';
const PopContent = ({ ClosePopUp, ...PopContent }) => {

  const [couponListSuccess, couponList, handleDiscountCoupon, coupon, handleApplyButton, error] = useDiscountCart()

  // const couponListSuccess = [
  //   {
  //     id: 0,
  //     discountCode: 'FLAT200',
  //     rightButtonContent: 'APPLY',
  //     discountName: 'Apply and save ₹2000 with this coupon',
  //     detail: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
  //     dropDownHeading: 'Details',
  //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, error labore id eaque delectus nulla dignissimos provident ad iste eius facere voluptas libero, illum dolore necessitatibus saepe! Hic, delectus saepe!'
  //   },
  //   {
  //     id: 1,
  //     discountCode: 'FLAT50',
  //     rightButtonContent: 'APPLY',
  //     discountName: 'Apply and save ₹2000 with this coupon',
  //     detail: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
  //     dropDownHeading: 'Details',
  //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, error labore id eaque delectus nulla dignissimos provident ad iste eius facere voluptas libero, illum dolore necessitatibus saepe! Hic, delectus saepe!'
  //   },
  // ]
  const [ShowDetails, SetShowDetails] = useState(null);
  const detailClickHandle = (key) => {
    SetShowDetails(ShowDetails === key ? -1 : key)
  }

  const CancelPopUp = () => {
    if ((!error && coupon)) {
      ClosePopUp()

    }
  }
  // console.log(couponList.discountCode, "coupon check 11")
  return (
    <>
      <Text
        tagType={PopContent.headingPara.tagType}
        text={'Coupons and offers'}
        style={PopContent.headingPara.style}
      />
      <TopContainer item={PopContent.TopContainer} item2={PopContent.topContainerInput}>
        <FormInput
          type="text"
          name="cupon"
          className={'topContainerInput'}
          placeholder="Enter Coupon Code"
          onChange={(e) => handleDiscountCoupon(e)}
          onKeyUp={(e) => handleDiscountCoupon(e)}
          value={coupon}
        />
        <ButtonElement onClick={() => { handleApplyButton(), CancelPopUp() }} item={PopContent.AppyBtn.style}>{PopContent.AppyBtn.text}</ButtonElement>
      </TopContainer >
      <FormError show={error && coupon === ""} error="Coupon not available." />
      <FormError show={error && coupon !== ""} error="Coupon not available." />
      {/* <Text
        tagType={PopContent.AvailableCoupons.tagType}
        text={PopContent.AvailableCoupons.text}
        style={PopContent.AvailableCoupons.style}
      /> */}
      <Text
        tagType={PopContent.headingPara.tagType}
        text={'Available coupons'}
        style={PopContent.headingPara.style}
      />
      <BottomContainer item={PopContent.BottomContainer}>
        {couponListSuccess &&
          couponList.length > 0 ? couponList.map((val, key) => (
            <BottomCuponCards item={PopContent.BottomCuponCards} key={key} >
              <CardsTopContainer item={PopContent.CardsTopContainer} >
                <TopLeftContainer item={PopContent.TopLeftContainer}>
                  <Text
                    tagType={PopContent.discountCode.tagType}
                    text={val?.discountCode}
                    style={PopContent.discountCode.style}
                  />
                </TopLeftContainer>
                <ButtonElement
                  item={PopContent.AppyBtn2.style}
                  onClick={() => { handleApplyButton(val._id), ClosePopUp() }}
                >{PopContent.AppyBtn2.text}</ButtonElement>
              </CardsTopContainer>
              <CardsSubContainer item={PopContent.CardsSubContainer}>
                <Text
                  tagType={PopContent.discountName.tagType}
                  text={val.discountName}
                  style={PopContent.discountName.style}
                />
                <Text
                  tagType={PopContent.detail.tagType}
                  text={val.detail ? val.detail : ""}
                  style={PopContent.detail.style}
                />
                {/* <DetailsWrap item={PopContent.DetailsWrap} onClick={() => { detailClickHandle(key) }}>

                  <Text
                    tagType={PopContent.Details.tagType}
                    text={PopContent.Details.text}
                    style={PopContent.Details.style}
                  /> <ArrowSvg height={PopContent.ArrowSvg.height} width={PopContent.ArrowSvg.width} fill={PopContent.ArrowSvg.fill} className={`${ShowDetails == key ? 'rotate' : ''}`} />
                </DetailsWrap>

                <Text
                  tagType={PopContent.detail.tagType}
                  text={ShowDetails === key ? val.details : ""}
                  style={PopContent.detail.style}
                /> */}
              </CardsSubContainer>
            </BottomCuponCards>
          )) : "No Coupons Available"
        }

      </BottomContainer>
    </>
  )
}

export default PopContent