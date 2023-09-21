import React, { useRef, useState } from "react";
import Modals from "../../../../CommonComponents/Modals/index";
import ModalHeader from "../../../../CommonComponents/Modals/ModalsHeader";
import ModalBody from "../../../../CommonComponents/Modals/ModalsBody";
import Tabs from "../../../../CommonComponents/Tabs/Tabs";
import styles from "./addExternalPages.module.scss";
import RenderTabs from "../../../../CommonComponents/Tabs/RenderTabs";
import TabTemplate from "./TabTemplate/TabTemplate";
import DynamicPage from "./DynamicPages/DynamicPage";
import ExternalPagesTab from "./ExternalPagesTab/ExternalPagesTab";
import Temp from "../../../../Assets/SiteEditor/images/AddExternalPages/temp.png";
import Temp1 from "../../../../Assets/SiteEditor/images/AddExternalPages/temp1.png";
import Temp2 from "../../../../Assets/SiteEditor/images/AddExternalPages/temp2.png";
import DyanamicPageImg from "../../../../Assets/SiteEditor/images/AddExternalPages/dynamicPage.png";
import GeneralPages from "./GeneralPages/GeneralPages.jsx";
import RenderComponents from "./RenderComponent";
import RenamePages from "../ManagePages/renamePages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNewEmptyPage, addNewPage, getAddPagesList, getAllPagesData } from "../../../../store/actions/siteEditor";
import useTemplateId from "../../../../CustomHooks/useTemplateId";
import useAppNavigate from "../../../../CustomHooks/useAppNavigate";
import { PAGE_DROPDOWN, RESET_ADD_PAGE_DATA } from "@/store/reducers/SiteEditor";
// import DynamicSection from './DynamicPages/DynamicSection';
const AddExternalPages = ({ Ref, onclose }) => {
  const dispatch = useDispatch();
  const navigate = useAppNavigate()
  const closeModal = () => {
    onclose();
  };
  const templateId = useTemplateId()
  const { user, addNewPageData, addNewEmptyPageData, addNewPageSuccess, addNewEmptyPageSuccess } = useSelector((state) => {
    return {
      user: state.user,
      addNewPageData: state.editor.addNewPage.data,
      addNewEmptyPageData: state.editor.addNewEmptyPage.data,
      addNewPageSuccess: state.editor.addNewPage.success,
      addNewEmptyPageSuccess: state.editor.addNewEmptyPage.success
    }
  })
  const { data, loading, success } = useSelector(
    (state) => state.editor.getAddPagesList
  );
  const renameRef = useRef();

  const [active, setActive] = useState(0);
  const [pages, setPages] = useState([])
  const dynamicPagesTabData = ["Shop", "Bookings", "Blogs"];

  const pageTempateData = [
    Temp,
    Temp1,
    Temp2,
    Temp,
    Temp1,
    Temp2,
    Temp,
    Temp1,
    Temp2,
  ];

  const dyamanicPagesData = [GeneralPages];

  const HandleTabs = (type, index) => {
    setActive(index);
  };

  const RenamePopupHandle = () => {
    renameRef.current.open();
    onclose();
  };
  const RenameClosePopupHandle = () => {
    renameRef.current.close();
  };
  useEffect(() => {
    let array = []
    if (success) {
      if (data?.length > 0) {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          array.push(element.page_type)
        }
      }
      setPages([...array])
    }
  }, [data, success])
  const handleAddVariation = (_id) => {
    renameRef?.current?.close()
    onclose();
    dispatch(addNewPage({ pageId: _id, template: templateId, business: user.user_business, owner: user._id }))
  }
  const handleAddNewPage = (pageName) => {
    renameRef?.current?.close()
    dispatch(addNewEmptyPage({ name: pageName, template: templateId, business: user.user_business, owner: user._id, category_name: "Dynamic Pages" }))
  }
  useEffect(() => {
    if (addNewEmptyPageSuccess) {
      if (addNewEmptyPageData) {
        navigate(`/${addNewEmptyPageData.page_slug}`, "", true)
        renameRef?.current?.close()
        dispatch(RESET_ADD_PAGE_DATA())
        dispatch(PAGE_DROPDOWN(false))
        dispatch(
          getAllPagesData({ data: { template: templateId, access_id: [] } })
        );
      }
    }
    if (addNewPageSuccess) {
      if (addNewPageData) {
        dispatch(PAGE_DROPDOWN(false))
        renameRef?.current?.close()
        dispatch(RESET_ADD_PAGE_DATA())
        navigate(`/${addNewPageData.page_slug}`, "", true)
        dispatch(
          getAllPagesData({ data: { template: templateId, access_id: [] } })
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addNewEmptyPage, addNewEmptyPageSuccess, addNewPage, addNewPageSuccess])
  useEffect(() => {
    dispatch(getAddPagesList({}));
  }, [dispatch]);
  return (
    <React.Fragment>
      <Modals
        ref={Ref}
        Position="top"
        ClosePopUp={() => closeModal()}
        ModalsSize={"modalXL"}
        className={"bgGray"}
      >
        <ModalHeader
          className={styles.addExternalModalHeader}
          title={"Add Page"}
        />
        <ModalBody className={styles.addExternalPagesModalBody}>
          <div className={styles.addExternalPagesContainer}>
            <div className={styles.addExterPagesTopSection}>
              <div className={styles.addExternalPagesLeftSide}>
                <Tabs
                  valueState={true}
                  activeTitle={(val, index) => HandleTabs(val, index)}
                  TabWrapperClass={`${styles.externalPageTabBtn}`}
                  TabButtonClass={`button btn-xs btn-oval ${styles.externalPagesTabButton}`}
                  ActiveTabClass={styles.Active}
                  tabs={pages}
                  clearState={true}
                  defaultValue={data[active]?.page_type}
                />
              </div>
              <div className={styles.addExternalPagesRightSide}>
                <button
                  className="button btn-xs btn-o-primary btn-oval"
                  onClick={RenamePopupHandle}
                >
                  + Add a Blank Page
                </button>
              </div>
            </div>
            <RenderComponents data={data[active]} addVariation={(_id) => handleAddVariation(_id)} />
          </div>
        </ModalBody>
      </Modals>

      <RenamePages ModalsRef={renameRef} onclose={RenameClosePopupHandle} addNewPage={(val) => handleAddNewPage(val)} />
    </React.Fragment>
  );
};

export default AddExternalPages;
