import React, { useRef } from 'react'
import Modal from '../../../SectionCommon/Modal';
import ModalBody from '../../../SectionCommon/Modal/ModalBody';
import PopUpItem from '../../PopupAddress/Theme2/Theme2';
import { AddAddress, Address, AddressContainer, AddressItem, AddressText, Ammount, BillingAddress, BillingText, CheckBox, CheckBoxContainer, DaysText, Detail, InputRadio, Label, LayoutSectionLt, Mobile, Name, PrimeDays, PrimeItem, PrimeSelect, PrimeText, ShippingDays, ShippingSelectMain, ShippingSelectText, ShippingText, StandardItem, StandardSelect, StandardText } from './ShipAddressTheme4.style';

const ShippingAddressTheme4 = () => {
    const addAddressRef = useRef(null)

    const handleAddAddress = () => {
        addAddressRef.current.open()
    }
    return (
        <>
            <LayoutSectionLt>
                <AddressText>
                    <ShippingText>Shipping Address</ShippingText>
                </AddressText>
                <AddressContainer>
                    <label htmlFor='shippingradio8'>
                        <AddressItem>
                            <InputRadio type="radio" name='radio' id='shippingradio8' />
                            <Detail>
                                <Name>Sumit Kumar</Name>
                                <Address>Edneed, 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</Address>
                                <Mobile>Mobile:+919293949596</Mobile>
                            </Detail>
                        </AddressItem>
                    </label>
                    <AddAddress onClick={handleAddAddress}>ADD ADDRESS</AddAddress>
                </AddressContainer>
                <CheckBoxContainer>
                    <CheckBox type="checkbox" />
                    <Label>Billing address is same as the shipping address</Label>
                </CheckBoxContainer>
                <BillingAddress>
                    <BillingText>Billing Address</BillingText>
                </BillingAddress>
                <AddressContainer>
                    <label htmlFor='shippingradio9'>
                        <AddressItem>
                            <InputRadio type="radio" name='radio' id='shippingradio9' />
                            <Detail>
                                <Name>Sumit Kumar</Name>
                                <Address>Edneed, 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</Address>
                                <Mobile>Mobile:+919293949596</Mobile>
                            </Detail>
                        </AddressItem>
                    </label>
                    <AddAddress onClick={handleAddAddress}>ADD ADDRESS</AddAddress>
                </AddressContainer>
                <ShippingSelectText>Select Shipping</ShippingSelectText>
                <ShippingSelectMain>
                    <label htmlFor='shippingradio10'>
                        <StandardSelect>
                            <InputRadio type="radio" name="radio1" id='shippingradio10' />
                            <StandardItem>
                                <ShippingDays>
                                    <StandardText>Standard Shipping</StandardText>
                                    <DaysText>2-5 business days</DaysText>
                                </ShippingDays>
                                <Ammount>₹0</Ammount>
                            </StandardItem>
                        </StandardSelect>
                    </label>
                    <label htmlFor='shippingradio11'>
                        <PrimeSelect>
                            <InputRadio type="radio" name="radio1" id='shippingradio11' />
                            <PrimeItem>
                                <PrimeText>Prime Shipping</PrimeText>
                                <PrimeDays>1-2 business days</PrimeDays>
                            </PrimeItem>
                        </PrimeSelect>
                    </label>
                </ShippingSelectMain>
            </LayoutSectionLt>
            <Modal ref={addAddressRef}>
                <ModalBody>
                    <PopUpItem />
                </ModalBody>

            </Modal>
        </>
    )
}

export default ShippingAddressTheme4;