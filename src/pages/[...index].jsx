import React, { Fragment, useEffect, useInsertionEffect } from "react";
import AppLinkUrl from "../CommonComponents/AppLink/AppLinkUrl";
import { getFullUrl, hostName } from "../CommonFunctions/isBrowser";
import RenderComponent from '../SectionsLayout/RendersComponent/RenderComponent';
import GlobalStyle from '../Themes/Eblouiussante/GlobalCss/GlobalStyles';
// import GlobalCss from "../Themes/Eblouiussante/GlobalCss.json";
import { useDispatch, useSelector } from "react-redux";
import fetchTemplateData from "../CommonFunctions/fetchTemplateData";
import useGlobalTheme from "../CustomHooks/useGlobalTheme";
// import WebsiteTypoStyle from "../Layouts/WebsiteLayout/TypoStyle";
import useGlobalFonts from "../CustomHooks/useGlobalFonts";
import useInitialApiCalling from "@/TemplateCustomHooks/useInitialApiCalling";
import SeoHead from "@/CommonComponents/SeoHead/SeoHead";
import FontLoader from "@/CommonComponents/FontLoader";
// import "./globalStylesFont.scss"
// import TestCheck from "../test.json"
// import Auth from "../Classes/Auth";
const Home = ({ isPrivateDomain, subdomain, preloadedState, fullUrl }) => {
  const globalTheme = useGlobalTheme();
  const globalFonts = useGlobalFonts();
  const dispatch = useDispatch()

  const { data } = useSelector((state) => state.websiteTemplate.getTemplate);
  const [] = useInitialApiCalling(); //////// FIRST INITAL ALL API CALL IMPORANT 
  useInsertionEffect(() => {
    // get the root elements
    const root = document.querySelector(":root");
    if (globalTheme) {
      for (let globalcssitem in globalTheme?.color) {
        root.style.setProperty(`--${globalcssitem}`, globalTheme?.color[globalcssitem]);
      }
      let types = ["typoAnchor", "typoH1", "typoH1", "typoH2", "typoH3", "typoH4", "typoH5", "typoH6", "typoPara", "typoFontWeight", "typoButton"]
      for (let type of types) {
        for (let globalcssitem in globalFonts?.[type]) {
          // set property of all object in root element 
          ////// console.log(`--${globalcssitem}`, globalFonts?.[type][globalcssitem])
          root.style.setProperty(`--${globalcssitem}`, globalFonts?.[type][globalcssitem]);
        }
      }
    }
  }, [globalFonts, globalTheme])
  console.log(preloadedState, "preloaded data xxkkggg")
  return (
    <Fragment>
      <GlobalStyle />
      <SeoHead
        title={preloadedState?.meta_title}
        keywords={preloadedState?.meta_keywords?.join(",", "|")}
        description={preloadedState?.meta_description}
        ogTitle={preloadedState?.page_og_title}
        ogImage={preloadedState?.page_og_img}
        ogDesc={preloadedState?.page_og_description}
        url={fullUrl}
      />
      <FontLoader headerFont={preloadedState?.template?.draftfontfamily?.header} paragraphFont={preloadedState?.template?.draftfontfamily?.paragraph} />

      {
        preloadedState?.upper?.length ? data?.upper?.map((item, key) => {
          // console.log(item, "item2")
          return (
            <div key={key}>
              {
                item?.container_name === "Top Header" ?
                  preloadedState?.hide_topheader === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
                  : preloadedState?.hide_header === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
              }
            </div>

          )
        }) : ""
      }
      <React.Fragment>
        {preloadedState?.data?.length > 0 ? data?.data?.map((item, key) => {
          return (
            <div key={key} id={item._id}>
              {typeof RenderComponent[item.componentRender] !== "undefined" ?
                React.createElement(RenderComponent[item.componentRender], null, item) :
                ""}
            </div>
          )
        }) : AppLinkUrl.isEditor() ?
          <button onClick={() => handleAddSection()}>Add Sectionnnn</button> : ""
        }
      </React.Fragment>
      {
        preloadedState?.lower?.length ? data?.lower?.map((item, key) => {
          return (
            <React.Fragment key={key}>
              {
                item?.container_name === "Copy Write" ?
                  preloadedState?.hide_low_footer === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
                  : preloadedState?.hide_footer === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
              }

            </React.Fragment>

          )
        }) : ""
      }
    </Fragment>
  );
};

export async function getServerSideProps({ req, query, pathname, params }) {
  // console.log("line 179", pathname)
  // Get the request object from the context

  // Get the cookie value from the request

  let pathName = req.url;
  pathName = pathName.replace(/^\//, "").replace(/\/$/, "")?.split("?")[0];
  const { col, price, cat, sbcat, sbsbcat, page } = query;
  let Filters = { col, price, cat, sbcat, sbsbcat, page };
  let resData = await fetchTemplateData(req.headers.host, "/" + pathName, query.index.join("/"), Filters, "public, max-age=3600, stale-while-revalidate=604800")
  const fullUrl = getFullUrl(req.headers.host, "/" + pathName, query.index.join("/"),);
  return {
    props: {
      isPrivateDomain: AppLinkUrl.privateDomain(hostName(req.headers.host)),
      subdomain: AppLinkUrl.subdomain(hostName(req.headers.host)),
      preloadedState: resData?.data && resData?.data?.length ? resData?.data[0] : [],
      fullUrl: fullUrl
    }, // will be passed to the page component as props
  }
}
export default Home;
