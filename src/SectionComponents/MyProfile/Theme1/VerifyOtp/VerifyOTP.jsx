import React, { useContext } from 'react'
// import checked from '../../../../Assets/SectionComponent/Images/PersonalDetails/checked.png'
// import loader from '../../../../Assets/SectionComponent/Images/SignUpLogin/loader.gif'
import OPTPForm from '../../../../SectionCommon/OPTPForm/OTPForm';
import Image from 'next/image';
import { BtnContainer, VarifyContainer } from './Verify.style';
import { MyProfile } from '../Theme1';
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';



const VerifyOTP = ({ verifyState, email, contact, countryCode, setVerifyState, flowType, onCancel }) => {
    const data = useContext(MyProfile)
    let style1 = {
        VerifyBtnContainer: data?.custom_section_editable[49]?.style,
        VerifyBtnContainerVerifyBtn: data?.custom_section_editable[50]?.style,
        VerifyBtnContainerCancelBtn: data?.custom_section_editable[51]?.style,
        VarifyContainer: data?.custom_section_editable[52]?.style,
        VerifyImage: data?.custom_section_editable[53]?.style,
        VerifyImageText: data?.custom_section_editable[54],
        Verified: data?.custom_section_editable[149],
    }
    let styles2 = {
        OtpMainContainer: data?.custom_section_editable[55]?.style,
        OtpMainHeadingContainer: data?.custom_section_editable[56]?.style,
        OtpMainHeadingContainerH1: data?.custom_section_editable[57],
        OtpNumber: data?.custom_section_editable[58]?.style,
        OtpNumberTextPart: data?.custom_section_editable[59],
        OtpNumberNumberPart: data?.custom_section_editable[60],
        VerifyOtpInputOtpContainer: data?.custom_section_editable[61]?.style,
        VerifyOtpInput: data?.custom_section_editable[62],
        OtpRecive: data?.custom_section_editable[63]?.style,
        OtpReciveP: data?.custom_section_editable[64],
        OtpReciveSpan: data?.custom_section_editable[65]
    }
    return (
        <>
            <OPTPForm OTPFormStyle={styles2} style1={style1} verifyState={verifyState} email={email} contact={contact}
                countryCode={countryCode} setVerifyState={setVerifyState} flowType={flowType} onCancel={onCancel} />
            {/* <BtnContainer item={styles?.VerifyBtnContainer}>
                <Button text={true ? data?.custom_section_editable[50]?.text : ''} style={styles?.VerifyBtnContainerVerifyBtn} disabled={false} />
                <Button text={data?.custom_section_editable[51]?.text} style={styles?.VerifyBtnContainerCancelBtn} />
            </BtnContainer>
            {true ?
                <VarifyContainer item={styles?.VarifyContainer}>
                    <ImageElement src={data?.data[2].image} style={styles?.VerifyImage} />
                    <Text tagType={data?.custom_section_editable[54]?.tagType}
                        style={styles?.VerifyImageText} text={data?.custom_section_editable[54]?.text} />
                </VarifyContainer> : ''
            } */}
        </>
    )
}

export default VerifyOTP
