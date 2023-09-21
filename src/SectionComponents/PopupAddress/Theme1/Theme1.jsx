import React, { useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import FormError from "../../../SectionCommon/Form/FormError"
import FormInput from '../../../SectionCommon/Form/FormInput';
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { StateSelectWrap, InputWrap, PhoneInputMain, PinWrap, BtnItem, BtnSaveAdd, CityStatusItem, Form, HeaderItem, HeaderText, InputArea, InputCity, InputLandMark, InputMobile, InputName, InputPin, InputState, InputStreet, MobPInItem, PopUpItem } from './PopUpAddressTheme1.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import StateSelect from '@/CommonComponents/Form/StateSelect';
import useAddAddress from '@/TemplateCustomHooks/useAddAddress';
import CountryStateFlagDropdown2 from '@/CommonComponents/CountryStateFlagDropdown2/CountryStateFlagDropdown2';
import useCountryCodes from '@/CustomHooks/useCountryCodes';
// import CountryStateFlagDropdown from '@/CommonComponents/CountryFlag/CountryStateFlag';


const PopUpTheme1 = ({ popupState, close, editData, SetEditData, addNewAddressStyle, editState }) => {

    const [
        handleInput, cancelButton, saveButton,
        name, phone, phone_country_code, zipcode,
        country, state, address, address_line2,
        address_line3, name_error, phone_error,
        zipcode_error, country_error, state_error,
        address_error, isSubmit, handleInputContact,
        set_country, set_state, customerAddressListSuccess, addSuccess
    ] = useAddAddress(popupState, editData);

    const handleSubmit = (event) => {
        event.preventDefault();
        saveButton();
    };
    useEffect(() => {
        if (addSuccess) {
            close()
        }

    }, [customerAddressListSuccess, addSuccess])
    //// console.log("line 35 lkjaldjlasjdlajdlajdlj",addNewAddressStyle)
    ////// console.log('addnew section',addNewAddressStyle)
    const [countryCode, countryDialCode, countryName] = useCountryCodes()

    // console.log(editData, `${phone_country_code ? phone_country_code : countryDialCode} ${phone}`, "address")
    return (

        <PopUpItem item={addNewAddressStyle.popUpItem?.style}>
            <HeaderItem item={addNewAddressStyle.headerItem?.style}>
                {/* <HeaderText>Add New Address</HeaderText> */}
                <Text tagType={addNewAddressStyle.headerText.tagType} text={editData ? "Edit Address" : "Add New Address"} style={addNewAddressStyle.headerText.style} />
            </HeaderItem>
            <Form onSubmit={handleSubmit} item={addNewAddressStyle.form.style}>
                {/* <InputName type="text" placeholder='Full Name' /> */}
                <FormInput type="text" placeholder='Full Name' value={name} name='name' onChange={(e) => handleInput(e)} onKeyUp={(e) => handleInput(e)} InputStyle={addNewAddressStyle.inputName.style} />
                <FormError
                    show={name_error && isSubmit}
                    error="Please add your full name."
                />
                <MobPInItem item={addNewAddressStyle.mobPInItem.style} >
                    <PhoneInputMain
                        item={addNewAddressStyle?.MobileFlag?.style}
                        key={editState && phone}
                    >
                        {editState &&
                            phone ?
                            <PhoneInput
                                countryCodeEditable={false}
                                containerClass="form-group"
                                inputClass="form-control"
                                country={countryCode}
                                value={`${phone_country_code ? phone_country_code : countryDialCode} ${phone}`}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                    placeholder: "Enter mobile",
                                }}
                                //disabled={contactAlreadyExist ? true : false}
                                enableSearch
                                disableSearchIcon
                                onChange={(value, formattedValue) => {
                                    handleInputContact(value, formattedValue);
                                }}
                                onKeyUp={(value, formattedValue) => {
                                    handleInputContact(value, formattedValue);
                                }}
                            /> : <PhoneInput
                                countryCodeEditable={false}
                                containerClass="form-group"
                                inputClass="form-control"
                                country={countryCode}
                                value={`${phone_country_code ? phone_country_code : countryDialCode} ${phone}`}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: false,
                                    placeholder: "Enter mobile",
                                }}
                                //disabled={contactAlreadyExist ? true : false}
                                enableSearch
                                disableSearchIcon
                                onChange={(value, formattedValue) => {
                                    handleInputContact(value, formattedValue);
                                }}
                                onKeyUp={(value, formattedValue) => {
                                    handleInputContact(value, formattedValue);
                                }}
                            />
                        }
                        <FormError
                            show={phone_error && isSubmit}
                            error="Please add Mobile number."
                        />
                    </PhoneInputMain>
                    <PinWrap item={addNewAddressStyle.inputPin.style}>
                        <FormInput type="text" name="zipcode" placeholder='Pin Code' value={zipcode} onChange={(e) => handleInput(e)} onKeyUp={(e) => handleInput(e)} InputStyle={addNewAddressStyle.inputPin.style} />
                        {/* <InputPin type="number" placeholder='Pin Code' /> */}
                        <FormError
                            show={zipcode_error && isSubmit}
                            error="Please add pincode."
                        />
                    </PinWrap>
                </MobPInItem>
                <CityStatusItem item={addNewAddressStyle.cityStatusItem.style} item2={addNewAddressStyle?.MobileFlag?.style}>
                    <CountryStateFlagDropdown2
                        CountryCode={false}
                        label="Select Country"
                        onSelect={(value) => set_country(value)}
                        selectedCountry={country}
                        normal={true}
                        className={"countryDropdown"}
                        // selectedFlag={inputValue.countryFlag}
                        CountryName={true}
                    // countriesData={countriesData}
                    />
                    <StateSelectWrap item={addNewAddressStyle?.MobileFlag?.style}>
                        <StateSelect
                            name="state"
                            id="institute_state"
                            value={state}
                            onSelect={(value) => set_state(value)}
                            onEvent={handleInput}

                            className={
                                state_error && isSubmit ? "errorInput" : ""
                            }
                        />
                        <FormError
                            show={state_error && isSubmit}
                            error="Please  provide state."
                        />

                    </StateSelectWrap>
                    {/* <FormInput type="text" name="state" placeholder='State' onChange={(e) => set_state(e.target.value)} onKeyUp={(e) => set_state(e.target.value)} value={state} InputStyle={addNewAddressStyle.inputState.style} />
                    <FormInput type="text" name="country" placeholder='State' onChange={(e) => set_country(e.target.value)} onKeyUp={(e) => set_country(e.target.value)} value={country} InputStyle={addNewAddressStyle.inputState.style} /> */}
                </CityStatusItem>
                {/* <CountryStateFlagDropdown
                    CountryCode={false}
                    label="Select Country"
                    onSelect={(data) => set_country(data.country)}
                    selectedCountry={country}
                    CountryName={true}
                    className="county-dropDown-button"
                /> */}
                {/* <FormError
                    show={country_error && isSubmit && !country}
                    error="Please select country."
                />
                <StateSelect
                    name="state"
                    id="institute_state"
                    value={state}
                    onSelect={(value) => set_state(value)}
                    onEvent={handleInput}
                    label="Select state"
                    className={
                        state_error && isSubmit ? "errorInput" : ""
                    }
                />
                <FormError
                    show={state_error && isSubmit}
                    error="Please provide state."
                /> */}
                <InputWrap item={addNewAddressStyle.inputStreet.style}>
                    <FormInput type="text" placeholder='Flat no/Building, Street name' value={address} name='address' onChange={(e) => handleInput(e)} onKeyUp={(e) => handleInput(e)} InputStyle={addNewAddressStyle.inputStreet.style} />
                    <FormError
                        show={address_error && address === "" && isSubmit}
                        error="Please add address."
                    />
                </InputWrap>
                <InputWrap item={addNewAddressStyle.inputStreet.style}>
                    <FormInput type="text" value={address_line2} name='address_line2' onChange={(e) => handleInput(e)} onKeyUp={(e) => handleInput(e)} placeholder='Area/Locality' InputStyle={addNewAddressStyle.inputArea.style} />
                    <FormError
                        show={address_error && address_line2 === "" && isSubmit}
                        error="Please add address."
                    />
                </InputWrap>
                {/* <InputArea type="text" placeholder='Area/Locality' /> */}
                {/* <InputLandMark type="text" placeholder='Landmark (Optional)' /> */}
                <FormInput type="text" value={address_line3} name='address_line3' onChange={(e) => handleInput(e)} onKeyUp={(e) => handleInput(e)} placeholder='Landmark (Optional)' InputStyle={addNewAddressStyle.inputLandMark.style} />
                <BtnItem item={addNewAddressStyle.btnItem.style} >
                    <ButtonElement text={addNewAddressStyle.btnCancel.text} onClick={close} style={addNewAddressStyle.btnCancel.style} />
                    <ButtonElement type='submit' text={editData ? "Update Address" : "Save Address"} style={addNewAddressStyle.btnSaveAdd.style} />
                    {/* <BtnSaveAdd>Save Address</BtnSaveAdd> */}
                </BtnItem>
            </Form>
        </PopUpItem>

    )
}

export default PopUpTheme1;