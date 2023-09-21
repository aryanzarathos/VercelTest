import React, { useEffect, useRef, useState } from 'react'
import Modals from '@/CommonComponents/Modals';
import ModalsBody from "../../../../../CommonComponents/Modals/ModalsBody";
import ModalsHeader from "../../../../../CommonComponents/Modals/ModalsHeader";
import styles from "./customDomain.module.scss";
import whtsIcon from "../../../../../Assets/SiteEditor/Icons/whtsIcon.png";
import Image from 'next/image';
import FormInput from '@/SectionCommon/Form/FormInput';
import EditorPhoneInput from '@/SectionCommon/FormItems/EditorPhoneInput';
import PhoneInput from 'react-phone-input-2';
import ThankYouPopUp from '../ThankYouPopUp/ThankYouPopUp';
import ValidationFile from '@/Classes/ValidationFile';
import ValidationUtils from '@/Classes/ValidationUtils';
import Request from '@/Classes/Request';
import FormError from '@/CommonComponents/Form/FormError';
import Tooltip from '@/CommonComponents/ToolTip/ToolTip';
import ErrorIcon from "../../../../../Assets/SiteEditor/Icons/errorIcon.png";

const CustomDomain = ({ customRef, closeCustomPopUp }) => {

    const thankRef = useRef(null);
    const ContactRequest = new Request();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [countryCode, setCountryCode] = useState(91);
    const [companyName, setCompanyName] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const openThankYouPopUp = () => {
        thankRef.current.open();
        closeCustomPopUp();
    }

    const closeThankYouPopUp = () => {
        thankRef.current.close();
    }

    const closeModal = () => {
        closeCustomPopUp();
    }

    const handleOnChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);

        switch (inputName) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "company":
                setCompanyName(value);
                break;
            default:
                break;
        }

    }

    const HandelContactOnChange = (value, formattedValue) => {
        const dialCode = formattedValue.dialCode;
        let mobile = value.replace(dialCode, "");
        setContact(mobile);
        setCountryCode(dialCode);
    };

    const handleValidation = () => {
        let isvalid = false;
        if (ValidationUtils.isNotEmpty(name) && ValidationUtils.isNotEmpty(email)
            && ValidationUtils.isNotEmpty(contact) && ValidationUtils.isNotEmpty(companyName)) {
            isvalid = true;
        }
        else {
            isvalid = false;
        }
        return isvalid;
    }

    const handleSubmitBtn = async (e) => {
        e.preventDefault();
        let formValid = handleValidation();
        let data = { "email": email, "query": companyName, "name": name, "contact": contact, "countryCode": countryCode }
        if (formValid) {
            await ContactRequest.post(
                ContactRequest.url("/contact/submitrequestwebneed", "commonservices"),
                data,
                (success) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                }
            );
        }
        else {
            setError(true);
        }
    }

    useEffect(() => {
        if (success) {
            setSuccess(false);
            openThankYouPopUp();
            setName("");
            setEmail("");
            setContact("");
            setCompanyName("");
            setError(false);
            setCountryCode(91);
        }
    }, [success])

    return (
        <>
            <Modals
                ref={customRef}
                Position="center"
                ClosePopUp={() => closeModal()}
                ModalsSize={"modalS"}
                ClassName={`${styles.modalContentWrapper} hello`}
                wrapperClass={styles.wrap}
            >
                <ModalsHeader title='Connect Custom Domain' />
                <ModalsBody className={styles.modalBodyContent}>
                    <div className={styles.modalBodyContent__contentWrapper}>
                        {/* ==== left side content start ==== */}
                        <div className={styles.modalBodyContent__contentWrapper__leftSide}>
                            <h4 className={styles.modalBodyContent__contentWrapper__leftSide__h4}>Fill out the form and
                                <span> our team</span> will be in touch shortly
                            </h4>
                            <div className={styles.modalBodyContent__contentWrapper__leftSide__whatsUpText}>
                                <Image src={whtsIcon} alt='call icon' />
                                <p className={styles.modalBodyContent__contentWrapper__leftSide__whatsUpText__P}>Call or whatsapp us at</p>
                            </div>
                            <h3 className={styles.modalBodyContent__contentWrapper__leftSide__H3}>
                                +1(254)640-3448
                                <br />
                                +91- 8368214889
                            </h3>
                        </div>
                        {/* ==== left side content end ==== */}

                        {/* ==== Right side content start === */}
                        <div className={styles.modalBodyContent__contentWrapper__rightSide}>
                            <form className={styles.modalBodyContent__contentWrapper__rightSide__formWrapper}
                                onSubmit={handleSubmitBtn}>
                                <div className={styles.inputWrapper}>
                                    <FormInput type="text" placeholder="Full Name*"
                                        name={"name"}
                                        onChange={handleOnChange}
                                        className={`${error && !name && styles.errorActive} ${styles.inputForm}`} value={name} />
                                    {
                                        error && !name ? <Tooltip text=" Full name required."
                                            placement={"top-right"}
                                            className={styles.tooltipError}
                                            toolTipClass={`${styles.changePosition}`}
                                            toolTipDownClass={styles.toolTipDownClass}>
                                            <Image src={ErrorIcon} alt='' />
                                        </Tooltip> : ""
                                    }

                                </div>
                                {/* <FormError
                                    show={error && !name}
                                    error={"Full name required."}
                                /> */}
                                <div className={styles.inputWrapper}>

                                    <FormInput type="email" placeholder="Email Address*"
                                        name={"email"}
                                        onChange={handleOnChange}
                                        className={`${error && !name && styles.errorActive} ${styles.inputForm}`} value={email} />
                                    {
                                        error && !email ? <Tooltip text=" Email required."
                                            placement={"top-right"}
                                            className={styles.tooltipError}
                                            toolTipClass={`${styles.changePosition}`}
                                            toolTipDownClass={styles.toolTipDownClass}>
                                            <Image src={ErrorIcon} alt='' />
                                        </Tooltip> : ""
                                    }
                                </div>
                                {/* <FormError
                                    show={error && !email}
                                    error={"Email required."}
                                /> */}
                                <div className={styles.inputWrapper}>
                                    <PhoneInput
                                        className={`${error && !name && styles.errorActive} ${styles.phoneInput}`}
                                        country={"in"}
                                        value={`${countryCode}${contact}`}
                                        inputProps={{
                                            name: "institute_phone",
                                            required: true,
                                            autoFocus: false,
                                        }}
                                        //disabled={contactAlreadyExist ? true : false}
                                        enableSearch
                                        disableSearchIcon
                                        onChange={(value, formattedValue) => {
                                            HandelContactOnChange(value, formattedValue);
                                        }}
                                        onKeyUp={(value, formattedValue) => {
                                            HandelContactOnChange(value, formattedValue);
                                        }}
                                    />
                                    {
                                        error && !contact ? <Tooltip text=" Contact required."
                                            placement={"top-right"}
                                            className={styles.tooltipErrorPhone}
                                            toolTipClass={`${styles.changePosition}`}
                                            toolTipDownClass={styles.toolTipDownClass}>
                                            <Image src={ErrorIcon} alt='' />
                                        </Tooltip> : ""
                                    }


                                </div>
                                {/* <FormError
                                    show={error && !contact}
                                    error={"Contact required."}
                                /> */}
                                <div className={styles.inputWrapper}>
                                    <FormInput type="text" placeholder="Domain Name*"
                                        name={"company"}
                                        onChange={handleOnChange}
                                        className={`${error && !name && styles.errorActive} ${styles.inputForm}`} value={companyName} />
                                    {
                                        error && !companyName ? <Tooltip text=" Domain name required."
                                            placement={"top-right"}
                                            className={styles.tooltipError}
                                            toolTipClass={`${styles.changePosition}`}
                                            toolTipDownClass={styles.toolTipDownClass}>
                                            <Image src={ErrorIcon} alt='' />
                                        </Tooltip> : ""
                                    }

                                </div>
                                {/* <FormError
                                    show={error && !companyName}
                                    error={"Domain name required."}
                                /> */}
                                <button className={styles.submitBtn} type="submit" >Submit Request</button>
                            </form>
                        </div>
                        {/* ==== Right side content end === */}
                    </div>
                </ModalsBody>
            </Modals>
            <ThankYouPopUp thankRef={thankRef} closeThankYouPopUp={closeThankYouPopUp} />
        </>
    )
}

export default CustomDomain
