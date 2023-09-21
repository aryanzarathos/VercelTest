import React, { useEffect, useLayoutEffect } from 'react';
import Razer from '../../../Assets/SectionComponent/Images/PaymentMethod/razerpay.png';
import { Amount, AppointmentTxt, BackIcon, BackWrap, BreadCrumbContainer, BreadrumbWrap, Button, CodTxt, CodTxtWrap, CodWrap, Input, MethodTxt, OrderSummery, OrderSummeryWrap, PaymentMethodContainer, PaymentMethodWrap, PaymentWrap, RazerImg, RazerPayWrap, RazerWrap, ServiceTxt, SiteTxt, SummaryTxt, TotalWrap, Txt, TxtWrap } from './PaymentTheme2.style'
// import Breadcrumb from "../../../CommonComponents/Breadcrumb";
// import BreadcrumbItem from "../../../CommonComponents/Breadcrumb/BreadcrumbItem"
import Image from 'next/image';



const PaymentMethod2 = () => {

    return (
        <PaymentMethodContainer>
            <BreadrumbWrap>
                {/* <BreadCrumbContainer>
                    <AppointmentTxt>Appointment</AppointmentTxt>
                    <Breadcrumb>
                        <BreadcrumbItem to="/" title="Home" />
                        <BreadcrumbItem to="/Book an Appointment" title="Book an Appointment" />
                        <BreadcrumbItem to="/Payment" title="Payment" />
                    </Breadcrumb>
                </BreadCrumbContainer> */}
                <BackWrap><BackIcon></BackIcon><span>Back</span> </BackWrap>
            </BreadrumbWrap>
            <PaymentWrap>
                <PaymentMethodWrap>
                    <MethodTxt>Select Payment Method</MethodTxt>
                    <label htmlFor="radio1">
                        <CodWrap className={"CodWrap"} onClick={""}>
                            <Input type="radio" name='radio' id='radio1' checked={"cashOnDelivery"} />
                            <CodTxtWrap>
                                <CodTxt>Pay on Arrival</CodTxt>
                                <ServiceTxt>Pay once service is recieved</ServiceTxt>
                            </CodTxtWrap>
                        </CodWrap>
                    </label>
                    <label htmlFor="radio2">
                        <RazerWrap className={"RazerWrap"} onClick={""}>
                            <Input type="radio" name='radio' checked={"Razorpay"} id='radio2' disabled={""} />
                            <RazerPayWrap>
                                <RazerImg><Image src={Razer} alt="" /></RazerImg>
                                <SiteTxt>Site: www.razorpay.com</SiteTxt>
                            </RazerPayWrap>
                        </RazerWrap>
                    </label>

                </PaymentMethodWrap>
                <OrderSummeryWrap>
                    <OrderSummery>
                        <SummaryTxt>Order Summary</SummaryTxt>
                        <TxtWrap>
                            <Txt>Subtotal :</Txt>
                            <Amount>{"0"}</Amount>
                        </TxtWrap>
                        <TxtWrap>
                            <Txt>Taxes :</Txt>
                            <Amount>{"0"}</Amount>
                        </TxtWrap>
                        <TotalWrap>
                            <Txt>Total :</Txt>
                            <Amount>{"0"}</Amount>
                        </TotalWrap>
                        <Button onClick={""}>Continue</Button>
                    </OrderSummery>
                </OrderSummeryWrap>
            </PaymentWrap>
        </PaymentMethodContainer>
    )
}

export default PaymentMethod2