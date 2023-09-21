import { ContactUsActionType } from "./actionTypes";
import contactRequest from './contactRequest';
import { setCommonError } from "../commonerror";
import { showToast } from "../successmessagepopup";

export const submitContactInfo = (data) => {
    return dispatch => {

        contactRequest.post(contactRequest.contactusEndpoint.contactusUrl, data,
            (success) => {
                dispatch({
                    type: ContactUsActionType.CONTACT_US,
                    payload: success
                })

                dispatch(showToast('Thank You, We will get back to you soon !'));
            },
            error => {
                dispatch(setCommonError(error.message))
            }
        );
    }
}
export const submitContactCreate = (data) => {
    return dispatch => {

        contactRequest.post(contactRequest.contactusEndpoint.contactusCreate, data,
            (success) => {
                dispatch({
                    type: ContactUsActionType.CONTACT_US_CREATE,
                    payload: success.data
                })
            },
            error => {
                // dispatch(setCommonError(error.message))
            }
        );
    }
}

export const postContactReset = () => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.CONTACT_US_RESET,
            payload: []
        })
    }
}

//get Contact list
export const getContactList = (id) => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.GET_CONTACTS_LIST_LOADING,
            loading: true,
        })
        contactRequest.get(contactRequest.contactusEndpoint.getContacts.replace("_Id_", id),
            (success) => {
                dispatch({
                    type: ContactUsActionType.GET_CONTACTS_LIST_LOADED,
                    payload: success.data
                })
            },
            error => {
                dispatch({
                    type: ContactUsActionType.GET_CONTACTS_LIST_ERROR,
                    payload: []
                })
                dispatch(setCommonError(error.message))
            }
        );
    }
}

export const getContactListReset = () => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.GET_CONTACTS_LIST_RESET,
            payload: []
        })
    }
}

//get Contact form fields
export const getContactFormFields = (id) => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.GET_CONTACT_FORM_LOADING,
            loading: true,
        })
        contactRequest.get(contactRequest.contactusEndpoint.getContactFields.replace("_Id_", id),
            (success) => {
                dispatch({
                    type: ContactUsActionType.GET_CONTACT_FORM_LOADED,
                    payload: success.data.BusinessFormData
                })
            },
            error => {
                dispatch({
                    type: ContactUsActionType.GET_CONTACT_FORM_ERROR,
                    payload: []
                })
                dispatch(setCommonError(error.message))
            }
        );
    }
}

export const getContactFormFieldsReset = () => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.GET_CONTACT_FORM_RESET,
            payload: []
        })
    }
}

//update contact form fields data
export const updateContactFormFields = (id, data) => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.UPDATE_CONTACT_FORM_LOADING,
            loading: true,
        })
        contactRequest.patch(contactRequest.contactusEndpoint.patchContactFields.replace("_Id_", id), data,
            (success) => {
                dispatch({
                    type: ContactUsActionType.UPDATE_CONTACT_FORM_LOADED,
                    payload: success.data.editInfo
                })
                // dispatch(showToast("Contact Settings Changed!"))
            },
            error => {
                dispatch({
                    type: ContactUsActionType.UPDATE_CONTACT_FORM_ERROR,
                    payload: []
                })
                dispatch(setCommonError(error.message))
            }
        );
    }
}

export const updateContactFormFieldsReset = () => {
    return (dispatch) => {
        dispatch({
            type: ContactUsActionType.UPDATE_CONTACT_FORM_RESET,
            payload: []
        })
    }
}
