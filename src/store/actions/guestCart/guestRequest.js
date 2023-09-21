
import Request from "../../../Classes/Request";

class guestRequest extends Request {
  constructor() {
    super()
    this.guestEndpoint = {
      postCartGuest: super.url("guestService/postcartGuest", "ecommerce"),
      updateShippingPrice: super.url('/productService/updateshippingpricecart', 'ecommerce'),
      guestLoginCartUpdate: super.url("/guestService/getGuestOrders?uuid=_UuidD_&user=_USER_&business=_BUSNIESS_", "ecommerce"),
      clientGuestgetAllSubordersClient: super.url("/order/get-client-mainorder?order=__ORDERID__&business=__BUSINESS__","commonservices"),
     
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new guestRequest();