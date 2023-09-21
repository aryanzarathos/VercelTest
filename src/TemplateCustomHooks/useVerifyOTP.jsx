import React, { useRef, useState } from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import useSetLogin from '../CustomHooks/useSetLogin';
// import AppLinkUrl from '../Common/AppLink/AppLinkUrl';
import useSentVerifyOTPHooks from './useSentVerifyOTPHooks';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import useDownTimer from '@/CustomHooks/useDownTimer';

const useVerifyOTP = (verifyState, email, contact, countryCode, OTPState, setVerifyState, flowType,
  productId, business, user, formFields, body, buisnessContactForm) => {

  const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data);
  const [successMessage, success, errorMessage, error, verifyOtpoading, resetAll, EmailOtpSent,
    verifyEmailOtp, ContactOtpSent, verifyContactOtp] = useSentVerifyOTPHooks()

  const [symbolsArr] = useState(["e", "+", "-", "E", "."])

  let navigate = useAppNavigate();

  const [loading, setLoading] = useState(false);
  const [resendButton, setResendButton] = useState(false);
  const [timer, setTimer] = useDownTimer(30);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [OTPError, setOTPError] = useState(false)
  const [arrowsKeyState, setArrowKeyState] = useState(false);

  let inputRefs = useRef([]);

  const resend = async () => {
    if (timer === "0s" || timer === "0" || timer === 0) {
      setLoading(true)
      setResendButton(true)
      if (flowType && flowType === "MyProfile") {
        if (verifyState === "contact") {
          await ContactOtpSent(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware",
            { contact: contact, country_code: countryCode });
          setTimer(30)
          setLoading(false);
        } else {
          await EmailOtpSent(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware", { email: email })
          setTimer(30)
          setLoading(false);
        }
      }
      else {
        if (verifyState === "contact") {
          await ContactOtpSent(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware",
            { country_code: countryCode, "contact": contact, type: "contact" });
          setTimer(30)
          setLoading(false);
        } else {
          await EmailOtpSent(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware",
            { email: email, "type": "email", });
          setTimer(30)
          setLoading(false);
        }
      }
      setOtp(["", "", "", "", "", ""])
    }
  }

  // useMemo(() => {
  //   setTimer('30')
  // }, [])

  // useEffect(() => {
  //   if (success) {
  //     setLoading(false)
  //   }
  // }, [resetAll, success])

  // useEffect(() => {
  //   if (success && flowType !== "MyProfile" && flowType !== "ContactUs") {
  //     setLoading(false);
  //     // setTimer('30');
  //     if (!resendButton && successMessage !== "Wrong Otp") {
  //       if (flowType === "Guest") {
  //         navigate('/shipping-address');
  //       } else if (flowType === "Wishlist") {
  //         navigate('/my-wishlist');
  //       } else {
  //         navigate('/');
  //       }
  //       resetAll();
  //     }
  //   }
  // }, [resetAll, success, flowType])

  useEffect(() => {
    if (success && flowType === "MyProfile") {
      setTimeout(() => {
        resetAll();
      }, 5000)
    }
  }, [flowType, resetAll, success])

  useSetLogin(successMessage, flowType !== "MyProfile" && flowType !== "ContactUs" && resendButton === false ? success : false, flowType, businessData, productId, body)

  const handleMouseClick = (e) => {
    setArrowKeyState(!arrowsKeyState)
  }

  const onKeyUpChange = (e, index, paste) => {
    console.log(e, "hi")
    if (!paste) {
      e.persist(); // Persist the synthetic event
    }
    const newOtp = otp;
    // Clear the current input and move focus to the previous input
    if (e.key === 'Backspace' && index > 0 && newOtp[index] === '') {
      newOtp[index - 1] = '';
      setTimeout(() => {
        inputRefs.current[index - 1].focus();
      }, 10);

    }
    setOtp([...newOtp]);
  }
  const switchHandelChange = (e, index, paste) => {
    // e.persist(); // Persist the synthetic event
    if (!paste) {
      e.persist(); // Persist the synthetic event
    }
    resetAll()
    setOTPError(false)
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtp = otp;
      // if (newOtp[index].length <= 0) {
      newOtp[index] = value;
      setOtp([...newOtp]);
      // Move focus to the next input
      if (value !== '' && index < inputRefs.current.length - 1) {
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 10);
      }
      // }
    }


  }

  const handlePaste = (e) => {
    e.preventDefault();
    console.log(e, "jjo")
    const pastedText = e.clipboardData.getData('text/plain');
    //// console.log(pastedText)
    const pastedOtp = pastedText.split('').slice(0, 6);


    // setOtp(pastedOtp);
    // manually trigger onChange for the remaining input fields
    for (let i = 0; i < pastedOtp.length; i++) {
      let element = pastedOtp[i]
      switchHandelChange({ ...e, target: { value: element } }, i, "paste");
    }
  };

  const verifyOTP = () => {
    setResendButton(false);
    let validOtp = otp.join("")
    if (validOtp.length === 6) {
      setOtp(otp);
      setOTPError(false);
    } else {
      setOTPError(true);
    }
  }


  function registrationPayload() {
    if (verifyState === "contact") {
      return {
        contact: contact,
        country_code: countryCode,
        otp: otp.join(""),
      };
    } else {
      return {
        email: email,
        otp: otp.join(""),
      };
    }
  }

  function verifyOTPPayload() {
    if (flowType && flowType === "ContactUs") {
      return {
        customer_details: formFields,
        business: businessData?._id,
        otp: otp.join(""),
        buisnessContactForm: buisnessContactForm
      }
    }
    else
      if (verifyState === "contact") {
        return {
          contact: contact,
          country_code: countryCode,
          "type": "contact",
          otp: otp.join(""),
        };
      } else {
        return {
          email: email,
          "type": "email",
          otp: otp.join(""),
        };
      }
  }

  useEffect(() => {
    if (otp.join("").length === 6) {
      if (flowType && flowType === "MyProfile") {
        if (verifyState === "contact") {
          verifyContactOtp(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}&otpCheck=true`, "middleware", registrationPayload())
        } else {
          verifyEmailOtp(`/webneed-middleware/userverificationV2?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}&otpCheck=true`, "middleware", registrationPayload())
        }
      }
      else if (flowType && flowType === "ContactUs") {

        verifyContactOtp("/contact-customize/usercontactus?verifyOtp=true", "commonservices", verifyOTPPayload())
      }
      else {
        if (verifyState === "contact") {
          verifyContactOtp(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}&otpCheck=true`, "middleware", verifyOTPPayload())
        } else {
          verifyEmailOtp(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}&otpCheck=true`, "middleware", verifyOTPPayload())
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp])

  const handleOTPCancelButton = () => {
    setVerifyState("");
    resetAll();
  }

  return [resend, timer, loading, OTPError, inputRefs,
    handleMouseClick, symbolsArr, onKeyUpChange,
    switchHandelChange, verifyOTP, verifyOtpoading, successMessage, success, handleOTPCancelButton, handlePaste, otp]
}

export default useVerifyOTP
