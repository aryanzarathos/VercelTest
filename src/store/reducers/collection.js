import { CollectionActionTypes } from "../actions/ecomCollections/ActionTypes";

const COLLECTION_LIST_INITIAL_STATE = {
  adminCollectionList: {
    data: [],
    loading: false,
    success: false,
    error: false,
  },
};

const collection = (state = COLLECTION_LIST_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CollectionActionTypes.GET_COLLECTION_LIST_LOADING:
      return {
        ...state,
        adminCollectionList: {
          ...state.adminCollectionList,
          data: [],
          loading: true,
          error: false,
          success: false,
        },
      };

    case CollectionActionTypes.GET_COLLECTION_LIST_SUCCESS:
      return {
        ...state,
        adminCollectionList: {
          ...state.adminCollectionList,
          data: [...payload],
          loading: false,
          error: false,
          success: true,
        },
      };

    case CollectionActionTypes.GET_COLLECTION_LIST_FAIL:
      return {
        ...state,
        adminCollectionList: {
          ...state.adminCollectionList,
          data: [],
          loading: false,
          error: true,
          success: false,
        },
      };

    case CollectionActionTypes.GET_COLLECTION_LIST_RESET:
      return {
        ...state,
        adminCollectionList: {
          ...state.adminCollectionList,
          data: [],
          loading: false,
          error: false,
          success: false,
        },
      };

    default:
      return state;
  }
};

export default collection ;
