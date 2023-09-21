import moment from 'moment/moment';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Auth from '../../src/Classes/Auth';
import Request from '../../src/Classes/Request';
import ValidationFile from '../../src/Classes/ValidationFile';
import ValidationUtils from '../../src/Classes/ValidationUtils';
import { activateProfile } from '@/store/actions/myprofile';
import { updateSubdomainUserToStore } from '@/store/actions/subdomainuser';
import { USERINFOTYPES } from "@/store/actions/userinfo/actionType";
import { subdomainUserActionType } from '@/store/actions/subdomainuser/actionTypes';
import { showToast } from '@/store/actions/successmessagepopup';
import useSentVerifyOTPHooks from './useSentVerifyOTPHooks';
import { getCountryData } from '@/CommonFunctions/helperFunction';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const useMyProfile = () => {
    const { successTemplate, websiteType } = useSelector((state) => {
        return {
            successTemplate: state.websiteTemplate.getTemplate.success,
            websiteType: state.websiteTemplate.getTemplate.websiteType
        }
    })

    //   const history = useNavigate();
    const ProfileRequest = new Request();
    const dispatch = useDispatch();

    const subdomainuser = useSelector((state) => state.subdomainuser);
    const user = useSelector((state) => state.user)

    const [successMessage, success, errorMessage, error, verifyOtpoading, resetAll, EmailOtpSent,
        verifyEmailOtp, ContactOtpSent, verifyContactOtp] = useSentVerifyOTPHooks()

    const [userProfileImage, setUserProfileImage] = useState("");
    const [fullname, SetFullname] = useState("");
    const [emailAddress, SetEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [countryCode, setCountryCode] = useState(getCountryData().dial_code);
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [Active, setActive] = useState(false);
    const [disabledEmail, setdisabledEmail] = useState(false);
    const [verifyState, setVerifyState] = useState("");
    const [disabledContact, setdisabledContact] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    //error states
    const [emailError, setEmailError] = useState(false);
    const [isError, setIsError] = useState(false)
    const [valueIsValid, setValueIsValid] = useState(false);

    const openCropper = (ref) => {
        ref.current.open();
    }

    const uploadProfileImage = async (data) => {
        let imgData = data;
        setUserProfileImage(imgData);

        /*   let userId = AppLinkUrl.privateDomain() ? user && user._id : subdomainuser && subdomainuser._id
          await ProfileRequest.patch(ProfileRequest.url(`webneed-middleware/customer/${userId}?industry=${"Ecommerce"}`, 'middleware'),
            { profile_picture: imgData },
            (success) => {
              // Auth.updateSubdomainuserDetail("user_profile_picture", userProfileImage);
              // dispatch(updateSubdomainUserToStore({ user_profile_picture: imgData }));
              if (AppLinkUrl.privateDomain()) {
                dispatch({
                  type: USERINFOTYPES.UPDATE_USER_INFO,
                  payload: {
                    user_profile_picture: imgData
                  },
                });
              } else {
                dispatch(updateSubdomainUserToStore({ user_profile_picture: imgData }));
              }
            },
          ); */
    };

    const removeProfileImage = async () => {
        let imgData = "";
        setUserProfileImage(imgData);
        /* let userId = AppLinkUrl.privateDomain() ? user && user._id : subdomainuser && subdomainuser._id
        await ProfileRequest.patch(ProfileRequest.url(`webneed-middleware/customer/${userId}?industry=${"Ecommerce"}`, 'middleware'),
          { profile_picture: imgData },
          (success) => {
            // dispatch(updateSubdomainUserToStore({ user_profile_picture: imgData }));
            if (AppLinkUrl.privateDomain()) {
              dispatch({
                type: USERINFOTYPES.UPDATE_USER_INFO,
                payload: {
                  user_profile_picture: imgData
                },
              });
            } else {
              dispatch(updateSubdomainUserToStore({ user_profile_picture: imgData }));
            }
          },
        ); */
    }

    useEffect(() => {
        if (AppLinkUrl.privateDomain()) {
            if (user && user._id) {
                SetFullname(user?.user_fullname ? user?.user_fullname : "");
                setContactNumber(user?.user_contact ? user?.user_contact : "");
                setCountryCode(user?.user_country_code ? user?.user_country_code : getCountryData().dial_code);
                SetEmailAddress(user?.user_email ? user?.user_email : "");
                setDOB(user?.user_dob && user.user_dob !== "" ?
                    (moment(user?.user_dob).format("YYYY-MM-DD")) : "");
                setGender(user?.user_gender ? user?.user_gender : "");
                setUserProfileImage(user?.user_profile_picture &&
                    user.user_profile_picture !== "" ? user?.user_profile_picture : "");
            }
        } else {
            if (subdomainuser && subdomainuser._id) {
                SetFullname(subdomainuser?.user_fullname ? subdomainuser?.user_fullname : "");
                setContactNumber(subdomainuser?.user_contact ? subdomainuser?.user_contact : "");
                setCountryCode(subdomainuser?.user_country_code ? subdomainuser?.user_country_code : getCountryData().dial_code);
                SetEmailAddress(subdomainuser?.user_email ? subdomainuser?.user_email : "");
                setDOB(subdomainuser?.user_dob && subdomainuser.user_dob !== "" ?
                    (moment(subdomainuser?.user_dob).format("YYYY-MM-DD")) : "");
                setGender(subdomainuser?.user_gender ? subdomainuser?.user_gender : "");
                setUserProfileImage(subdomainuser?.user_profile_picture &&
                    subdomainuser.user_profile_picture !== "" ? subdomainuser?.user_profile_picture : "");
            }
        }
    }, [subdomainuser, user])

    const handleProfileOnChange = (e, field) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        switch (field) {
            case "name":
                SetFullname(value);
                break;
            case "email":
                SetEmailAddress(value);
                setdisabledEmail(true);
                setValueIsValid(!ValidationUtils.isEmail(value));
                setIsError(false);
                resetAll();
                break;
            case "dob":
                setDOB(moment(value).format("YYYY-MM-DD"));
                break;
            default:
                break;
        }
    }

    const handlePhoneInput = (value, country) => {
        let dialCode = country.dialCode;
        let mobile = value.replace(dialCode, "");
        setContactNumber(mobile);
        setValueIsValid(ValidationUtils.isEmpty(value));
        setIsError(false);
        setCountryCode(dialCode);
        resetAll();
        setdisabledContact(true);
    }

    const clickHandler = (() => {
        setActive(!Active)
    })

    const handleSelectGender = (value) => {
        setGender(value);
        setActive(false);
    }

    const validEmailId = () => {
        let isValid = true;
        if (emailAddress) {
            if (!ValidationFile.isEmail(emailAddress)) {
                isValid = false;
                setEmailError(true);
                setIsError(true)
            } else {
                isValid = true;
                setEmailError(false);
                setIsError(false)
            }
        }
        else {
            isValid = false;
        }
        return isValid;
    };

    const handleVerifyEmailButton = async (e) => {
        let valid = validEmailId();
        e.preventDefault();
        setVerifyState("email");
        if (valid) {
            await EmailOtpSent(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware", { email: emailAddress })
        }
    }

    const handleVerifyCancelButton = (type) => {

        if (type === "contact") {

            if (AppLinkUrl.privateDomain()) {
                setContactNumber(user?.user_contact ? user?.user_contact : "");
            } else {
                setContactNumber(subdomainuser?.user_contact ? subdomainuser?.user_contact : "");
            }
            setCountryCode(getCountryData().dial_code);
            setdisabledContact(false);
            setIsSubmit(false);
        }
        else {
            if (AppLinkUrl.privateDomain()) {
                SetEmailAddress(user?.user_email ? user?.user_email : "");
            } else {
                SetEmailAddress(subdomainuser?.user_email ? subdomainuser?.user_email : "");
            }
            setdisabledEmail(false);
            setIsSubmit(false);
        }
        resetAll();
    }

    const validContact = () => {
        let isValid = true;
        if (contactNumber && countryCode) {

            if ((countryCode.toString() === "91" || countryCode.toString() === "+91") && contactNumber.toString().length === 10) {
                isValid = true;
                setIsError(false);
            }
            else if (countryCode !== "91" && (contactNumber.length > 4 && contactNumber.length.length < 17)) {
                isValid = true;
                setIsError(false);
            }
            else {
                isValid = false;
                setIsError(true);
            }
        }
        else {
            isValid = false;
        }
        return isValid;
    };



    const handleVerifyContactButton = async () => {
        let valid = validContact();
        setVerifyState("contact");
        if (valid) {
            await ContactOtpSent(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware",
                { contact: contactNumber, country_code: countryCode });
        }
    }

    const handleChangeButton = (type) => {
        if (type === "email") {
            setdisabledEmail(true);
        }
        else {
            setdisabledContact(true);
        }
    }

    useEffect(() => {
        if (success && successMessage === "Verification Successfull") {
            setTimeout(() => {
                resetAll();
            }, 5000)
        }
    }, [success, successMessage])

    const handleCancelButton = (mobileView) => {
        if (mobileView) {
            dispatch(activateProfile(""))
        } else {
            location.reload();
        }
    }


    const handleSaveButton = async (mobileView) => {
        if (!disabledEmail && !disabledContact) {
            let userId = AppLinkUrl.privateDomain() ? user && user._id : subdomainuser && subdomainuser._id
            await ProfileRequest.patch(ProfileRequest.url(`webneed-middleware/customer/${userId}?industry=${"Ecommerce"}`, 'middleware'),
                { fullname: fullname, email: emailAddress, gender: gender, contact: contactNumber, countrycode: countryCode, dob: dob },
                (success) => {
                    dispatch(showToast("Changes saved successfully", "Eblouiussante_Toast"));

                    if (AppLinkUrl.privateDomain()) {
                        Auth.updateUserDetail("user_email", emailAddress)
                        Auth.updateUserDetail("user_fullname", fullname);
                        Auth.updateUserDetail("user_contact", contactNumber);
                        Auth.updateUserDetail("user_country_code", countryCode);
                        Auth.updateUserDetail("user_gender", gender);
                        Auth.updateUserDetail("user_dob", dob);
                        Auth.updateUserDetail("user_profile_picture", userProfileImage);
                        dispatch({
                            type: USERINFOTYPES.UPDATE_USER_INFO,
                            payload: {
                                user_email: emailAddress,
                                user_fullname: fullname,
                                user_contact: contactNumber,
                                user_country_code: countryCode,
                                user_gender: gender,
                                user_dob: dob,
                                user_profile_picture: userProfileImage
                            },
                        });
                    } else {

                        Auth.updateSubdomainuserDetail("user_email", emailAddress);
                        Auth.updateSubdomainuserDetail("user_fullname", fullname);
                        Auth.updateSubdomainuserDetail("user_contact", contactNumber);
                        Auth.updateSubdomainuserDetail("user_country_code", countryCode);
                        Auth.updateSubdomainuserDetail("user_gender", gender);
                        Auth.updateSubdomainuserDetail("user_dob", dob);
                        Auth.updateSubdomainuserDetail("user_profile_picture", userProfileImage);
                        dispatch(updateSubdomainUserToStore({
                            user_email: emailAddress,
                            user_fullname: fullname,
                            user_contact: contactNumber,
                            user_country_code: countryCode,
                            user_gender: gender,
                            user_dob: dob,
                            user_profile_picture: userProfileImage
                        }));

                    }

                    if (mobileView) {
                        dispatch(activateProfile(""))
                    }
                },
                (error) => {

                }
            );
        }
        else {
            setIsSubmit(true);
        }
    }

    return [openCropper, uploadProfileImage, userProfileImage, removeProfileImage, handleProfileOnChange, Active, clickHandler,
        handleSelectGender, gender, fullname, emailAddress, contactNumber, countryCode, handlePhoneInput, dob,
        disabledEmail, handleVerifyEmailButton, verifyState, emailError, isError, valueIsValid, errorMessage, successMessage, success,
        disabledContact, error, handleVerifyCancelButton, handleVerifyContactButton, handleChangeButton, handleCancelButton, handleSaveButton,
        setVerifyState, subdomainuser, verifyOtpoading, resetAll, isSubmit, setdisabledContact, setdisabledEmail]
}

export default useMyProfile
