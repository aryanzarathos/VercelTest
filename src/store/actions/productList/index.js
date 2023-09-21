import {
  ProductActionTypes
} from "./productActionTypes";
import ProductRequest from "./productRequest";

export const getCustomerProductDetail = (type, domain, slug) => {
  return dispatch => {

    dispatch({ type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_LOADING });
    ProductRequest.get(
      ProductRequest.endpoint.getProductDetail
        .replace("__QUERY__", type)
        .replace("__VALUE__", domain)
        .replace("__SLUG__", slug),
      (success) => {
        dispatch({
          type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_SUCCESS,
          payload: success.data.data,
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_FAIL, payload: error.response.data.message });
      }
    )
  }
}

export const AddProductDetail = (data) => {
  return dispatch => {
    dispatch({ type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_LOADING });
    dispatch({
      type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  }
}

export const ResetCustomerProductDetail = () => {
  return dispatch => {
    dispatch({ type: ProductActionTypes.CUSTOMER_PRODUCT_DETAIL_REST });
  }
}

//Product List 
export const getFileteredProductList = (id, value, body, filterValue) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
      payload: true
    });
    ProductRequest.post(
      ProductRequest.endpoint.getShopProduct
        .replace("_ID_", id)
        .replace("_searchValue_", value)
        .replace("_filterValue_", filterValue), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS,
          payload: success.data.data,
        });
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
          payload: false
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL, payload: error.response.data.message });
      }
    )
  }
};

//admin side product list
export const getProductList = (id, body) => {
  return dispatch => {
    if (body?.skip === 0) {
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_LIST_LOADING
      });
    }
    ProductRequest.post(
      ProductRequest.endpoint.getProductBusiness
        .replace("__ID__", id),
      body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_SUCCESS,
          payload: success.data.data
        });
      },
      (error) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_FAIL,
          payload: error.response.data.message
        });
      }
    )
  }
};

//search product
export const SearchProduct = (id, search, body) => {
  return dispatch => {
    dispatch({
      type: ProductActionTypes.GET_PRODUCT_LIST_LOADING
    });
    ProductRequest.post(ProductRequest.endpoint.searchProduct.replace("__ID__", id).replace("_searchValue_", search), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_SUCCESS,
          payload: success.data.data
        });
      },
      (error) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_FAIL,
          payload: error?.response?.data?.message
        });
      }
    )
  }
};

//sort product
export const SortProduct = (id, sort, body) => {
  return dispatch => {
    dispatch({
      type: ProductActionTypes.GET_PRODUCT_LIST_LOADING
    });
    ProductRequest.post(ProductRequest.endpoint.sortProduct.replace("__ID__", id).replace("_Value_", sort), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_SUCCESS,
          payload: success.data.data
        });
      },
      (error) => {
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_LIST_FAIL,
          payload: error.response.data.message
        });
      }
    )
  }
};

//category Product List
export const getCategroyProductList = (id, value, body, filterValue, categorySlug) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
      payload: true
    });
    ProductRequest.post(
      ProductRequest.endpoint.getCategorySlugProduct
        .replace("categroySlug", categorySlug)
        .replace("_ID_", id)
        .replace("_searchValue_", value)
        .replace("_filterValue_", filterValue), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS,
          payload: success.data.data,
        });
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
          payload: false
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL, payload: error.response.data.message });
      }
    )
  }
};
//Subcategory Product List
export const getSubCategroyProductList = (id, value, body, filterValue, categorySlug, subCategorySlug) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
      payload: true
    });
    ProductRequest.post(
      ProductRequest.endpoint.getSubCategroySlugProduct
        .replace("categroySlug", categorySlug)
        .replace("SubCategorySlug", subCategorySlug)
        .replace("_ID_", id)
        .replace("_searchValue_", value)
        .replace("_filterValue_", filterValue), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS,
          payload: success.data.data,
        });
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
          payload: false
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL, payload: error.response.data.message });
      }
    )
  }
};
//SubSubcategory Product List
export const getSubSubCategroyProductList = (id, value, body, filterValue, categorySlug, subCategorySlug, subsubCategroySlug) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
      payload: true
    });
    ProductRequest.post(
      ProductRequest.endpoint.getSubCategroySlugProduct
        .replace("categroySlug", categorySlug)
        .replace("SubCategorySlug", subCategorySlug)
        .replace("SubSubCategorySlug", subsubCategroySlug)
        .replace("_ID_", id)
        .replace("_searchValue_", value)
        .replace("_filterValue_", filterValue), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS,
          payload: success.data.data,
        });
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
          payload: false
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL, payload: error.response.data.message });
      }
    )
  }
};
//Collection Product List
export const getCollectionProductList = (id, value, body, filterValue, collectionSlug) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
      payload: true
    });
    ProductRequest.post(
      ProductRequest.endpoint.getCollectionSlugProduct
        .replace("collectionSlug", collectionSlug)
        .replace("_ID_", id)
        .replace("_searchValue_", value)
        .replace("_filterValue_", filterValue), body,
      (success) => {
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_SUCCESS,
          payload: success.data.data,
        });
        dispatch({
          type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
          payload: false
        });
      },
      (error) => {
        dispatch({ type: ProductActionTypes.GET_SEARCHED_PRODUCT_LIST_FAIL, payload: error.response.data.message });
      }
    )
  }
};


export const storeProductList = (data) => {
  return (dispatch) => {
    // dispatch({
    //   type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
    //   payload: true
    // });
    dispatch({
      type: ProductActionTypes.STORED_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
    // dispatch({
    //   type: ProductActionTypes.GET_SEARCHED_PRODUCT_LOADER_SHOW,
    //   payload: false
    // });
  }
};

export const CategoryFilterChanges = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CHANGE_CATEGORY_PRODUCT_FILTER_CHANGES,
      payload: payload
    });
  }
}
export const CollectionFilterChanges = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CHANGE_COLLECTION_PRODUCT_FILTER_CHANGES,
      payload: payload
    });
  }
}
export const PriceFilterChanges = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CHANGE_PRICE_PRODUCT_FILTER_CHANGES,
      payload: payload
    });
  }
}
export const sortByChange = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.SORT_BY_PRODUCT_PAGE_FILTERS,
      payload: payload
    });
  }
}
export const PaginationChange = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.PAGINATION_PRODUCT_PAGE_FILTERS,
      payload: payload
    });
  }
}
export const RemoveCategoryFilterChanges = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.REMOVE_CATEGORY_PRODUCT_FILTER_CHANGES,
      payload: true
    });
  }
}
export const clearAllFilters = () => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CLEAR_ALL_PRODUCT_PAGE_FILTERS,
      payload: true
    });
  }
}

export const updateFilterServer = ({ collection, level, price, sortby }) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.UPDATE_FILTER_PRODUCT_LIST,
      payload: { collection, level, price }
    });

    dispatch({
      type: ProductActionTypes.UPDATE_SORT_BY_PRODUCT_LIST,
      payload: sortby
    });
  }
}
