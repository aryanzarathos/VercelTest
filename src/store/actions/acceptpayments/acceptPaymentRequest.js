import Request from "../../../Classes/Request";

class AcceptPaymentRequest extends Request {
  constructor() {
    super()
    this.acceptPaymentEndpoint = {
      postPartialCharges: super.url("/order/createpaymentsettings", "commonservices"),
      getPartialCharges: super.url("/order/getpaymentsettings?business=_business_", "commonservices"),
      updatetPartialCharges: super.url("/order/updatepaymentsettings", "commonservices"),
    }
  }
}

export default new AcceptPaymentRequest();