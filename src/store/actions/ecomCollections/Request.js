import Request from "@/Classes/Request";

class CollectionRequest extends Request {
    constructor() {
        super()
        this.endpoint = {
            CollectionListBusiness: super.url("productService/CollectionList?businessid=__VAL__", "ecommerce"), //get collection list admin
        }
    }
}

export default new CollectionRequest();