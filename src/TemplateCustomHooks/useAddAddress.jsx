import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../Classes/Auth";
import Storage from "../Classes/Storage";
import ValidationUtils from "../Classes/ValidationUtils";
// import AppLinkUrl from "../../Common/AppLink/AppLinkUrl";
import ZipCodes from "../CommonComponents/Zipcodes/Zipcodes.json";
import { getCountryData } from "../CommonFunctions/helperFunction";
import { addressListOperation, postCustomerBillingAddress, postCustomerShippingAddress, updateBillingAddressDetails, updateShippingAddressDetails } from "../store/actions/cartOrder/cartOrder";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const useAddAddress = (popupState, editData) => {
  // Data states
  const [name, set_name] = useState("");
  const [phone, set_phone] = useState("");
  const [phone_country_code, set_phone_country_code] = useState(getCountryData().dial_code);
  const [zipcode, set_zipcode] = useState("");
  const [country, set_country] = useState("");
  const [state, set_state] = useState("");
  const [address, set_address] = useState("");
  const [address_line2, set_address_line2] = useState("");
  const [address_line3, set_address_line3] = useState("");

  // Error states
  const [name_error, set_name_error] = useState(false);
  const [phone_error, set_phone_error] = useState(false);
  const [zipcode_error, set_zipcode_error] = useState(false);
  const [country_error, set_country_error] = useState(false);
  const [state_error, set_state_error] = useState(false);
  const [address_error, set_address_error] = useState(false);
  // Other states
  const [isFilled, setisFilled] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false)
  const [showError, setShowError] = useState(false);
  const [countryZipCodeIndex, setCountryZipCodeIndex] = useState("");
  const [countryZipCodeError, setCountryZipCodeError] = useState(false);


  const { user, subdomainuser, customerAddressListSuccess, customerAddressListLoading } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      customerAddressListSuccess: state.cartOrder.postAddresses.success,
      customerAddressListLoading: state.cartOrder.customerAddressList.loading,
    }
  })

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setIsSubmit(false);
    setShowError(true);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case "name":
        set_name(inputValue);
        set_name_error(
          !ValidationUtils.isNotEmpty(inputValue) && showError
        );

        break;
      case "address":
        set_address(inputValue);
        set_address_error(
          !ValidationUtils.isNotEmpty(inputValue) && showError
        );
        break;
      case "address_line2":
        set_address_line2(inputValue);
        set_address_error(false);
        break;
      case "address_line3":
        set_address_line3(inputValue);
        break;
      case "country":
        set_country(inputValue);
        set_country_error(
          !ValidationUtils.isNotEmpty(inputValue) && showError
        );
        break;
      case "state":
        set_state(inputValue);
        set_state_error(
          !ValidationUtils.isNotEmpty(inputValue) && showError
        );
        break;

      case "zipcode":
        set_zipcode(inputValue);
        set_zipcode_error(
          !ValidationUtils.isNotEmpty(inputValue) && showError
        );
        ZipCodeValidCheck()
        break;
      default:
        break;
    }
  };

  const ZipCodeValidCheck = () => {

    if (zipcode && countryZipCodeIndex) {
      let RegExCHeck = ZipCodes.zipCode[countryZipCodeIndex].Regex;
      var pattern = new RegExp(RegExCHeck);
      if (pattern.test(zipcode)) {
        setCountryZipCodeError(false);
        return true;
      } else {
        setCountryZipCodeError(true);
        return false;
      }
    }
  };

  const setCountry = (value) => {
    set_country(value);
    set_country_error(false);
  }

  const setState = (value) => {
    set_state(value);
    set_state_error(false);
  }

  const handleInputContact = (value, formattedValue) => {
    const dialCode = formattedValue.dialCode;
    let mobile = value.replace(dialCode, "");
    let inputValue = mobile;
    set_phone(inputValue);
    set_phone_error(false)
    set_phone_country_code(dialCode);
  };

  const isFormValid = () => {
    return phone_error ||
      name_error ||
      address_error ||
      country_error ||
      state_error ||
      zipcode_error ||
      !(name && phone && phone_country_code && zipcode && country && state && address && address_line2)
      ? false
      : true;
  };
  const checkValidation = () => {
    if (ValidationUtils.isEmpty(name)) {
      set_name_error(true)
    }
    if (ValidationUtils.isEmpty(phone)) {
      set_phone_error(true)
    }
    if (ValidationUtils.isEmpty(zipcode)) {
      set_zipcode_error(true)
    }
    if (ValidationUtils.isEmpty(country)) {
      set_country_error(true)
    }
    if (ValidationUtils.isEmpty(state)) {
      set_state_error(true)
    }
    if (ValidationUtils.isEmpty(address)) {
      set_address_error(true)
    }
    if (ValidationUtils.isEmpty(address_line2)) {
      set_address_error(true)
    }
  }
  const cancelButton = () => {

  }

  const saveButton = async () => {
    const body = {
      name: name.trim(),
      phone,
      countryCode: phone_country_code,
      pinCode: zipcode.trim(),
      country,
      state,
      userId: AppLinkUrl.privateDomain() ? user._id : subdomainuser._id,
      address: `${address} ${address_line2} ${address_line3}`,
      fullAddress: address,
      addressLineTwo: address_line2,
      landmark: address_line3
    }
    setIsSubmit(true);
    checkValidation()
    if (popupState === "Shipping") {
      if (isFormValid()) {
        if (editData) {
          if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            dispatch(updateShippingAddressDetails(editData._id, body));
            setAddSuccess(true)
          } else {
            Storage.setJson("userShippingAddress", { ...body, _id: editData._id, activeAddress: true })
            dispatch(updateShippingAddressDetails(1, { ...body, activeAddress: true, _id: 1 }, true));
            setAddSuccess(true)
          }
        }
        else {
          if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            dispatch(postCustomerShippingAddress(body));
            setAddSuccess(true)
          } else {
            Storage.setJson("userShippingAddress", {
              ...body
              , activeAddress: true, _id: 1
            })
            dispatch(postCustomerShippingAddress({ ...body, activeAddress: true, _id: 1 }, true));
            setAddSuccess(true)
          }
        }
      }
    }
    else {
      if (isFormValid()) {
        if (editData) {
          if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            dispatch(updateBillingAddressDetails(editData._id, body));
            setAddSuccess(true)
          } else {
            Storage.setJson("userBillingAddress", { ...body, activeBillingAddress: true, _id: editData._id })
            dispatch(updateBillingAddressDetails(1, { ...body, activeBillingAddress: true, _id: 1 }, body, true));
            setAddSuccess(true)
          }
        }
        else {
          if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            dispatch(postCustomerBillingAddress(body));
            setAddSuccess(true)
          } else {
            Storage.setJson("userBillingAddress", {
              ...body
              , activeBillingAddress: true, _id: 1
            })
            dispatch(postCustomerBillingAddress({
              ...body
              , activeBillingAddress: true, _id: 1
            }, true));
            setAddSuccess(true)
          }
        }
      }
    }
  }

  useEffect(() => {
    if (editData && isFilled === false) {
      setisFilled(true);
      set_name(editData?.name);
      set_phone(editData?.phone||"");
      set_phone_country_code(editData?.countryCode);
      set_zipcode(editData?.pinCode);
      setCountry(editData?.country);
      setState(editData?.state);
      set_address(editData?.fullAddress);
      set_address_line2(editData?.addressLineTwo);
      set_address_line3(editData?.landmark);
    }
  }, [editData, isFilled])

  return [handleInput, cancelButton, saveButton,
    name, phone, phone_country_code, zipcode,
    country, state, address, address_line2,
    address_line3, name_error, phone_error,
    zipcode_error, country_error, state_error,
    address_error, isSubmit, handleInputContact,
    setCountry, setState, customerAddressListSuccess, addSuccess
  ];
}

export default useAddAddress;