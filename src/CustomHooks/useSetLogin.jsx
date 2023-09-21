import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useLocation } from 'react-router-dom'
import Auth from '../Classes/Auth'
import Storage from '../Classes/Storage'
// import AppLinkUrl from '../Common/AppLink/AppLinkUrl'
import { redirectToUrl } from '../Constant/auth'
// import { SIGNUP_CUSTOMER_SUCCESS } from '../store/actions/ecommerce/type/auth'
import { setLoginToStore } from '../store/actions/user'
import { setSubdomainLoginToStore } from '../store/actions/subdomainuser'
import { cartOperations } from '../store/actions/cartOrder/cartOrder'
// import useProductDetails from '../../../CustomHooks/ProductDetailsPage/useProductDetails'
// import { useNavigate } from 'react-router-dom'
import { guestafterlogincart } from '../store/actions/guestCart/index'
import useAppNavigate from './useAppNavigate'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import useAppLocation from './useLocation'
import { useRouter } from 'next/router'
import { UPDATE_USER } from '@/store/reducers/user'

const useSetLogin = (data, login, flowType, insId, productId, body) => {
  const router = useRouter()
  const naviate = useAppNavigate()
  const dispatch = useDispatch();
  const [pathname] = useAppLocation();
  useEffect(() => {
    if (login) {
      if (data.data && data.data.hasOwnProperty("_id")) {
        if (AppLinkUrl.subdomain()) {
          Auth.setUserLogin(data, true); // Set Cookies of user login
          dispatch(setSubdomainLoginToStore(Auth.subdomainUser())); // Set Userdata to redux store
        } else {
          Auth.setUserLogin(data, false); // Set Cookies of user login
          dispatch(UPDATE_USER(Auth.user())); // Set Userdata to redux store
        }
        if (pathname !== "/auth/otplogin") {
          if (Storage.alive(redirectToUrl)) {
            let redirectUrl = "/";
            if (AppLinkUrl.subdomain()) {
              redirectUrl = AppLinkUrl.createSubdomain(
                AppLinkUrl.subdomain(),
                Storage.getString(redirectToUrl)
              );
            } else {
              redirectUrl = AppLinkUrl.mainBaseUrl(
                Storage.getString(redirectToUrl)
              );
            }
            Storage.remove(redirectToUrl);
            window.location.href = redirectUrl;
          } else {
            let guestUserId = localStorage.getItem("Uuid_For_Guest_Login");
            if (guestUserId && ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()))) {
              dispatch(guestafterlogincart(guestUserId, AppLinkUrl.privateDomain() ? data.data._id : data.data._id, AppLinkUrl.privateDomain() ? insId._id : insId._id))
              localStorage.removeItem("Uuid_For_Guest_Login")
            }
            if (Storage.alive("wishlistAdd")) {
              let wishlistData = Storage.getJson("wishlistAdd")
              dispatch(cartOperations({ ...wishlistData, userId: data.data._id }, "apiHit"));
              router.push(`/my-wishlist`);
              Storage.remove("wishlistAdd")
            }
            if (flowType === "Guest") {
              naviate("/shippingAddresses")
            } else if (flowType === "Wishlist") {
              dispatch(cartOperations({ ...body, userId: data.data._id }));
              router.push(`/my-wishlist`);
            } else {
              window.location.reload()
            }
          }
        } else {
          window.location.href = "/";
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flowType, pathname, login])
}

export default useSetLogin
