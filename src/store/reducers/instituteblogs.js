import { InstituteBlogsActionTypes } from "../actions/instituteblogs/InstituteblogAction";
import { INS_BLOG_ACTION_TYPES } from "../actions/blogs/actionTypes"

const BLOG_INITIAL_TYPES = {
  getWesbiteBlogList: {
    data: [],
    categoryData: "",
    featureData: "",
    blogData: "",
    loading: false,
    success: false,
    error: false,
  },
  getCategoryBlogsSearch: {
    data: [],
    loading: false,
    success: false,
    error: false,
    searchLength: ""
  },
  getSingleCategory: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },

  getCategoryLists: {
    data: [],
    loading: false,
    success: false,
    error: false,
    localApi: false,
    totalCount: "",
    mineCount: ""
  },
  SingleOfCategory: {
    data: [],
    loading: false,
    success: false,
    error: false
  },
  getBlogList: {
    data: [],
    loading: false,
    success: false,
    error: false,
    publishlength: "",
    savelength: "",
    totalLength: "",
    trashlength: "",
  },
}

const instituteblogs = (state = BLOG_INITIAL_TYPES, { type, payload }) => {

  switch (type) {
    case InstituteBlogsActionTypes.SEARCH_CATEGORY_BLOGS:
      return ({
        ...state,
        getSingleCategory: {
          ...state.getSingleCategory,
          data: [{
            ...state.getSingleCategory.data[0],
            blogData: payload.data
          }],
          success: true,
        }
      })
    case InstituteBlogsActionTypes.LOCALAPISEARCH_CATEGORY_BLOGS:
      return ({
        ...state,
        getSingleCategory: {
          ...state.getSingleCategory,
          data: payload,
          success: true,
        }
      })

    case InstituteBlogsActionTypes.DELETE_BLOG_FROM_CATEGORY:
      return {
        ...state,
        getSingleCategory: {
          ...state.getSingleCategory,
          data: [{
            ...state.getSingleCategory.data[0],
            blogData: state.getSingleCategory.data[0].blogData.filter((item) => item._id !== payload._id)
          }],
          success: true,
        }
      };

    case InstituteBlogsActionTypes.UPDATE_CATEGORY_BLOGS_STATUS:
      return {
        ...state,
        getSingleCategory: {
          ...state.getSingleCategory,
          data: [{
            ...state.getSingleCategory.data[0],
            blogData: state.getSingleCategory.data[0].blogData.map((item) => item._id === payload._id ?
              { ...item, isHide: payload.isHide } : item)
          }],
          success: true,
        },
      };

    case InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_LOADED:
      return ({
        ...state,
        getWesbiteBlogList: {
          ...state.getWesbiteBlogList,
          data: payload,
          categoryData: payload.categoryData,
          featureData: payload.featureData,
          blogData: payload.blogData,
          loading: false,
          success: true,
          error: false,
        }
      })

    case InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_LOADING:
      return ({
        ...state,
        getWesbiteBlogList: {
          ...state.getWesbiteBlogList,
          data: [],
          categoryData: "",
          featureData: "",
          blogData: "",
          loading: true,
          success: false,
          error: false,
        }
      })

    case InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_ERROR:
      return ({
        ...state,
        getWesbiteBlogList: {
          ...state.getWesbiteBlogList,
          data: [],
          categoryData: "",
          featureData: "",
          blogData: "",
          loading: false,
          success: false,
          error: true,
        }
      })

    case InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_RESET:
      return ({
        ...state,
        getWesbiteBlogList: {
          ...state.getWesbiteBlogList,
          data: [],
          categoryData: "",
          featureData: "",
          blogData: "",
          loading: false,
          success: false,
          error: false,
        }
      })


    case InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADING:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: [],
          loading: true,
          success: false,
          error: false,
          totalCount: "",
          mineCount: ""
        }
      })
    //category blog list start
    case InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADING:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: [],
          loading: true,
          success: false,
          error: false,
          totalCount: "",
          mineCount: ""
        }
      })
    case InstituteBlogsActionTypes.GET_CATEGORY_LIST_LOADED:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: payload.data.reverse(),
          loading: false,
          success: true,
          error: false,
          totalCount: payload.totalCount,
          mineCount: payload.mineCount
        }
      })
    case InstituteBlogsActionTypes.LOCALAPI_CATEGORY_DATA:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: payload.data,
          loading: false,
          success: true,
          totalCount: payload.totalCount,
          error: false,
        }
      })

    case InstituteBlogsActionTypes.GET_CATEGORY_LIST_RESET:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: [],
          loading: false,
          success: false,
          error: false,
          totalCount: "",
          mineCount: ""
        }
      })

    case InstituteBlogsActionTypes.GET_CATEGORY_LIST_ERROR:
      return ({
        ...state,
        getCategoryLists: {
          ...state.getCategoryLists,
          data: [],
          loading: false,
          success: false,
          error: true,
          totalCount: "",
          mineCount: ""
        }
      })
    //category blog list end

    //single category blog list start
    case InstituteBlogsActionTypes.GET_SINGLE_CATEGORY_LOADING:
      return {
        ...state,
        SingleOfCategory: {
          ...state.SingleOfCategory,
          data: [],
          loading: true,
          success: false,
          error: false
        },
      };

    case InstituteBlogsActionTypes.GET_WEBSITE_BLOG_LIST_LOADED:
      return {
        ...state,
        SingleOfCategory: {
          ...state.SingleOfCategory,
          data: payload,
          loading: false,
          success: true,
          error: false
        },
      };

    case InstituteBlogsActionTypes.GET_SINGLE_CATEGORY_ERROR:
      return {
        ...state,
        SingleOfCategory: {
          ...state.SingleOfCategory,
          data: [],
          loading: false,
          success: false,
          error: true
        },
      };
    //single category blog list end

    case INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADING:
      return ({
        ...state,
        getBlogList: {
          ...state.getBlogList,
          data: [],
          loading: true,
          success: false,
          error: false,
          publishlength: "",
          savelength: "",
          totalLength: "",
          trashlength: "",
        }
      })

    case INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_LOADED:
      return ({
        ...state,
        getBlogList: {
          ...state.getBlogList,
          data: payload.data,
          loading: false,
          success: true,
          error: false,
          publishlength: payload.publishedLength,
          savelength: payload.draftsLength,
          totalLength: payload.allLength,
          trashlength: payload.trashLength,
        }
      })

    case INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_RESET:
      return ({
        ...state,
        getBlogList: {
          ...state.getBlogList,
          data: [],
          loading: false,
          success: false,
          error: false,
          publishlength: "",
          savelength: "",
          totalLength: "",
          trashlength: "",
        }
      })

    case INS_BLOG_ACTION_TYPES.GET_BLOG_LIST_ERROR:
      return ({
        ...state,
        getBlogList: {
          ...state.getBlogList,
          data: [],
          loading: false,
          success: false,
          error: true,
          publishlength: "",
          savelength: "",
          totalLength: "",
          trashlength: "",
        }
      })
    default:
      return state
  }
}

export default instituteblogs;
