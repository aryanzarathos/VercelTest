import { ACTIVE_PROFILE } from "./profileAction"

export const activateProfile = (item) => {
    return (dispatch) => {
        dispatch({
            type: ACTIVE_PROFILE,
            payload: item
        })
    }
}