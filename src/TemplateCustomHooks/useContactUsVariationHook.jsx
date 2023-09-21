import ValidationUtils from '@/Classes/ValidationUtils';
import { submitContactInfo } from '@/store/actions/contactus';
import contactRequest from '@/store/actions/contactus/contactRequest';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useContactUsVariationHook = (data) => {
    const dispatch = useDispatch();
    const FinalData = structuredClone(data.data);
    const { businessData } = useSelector((state) => {
        return {
            businessData: state.websiteTemplate.getTemplate.data?.businessData,
        }
    })
    const [contactFormData, setContactFormData] = useState(FinalData);
    const [verifyState, setVerifyState] = useState();
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);
    const popUpHandle = useRef();
    const CheckPhoneNumberValid = (val, country_code) => {
        if (country_code === "91") {
            if (val.length < 9) {
                return false
            } else {
                return true
            }
        } else if (val.length < 16) {
            return true
        } else {
            return false
        }
    }

    const HandleOnChange = (val, country_code, key, item) => {
        let tempData = structuredClone(contactFormData.contact_form.filter((item) => item.show === true));
        switch (item.componentRender) {
            case "EditorFormInput":
                if (item.isEmail) {
                    tempData[key]["value"] = val;
                    tempData[key]["isValid"] = ValidationUtils.isEmail(val);
                } else {
                    tempData[key]["value"] = val;
                    tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                }
                break;
            case "EditorPhoneInput":
                tempData[key]["value"] = val;
                tempData[key]["country_code"] = country_code;
                tempData[key]["isValid"] = CheckPhoneNumberValid(val);

                break;
            case "EditorTextArea":
                tempData[key]["value"] = val;
                tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                break;
            case "EditorSelectDropDown":
                tempData[key]["value"] = val;
                tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                break;
            case "EditorCheckBox":
                let valueCheck = tempData[key]["value"];
                if (valueCheck.includes(val)) {
                    let index = valueCheck.indexOf(val)
                    valueCheck.splice(index, 1)
                } else {
                    valueCheck.push(val)
                }
                tempData[key]["value"] = valueCheck;
                tempData[key]["isValid"] = valueCheck?.length > 0 ? true : false;
                break;
            case "EditorRadioButton":
                tempData[key]["value"] = val;
                tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                break;
            case "EditorTimePicker":
                tempData[key]["value"] = val;
                tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                break;
            case "EditorDatePicker":
                tempData[key]["value"] = val;
                tempData[key]["isValid"] = !ValidationUtils.isEmpty(val);
                break;

        }
        setSubmit(false)
        setContactFormData({ ...contactFormData, contact_form: tempData })
    }

    const handleSelect = () => {

    }

    const CheckValidation = () => {
        for (let i = 0; i < contactFormData.contact_form.length; i++) {
            let element = contactFormData.contact_form[i];
            if (element.mandate || element.verify) {
                if (!element.isValid) {
                    return false
                }
            }
        }
        return true
    }
    const checkVerifyExist = () => {
        let val = contactFormData.contact_form.find((item) => (item.verify === true));
        console.log("line 105", val)
        return val ? true : false
    }

    useEffect(() => {
        if (contactFormData) {
            setVerifyState(contactFormData?.contact_form?.find((item) => (item.verify === true)))
        }
    }, [contactFormData])

    const HandleSubmit = async () => {
        setSubmit(true)
        if (CheckValidation()) {
            if (checkVerifyExist()) {
                setLoading(true);
                let url = "/contact-customize/sendOtp";
                let data
                if (verifyState?.isEmail) {
                    data = {
                        email: verifyState?.value,
                        business: businessData?._id
                    }
                } else {
                    data = {
                        contact: verifyState?.value,
                        country_code: verifyState?.country_code,
                    }
                }
                await contactRequest.post(
                    contactRequest.url(url, "commonservices"),
                    data,
                    (success) => {
                        popUpHandle?.current?.open();
                        setLoading(false);
                    },
                    (error) => {
                        setLoading(false);
                        // setError(true);
                    }
                );
            } else {
                dispatch(submitContactInfo({
                    customer_details: contactFormData.contact_form,
                    business: businessData?._id,
                    buisnessContactForm: contactFormData._id
                }))
                setContactFormData(FinalData)
            }
            setSubmit(false)
        } else {

        }
    }

    const closeModal = (success) => {
        popUpHandle.current.close();
        setSubmit(false);
        success ? setContactFormData(FinalData) : ""
    }

    return [contactFormData,
        verifyState,
        loading,
        submit,
        popUpHandle,
        setContactFormData,
        HandleOnChange,
        handleSelect,
        HandleSubmit,
        closeModal]
}

export default useContactUsVariationHook