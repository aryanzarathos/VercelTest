/* eslint-disable import/no-anonymous-default-export */
import Request from "../../../Classes/Request";

class ProductRequest extends Request {
  constructor() {
    super()
    this.endpoint = {
      getProductBusiness: super.url("productService/productlist-admin/__ID__", "ecommerce"),
      searchProduct: super.url("productService/productlist-admin/__ID__?search=_searchValue_", "ecommerce"),
      sortProduct: super.url("productService/productlist-admin/__ID__?sortBy=_Value_", "ecommerce"),
      getProductDetail: super.url("productService/get-product?__QUERY__=__VALUE__&urlSlug=__SLUG__", "ecommerce"),
      getShopProduct: super.url("productService/product-list-client/_ID_?search=_searchValue_&filter=_filterValue_", "ecommerce"),
      getCategorySlugProduct: super.url("productService/product-list-client/category/categroySlug/_ID_?search=_searchValue_&filter=_filterValue_", "ecommerce"),
      getSubCategroySlugProduct: super.url("productService/product-list-client/category/categroySlug/SubCategorySlug/_ID_?search=_searchValue_&filter=_filterValue_", "ecommerce"),
      getSubSubCategorySlugProduct: super.url("productService/product-list-client/category/categroySlug/SubCategorySlug/SubSubCategorySlug/_ID_?search=_searchValue_&filter=_filterValue_", "ecommerce"),
      getCollectionSlugProduct: super.url("productService/product-list-client/collection/collectionSlug/_ID_?search=_searchValue_&filter=_filterValue_", "ecommerce"),

    }
  }
}

export default new ProductRequest();