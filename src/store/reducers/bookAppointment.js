import { AppointmentActionTYpes } from "../actions/AppointmentServices/ActionTypes";

const { APPOINTMENTTYPES } = require("../actions/bookAppointment/actionTypes");

const APPOINTMENT_INITIAL_TYPES = {
    getAllCollection: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },
    getMainCategoryList: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },
    getallServiceList: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    getSingleService: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },
    getAllSlot: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    appointmentCart: {
        data: {},
        loading: false,
        success: false,
        error: false,
    },
    postAppointment: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },
    getusermylist: {
        data: [],
        loading: false,
        success: false,
        error: false
    },
    serviceListByCategories: {
        data: [],
        loading: false,
        success: false,
        error: false,
        searchTerm: false,
        firstTimeSuccess: false
    },
}

const bookAppointment = (state = APPOINTMENT_INITIAL_TYPES, { type, payload }) => {
    switch (type) {
        case AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_LOADING:
            return ({
                ...state,
                serviceListByCategories: {
                    ...state.serviceListByCategories,
                    loading: true,
                    success: false,
                    error: false,
                    searchTerm: false
                }
            })
        case AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_SUCCESS:
            return ({
                ...state,
                serviceListByCategories: {
                    ...state.serviceListByCategories,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false,
                    searchTerm: false,

                }
            })
        case AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_ERROR:
            return ({
                ...state,
                serviceListByCategories: {
                    ...state.serviceListByCategories,
                    data: [],
                    loading: false,
                    success: false,
                    error: true,
                    searchTerm: false
                }
            })
        case AppointmentActionTYpes.GET_SERVICE_LIST_BY_CATEGOERY_RESET:
            return ({
                ...state,
                serviceListByCategories: {
                    ...state.serviceListByCategories,
                    data: [],
                    loading: false,
                    success: false,
                    error: false,
                    searchTerm: false
                }
            })
        case AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_LOADING:
            return ({
                ...state,
                getMainCategoryList: {
                    ...state.getMainCategoryList,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_SUCCESS:
            return ({
                ...state,
                getMainCategoryList: {
                    ...state.getMainCategoryList,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_ERROR:
            return ({
                ...state,
                getMainCategoryList: {
                    ...state.getMainCategoryList,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case AppointmentActionTYpes.GET_MAIN_CATEGORY_LIST_RESET:
            return ({
                ...state,
                getMainCategoryList: {
                    ...state.getMainCategoryList,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })
        case AppointmentActionTYpes.GET_COLLECTION_LOADING:
            return ({
                ...state,
                getAllCollection: {
                    ...state.getAllCollection,
                    data: [],
                    loading: true,
                    success: false,
                    error: false,
                }
            })
        case AppointmentActionTYpes.GET_COLLECTION_SUCCESS:
            return ({
                ...state,
                getAllCollection: {
                    ...state.getAllCollection,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false,
                }
            })
        case AppointmentActionTYpes.GET_COLLECTION_ERROR:
            return ({
                ...state,
                getAllCollection: {
                    ...state.getAllCollection,
                    data: [],
                    loading: false,
                    success: false,
                    error: true,
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_LOADING:
            return ({
                ...state,
                getallServiceList: {
                    ...state.getallServiceList,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_LOADED:
            return ({
                ...state,
                getallServiceList: {
                    ...state.getallServiceList,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SERVICES_LIST_ERROR:
            return ({
                ...state,
                getallServiceList: {
                    ...state.getallServiceList,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        // get single service data start

        case APPOINTMENTTYPES.GET_SINGLE_SERVICE_LOADING:
            return ({
                ...state,
                getSingleService: {
                    ...state.getSingleService,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case APPOINTMENTTYPES.GET_SINGLE_SERVICE_SUCCESS:
            return ({

                ...state,
                getSingleService: {
                    ...state.getSingleService,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case APPOINTMENTTYPES.GET_SINGLE_SERVICE_ERROR:
            return ({
                ...state,
                getSingleService: {
                    ...state.getSingleService,
                    data: payload,
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case APPOINTMENTTYPES.GET_SINGLE_SERVICE_RESET:
            return ({
                ...state,
                getSingleService: {
                    ...state.getSingleService,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        // get single service data end


        case APPOINTMENTTYPES.GET_ALL_SLOTS_LOADING:
            return ({
                ...state,
                getAllSlot: {
                    ...state.getAllSlot,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SLOTS_LOADED:
            return ({
                ...state,
                getAllSlot: {
                    ...state.getAllSlot,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SLOTS_ERROR:
            return ({
                ...state,
                getAllSlot: {
                    ...state.getAllSlot,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })
        case APPOINTMENTTYPES.GET_ALL_SLOTS_RESET:
            return ({
                ...state,
                getAllSlot: {
                    ...state.getAllSlot,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })


        case APPOINTMENTTYPES.POST_APPOINTMENT_CART_LOADING:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: true,
                    success: false,
                    error: false

                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_CART_SUCCESS:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    loading: false,
                    success: true,
                    error: false,
                    data: payload
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_CART_RESET:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_CART_ERROR:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case APPOINTMENTTYPES.GET_APPOINTMENT_CART_LOADING:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: true,
                    success: false,
                    error: false

                }
            })

        case APPOINTMENTTYPES.GET_APPOINTMENT_CART_SUCCESS:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    loading: false,
                    success: true,
                    error: false,
                    data: payload
                }
            })

        case APPOINTMENTTYPES.GET_APPOINTMENT_CART_RESET:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case APPOINTMENTTYPES.GET_APPOINTMENT_CART_ERROR:
            return ({
                ...state,
                appointmentCart: {
                    ...state.appointmentCart,
                    data: {},
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_LOADING:
            return ({
                ...state,
                postAppointment: {
                    ...state.postAppointment,
                    data: payload,
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_SUCCESS:
            return ({
                ...state,
                postAppointment: {
                    ...state.postAppointment,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_RESET:
            return ({
                ...state,
                postAppointment: {
                    ...state.postAppointment,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case APPOINTMENTTYPES.POST_APPOINTMENT_ERROR:
            return ({
                ...state,
                postAppointment: {
                    ...state.postAppointment,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_LOADING:
            return ({
                ...state,
                getusermylist: {
                    ...state.getusermylist,
                    data: [],
                    loading: true,
                    success: false,
                    error: false

                }
            })

        case APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_LOADED:
            return ({
                ...state,
                getusermylist: {
                    ...state.getusermylist,
                    loading: false,
                    success: true,
                    error: false,
                    data: payload
                }
            })

        case APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_ERROR:
            return ({
                ...state,
                getusermylist: {
                    ...state.getusermylist,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case APPOINTMENTTYPES.GET_USER_SIDE_BOOKING_LIST_RESET:
            return ({
                ...state,
                getusermylist: {
                    ...state.getusermylist,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        default:
            return state

    }
}

export default bookAppointment;
