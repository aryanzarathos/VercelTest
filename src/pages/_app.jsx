import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../styles/GloablStyle/global.scss";
import store from "../store";
import { GET_TEMPLATE } from "../store/reducers/websiteTemplate";
import { register } from 'swiper/element/bundle';
import 'react-phone-input-2/lib/style.css'
// register Swiper custom elements
import "./globalStylesFont.scss"
register();
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import GlobalStyle from "@/Themes/Eblouiussante/GlobalCss/GlobalStyles";
import SpinnerLoader from "@/CommonComponents/SpinnerLoader/SpinnerLoader";
import TemplateToast from "@/SectionCommon/TemplateToast";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import WhatsappChat from "@/CommonComponents/WhatsApp";
// Configure Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MyApp({ Component, pageProps }) {
  const { preloadedState } = pageProps;
  if (preloadedState) {
    store.dispatch(GET_TEMPLATE(preloadedState))
  }

  //  Router.events.on('routeChangeStart', () => nProgress.start())
  // Router.events.on('routeChangeComplete', () => nProgress.done())
  // Router.events.on('routeChangeError', () => nProgress.done())

  // nProgress.configure({ showSpinner: true })

  const [loading, setLoading] = useState(false);
  const [isValidRoutes, setIsValidRoutes] = useState(false);

  const dynamicUrl = globalThis?.window?.location?.href;
  useEffect(() => {
    // Use a regex to match and capture URL components
    const urlPattern = /^(https?:\/\/[^\/]+)(\/[^?]+)(\?[^#]+)?(#.+)?$/;
    const matches = dynamicUrl.match(urlPattern);

    // console.log(matches,"shop page")
    if (matches) {
      const path = matches[2];
      // Check if the pathname is shop
      setIsValidRoutes(path.includes('/shop'));
    } else {
      setIsValidRoutes(false);
    }
  }, [dynamicUrl]);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    if (!isValidRoutes) {
      Router.events.on('routeChangeStart', start);
      Router.events.on('routeChangeComplete', end);
      Router.events.on('routeChangeError', end);
      return () => {
        Router.events.off('routeChangeStart', start);
        Router.events.off('routeChangeComplete', end);
        Router.events.off('routeChangeError', end);
      };
    }

    // Clean up loading state handlers if route is valid
    end();

  }, [isValidRoutes]);

  // console.log(isValidRoutes,"shop page")
  // return loading ? (
  //   <>
  //     {
  //       AppLinkUrl.isEditor() ? (
  //         <Loader />

  //       ) : (
  //         ""
  //       )
  //     }
  //   </>
  // ) : (

  //   <Provider store={store}>
  //     <div id="template_body">
  //       <Component {...pageProps} />
  //     </div>
  //   </Provider>
  // );
  // console.log(isValidRoutes,loading,loading && isValidRoutes,"sadasdasdas")
  return (
    <Provider store={store}>
      <div id="template_body">
        <GlobalStyle />
        <WhatsappChat />
        <TemplateToast />
        {/* <SuccessMessagePopup /> */}
        {/* {
          loading && !AppLinkUrl.isEditor() ? <SpinnerLoader style={{ height: "100vh" }} className={`spinerLoader_wrap`} /> :
            <Component {...pageProps} />
        } */}
        <Component {...pageProps} />
      </div>
    </Provider>
  )

}
export default MyApp;
