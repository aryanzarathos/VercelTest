import { useState } from 'react'
import ValidationUtils from '../Classes/ValidationUtils';
// import AppLinkUrl from '../AppLink/AppLinkUrl';
import { getCountryData } from '../CommonFunctions/helperFunction';
import useSentVerifyOTPHooks from './useSentVerifyOTPHooks';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import useCountryCodes from '@/CustomHooks/useCountryCodes';

const useLoginSignup = () => {

  const [successMessage, success, errorMessage, error, verifyOtpoading, resetAll, EmailOtpSent, verifyEmailOtp, ContactOtpSent, verifyContactOtp] = useSentVerifyOTPHooks();

  const [symbolsArr] = useState([" "]);
  const [countryCode, countryDialCode, countryName] = useCountryCodes()

  const [type, setType] = useState("")
  const [email, setEmail] = useState("");
  const [country_code, setCountry_Code] = useState(countryDialCode);
  const [contact, setContact] = useState("");
  // const [OTPSection, setOTPSection] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  //Error
  const [isError, setIsError] = useState(false);
  const [valueIsValid, setValueIsValid] = useState(false);
  const [emailError, setEmailError] = useState(false)

  const onChangeValue = async (e) => {
    let value = e.target.value

    if (value) {
      if (/^(\(?\+?[0-9]*\)?)?[0-9(\)]*$/.test(value)) {
        setType("contact")
        setContact(value)
      } else {
        setType("email")
        setEmail(value)
      }
      setIsError(false);
    }
    else {
      setIsError(true);
      setType("");
    }
    setEnteredValue(value);
  }

  function isCharacter(str) {
    return /^[A-Za-z]*$/.test(str);
  }
  const handleKeyDown = (e) => {
    console.log(e, "hihihiih")
    // const regex = /[a-z]/;
    if (e.key !== "Backspace") {
      if (isCharacter(e.target.value)) {
        setType("email")
        let data = e.target.value.split(" ")
        setEmail(data[1])
      }
    }
  }


  const handleInputContact = (value, formattedValue) => {
    const dialCode = formattedValue.dialCode;
    let mobile = value.replace(dialCode, "");
    let inputValue = mobile;
    setEnteredValue(inputValue);
    if (inputValue === "") {
      setContact(inputValue)
      setType("")
    } else {
      setCountry_Code(dialCode)
      setContact(inputValue)
      setIsError(false)
      // resetAll()
    }
  }

  const onChangeEmail = (e) => {
    let value = e.target.value;
    if (!value) {
      setEmail("")
      setEnteredValue("")
      setType("")
    }
    else {
      setEmail(value)
      if (ValidationUtils.isEmail(value)) {
        setValueIsValid(true)
        setEmailError(false)
      } else {
        setValueIsValid(false)
        setEmailError(true)
      }
      setIsError(false)
      // resetAll()
    }
  }

  const checkValidationContact = (country_code, contact) => {
    if (country_code !== 91) {
      if (contact !== "") {
        setValueIsValid(true)
        return true;
      } else {
        setValueIsValid(false)
        return false;
      }
    } else {
      if (contact.length === 10) {
        setValueIsValid(true)
        return true;

      } else {
        setValueIsValid(false)
        return false;
      }
    }

  };

  const isFormValid = () => {
    let result = true
    let validContact = checkValidationContact(country_code, contact)
    if (type) {
      if (type === "contact") {
        if (validContact) {
          result = true
        } else {
          result = false
        }
      }
      if (type === "email") {
        if (!ValidationUtils.isEmail(email)) {
          setEmailError(true)
          result = false
        }
        else {
          result = true
        }
      }
    }
    else {
      result = false;
    }
    return result
  }

  const OTPSentPayload = () => {
    let data = {};
    if (type === "contact") {
      data = {
        "country_code": country_code,
        "contact": contact,
        "type": "contact",
      }
    }
    else {
      data = {
        "email": email,
        "type": "email",
      }
    }
    return data;
  }

  const handleContinueButton = async () => {
    let validForm = isFormValid();
    if (ValidationUtils.isNotEmpty(enteredValue) && validForm) {
      setIsError(false);
      if (type === "contact") {
        await ContactOtpSent(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware", OTPSentPayload());
      }
      else {
        await EmailOtpSent(`/webneed-middleware/lsmerge?${AppLinkUrl.subdomain() ? "subdomain" : "domain"}=${AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost()}`, "middleware", OTPSentPayload());
      }
    }
    else {
      setIsError(true);
    }
  }

  return [type, onChangeValue, country_code, contact, handleInputContact, email, onChangeEmail, enteredValue,
    symbolsArr, isError, valueIsValid, emailError, handleContinueButton, success, successMessage, countryCode, handleKeyDown]

}

export default useLoginSignup
