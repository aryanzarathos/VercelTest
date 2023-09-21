import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { MyProfile } from '../../SectionComponents/MyProfile/Theme1/Theme1'
import Text from '../../SectionsLayout/Elements/TextElement/Text'
import FormInput from '../Form/FormInput'
import { showToast } from '@/store/actions/successmessagepopup'
import { useDispatch } from 'react-redux'
import useVerifyOTP from '@/TemplateCustomHooks/useVerifyOTP'
import FormError from '@/CommonComponents/Form/FormError'
import OTPStyle from "./OTPStyle.json"
// import { LoginSubmitBtn } from '@/SectionComponents/SignUpLogin/Theme1/SignUpLoginTheme1.style'
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import { LoginSubmitBtn } from '@/SectionComponents/SignUpLogin/Theme1/SignUpLoginTheme1.style'
import { Button } from '@/CommonComponents/Repositioning/SectionEditorStyle'
import CheckedVerify from '../../Assets/SectionComponent/Icons/checkedVerify.svg'
import { InputOtpContainer, MainContainer, MainHeadingContainer, OtpNumber, OtpRecive, VarifyContainer } from './OTPFormStyle'
const OPTPForm = ({ style1, OTPFormStyle, verifyState, email, contact, countryCode, setVerifyState, flowType, onCancel, productId, business, user, formFields, cancelOTPPopup, body, buisnessContactForm }) => {
    const data = useContext(MyProfile)


    const dispatch = useDispatch()
    const [resend, timer, loading, OTPError, inputRefs,
        handleMouseClick, symbolsArr, onKeyUpChange,
        switchHandelChange, verifyOTP, verifyOtpoading, successMessage, success, handleOTPCancelButton, handlePaste, otp] = useVerifyOTP(verifyState, email, contact, countryCode, "", setVerifyState, flowType,
            productId, business, user, formFields, body, buisnessContactForm);

    const handleCancel = () => {
        handleOTPCancelButton()
        onCancel()
    }

    useMemo(() => {
        if (success && successMessage === 'Verification Successfull') {
            if (flowType === "LoginsignUp") {
                cancelOTPPopup("success")
            }
            if (verifyState === "email") {
                dispatch(showToast("Email changed successfully!"))
            } else {
                dispatch(showToast("Phone number changed successfully!"))
            }
            setTimeout(() => {
                onCancel()
            }, 5000);
        }
    }, [cancelOTPPopup, dispatch, flowType, onCancel, success, successMessage, verifyState])

    let OTPFormStyle2 = {
        OtpMainContainer: OTPStyle?.custom_section_editable[0]?.style,
        OtpMainHeadingContainer: OTPStyle?.custom_section_editable[1]?.style,
        OtpMainHeadingContainerH1: OTPStyle?.custom_section_editable[2],
        OtpNumber: OTPStyle?.custom_section_editable[3]?.style,
        OtpNumberTextPart: OTPStyle?.custom_section_editable[4],
        OtpNumberNumberPart: OTPStyle?.custom_section_editable[5],
        VerifyOtpInputOtpContainer: OTPStyle?.custom_section_editable[6]?.style,
        VerifyOtpInput: OTPStyle?.custom_section_editable[7],
        OtpRecive: OTPStyle?.custom_section_editable[8]?.style,
        OtpReciveP: OTPStyle?.custom_section_editable[9],
        OtpReciveSpan: OTPStyle?.custom_section_editable[10],
        SubmitBtn: OTPStyle?.custom_section_editable[11],
        loadingText: OTPStyle?.custom_section_editable[12]
    }


    return (
        <>
            <MainContainer item={OTPFormStyle2?.OtpMainContainer}>
                <MainHeadingContainer item={OTPFormStyle2?.OtpMainHeadingContainer}>
                    <Text tagType={"h5"}
                        style={OTPFormStyle2?.OtpMainHeadingContainerH1.style}
                        text={OTPFormStyle2?.OtpMainHeadingContainerH1?.text}
                    />

                    <OtpNumber item={OTPFormStyle2?.OtpNumber}>
                        <Text tagType={"h5"}
                            style={OTPFormStyle2?.OtpNumberTextPart.style}
                            text={OTPFormStyle2?.OtpNumberTextPart?.text} />

                        <Text tagType={"h5"}
                            style={OTPFormStyle2?.OtpNumberNumberPart.style}
                            text={verifyState ? verifyState === "email" ? email : contact : ""} />
                    </OtpNumber>
                </MainHeadingContainer>
                <InputOtpContainer item={OTPFormStyle2?.VerifyOtpInputOtpContainer}>
                    {otp?.length &&
                        otp?.map((item, key) => {
                            return (
                                <FormInput key={key}
                                    ref={(el) => (inputRefs.current[key] = el)}
                                    name={key} className={`form-control ${OTPError ? "errorInput" : ""}`}
                                    type="number" id={`input_${key}`} tabIndex={key} value={item}
                                    onBlur={(e) => e.preventDefault()} onKeyUp={(e) => onKeyUpChange(e, key)}
                                    onPaste={(e) => handlePaste(e)}
                                    onChange={(e) => switchHandelChange(e, key)}
                                    InputStyle={OTPFormStyle2?.VerifyOtpInput.style}
                                    onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                                />
                            )
                        })
                    }


                </InputOtpContainer>
                <FormError
                    show={success && successMessage === "Wrong Otp"}
                    error="Invalid Otp."
                />
                <OtpRecive item={OTPFormStyle2?.OtpRecive}>
                    <Text tagType={"H5"}
                        style={OTPFormStyle2?.OtpReciveP.style}
                        text={OTPFormStyle2?.OtpReciveP.text} />
                    {
                        loading ?
                            <Text tagType={"H5"}
                                style={OTPFormStyle2?.OtpReciveSpan.style}
                                text={"Sending..."} />
                            :
                            <Text tagType={OTPFormStyle2?.OtpReciveSpan.tagType}
                                style={OTPFormStyle2?.OtpReciveSpan.style}
                                onClick={() => resend()} disabled={timer !== 0}
                                text={timer !== 0 ? `Resend in ${timer}s` : "Resend OTP"} />
                    }
                </OtpRecive>

                {flowType === "MyProfile" ?
                    <>
                        {/* success && successMessage === "Verification Successfull" */}
                        {success && successMessage === "Verification Successfull" ?
                            <VarifyContainer item={style1?.VarifyContainer}>
                                <CheckedVerify height={30} width={30} />
                                <Text
                                    tagType={style1?.Verified.tagType}
                                    style={style1?.Verified.style}
                                    text={"Verified "}
                                />
                            </VarifyContainer>

                            :

                            <LoginSubmitBtn item={style1?.VerifyBtnContainer}>

                                <ButtonElement style={style1.VerifyBtnContainerVerifyBtn}
                                    disabled={otp.join("").length < 5}
                                    onClick={() => verifyOTP()}
                                >
                                    {verifyOtpoading ?
                                        <ImageElement
                                            src={{ src: "https://bitbucket.org/hkchawla1/siteeditor/raw/5cb12f8fbe6785006b7e120ba4a1825090ab762d/src/Assets/SectionComponent/Images/SignUpLogin/loader.gif" }}
                                            style={style1?.VerifyImage}
                                        />
                                        : ""}
                                    <Text
                                        tagType={style1?.VerifyImageText.tagType}
                                        style={style1?.VerifyImageText.style}
                                        text={verifyOtpoading ? "Verifying" : "Verify "}
                                    />

                                    {/* <Text tagType={data?.custom_section_editable[54]?.tagType}
                                        style={style1?.VerifyImageText} text={data?.custom_section_editable[54]?.text} /> */}
                                </ButtonElement>

                                {/* {verifyOtpoading ?
                                  
                                    :
                                    <ButtonElement text='Verify'
                                        disabled={otp.join("").length < 5}
                                        onClick={() => verifyOTP()}
                                        style={style1.VerifyBtnContainerVerifyBtn}
                                    />
                                } */}
                                <ButtonElement style={style1?.VerifyBtnContainerCancelBtn} text='Cancel' Cancle={true} onClick={() => handleCancel()} />

                                {/* {
                                        verifyOtpoading && <ImageElement
                                            src={{ src: "https://bitbucket.org/hkchawla1/siteeditor/raw/5cb12f8fbe6785006b7e120ba4a1825090ab762d/src/Assets/SectionComponent/Images/SignUpLogin/loader.gif" }}
                                            style={style1?.loaderStyle.style}
                                        />
                                    }

                                    <Text
                                        text={verifyOtpoading ? "Loading..." : 'Submit'}
                                        disabled={otp.join("").length < 5}
                                        onClick={() => verifyOTP()}
                                        tagType={style1?.loadingText?.tagType}
                                        // text={style1.loadingText.text}
                                        style={style1?.loadingText.style}
                                    /> */}
                            </LoginSubmitBtn>
                        }
                    </>
                    :
                    <>
                        <LoginSubmitBtn item={style1?.LoginSubmitBtn}>
                            <ButtonElement style={OTPFormStyle2?.SubmitBtn?.style}>
                                {
                                    verifyOtpoading && <ImageElement
                                        src={{ src: "https://bitbucket.org/hkchawla1/siteeditor/raw/5cb12f8fbe6785006b7e120ba4a1825090ab762d/src/Assets/SectionComponent/Images/SignUpLogin/loader.gif" }}
                                        style={style1?.loaderStyle?.style}
                                    />
                                }

                                <Text
                                    text={verifyOtpoading ? "Loading..." : 'Submit'}
                                    disabled={otp.join("").length < 5}
                                    onClick={() => verifyOTP()}
                                    tagType={OTPFormStyle2?.loadingText?.tagType}
                                    // text={style1.loadingText.text}
                                    style={OTPFormStyle2?.loadingText?.style}
                                />
                            </ButtonElement>
                        </LoginSubmitBtn>
                    </>
                }
            </MainContainer>
        </>
    )
}

export default OPTPForm