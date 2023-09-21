import Request from "../../../Classes/Request";

class CurrencyRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      adminCurrencies: super.url("productService/get-currency-language?business=__BUSINESS__&domain=__DOMAIN__&subdomain=__SUBDOMAIN__", "ecommerce"),
      regionCurrencies: super.url("productService/region-currency?country=__REGION__", "ecommerce")
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CurrencyRequest();