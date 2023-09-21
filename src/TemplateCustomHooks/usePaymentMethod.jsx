import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Auth from "../Classes/Auth";
import Storage from "../Classes/Storage";
// import AppLinkUrl from "../../Common/AppLink/AppLinkUrl";
// import { getInstituteData } from "../store/actions/businessInfo";
import { createOrderFromCart, Getcart, PostcartReset } from "../store/actions/cartOrder/cartOrder";
import { getPartialChanges } from "../store/actions/acceptpayments";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { useRouter } from 'next/router';
const usePaymentMethod = () => {
  let dispatch = useDispatch();
  const navigate = useAppNavigate();
  const router = useRouter();
  // const { id, billingId } = useParams();
  const pathname = router.asPath;
  let id = pathname.split("/")[2]
  let billingId = pathname.split("/")[3]
  //// console.log("line 1777777777777777777777777", id, billingId,pathname)
  const [paymentMode, setPaymentMode] = useState("");
  const [disableContinueButton, setDisableContinueButton] = useState(false);
  const [cartConditionCOD, setCartConditionCOD] = useState(false);
  const [disableCodOption, setDisableCodOption] = useState(false);
  const [partialCod, setPartialCod] = useState(false);

  const user = useSelector((state) => state.user);
  const { getbusinessInfoData, subdomainuser, customerCartData,
    customerCartSuccess, getPartialChargesSuccess, getPartialChargesData
  } = useSelector((state) => {
    return {
      subdomainuser: state.subdomainuser,
      getbusinessInfoData: state.websiteTemplate.getTemplate.data?.businessData,
      customerCartData: state.cartOrder.customerCart.data,
      customerCartSuccess: state.cartOrder.customerCart.success,
      getPartialChargesSuccess: state.acceptPayments.getPartialChargesData.success,
      getPartialChargesData: state.acceptPayments.getPartialChargesData.data,

    };
  })

  useEffect(() => {
    const businessShopid = AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business;
    // dispatch(getInstituteData(subdomainuser.user_business, subdomainuser.user_business_type));
    dispatch(getPartialChanges(businessShopid));
  }, [dispatch, subdomainuser.user_business, user.user_business])

  useEffect(() => {
    return () => {
      dispatch(PostcartReset());
    }
  }, [dispatch])

  useEffect(() => {

    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (AppLinkUrl.privateDomain() && Auth.isLogin()) {

        dispatch(Getcart(user._id, user.user_business))
      } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {

        dispatch(Getcart(subdomainuser._id, subdomainuser.user_business))
      }
    } else {
      let userId = Storage.alive("Uuid_For_Guest_Login") ? localStorage.getItem("Uuid_For_Guest_Login") : ""
      if (AppLinkUrl.privateDomain() && Auth.isLogin()) {

        dispatch(Getcart(userId, getbusinessInfoData._id, true))
      } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {

        dispatch(Getcart(userId, getbusinessInfoData._id, true))
      }
    }


  }, [user, subdomainuser, dispatch, getbusinessInfoData._id])
  // useEffect(() => {
  //   if (localStorage.getItem("Uuid_For_Guest_Login") && businessInfoSuccess && businessInfoData) {
  //     let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
  //     dispatch(Getcart(guestUuidData, businessInfoData._id, true));
  //   }

  //   
  // }, [businessInfoData]);
  useEffect(() => {
    if (getbusinessInfoData.razorpay_acount_id && getbusinessInfoData.has_razorpay) {
      if (getbusinessInfoData && getbusinessInfoData?.partial_cod_exist === true &&
        customerCartSuccess && customerCartData && customerCartData?.partal_payment_available === true) {
        setPaymentMode("cashOnDelivery");
      }
    }
    else if (getbusinessInfoData.razorpay_acount_id) {
      setPaymentMode("Razorpay");
    }
    if (getbusinessInfoData.has_usaepay) {
      setPaymentMode("UsaEpay");
    }
    else {
      setPaymentMode("cashOnDelivery");
    }
  }, [getbusinessInfoData])

  const handlePaymentMode = (value) => {
    if (value === "cashOnDelivery") {
      if (!disableContinueButton) {
        setPaymentMode(value);
      }
    }
    else if (getbusinessInfoData.razorpay_acount_id) {
      setPaymentMode(value);
    }
    else {
      setPaymentMode(value)
    }
  }

  const handlePartialCod = () => {
    const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
    const businessShopid = AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business;
    let body = {
      user: userId,
      business: businessShopid,
      shipping_address: id,
      BillingAddressIsSame: false,
      cart: customerCartSuccess && customerCartData?.data[0]?.cartId,
      order_payment_method: paymentMode,
      couponCode: customerCartSuccess && customerCartData && customerCartData?.couponCode ? customerCartData?.couponCode : "",
      partialCod: partialCod,
      partial_amount: getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.partial_amount ? getPartialChargesData?.partial_amount : "",
      partial_amount_refundable: getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.refundable ? getPartialChargesData?.refundable : ""
    };
    dispatch(createOrderFromCart(body, navigate, "", getbusinessInfoData?.business_name, getbusinessInfoData));
  }

  const handleRazorpay = (creditcard) => {
    console.log(paymentMode, creditcard, "helllooo")
    let body = {}
    if (paymentMode === "UsaEpay") {
      body = { ...creditcard }
    }
    if (paymentMode === "Mojo") {
      body = { ...creditcard }
    }
    // const businessShopid = customerDetail.data.business && customerDetail.data.business.length > 0 ? customerDetail.data.business[0]._id : customerDetail.data.business._id
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      const businessShopid = AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business;
      const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
      const BillingAddressIsSame = AppLinkUrl.privateDomain() ? user.user_billing_address_same : subdomainuser.user_billing_address_same;
      if (BillingAddressIsSame) {
        body = {
          ...body,
          user: userId,
          business: businessShopid,
          shipping_address: id,
          BillingAddressIsSame: false,
          cart: customerCartSuccess && customerCartData.data[0].cartId,
          order_payment_method: paymentMode,
          couponCode: customerCartSuccess && customerCartData && customerCartData?.couponCode ? customerCartData?.couponCode : "",
          partialCod: false,
          partial_amount: "",
          partial_amount_refundable: ""
        };
        dispatch(createOrderFromCart(body, navigate, "", getbusinessInfoData?.business_name, getbusinessInfoData));
      } else {
        body = {
          ...body,
          user: userId,
          business: businessShopid,
          BillingAddressIsSame: true,
          billing_address: billingId,
          shipping_address: id,
          cart: customerCartSuccess && customerCartData.data[0].cartId,
          order_payment_method: paymentMode,
          couponCode: customerCartSuccess && customerCartData && customerCartData?.couponCode ? customerCartData?.couponCode : "",
          partialCod: false,
          partial_amount: "",
          partial_amount_refundable: ""
        };
        dispatch(createOrderFromCart(body, navigate, "", getbusinessInfoData?.business_name, getbusinessInfoData));
      }
    } else {
      const businessShopid = AppLinkUrl.privateDomain() ? getbusinessInfoData._id : getbusinessInfoData._id;
      const userId = Storage.alive("Guest_new_userId") ? localStorage.getItem("Guest_new_userId") : "";
      const BillingAddressIsSame = Storage.alive("billingAddressSame") ? localStorage.getItem("billingAddressSame") : true;

      if (BillingAddressIsSame === "true" || BillingAddressIsSame === true) {
        body = {
          ...body,
          user: userId,
          business: businessShopid,
          shipping_address: id,
          BillingAddressIsSame: false,
          cart: customerCartSuccess && customerCartData.data[0].cartId,
          order_payment_method: paymentMode,
          couponCode: customerCartSuccess && customerCartData && customerCartData?.couponCode ? customerCartData?.couponCode : "",
          partialCod: false,
          partial_amount: "",
          partial_amount_refundable: ""
        };
        dispatch(createOrderFromCart(body, navigate, "guest", getbusinessInfoData?.business_name, getbusinessInfoData));
      } else {
        body = {
          ...body,
          user: userId,
          business: businessShopid,
          BillingAddressIsSame: true,
          billing_address: billingId,
          shipping_address: id,
          cart: customerCartSuccess && customerCartData.data[0].cartId,
          order_payment_method: paymentMode,
          couponCode: customerCartSuccess && customerCartData && customerCartData?.couponCode ? customerCartData?.couponCode : "",
          partialCod: false,
          partial_amount: "",
          partial_amount_refundable: ""
        };
        dispatch(createOrderFromCart(body, navigate, "guest", getbusinessInfoData?.business_name, getbusinessInfoData));
      }
    }

  }
  const changeStep = (route) => {
    // navigate(route)
  }

  useEffect(() => {
    if (getbusinessInfoData && getbusinessInfoData?.partial_cod_exist === true &&
      customerCartSuccess && customerCartData && customerCartData?.partal_payment_available === true) {
      setPartialCod(true);
    }
    else {
      setPartialCod(false);
    }
  }, [getbusinessInfoData])

  useEffect(() => {
    if (customerCartSuccess && customerCartData && customerCartData?.couponValidForOnlinePayment === true) {
      setDisableContinueButton(true);
    }
    else if (getbusinessInfoData && customerCartSuccess && customerCartData) {
      if (getbusinessInfoData?.cash_on_delivery_enabled) {

        //cart value condition - order total should be more than cart value.
        if (getbusinessInfoData?.cart_cod_limit) {
          if (getbusinessInfoData?.cart_cod_price_limit <= (customerCartData?.TotalPrice + customerCartData?.shippingPrice)) {
            if (customerCartData?.data?.length) {
              let data = customerCartData.data.every((i) => i?.product?.cod === true)
              if (data === true) {
                setCartConditionCOD(false);
              }
              else {
                setCartConditionCOD(true);
              }
            }
          }
          else {
            setCartConditionCOD(true);
            setPaymentMode("");
          }
        }

        //product price condition - order total should be more than cart value.
        if (getbusinessInfoData?.cod_price_limitation) {
          if (customerCartData.data.every((i) => i?.product?.priceAfterDiscount <= getbusinessInfoData?.cash_on_delivery_price_limit)) {
            if (customerCartData?.data?.length) {
              let data = customerCartData.data.every((i) => i?.product?.cod === true)
              if (data === true) {
                setDisableCodOption(false);
              }
              else {
                setDisableCodOption(true);
              }
            }
          }
          else {
            setDisableCodOption(true);
            setPaymentMode("");
          }
        }


        else {
          if (customerCartData?.data?.length) {
            let data = customerCartData.data.every((i) => i?.product?.cod === true)
            if (data === true) {
              setDisableContinueButton(false);
            }
            else {
              setDisableContinueButton(true);
            }
          }
        }
      }
    }
  }, [customerCartData, customerCartSuccess, getbusinessInfoData,])
  return [, getbusinessInfoData, customerCartSuccess, customerCartData, paymentMode, handlePaymentMode,
    disableContinueButton, handleRazorpay, changeStep, partialCod, getPartialChargesSuccess, getPartialChargesData, handlePartialCod,
    disableCodOption, cartConditionCOD]
}
export default usePaymentMethod