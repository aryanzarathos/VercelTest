import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Cookies from '../../../../Classes/Cookies';
// import { useCookies } from 'react-cookie';
// import Cookies from '../../../../Classes/Cookies';
// import Api from '../../../../Classes/Api';
// import AppLinkUrl from '../../../../Common/AppLink/AppLinkUrl';
// import GoogleTransIcon from './googleTransIcon.svg'
import styled from 'styled-components';
import GoogleIcon from "../../Assets/SectionComponent/Icons/googleIcon.svg"
import { useCookies } from 'react-cookie';
import AppLinkUrl from '../AppLink/AppLinkUrl';

const GoogleTranslateWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: flex-end;
padding-left: 15px;
.googleIcon{
  fill:${({ itemSelect }) => itemSelect?.text};
  height:${({ itemIcon }) => itemIcon?.desktop?.height};
  width:${({ itemIcon }) => itemIcon?.desktop?.width};
}
/* .dropdown .dropdown-menu{ max-height:250px !important; overflow:auto !important; } */
  .goog-te-gadget{
    line-height: 0;
    color: transparent;
    .goog-te-combo{
      background-color: ${({ item }) => item.desktop?.background};
      border: none;
      color: ${({ itemSelect }) => itemSelect?.text};
      font-family: ${({ item }) => item?.desktop?.fontFamily};
      font-weight: ${({ item }) => item?.desktop?.fontWeight};
      font-size: ${({ item }) => item?.desktop?.fontSize};
      line-height: ${({ item }) => item?.desktop?.lineHeight};
      position: relative;
      
      option{
        background-color: ${({ itemOption }) => itemOption?.desktop?.background};
        color: ${({ itemOption }) => itemOption?.desktop?.color};
        height: 100px;
        
        @media screen and ( max-width: 767px){
          font-size: ${({ itemOption }) => itemOption?.mobile?.fontSize};
          line-height: ${({ itemOption }) => itemOption?.mobile?.lineHeight};
        }
      }
    }
    span{
      display: none;
    }
  }
`



const MultiLanguage = ({ type, styles, SelectColor }) => {

  const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data);
  const [show, setShow] = useState(true);

  function setCookies(key, value, domain) {
    document.cookie = key + '=' + value + `;domain=${domain};path=/`;
  }
  const [cookies, setCookie, removeCookie] = useCookies(["googtrans"]);

  const googleTranslateElementInit = () => {
    // setCookie('googtrans', `/en/${businessData && businessData.language && businessData.language.symbol ? businessData.language.symbol : "en"}`, { path: '/' }, { domain: AppLinkUrl.getHost() });
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    if (businessData) {
      // if (AppLinkUrl.subdomain()) {
      //   removeCookie('googtrans', '', { path: '/' }, { domain: AppLinkUrl.subdomain() })
      // } else {
      //   removeCookie('googtrans', '', { path: '/' }, { domain: AppLinkUrl.getHost() })
      //   removeCookie('googtrans', '', { path: '/' }, { domain: `.${AppLinkUrl.getHost()}` })
      // }
      // setCookies('googtrans', `/en/${businessData && businessData?.language?.symbol ? businessData?.language?.symbol : "en"}`, AppLinkUrl.getHost());
      // setCookies('googtrans', `/en/${businessData && businessData?.language?.symbol ? businessData?.language?.symbol : "en"}`, `{.${AppLinkUrl.getHost()}`);
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <React.Fragment>
      {
        type === "dynamic" ?

          <GoogleTranslateWrapper id='google_translate_element'
            item={styles.GoogleTranslateWrapper}
            itemOption={styles.Option}
            itemIcon={styles.GoogleLanguageIcon}
            itemSelect={SelectColor}>

            {/* <GoogleIconWrap className="icon-translate"></GoogleIconWrap> */}
            <GoogleIcon className="googleIcon" />
          </GoogleTranslateWrapper>
          :
          <div id='{google_translate_element}'>
            <i className="icon-translate"></i>
          </div>
      }

    </React.Fragment>
  )
}

export default MultiLanguage