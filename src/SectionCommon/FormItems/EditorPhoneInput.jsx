import FormError from '@/CommonComponents/Form/FormError';
import useCountryCodes from '@/CustomHooks/useCountryCodes';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { styled } from 'styled-components';

const MainPhoneWrapper = styled.div`
width: ${({ width }) => width ? "48.5%" : "100%"};
@media(max-width:768px) {
    width: 100%;
}
.react-tel-input{
.form-control{
    width: 100%;
    height: auto;
    padding-top: 7px;
    padding-bottom: 7px;
    height: 35px;
}
}`;
const Label = styled.div`
display: block;
line-height: 18px;
margin-bottom: 8px;
display: block;
font-size: calc(var(--global-typography-fontSizeP) - 1px );
font-weight: var(--global-typography-fontWightMedium);
color: var(--global-color-quaternary);
font-family: var(--global-typography-fontFamilyP);
`;

const EditorPhoneInput = ({ className, label, HandleOnChange, country_code, value, ObjectData, submit, fullWidthChecked }) => {

    const [countryCode, countryDialCode, countryName] = useCountryCodes();

    const handleInputContact = (value, formattedValue) => {
        const dialCode = formattedValue.dialCode;
        let mobile = value.replace(dialCode, "");
        let inputValue = mobile;
        HandleOnChange(inputValue, dialCode)
    }
    return (
        <>
            <MainPhoneWrapper className={className} width={fullWidthChecked}>
                {
                    label && <Label>{label}</Label>
                }
                <PhoneInput
                    countryCodeEditable={false}
                    containerClass="form-group"
                    inputClass="form-control"
                    country={countryCode?countryCode:"in"}
                    inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                    }}
                    enableSearch
                    disableSearchIcon
                    placeholder="Mobile Number."
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="off"
                    value={`${country_code ? country_code : countryDialCode}${value}`}
                    // disabled={contactAlreadyExist ? true : false}
                    onChange={(value, formattedValue) => {
                        handleInputContact(value, formattedValue);
                    }}

                    onKeyUp={(value, formattedValue) => {
                        handleInputContact(value, formattedValue);
                    }}
                />
                <FormError show={submit && !value && ObjectData?.mandate} error={"Contact Number Is Required."} />
                <FormError show={submit && value && !ObjectData.isValid && ObjectData?.mandate} error={"Please enter valid contact number."} />
            </MainPhoneWrapper>

        </>
    )
}

export default EditorPhoneInput
