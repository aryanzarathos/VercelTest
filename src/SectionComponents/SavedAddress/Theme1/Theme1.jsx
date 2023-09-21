import React, { useContext } from 'react'
import SavedAddressTheme2 from '../Theme2/Theme2';
import { useState } from "react";
import list from '../SavedData.json'
// import BackBtn from '../../../src/Assets/SectionComponent/Icons/backBtn.svg'
import BackBtn from '../../../Assets/SectionComponent/Icons/backBtn.svg'
import Link from 'next/link';
import {
    Add, AddText, HeaderItem, HeaderText, Main, NewAddressContainer, NewAddressInnerItem,
    RightContainer, AddressContainer, AddressItem, AddressLabel, BtnEditRemove, Detail, MobileParaWrap, InputRadio
} from '../Theme3/SavedAddressTheme3.style';
import { MyProfile } from '../../MyProfile/Theme1/Theme1';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import useShippingAndBillingAddress from '@/TemplateCustomHooks/useShippingAndBillingAddress';
import { activateProfile } from '@/store/actions/myprofile';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { useDispatch } from 'react-redux';



const SavedAddressTheme1 = () => {

    const [AddressListData, AddressListSuccess, handleAddAddress, closeAddAddress, handleChangeAddress,
        handleCloseChangeAddress, addAddressRef, changeAddressRef, BillingAddressCheckbox, handleCheckbox,
        deleteAddress, activeAddress, activeAddressHandler, addNewAddressPopup, ShippingAddressData,
        BillingAddressData, activeBillingAddress, activeTab, selectedAddress, handleActive, handleEditAddress, editData,
        changeStep, guestEmail, handleGuestEmail, handleChangeActiveAddress, handleEditButton, SetEditData] = useShippingAndBillingAddress()

    const data = useContext(MyProfile)
    const dispatch = useDispatch();

    const [activeComponentTab, setActiveTab] = useState(false);

    const handleActiveComponent = (index) => {
        setActiveTab(true);
    }

    const handleEditBtn = (id) => {
        handleEditButton(id);
        setActiveTab(true);
    }

    let styles = {
        RightContainerAddress: data?.custom_section_editable[85]?.style,
        AddressMain: data?.custom_section_editable[86]?.style,
        HeaderItem: data?.custom_section_editable[87]?.style,
        HeaderItemLink: data?.custom_section_editable[88]?.style,
        AdddressBackBtnSvg: data?.custom_section_editable[89]?.style,
        HeaderText: data?.custom_section_editable[90]?.style,
        NewAddressContainer: data?.custom_section_editable[91]?.style,
        NewAddressInnerItem: data?.custom_section_editable[92]?.style,
        Add: data?.custom_section_editable[93]?.style,
        AddText: data?.custom_section_editable[94]?.style,

        SavedAddressThemeThirdContainer: data?.custom_section_editable[114]?.style,
        SavedAddressThemeThirdMain: data?.custom_section_editable[115]?.style,
        SavedAddressThemeThirdHeaderItem: data?.custom_section_editable[116]?.style,
        ThemeThirdHeaderText: data?.custom_section_editable[117]?.style,
        ThemeThirdAddressItem: data?.custom_section_editable[118]?.style,
        AddressLabel: data?.custom_section_editable[119]?.style,
        ThemeThirdAddressContainer: data?.custom_section_editable[120]?.style,
        ThemeThirdRadio: data?.custom_section_editable[121]?.style,
        ThemeThirdDefault: data?.custom_section_editable[122]?.style,
        ThemeThirdDetail: data?.custom_section_editable[123]?.style,
        ThemeThirdDetailName: data?.custom_section_editable[124]?.style,
        ThemeThirdDetailAddress: data?.custom_section_editable[125]?.style,
        ThemeThirdDetailNumber: data?.custom_section_editable[126]?.style,
        BtnEditRemove: data?.custom_section_editable[127]?.style,
        BtnEditRemoveEdit: data?.custom_section_editable[128]?.style,
        BtnEditRemoveRemove: data?.custom_section_editable[129]?.style,
        ThemeThirdNewAddressContainer: data?.custom_section_editable[130]?.style,
        ThemeThirdNewAddressInnerItem: data?.custom_section_editable[131]?.style,
        ThemeThirdNewAddressAdd: data?.custom_section_editable[132]?.style,
        ThemeThirdNewAddressAddText: data?.custom_section_editable[133]?.style,
        ThemeThirdAddressContainerActive: data?.custom_section_editable[134]?.style,
        PhoneNumeber: data?.custom_section_editable[152],
        InputRadio: data?.custom_section_editable[153].style,

    }


    const staticData = [
        {
            "_id": "64cb729e97a9c9b3b84e96e8",
            "isDeleted": false,
            "activeAddress": false,
            "name": "Furquan Nayyar",
            "phone": 9195600129,
            "countryCode": "91",
            "pinCode": "110017",
            "country": "India",
            "state": "Delhi",
            "userId": "64cb6c142498526fb4768999",
            "fullAddress": "B-560, Bindapur, DDA Flats, ",
            "addressLineTwo": "Pkt-3 Dwarka, New Delhi",
            "landmark": "",
            "__v": 0
        },
        {
            "_id": "64cb72be3d13f8b42a3bb7b9",
            "isDeleted": false,
            "activeAddress": true,
            "name": "Sumit Kumar",
            "phone": 9192939495,
            "countryCode": "91",
            "pinCode": "110016",
            "country": "India",
            "state": "Delhi",
            "userId": "64cb6c142498526fb4768999",
            "fullAddress": "Edneed, 203, Tower C, Ithum Towers, Sector 62, ",
            "addressLineTwo": "Noida, Uttar Pradesh - 201309",
            "landmark": "",
            "__v": 0
        }
    ]
    const finalData = AppLinkUrl.isEditor() ? staticData : AddressListSuccess && ShippingAddressData
    return (
        <>
            <RightContainer item={styles?.RightContainerAddress} >

                {activeComponentTab ? <SavedAddressTheme2 popupState={"Shipping"}
                    setActiveTab={setActiveTab} editData={editData} SetEditData={SetEditData} /> :
                    <>
                        <Main item={styles?.AddressMain}>

                            <HeaderItem item={styles?.HeaderItem}
                                itemBackBtnSvg={styles?.AdddressBackBtnSvg}
                                onClick={() => dispatch(activateProfile(""))} >
                                <BackBtn />
                                <Text tagType={data?.custom_section_editable[90]?.tagType}
                                    style={styles?.HeaderText}
                                    text={"Your Addresses"}
                                />
                            </HeaderItem>

                            <AddressItem item={styles?.ThemeThirdAddressItem}>
                                {AddressListSuccess && finalData && finalData.length > 0 &&
                                    finalData.map((item, key) => {
                                        return (
                                            <AddressLabel htmlFor={key} key={key} item={styles?.AddressLabel} >
                                                <AddressContainer
                                                    // className={`${"AdressContainer"} ${activeTab === item._id && ('active')}`}
                                                    className={`${item.activeAddress === true ? 'active' : ''}`}

                                                    item={styles?.ThemeThirdAddressContainer}
                                                    itemActive={styles?.ThemeThirdAddressContainerActive}
                                                    key={item._id}
                                                // onClick={() => handleChangeActiveAddress(item._id)}
                                                >
                                                    {/* <InputRadio type="radio" name='radio' id={e.id} /> */}

                                                    <InputRadio type="radio" name='radio' id={key} checked={item.activeAddress === true}
                                                        onChange={() => handleChangeActiveAddress(item._id)} item={styles.InputRadio} />
                                                    {
                                                        item.activeAddress === true
                                                        && <Text tagType={data?.custom_section_editable[122]?.tagType}
                                                            style={styles?.ThemeThirdDefault}
                                                            text={data?.custom_section_editable[122]?.text} />
                                                    }
                                                    <Detail item={styles?.ThemeThirdDetail}>
                                                        <Text tagType={data?.custom_section_editable[124]?.tagType} style={styles?.ThemeThirdDetailName}
                                                            text={item?.name} />
                                                        <Text tagType={data?.custom_section_editable[125]?.tagType} style={styles?.ThemeThirdDetailAddress}
                                                            text={`${item?.fullAddress ? `${item?.fullAddress}` : ""} ${item?.addressLineTwo ? `${item?.addressLineTwo},` : ""} ${item?.landmark ? `${item?.landmark},` : ""}  ${item?.state}, ${item?.country}, ${item?.pinCode}`}
                                                        />
                                                        <MobileParaWrap>
                                                            <Text tagType={data?.custom_section_editable[126]?.tagType} style={styles?.ThemeThirdDetailNumber}
                                                                text={`Mobile : `} />
                                                            <Text tagType={styles?.PhoneNumeber.tagType} style={styles?.PhoneNumeber.style}
                                                                text={`+91${item?.phone}`} />
                                                        </MobileParaWrap>
                                                        <BtnEditRemove item={styles?.BtnEditRemove}>
                                                            <Button style={styles?.BtnEditRemoveEdit}
                                                                text={data?.custom_section_editable[128]?.text}
                                                                onClick={() => handleEditBtn(item)} />
                                                            <Button style={styles?.BtnEditRemoveRemove}
                                                                text={"Remove"}
                                                                onClick={() => deleteAddress(item?._id, "Shipping")} />
                                                        </BtnEditRemove>
                                                    </Detail>
                                                </AddressContainer>
                                            </AddressLabel>

                                        )
                                    })}
                                <NewAddressContainer item={styles?.ThemeThirdNewAddressContainer}>

                                    <NewAddressInnerItem onClick={handleActiveComponent} item={styles?.ThemeThirdNewAddressInnerItem}>
                                        <Add item={styles?.ThemeThirdNewAddressAdd}>+</Add>
                                        <Text tagType={data?.custom_section_editable[133]?.tagType}
                                            style={styles?.ThemeThirdNewAddressAddText}
                                            text={data?.custom_section_editable[133]?.text} />
                                    </NewAddressInnerItem>

                                </NewAddressContainer>
                            </AddressItem>
                        </Main>
                    </>
                }
            </RightContainer>
        </>
    )
}

export default SavedAddressTheme1;