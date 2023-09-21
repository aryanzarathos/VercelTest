import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import VerifyOTP from '../VerifyOtp/VerifyOTP';
// import AppLink from '../../../../../../Common/AppLink';
import Backbtn from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/Backbtn.svg'
// import Button from "../../../../SignUpLogin/Theme1/Button";
// import Button from "../../../SignUpLogin/Theme1/Button";
import Link from 'next/link';
import { BackBtn, ButtonsContainer, ChangeBtnContainer, ContainerRight, DateGenderContainer, DateOfBirth, Form, FormContainer, Gender, GenderButton, GenderButtonDiv, GenderLabel, HeroConatainer, InputContainer, OptionContainer, OptionContainerItem } from './PersonalDetail.style';
import { MyProfile } from '../Theme1';
import AnchorElement from '../../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import FormInput from '../../../../SectionCommon/Form/FormInput';
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import ArrowDown from "../../../../Assets/SectionComponent/Icons/arrowdown.svg";
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import FormError from '@/CommonComponents/Form/FormError';
import { activateProfile } from '@/store/actions/myprofile';



const PersonalDetails = ({ mobileView, handleProfileOnChange, Active, clickHandler,
    handleSelectGender, gender, fullname, emailAddress, contactNumber, countryCode, handlePhoneInput, dob,
    disabledEmail, handleVerifyEmailButton, verifyState, emailError, isError, valueIsValid, errorMessage, successMessage, success,
    disabledContact, error, handleVerifyCancelButton, handleVerifyContactButton, handleChangeButton,
    handleCancelButton, handleSaveButton, setVerifyState, subdomainuser, verifyOtpoading, resetAll, isSubmit, setdisabledContact,
    setdisabledEmail }) => {

    const data = useContext(MyProfile);
    const dispatch = useDispatch();
    const genderOptions = ["Male", "Female", "Prefer not to say"]
    // const [Active, setActive] = useState(false)
    // const clickHandler = (() => {
    //     setActive(!Active)
    // })

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const onCancelButton = () => {
        resetAll()
        setdisabledContact(false)
        setdisabledEmail(false)
    }

    let styles = {
        HeroConatainer: data?.custom_section_editable[17]?.style,
        FormContainer: data?.custom_section_editable[18]?.style,
        BackBtn: data?.custom_section_editable[19]?.style,
        BackBtnLink: data?.custom_section_editable[20]?.style,
        BackBtnSvg: data?.custom_section_editable[21]?.style,
        PersonalDetails: data?.custom_section_editable[22]?.style,
        Form: data?.custom_section_editable[23]?.style,
        InputContainer: data?.custom_section_editable[24]?.style,
        InputContainerLabelText: data?.custom_section_editable[25]?.style,
        InputContainerInputText: data?.custom_section_editable[26]?.style,
        InputContainerLabelNumber: data?.custom_section_editable[27]?.style,
        InputContainerInputNumber: data?.custom_section_editable[28]?.style,
        InputContainerLabelEmail: data?.custom_section_editable[29]?.style,
        InputContainerInputEmail: data?.custom_section_editable[30]?.style,
        ChangeBtnContainer: data?.custom_section_editable[31]?.style,
        ChangeBtnContainerCancelBtn: data?.custom_section_editable[32]?.style,
        ChangeBtnContainerVerifyBtn: data?.custom_section_editable[33]?.style,
        DateGenderContainer: data?.custom_section_editable[34]?.style,
        DateOfBirth: data?.custom_section_editable[35]?.style,
        InputContainerLabelDate: data?.custom_section_editable[36]?.style,
        InputContainerInputDate: data?.custom_section_editable[37]?.style,
        Gender: data?.custom_section_editable[38]?.style,
        GenderLabel: data?.custom_section_editable[39]?.style,
        GenderButtonDiv: data?.custom_section_editable[40]?.style,
        GenderButton: data?.custom_section_editable[41]?.style,
        ArrowDown: data?.custom_section_editable[42]?.style,
        OptionContainer: data?.custom_section_editable[43]?.style,
        OptionContainerItem: data?.custom_section_editable[44]?.style,
        ButtonsContainer: data?.custom_section_editable[45]?.style,
        SaveBtn: data?.custom_section_editable[46]?.style,
        CancelBtn: data?.custom_section_editable[47]?.style,
        PersonalContainerRight: data?.custom_section_editable[48]?.style,
    }

    return (
        <HeroConatainer item={styles?.HeroConatainer}>

            <FormContainer item={styles?.FormContainer}>
                <BackBtn item={styles?.BackBtn} itemBackSvg={styles?.BackBtnSvg}>
                    <Button onClick={() => dispatch(activateProfile(""))} style={styles?.BackBtnLink}>
                        <Backbtn />
                        <Text tagType={data?.custom_section_editable[22]?.tagType} style={styles?.PersonalDetails}
                            text={"Personal Details"} />
                    </Button>
                </BackBtn>
                <Form action="" onSubmit={handleSubmit} item={styles?.Form}>
                    <InputContainer item={styles?.InputContainer}>
                        {/* <label htmlFor="name">Full name</label>
                        <input type="text" name="" id="" placeholder='Enter your full name' /> */}
                        <FormInput type={data?.custom_section_editable[26]?.type}
                            label={data?.custom_section_editable[25]?.text}
                            LabelStyle={styles?.InputContainerLabelText}
                            InputStyle={styles?.InputContainerInputText}
                            PlaceHolder={data?.custom_section_editable[26]?.placeHolder}
                            value={fullname} onChange={(e) => handleProfileOnChange(e, "name")}
                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")} />
                    </InputContainer>
                    <InputContainer item={styles?.InputContainer} PhoneInputStyle={styles?.InputContainerInputNumber}>
                        <Text style={styles.InputContainerLabelNumber} text={"Phone Number"} />
                        <PhoneInput
                            // disabled={verifyState}
                            disabled={(subdomainuser?.user_contact && !disabledContact) ||
                                (success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully"))
                            }
                            value={`${countryCode}${contactNumber} `}
                            onChange={(value, country) => {
                                handlePhoneInput(value, country);
                            }}
                            countryCodeEditable={false}
                            containerClass="form-group"
                            inputClass="form-control"
                            country={"in"}
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                            }}
                            enableSearch
                            disableSearchIcon
                        />
                        <ChangeBtnContainer item={styles?.ChangeBtnContainer}>
                            {contactNumber && !disabledContact ?
                                <Button style={styles?.ChangeBtnContainerVerifyBtn} text={'Change'}
                                    disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                                    onClick={() => handleChangeButton("contact")} />
                                :
                                disabledContact && contactNumber ?
                                    <>
                                        <Button style={styles?.ChangeBtnContainerVerifyBtn} text={verifyOtpoading ? "Verifying" : "Verify"}
                                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                                            onClick={() => handleVerifyContactButton()} />
                                        <Button style={styles?.ChangeBtnContainerCancelBtn} text={'Cancel'}
                                            disabled={verifyState} onClick={() => handleVerifyCancelButton("contact")} />
                                    </>
                                    : ""
                            }

                        </ChangeBtnContainer>
                        <FormError
                            show={contactNumber === "" && valueIsValid === false && isError}
                            error="Contact required."
                            className={'getting-error-phone'} />

                        <FormError
                            show={contactNumber && valueIsValid === false && isError}
                            error="Invalid contact number." className={'getting-error-phone'} />
                        <FormError
                            show={error && errorMessage === "Contact Not Available"}
                            error="Contact is taken.Please recheck and enter again"
                            className={'getting-error-phone'}
                        />
                        <FormError
                            show={isSubmit && disabledContact}
                            error="Please verify your contact." className={'getting-error-phone'}
                        />
                        {/* <label htmlFor="mob">Phone Number</label>
                        <input type="number" name="" id="" placeholder='Enter mobile no' /> */}


                    </InputContainer>

                    <InputContainer item={styles?.InputContainer}>
                        <FormInput type={data?.custom_section_editable[30]?.type}
                            label={data?.custom_section_editable[29]?.text}
                            LabelStyle={styles?.InputContainerLabelEmail}
                            InputStyle={styles?.InputContainerInputEmail}
                            PlaceHolder={data?.custom_section_editable[30]?.placeHolder}
                            value={emailAddress} onChange={(e) => handleProfileOnChange(e, "email")}
                            disabled={(subdomainuser?.user_email && !disabledEmail) ||
                                (success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully"))
                            }
                        />
                        {/* <FormInput type="email" label={"email"} LabelStyle={styles?.InputContainerLabel} InputStyle={styles?.InputContainerInput} /> */}
                        {/* 
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="" id="" placeholder='Enter your email' /> */}

                        <ChangeBtnContainer item={styles?.ChangeBtnContainer}>
                            {emailAddress && !disabledEmail ?
                                <Button style={styles?.ChangeBtnContainerVerifyBtn} text={'Change'}
                                    disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                                    onClick={() => handleChangeButton("email")} />
                                :
                                emailAddress && disabledEmail ?
                                    <>
                                        <Button style={styles?.ChangeBtnContainerVerifyBtn} text={"Verify"}
                                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                                            onClick={handleVerifyEmailButton} />
                                        <Button style={styles?.ChangeBtnContainerCancelBtn} text={"Cancel"}
                                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                                            className="Cancel" onClick={() => handleVerifyCancelButton("email")} />
                                    </>
                                    : ""
                            }
                        </ChangeBtnContainer>

                        <FormError
                            show={emailAddress !== "" && emailError && isError}
                            error="Invalid Email." className={'getting-error'} />
                        <FormError
                            show={emailAddress && errorMessage === "Email Not Available"}
                            error="Email taken. Please recheck and enter again." className={'getting-error'} />
                        <FormError
                            show={isSubmit && disabledEmail}
                            error="Please verify your email." className={'getting-error'}
                        />
                    </InputContainer>

                    <InputContainer item={styles?.InputContainer}>
                        <DateGenderContainer item={styles?.DateGenderContainer}>
                            <DateOfBirth item={styles?.DateOfBirth}>
                                {/* <FormInput type="date" label={"Date of Birth"} LabelStyle={styles?.InputContainerLabelDate} InputStyle={styles?.InputContainerInputDate} /> */}
                                <FormInput type={data?.custom_section_editable[37]?.type}
                                    label={data?.custom_section_editable[36]?.text}
                                    LabelStyle={styles?.InputContainerLabelDate}
                                    InputStyle={styles?.InputContainerInputDate}
                                    PlaceHolder={data?.custom_section_editable[37]?.placeHolder}
                                    value={dob} onChange={(e) => handleProfileOnChange(e, "dob")}
                                    disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")} />
                                {/* 
                                <label htmlFor="dob">Date of Birth</label>
                                <input type='date' name="" id="" placeholder='hee' /> */}
                            </DateOfBirth>
                            <Gender item={styles?.Gender}>

                                {/* <label htmlFor="gender"></label> */}
                                <GenderLabel item={styles?.GenderLabel}>
                                    {
                                        data?.custom_section_editable[39]?.text
                                    }
                                </GenderLabel>
                                <GenderButtonDiv item={styles?.GenderButtonDiv} itemDownSvg={styles?.ArrowDown}>
                                    <Button text={gender ? gender : "Select Gender"}
                                        style={styles.GenderButton} onClick={() => { clickHandler() }}
                                        disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")} />
                                    {/* <button onClick={() => { clickHandler() }}>Select Gender</button> */}
                                    <ArrowDown />
                                </GenderButtonDiv>

                                {/* <OptionContainer item={styles?.OptionContainer} >

                                    <OptionContainerItem item={styles?.OptionContainerItem} >Male</OptionContainerItem>
                                    <OptionContainerItem item={styles?.OptionContainerItem} >Female</OptionContainerItem>
                                    <OptionContainerItem item={styles?.OptionContainerItem} >Prefer not to say</OptionContainerItem>
                                </OptionContainer> */}

                                {Active ?
                                    <OptionContainer item={styles?.OptionContainer} >
                                        {genderOptions.map((item, key) => {
                                            return (
                                                <OptionContainerItem item={styles?.OptionContainerItem} key={key} onClick={() => handleSelectGender(item)}>{item}</OptionContainerItem>
                                            );
                                        })}
                                    </OptionContainer>
                                    : ""
                                }



                            </Gender>
                        </DateGenderContainer>
                    </InputContainer>
                    <ButtonsContainer item={styles?.ButtonsContainer}>
                        <Button
                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                            text={'Save'} onClick={() => handleSaveButton(mobileView)} style={styles.SaveBtn} />
                        <Button
                            disabled={success && (successMessage === "Verification link sent" || successMessage === "Otp Sent Successfully")}
                            text={'Cancel'} Cancle={true} onClick={() => handleCancelButton(mobileView)} style={styles.CancelBtn} />
                    </ButtonsContainer>
                </Form>
            </FormContainer>

            <ContainerRight item={styles?.PersonalContainerRight}>



                {(success && successMessage === "Verification link sent") || (successMessage === "Otp Sent Successfully" && success) ?
                    <div className="verifyOtpSection">
                        {
                            window.innerWidth < 768 &&
                            <BackBtn item={styles?.BackBtn} itemBackSvg={styles?.BackBtnSvg}>
                                <Button onClick={() => dispatch(activateProfile(""))} style={styles?.BackBtnLink}>
                                    <Backbtn />
                                    <p className='goBack'>Go Back</p>
                                </Button>
                            </BackBtn>
                        }
                        <VerifyOTP verifyState={verifyState} email={emailAddress} contact={contactNumber} countryCode={countryCode} setVerifyState={setVerifyState} flowType={"MyProfile"} onCancel={() => onCancelButton()} />
                    </div>
                    : ""}

            </ContainerRight>
        </HeroConatainer>

    )
}

export default PersonalDetails
