import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown.module.scss";
import SecondLevel from "../leftPanel.json";
import { OPEN_LEFTSIDEBAR, SELECT_OPTION } from "../../../../../store/reducers/SiteEditor";
import { addSection } from "../../../../../store/actions/websiteTemplate";
import useTemplateId from "../../../../../CustomHooks/useTemplateId";
import { RESET_ADD_SECTION } from "@/store/reducers/websiteTemplate";

const LevelTwoDropdown = () => {
  const dispatch = useDispatch();
  const templateId = useTemplateId()
  const {
    level2Active,
    level2Component,
    level2Data,
    IndexLevel2,
    IndexLevel1,
    level2Heading,
  } = useSelector((state) => state.editor.leftSidebar);
  const { user, templateData, mainContainerIndex, addSectionTo, addSectionSuccess, addSectionData } = useSelector((state) => {
    return {
      user: state.user,
      templateData: state.websiteTemplate.getTemplate.data,
      mainContainerIndex: state.editor.selectedIndexAndId.mainContainerIndex,
      addSectionTo: state.editor.selectedIndexAndId.addSectionTo,
      addSectionSuccess: state.websiteTemplate.addSection.success,
      addSectionData: state.websiteTemplate.addSection.data,
    };
  });
  const handleState = (_id) => {
    dispatch(
      addSection({
        variationId: _id,
        templateId: templateId,
        pageId: templateData._id,
        position: addSectionTo === "upper" ? mainContainerIndex === 0 ? 0 : mainContainerIndex - 1 : mainContainerIndex + 1,
        business: user.user_business,
        owner: user._id,
      })
    );
    dispatch(OPEN_LEFTSIDEBAR({ level2Active: false, leftSidebarActive: false, level1Active: false }));
  };

  useEffect(() => {
    if (addSectionSuccess && addSectionData && addSectionData?._id) {
      const element = document.getElementById(addSectionData?._id);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
      // dispatch(SELECT_OPTION({ activeMainContainer: addSectionData._id }))
      if (addSectionTo === "upper") {
        dispatch(SELECT_OPTION({ activeMainContainer: addSectionData._id, sectionIndex: 0, mainContainerIndex: mainContainerIndex === 0 ? 0 : mainContainerIndex - 1 }))

      } else {
        dispatch(SELECT_OPTION({ activeMainContainer: addSectionData._id, sectionIndex: 0, mainContainerIndex: templateData?.data?.length === 1 ? 0 : mainContainerIndex + 1 }))
      }
      dispatch(RESET_ADD_SECTION());
    }
  }, [dispatch, addSectionSuccess, addSectionData._id, addSectionData, addSectionTo, mainContainerIndex, templateData?.data?.length])

  return (
    <aside className={`${styles.SecondLeftAside} ${level2Active ? `${styles.Active_LeftSidebar}` : ""}`}>
      <div className={styles.SecondFirstLeftAsideInnerWrap}>
        <ul className={`${styles.ListWrap}  ${styles.ActivePagesList}`}>
          {level2Data &&
            level2Data?.Variation?.length > 0 &&
            level2Data?.Variation?.map((item, key) => (
              <li key={key} className={`${styles.PagesList}`}>
                <div className={styles.scetionImages}>
                  <Image
                    className={styles.Images}
                    src={item.img}
                    alt="product images"
                    layout="fill"
                  />
                  <button
                    className={styles.addButton}
                    onClick={() => handleState(item._id)}
                  >
                    <i className={styles.AddIcon}>&#8853;</i> Add Section
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default LevelTwoDropdown;
