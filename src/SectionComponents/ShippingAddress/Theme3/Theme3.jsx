import React from 'react'
import { AddAddress, AddAddressBtn, Address, AddressContainer, AddressContainerSecond, AddressItem, AddressText, Ammount, BillingAddress, BillingText, CheckBox, CheckBoxContainer, DaysText, DeliveryAddressText, Detail, InputRadio, Label, LayoutSectionLt, Mobile, Name, PrimeDays, PrimeItem, PrimeSelect, PrimeText, ShippingDays, ShippingSelectMain, ShippingSelectText, ShippingText, StandardItem, StandardSelect, StandardText } from './ShipAddressTheme3.style';

const ShippingAddressTheme3 = () => {
    return (
        <LayoutSectionLt>

            <AddressText>
                <ShippingText>Shipping Address</ShippingText>
            </AddressText>
            <AddressContainer>
                <label htmlFor='shippingradio5'>
                    <AddressItem>
                        <InputRadio type="radio" name='radio' id="shippingradio5" />
                        <Detail>
                            <Name>Sumit Kumar</Name>
                            <Address>Edneed, 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</Address>
                            <Mobile>Mobile:+919293949596</Mobile>
                        </Detail>
                    </AddressItem>
                </label>
                <AddAddress>ADD ADDRESS</AddAddress>
            </AddressContainer>
            <CheckBoxContainer>
                <CheckBox type="checkbox" />
                <Label>Billing address is same as the shipping address</Label>
            </CheckBoxContainer>
            <BillingAddress>
                <BillingText>Billing Address</BillingText>
            </BillingAddress>
            <AddressContainerSecond>
                <DeliveryAddressText>No Delivery Address</DeliveryAddressText>
                <AddAddressBtn>ADD ADDRESS</AddAddressBtn>
            </AddressContainerSecond>
            <ShippingSelectText>Select Shipping</ShippingSelectText>
            <ShippingSelectMain>
                <label htmlFor='shippingradio6'>
                    <StandardSelect>
                        <InputRadio type="radio" name="radio1" id="shippingradio6" />
                        <StandardItem>
                            <ShippingDays>
                                <StandardText>Standard Shipping</StandardText>
                                <DaysText>2-5 business days</DaysText>
                            </ShippingDays>
                            <Ammount>₹0</Ammount>
                        </StandardItem>
                    </StandardSelect>
                </label>
                <label htmlFor='shippingradio7'>
                    <PrimeSelect>
                        <InputRadio type="radio" name="radio1" id='shippingradio7' />
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

export default ShippingAddressTheme3;