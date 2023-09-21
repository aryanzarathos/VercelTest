import { COUNTRY_STATE_ACTION_TYPES } from "../actions/countries/actionTypes";
import countriess  from "../actions/countries/countries.json";
import dialCode  from "../actions/countries/dial-code.json";
import  industry_type   from "../actions/countries/industry_types.json";

const COUNTRY_INIT_STATE = {
  list: countriess.countries,
  dial_code: dialCode.dialCode,
  industry_type: industry_type.industry_type,
  states: [],
};

const countries = (state = COUNTRY_INIT_STATE, { type, payload }) => {
  switch (type) {
    case COUNTRY_STATE_ACTION_TYPES.GET_STATES_BY_COUNTRY:
      const countryItem = state.list.find(
        (country) => country.country === payload
      );
      const stateList =
        countryItem && countryItem.states.length > 0 ? countryItem.states : [];
      return {
        ...state,
        states: stateList,
      };

    default:
      return state;
  }
};
export default countries;
