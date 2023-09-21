import { ContactUsActionType } from "../actions/contactus/actionTypes";

const INITIAL_STATE = {
    success: false,
    statusCode: '',

    getContactList: {
        data: [],
        totalLength: "",
        loading: false,
        success: false,
        error: false,
    },

    getContactForm: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },

    patchContactForm: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },

    downloadExcelSheetData: {
        data: [],
        loading: false,
        success: false,
        error: false,
    },
};

const contactus = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case ContactUsActionType.CONTACT_US:
            return ({
                ...state,
                response: payload,
                statusCode: payload.data.statusCode,
                success: true
            })

        case ContactUsActionType.CONTACT_US_CREATE:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: state.getContactList.data.concat(payload),
                    totalLength: payload.totalLength,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.CONTACT_US_RESET:
            return ({
                ...state,
                response: [],
                statusCode: '',
                success: false
            })

        case ContactUsActionType.GET_CONTACTS_LIST_LOADING:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: [],
                    totalLength: "",
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.GET_CONTACTS_LIST_LOADED:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: payload.data,
                    totalLength: payload.totalLength,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.GET_CONTACTS_LIST_RESET:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: [],
                    totalLength: "",
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.GET_CONTACTS_LIST_ERROR:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: [],
                    totalLength: "",
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case ContactUsActionType.GET_CONTACT_FORM_LOADING:
            return ({
                ...state,
                getContactForm: {
                    ...state.getContactForm,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.GET_CONTACT_FORM_LOADED:
            return ({
                ...state,
                getContactForm: {
                    ...state.getContactForm,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.GET_CONTACT_FORM_ERROR:
            return ({
                ...state,
                getContactForm: {
                    ...state.getContactForm,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case ContactUsActionType.GET_CONTACT_FORM_RESET:
            return ({
                ...state,
                getContactForm: {
                    ...state.getContactForm,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.UPDATE_CONTACT_FORM_LOADING:
            return ({
                ...state,
                patchContactForm: {
                    ...state.patchContactForm,
                    data: [],
                    loading: true,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.UPDATE_CONTACT_FORM_LOADED:
            return ({
                ...state,
                patchContactForm: {
                    ...state.patchContactForm,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.UPDATE_CONTACT_FORM_ERROR:
            return ({
                ...state,
                patchContactForm: {
                    ...state.patchContactForm,
                    data: [],
                    loading: false,
                    success: false,
                    error: true
                }
            })

        case ContactUsActionType.UPDATE_CONTACT_FORM_RESET:
            return ({
                ...state,
                patchContactForm: {
                    ...state.patchContactForm,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        case ContactUsActionType.SORT_CONTACTS_LIST:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: payload.data,
                    totalLength: payload.totalLength,
                    loading: false,
                    success: true,
                    error: false
                }
            })


        case ContactUsActionType.SEARCH_CONTACTS_LIST:
            return ({
                ...state,
                getContactList: {
                    ...state.getContactList,
                    data: payload.data,
                    totalLength: payload.totalLength,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.DOWNLOAD_EXCEL_SHEET:
            return ({
                ...state,
                downloadExcelSheetData: {
                    ...state.downloadExcelSheetData,
                    data: payload,
                    loading: false,
                    success: true,
                    error: false
                }
            })

        case ContactUsActionType.DOWNLOAD_EXCEL_SHEET_RESET:
            return ({
                ...state,
                downloadExcelSheetData: {
                    ...state.downloadExcelSheetData,
                    data: [],
                    loading: false,
                    success: false,
                    error: false
                }
            })

        default:
            return state;
    }
}

export default contactus