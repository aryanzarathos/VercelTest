import React, { useEffect } from 'react'
import { Wrap, Address, PopMainWrapper, Label, AddressItem, AddressItemPop, Detail, InputRadio, Mobile, Name, MobileWrapPop, EditRmvBtn, AddAddressBtnWrap } from '../Theme1/ChangeAddress.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import Auth from '@/Classes/Auth'

const ManageAddress = ({ close, openAddress, shippingDetails, billingDetails, popupState, success,
    deleteAddress, activeAddressHandler, activeTab, selectedAddress, handleActive, handleEditAddress, setActiveTab, ...ChangeAddressStyle }) => {


    return (
        <>
            {popupState === "Shipping" ?
                <>
                    <Text text={'Change Delivery Address'} style={ChangeAddressStyle.popHeading.style} />
                    {success && shippingDetails && shippingDetails.length ? shippingDetails.map((item, i) => {
                        return (
                            <>
                                <PopMainWrapper key={i}>
                                    <Label htmlFor={item._id} item={ChangeAddressStyle.Label}>
                                        <AddressItemPop item={ChangeAddressStyle.AddressItemPop} className={` ${item._id === activeTab && ('active')}`} key={item._id} onClick={() => handleActive(item._id, "Shipping")}>
                                            <InputRadio type="radio" name='radio' id={item._id}
                                                item={ChangeAddressStyle.InputRadio.style} onChange={() => handleActive(item._id, "Shipping")}
                                                checked={item._id === activeTab} />
                                            <Detail item={ChangeAddressStyle.Detail.style}>
                                                <Text tagType={ChangeAddressStyle.DetailName.tagType} text={item?.name} style={ChangeAddressStyle.DetailName.style} />
                                                <Text tagType={ChangeAddressStyle.DetailAddress.tagType} text={`${item?.fullAddress ? `${item?.fullAddress}, ` : ""}${item?.addressLineTwo ? `${item?.addressLineTwo}, ` : ""}${item?.landmark ? `${item?.landmark}, ` : ""} ${item?.state}, ${item?.country}, ${item?.pinCode}`}
                                                    style={ChangeAddressStyle.DetailAddress.style} />
                                                <MobileWrapPop item={ChangeAddressStyle.MobileWrapPop}>
                                                    <Text tagType={ChangeAddressStyle.DetailNumber.tagType} style={ChangeAddressStyle.DetailNumber.style} text={`Mobile : `} />
                                                    <Text tagType={ChangeAddressStyle.ContactNo.tagType} style={ChangeAddressStyle.ContactNo.style} text={`+${item?.countryCode} ${item?.phone}`} />
                                                </MobileWrapPop>
                                                <EditRmvBtn>
                                                    {
                                                        (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                                                            <>
                                                                <Button style={ChangeAddressStyle?.editBtn?.style} text={"EDIT"} onClick={() => handleEditAddress("Shipping", item)} />
                                                                <Button style={ChangeAddressStyle?.editBtn?.style} onClick={() => deleteAddress(item._id, "Shipping")} text={"REMOVE"} />
                                                            </>
                                                            :
                                                            ""
                                                    }
                                                </EditRmvBtn>
                                            </Detail>
                                        </AddressItemPop>
                                    </Label>

                                </PopMainWrapper>


                            </>
                        )
                    }) : ""}
                    <AddAddressBtnWrap>
                        <Button text={ChangeAddressStyle.addAddressBtn.text} style={ChangeAddressStyle.addAddressBtn.style} onClick={() => { close(); openAddress(popupState) }} />
                        <Button text={ChangeAddressStyle.doneBtn.text} style={ChangeAddressStyle.doneBtn.style} onClick={() => { activeAddressHandler(popupState); close(); }} />
                    </AddAddressBtnWrap>
                </>
                :
                <>
                    {success && billingDetails && billingDetails.length ? billingDetails.map((item, i) => {
                        return (
                            <>
                                <label htmlFor='shippingradio2'>
                                    <AddressItem item={ChangeAddressStyle.AddressItem.style} className={`${"active"} ${selectedAddress === item._id && ('active')}`} key={item._id} onClick={() => handleActive(item._id, "Billing")}>
                                        <InputRadio type="radio" name='radio' id='shippingradio2'
                                            item={ChangeAddressStyle.InputRadio.style} onChange={() => handleActive(item._id, "Billing")}
                                            checked={item._id === selectedAddress} />
                                        <Detail item={ChangeAddressStyle.Detail.style}>
                                            <Text tagType={ChangeAddressStyle.DetailName.tagType} text={item?.name} style={ChangeAddressStyle.DetailName.style} />
                                            <Text tagType={ChangeAddressStyle.DetailAddress.tagType} text={`${item?.fullAddress ? `${item?.fullAddress}, ` : ""}${item?.addressLineTwo ? `${item?.addressLineTwo}, ` : ""}${item?.landmark ? `${item?.landmark}, ` : ""} ${item?.state}, ${item?.country}, ${item?.pinCode}`}
                                                style={ChangeAddressStyle.DetailAddress.style} />
                                            <Text tagType={ChangeAddressStyle.DetailNumber.tagType} style={ChangeAddressStyle.DetailNumber.style} text={`Mobile :+ ${item?.countryCode} ${item?.phone}`} />
                                        </Detail>
                                    </AddressItem>
                                </label>
                                {
                                    (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                                        <>
                                            <Button style={ChangeAddressStyle?.Wrap?.style} text={"EDIT"} onClick={() => handleEditAddress("Billing", item)} />
                                            <Button style={ChangeAddressStyle?.Wrap?.style} onClick={() => deleteAddress(item._id)} text={"REMOVE"} />
                                        </>
                                        :
                                        ""
                                }
                            </>
                        )
                    }) : ""}
                </>
            }
        </>
    )
}

export default ManageAddress
