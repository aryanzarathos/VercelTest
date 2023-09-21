import React from 'react'
import AppLinkUrl from '../CommonComponents/AppLink/AppLinkUrl';
import Auth from '../Classes/Auth';

const useWishlistHook = () => {
    const { user, subdomainuser, customerWishList,customerWishListSuccess, customerWishListLoading} = useSelector((state) => {
        return {
          user: state.user,
          subdomainuser: state.subdomainuser,
          customerWishList: state.wishlist.customerWishList.data,
          customerWishListSuccess: state.wishlist.customerWishList.success,
          customerWishListLoading: state.wishlist.customerWishList.loading,
        }
      });
    const wishListActive = (id) => {
        if (customerWishListSuccess&&customerWishList) {
          if (
            ((AppLinkUrl.privateDomain() && Auth.isLogin()) ||
              (!AppLinkUrl.privateDomain() && Auth.isSubdomainLogin())) &&
              customerWishListSuccess &&
              customerWishList.length > 0
          ) {
            let a = customerWishList.some(function (element) {
              return element.productId === id;
            });
            return a;
          }
        } else {
          if (
            ((AppLinkUrl.privateDomain() && Auth.isLogin()) ||
              (!AppLinkUrl.privateDomain() && Auth.isSubdomainLogin())) &&
              customerWishList.length > 0
          ) {
            let a = customerWishList.some(function (element) {
              return element.productId === id;
            });
            return a;
          }
        }
      };
  return [wishListActive]
}

export default useWishlistHook