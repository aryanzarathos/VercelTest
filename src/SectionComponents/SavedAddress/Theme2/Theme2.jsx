import React, { useContext, useEffect } from 'react'
// import BackBtn from '../../../src/Assets/SectionComponent/Icons/backBtn.svg'
import BackBtn from '../../../Assets/SectionComponent/Icons/backBtn.svg'
import { useState } from "react";
import SavedAddressTheme1 from '../Theme1/Theme1';
import { BtnCancel, BtnItem, BtnSaveAdd, CityStatusItem, CountryWrap, Form, HeaderItem, HeaderText, InputArea, InputCity, InputLandMark, InputMobile, InputName, InputPin, InputState, InputStreet, Main, MobPInItem, SavedAddressTheme2Container } from './SavedAddressTheme2.style';
import SavedAddressTheme3 from '../Theme3/Theme3';
import { MyProfile } from '../../MyProfile/Theme1/Theme1';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import FormInput from '../../../SectionCommon/Form/FormInput';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import useAddAddress from '@/TemplateCustomHooks/useAddAddress';
import PhoneInput from 'react-phone-input-2';
// import CountryStateFlagDropdown from '@/CommonComponents/CountryFlag/CountryStateFlag';
import CountryStateFlagDropdown2 from '@/CommonComponents/CountryStateFlagDropdown2/CountryStateFlagDropdown2';
import StateSelect from '@/CommonComponents/Form/StateSelect';
import FormError from '@/CommonComponents/Form/FormError';
import CountrySelect from '@/CommonComponents/Form/CountrySelect';
import { useDispatch } from 'react-redux';
import { activateProfile } from '@/store/actions/myprofile';

// import countriesData from "../../../CommonComponents/CountryStateFlagDropdown2/countriesData.json"

