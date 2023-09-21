import React, { useState } from 'react'
import { BtnWraaper, CancelBtn, DoneBtn, InputDetails } from './InputDetail.style'
import InputBox from '../InputBox/InputBox'
import CheckboxInput from '@/CommonComponents/Form/CheckboxInput'
import { useContext } from 'react';
import { MyContactContext } from '@/SectionComponents/ContactUs/MyContactContext';
import { updateContactFormFields } from '@/store/actions/contactus';
import { useDispatch } from 'react-redux';
import ValidationUtils from '@/Classes/ValidationUtils';

const InputDetail = ({ openSetting, selectionData }) => {
    const disaptch = useDispatch();
    const { contactFormData, setContactFormData } = useContext(MyContactContext);
    const [tempData, setTempData] = useState(contactFormData.contact_form[selectionData])

    const HandleOnChange = (value, type) => {
        let TempData = structuredClone(tempData);
        TempData[type] = value
        setTempData({ ...TempData })
    }

    const handleSubmit = () => {
        let updatedData = structuredClone(contactFormData.contact_form)
        updatedData[selectionData] = { ...tempData }
        setContactFormData((prevFormData) => ({
            ...prevFormData,
            contact_form: updatedData,
        }));
        disaptch(updateContactFormFields(contactFormData._id, { contact_form: updatedData }))
        openSetting("SelectFormSection")
    }

    const ChangeVerify = (value) => {
        let TempData = structuredClone(tempData);
        TempData["verify"] = value
        TempData["mandate"] = value
        setTempData({ ...TempData })
    }


    return (
        <InputDetails>
            <InputBox label={"Label"} placeholder={"e.g Full Name"} toolTipText="Enter a valid label name"
                placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                toolTipPosition={"changePosition"}
                onChange={(e) => HandleOnChange(e.target.value, "label")}
                value={tempData.label}
                error={ValidationUtils.isEmpty(tempData.label)}
                toolTipDownClass={"changeDownArrowPosition"} />

            {tempData.componentRender !== 'EditorCheckBox' && tempData.componentRender !== 'EditorRadioButton' && <InputBox label={"PlaceHolder"} placeholder={"e.g Enter your full name"}
                toolTipText="Enter a valid placeholder"
                placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                toolTipPosition={"changePosition"}
                onChange={(e) => HandleOnChange(e.target.value, "placeholder")}
                value={tempData.placeholder}
                toolTipDownClass={"changeDownArrowPosition"}
            />}

            <CheckboxInput label={"Half Width "} LabelClass={"markCheckBox"} id={"fullWidth"} name={"fullwidth"} onChange={(e) => HandleOnChange(e.target.checked, "fullWidthChecked")} checked={tempData.fullWidthChecked} />
            <CheckboxInput label={"Mark as mandate"} LabelClass={"markCheckBox"} id={"mandate"} name={"mandate"} disabled={tempData.verify} onChange={(e) => HandleOnChange(e.target.checked, "mandate")} checked={tempData.mandate} />
            {tempData.isEmail ? (

                <CheckboxInput label={"Verify via OTP"} id={"verify"} name={"verify"} disabled={contactFormData.contact_form.find((item) => (item.isPhoneNumber && item.verify))} onChange={(e) => ChangeVerify(e.target.checked, "verify")} checked={tempData.verify} LabelClass={"markCheckBox verifyOtp"} />
            ) : (
                tempData.isPhoneNumber ? (<CheckboxInput label={"Verify via OTP"} id={"verify"} name={"verify"} disabled={contactFormData.contact_form.find((item) => (item.isEmail && item.verify))} onChange={(e) => ChangeVerify(e.target.checked, "verify")} checked={tempData.verify} LabelClass={"markCheckBox verifyOtp"} />) : ""

            )}
            <BtnWraaper>
                <CancelBtn type="button" onClick={() => { openSetting("SelectFormSection") }}>
                    Cancel
                </CancelBtn>
                {ValidationUtils.isEmpty(tempData.label) ?
                    <DoneBtn type="button">
                        Done
                    </DoneBtn> :
                    <DoneBtn type="button" onClick={handleSubmit}>
                        Done
                    </DoneBtn>
                }

            </BtnWraaper>
        </InputDetails>
    )
}

export default InputDetail
