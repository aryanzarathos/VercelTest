import { Fragment, useState, useEffect, useRef } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import styles from "./layout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllSectionData, getSitePages } from "../../store/actions/siteEditor";
import useTemplateId from "@/CustomHooks/useTemplateId";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
const LeftSidebar = dynamic(() => import("./Components/LeftSidebar/LeftSidebar"), { ssr: false })
const RightSidebar = dynamic(() => import("./Components/RightSidebar/RightSidebar"), { ssr: false })

const EditorLayout = ({ children }) => {
  const templateId = useTemplateId();
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const { active } = useSelector((state) => state.editor.rightSidebar);
  const { leftSidebarActive } = useSelector((state) => state.editor.leftSidebar)
  const [previewOrientation, setPreviewOrientation] = useState("")

  const deviceOrientation = (v) => {
    setPreviewOrientation(v);
  }
  useEffect(() => {
    dispatch(getAllSectionData())
  }, [])

  useEffect(() => {
    if (templateId) {
      dispatch(getSitePages({ template: templateId, access_id: [] }))
    }
  }, [templateId, leftSidebarActive])

  return (
    <Fragment>
      <Header targetSelector={targetRef} deviceOrientation={() => deviceOrientation()} />
      <div className={`${styles.container_fluid} ${styles.MainContainer}`}>
        <div className={styles.SectionInner}>
          <Sidebar targetSelector={targetRef} />

          <LeftSidebar leftSidebarActive={leftSidebarActive} />

          <div
            ref={targetRef}
            className={`${styles.ContentInner}
            ${ AppLinkUrl.isEditor() ? styles.backgroundColor : ""}
            ${active === true && styles.Open} 
            ${previewOrientation === "DesktopPreview" ? styles.DesktopPreview
                : previewOrientation === "TabletPreview" ? styles.TabletPreview
                  : previewOrientation === "MobilePreview" ? styles.MobilePreview : ""}`}
                
          >
            <Fragment>{children}</Fragment>
          </div>
          <RightSidebar active={active} />

        </div>
      </div>
    </Fragment>
  );
};
export default EditorLayout;