const SavedAddressTheme2 = ({ popupState, setActiveTab, editData, SetEditData }) => {

    const [handleInput, cancelButton, saveButton,
        name, phone, phone_country_code, zipcode,
        country, state, address, address_line2,
        address_line3, name_error, phone_error,
        zipcode_error, country_error, state_error,
        address_error, isSubmit, handleInputContact,
        setCountry, setState, customerAddressListSuccess, addSuccess, countryCode
    ] = useAddAddress(popupState, editData, SetEditData);

    const data = useContext(MyProfile)
    const dispatch = useDispatch();
    // const [activeTab, setActiveTab] = useState(false);
    const [activeTab1, setActiveTab1] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        saveButton();
    };

    useEffect(() => {
        if (addSuccess) {
            setActiveTab(false);
        }
    }, [customerAddressListSuccess, addSuccess])

    // const handleActive = (index) => {
    //     setActiveTab(!activeTab)

    // }
    const handleCancel = (index) => {
        //// console.log("cancel");
        setActiveTab(false);
        SetEditData("");
    }
    let styles = {
        SavedAddressTheme2Container: data?.custom_section_editable[95]?.style,
        SavedAddressTheme2Main: data?.custom_section_editable[96]?.style,
        AddressTheme2HeaderItem: data?.custom_section_editable[97]?.style,
        AddressTheme2HeaderBackSvg: data?.custom_section_editable[98]?.style,
        AddressTheme2HeaderItemText: data?.custom_section_editable[99]?.style,
        AddressForm: data?.custom_section_editable[100]?.style,
        AddressFormName: data?.custom_section_editable[101]?.style,
        MobPInItem: data?.custom_section_editable[102]?.style,
        AddressFormNumber: data?.custom_section_editable[103]?.style,
        AddressFormPinCode: data?.custom_section_editable[104]?.style,
        CityStatusItem: data?.custom_section_editable[105]?.style,
        CityName: data?.custom_section_editable[106]?.style,
        StateName: data?.custom_section_editable[107]?.style,
        Resident: data?.custom_section_editable[108]?.style,
        ResidentArea: data?.custom_section_editable[109]?.style,
        ResidentLandMark: data?.custom_section_editable[110]?.style,
        BtnItem: data?.custom_section_editable[111]?.style,
        BtnCancel: data?.custom_section_editable[112]?.style,
        SavedAddress: data?.custom_section_editable[113]?.style,
        dropdownItem: data?.custom_section_editable[154]?.style,
    }
    return (

        <SavedAddressTheme2Container id='SavedThemeSecond' item={styles?.SavedAddressTheme2Container}>
            <>
                {
                    <Main item={styles?.SavedAddressTheme2Main}>
                        <HeaderItem item={styles?.AddressTheme2HeaderItem}
                            itemAddressTheme2BackSvg={styles?.AddressTheme2HeaderBackSvg}
                            onClick={handleCancel}>
                            <BackBtn />
                            <Text tagType={data?.custom_section_editable[99]?.tagType}
                                style={styles?.AddressTheme2HeaderItemText}
                                text={editData ? "Update new Address" : "Add new Address"}
                            />
                        </HeaderItem>
                        <Form item={styles?.AddressForm}>
                            <FormInput type={data?.custom_section_editable[101]?.type}
                                InputStyle={styles?.AddressFormName}
                                placeholder={data?.custom_section_editable[101]?.placeHolder}
                                value={name} name='name' onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleInput(e)} />
                            <FormError
                                show={name_error && isSubmit}
                                error="Please add your full name."
                            />
                            <MobPInItem item={styles?.MobPInItem}>

                                <PhoneInput
                                    countryCodeEditable={false}
                                    containerClass="form-group"
                                    inputClass="form-control"
                                    country={"in"}
                                    value={`${phone_country_code}${phone}`}
                                    inputProps={{
                                        name: "institute_phone",
                                        required: true,
                                        autoFocus: true,
                                    }}
                                    enableSearch
                                    disableSearchIcon
                                    onChange={(value, formattedValue) => {
                                        handleInputContact(value, formattedValue);
                                    }}
                                    onKeyUp={(value, formattedValue) => {
                                        handleInputContact(value, formattedValue);
                                    }}
                                />
                                <FormError
                                    show={phone_error && isSubmit}
                                    error="Please add Mobile number."
                                />
                                <FormInput type={data?.custom_section_editable[104]?.type}
                                    InputStyle={styles?.AddressFormPinCode}
                                    placeholder={data?.custom_section_editable[104]?.placeHolder}
                                    name='zipcode' value={zipcode} onChange={(e) => handleInput(e)}
                                    onKeyUp={(e) => handleInput(e)} />
                                <FormError
                                    show={zipcode_error && isSubmit}
                                    error="Please add pincode."
                                />
                            </MobPInItem>
                            <CityStatusItem item={styles?.CityStatusItem}>
                                {/* <FormInput type={data?.custom_section_editable[106]?.type}
                                        InputStyle={styles?.CityName}
                                        placeholder={data?.custom_section_editable[106]?.placeHolder}
                                        required /> */}
                                {/* <CountryStateFlagDropdown
                                    CountryCode={false}
                                    label="Select Country"
                                    onSelect={(data) => setCountry(data.country)}
                                    selectedCountry={country}
                                    CountryName={true}
                                    className="county-dropDown-button"
                                /> */}
                                {/* <CountrySelect
                                    name="User_country"
                                    id="user_country"
                                    value={'+91'}
                                    autoevent={true}
                                    label="Select country"
                                /> */}
                                <CountryWrap dropdownItem={styles?.CityStatusItem}>
                                    <CountryStateFlagDropdown2
                                        className={'country_dropdown'}
                                        CountryCode={false}
                                        label="Select Country"
                                        onSelect={(data) => setCountry(data)}
                                        selectedCountry={country}
                                        // selectedFlag={inputValue.countryFlag}
                                        CountryName={true}
                                    // countriesData={countriesData}
                                    />
                                    <FormError
                                        show={country_error && isSubmit && !country}
                                        error="Please select country."
                                    />

                                </CountryWrap>
                                <CountryWrap dropdownItem={styles?.CityStatusItem}>
                                    <StateSelect
                                        name="state"
                                        id="institute_state"
                                        value={state}
                                        onSelect={(value) => setState(value)}
                                        onEvent={handleInput}
                                        label="Select state"
                                        className={`"State_dropdown"
                                        ${state_error && isSubmit ? "errorInput" : ""}`
                                        }
                                    />
                                    <FormError
                                        show={state_error && isSubmit}
                                        error="Please provide state."
                                    />
                                </CountryWrap>
                                {/* <InputState type="text" placeholder='State' required /> */}
                            </CityStatusItem>
                            <FormInput type={data?.custom_section_editable[108]?.type}
                                InputStyle={styles?.Resident}
                                placeholder={data?.custom_section_editable[108]?.placeHolder}
                                value={address} name='address' onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleInput(e)} />
                            <FormError
                                show={address_error && address === "" && isSubmit}
                                error="Please add address."
                            />
                            <FormInput type={data?.custom_section_editable[109]?.type}
                                InputStyle={styles?.ResidentArea}
                                placeholder={data?.custom_section_editable[109]?.placeHolder}
                                value={address_line2} name='address_line2' onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleInput(e)} />
                            <FormError
                                show={address_error && address_line2 === "" && isSubmit}
                                error="Please add address."
                            />
                            <FormInput type={data?.custom_section_editable[110]?.type}
                                InputStyle={styles?.ResidentLandMark}
                                placeholder={data?.custom_section_editable[110]?.placeHolder}
                                value={address_line3} name='address_line3' onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleInput(e)} />
                            <BtnItem item={styles?.BtnItem}>
                                <Button style={styles?.BtnCancel} text={data?.custom_section_editable[112]?.text}
                                    onClick={handleCancel} />
                                <Button style={styles?.SavedAddress}
                                    text={editData ? "Update Address" : "Save Address"}
                                    onClick={handleSubmit} />

                            </BtnItem>
                        </Form>
                    </Main>
                }
            </>
        </SavedAddressTheme2Container>

    )
}

export default SavedAddressTheme2