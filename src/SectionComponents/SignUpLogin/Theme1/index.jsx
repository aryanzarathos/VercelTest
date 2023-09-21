import React, { useEffect, useLayoutEffect } from 'react'
// import eyeglasses from '../../../Assets/SectionComponent/Images/SignUpLogin/Logo.png'
import OTPForm from '../../../SectionCommon/OPTPForm/OTPForm'
// import loader from '../../../Assets/SectionComponent/Images/SignUpLogin/loader.gif'
// import GoogleLogo from '../../../Assets/SectionComponent/Images/SignUpLogin/GoogleLogo.png'
import LoginSignupForm from './LoginSignupForm'
// import Image from 'next/image'
// import Link from 'next/link'
import { TCWrapper, LoginSubmitBtn, BackBtnWrapper, BackBtn, Blur, Card, GoogleBtn, MainContainer, MainImgContainer, SighUpHeroContainer, SignUpWith } from './SignUpLoginTheme1.style'
// import Button from './Button'
// import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement'
// import BackbtnSvg from '../../../Assets/SectionComponent/Images/SignUpLogin/leftArrow.svg'
// import Text from '../../../SectionsLayout/Elements/TextElement/Text'
// import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
// import { dummyImg } from '@/Constant/constants'
// import { useSelector } from 'react-redux'
import useLoginSignup from '@/TemplateCustomHooks/useLoginSignup'
import Auth from '@/Classes/Auth'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import Storage from '@/Classes/Storage';
import Text from '@/SectionsLayout/Elements/TextElement/Text'

const LoginSignUpTheme1 = ({ children }) => {

    const navigate = useAppNavigate()
    const data = children;
    const style = {
        SighUpHeroContainer: data.custom_section_editable[0].style,
        BackBtn: data.custom_section_editable[1].style,
        BckBtnAnchorStyle: data.custom_section_editable[2],
        BackbtnSvg: data.custom_section_editable[3].style.desktop,
        BackPara: data.custom_section_editable[4],
        BackBtnWrapper: data.custom_section_editable[5].style,
        MainContainer: data.custom_section_editable[6].style,
        Blur: data.custom_section_editable[7].style,
        Card: data.custom_section_editable[8].style,
        MainImgContainer: data.custom_section_editable[9].style,
        logoImageStyle: data.custom_section_editable[10].style,
        logoImage: data.data[0],
        LoginSubmitBtn: data.custom_section_editable[19].style,
        continueButton: data.custom_section_editable[20],
        SignUpWith: data.custom_section_editable[21].style,
        GoogleBtn: data.custom_section_editable[22].style,
        GoogleBtnAnchorStyle: data.custom_section_editable[23],
        GoogleLogoStyle: data.custom_section_editable[24],
        GoogleLogoImg: data.data[1],
        googlePara: data.custom_section_editable[25],
        TCWrapper: data.custom_section_editable[26].style,
        Para1: data.custom_section_editable[27],
        Para2: data.custom_section_editable[28],
        Para3: data.custom_section_editable[29],
        Para4: data.custom_section_editable[30],
        SubmitBtn: data.custom_section_editable[42],
        loaderStyle: data.custom_section_editable[43],
        loadingText: data.custom_section_editable[44],
        orSign: data.custom_section_editable[45],
    }
    const formStyle = {
        FormMainContainer: data.custom_section_editable[11].style,
        MainHeadingContainer: data.custom_section_editable[12].style,
        Login: data.custom_section_editable[13],
        orText: data.custom_section_editable[14],
        Signup: data.custom_section_editable[15],
        InputContainer: data.custom_section_editable[16].style,
        ContryCode: data.custom_section_editable[17],
        PhoneInputStyle: data.custom_section_editable[18].style,
        LoginSignupText: data.custom_section_editable[46],
    }

    let styles2 = {
        OtpMainContainer: data?.custom_section_editable[31]?.style,
        OtpMainHeadingContainer: data?.custom_section_editable[32]?.style,
        OtpMainHeadingContainerH1: data?.custom_section_editable[33],
        OtpNumber: data?.custom_section_editable[34]?.style,
        OtpNumberTextPart: data?.custom_section_editable[35],
        OtpNumberNumberPart: data?.custom_section_editable[36],
        VerifyOtpInputOtpContainer: data?.custom_section_editable[37]?.style,
        VerifyOtpInput: data?.custom_section_editable[38],
        OtpRecive: data?.custom_section_editable[39]?.style,
        OtpReciveP: data?.custom_section_editable[40],
        OtpReciveSpan: data?.custom_section_editable[41]
    }
    useEffect(() => {
        if (Auth.isLogin() && AppLinkUrl.privateDomain() || Auth.isSubdomainLogin() && AppLinkUrl.subdomain() && !AppLinkUrl.isEditorOrPreview()) {
            navigate("/")
        }
    }, [])
    const [type, onChangeValue, country_code, contact, handleInputContact, email, onChangeEmail, enteredValue,
        symbolsArr, isError, valueIsValid, emailError, handleContinueButton, success, successMessage, countryCode, handleKeyDown] = useLoginSignup();

    return (
        <SighUpHeroContainer item={style.SighUpHeroContainer}>
            <Blur item={style.Blur}></Blur>
            {(success && successMessage === "Verification link sent") || (success && successMessage === "Otp Sent Successfully") ?
                <>
                    <OTPForm OTPFormStyle={styles2} verifyState={type} email={email} contact={contact} countryCode={country_code} flowType={"LoginsignUp"} style1={style} />
                </> :
                <>
                    <Text tagType={"h2"}
                        style={formStyle?.LoginSignupText?.style}
                        text={formStyle?.LoginSignupText?.text}
                    />
                    <LoginSignupForm formStyle={formStyle} type={type} onChangeValue={onChangeValue} country_code={country_code}
                        contact={contact} handleInputContact={handleInputContact} email={email}
                        onChangeEmail={onChangeEmail} enteredValue={enteredValue} symbolsArr={symbolsArr} handleKeyDown={handleKeyDown}
                        isError={isError} valueIsValid={valueIsValid} emailError={emailError} handleContinueButton={() => handleContinueButton()} countryFLagCode={countryCode} />
                    <LoginSubmitBtn item={style.LoginSubmitBtn}>
                        <ButtonElement
                            onClick={() => handleContinueButton()}
                            style={style.continueButton.style}
                            text={style.continueButton.text}
                        />
                    </LoginSubmitBtn>
                </>
            }

        </SighUpHeroContainer >
    )
}

export default LoginSignUpTheme1
