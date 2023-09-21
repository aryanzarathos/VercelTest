import React, { useRef, useState } from 'react'
import styles from "./header.module.scss";
// import AppLink from "../../../../Common/AppLink";
import DeviceOrientation from './Components/deviceOrientation';
import SetResetTool from './Components/SetResetTool';
import dynamic from 'next/dynamic';
import PublishFlow from './Components/PublishFlow';
import { useDispatch, useSelector } from 'react-redux';
import { publishSite } from '@/store/actions/siteEditor';
import { Router, useRouter } from 'next/router';
import useTemplateId from '@/CustomHooks/useTemplateId';
import html2canvas from 'html2canvas';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import Encryption from '@/Classes/Edneedapi_key';
import Request from '@/Classes/Request';
import uploadScreenshotToS3 from '@/CommonComponents/TakeScreenShot/screenshotUtility';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const Logo = dynamic(() => import("../../Assets/SiteEditor/Icons/webneed-logo.svg"), { ssr: false })
const PageListDropdown = dynamic(() => import("../EditorLayout/Components/pageListDropdown"), { ssr: false })

const Header = ({ deviceOrientation, targetSelector }) => {
  const router = useRouter();
  const settingRef = useRef(null);
  const dispatch = useDispatch();
  const templateId = useTemplateId();
  const user = useSelector((state) => state.user);
  const { getTemplateData } = useSelector((state) => {
    return {
      getTemplateData: state.websiteTemplate.getTemplate.data,
    }
  })

  const ActionHandleOpen = async () => {
    settingRef.current.open();
    dispatch(publishSite(
      {
        data:
        {
          "template": getTemplateData?.template?._id, "business": getTemplateData?.business
        }, screenshotData: {

          "template": getTemplateData?.template?._id,
          "websiteUrl": "https://mysitehwz2n.gurneed.com",
          // AppLinkUrl.createSubdomain(user.user_institute_institute_subdomain),
          "screenshotPath": "screenshot",
          "user": user._id,
          "business": user.user_business

        }
      }
    ));


  };
  const ActionHandleClose = () => {
    settingRef.current.close();
  };


  const redirectToDashboard = async () => {
    window.location.href = 'https://manage.webneed.com/';
  };

  return (
    <React.Fragment>
      <header className={styles.Header}>
        <div className={styles.container_fluid}>
          <nav>
            <button onClick={redirectToDashboard} className={styles.Logo}>
              <Logo alt="webneed" loading="lazy" />
            </button>
            {
              // <div className={styles.Upgrade}>
              //   <a href="#" className={styles.UpgradeButton}>Upgrade</a>
              // </div>
            }
            <div className={styles?.Message}>
              <p>All changes are  autosaved</p>
            </div>
            <div className={styles.PageList}>
              <PageListDropdown />
            </div>
            {
              // <div className={styles.DeviceOrientation}>

              // <DeviceOrientation deviceOrientation={deviceOrientation} />
              // </div>
            }
            {
              //   <div className={styles.SetResetTool}> 
              //   <SetResetTool />
              // </div>
            }
            <div className={styles.ActionGroupButton}>
              <a href={`https://preview.webneed.com/preview/${templateId}/home`} target='_blank' className={styles.CustomButton}>Preview</a>
              <button className="button button-primary btn-xs" type='button' onClick={ActionHandleOpen}>Publish</button>
            </div>
          </nav>
        </div>
      </header>
      <PublishFlow ModalsRef={settingRef} onClose={ActionHandleClose} />
    </React.Fragment>
  )
}

export default Header