import { combineReducers } from "redux";
import websiteTemplate from "./websiteTemplate";
import user from "./user";
import subdomainuser from "./subdomainuser";
import editor from "./SiteEditor";
import googleFonts from './googleFonts';
import currencyList from './currencyList';
import commonerrorSlice from "./commonerrorSlice";
import guestCart from "./guestCart";
import commonStates from './commonStates';
import successmessagepopup from './successmessagepopup';
import cartOrder from './cartOrder';
import productList from './productList';
import wishlist from './wishlist';
import reviews from './reviews';
import countries from "./countries";
import orderCartListReducer from "./cartOrder";
import acceptPayments from "./acceptPayments";
import myProfile from "./myprofile";
import ecommerceTemplate from "./blog";
import instituteblogs from "./instituteblogs";
import discountCoupon from "./discountcoupon";
import bookAppointment from "./bookAppointment"
import commonerror from "./commonerror";
import testimonial from "./testimonial";
import Faq from "./faq";
import manageFaculty from "./manageFaculty";
import collection from "./collection";
import services from "./services";
import ecomCategory from "./category"
import contactus from "./contactus"
import createOrder from './createorder'
import saveCard from "./saveCard"
import globalSearch from "./globalSearch";
export default combineReducers({
  websiteTemplate: websiteTemplate,
  acceptPayments: acceptPayments,
  user: user,
  subdomainuser: subdomainuser,
  editor: editor,
  countries: countries,
  contactus: contactus,
  commonerror: commonerrorSlice,
  currencyList: currencyList,
  googleFonts: googleFonts,
  commonStates: commonStates,
  guestCart: guestCart,
  ecommerceTemplate: ecommerceTemplate,
  instituteblogs: instituteblogs,
  cartOrder: cartOrder,
  reviews: reviews,
  wishlist: wishlist,
  productList: productList,
  orderCartList: orderCartListReducer,
  bookAppointment: bookAppointment,
  successmessagepopup: successmessagepopup,
  myProfile,
  discountCoupon,
  commonerror,
  testimonial,
  Faq,
  manageFaculty,
  collection,
  services,
  createOrder,
  ecomCategory,
  saveCard,
  globalSearch,
});