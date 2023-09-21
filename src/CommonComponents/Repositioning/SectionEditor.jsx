import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddImgIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-img-edit.svg";
import CopyIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-duplicate.svg";
import SettingIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-setting.svg";
import ArrowDownIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-down-arrow.svg";
import ArrowTopIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-top-arrow.svg";
import DeleteIcon from "../../Assets/SiteEditor/Icons/Reposition//Icon-delete.svg";
import BannerSettingDropdown from "./SectionSettingDropdown/BannerSettingDropdown";
import { useDispatch, useSelector } from "react-redux";

import PlusIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-Plus-Reposition.svg";
import {
  deleteMainContainer,
  duplicateMainContainer,
  repositionMainContainer,
} from "../../store/actions/websiteTemplate";
import {
  OPEN_LEFTSIDEBAR,
  SELECT_OPTION,
} from "../../store/reducers/SiteEditor";
import ConfirmationPopup from "../ConfirmationPopup";
import BannerEditorDropdown from "./SectionEditorDropdown";
import AltTextPopup from "../ALTTextPopup";
import {
  RepositionContainer, ButtonGrouopWrapper, EditButton, ManageSetting, Button, AddIconTop,
  AddIconBottom, TextEditButton, EditorToolWrapper, GallerySettingWrap, Widgetmenu, AddBannerIcon
  , DuplicateIcon, SettingIconWrap, DownArrowWrap, TopArrowWrap, DeleteImgIcon, ParentElement, ManageSettingWrap, RepostionWrapper
} from "./SectionEditorStyle"
import { useOutsideClick } from "rooks";
import { isBrowser } from "../../CommonFunctions/isBrowser";
import AppLinkUrl from "../AppLink/AppLinkUrl";
import { RESET_DUPLICATE_CONTAINER } from "@/store/reducers/websiteTemplate";


