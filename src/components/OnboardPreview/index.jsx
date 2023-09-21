import React, { useEffect, useRef } from 'react'
import styles from "./editor.module.scss"
// import SectionEditor from '../../CommonComponents/Repositioning/SectionEditor'
import GraphIcon from "../../Assets/SiteEditor/Icons/graphIcon.svg"
import EditBtnIcon from "../../Assets/SiteEditor/Icons/editBtnIcon.svg"
import PublishIcon from "../../Assets/SiteEditor/Icons/publishIcon.svg"
// import EditorLayout from '../../Layouts/EditorLayout'
import { fetchTemplateDataEDITOR } from '@/CommonFunctions/fetchTemplateData'
import { GET_TEMPLATE } from '@/store/reducers/websiteTemplate'
import { useDispatch, useSelector } from 'react-redux'
import useAppLocation from '@/CustomHooks/useLocation'
import GlobalStyle from '@/Themes/Eblouiussante/GlobalCss/GlobalStyles'
import useGlobalTheme from '@/CustomHooks/useGlobalTheme'
import useGlobalFonts from '@/CustomHooks/useGlobalFonts'
import { useRouter } from 'next/router'
import { getProductListData, publishSite } from '@/store/actions/siteEditor'
import useTemplateId from '@/CustomHooks/useTemplateId'
import Auth from '@/Classes/Auth'
import OnboardChildComponent from './ChildComponent'
import PublishFlow from '@/Layouts/EditorLayout/Components/PublishFlow'
import FontLoader from '@/CommonComponents/FontLoader'

const OnboardPreview = ({ editor }) => {
  const dispatch = useDispatch();
  const location = useRouter();
  
  const settingRef = useRef(null);
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

  const InitialFunction = async () => {
    if (templateId !== "[...index]" && templateId) {
      let authro = Auth.token();
      let hash = Auth.hash();
      let data = await fetchTemplateDataEDITOR(getCurrentLocation() === "/" ? "home" : getCurrentLocation(), templateId, authro, hash);
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
  const handleRoute = (item)=>{
    window.location.href=item
  }
  const ActionHandleOpen = async () => {
    settingRef.current.open();

    dispatch(publishSite(
      {
        data:
        {
          "template":templateId, "business": data?.business
        }
      }
    ));
  };

  const ActionHandleClose = () => {
    settingRef.current.close();
  };
  return (
    <React.Fragment>
      <GlobalStyle item={editor ? themeVariable : ""} />
 <FontLoader headerFont={data?.template?.draftfontfamily?.header} paragraphFont={data?.template?.draftfontfamily?.paragraph}/>
      
      {
       data&&data?.data?.length&&   
      <div className={styles.childWrapper}>
            <div className={styles.goToDashBoardWrapper}>
              <button className={styles.goToDashBoardBtn} onClick={()=>handleRoute("https://manage.webneed.com/")}>
                <GraphIcon />
                Go to Dashboard
              </button>
              <div className={styles.goToDashBoardRightContent}>
                <button className={styles.goToDashBoardPublish}onClick={()=>ActionHandleOpen()}>
                  <PublishIcon />
                  Publish
                </button>
                <button className={styles.goToDashBoardEditBtn} onClick={()=>handleRoute(`https://webwiz.webneed.com/editor/${templateId}/home`)}>
                  <EditBtnIcon />
                  Edit Site
                </button>
              </div>
            </div>
            <OnboardChildComponent />
           </div>
      }
      <PublishFlow ModalsRef={settingRef} onClose={ActionHandleClose} />
    </React.Fragment>
  )
}
export default OnboardPreview