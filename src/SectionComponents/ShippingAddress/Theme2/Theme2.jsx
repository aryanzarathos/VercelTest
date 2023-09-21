import React from 'react'
import { AddAddressBtn, Address, AddressContainer, AddressItem, AddressText, Ammount, CheckBox, CheckBoxContainer, DaysText, Detail, InputRadio, Label, LayoutSectionLt, Mobile, Name, PrimeDays, PrimeItem, PrimeSelect, PrimeText, ShippingDays, ShippingSelectMain, ShippingSelectText, ShippingText, StandardItem, StandardSelect, StandardText } from './ShipAddressTheme2.style';
// import { Container } from '../../CommonComponent/Container.styled';
// import ProgressTheme1 from '../Progress/Theme1';
// import CommonLayoutTheme1 from '../CartCommonLayout/Theme1';
// import Image3 from '../../Assets/Images/Cart/backbtn.png'
// import Modal from '../../CommonComponent/Modal';
// import CenterPopup from '../../../../../Common/CenterPopup';
// import ModalBody from '../../CommonComponent/Modal/ModalBody';


const ShippingAddressTheme2 = () => {
    return (
        <LayoutSectionLt>

            <AddressText>
                <ShippingText>Shipping Address</ShippingText>
            </AddressText>
            <AddressContainer>
                <label htmlFor='shippingradio2'>
                    <AddressItem>
                        <InputRadio type="radio" name='radio' id='shippingradio2' />
                        <Detail>
                            <Name>Sumit Kumar</Name>
                            <Address>Edneed, 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</Address>
                            <Mobile>Mobile:+919293949596</Mobile>
                        </Detail>
                    </AddressItem>
                </label>
                <AddAddressBtn>ADD ADDRESS</AddAddressBtn>
            </AddressContainer>
            <CheckBoxContainer>
                <CheckBox type="checkbox" />
                <Label>Billing address is same as the shipping address</Label>
            </CheckBoxContainer>

            <ShippingSelectText>Select Shipping</ShippingSelectText>
            <ShippingSelectMain>
                <label htmlFor='shippingradio3'>
                    <StandardSelect>
                        <InputRadio type="radio" name="radio1" id='shippingradio3' />
                        <StandardItem>
                            <ShippingDays>
                                <StandardText>Standard Shipping</StandardText>
                                <DaysText>2-5 business days</DaysText>
                            </ShippingDays>
                            <Ammount>₹0</Ammount>
                        </StandardItem>
                    </StandardSelect>
                </label>
                <label htmlFor='shippingradio4'>
                    <PrimeSelect>
                        <InputRadio type="radio" name="radio1" id='shippingradio4' />
                        <PrimeItem>
                            <PrimeText>Prime Shipping</PrimeText>
                            <PrimeDays>1-2 business days</PrimeDays>
                        </PrimeItem>
                    </PrimeSelect>
                </label>
            </ShippingSelectMain>

        </LayoutSectionLt>
    )
}

export default ShippingAddressTheme2;