import { subdomainUserActionType } from "./actionTypes";

export const setLoginToStore = (loginData) => {
    return (dispatch) => {
        dispatch({
            type: subdomainUserActionType.SET_SUBDOMAIN_USER_LOGIN,
            payload: loginData,
        });
    };
};

export const updateUserToStore = (loginData) => {
    return (dispatch) => {
        dispatch({
            type: subdomainUserActionType.UPDATE_SUBDOMAIN_USER,
            payload: loginData,
        });
    };
};