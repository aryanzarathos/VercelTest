import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Auth from "../Classes/Auth";
import Storage from "../Classes/Storage";
// import { getSavedCustomer } from "../store/actions/ecommerce/action/auth";
import { cartToWishlist, cartUpdate, Getcart } from "../store/actions/cartOrder/cartOrder";
import { showToast } from "../store/actions/successmessagepopup";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import useAppNavigate from "@/CustomHooks/useAppNavigate";

const useCart = () => {
  const dispatch = useDispatch();

  const { user, subdomainuser, customerCartData, cartLoading,
    customerCartSuccess, business } = useSelector((state) => {
      return {
        user: state.user,
        subdomainuser: state.subdomainuser,
        customerCartData: state.cartOrder.customerCart?.data?.data,
        customerCartSuccess: state.cartOrder.customerCart.success,
        cartLoading: state.cartOrder.customerCartQuantity.loading,
        business: state.websiteTemplate.getTemplate.data?.businessData
      }
    });

  const history = useAppNavigate();

  // useEffect(() => {
  //   dispatch(getSavedCustomer());
  // }, []);

  useEffect(() => {
    if (customerCartSuccess && customerCartData && customerCartData === 'quantity of cart items should be a multiple of 2') {
      dispatch(showToast(customerCartData, "", "error"));
    }
  }, [customerCartSuccess && customerCartData])

  useEffect(() => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (AppLinkUrl.privateDomain() && Auth.isLogin()) {
        dispatch(Getcart(user?._id, user.user_business))
      } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
        dispatch(Getcart(subdomainuser?._id, subdomainuser.user_business))
      }
    } else {
      if (Storage.alive("Uuid_For_Guest_Login")) {
        let uid = localStorage.getItem("Uuid_For_Guest_Login")
        if (AppLinkUrl.privateDomain()) {
          dispatch(Getcart(uid, business?._id, true))
        } else if (AppLinkUrl.subdomain()) {
          dispatch(Getcart(uid, business?._id, true))
        }
      }
    }
  }, [user, subdomainuser, dispatch, business])

  const removefromCartHandler = async (_id, varId) => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      dispatch(cartUpdate(_id, varId, "remove", AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id, AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business));
    } else {
      if (Storage.alive("Uuid_For_Guest_Login")) {
        let uid = localStorage.getItem("Uuid_For_Guest_Login")
        dispatch(cartUpdate(_id, varId, "remove", uid, business?._id, true));
      }
    }
  };

  const transferToWishlistHandler = (id) => {
    const user = AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id;
    const business = AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business;
    let body = { variation: id, user, business };
    dispatch(cartToWishlist(body));
  };

  const changeQtyHandler = (_id, action, varId, stock, quantity) => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (action === 'plus') {
        dispatch(cartUpdate(_id, varId, "quantity", AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id, AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business));
      }
      if (action === 'minus') {
        dispatch(cartUpdate(_id, varId, "quantityDesc", AppLinkUrl.privateDomain() ? user?._id : subdomainuser?._id, AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business));
      }
    } else {
      if (Storage.alive("Uuid_For_Guest_Login")) {
        let uid = localStorage.getItem("Uuid_For_Guest_Login")
        if (action === 'plus') {
          dispatch(cartUpdate(_id, varId, "quantity", uid, business?._id, true));
        }

        if (action === 'minus') {

          dispatch(cartUpdate(_id, varId, "quantityDesc", uid, business?._id, true));
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [guestLoginModalState, setGuestLoginModalState] = useState(false)
  const orderFromCartHandler = () => {
    if ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) {
      if (selectedAddress && customerCartData?.length > 0) {
        setLoading(true)
        history(`/payment/${selectedAddress?._id}`);

      } else if (!selectedAddress) {
        setShowPopup(true);
        setPopupMessage('Please Select address.');
        setTimeout(() => {
          setShowPopup(false);
          setPopupMessage('');
        }, 2000);
      }
    }
  };
  const shippingRoute = () => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      history('/shipping-address')
    } else {
      Storage.set("__GUESTLOGINBUTTON__", true)
      history('/login-signup')

    }
  }
  return [customerCartSuccess, customerCartData, removefromCartHandler, transferToWishlistHandler, changeQtyHandler, cartLoading, history, orderFromCartHandler, shippingRoute, guestLoginModalState, setGuestLoginModalState]
}
export default useCart

