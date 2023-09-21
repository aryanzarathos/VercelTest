import dynamic from "next/dynamic";

let RenderComponent = {};

RenderComponent["About"] = dynamic(() => import("../components/About/index").default);
RenderComponent["Shop"] = require("../components/Shop/index").default;
RenderComponent["about-us-sections"] =
  require("../SectionComponents/AboutUs/index").default;
RenderComponent["banners"] =
  require("../SectionComponents/Banner/index").default;
RenderComponent["Action"] =
  require("../SectionComponents/Action/index").default;
RenderComponent["WishlistPopUpindex"] =
  require("../SectionComponents/WishlistPopUp").default;

// RenderComponent['headers'] = require('../SectionComponents/Header/index').default;
RenderComponent["contact-us"] =
  require("../SectionComponents/ContactUs/index").default;
RenderComponent["ourteam"] =
  require("../SectionComponents/OurTeam/index").default;
RenderComponent["blog-post"] =
  require("../SectionComponents/BlogPosts/index").default;
RenderComponent["blog-categories"] =
  require("../SectionComponents/BolgCategories/index").default;
RenderComponent["cart"] = require("../SectionComponents/Cart/index").default;
RenderComponent["category-layout"] =
  require("../SectionComponents/CategoryLayout/index").default;
RenderComponent["collection"] =
  require("../SectionComponents/Collections/index").default;
RenderComponent["cover"] = require("../SectionComponents/Cover/index").default;
RenderComponent["cover-slider"] =
  require("../SectionComponents/CoverSlider/index").default;
RenderComponent["empty-cart"] =
  require("../SectionComponents/EmptyCart/index").default;
RenderComponent["facilities"] =
  require("../SectionComponents/Facilities/index").default;
RenderComponent["faq"] = require("../SectionComponents/Faq/index").default;
RenderComponent["cart-layout"] =
  require("../SectionComponents/CartCommonLayout/index").default;
RenderComponent["WishlistPopUpindex"] =
  require("../SectionComponents/WishlistPopUp").default;
RenderComponent["general-pages"] =
  require("../SectionComponents/GeneralPages/index").default;
RenderComponent["my-orders"] =
  require("../SectionComponents/MyOrders/index").default;
RenderComponent["my-profile"] =
  require("../SectionComponents/MyProfile/index").default;
RenderComponent["personal-details"] =
  require("../SectionComponents/MyProfile/Theme1/PersonalDetail/PersonalDetails").default;
RenderComponent["orders"] =
  require("../SectionComponents/MyProfile/Theme1/Orders/Orders").default;
RenderComponent["address"] =
  require("../SectionComponents/MyProfile/Theme1/Address/Address").default;

// RenderComponent["order-details"] =
//   require("../SectionComponents/OrderDetails").default;
RenderComponent["product-details"] =
  require("../SectionComponents/ProductDetails").default;
RenderComponent["product-list"] =
  require("../SectionComponents/ProductLists").default;
RenderComponent["filter"] = require("../SectionComponents/Filters").default;
RenderComponent["error"] = require("../SectionComponents/Error").default;
RenderComponent["video"] = require("../SectionComponents/Video").default;
RenderComponent["orders-details"] =
  require("../SectionComponents/OrderDetails").default;
RenderComponent["GuestOrderDetails"] =
  require("../SectionComponents/GuestOrderDetails/Theme1/Theme1").default;
RenderComponent["product-details"] =
  require("../SectionComponents/ProductDetails").default;
RenderComponent["product-list"] =
  require("../SectionComponents/ProductLists").default;
RenderComponent["pagination"] =
  require("../SectionComponents/Pagination/index").default;
RenderComponent['reviews'] = require('../SectionComponents/Reviews/index').default;
RenderComponent["signup"] =
  require("../SectionComponents/SignUpLogin/index").default;
RenderComponent["successful-placed"] =
  require("../SectionComponents/SuccessfullPlaced/index").default;
RenderComponent['testimonial'] = require('../SectionComponents/Testimonial').default;
RenderComponent["filter"] = require("../SectionComponents/Filters").default;
RenderComponent["wishlist"] = require("../SectionComponents/Wishlist").default;
RenderComponent["paymentmethod"] =
  require("../SectionComponents/PaymentMethod").default;
// RenderComponent["test"] =
// require("../SectionComponents/Check").default;
RenderComponent["gallary"] =
  require("../SectionComponents/Gallary").default;
RenderComponent["ribbon"] = require("../SectionComponents/Ribbons").default;
RenderComponent["vission"] = require("../SectionComponents/Vision").default;
RenderComponent["announcement"] = require("../SectionComponents/Announcement").default;
RenderComponent["empanelment"] = require("../SectionComponents/Empanelment").default;

// RenderComponent["collection-layout"] =
//   require("../SectionComponents/CollectionsLayout").default;
RenderComponent["footer"] = require("../SectionComponents/Footer/index").default;
RenderComponent["copywrite"] = require("../SectionComponents/Footer/Theme3/CopyRight/CopyRight").default;

RenderComponent["header"] = require("../SectionComponents/Header/index").default;
RenderComponent["vacancy"] = require("../SectionComponents/Vacancy/index").default;
RenderComponent["privacy"] = require("../SectionComponents/Policy/index").default;
RenderComponent["principle"] = require("../SectionComponents/Principle/index").default;
RenderComponent["notice"] = require("../SectionComponents/NoticeBoard/index").default;
RenderComponent["misc"] = require("../SectionComponents/Miscellaneous/index").default;
RenderComponent["feestructure"] = require("../SectionComponents/FeeStructure/index").default;
RenderComponent["service"] = require("../SectionComponents/Services/index").default;
RenderComponent["text"] = require("../SectionComponents/TextPage/index").default;
RenderComponent["shipping"] = require("../SectionComponents/ShippingAddress/index").default;
RenderComponent["saved-address"] = require("../SectionComponents/SavedAddress/index").default;
RenderComponent["progress"] = require("../SectionComponents/Progress/index").default;
RenderComponent["popup-address"] = require("../SectionComponents/PopupAddress/index").default;
RenderComponent["personal"] = require("../SectionComponents/PersonalDetails/index").default;
RenderComponent["pagenotfound"] = require("../SectionComponents/PageNotFound/index").default;
RenderComponent["mobilemenu"] = require("../SectionComponents/MobileMenu/index").default;

// section
RenderComponent["section"] = require("../Themes/Eblouiussante/Pages/Home/index").default;
RenderComponent["product"] = require("../Themes/Eblouiussante/Pages/Home/index").default;
RenderComponent["bloghometheme1"] = require("../SectionComponents/BlogHomePage/Theme1/Theme1").default;
//






export default RenderComponent;