const SectionEditor = ({
  children,
  itemIndex,
  sectionData,
  changeButton,
  editButton,
  widgetMenu,
  upperAdd,
  lowerAdd,
  sectionEditor,
  onMouseOver,
  variationName,
  sectionType,
}) => {
  const addAddressRef = useRef(null);
  const AltTextRef = useRef(null);
  const categoryRef = useRef(null);
  const appearanceRef = useRef(null);
  const settingsRef = useRef(null);
  const sectionRef = useRef(null);
  const deleteSectionRef = useRef(null);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [sectionSetting, setSectionSetting] = useState(false);
  const [BannderEdit, setBannderEdit] = useState(false);
  const [sectionDataSetting, setSectionDataSetting] = useState(false);
  const { data, eventData, modalState, duplicateSuccess, duplicateSuccessData, repositionSuccess, repositionData } = useSelector((state) => {
    return {
      data: state.websiteTemplate.getTemplate.data,
      eventData: state.editor.selectedIndexAndId,
      modalState: state.commonStates.modalState,
      duplicateSuccess: state.websiteTemplate.duplicateMainContainer.success,
      duplicateSuccessData: state.websiteTemplate.duplicateMainContainer.data,
      repositionSuccess: state.websiteTemplate.repositionMainContainer.success,
      repositionData: state.websiteTemplate.repositionMainContainer.data
    };
  });
  if (typeof children === "function") {
    children(ActiveState);
  }

  const handleActive = (index) => {
    setActive(index);
    dispatch(SELECT_OPTION({ addSectionTo: index }));
    dispatch(
      OPEN_LEFTSIDEBAR({
        leftSidebarActive: true,
        level1Active: false,
        IndexLevel2: "",
        heading: "Add Section",
        RenderLeftComponent: "SectionPages",
      })
    );
    // addAddressRef.current.open();
  };

  const OpenThemehandle = () => {
    setBannderEdit(!BannderEdit);
    setSectionSetting(false);
  };
  const OpenThemeSettinghandle = () => {
    setSectionSetting(!sectionSetting);
    setBannderEdit(false);
  };

  const [isHovering, setIsHovering] = useState(false);
  const [isActiveSection, setIsActiveSection] = useState(-1);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }
  const reposition = (positionTo) => {
    const copyListItems = [...data.data];
    const dragItemContent = copyListItems[itemIndex];
    if (positionTo === "down") {
      if ((data?.data?.length - 1) !== itemIndex) {
        copyListItems.splice(itemIndex, 1);
        copyListItems.splice(itemIndex + 1, 0, dragItemContent);
        dispatch(
          repositionMainContainer({
            pageId: sectionData?.page_id,
            position: positionTo === "down" ? itemIndex + 1 : itemIndex - 1,
            mainContainerId: sectionData?._id,
            data: copyListItems,
          })
        );
        dispatch(SELECT_OPTION({ mainContainerIndex: itemIndex + 1 }))
      }
    } else {
      if (itemIndex !== 0) {
        copyListItems.splice(itemIndex, 1);
        copyListItems.splice(itemIndex - 1, 0, dragItemContent);
        dispatch(
          repositionMainContainer({
            pageId: sectionData?.page_id,
            position: positionTo === "down" ? itemIndex + 1 : itemIndex - 1,
            mainContainerId: sectionData?._id,
            data: copyListItems,
          })
        );
        dispatch(SELECT_OPTION({ mainContainerIndex: itemIndex - 1 }))
      }
    }
    // dispatch(
    //   repositionMainContainer({
    //     pageId: sectionData?.page_id,
    //     position: positionTo === "down" ? itemIndex + 1 : itemIndex - 1,
    //     mainContainerId: sectionData?._id,
    //     data: copyListItems,
    //   })
    // );

  };
  const deleteSection = () => {
    deleteSectionRef.current.open();
  };

  const confirmDeleteItem = () => {
    dispatch(
      deleteMainContainer({
        pageId: sectionData?.page_id,
        mainContainerId: sectionData?._id,
      })
    );
    deleteSectionRef?.current?.close();
  };
  const CloseDeleteSection = () => {
    deleteSectionRef?.current?.close();
  };
  const duplicateSection = () => {
    dispatch(
      duplicateMainContainer({
        pageId: sectionData?.page_id,
        position: itemIndex + 1,
        mainContainerId: sectionData?._id,
      })
    );
  };
  const openAltTexthandle = () => {
    AltTextRef.current.open()
  }
  const closeAltTexthandle = () => {
    AltTextRef.current.close()
  }

  useEffect(() => {
    if (duplicateSuccess && duplicateSuccessData._id) {
      const element = document.getElementById(duplicateSuccessData._id);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
      dispatch(RESET_DUPLICATE_CONTAINER())
      dispatch(SELECT_OPTION({ activeMainContainer: duplicateSuccessData._id, mainContainerIndex: eventData?.mainContainerIndex + 1 })
      );
    }
  }, [dispatch, duplicateSuccess, duplicateSuccessData._id, eventData?.mainContainerIndex])

  useEffect(() => {
    if (repositionSuccess) {
      const element = document.getElementById(eventData?.activeMainContainer);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
      dispatch(RESET_DUPLICATE_CONTAINER())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventData?.activeMainContainer, repositionSuccess])

  const ActiveSectionHandle = (id) => {
    if (eventData?.activeMainContainer !== sectionData?._id) {
      dispatch(
        SELECT_OPTION({
          mainContainerIndex: itemIndex,
          activeMainContainer: id,
          mainContainerId: sectionData?._id,
          mainContainerData: sectionData,
          pageId: sectionData?.page_id,
        })
      );

    }
  };
  useOutsideClick(appearanceRef, () => {
    if (BannderEdit && !modalState) setBannderEdit(false);
  });
  useOutsideClick(settingsRef, () => {
    if (sectionSetting) setSectionSetting(false);
  });

  const SectionDataHandle = () => {
    setSectionDataSetting(!sectionDataSetting)
  }

  return sectionEditor && isBrowser() && AppLinkUrl.isEditor() ? (
    <React.Fragment>
      <RepostionWrapper className="repostionWrapperClass">
        <ParentElement
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          onClick={() => ActiveSectionHandle(sectionData?._id)}
          className={
            eventData?.activeMainContainer === sectionData?._id
              ? "isSectionActive"
              : isHovering
                ? `isSectionHover`
                : ""
          }
        >
          <RepositionContainer
            className={
              eventData?.activeMainContainer === sectionData?._id
                ? "Active_Selection"
                : isHovering
                  ? `isHover`
                  : ""
            }
          >
            {eventData?.activeMainContainer === sectionData?._id && upperAdd && (
              <AddIconTop onClick={() => handleActive("upper")}>
                <Button>
                  <PlusIcon />
                </Button>
              </AddIconTop>
            )}

            {
              //   eventData?.activeMainContainer === sectionData?._id && <ButtonGrouopWrapper>
              //   {
              //     <EditButton>Manage Categories</EditButton>}
              //   <ManageSettingWrap>
              //     <ManageSetting
              //       onClick={SectionDataHandle}
              //     >
              //       <SettingIcon />
              //     </ManageSetting>
              //     {
              //       sectionDataSetting && (
              //         <CategoryCollectionDropdown />
              //       )
              //     }
              //   </ManageSettingWrap>
              // </ButtonGrouopWrapper>
            }

            {!eventData.buttonActive && !eventData.textActive && !eventData.sectionActive && eventData?.activeMainContainer === sectionData?._id && widgetMenu && (
              <EditorToolWrapper>
                {/* <TextEditButton onClick={openAltTexthandle}>Edit Alt Text</TextEditButton> */}
                <GallerySettingWrap>
                  <AddBannerIcon
                    className={BannderEdit ? "active" : ""}
                    onClick={() => OpenThemehandle()}
                  >
                    <AddImgIcon />
                  </AddBannerIcon>
                  {BannderEdit && (
                    <BannerEditorDropdown
                      ref={appearanceRef}
                      CloseSettingHandle={() => setBannderEdit(false)}
                      sectionType={sectionType}
                      variationName={variationName}
                    />

                  )}
                  <SettingIconWrap
                    className={sectionSetting ? "active" : ""}
                    onClick={() => OpenThemeSettinghandle()}
                  >
                    <SettingIcon />
                  </SettingIconWrap>
                  {sectionSetting && (
                    <BannerSettingDropdown
                      setSectionSetting={setSectionSetting}
                      ref={settingsRef}
                      sectionType={sectionType}
                      variationName={variationName}
                    />

                  )}
                </GallerySettingWrap>
                <Widgetmenu>
                  <DownArrowWrap onClick={() => reposition("down")} className={(data?.data?.length - 1) === itemIndex && "disabled"}>
                    <ArrowDownIcon />
                  </DownArrowWrap>
                  <TopArrowWrap
                    onClick={() => reposition("up")}
                    className={itemIndex === 0 && "disabled"}>
                    <ArrowTopIcon />
                  </TopArrowWrap>
                  <DuplicateIcon onClick={() => duplicateSection()}>
                    <CopyIcon />
                  </DuplicateIcon>
                  <DeleteImgIcon onClick={() => deleteSection()}>
                    <DeleteIcon />
                  </DeleteImgIcon>
                </Widgetmenu>
              </EditorToolWrapper>
            )}
            {(eventData?.activeMainContainer === sectionData?._id) && lowerAdd && (
              <AddIconBottom onClick={() => handleActive("lower")}>
                <Button>
                  <PlusIcon />
                </Button>
              </AddIconBottom>
            )}
          </RepositionContainer>
          {children}
        </ParentElement>
        {
          <ConfirmationPopup
            title="Delete Section?"
            subTitle="Are you sure you want to delete this section?"
            ref={deleteSectionRef}
            onclose={CloseDeleteSection}
            confirmDeleteItem={confirmDeleteItem}
            buttonTitle1="No"
            buttonTitle2="Yes"
          />
        }
        {
          <AltTextPopup
            ref={AltTextRef}
            onclose={closeAltTexthandle}
            buttonTitle1="Cancel"
            buttonTitle2="Save"
            Discription="Images cannot be read by search engines or accessibility tools, but alt text can. To increase your site's SEO and accessibility, add a text description to this image."
          />
        }
      </RepostionWrapper>
    </React.Fragment>
  ) : (
    children
  );
};

export default SectionEditor;
