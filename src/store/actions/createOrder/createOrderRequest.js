import Request from "../../../Classes/Request";

class CreateOrderRequest extends Request {
  constructor() {
    super()
    this.CreateOrderEndpoint = {
      getCustomerList: super.url('/order/getbusinesscustomers?business=_BUSINESS_', "commonservices"),
      postCustomer: super.url('/webneed-middleware/createcustomer', "middleware"),
      patchCustomer: super.url('/webneed-middleware/editcustomer', "middleware"),
      postOrder: super.url('/order/createorder-admin', "commonservices"),
      savecreditcard: super.url("/order/cardAuth", "commonservices"),
      makeDonation: super.url("/order/cardSale", "commonservices"),

    }
  }
}
export default new CreateOrderRequest();
