import Request from "@/Classes/Request";

class CategoryRequest extends Request {
    constructor() {
        super()
        this.endpoint = {
            getCategoryEcomAdmin: super.url('categoryService/getallcategories?business=__BUSINESS__', "ecommerce"), //get admin category list
            searchCategory: super.url('categoryService/getallcategories?owner=_OWNER_&business=__BUSINESS__&search=_SEARCH_', "ecommerce"),
        }
    }
}

export default new CategoryRequest();