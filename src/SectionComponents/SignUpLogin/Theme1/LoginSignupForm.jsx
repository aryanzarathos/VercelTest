import React from 'react'
import { FormMainContainer, InputContainer, MainHeadingContainer } from './SignUpLoginTheme1.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import FormInput from '../../../SectionCommon/Form/FormInput'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FormError from '@/SectionCommon/Form/FormError'
const LoginSignupForm = ({ formStyle, type, onChangeValue, country_code, contact, handleInputContact, email, onChangeEmail, enteredValue,
    symbolsArr, isError, valueIsValid, emailError, handleContinueButton, countryFLagCode, handleKeyDown }) => {
    ////// console.log(formStyle.PhoneInputStyle, "formStyle.PhoneInputStyle")

    return (
        <FormMainContainer item={formStyle.FormMainContainer}>

            <InputContainer item={formStyle.InputContainer}>
                <>
                    {
                        type === "" && (
                            <div className="formFieldwrap formpaddingbottom mt-8">
                                <FormInput placeholder="Enter phone number or e-mail."
                                    onChange={onChangeValue}
                                    tagType={formStyle.ContryCode.tagType}
                                    text={formStyle.ContryCode.text}
                                    style={formStyle.ContryCode.style}
                                    value={enteredValue}
                                    onWheel={(e) => e.target.blur()} onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                                />
                                <FormError
                                    show={enteredValue === "" && isError}
                                    error="Please enter email or phone number."
                                    className={'login-error'} />
                            </div>
                        )
                    }
                    {
                        type === "contact" && (
                            <div className="formFieldwrap formpaddingbottom">
                                <div className='cstmPhoneInput'>
                                    <PhoneInput
                                        placeholder="Mobile Number."
                                        autoComplete="off"
                                        autoCorrect="off"
                                        spellCheck="off"
                                        containerClass="form-group"
                                        inputClass="form-control"
                                        specialLabel="hii"
                                        country={countryFLagCode}
                                        value={`${country_code}${contact}`}
                                        inputProps={{
                                            name: "phone",
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        // disabled={contactAlreadyExist ? true : false}
                                        enableSearch
                                        disableSearchIcon
                                        onChange={(value, formattedValue) => {
                                            handleInputContact(value, formattedValue);
                                        }}
                                        onKeyUp={(value, formattedValue) => {
                                            handleInputContact(value, formattedValue);
                                        }}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                                <FormError
                                    show={contact === "" && valueIsValid === false && isError}
                                    error="Contact required."
                                    className={'login-error'}
                                />
                                <FormError
                                    show={contact && valueIsValid === false && isError}
                                    error="Invalid contact number."
                                    className={'login-error'}
                                />

                            </div>
                        )}
                    {
                        type === "email" && (
                            <div className="formFieldwrap formpaddingbottom mt-8">
                                <FormInput
                                    placeholder="Enter e-mail"
                                    autoFocus={true}
                                    autoComplete="off"
                                    value={email}
                                    onKeyUp={(e) => onChangeEmail(e)}
                                    onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                                    onChange={(e) => onChangeEmail(e)}
                                />
                                <FormError
                                    show={email === "" && valueIsValid === false && isError}
                                    error="Email is required."
                                    className={'login-error'} />
                                <FormError
                                    show={email && emailError && isError}
                                    error="Invalid Email."
                                    className={'login-error'} />
                                {/* <FormError
                        show={error && errorMessage === "email is taken"}
                        error="Email taken. Please recheck and enter again." /> */}
                            </div>
                        )}
                </>

            </InputContainer>
        </FormMainContainer>
    )
}

export default LoginSignupForm
