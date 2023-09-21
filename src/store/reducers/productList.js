import {
  ProductActionTypes
} from "../actions/productList/productActionTypes";

const PRODUCT_LIST_INITIAL_STATE = {

  adminProductList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  customerproductDetail: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
  customerProductList: {
    data: [],
    localApi:false,
    serverApi:true,
    loading: false,
    success: false,
    error: false,
  },
  productLoader:{
    showLoader:false
  },
  productFilters:{
    data:{
    page:1
    },
    loading: false,
    success: false,
    error: false,
  },
  productSearchandSortBy:{
    data:{
      sortby:"",
      search:""
    },
    loading: false,
    success: false,
    error: false,
  }
};

const productListReducer = (
  state = PRODUCT_LIST_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {

    case ProductActionTypes.GET_PRODUCT_LIST_LOADING:
      return {
        ...state,
        adminProductList: {
          ...state.adminProductList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };

    case ProductActionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        adminProductList: {
          ...state.adminProductList,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },
      };

      case ProductActionTypes.GET_PRODUCT_LIST_RESET:
        return {
          ...state,
          adminProductList: {
            ...state.adminProductList,
            data: [],
            loading: false,
            error: false,
            success: false,
          },
        };

    case ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_LOADING:
      return {
        ...state,
        customerproductDetail: {
          ...state.customerproductDetail,
          data: {},
          loading: true,
          error: false,
          success: false,
        },
      };
    case ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        customerproductDetail: {
          ...state.customerproductDetail,
          data: payload,
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_REST:
      return {
        ...state,
        customerproductDetail: {
          ...state.customerproductDetail,
          data: {},
          loading: false,
          error: false,
          success: false,
        },
      };
    case ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        customerproductDetail: {
          ...state.customerproductDetail,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };

    case ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW:
      return {
        ...state,
        productLoader: {
          ...state.productLoader,
          showLoader: payload
        },
      };
    case ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        customerProductList: {
          ...state.customerProductList,
          data: payload,
          loading: false,
          error: false,
          success: true
        },
      };
    case ProductActionTypes.STORED_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        customerProductList: {
          ...state.customerProductList,
          data: payload,
          loading: false,
          error: false,
          success: true
        },
      };
    case ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL:
      return {
        ...state,
        customerProductList: {
          ...state.customerProductList,
          data: {},
          loading: false,
          error: true,
          success: false,
        },
      };
    case ProductActionTypes.CHANGE_CATEGORY_PRODUCT_FILTER_CHANGES:
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productFilters: {
          ...state.productFilters,
          data: {
            ...state.productFilters.data,
            level:payload,
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.CHANGE_COLLECTION_PRODUCT_FILTER_CHANGES:

      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productFilters: {
          ...state.productFilters,
          data: {
            ...state.productFilters.data,
            collection:payload?payload:[],
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.CHANGE_PRICE_PRODUCT_FILTER_CHANGES:
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productFilters: {
          ...state.productFilters,
          data: {
            ...state.productFilters.data,
            price:payload,
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.PAGINATION_PRODUCT_PAGE_FILTERS:
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productFilters: {
          ...state.productFilters,
          data: {
            ...state.productFilters.data,
            page:payload,
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.REMOVE_CATEGORY_PRODUCT_FILTER_CHANGES:
      let data={...state.productFilters.data};
      delete data?.level;
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productFilters: {
          ...state.productFilters,
          data: data,
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.SORT_BY_PRODUCT_PAGE_FILTERS:
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          localApi:true
        },
        productSearchandSortBy: {
          ...state.productSearchandSortBy,
          data: {
            ...state.productSearchandSortBy.data,
            sortby:payload
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.UPDATE_SORT_BY_PRODUCT_LIST:
      return {
        ...state,
        productSearchandSortBy: {
          ...state.productSearchandSortBy,
          data: {
            ...state.productSearchandSortBy.data,
            sortby:payload
          },
          loading: false,
          error: false,
          success: true,
        },
      };
    case ProductActionTypes.UPDATE_FILTER_PRODUCT_LIST:
      return {
        ...state,
        customerProductList:{
          ...state.customerProductList,
          serverApi:false
        },
        productFilters:{
          ...state.productFilters,
          data:{
            ...state.productFilters.data,
            ...payload
          }
        }
      };

    default:
      return state;
  }
};

export default productListReducer;
