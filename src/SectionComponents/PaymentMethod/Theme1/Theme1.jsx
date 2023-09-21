import React from 'react'
// import { Container } from '../../CommonComponent/Container.styled';
// import styled from 'styled-components';
// import AppLink from '../../../../../Common/AppLink'
import Razer from '../../../Assets/SectionComponent/Images/PaymentMethod/razerpay.png'
import LogoInstamojo from '../../../Assets/SectionComponent/Images/PaymentMethod/logo_instamojo.webp'
import Usaepay from '../../../Assets/Icons/Usaepay_logo.png'
import { useState } from "react";
// import Link from 'next/link';
// import Image from 'next/image';
import { CodContainer, CodMethod, CodText, Row, Line, ProgressContainer, ImgItem, InputRadio, LayoutSectionLt, LinkRazer, OnlinePayContainer, PaymentMethodText, PaymentText, PodMethod, PodText } from './PaymentMethodTheme1.style';
import CartMobileSection from '../../Cart/Theme1/CartMobileSection/CartMobileSection';
import ProgressTheme1 from '../../Progress/Theme1/Theme1';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import OrderSummary from '../../../SectionCommon/OrderSummary/OrderSummary';
import usePaymentMethod from '@/TemplateCustomHooks/usePaymentMethod';
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import UsaEpay from '@/CommonComponents/UsaEpay/UsaEpay';
import { useRef } from 'react';
import Image from 'next/image';
import usePriceDifference from '@/CustomHooks/usePriceDifference';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';



