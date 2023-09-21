import React, { useEffect, useLayoutEffect, useRef } from 'react'
// import { Container } from '../../CommonComponent/Container.styled';
// import styled from 'styled-components';
// import AppLink from '../../../../../Common/AppLink'
import Razer from '../../../Assets/SectionComponent/Images/PaymentMethod/razerpay.png'
import usaEpay from "../../../Assets/Icons/Usaepay_logo.png"
import LogoInstamojo from '../../../Assets/SectionComponent/Images/PaymentMethod/logo_instamojo.webp'

import { useState } from "react";
// import Link from 'next/link';
// import Image from 'next/image';
import useAppNavigate from "@/CustomHooks/useAppNavigate"
import { CodContainer, SummaryTxt, OrderSummeryWrap, OrderSummery, TxtWrap, Txt, Amount, TotalWrap, CodMethod, CodText, Row, Line, ProgressContainer, ImgItem, InputRadio, LayoutSectionLt, LinkRazer, OnlinePayContainer, PaymentMethodText, PaymentText, PodMethod, PodText, BackWrapper, WrapperLeft, WrapperRight } from './PaymentMethodTheme1.style';
import CartMobileSection from '../../Cart/Theme1/CartMobileSection/CartMobileSection';
import ProgressTheme1 from '../../Progress/Theme1/Theme1';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import OrderSummary from '../../../SectionCommon/OrderSummary/OrderSummary';
import usePaymentMethod from '@/TemplateCustomHooks/usePaymentMethod';
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import BackIcon from "../../../Assets/SectionComponent/Images/ServicePayment/backIcon.svg"
import { useDispatch, useSelector } from 'react-redux';
import AppLinkUrl from '../../../CommonComponents/AppLink/AppLinkUrl';
import usePriceDifference from '@/CustomHooks/usePriceDifference';
import { getAppointmentCart, getSingleServiceDetail, postAppointmentDetail } from '@/store/actions/bookAppointment';
import UsaEpay from '@/CommonComponents/UsaEpay/UsaEpay';
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';

