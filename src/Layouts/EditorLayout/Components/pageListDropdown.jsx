import React, { useEffect, useRef, useState } from "react";
import { useDetectOutsideClick } from "../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick";
import styles from "../header.module.scss";
import Dialog from "../../../CommonComponents/Dialog";
import DialogBody from "../../../CommonComponents/Dialog/DialogBody";
import AddExternalPages from "../../EditorLayout/Components/AddExternalPages/AddExternalPages";
import RenamePages from "./ManagePages/renamePages";
import DeletePages from "./ManagePages/DeletePages";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_LEFTSIDEBAR,
  PAGE_DROPDOWN,
} from "../../../store/reducers/SiteEditor";
import { getAllPagesData } from "../../../store/actions/siteEditor";
import AppLinkUrl from "../../../CommonComponents/AppLink/AppLinkUrl";
import useAppNavigate from "../../../CustomHooks/useAppNavigate";
import Data from "./LeftSidebar/leftPanel.json";
import useTemplateId from "../../../CustomHooks/useTemplateId";
import SeoSettingPages from "./LeftSidebar/PagesPopup/SeoPopup/seoSetting";
import useAppLocation from "@/CustomHooks/useLocation";
import { getGoogleFonts } from "@/store/actions/googleFonts";

const PageListDropdown = () => {
  const { pageDropdownActive } = useSelector((state) => state.editor);
  const { data } = useSelector((state) => state.editor.getAllPagesData);
  const dispatch = useDispatch();
  const templateId = useTemplateId();
  const [pathname] = useAppLocation();
  const DragMenuWrapRef = useRef(null);
  const navigate = useAppNavigate();
  const [pageName, setPageName] = useState("");

  const [dragMenuWrapActive, setDragMenuWrapActive] = useDetectOutsideClick(
    DragMenuWrapRef,
    false
  );
  const manageDragMenuWrapActive = () => {
    setDragMenuWrapActive(!dragMenuWrapActive);
  };

  const renamePagesRef = useRef(null);
  const deletePagesRef = useRef(null);

  const openRenamePages = () => {
    renamePagesRef.current.open();
  };

  const closeRenamePages = () => {
    renamePagesRef.current.close();
  };
  const openDeletePages = () => {
    deletePagesRef.current.open();
  };

  const closeDeletePages = () => {
    deletePagesRef.current.close();
  };
  const seoSettingPagesRef = useRef(null);

  const openSeoSettingPages = () => {
    seoSettingPagesRef.current.open();
  };

  const closeSeoSettingPages = () => {
    seoSettingPagesRef.current.close();
  };

  const openpopup = useRef(null);

  const openExternalPages = () => {
    openpopup.current.open();
  };

  const closeExternalPages = () => {
    openpopup.current.close();
  };
  const handleDropdown = () => {
    dispatch(getGoogleFonts());
    dispatch(PAGE_DROPDOWN(!pageDropdownActive));
  };

  const handleRoute = (slug, prefix, pageData) => {
    if (prefix === "collection") {
      navigate(`/collection/${slug}`, "", true);
    } else if (
      prefix === "category" ||
      prefix === "subcategory" ||
      prefix === "subsubcategory"
    ) {
      if (
        pageData?.page_category_id?.categorySlug &&
        pageData?.page_category_id?.subcategorySlug &&
        pageData?.page_category_id?.subsubcategorySlug
      ) {
        navigate(
          `/category/${pageData?.page_category_id?.categorySlug}/${pageData?.page_category_id?.subcategorySlug}/${pageData?.page_category_id?.subsubcategorySlug}`,
          "",
          true
        );
      } else if (
        pageData?.page_category_id?.categorySlug &&
        pageData?.page_category_id?.subcategorySlug
      ) {
        navigate(
          `/category/${pageData?.page_category_id?.categorySlug}/${pageData?.page_category_id?.subcategorySlug}`,
          "",
          true
        );
      } else {
        navigate(`/category/${slug}`, "", true);
      }
    } else {
      if (slug === "product-details") {
        navigate(`/${slug}/product`, "", true);
      } else if (slug === "service-details") {
        navigate(`/${slug}/service`, "", true);
      } else if (slug === "service-category-details") {
        navigate(`/${slug}/service-category`, "", true);
      } else if (slug === "service-collection-details") {
        navigate(`/${slug}/service-collection`, "", true);
      } else if (slug === "blog-details") {
        navigate(`/${slug}/details`, "", true);
      } else if (slug === "blogcategory") {
        navigate(`/${slug}/blogcategory`, "", true);
      } else {
        navigate(`/${slug}`, "", true);
      }
    }
    dispatch(PAGE_DROPDOWN(false));
  };
  const ManagePageHandle = (heading, val) => {
    dispatch(
      OPEN_LEFTSIDEBAR({
        leftSidebarActive: true,
        heading: heading,
        RenderLeftComponent: val,
      })
    );
  };

  useEffect(() => {
    if (templateId) {
      dispatch(
        getAllPagesData({ data: { template: templateId, access_id: [] } })
      );
    }
  }, [templateId]);

  useEffect(() => {
    if (data?.navigation?.length > 0) {
      if (data?.navigation[0]?.mergedArray?.length > 0) {
        let page = data?.navigation[0]?.mergedArray.find((item) =>
          pathname.includes(item?.page[0]?.page_slug)
        );
        setPageName(page?.page[0]?.page_name);
      }
    }
    if (data?.sitePages?.length > 0) {
      for (let index = 0; index < data?.sitePages.length; index++) {
        const element = data?.sitePages[index];
        for (let index = 0; index < element.pagemodels.length; index++) {
          const el = element.pagemodels[index];
          if (pathname.includes(el?.page_slug)) {
            setPageName(el?.page_name);
          }
        }
      }
    }
  }, [data?.navigation, data?.sitePages, pathname]);
  return (
    <React.Fragment>
      <div className={styles.PageListDropdownWrap}>
        <button
          type="button"
          className={`${pageDropdownActive && styles.Active} ${styles.PagesButton
            }`}
          onClick={() => handleDropdown()}
        >
          Pages: {pageName}
        </button>

        <React.Fragment>
          <div
            className={`${styles.PageListDropdownCustom} ${pageDropdownActive && styles.Expend_Active
              }`}
          >
            <div className={styles.PageListDropdownItemHead}>
              <h4>Site Pages </h4>
              <button
                type="button"
                onClick={handleDropdown}
                className={styles.CloseButton}
              >
                &#10006;
              </button>
            </div>

            <div className={styles.PageListDropdownBodyWrapper}>
              <ul className={styles.PagesListDropdownBody}>
                {data?.navigation?.length > 0 &&
                  data?.navigation?.map((item, key) => (
                    <li key={key}>
                      <h5 className={styles.heading}>Navigation Menu</h5>
                      {item.mergedArray.length > 0 &&
                        item.mergedArray.map((subItem, subKey) => (
                          <ul
                            key={subKey}
                            className={styles.PageListDropdownItemUI}
                          >
                            <li
                              onClick={() =>
                                handleRoute(
                                  subItem?.page[0]?.page_slug,
                                  subItem?.page[0]?.prefix,
                                  subItem?.page[0]
                                )
                              }
                            >
                              {subItem?.page[0]?.page_name}
                            </li>
                          </ul>
                        ))}
                    </li>
                  ))}
                {data?.sitePages?.length > 0 &&
                  data?.sitePages.map((item, key) => (
                    <li key={key}>
                      <h5 className={styles.heading}>{item?.category_name}</h5>
                      {item.pagemodels.length > 0 &&
                        item.pagemodels.map((subItem, subKey) => (
                          <ul
                            key={subKey}
                            className={styles.PageListDropdownItemUI}
                          >
                            <li
                              onClick={() =>
                                handleRoute(
                                  subItem.page_slug,
                                  subItem?.prefix,
                                  subItem
                                )
                              }
                            >
                              {subItem?.page_name}
                            </li>
                          </ul>
                        ))}
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.PagesListDropdownFooter}>
              <button
                type="button"
                onClick={() => ManagePageHandle("Site Pages", "SitePages")}
              >
                Manage Pages
              </button>
            </div>

            {
              // <ul className={styles.PageListDropdown}>
              //   <li className={styles.PageListDropdownItemBody}>
              //     <ul className={styles.PageListDropdownItemUI}>
              //       {
              //         data.length > 0 ?
              //           data.map((item, key) => {
              //             return (
              //               <li className={styles.Active} key={key} onClick={() => handleRoute(item.page_slug)}>
              //                 <div className={styles.DragIcon}>
              //                   <DragIcon src={DragIcon} alt="Drag" loading="lazy" />
              //                 </div>
              //                 <h4>{item?.page_name}</h4>
              //               </li>
              //             )
              //           }) : ""
              //       }
              //     </ul>
              //     <button type='button' className={styles.AddPageListButton} onClick={openExternalPages}>&#43;</button>
              //     <AddExternalPages openpopup={openpopup} onclose={closeExternalPages} />
              //   </li>
              // </ul>
            }
          </div>
          <RenamePages ModalsRef={renamePagesRef} onclose={closeRenamePages} />
          <DeletePages ModalsRef={deletePagesRef} onclose={closeDeletePages} />
          <SeoSettingPages
            ModalsRef={seoSettingPagesRef}
            onclose={closeSeoSettingPages}
          />
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default PageListDropdown;
