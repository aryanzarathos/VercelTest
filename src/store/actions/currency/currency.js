import { getCountryData } from "../../../CommonFunctions/helperFunction";
// import { setCommonError } from "../commonerror";
import CurrencyRequest from "./currencyRequest";
import { CurrencyActionTypes } from "./currencyActionType";

export const getCurrencyList = (val, type) => {
  // console.log(val, type, "line 7")
  return (dispatch) => {
    dispatch({
      type: CurrencyActionTypes.GET_ADMIN_CURRENCY_LIST_LOADING,
    });
    CurrencyRequest.get(
      CurrencyRequest.endpoint.adminCurrencies
        .replace("__BUSINESS__", type === 'business' ? val : '')
        .replace("__DOMAIN__", type === 'domain' ? val : '')
        .replace("__SUBDOMAIN__", type === 'subdomain' ? val : ''),
      (success) => {
        dispatch({
          type: CurrencyActionTypes.GET_ADMIN_CURRENCY_LIST_SUCCESS,
          payload: success.data.data
        });
      },
      (error) => {
        dispatch({
          type: CurrencyActionTypes.GET_ADMIN_CURRENCY_LIST_FAIL,
          payload: error.message
        });
      }
    )
  }
}

export const getRegionCurrency = (val = getCountryData().country) => {
  return (dispatch) => {
    dispatch({
      type: CurrencyActionTypes.DEFAULT_CURRENCY_LOADING,
    });
    CurrencyRequest.get(
      CurrencyRequest.endpoint.regionCurrencies
        .replace("__REGION__", val),
      (success) => {
        dispatch({
          type: CurrencyActionTypes.DEFAULT_CURRENCY_SUCCESS,
          payload: success.data.data
        });
      },
      (error) => {
        dispatch({
          type: CurrencyActionTypes.DEFAULT_CURRENCY_FAIL,
          payload: error.message
        });
      }
    )
  }
}

export const selectCurrency = (val) => {
  return (dispatch) => {
    try {
      dispatch({
        type: CurrencyActionTypes.SELECTED_CURRENCY_SUCCESS,
        payload: val
      });
    } catch (error) {
      // dispatch(setCommonError('Failed to select currency'));
    }
  }
}