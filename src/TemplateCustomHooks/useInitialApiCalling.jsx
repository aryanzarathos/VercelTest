import Auth from '@/Classes/Auth';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { CheckGuest } from '@/CommonFunctions/fetchTemplateData';
import { getFaq } from '@/store/actions/Faq';
import { getTestimonial } from '@/store/actions/Testimonial';
import { Getcart } from '@/store/actions/cartOrder/cartOrder'
import { getCurrencyList, getRegionCurrency } from '@/store/actions/currency/currency';
import { getFaculty } from '@/store/actions/manageFaculty';
import { readServicesList } from '@/store/actions/services';
import { getWishList } from '@/store/actions/wishlist';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useInitialApiCalling = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate);
  //// console.log(data,"line 12")
  const { user, subdomainuser } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
    }
  });

  useEffect(() => {
    if (data) {
      // dispatch(getRegionCurrency())
      if (AppLinkUrl.privateDomain() && Auth.isLogin()) {
        dispatch(getWishList({ userId: user._id, status: "readWishList" }));
        dispatch(Getcart(user._id, data?.business, false))
        // dispatch(getCurrencyList(AppLinkUrl.getHost(), 'domain'))
      } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
        dispatch(getWishList({ userId: subdomainuser._id, status: "readWishList" }));
        dispatch(Getcart(subdomainuser._id, data?.business, false));
        // dispatch(getCurrencyList(AppLinkUrl.subdomain(), 'subdomain'));
      } else {
        let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
        dispatch(Getcart(guestUuidData, data?.business, CheckGuest()))
      }
      dispatch(getCurrencyList(AppLinkUrl.subdomain() ? AppLinkUrl.subdomain() : AppLinkUrl.getHost(), AppLinkUrl.subdomain() ? 'subdomain' : "domain"));
dispatch(readServicesList(data.business, "Ecommerce"));
 dispatch(getTestimonial(data.business, "Ecommerce"));
 dispatch(getFaculty(data.business, "Ecommerce"));
 dispatch(getFaq(data.business, "Ecommerce"));
    }

  }, [dispatch, data, data?.business, subdomainuser._id, user._id])

  return []
}

export default useInitialApiCalling