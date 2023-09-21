// import '../../../../assets/Style/_base.scss';
import React, { useEffect } from 'react';
// import ForwardIcon from '../../../assets/Images/OrderSummary/forwardIcon.svg';
import PromoCode from '../../Assets/SectionComponent/Icons/PromoCode.svg';
import ArrowSvg from '../../Assets/SectionComponent/Icons/Arrow1.svg';
import styled from 'styled-components';
// import CuponPagePopUp from './CuponPagePopUp';
import { useRef } from 'react';
import Modal from '../../SectionCommon/Modal/index'
import ModalBody from '../../SectionCommon/Modal/ModalBody'
import PopContent from './PopContent';
import Text from '../../SectionsLayout/Elements/TextElement/Text'
import ButtonElement from '../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import { CuponMainContainer, HorizontalLine, CuponsubContainer, SubLeftContainer, LeftContentContainer, SubRightContainer, RightContainerButton, } from './CuponPage.style'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { removeAppliedCoupon } from '@/store/actions/discountCoupon';
import { useDispatch } from 'react-redux';
import Auth from '@/Classes/Auth';
const OrderSummaryCuponPage = ({ customerCartSuccess, customerCartData, CuponPage }) => {

  const popUpHandle = useRef(null);
  const child = useRef(false);
  const dispatch = useDispatch();

  const handleClick = (action) => {
    if (action === "Remove") {
      child.current = true;
      dispatch(removeAppliedCoupon(customerCartData?.data[0]?.cartId,
        (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())));
    } else {
      if (!child.current) {
        popUpHandle.current.open();
      }
      // popUpHandle.current.close();

    }
  }

  const closeModal = () => {
    popUpHandle.current.close();
  }
  const openModal = () => {
    popUpHandle.current.open();

  }

  // console.log(customerCartData, "couponxxxxxxxxxxyyyyzzzz")

  return (
    <>
      <CuponMainContainer item={CuponPage?.CuponMainContainer} onClick={() => { handleClick("main") }}>
        <HorizontalLine item={CuponPage?.HorizontalLine} />
        <CuponsubContainer item={CuponPage?.CuponsubContainer} >
          <SubLeftContainer item={CuponPage?.SubLeftContainer}>
            <PromoCode height={CuponPage?.PromoCode?.height} width={CuponPage?.PromoCode?.width} />
            <LeftContentContainer>
              <Text
                tagType={CuponPage?.CouponsPara?.tagType}
                text={customerCartSuccess && customerCartData && customerCartData?.coupon ? '1 Coupon applied' : 'Coupons'}
                style={CuponPage?.CouponsPara?.style}
              />
              <Text
                tagType={CuponPage?.ApplyCouponPara?.tagType}
                text={customerCartSuccess && customerCartData && customerCartData?.coupon ?
                  `You saved additional ₹ ${customerCartSuccess && customerCartData && customerCartData?.couponDiscount ? customerCartData?.couponDiscount : 0}`
                  : 'Apply Coupons and save extra'}
                style={CuponPage?.ApplyCouponPara?.style}
              />
            </LeftContentContainer>
          </SubLeftContainer>
          <SubRightContainer item={CuponPage?.SubRightContainer}>
            {
              true ?
                <>
                  {customerCartSuccess && customerCartData && customerCartData?.coupon ? (
                    <ButtonElement text={'Remove'} style={CuponPage.removeEditBtn}
                      onClick={() => { handleClick("Remove") }} />
                  ) :
                    <ArrowSvg height={12} width={12} onClick={openModal} />
                  }
                </>
                :
                <>
                  {
                    false ? (
                      <ButtonElement text={'EDIT'} style={CuponPage.removeEditBtn} />
                    ) :
                      <ArrowSvg height={CuponPage?.ArrowSvg?.height} width={CuponPage?.ArrowSvg?.width} fill={CuponPage?.ArrowSvg?.fill} />
                  }
                </>
            }
          </SubRightContainer>
        </CuponsubContainer>
        <HorizontalLine item={CuponPage?.HorizontalLine} />
      </CuponMainContainer>

      <Modal ref={popUpHandle} ModalsSize={`${window.innerWidth > "600" ? ('modal-s') : ('modal-xl')}`} Position="center" slide="center" onclose={closeModal} >
        <ModalBody>
          <PopContent {...CuponPage?.PopContent} ClosePopUp={closeModal} />
        </ModalBody>
      </Modal>
    </>
  )
}

export default OrderSummaryCuponPage