import { ACTIVE_PROFILE } from "../actions/myprofile/profileAction";

const initial_states = {
  activeProfile: "Personal Details",
};

const myProfile = (state = initial_states, { type, payload }) => {
    switch (type) {
        case ACTIVE_PROFILE:
            return {
                ...state,
                activeProfile: payload
            }
        default:
            return state;
    }
}

export default myProfile