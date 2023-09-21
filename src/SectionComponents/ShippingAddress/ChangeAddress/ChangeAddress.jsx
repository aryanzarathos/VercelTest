import React from 'react'
import { AddAddressBtn, Address, AddressItem, Detail, InputRadio, Mobile, Name } from '../Theme1/ChangeAddress.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import Auth from '@/Classes/Auth'

const ChangeAddress = ({ activeAddress, handleChangeAddress, handleEditAddress, ...ChangeAddressStyle }) => {

    return (
        <>
            <label htmlFor='shippingradio2'>
                <AddressItem item={ChangeAddressStyle.AddressItem.style}>
                    <InputRadio type="radio" name='radio' id='shippingradio2'
                        item={ChangeAddressStyle.InputRadio.style} checked={activeAddress?.activeAddress === true} />
                    <Detail item={ChangeAddressStyle.Detail.style}>
                        <Text tagType={ChangeAddressStyle.DetailName.tagType} text={activeAddress?.name} style={ChangeAddressStyle.DetailName.style} />
                        <Text tagType={ChangeAddressStyle.DetailAddress.tagType} text={`${activeAddress?.fullAddress ? `${activeAddress?.fullAddress}, ` : ""}${activeAddress?.addressLineTwo ? `${activeAddress?.addressLineTwo}, ` : ""}${activeAddress?.landmark ? `${activeAddress?.landmark}, ` : ""} ${activeAddress?.state}, ${activeAddress?.country}, ${activeAddress?.pinCode}`}
                            style={ChangeAddressStyle.DetailAddress.style} />
                        <Text tagType={ChangeAddressStyle.DetailNumber.tagType} style={ChangeAddressStyle.DetailNumber.style} text={`Mobile :+ ${activeAddress?.countryCode} ${activeAddress?.phone}`} />
                    </Detail>
                </AddressItem>
            </label>
            {
                (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                    <Button style={ChangeAddressStyle?.AddAddressBtn?.style} text={"CHANGE ADDRESS"} onClick={() => handleChangeAddress("Shipping")} />
                    :
                    <Button style={ChangeAddressStyle?.AddAddressBtn?.style} onClick={() => handleEditAddress("Shipping", activeAddress)} text={"CHANGE ADDRESS"} />
            }

        </>
    )
}

export default ChangeAddress
