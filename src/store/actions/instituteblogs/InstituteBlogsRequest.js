import Request from "../../../Classes/Request";

class CartOrderRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      getWebsiteBlogs: super.url("/blog/getallwebsitedata/?_TYPE_=_VALUE_"),
      getWebsiteCategoriesList: super.url("/blog/getCategory/?_TYPE_=_VALUE_&search=_SEARCH_&page=__pageValue__&isHide=true"),
      getWebsiteSingleCategory: super.url("/blog/getCategoryById?_TYPE_=_VALUE_&slug=_SLUG_&search=_SEARCH_"),
      getWebsiteCategoryBlogsSearch: super.url("/blog/blogsearchwithcategory?_TYPE_=_VALUE_&categoryId=_SLUG_&search=_SEARCH_"),
      getCategoryLists: super.url("/blog/getCategory?institute=_Id_&industry=_TYPE_"),
    };
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CartOrderRequest();
