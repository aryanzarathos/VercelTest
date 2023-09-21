import React, { useEffect, useRef } from 'react'
// import ProgressTheme1 from '../Progress/Theme1';
// import ShippingAddressTheme5 from '../Theme5/Theme5';
// import Modal from '../../CommonComponents/Modal/index';
// import ModalBody from '../../CommonComponents/Modal/ModalBody';
import PopUpTheme1 from '../../PopupAddress/Theme1/Theme1';
import {
    AddressContainer, AddressText,
    BillingAddress, CheckBox, CheckBoxContainer,
    Label, LayoutSectionLt,
    Line, PrimeItem, Inputwrapemail,
    ProgressContainer, RadioBtn, Row, ShippingDays, ShippingSelectMain, StandardItem, StandardSelect, StandardText, AddressWrap
} from './ShippingAddressTheme1.style';
import { AddAddressBtn, Address, AddressItem, Detail, MobileWrap, InputRadio, Mobile, Name } from './ChangeAddress.style'
import ProgressTheme1 from '../../Progress/Theme1/Theme1';
import Modal from '../../../SectionCommon/Modal';
import ModalBody from '../../../SectionCommon/Modal/ModalBody';
import CartMobileSection from '../../Cart/Theme1/CartMobileSection/CartMobileSection';
import OrderSummary from '../../../SectionCommon/OrderSummary/OrderSummary';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
// import ChangeAddress from '../ChangeAddress/ChangeAddress';
import useShippingAndBillingAddress from '@/TemplateCustomHooks/useShippingAndBillingAddress';
import useOrderSummary from '@/TemplateCustomHooks/useOrderSummary';
import useShipping from '@/TemplateCustomHooks/useShipping';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import FormInput from '../../../SectionCommon/Form/FormInput';
import FormError from '@/CommonComponents/Form/FormError';
import ValidationUtils from '@/Classes/ValidationUtils';
import ManageAddress from '../ManageAddress';
import usePriceDifference from '@/CustomHooks/usePriceDifference';


