import Request from "../../../Classes/Request";

class wishlistRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      wishlistToCart: super.url("productService/wishlistToCart?business=__B_ID__&userId=__U_ID__&variationId=__V_ID__&quantity=_QUANTITY_", "ecommerce"),
      addtoCart: super.url("/productService/postcart", "ecommerce"),
      addProduct: super.url("productService/AddProduct", "ecommerce"),
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new wishlistRequest();