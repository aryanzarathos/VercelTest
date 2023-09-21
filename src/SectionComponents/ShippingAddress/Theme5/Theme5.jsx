import React from 'react'
// import { Container } from '../../CommonComponent/Container.styled';
import styled from 'styled-components';
// import AppLink from '../../../../../Common/AppLink'
// import Razer from '../../Assets/Images/PaymentMethod/razerpay.png'
import Razer from '../../../Assets/SectionComponent/Images/PaymentMethod/razerpay.png'
import { useState } from "react";
import { CodContainer, CodMethod, CodText, ImgItem, InputRadio, LayoutSectionLt, LinkRazer, OnlinePayContainer, PaymentMethodText, PaymentText, PodMethod, PodText, RozerPayImg } from './ShipAddressTheme5.style';
import Link from 'next/link';
import Image from 'next/image';


const ShippingAddressTheme5 = () => {

    const [activeTab, setActiveTab] = useState(false);
    const handleActive = (index) => {
        setActiveTab(index)
    }

    return (
        <LayoutSectionLt>

            <PaymentMethodText>
                <PaymentText>Select Payment Method</PaymentText>
            </PaymentMethodText>
            <label htmlFor='shippingradio12'>
                <CodContainer className={`${"CodContainer"} ${activeTab === "CodContainer" && ('active')}`}
                    onClick={() => handleActive("CodContainer")}>
                    <InputRadio type="radio" name='radio' id='shippingradio12' />
                    <CodMethod>
                        <CodText>Cash on Delivery</CodText>
                        <PodText>Pay on delivery</PodText>
                    </CodMethod>
                </CodContainer>
            </label>
            <label htmlFor='shippingradio13'>
                <OnlinePayContainer className={`${"OnlinePayContainer"} ${activeTab === "OnlinePayContainer" && ('active')}`}
                    onClick={() => handleActive("OnlinePayContainer")}>
                    <InputRadio type="radio" name='radio' id='shippingradio13' />
                    <PodMethod>
                        <ImgItem>
                            {/* <RozerPayImg src={Razer} alt="" /> */}
                            <Image src={Razer} alt="" />
                        </ImgItem>
                        <Link href='/'><LinkRazer>Site: www.razorpay.com</LinkRazer></Link>
                    </PodMethod>
                </OnlinePayContainer>
            </label>
        </LayoutSectionLt>
    )
}

export default ShippingAddressTheme5;