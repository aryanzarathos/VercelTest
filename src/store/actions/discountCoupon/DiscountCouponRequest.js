import Request from "../../../Classes/Request";

class DiscountCouponRequest extends Request {
  constructor() {
    super();
    this.couponEndpoint = {
      getCouponList: super.url("/discountService/getCouponList?business=__BUSINESSID__&type=__STATUS__&limit=__LIMIT__&search=__SEARCH__&page=__PAGE__&sort=__SORT__", "ecommerce"),
      createCoupon: super.url("/discountService/createCoupon", "ecommerce"),
      editCoupon: super.url("/discountService/editCoupon", "ecommerce"),
    
      getSingleCoupon: super.url("", ""),
      duplicateCoupon: super.url("", ""),
      deleteCoupon: super.url("/discountService/deleteToken?id=__ID__", "ecommerce"),

      deactivateCoupon: super.url('/discountService/changeTokenStatus?id=__ID__&status=__STATUS__', "ecommerce"),
      getCategoryList: super.url("", ""),
      getProductList: super.url("", ""),

      couponAvailable:super.url("/discountService/tokenCodeAvailability?business=__BUSID__&code=__COUPONCODE__","ecommerce"),
    
      getCustomerDiscountList:super.url("/discountService/couponListForCart?business=__BUSID__&cart=__CARTID__","ecommerce"),
      applyCustomerDiscount:super.url("/discountService/applyCouponToCart?coupon=__COUPONID__&cart=__CARTID__","ecommerce"),
   
      removeDiscountCoupon:super.url("/discountService/removeCouponFromCart?cart=__CARTID__","ecommerce"),
   
    };
  }
}
export default new DiscountCouponRequest();
