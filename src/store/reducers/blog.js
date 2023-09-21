import { flush } from "@emotion/css";

const { BlogActionTypes } = require("../actions/blog/blogAction");

const ECOMMERCE_TEMPLATE_INITIAL_STATE = {
    route: "/",
    preview: false,
    paramsId: "",
    BlogItemList: {
        data: {},
        localApi:false,
        loading: false,
        success: false,
        error: false
    },
    BlogCategoryList: {
        data: {},
        loading: false,
        success: false,
        error: false,
    },
}

const ecommerceTemplate = (state = ECOMMERCE_TEMPLATE_INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case BlogActionTypes.SELECT_ROUTE_PREVIEW:
            return {
                ...state,
                route: payload.item,
                preview: payload.preview
            };

        case BlogActionTypes.SET_PARAMS_ID:
            return {
                ...state,
                paramsId: payload
            };

        case BlogActionTypes.GET_BLOG_ITEM_LIST_SUCCESS:
            return {
                ...state,
                BlogItemList: {
                    ...state.BlogItemList,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                },
            };
        
        default:
            return state;
    }
}
// export const blogList = (state = ECOMMERCE_TEMPLATE_INITIAL_STATE, { type, payload }) => {
//     switch (type) {
//         case BlogActionTypes.GET_BLOG_ITEM_LIST_LOADING:
//             return {
//                 ...state,
//                 BlogItemList: {
//                     ...state.BlogItemList,
//                     loading: true,
//                     success: false,
//                     error: false
//                 },
//             };
//         case BlogActionTypes.GET_BLOG_ITEM_LIST_SUCCESS:
//             return {
//                 ...state,
//                 BlogItemList: {
//                     ...state.BlogItemList,
//                     data: payload,
//                     loading: false,
//                     success: true,
//                     error: false
//                 },
//             };
//         case BlogActionTypes.GET_BLOG_ITEM_LIST_ERROR:
//             return {
//                 ...state,
//                 BlogItemList: {
//                     ...state.BlogItemList,
//                     loading: false,
//                     success: false,
//                     error: true
//                 },
//             };
//         case BlogActionTypes.GET_BLOG_ITEM_LIST_RESET:
//             return {
//                 ...state,
//                 BlogItemList: {
//                     ...state.BlogItemList,
//                     data: [],
//                     loading: false,
//                     success: false,
//                     error: false
//                 },
//             };

//         default:
//             return state;
//     }
// }


export default ecommerceTemplate;