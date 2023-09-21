import Request from "../../../Classes/Request";

class CartOrderRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      addtoCart: super.url("/productService/postcart", "ecommerce"),
      addProduct: super.url("/productService/AddProduct", "ecommerce"),
      getGuestCart: super.url("/guestService/getcartGuest/__userId__/__businessId__", "ecommerce"),
      getaddtoCart: super.url("productService/getcart/user/business", "ecommerce"),
      guestQuantityUpdate: super.url("/guestService/quantityupdateGuest/?cart=__CARTID__&variation=__VAR__&condition=__CON__&user=__USERID__&business=__BUSI__", "ecommerce"),
      quantityupdate: super.url("productService/quantityupdate?cart=__CARTID__&variation=__VAR__&condition=__CON__&user=__USERID__&business=__BUSI__", "ecommerce"),
      getShippingDetails: super.url("/shipping-rate/shippingCharges/__BUSID__?pincode=__PINCODE__&country=__COUNTRY__&state=__STATE__", "ecommerce"),
      updateSelectedAddress: super.url("/productService/active-address/__ID__?addresstype=_TYPE_", "ecommerce"),
      deleteBillingAddress: super.url("/productService/delete-BillingAddress/__ID__", "ecommerce"),
      deleteShippingAddress: super.url("/productService/delete-shippingAddress/__ID__", "ecommerce"),
      getShippingBillingAddress: super.url("/productService/get-address/__USERID__", "ecommerce"),
      postShippingAddress: super.url("/productService/Create-shipping-address", "ecommerce"),
      postBillingAddress: super.url("/productService/Create-billing-address", "ecommerce"),
      getClientSubordersPagination: super.url(
        "/order/get-client-suborders?user=__USERID__&business=__BUSINESSID__&limit=__LIMIT__&skip=__SKIP__",
        "commonservices"
      ),
      getClientSuborders: super.url(
        "/order/get-client-suborders?user=__USERID__&business=__BUSINESSID__",
        "commonservices"
      ),
      getGuestClientSuborders: super.url(
        "/guestService/guestOrders?guest=_USERID_"
      ),
      updateCustomerOrderStatus: super.url(
        "/productService/updateOneSuborder/suborderId",
        "ecommerce"
      ),
      updateClientOrderSuborder: super.url(
        "/order/update-client-order?suborder=__SUBORDERID__&order=__ORDERID__&action=__ACTION__&status=__STATUS__&mainpage=__MAIN__&limit=__LIMIT__&skip=__SKIP__",
        "commonservices"
      ),
      patchShippingAddress: super.url("/productService/edit-shipping-address/__ID__", "ecommerce"),
      patchBillingAddress: super.url("/productService/edit-billing-address/__ID__", "ecommerce"),
      createOrderFromCart: super.url("/order/createorder", "commonservices"),
      updateDiscountCoupon: super.url("/discountService/updateCouponAfterOrder?code=_COUPON_&business=__BUSINESSID__&user=__USERID__", "ecommerce"),
      paymentcallback: super.url("/order/razorpay-callbackurl", "commonservices"),
      cartToWishlist: super.url("productService/cartToWishlist?variation=__VARIATION__&user=__USER__&business=__BUSINESS__", "ecommerce"),

      // updateClientOrderSuborder: super.url("/order/update-client-order?suborder=__SUBORDERID__&order=__ORDERID__&action=__ACTION__&status=__STATUS__&mainpage=__MAIN__&limit=__LIMIT__&skip=__SKIP__", "commonservices"),
      getClientSingleOrder: super.url(
        "/order/get-client-mainorder?order=__ORDERID__&business=__BUSINESSID__",
        "commonservices"
      ),
      RejectedOrder: super.url("/productService/updateOrder/_id_", "ecommerce"),
      changeOrderStatus: super.url(
        "productService/orderStatus?orderId=__ORDERID__&status=__STATUS__",
        "ecommerce"
      ),
      shippingOrder: super.url("productService/updateOrder/_id_", "ecommerce"),
      customerOrder: super.url(
        "order/get-single-order-admin?order=__ORDERID__",
        "commonservices"
      ),
      getShipItemList: super.url(
        "/productService/getShippedItemList/__ID__",
        "ecommerce"
      ),
      getDeliFailList: super.url(
        "/productService/getDeliveredFailListOfOrder/__ID__?status=__STATUS__",
        "ecommerce"
      ),
      getPaymentRequest: super.url(
        "/order/get-instamojo-payment-request",
        "commonservices"
      ),
    };
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CartOrderRequest();