const ShippingAddressTheme1 = ({ children }) => {

    console.log(children, "children")
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
        text: children.custom_section_editable[11],
        CheckWrap: children.custom_section_editable[79],
        CheckSvg: children.custom_section_editable[80].style.desktop,
        Activenumber: children.custom_section_editable[117],
        ActiveText: children.custom_section_editable[118],
    }
    // console.log(children.custom_section_editable[116], " children.custom_section_editable[")
    let orderSummary = {
        layoutSectionRt: children.custom_section_editable[33],
        orderSummaryContainer: children.custom_section_editable[34],
        orderSumaryText: children.custom_section_editable[35],
        orderText: children.custom_section_editable[36],
        subtotal: children.custom_section_editable[37],
        subTotalHeading: children.custom_section_editable[38],
        subTotalPara: children.custom_section_editable[39],
        shipping: children.custom_section_editable[40],
        shippingHeading: children.custom_section_editable[41],
        shippingPara: children.custom_section_editable[42],
        totalAmmount: children.custom_section_editable[43],
        totalHeading: children.custom_section_editable[44],
        totalPara: children.custom_section_editable[45],
        button: children.custom_section_editable[46],
        cartIconMain: children.custom_section_editable[47],
        cartSvg: children.custom_section_editable[48],
        OrderButton: children.custom_section_editable[78],

        CuponPage: {
            CuponMainContainer: children.custom_section_editable[81].style,
            HorizontalLine: children.custom_section_editable[82].style,
            CuponsubContainer: children.custom_section_editable[83].style,
            SubLeftContainer: children.custom_section_editable[84].style,
            CouponsPara: children.custom_section_editable[85],
            ApplyCouponPara: children.custom_section_editable[86],
            PromoCode: children.custom_section_editable[87].style.desktop,
            SubRightContainer: children.custom_section_editable[88].style,
            removeEditBtn: children.custom_section_editable[89].style,
            ArrowSvg: children.custom_section_editable[90].style.desktop,
            PopContent: {
                headingPara: children.custom_section_editable[91],
                AppyBtn: children.custom_section_editable[92],
                TopContainer: children.custom_section_editable[93].style,
                AvailableCoupons: children.custom_section_editable[94],
                BottomContainer: children.custom_section_editable[95].style,
                BottomCuponCards: children.custom_section_editable[96].style,
                CardsTopContainer: children.custom_section_editable[97].style,
                TopLeftContainer: children.custom_section_editable[98].style,
                discountCode: children.custom_section_editable[99],
                AppyBtn2: children.custom_section_editable[100],
                CardsSubContainer: children.custom_section_editable[101].style,
                discountName: children.custom_section_editable[102],
                detail: children.custom_section_editable[103],
                DetailsWrap: children.custom_section_editable[104].style,
                Details: children.custom_section_editable[105],
                ArrowSvg: children.custom_section_editable[106].style.desktop,
                topContainerInput: children.custom_section_editable[107].style,
            }

        }

    }

    let style = {
        progressContainer: children.custom_section_editable[5],
        row: children.custom_section_editable[12],
        line: children.custom_section_editable[13],
        layoutSectionLt: children.custom_section_editable[14],
        addressText: children.custom_section_editable[15],
        shippingText: children.custom_section_editable[16],
        addressContainer: children.custom_section_editable[17],
        deliveryAddressText: children.custom_section_editable[18],
        addAddress: children.custom_section_editable[19],
        shippingSelectText: children.custom_section_editable[20],
        shippingSelectMain: children.custom_section_editable[21],
        standardSelect: children.custom_section_editable[22],
        radioBtn: children.custom_section_editable[23],
        standardItem: children.custom_section_editable[24],
        shippingDays: children.custom_section_editable[25],
        standardText: children.custom_section_editable[26],
        daysText: children.custom_section_editable[27],
        ammount: children.custom_section_editable[28],
        primeSelect: children.custom_section_editable[29],
        primeItem: children.custom_section_editable[30],
        primeText: children.custom_section_editable[31],
        primeDays: children.custom_section_editable[32],
        CheckBoxContainer: children.custom_section_editable[72],
        CheckBox: children.custom_section_editable[73],
        CheckBoxLabel: children.custom_section_editable[74],
        BillingAddress: children.custom_section_editable[75],
        BillingText: children.custom_section_editable[76],
        BillingAddressText: children.custom_section_editable[77],
        InputStyleGuestFlow: children.custom_section_editable[120]

    }

    let addNewAddressStyle = {
        popUpItem: children.custom_section_editable[49],
        headerItem: children.custom_section_editable[50],
        headerText: children.custom_section_editable[51],
        form: children.custom_section_editable[52],
        inputName: children.custom_section_editable[53],
        mobPInItem: children.custom_section_editable[54],
        inputPin: children.custom_section_editable[55],
        cityStatusItem: children.custom_section_editable[56],
        inputCity: children.custom_section_editable[57],
        inputState: children.custom_section_editable[58],
        inputStreet: children.custom_section_editable[59],
        inputArea: children.custom_section_editable[60],
        inputLandMark: children.custom_section_editable[61],
        btnItem: children.custom_section_editable[62],
        btnCancel: children.custom_section_editable[63],
        btnSaveAdd: children.custom_section_editable[64],
        MobileFlag: children.custom_section_editable[119]

    }

    let ChangeAddressStyle = {
        AddressItem: children?.custom_section_editable[65],
        InputRadio: children?.custom_section_editable[66],
        Detail: children?.custom_section_editable[67],
        DetailName: children?.custom_section_editable[68],
        DetailAddress: children?.custom_section_editable[69],
        DetailNumber: children?.custom_section_editable[70],
        AddAddressBtn: children?.custom_section_editable[71],
        ContactNo: children?.custom_section_editable[108],
        editBtn: children?.custom_section_editable[109],
        MobileWrap: children?.custom_section_editable[110].style,
        MobileWrapPop: children?.custom_section_editable[111].style,
        addAddressBtn: children.custom_section_editable[112],
        doneBtn: children.custom_section_editable[113],
        AddressItemPop: children.custom_section_editable[114].style,
        popHeading: children.custom_section_editable[115],
        Label: children.custom_section_editable[116].style,
    }


    const [shippingDetailsSuccess, shippingDetails, currentActive, handleCurrentActive, shippingRate] = useShipping(
        ((AppLinkUrl.privateDomain() && Auth.isLogin())
            || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()))
            ? true : false)


    const apiHit = (AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin());

    const [
        AddressListData, AddressListSuccess, handleAddAddress, closeAddAddress, handleChangeAddress,
        handleCloseChangeAddress, addAddressRef, changeAddressRef, BillingAddressCheckbox, handleCheckbox,
        deleteAddress, activeAddress, activeAddressHandler, addNewAddressPopup, ShippingAddressData,
        BillingAddressData, activeBillingAddress, activeTab, selectedAddress, handleActive, handleEditAddress,
        editData, changeStep, guestEmail, handleGuestEmail, handleChangeActiveAddress, handleEditButton, SetEditData, editState,setActiveTab] = useShippingAndBillingAddress();


    const [customerCartSuccess, customerCartData, orderFromCartHandler, deliveryFees, popupMessage, showPopup, setDeliveryFees, disableContinueButton] = useOrderSummary()

    //// console.log(addAddressRef, "line 138")
    const [, , , getPrice] = usePriceDifference();

    useEffect(() => {
        setDeliveryFees(shippingRate)
    }, [setDeliveryFees, shippingRate])

    let finalData = !AppLinkUrl.isEditor() && customerCartSuccess && customerCartData ? customerCartData : [];


    return (
        <>

            <CartMobileSection finalData={finalData} {...cartMobile} />
            <ProgressContainer item={style.progressContainer.style}>
                <ProgressTheme1 {...styleProgressBar} step={3} />
            </ProgressContainer>
            <Row item={style.row.style} >
                <Line item={style.line.style}></Line>
                <LayoutSectionLt item={style.layoutSectionLt.style}>
                    {(AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ? "" :
                        <div>
                            <Inputwrapemail item={style?.InputStyleGuestFlow?.style}>
                                <FormInput
                                    type="email"
                                    label={"Email"}
                                    value={guestEmail}
                                    LabelStyle={style.shippingText.style}
                                    labelPosition={'top'}
                                    InputStyle={style?.InputStyleGuestFlow?.style}
                                    onChange={(e) => handleGuestEmail(e)}
                                    onKeyUp={(e) => handleGuestEmail(e)}
                                    placeholder='Enter your e-mail address'
                                />
                                <FormError error={"Email required"} show={!ValidationUtils.isEmail(guestEmail) && showPopup} />
                            </Inputwrapemail>
                        </div>
                    }
                    <AddressText item={style.addressText.style}>
                        <Text tagType={style.shippingText.tagType} text={style.shippingText.text} style={style.shippingText.style} />
                    </AddressText>
                    <AddressContainer item={style.addressContainer.style}>
                        {activeAddress && activeAddress._id ? (
                            <AddressWrap>
                                <label htmlFor='shippingradio2'>
                                    <AddressItem item={ChangeAddressStyle.AddressItem.style}>
                                        <InputRadio type="radio" name='shipping' id='shippingradio2'
                                            item={ChangeAddressStyle.InputRadio.style} checked={activeAddress.activeAddress === true} />
                                        <Detail item={ChangeAddressStyle.Detail.style}>
                                            <Text tagType={ChangeAddressStyle.DetailName.tagType} text={activeAddress?.name} style={ChangeAddressStyle.DetailName.style} />
                                            <Text tagType={ChangeAddressStyle.DetailAddress.tagType} text={`${activeAddress?.fullAddress ? `${activeAddress?.fullAddress}, ` : ""}${activeAddress?.addressLineTwo ? `${activeAddress?.addressLineTwo}, ` : ""}${activeAddress?.landmark ? `${activeAddress?.landmark}, ` : ""} ${activeAddress?.state}, ${activeAddress?.country}, ${activeAddress?.pinCode}`}
                                                style={ChangeAddressStyle.DetailAddress.style} />
                                            <MobileWrap item={ChangeAddressStyle.MobileWrap}>
                                                <Text tagType={ChangeAddressStyle.DetailNumber.tagType} style={ChangeAddressStyle.DetailNumber.style} text={`Mobile : `} />
                                                <Text tagType={ChangeAddressStyle.ContactNo.tagType} style={ChangeAddressStyle.ContactNo.style} text={`+${activeAddress?.countryCode} ${activeAddress?.phone}`} />
                                            </MobileWrap>
                                        </Detail>
                                    </AddressItem>
                                </label>
                                {
                                    (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                                        <Button style={ChangeAddressStyle?.AddAddressBtn?.style} text={"CHANGE ADDRESS"} onClick={() => handleChangeAddress("Shipping")} />
                                        :
                                        <Button style={ChangeAddressStyle?.AddAddressBtn?.style} onClick={() => handleEditAddress("Shipping", activeAddress)} text={"CHANGE ADDRESS"} />
                                }

                            </AddressWrap>
                        )

                            :
                            <AddressWrap>
                                <Text tagType={style.deliveryAddressText.tagType} text={"No Delivery Address"} style={style.deliveryAddressText.style} />

                                {ShippingAddressData?.length > 0 ?
                                    <Button text={"CHANGE ADDRESS"} style={style.addAddress.style}
                                        onClick={() => handleChangeAddress("Shipping")} />

                                    :
                                    <Button text={"ADD ADDRESS"} style={style.addAddress.style}
                                        onClick={() => handleAddAddress("Shipping")} />
                                }
                            </AddressWrap>
                        }
                    </AddressContainer>

                    {/* === checkbox container start === */}
                    {
                        activeAddress && activeAddress._id && <CheckBoxContainer item={style?.CheckBoxContainer?.style}>
                            <CheckBox type="checkbox" item={style?.CheckBox?.style} checked={BillingAddressCheckbox} onChange={(e) => handleCheckbox(e)} />
                            <Label item={style?.CheckBoxLabel?.style}>Billing address is same as the shipping address</Label>
                        </CheckBoxContainer>
                    }

                    {/* === checkbox container end === */}

                    {/* ==== billing address section start ===== */}
                    {!BillingAddressCheckbox ? (
                        <>
                            <BillingAddress item={style?.BillingAddress?.style}>
                                <Text tagType={style?.BillingText?.tagType}
                                    style={style?.BillingText?.style}
                                    text={style?.BillingText?.text} />
                            </BillingAddress>
                            <AddressContainer item={style.addressContainer.style} >
                                {activeBillingAddress && activeBillingAddress._id ?
                                    <AddressWrap>
                                        <label htmlFor='shippingradio9'>
                                            <AddressItem item={ChangeAddressStyle.AddressItem.style}>
                                                <InputRadio type="radio" name='billing' id='shippingradio9'
                                                    item={ChangeAddressStyle.InputRadio.style} checked={activeBillingAddress.activeBillingAddress === true} />
                                                <Detail item={ChangeAddressStyle.Detail.style}>
                                                    <Text tagType={ChangeAddressStyle.DetailName.tagType} text={activeBillingAddress?.name} style={ChangeAddressStyle.DetailName.style} />
                                                    <Text tagType={ChangeAddressStyle.DetailAddress.tagType} text={`${activeBillingAddress?.fullAddress ? `${activeBillingAddress?.fullAddress}, ` : ""}${activeBillingAddress?.addressLineTwo ? `${activeBillingAddress?.addressLineTwo}, ` : ""}${activeBillingAddress?.landmark ? `${activeBillingAddress?.landmark}, ` : ""} ${activeBillingAddress?.state}, ${activeBillingAddress?.country}, ${activeBillingAddress?.pinCode}`}
                                                        style={ChangeAddressStyle.DetailAddress.style} />
                                                    <Text tagType={ChangeAddressStyle.DetailNumber.tagType} style={ChangeAddressStyle.DetailNumber.style} text={`Mobile :+ ${activeBillingAddress?.countryCode} ${activeBillingAddress?.phone}`} />
                                                </Detail>
                                            </AddressItem>
                                        </label>
                                        {
                                            (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                                                <Button style={ChangeAddressStyle?.AddAddressBtn?.style} text={"CHANGE ADDRESS"} onClick={() => handleChangeAddress("Billing")} />
                                                :
                                                <Button style={ChangeAddressStyle?.AddAddressBtn?.style} onClick={() => handleEditAddress("Shipping", activeBillingAddress)} text={"CHANGE ADDRESS"} />
                                        }
                                    </AddressWrap>
                                    :
                                    <AddressWrap>
                                        <Text tagType={style.BillingAddressText.tagType} text={"No Delivery Address"}
                                            style={style.BillingAddressText.style} />
                                        {BillingAddressData?.length > 0 ?

                                            <Button text={"CHANGE ADDRESS"} style={style.addAddress.style} onClick={() => handleChangeAddress("Billing")} />

                                            :
                                            <Button text={"ADD ADDRESS"} style={style.addAddress.style} onClick={() => handleAddAddress("Billing")} />

                                        }

                                    </AddressWrap>
                                }
                            </AddressContainer>
                        </>) : ("")
                    }

                    {/* ==== billing address section end ===== */}

                    {/* <ShippingSelectText>Select Shipping</ShippingSelectText> */}

                    {
                        shippingDetailsSuccess ? shippingDetails && shippingDetails?.available_shippings?.length > 0
                            ?
                            <>
                                <Text tagType={style.shippingSelectText.tagType} text={style.shippingSelectText.text} style={style.shippingSelectText.style} />
                                {
                                    shippingDetailsSuccess ?
                                        shippingDetails.available_shippings && shippingDetails.available_shippings.length ? shippingDetails.available_shippings.map((item, key) => {
                                            return (
                                                <>
                                                    <ShippingSelectMain item={style.shippingSelectMain.style}>
                                                        <label htmlFor='shippingradio'>
                                                            <StandardSelect item={style.standardSelect.style}>
                                                                <RadioBtn type="radio" name={key} checked={currentActive === item._id ? true : false} id='shippingradio' item={style.radioBtn.style} onChange={() => handleCurrentActive(item, apiHit)} />
                                                                <StandardItem item={style.standardItem.style}>
                                                                    <ShippingDays item={style.shippingDays.style}>
                                                                        <Text tagType={style.standardText.tagType} text={item?.shipping_option_name} style={style.standardText.style} />
                                                                        <Text tagType={style.daysText.tagType} text={item.estimated_delivery_time} style={style.daysText.style} />
                                                                    </ShippingDays>
                                                                    <Text tagType={style.ammount.tagType} text={item.shipping_title === "FlatShipping" ? <> {getPrice(item.rate)}</> : "FREE"} style={style.ammount.style} />
                                                                </StandardItem>
                                                            </StandardSelect>
                                                        </label>
                                                    </ShippingSelectMain>
                                                </>
                                            )
                                        }) : "" : ""
                                }
                            </>
                            : "Our service is not available in this location" : ""
                    }
                </LayoutSectionLt>

                <OrderSummary submitCart={() => orderFromCartHandler(activeAddress, BillingAddressCheckbox, activeBillingAddress, shippingRate)}
                    codStatus={customerCartData}
                    page="Cart"
                    deliveryFees={shippingRate}
                    disabled={disableContinueButton}
                    addressPage={true}
                    shippingDetails={shippingDetails}
                    shippingDetailsSuccess={shippingDetailsSuccess}
                    shippingValid={shippingDetailsSuccess && shippingDetails && shippingDetails?.available_shippings?.length > 0} orderSummaryStyle={orderSummary} />

            </Row>
            <Modal ref={addAddressRef}>
                <ModalBody>
                    <PopUpTheme1 popupState={addNewAddressPopup} editState={editState} close={closeAddAddress} editData={editData} addNewAddressStyle={addNewAddressStyle} />
                </ModalBody>

            </Modal>
            <Modal ref={changeAddressRef} onClose={() => handleCloseChangeAddress()}>
                <ModalBody>
                    <ManageAddress
                        close={handleCloseChangeAddress} deleteAddress={deleteAddress} openAddress={handleAddAddress}
                        shippingDetails={ShippingAddressData} billingDetails={BillingAddressData} popupState={addNewAddressPopup}
                        success={AddressListSuccess} activeAddressHandler={activeAddressHandler} handleEditAddress={handleEditAddress}
                        activeTab={activeTab} selectedAddress={selectedAddress} handleActive={handleActive} setActiveTab={setActiveTab}  {...ChangeAddressStyle}
                    />
                </ModalBody>

            </Modal>

        </>
    )
}

export default ShippingAddressTheme1;