const ServicesPaymentMethodTheme1 = ({ children }) => {

    const [activeTab, setActiveTab] = useState("cashOnDelivery");

    const handleActive = (index) => {
        setActiveTab(index)
    }
    const mainRef = useRef();

    const closeUsaEpay = () => {
        mainRef.current.close();
    }
    const handleUsaEpay = () => {

        mainRef.current.open()
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
    const dispatch = useDispatch();
    const history = useAppNavigate();
    const [, , , getPrice] = usePriceDifference();
    const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data)
    const {
        users, subdomainUsers, appointmentCartSuccess, getSingleServiceDetaildata, Ownerdata, appointmentCartData,
    } = useSelector(
        (state) => {
            return {
                users: state.user,
                subdomainUsers: state.subdomainuser,
                Ownerdata: state.websiteTemplate.getTemplate.data,
                // insID: state.user.user_institute,
                // ownerID: state.user._id,
                // institute: state.user.user_institute,
                // businesstype: state.user.user_business_type,
                // loading: state.bookAppointment.postAppointment.loading,
                // success: state.bookAppointment.postAppointment.success,

                getSingleServiceDetailSuccess: state.bookAppointment.getSingleService.success,
                getSingleServiceDetailLoading: state.bookAppointment.getSingleService.loading,
                getSingleServiceDetaildata: state.bookAppointment.getSingleService.data,

                appointmentCartSuccess: state.bookAppointment.appointmentCart.success,
                appointmentCartLoading: state.bookAppointment.appointmentCart.loading,
                appointmentCartData: state.bookAppointment.appointmentCart.data,
            }
        }
    );

    const [currentuser, setcurrentuser] = useState("");
    const [load, setload] = useState(false);
    // console.log(subdomainUsers, "shadab line 154");
    useLayoutEffect(() => {
        setcurrentuser(AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id);
    }, [users, subdomainUsers]);

    useEffect(() => {
        let data = {
            id: appointmentCartData?.service,
            userId: Ownerdata?.owner
        }
        dispatch(getSingleServiceDetail(businessData?._id, data))
    }, [dispatch, businessData, Ownerdata, appointmentCartData])

    useLayoutEffect(() => {
        setcurrentuser(AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id);
    }, [users, subdomainUsers]);

    useEffect(() => {
        dispatch(getAppointmentCart(AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id, businessData._id));
    }, []);
    const getRandomId = () => {
        var d = new Date();
        function f(n) {
            return n < 10 ? '0' + n : n;
        }
        var random_num = Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
        random_num = d.getFullYear() + f(d.getMonth() + 1) + f(d.getDate()) + random_num;
        return random_num
    };
    const handleRazorpay = (ccData, type) => {
        const businessShopid = businessData?._id;
        const userId = AppLinkUrl.privateDomain() ? users._id : subdomainUsers._id;
        let body = {
            user: userId,
            business: businessShopid,
            cart: appointmentCartSuccess && appointmentCartData._id,
            order_payment_method: activeTab
        };

        // console.log(ccData, type, "ccData, type")
        // if (type == "Mojo") {
        //     const argsDara = {

        //     }
        //     body = {
        //         ...body,
        //         order_payment_method: "Mojo",
        //         ...argsData
        //     }
        // }
        if (type == "usaepay") {
            const argsData = {
                "command": "cc:sale",
                "creditcard": {
                    ...ccData?.creditcard
                },
                "amount": appointmentCartData?.CartTotal || 0,
                "amount_detail": {
                    "tax": "0",
                    "tip": "0"
                },
                "invoice": getRandomId()
            }
            body = {
                ...body,
                order_payment_method: "usaepay",
                ccData: ccData?.creditcard,
                ...argsData
            }
        }
        // console.log(body, "body")
        const data = {
            user: userId,
            bookingSlotId: appointmentCartData.bookingSlotId,
            booking_date: appointmentCartData.booking_date,
            booking_time: appointmentCartData.booking_time,
            business: appointmentCartData.business,
            contact: appointmentCartData.contact,
            countryCode: appointmentCartData.countryCode,
            customFields: appointmentCartData.customFields,
            email: appointmentCartData.email,
            full_name: appointmentCartData.full_name,
            institute: appointmentCartData.institute,
            owner: appointmentCartData.owner,
            service: appointmentCartData?.service,
            totalAmount: appointmentCartData?.CartTotal || 0,
            redirect_url: `http://${AppLinkUrl.getHost()}/mojo-order-booking-success`
        };
        dispatch(postAppointmentDetail(body, history, businessData.business_name, businessData, "Services", data));
        setload(true);
        // console.log(body, history, businessData.business_name, businessData, data, "post cart")
    }
    function handleTransactionApi(data) {
        handleRazorpay(data, "usaepay")
    }

    return (
        <>

            <BackWrapper>
                <WrapperLeft>
                </WrapperLeft>
                <WrapperRight onClick={() => history(-1)}>
                    <BackIcon width={20} height={20} fill={"red"} />
                    <p>Back</p>
                </WrapperRight>
            </BackWrapper>
            <ProgressContainer item={style.progressContainer.style}>
                <ProgressTheme1 {...styleProgressBar} step={3} />
            </ProgressContainer>
            <Row item={style.row.style} >
                <Line item={style.line.style}></Line>
                <LayoutSectionLt item={style.layoutSectionLt.style}>
                    <PaymentMethodText item={style.paymentMethodText.style} >
                        <Text tagType={style.paymentText.tagType} text={style.paymentText.text} style={style.paymentText.style} />
                    </PaymentMethodText>
                    <label htmlFor='shippingradio12'  >
                        <CodContainer item={style.codContainer.style} className={`${"CodContainer"} ${activeTab === "cashOnDelivery" ? 'active' : ""}`}
                            onClick={() => { businessData?.cash_on_delivery_enabled && handleActive("cashOnDelivery") }}>
                            <InputRadio
                                item={style.inputRadio.style}
                                type="radio"
                                name='radio'
                                id='shippingradio12'
                                checked={activeTab === "cashOnDelivery"}
                                disabled={!businessData?.cash_on_delivery_enabled}
                            />

                            <CodMethod item={style.codMethod.style} >
                                <Text
                                    tagType={style.codText.tagType}
                                    text={`Pay on Arrival`}
                                    style={style.codText.style}
                                />
                                <Text tagType={style.podText.tagType} text={`Pay once service is recieved`} style={style.podText.style} />
                            </CodMethod>
                        </CodContainer>
                    </label>
                    {
                        businessData?.has_razorpay && businessData?.razorpay_acount_id &&
                        <label htmlFor='shippingradio13'>
                            <OnlinePayContainer
                                item={style.onlinePayContainer.style}
                                className={`${"OnlinePayContainer"} ${activeTab === "Razorpay" && 'active'}`}
                                onClick={() => { businessData?.razorpay_acount_id && getSingleServiceDetaildata?.data?.allowClientsOnline && handleActive("Razorpay") }}
                            >
                                <InputRadio
                                    item={style.inputRadio.style}
                                    type="radio"
                                    name='radio'
                                    id='shippingradio13'
                                    checked={activeTab === "Razorpay"}
                                    onChange={""}
                                />
                                <PodMethod item={style.podMethod.style}>
                                    <ImgItem item={style.imgItem.style}>
                                        <ImageElement src={Razer} alt={style.image.altText} style={style.image.style} />
                                    </ImgItem>
                                    <AnchorElement link='/'><Text text={style.LinkRazer.text} style={style.LinkRazer.style}></Text></AnchorElement>
                                </PodMethod>
                            </OnlinePayContainer>
                        </label>
                    }
                    {
                        businessData?.has_usaepay &&
                        <label htmlFor='shippingradio13'>
                            <OnlinePayContainer
                                item={style.onlinePayContainer.style}
                                className={`${"OnlinePayContainer"} ${activeTab === "UsaEpay" && 'active'}`}
                                onClick={() => { businessData?.razorpay_acount_id && getSingleServiceDetaildata?.data?.allowClientsOnline && handleActive("UsaEpay") }}
                            >
                                <InputRadio
                                    item={style.inputRadio.style}
                                    type="radio"
                                    name='radio'
                                    id='shippingradio13'
                                    checked={activeTab === "UsaEpay"}
                                    onChange={""}
                                />
                                <PodMethod item={style.podMethod.style}>
                                    <ImgItem item={style.imgItem.style}>
                                        <ImageElement src={usaEpay} alt={style.image.altText} style={style.image.style} />
                                    </ImgItem>
                                    <AnchorElement link='/'><Text text={"UsaEpay"} style={style.LinkRazer.style}></Text></AnchorElement>
                                </PodMethod>
                            </OnlinePayContainer>
                        </label>
                    }
                    {
                        businessData?.has_mojo &&
                        <label htmlFor='shippingradio13'>
                            <OnlinePayContainer
                                item={style.onlinePayContainer.style}
                                className={`${"OnlinePayContainer"} ${activeTab === "Mojo" && 'active'}`}
                                onClick={() => { getSingleServiceDetaildata?.data?.allowClientsOnline && handleActive("Mojo") }}
                            >
                                <InputRadio
                                    item={style.inputRadio.style}
                                    type="radio"
                                    name='radio'
                                    id='shippingradio13'
                                    checked={activeTab === "Mojo"}
                                    onChange={""}
                                />
                                <PodMethod item={style.podMethod.style}>
                                    <ImgItem item={style.imgItem.style}>
                                        <ImageElement src={LogoInstamojo} alt={style.image.altText} style={style.image.style} />
                                    </ImgItem>
                                    <AnchorElement link='/'><Text text={"Site: https://www.instamojo.com"} style={style.LinkRazer.style}></Text></AnchorElement>
                                </PodMethod>
                            </OnlinePayContainer>
                        </label>
                    }
                </LayoutSectionLt>
                <OrderSummeryWrap>
                    <OrderSummery item={orderSummary.orderSummaryContainer.style}>
                        <Text tagType={orderSummary.orderText.tagType} text={orderSummary.orderText.text} style={orderSummary.orderText.style} />
                        <TxtWrap item={orderSummary.subtotal.style}>
                            <Text tagType={orderSummary.subTotalHeading.tagType} text={orderSummary.subTotalHeading.text} style={orderSummary.subTotalHeading.style} />
                            <Text tagType={orderSummary.subTotalPara.tagType} style={orderSummary.subTotalPara.style} >{getPrice(appointmentCartData?.CartTotal || 0)}</Text>
                        </TxtWrap>
                        <TotalWrap item={orderSummary.totalAmmount.style}>
                            {/* <Txt>Total :</Txt> */}
                            <Text tagType={orderSummary.totalHeading.tagType} text={orderSummary.totalHeading.text} style={orderSummary.totalHeading.style} />
                            <Text tagType={orderSummary.totalPara.tagType} style={orderSummary.totalPara.style} >{getPrice(appointmentCartData?.CartTotal || 0)}</Text>
                        </TotalWrap>
                        {load ?
                            <Button style={{ desktop: { backgroundColor: "transparent" } }}>Loading...</Button>
                            :
                            < Button
                                //  className="loadingButton"
                                style={orderSummary.button.style} onClick={activeTab == "UsaEpay" ? () => handleUsaEpay() : activeTab == "Mojo" ? () => handleRazorpay("", "Mojo") : () => handleRazorpay()}>Continue</Button>}
                    </OrderSummery>
                </OrderSummeryWrap>
            </Row >
            <UsaEpay
                getbusinessInfoData={businessData}
                ref={mainRef}
                closeModal={() => closeUsaEpay()}
                successUrl={"/booking-success"}
                handleDataSuccess={(data) => handleTransactionApi(data)}
                totalPrice={appointmentCartData?.CartTotal || 0}
                addressTab={false}
            />
        </>
    )
}

export default ServicesPaymentMethodTheme1