import React, { useRef, useState } from 'react'
import styles from "./sidebar.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_LEFTSIDEBAR, OPEN_RIGHTSIDEBAR, UPDATE_LIST } from "../../store/reducers/SiteEditor";
import { useRouter } from 'next/router';
import html2canvas from 'html2canvas';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import Encryption from '@/Classes/Edneedapi_key';
import Request from '@/Classes/Request';
import useTemplateId from '@/CustomHooks/useTemplateId';

const Sidebar = ({ ActiveSidebarHandle, targetSelector, ActiveLeftSidebarHandle, manageActive, ActiveSideBarList }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const templateId = useTemplateId();
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.websiteTemplate.getTemplate.data);

  const { heading, RenderComponent, active, RenderItemList, activeItemList } = useSelector((state) => state.editor.rightSidebar)
  const { RenderLeftComponent } = useSelector((state) => state.editor.leftSidebar)

  const RightSidebarHandle = (val, heading) => {
    dispatch(OPEN_RIGHTSIDEBAR({ heading: heading, activeItemList: true, RenderItemList: val, active: true, }))
  }
  const RightSidebarThemeHandle = (val, heading) => {
    dispatch(OPEN_RIGHTSIDEBAR({ heading: heading, activeItemList: false, RenderItemList: val, active: true, RenderComponent: "ThemeFont" }))
  }
  const LeftSideBarHandle = (val, heading) => {
    dispatch(OPEN_LEFTSIDEBAR({ leftSidebarActive: true, level1Active: false, IndexLevel2: "", heading: heading, RenderLeftComponent: val }))
  }

  // const daubleClickHandle = (type) => {
  //   if (type === "SectionPages") {
  //     dispatch(OPEN_LEFTSIDEBAR({
  //       leftSidebarActive: false,
  //       level1Active: false,
  //       level2Active: false
  //     }))
  //   } else if (type === "SitePages") {
  //     dispatch(OPEN_LEFTSIDEBAR({
  //       leftSidebarActive: false,
  //       level1Active: false,
  //       level2Active: false
  //     }))
  //   } else if (type === "ActiveColorPalet") {
  //     dispatch(OPEN_RIGHTSIDEBAR({
  //       activeItemList: false
  //     }))
  //   } else if (type === "HeaderFooter") {
  //     dispatch(OPEN_RIGHTSIDEBAR({
  //       activeItemList: false
  //     }))
  //   }
  // }


  // const redirectToDashboard = () => {
  //   // Redirect https://manage.nanakway.com/ this router
  //   // router.push('https://manage.nanakway.com/');
  // };

  const UploadRequest = new Request();

  const redirectToDashboard = async () => {
    const targetElement = targetSelector.current;
    window.open('https://manage.webneed.com/', "_blank")
    if (targetElement) {
      try {
        const canvas = await html2canvas(targetElement, { useCORS: true });
        canvas.toBlob(async (blob) => {
          const blobData = new Blob([blob], { type: 'image/png' }); // Create a Blob from the canvas blob

          const s3 = new S3Client({
            region: process.env.NEXT_PUBLIC_REGION,
            credentials: {
              accessKeyId: Encryption.DecryptAccessId(),
              secretAccessKey: Encryption.DecryptAccessKey(),
            },
          });

          let dataNow = Date.now().toString();
          let bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;

          let fileName = `${process.env.NEXT_PUBLIC_S3_URL}/${user.user_business}/${user._id}/${dataNow}screenshot.png`;
          let keyCheck = `${user.user_business}/${user._id}/${dataNow}screenshot.png`;

          const params = {
            Bucket: bucketName,
            Key: keyCheck,
            Body: blobData,
          };

          try {
            const command = new PutObjectCommand(params);
            await s3.send(command);

            const image = {
              src: `${fileName}`,
              business: user.user_business,
              owner: user._id,
              title: "screenshot",
              alt: "",
              size: blobData.size,
              key: params.Key,
              type: "img",
              desc: "",
            };
            // console.log(image, process.env.NEXT_PUBLIC_S3_URL, "PutObjectCommandPutObjectCommand")

            let payload = {
              template: templateId,
              templateImg: image.src
            }
            await UploadRequest.patch(
              UploadRequest.url(
                `/draft-site-editor/updateDrafttemplate/${templateId}`,
                "commonservices"
              ),
              payload,
              (success) => {
                success.data;
                // router.push('https://manage.nanakway.com/');
              },
              (error) => {
                dispatch(setError("Error in upload."));
              }
            );
          } catch (error) {
            console.error("Error uploading to S3:", error);
          }
        }, 'image/png'); // Specify the image format here
      } catch (error) {
        console.error("Error creating screenshot:", error);
      }
    }
  };


  return (
    <React.Fragment>
      <aside className={styles.sidebar}>
        <div className={styles.AsideInnerWrap}>
          <div className={styles.MenuItemWrap}>
            <button type='button' className={`${styles.MenuItem} ${RenderLeftComponent === "SectionPages" ? `${styles.Active}` : ""}`} onClick={() => LeftSideBarHandle("SectionPages", "Add Section")}>
              <i className={`${styles.MenuIcon} ${styles.AddPage}`}></i>
            </button>
            <button type='button' className={`${styles.MenuItem} ${RenderLeftComponent === "SitePages" ? `${styles.Active}` : ""}`} onClick={() => LeftSideBarHandle("SitePages", "Site Pages")} >
              <i className={`${styles.MenuIcon} ${styles.Pages}`}></i>
            </button>
            <button type='button' className={`${styles.MenuItem} ${RenderItemList === "ActiveColorPalet" ? `${styles.Active}` : ""}`}
              onClick={() => RightSidebarThemeHandle("ActiveColorPalet", "Theme & Fonts")}>
              <i className={`${styles.MenuIcon} ${styles.ColorPalette}`}></i>
            </button>
            <button type='button' className={`${styles.MenuItem} ${RenderItemList === "HeaderFooter" ? `${styles.Active}` : ""}`} onClick={() => RightSidebarHandle("HeaderFooter", "Header & Footer")}>
              <i className={`${styles.MenuIcon} ${styles.HeaderFooter}`}></i>
            </button>
            {

              // <button type='button' className={`${styles.MenuItem}`}>
              //   <i className={`${styles.MenuIcon} ${styles.Dashboard}`}></i>
              // </button>
            }
            {
              // <button type='button' className={`${styles.MenuItem}`}>
              //   <i className={`${styles.MenuIcon} ${styles.Cart}`}></i>
              // </button>
            }
          </div>
          <div className={styles.MenuItemWrap}>
            <button type='button' className={styles.MenuItem} onClick={() => redirectToDashboard()}>
              <i className={`${styles.MenuIcon} ${styles.Support}`}></i>
            </button>
          </div>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Sidebar