const PaymentMethod1 = ({ children }) => {
    const [activeTab, setActiveTab] = useState(false);
    const mainRef = useRef();
    const handleActive = (index) => {
        setActiveTab(index)
    }
    const closeUsaEpay = () => {
        mainRef.current.close();
    }
    const handleUsaEpay = () => {

        mainRef.current.open()
    }

    function handleTransactionApi(data) {

        handleRazorpay(data)
        // all api hitting logic
    }
    let cartMobile = {
        shoppingCartMobile: children.custom_section_editable[0],
        btnContain: children.custom_section_editable[1],
        backBtn: children.custom_section_editable[2],
        backBtnText: children.custom_section_editable[3],
        productCount: children.custom_section_editable[4],
    }

    let styleProgressBar = {
        progressContainer: children.custom_section_editable[6],
        processSection: children.custom_section_editable[7],
        main: children.custom_section_editable[8],
        processStep: children.custom_section_editable[9],
        number: children.custom_section_editable[10],
        numberActive: children.custom_section_editable[10].style.desktop.active,
        text: children.custom_section_editable[11],
        CheckWrap: children.custom_section_editable[43],
        CheckSvg: children.custom_section_editable[44].style.desktop,
        Activenumber: children.custom_section_editable[72],
        ActiveText: children.custom_section_editable[73],
    }
    // console.log(children.custom_section_editable.length, "children.custom_section_editable")
    let orderSummary = {
        layoutSectionRt: children.custom_section_editable[26],
        orderSummaryContainer: children.custom_section_editable[27],
        orderSumaryText: children.custom_section_editable[28],
        orderText: children.custom_section_editable[29],
        subtotal: children.custom_section_editable[30],
        subTotalHeading: children.custom_section_editable[31],
        subTotalPara: children.custom_section_editable[32],
        shipping: children.custom_section_editable[33],
        shippingHeading: children.custom_section_editable[34],
        shippingPara: children.custom_section_editable[35],
        totalAmmount: children.custom_section_editable[36],
        totalHeading: children.custom_section_editable[37],
        totalPara: children.custom_section_editable[38],
        button: children.custom_section_editable[39],
        cartIconMain: children.custom_section_editable[40],
        cartSvg: children.custom_section_editable[41],
        CuponPage: {
            CuponMainContainer: children.custom_section_editable[45].style,
            HorizontalLine: children.custom_section_editable[46].style,
            CuponsubContainer: children.custom_section_editable[47].style,
            SubLeftContainer: children.custom_section_editable[48].style,
            CouponsPara: children.custom_section_editable[49],
            ApplyCouponPara: children.custom_section_editable[50],
            PromoCode: children.custom_section_editable[51].style.desktop,
            SubRightContainer: children.custom_section_editable[52].style,
            removeEditBtn: children.custom_section_editable[53].style,
            ArrowSvg: children.custom_section_editable[54].style.desktop,
            PopContent: {
                headingPara: children.custom_section_editable[55],
                AppyBtn: children.custom_section_editable[56],
                TopContainer: children.custom_section_editable[57].style,
                AvailableCoupons: children.custom_section_editable[58],
                BottomContainer: children.custom_section_editable[59].style,
                BottomCuponCards: children.custom_section_editable[60].style,
                CardsTopContainer: children.custom_section_editable[61].style,
                TopLeftContainer: children.custom_section_editable[62].style,
                discountCode: children.custom_section_editable[63],
                AppyBtn2: children.custom_section_editable[64],
                CardsSubContainer: children.custom_section_editable[65].style,
                discountName: children.custom_section_editable[66],
                detail: children.custom_section_editable[67],
                DetailsWrap: children.custom_section_editable[68].style,
                Details: children.custom_section_editable[69],
                ArrowSvg: children.custom_section_editable[70].style.desktop,
                topContainerInput: children.custom_section_editable[71].style,
            }

        }

    }

    let style = {
        progressContainer: children.custom_section_editable[5],
        row: children.custom_section_editable[12],
        line: children.custom_section_editable[13],
        layoutSectionLt: children.custom_section_editable[14],
        paymentMethodText: children.custom_section_editable[15],
        paymentText: children.custom_section_editable[16],
        codContainer: children.custom_section_editable[17],
        inputRadio: children.custom_section_editable[18],
        codMethod: children.custom_section_editable[19],
        codText: children.custom_section_editable[20],
        podText: children.custom_section_editable[21],
        onlinePayContainer: children.custom_section_editable[22],
        podMethod: children.custom_section_editable[23],
        imgItem: children.custom_section_editable[24],
        image: children.custom_section_editable[25],
        LinkRazer: children.custom_section_editable[42],
    }

    const [getbusinessInfoSuccess, getbusinessInfoData, customerCartSuccess, customerCartData,
        paymentMode, handlePaymentMode, disableContinueButton, handleRazorpay, changeStep, partialCod, getPartialChargesSuccess,
        getPartialChargesData, handlePartialCod, disableCodOption, cartConditionCOD] = usePaymentMethod()
    const [, , , getPrice] = usePriceDifference();

    let finalData = !AppLinkUrl.isEditor() && customerCartSuccess && customerCartData ? customerCartData : [];

    return (
        <>
            <CartMobileSection finalData={finalData} {...cartMobile} />
            <ProgressContainer item={style.progressContainer.style}>
                <ProgressTheme1 {...styleProgressBar} />
            </ProgressContainer>
            <Row item={style.row.style} >
                <Line item={style.line.style}></Line>
                <LayoutSectionLt item={style.layoutSectionLt.style}>
                    <PaymentMethodText item={style.paymentMethodText.style} >
                        <Text tagType={style.paymentText.tagType} text={style.paymentText.text} style={style.paymentText.style} />
                        {/* <PaymentText>Select Payment Method</PaymentText> */}

                    </PaymentMethodText>
                    <label htmlFor='shippingradio12'  >
                        <CodContainer item={style.codContainer.style} className={`${"CodContainer"} ${activeTab === "CodContainer" && ('active')}`}
                            onClick={() => handleActive("CodContainer")}>
                            <InputRadio item={style.inputRadio.style} type="radio" name='radio' id='shippingradio12'
                                disabled={disableContinueButton || disableCodOption || cartConditionCOD === true}
                                checked={paymentMode === "cashOnDelivery"} onChange={(e) => handlePaymentMode("cashOnDelivery")} />
                            <CodMethod item={style.codMethod.style} >
                                <Text tagType={style.codText.tagType} text={style.codText.text} style={style.codText.style} />
                                {/* <CodText>Cash on Delivery</CodText> */}
                                {partialCod && partialCod === true ?
                                    <>
                                        <Text tagType={style.podText.tagType} text={`Pay
                                                        ${getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.partial_amount ? ` ₹${getPartialChargesData?.partial_amount} ` : ""}
                                                        for COD to be applicable. The remaining amount is to be paid on delivery`} style={style.podText.style} />
                                        <Text tagType={style.podText.tagType} text={`Pay
                                                    ${getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.partial_amount ? ` ₹${getPartialChargesData?.partial_amount} ` : ""}
                                                    for COD to be applicable. The remaining amount is to be paid on delivery`} style={style.podText.style} />
                                    </>
                                    : ""
                                }

                                {/* <PodText>Pay on delivery</PodText> */}
                            </CodMethod>
                        </CodContainer>
                        {getbusinessInfoSuccess && getbusinessInfoData && !getbusinessInfoData.cash_on_delivery_enabled
                            ?
                            <p className='info-text'>COD is not available on this product.</p>
                            :
                            getbusinessInfoSuccess && getbusinessInfoData &&
                                (!getbusinessInfoData.cash_on_delivery_enabled) &&
                                ((getbusinessInfoData?.cash_on_delivery_price_limit || getbusinessInfoData?.cash_on_delivery_price_limit === null) < customerCartData?.CartTotalAmount)
                                ?
                                <p className='info-text'>COD is not availabe on this product.</p>
                                :
                                getbusinessInfoSuccess && getbusinessInfoData && customerCartData?.data?.every((i) => i?.product?.cod === true) &&
                                    ((getbusinessInfoData?.cash_on_delivery_price_limit || getbusinessInfoData?.cash_on_delivery_price_limit === null) > customerCartData?.CartTotalAmount)
                                    ?
                                    <p className='info-text'>COD is available on this product.</p>
                                    :
                                    customerCartData?.data?.every((i) => i.product.cod !== true) ?
                                        <p className='info-text'>Please check your cart, few products are not applicable for COD</p>
                                        :
                                        <p className='info-text'></p>
                        }
                    </label>
                    {getbusinessInfoData && getbusinessInfoData.has_usaepay &&
                        <label htmlFor='shippingradio14'>
                            <CodContainer item={style.codContainer.style} className={` ${activeTab === "AzlitContainer" && 'active'}`}
                                onClick={() => handleActive("AzlitContainer")} >
                                <InputRadio item={style.inputRadio.style} type="radio" name='radio' id='shippingradio14'
                                    checked={paymentMode === "UsaEpay"} onChange={(e) => handlePaymentMode("UsaEpay")} />
                                <PodMethod>
                                    <ImgItem>
                                        <Image src={Usaepay} alt="" />
                                    </ImgItem>
                                    <a href='https://usaepay.com/' rel="noreferrer" target='_blank'><LinkRazer>Site: www.help.usaepay.info</LinkRazer></a>
                                </PodMethod>
                            </CodContainer>
                        </label>
                    }
                    {getbusinessInfoData && getbusinessInfoData.has_razorpay && getbusinessInfoData.razorpay_acount_id &&
                        <label label htmlFor='shippingradio13'>
                            <CodContainer item={style.codContainer.style} className={`${"OnlinePayContainer"} ${activeTab === "OnlinePayContainer" && ('active')}`}
                                onClick={() => handleActive("OnlinePayContainer")} aria-disabled={!getbusinessInfoData.razorpay_acount_id}>
                                <InputRadio item={style.inputRadio.style} type="radio" name='radio' id='shippingradio13' disabled={!getbusinessInfoData.razorpay_acount_id}
                                    checked={paymentMode === "Razorpay"} onChange={(e) => handlePaymentMode("Razorpay")} />
                                <PodMethod>
                                    <ImgItem>
                                        <Image src={Razer} alt="" />
                                    </ImgItem>
                                    <a href='https://razorpay.com/' rel="noreferrer" target='_blank'><LinkRazer>Site: www.razorpay.com</LinkRazer></a>
                                </PodMethod>
                            </CodContainer>
                        </label>
                    }
                    {/* Insta Mojo part  */}

                    {getbusinessInfoData && getbusinessInfoData.has_mojo &&
                        <label label htmlFor='shippingradio15'>
                            <CodContainer item={style.codContainer.style} className={`${"OnlinePayContainer"} ${activeTab === "OnlinePayContainer" && ('active')}`}
                                onClick={() => handleActive("OnlinePayContainer")} aria-disabled={!getbusinessInfoData.has_mojo}>
                                <InputRadio disabled={!getbusinessInfoData.has_mojo} item={style.inputRadio.style} type="radio" name='radio' id='shippingradio15'
                                    checked={paymentMode === "Mojo"} onChange={(e) => handlePaymentMode("Mojo")} />
                                <PodMethod>
                                    <ImgItem item={style.imgItem.style}>
                                        <ImageElement src={LogoInstamojo} alt="" style={style.image.style} />
                                        {/* <Image src={LogoInstamojo} alt="" style={style.image.style} /> */}
                                    </ImgItem>
                                    <a href='www.instamojo.com/' rel="noreferrer" target='_blank'><LinkRazer>Site: www.instamojo.com</LinkRazer></a>
                                </PodMethod>
                            </CodContainer>
                        </label>
                    }

                </LayoutSectionLt>
                {customerCartSuccess &&
                    <OrderSummary
                        submitCart={(data) => handleRazorpay(data)}
                        // discount={totalDiscount}
                        // prodTot={productTotal}
                        // grTot={grandTotal}
                        codStatus={customerCartData.data}
                        paymentMode={paymentMode}
                        handleUsaEpay={() => handleUsaEpay()}
                        // codOption={(v) => { codStatusHandler(v) }}
                        page="PaymentMode"
                        deliveryFees={customerCartData.shippingPrice ? customerCartData.shippingPrice : 0}
                        disabled={(disableContinueButton || disableCodOption || cartConditionCOD) && paymentMode === "cashOnDelivery"}
                        shippingValid={true}
                        partialCod={partialCod}
                        getPartialChargesSuccess={getPartialChargesSuccess}
                        getPartialChargesData={getPartialChargesData}
                        handlePartialCod={handlePartialCod}
                        orderSummaryStyle={orderSummary}
                    />
                }
            </Row >
            <UsaEpay
                getbusinessInfoData={getbusinessInfoData}
                ref={mainRef}
                closeModal={() => closeUsaEpay()}
                successUrl={"/my-orders"}
                handleDataSuccess={(data) => handleTransactionApi(data)}
                totalPrice={customerCartSuccess && customerCartData?.TotalPrice ? customerCartData?.TotalPrice + (customerCartData.shippingPrice ? customerCartData.shippingPrice : 0) : 0}
                addressTab={false}
            />
        </>
    )
}

export default PaymentMethod1