// import React from 'react'
import { useState } from 'react';
import Request from '../Classes/Request';
// import AppLinkUrl from '../../Common/AppLink/AppLinkUrl';

const useSentVerifyOTPHooks = () => {

  const [successMessage, setSuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const SignUpRequest = new Request();
  const [verifyOtpoading, setLoading] = useState(false);

  const resetAll = () => {
    setSuccessMessage("")
    setSuccess(false)
    setErrorMessage("")
    setError(false)
    setLoading(false)
  }

  const EmailOtpSent = async (url, type, data) => {
    let action = "checkEmailExist"
    await SignUpRequest.post(SignUpRequest.url(url, type),
      data,
      (success) => {
        if (success.data === "Email Not Available") {
          setError(true)
          setErrorMessage(success.data)
        } else {
          setSuccess(true)
          setSuccessMessage("Verification link sent")
        }
      },
      (error) => {
        setErrorMessage("There was some error.")
      }
    );
  }
  const verifyEmailOtp = async (url, type, data) => {
    setLoading(true)
    await SignUpRequest.post(SignUpRequest.url(url, type),
      data,
      (success) => {
        if (success.status === 200 && (success.data === "Verification Successfull"||JSON.stringify(success.data)!=="{}")) {
          // Updating states for login
          setSuccessMessage(success.data); // Set response data
          setSuccess(true); // Registration done.
          setLoading(false);
          // Storage.remove(accountStorageData); // Remove prefill data from storage
        
        }
        else {
          // Contact Exixt
          if (success.data.message === "Contact Already Exist.") {
            setErrorMessage(success.data.message);
            setError(true)
          }
          else if (success.data.message === "Email Already Exist.") {
            setErrorMessage(success.data.message);
            setError(true)
          }
          else if(success.data.message ==="Wrong Otp"){
            setErrorMessage(success.data.message);
            setError(true);
          }
          else if (success.data.message === "Error Occured") {
            setErrorMessage("Invalid OTP. Please try again");
            setError(true)
          }
          setLoading(false)
        }
      },
      () => {
        setLoading(false)
      }
    );
  }

  const ContactOtpSent = async (url, type, data) => {
    let action = "checkemail"
    setLoading(true)
    await SignUpRequest.post(SignUpRequest.url(url, type),
      data,
      (success) => {
      
        setLoading(false)
        if (success.data === "Otp Sent") {
          setSuccess(true)
          setSuccessMessage("Otp Sent Successfully")
        } else {
          setError(true)
          setErrorMessage(success.data)
        }
      },
      (error) => {
        setErrorMessage("There was some error.")
      }
    );
  }

  const verifyContactOtp = async (url, type, data) => {
    setLoading(true)
    await SignUpRequest.post(SignUpRequest.url(url, type),
      data,
      (success) => {
        if (success.status === 200 && success.data) {
          // Updating states for login
          setSuccessMessage(success.data); // Set response data
          setSuccess(true); // Registration done.
          setLoading(false);
          // Storage.remove(accountStorageData); // Remove prefill data from storage
        } else {
          // Contact Exixt
          if (success.data.message === "Contact Not Available.") {
            setErrorMessage(success.data.message);
            setError(true)
          }
          else if (success.data.message === "Email Already Exist.") {
            setErrorMessage(success.data.message);
            setError(true)
          }
          else if (success.data.message === "Error Occured"||success.data.message==="Wrong Otp") {
            setErrorMessage("Invalid OTP. Please try again");
            setError(true)
          }
          setLoading(false)
          // setRegError(true)
        }
        // setCreateLoading(false);
        // history(`/auth/thank-you/${createAccount.email.value}`);
      },
      () => {
        setLoading(false)
      }
    );

  }

  return [successMessage, success, errorMessage, error, verifyOtpoading, resetAll, EmailOtpSent, verifyEmailOtp, ContactOtpSent, verifyContactOtp]
}

export default useSentVerifyOTPHooks
