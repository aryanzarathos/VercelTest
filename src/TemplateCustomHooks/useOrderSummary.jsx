import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom
import Auth from "../Classes/Auth";
import Request from "../Classes/Request";
import Storage from "../Classes/Storage";
import ValidationUtils from "../Classes/ValidationUtils";
// import AppLinkUrl from "../Common/AppLink/AppLinkUrl";
// import { updateShippingPrice } from "../store/actions/cartOrder/cartOrder";
import { updateSubdomainUserToStore } from "../store/actions/subdomainuser";
import { UPDATE_USER } from "../store/reducers/user";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import { updateShippingPrice } from "@/store/actions/guestCart";
const useOrderSummary = () => {
  const history = useAppNavigate()
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const UserRequest = new Request()
  const dispatch = useDispatch()
  const [disableContinueButton, setDisableContinueButton] = useState(false);
  const [deliveryFees, setDeliveryFees] = useState(0)
  const { customerCartData, customerCartSuccess, subdomainuser, user, ShippingAddressData, businessData } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      customerproductDetailLoading: state.productList.customerproductDetail.loading,
      customerproductDetailSuccess: state.productList.customerproductDetail.success,
      variationDetails: state.productList.customerproductDetail.data.variation,
      productDetails: state.productList.customerproductDetail.data.product,
      // ecomWebsite: state.businessInfo.ecomWebsite,
      customerCartData: state.cartOrder.customerCart.data.data,
      customerCartSuccess: state.cartOrder.customerCart.success,
      postLoading: state.cartOrder.customerCart.postLoading,
      cartLoading: state.cartOrder.customerCartQuantity.loading,
      postSuccess: state.cartOrder.customerCart.postSuccess,
      customerAddressListData: state.cartOrder.customerAddressList.data,
      customerAddressListSuccess: state.cartOrder.customerAddressList.success,
      currency: state.currencyList,
      shippingDetailsSuccess: state.cartOrder.shippingDetails.success,
      shippingDetails: state.cartOrder.shippingDetails.data,
      businessData: state.websiteTemplate.getTemplate.data?.businessData,
      ShippingAddressData: state.cartOrder.getShippingBillingAddressList.ShippingAddressData,
    }
  });
  //// console.log("line 2222222222222222222222222222222222222222222222246",)
  const orderFromCartHandler = async (selectedAddress, billingAddress, activeBillingAddress, shippingRate) => {
    //// console.log("line 47",selectedAddress, billingAddress, activeBillingAddress, shippingRate)
    if ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) {
      if (selectedAddress && selectedAddress._id && customerCartData.length > 0) {
        // setLoading(true)
        // let body = {
        //   status: "Cart Product",
        //   userId: AppLinkUrl.subdomain() ? subdomainuser._id : user._id,
        //   businessShopId: AppLinkUrl.subdomain() ? subdomainuser.user_business : user.user_business,
        //   total: grandTotal,
        //   orderAddress: selectedAddress._id,
        //   order_payment_method: codStatus ? 'cashOnDelivery' : "online",
        // };
        let userId = AppLinkUrl.privateDomain() ? user && user._id : subdomainuser && subdomainuser._id
        await UserRequest.patch(UserRequest.url(`webneed-middleware/customer/${userId}?industry=${"Ecommerce"}`, 'middleware'),
          { BillingAddressIsSame: billingAddress },
          (success) => {
            if (AppLinkUrl.privateDomain()) {
              Auth.updateUserDetail("user_billing_address_same", billingAddress);
              dispatch(UPDATE_USER({user_billing_address_same: billingAddress}));
            } else {
              // Auth.updateSubdomainuserDetail("user_billing_address_same", billingAddress);
              // dispatch(updateSubdomainUserToStore({ user_billing_address_same: billingAddress }));
            }
            history(`/payment/${selectedAddress._id}/${activeBillingAddress._id||'user'}`);
          },
          (error) => {

          }
        );
      } else {
        setShowPopup(true);
        setPopupMessage('Please Select address.');
        setTimeout(() => {
          setShowPopup(false);
          setPopupMessage('');
        }, 2000);
      }

    } else {
      //// console.log("line 85")
      let body = {}
      if (selectedAddress && selectedAddress._id && customerCartData.length > 0) {
        let email = Storage.alive("guestEmail") ? localStorage.getItem("guestEmail") : ""
        if (ValidationUtils.isEmail(email)) {
          let domain = AppLinkUrl.privateDomain() ? AppLinkUrl.getHost() : AppLinkUrl.subdomain()
          let type = AppLinkUrl.privateDomain() ? "domain" : "subdomain"
          let shipppingAddress = Storage.alive("userShippingAddress") ? Storage.getJson("userShippingAddress") : {}
          let billingAddress = Storage.alive("userBillingAddress") ? Storage.getJson("userBillingAddress") : {}
          let billingAddressSame = Storage.alive("billingAddressSame") ? localStorage.getItem("billingAddressSame") : {}

          if (billingAddressSame === "true" || billingAddressSame === true) {
            body = {
              "name": shipppingAddress.name,
              "userId": Storage.alive("Uuid_For_Guest_Login") ? localStorage.getItem("Uuid_For_Guest_Login") : "",
              "email": email,
              "pinCode": shipppingAddress.pinCode,
              "city": shipppingAddress.state,
              "state": shipppingAddress.state,
              "landmark": shipppingAddress.landmark,
              "addressLineTwo": shipppingAddress.addressLineTwo,
              "addressLineThree": shipppingAddress.fullAddress,
              "country": shipppingAddress.country,
              "BillingAddressIsSame": false,
              "phone": shipppingAddress.phone,
            }
          } else {
            body = {
              "name": shipppingAddress.name,
              "userId": Storage.alive("Uuid_For_Guest_Login") ? localStorage.getItem("Uuid_For_Guest_Login") : "",
              "email": email,
              "pinCode": shipppingAddress.pinCode,
              "city": shipppingAddress.state,
              "state": shipppingAddress.state,
              "landmark": shipppingAddress.landmark,
              "addressLineTwo": shipppingAddress.addressLineTwo,
              "addressLineThree": shipppingAddress.fullAddress,
              "country": shipppingAddress.country,
              "BillingAddressIsSame": true,
              "phone": shipppingAddress.phone,
              "billingObjects": {
                "name": billingAddress.name,
                "email": email,
                "pinCode": billingAddress.pinCode,
                "city": billingAddress.state,
                "state": billingAddress.state,
                "landmark": billingAddress.landmark,
                "addressLineTwo": billingAddress.addressLineTwo,
                "addressLineThree": billingAddress.fullAddress,
                "country": billingAddress.country,
                "phone": billingAddress.phone,
              }
            }
          }
          await UserRequest.post(UserRequest.url(`/guestService/createOfflineUser?${type}=${domain}`, 'ecommerce'),
            body,
            (success) => {
              localStorage.setItem("Guest_new_userId", success.data.userInfo._id)
              dispatch(updateShippingPrice({
                user: success.data.userInfo._id,
                business: businessData._id,
                price: deliveryFees ? parseInt(deliveryFees) : 0,
              },history,activeBillingAddress,success.data.userAddress._id))
             
            },
            (error) => {

            }
          );

        } else {
          setShowPopup(true);
          setPopupMessage('Email required.');
          setTimeout(() => {
            setShowPopup(false);
            setPopupMessage('');
          }, 2000);
        }
      } else {
        setShowPopup(true);
        setPopupMessage('Please Select address.');
        setTimeout(() => {
          setShowPopup(false);
          setPopupMessage('');
        }, 2000);
      }
    }
  };
  useEffect(() => {
    if (customerCartSuccess && customerCartData && customerCartData.length) {
      let data = customerCartData.every((i) => !i?.product?.stock <= 0);
      //// console.log("line 178")
      if (data) {
        setDisableContinueButton(false);
      }
      else {
        setDisableContinueButton(true);
      }
    }
  }, [customerCartData, customerCartSuccess])
  return [customerCartSuccess, customerCartData, orderFromCartHandler, deliveryFees, popupMessage, showPopup, setDeliveryFees, disableContinueButton]
}
export default useOrderSummary