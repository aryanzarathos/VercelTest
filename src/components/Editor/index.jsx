"use client"
import React, { useEffect, useRef } from 'react'
// import SectionEditor from '../../CommonComponents/Repositioning/SectionEditor'

// import EditorLayout from '../../Layouts/EditorLayout'
import dynamic from 'next/dynamic'
import { fetchTemplateDataEDITOR } from '@/CommonFunctions/fetchTemplateData'
import { GET_TEMPLATE } from '@/store/reducers/websiteTemplate'
import { useDispatch, useSelector } from 'react-redux'
import useAppLocation from '@/CustomHooks/useLocation'
import GlobalStyle from '@/Themes/Eblouiussante/GlobalCss/GlobalStyles'
import useGlobalTheme from '@/CustomHooks/useGlobalTheme'
import useGlobalFonts from '@/CustomHooks/useGlobalFonts'
import { useRouter } from 'next/router'
import { getProductListData } from '@/store/actions/siteEditor'
import TemplateLoader from '@/CommonComponents/Loader/Template'
// import WebsiteTypoStyle from '@/Layouts/WebsiteLayout/GlobalStyles'
import useTemplateId from '@/CustomHooks/useTemplateId'
import Auth from '@/Classes/Auth'
import FontLoader from '@/CommonComponents/FontLoader'
import Loader from '@/CommonComponents/Loader/Editor'
const EditorLayout = dynamic(() => import("../../Layouts/EditorLayout"), { ssr: false })
const ChildComponent = dynamic(() => import("./ChildComponent"), { ssr: false, loading: () => <Loader /> })

const EditorComponent = ({ editor }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, data } = useSelector((state) => {
    return {
      user: state.user,
      data: state.websiteTemplate.getTemplate.data
    }
  })
  const [pathname, getCurrentLocation] = useAppLocation();
  const globalTheme = useGlobalTheme();
  const globalFonts = useGlobalFonts();
  const templateId = useTemplateId();
  useEffect(() => {
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
          root.style.setProperty(`--${globalcssitem}`, globalFonts?.[type][globalcssitem]);
        }
      }
    }
  }, [globalFonts, globalTheme])
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const Route = () => {
    return getCurrentLocation()?.replace(/^\//, "")?.replace(/\/$/, "")?.split("?")[0]
  }
  const InitialFunction = async () => {
    if (templateId !== "[...index]" && templateId) {
      let authro = Auth.token();
      let hash = Auth.hash();
      const { col, price, cat, sbcat, sbsbcat, page } = router?.query;
      let Filters = { col, price, cat, sbcat, sbsbcat, page };
      let data
      if (Route() === "shop" || Route() === "category" || Route() === "collection") {
        data = await fetchTemplateDataEDITOR(getCurrentLocation() === "/" ? "home" : Route(), templateId, authro, hash, Filters)
      } else {
        data = await fetchTemplateDataEDITOR(getCurrentLocation() === "/" ? "home" : getCurrentLocation(), templateId, authro, hash);
      }
      dispatch(GET_TEMPLATE(data?.data && data.data.length ? data.data[0] : []))
    }
  }

  useEffect(() => {
    dispatch(getProductListData({ subdomain: user.user_institute_institute_subdomain }));
  }, [])

  useEffect(() => {
    if (getCurrentLocation()) {
      InitialFunction()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentLocation(), pathname, templateId])

  const themeVariable = {
    userSelection: {
      none: "none",
      auto: "auto"
    },
    ScrollSelection: {
      color: "#3758f9",
      background: "#ffffff"
    }
  }

  return (
    <React.Fragment>
      <GlobalStyle item={editor ? themeVariable : ""} />
      <FontLoader headerFont={data?.template?.draftfontfamily?.header} paragraphFont={data?.template?.draftfontfamily?.paragraph} />
      {
        editor ?
          <EditorLayout>
            <ChildComponent />
          </EditorLayout>
          :
          <ChildComponent />
      }
    </React.Fragment>
  )
}
export default EditorComponent