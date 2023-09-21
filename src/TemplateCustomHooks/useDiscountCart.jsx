
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCustomerCoupon, getCustomerDiscountList } from '@/store/actions/discountCoupon';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
const useDiscountCart = () => {
  const dispatch = useDispatch()
  const [coupon, setCoupon] = useState("")
  const [error, setError] = useState(false)
  const { businessData, businessDataSuccess, couponList, couponListSuccess, customerCartData, customerCartSuccess } = useSelector((state) => {
    return {
      businessData: state.websiteTemplate.getTemplate.data,
      businessDataSuccess: state.websiteTemplate.getTemplate.success,
      customerCartData: state.orderCartList.customerCart.data.data,
      customerCartSuccess: state.orderCartList.customerCart.success,
      couponListSuccess: state.discountCoupon.customerDiscountList.success,
      couponList: state.discountCoupon.customerDiscountList.data
    }
  })
  const data = [
    {
      id: 0,
      leftButtonContent: 'FLAT200',
      rightButtonContent: 'APPLY',
      heading: 'Apply and save ₹2000 with this coupon',
      Content: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
      dropDownHeading: 'Details'
    },
    {
      id: 1,
      leftButtonContent: 'FLAT50',
      rightButtonContent: 'APPLY',
      heading: 'Apply and save ₹2000 with this coupon',
      Content: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
      dropDownHeading: 'Details'
    },
    // {
    //   id: 1,
    //   leftButtonContent: 'FLAT50',
    //   rightButtonContent: 'APPLY',
    //   heading: 'Apply and save ₹2000 with this coupon',
    //   Content: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
    //   dropDownHeading: 'Details'
    // },
    // {
    //   id: 1,
    //   leftButtonContent: 'FLAT50',
    //   rightButtonContent: 'APPLY',
    //   heading: 'Apply and save ₹2000 with this coupon',
    //   Content: '₹2,000 off on item Total above ₹2,000. Applicable on both online payment and COD',
    //   dropDownHeading: 'Details'
    // }
  ]
  const handleDiscountCoupon = (e) => {
    console.log(e, "line no 566")
    setCoupon(e.target.value)
    setError(false)
  }
  console.log(coupon, "line no 5999");
  const handleApplyButton = (_id) => {
    if (_id) {
      dispatch(applyCustomerCoupon(_id, customerCartData[0].cartId,
        (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())))
    } else {
      if (coupon === "") {
        setError(true)
      } else {
        let activeCoupon = couponList.find((item) => item.discountCode === coupon)
        if (activeCoupon) {
          dispatch(applyCustomerCoupon(activeCoupon._id, customerCartData[0].cartId,
            (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())))
        } else {
          setError(true)
        }
      }
    }
  }
  useEffect(() => {
    if (businessDataSuccess && customerCartSuccess && customerCartData.length > 0) {
      dispatch(getCustomerDiscountList(businessData.businessData._id, customerCartData[0].cartId))
    }
  }, [businessData, businessDataSuccess, customerCartData, customerCartSuccess, dispatch])
  return [couponListSuccess, couponList, handleDiscountCoupon, coupon, handleApplyButton, error]
}
export default useDiscountCart