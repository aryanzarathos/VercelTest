import React, { useEffect, useState } from "react";
import styles from "./SectionPages.module.scss";
import data from "../leftPanel.json";
import { OPEN_LEFTSIDEBAR } from "../../../../../store/reducers/SiteEditor";
import { useDispatch, useSelector } from "react-redux";

const SitePages = () => {
  const [activeList, setActiveList] = useState("");
  const { sitePages } = useSelector((state) => {
    return {
      sitePages: state.editor.getSitePages.data,
    };
  });
  const { leftSidebarActive,level1Active } = useSelector((state) => state.editor.leftSidebar);
  const dispatch = useDispatch();

  const handleList = (item, index) => {
    setActiveList(item._id);
    dispatch(
      OPEN_LEFTSIDEBAR({
        level1Active: true,
        level2Active: false,
        IndexLevel2: "",
        level1Data: item,
        IndexLevel1: index,
        level1Heading: item.category_name,
        level1Component: item.category_name,
      })
    );
  };
  const handleNavigation = (item, index) => {
    setActiveList(item._id);
    dispatch(
      OPEN_LEFTSIDEBAR({
        level1Active: true,
        level2Active: false,
        IndexLevel2: "",
        level1Data: item.data,
        IndexLevel1: index,
        level1Heading: item.nav_name,
        level1Component: "NavigationPages",
      })
    );
  }
  useEffect(() => {
    if (leftSidebarActive === false || level1Active === false) {
      setActiveList('');
    }
  }, [leftSidebarActive,level1Active])
  return (
    <div className={styles.Main_ListWrap}>
      <ul className={styles.ListWrap}>
        {sitePages?.navigation?.length > 0 ?
          sitePages?.navigation?.map((item, key) => (
            <li
              key={key}
              className={`${styles.List} ${activeList === item._id ? `${styles.Active}` : ""
                }`}
              onClick={() => handleNavigation(item, key)}
            >
              <div className={styles.HeadingWrap}>
                <i className={styles.Navigation}></i>
                <h3 className={styles.Title}>Navigation Menu</h3>
              </div>
              <button type="button" className={styles.RightArrow}>
                &#10095;
              </button>
            </li>
          )) : ""}
        {sitePages?.sitePages?.length ?
          sitePages?.sitePages?.map((item, key) => (
            <li
              key={key}
              className={`${styles.List} ${activeList === item._id ? `${styles.Active}` : ""
                }`}
              onClick={() => handleList(item, key)}
            >
              <div className={styles.HeadingWrap}>
                <i className={styles[item.icon]}></i>
                <h3 className={styles.Title}>{item.category_name}</h3>
              </div>
              <button type="button" className={styles.RightArrow}>
                &#10095;
              </button>
            </li>
          )) : ""}
      </ul>
    </div>
  );
};

export default SitePages;
