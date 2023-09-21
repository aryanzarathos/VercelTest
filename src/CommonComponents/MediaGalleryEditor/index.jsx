import React, { forwardRef, useRef, useState } from "react";
import {
  MediaGalleryEditor,
  EditButtonWrap,
  MediaEditorTool,
  EditButton,
  ManageSettingButton,
  TextEditButton,
} from "./MediaGalleryStyle";
import SettingIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-setting.svg";
import { useDetectOutsideClick } from "../DetectOutsideClick/useDetectOutsideClick";
import SettingDropdown from "./SettingDropdown/SettingDropdown";
import { isBrowser } from "../../CommonFunctions/isBrowser";
import AppLinkUrl from "../AppLink/AppLinkUrl";
import SectionEditorPopups from "../../CommonComponents/SectionEditorPopups/index";
// import StyleDropDown from './StyleDropDown';
import AltTextPopup from "../ALTTextPopup";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_OPTION } from "@/store/reducers/SiteEditor";
import StyleDropDown from "../StyleDropDownPopup";
import { useOutsideClick } from "rooks";
import { MODAL_STATE } from "@/store/reducers/commonStates";

const MediaGallery = forwardRef(
  ({
    children,
    showSelectedData,
    uploadLimit,
    multiSelect = false,
    sectionName,
    manageText,
    showGridOptions = true,
    className,
    data,
    arrayofImages = false,
    fieldName,
    fieldIdLabel,
    showAltText = true,
    showEditStyle = true,
    showSettings = true,
    showOnlyTab = false,
    ...restData
  }) => {
    const MediaRef = useRef(null);
    const categoryRef = useRef(null);
    const settingDropDownRef = useRef(null);
    const styleDropDownRef = useRef(null);
    const styleRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isSelected, setIsSelected] = useState("");
    const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);
    const [isStyleDropdownopen, setIsStyleDropdownopen] = useDetectOutsideClick(
      styleDropDownRef,
      false
    );
    const dispatch = useDispatch();
    const { gridId, selectedSectionActive, sectionActive, manageDropdown } = useSelector(
      (state) => state.editor.selectedIndexAndId
    );
    const { modalState } = useSelector((state) => state.commonStates);

    useOutsideClick(
      MediaRef,
      () => {
        if (
          !modalState &&
          sectionActive &&
          selectedSectionActive === isSelected &&
          isSelected !== ""
        ) {
          setIsSelected("");
          dispatch(
            SELECT_OPTION({ selectedSectionActive: ``, sectionActive: false })
          );
          setIsStyleDropdownopen(false);
          setIsSettingDropdownOpen(false);
        }
      },
      [modalState]
    );
    const AltTextRef = useRef(null);
    const handleMouseOver = (event) => {
      setIsHovering(true);
      event.stopPropagation();
    };
    const handleMouseOut = (event) => {
      setIsHovering(false);
      event.stopPropagation();
    };
    const ActiveSectionHandle = (event) => {
      setIsSelected(data?._id);
      if (data?._id !== selectedSectionActive) {
        dispatch(
          SELECT_OPTION({
            selectedSectionActive: `${data?._id}`,
            sectionActive: true,
          })
        );
      }
      if (gridId !== data?._id) {
        dispatch(
          SELECT_OPTION({
            gridId: data?._id,
            gridIndex: data?.gridIndex,
            gridData: data,
          })
        );
      }
      // setIsSelected(true)
    };
    const SettingDropdownHandle = (event) => {
      setIsSettingDropdownOpen(!isSettingDropdownOpen);
      setIsStyleDropdownopen(false);
    };
    const openAltTexthandle = () => {
      let name = fieldName;
      let idLabel = fieldIdLabel;
      dispatch(
        SELECT_OPTION({
          fieldName: name,
          fieldIdLabel: idLabel,
          arrayofImages: arrayofImages,
        })
      );
      AltTextRef.current.open();
    };
    const closeAltTexthandle = () => {
      AltTextRef.current.close();
    };
    const openStyleHandle = () => {
      setIsStyleDropdownopen(!isStyleDropdownopen);
      setIsSettingDropdownOpen(false);
    };
    const closeCategoryHandle = () => {
      categoryRef.current.close();
      dispatch(MODAL_STATE(false));
    };
    // useOutsideClick(
    //   { current: Videoelement },
    //   () => {
    //     if (categoryRef.current.isOpen) {
    //       categoryRef.current.close();
    //     }
    //   },
    //   []
    // );
    // useOutsideClick(
    //   { current: imageElement },
    //   () => {
    //     if (categoryRef.current.isOpen) {
    //       categoryRef.current.close();
    //       dispatch(MODAL_STATE(false));
    //     }
    //   },
    //   []
    // );
    return isBrowser() && AppLinkUrl.isEditor() ? (
      <React.Fragment>
        <MediaGalleryEditor
          ref={MediaRef}
          id="media_gallery_editor"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
          onClick={(e) => ActiveSectionHandle(e)}
          data-content={`Click to Manage`}
          className={
            isSelected === selectedSectionActive && isSelected !== ""
              ? "isSectionActive"
              : isHovering
                ? `isSectionHover`
                : ""
          }
        >
          {isSelected === selectedSectionActive && isSelected !== "" && (
            <MediaEditorTool>
              <ManageSettingButton
                className={categoryRef.current.isOpen ? "active" : ""}
                onClick={() => {
                  categoryRef.current.open();
                  dispatch(SELECT_OPTION({ manageDropdown: true }));
                  setIsStyleDropdownopen(false);
                  setIsSettingDropdownOpen(false);
                }}
              >
                {manageText ? manageText : "Manage"}
              </ManageSettingButton>
              {showEditStyle && (
                <ManageSettingButton
                  className={isStyleDropdownopen ? "active" : ""}
                  onClick={openStyleHandle}
                >
                  Edit Style
                </ManageSettingButton>
              )}
              {isStyleDropdownopen && (
                <React.Fragment>
                  <StyleDropDown
                    tabs={restData.tabs}
                    sectionName={sectionName}
                  />
                </React.Fragment>
              )}
              <EditButtonWrap>
                {showSettings && (
                  <EditButton
                    className={isSettingDropdownOpen ? "active" : ""}
                    onClick={SettingDropdownHandle}
                  >
                    <SettingIcon />
                  </EditButton>
                )}
                {isSettingDropdownOpen && (
                  <SettingDropdown
                    SettingType={true}
                    showOnlyTab={showOnlyTab}
                    showGridOptions={showGridOptions}
                  />
                )}
              </EditButtonWrap>
              {showAltText && (
                <TextEditButton
                  className={AltTextRef.current.isOpen ? "active" : ""}
                  onClick={() => {
                    openAltTexthandle();
                    setIsStyleDropdownopen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                >
                  Edit Alt Text
                </TextEditButton>
              )}
            </MediaEditorTool>
          )}
          {children}
          {/* style dropdown  */}

          {
            <SectionEditorPopups
              uploadLimit={uploadLimit}
              multiSelect={multiSelect}
              sectionName={sectionName}
              ref={categoryRef}
              onclose={closeCategoryHandle}
              showSelectedData={showSelectedData}
            />
          }
          <AltTextPopup
            ref={AltTextRef}
            onclose={closeAltTexthandle}
            buttonTitle1="Cancel"
            buttonTitle2="Save"
            Discription="Images cannot be read by search engines or accessibility tools, but alt text can. To increase your site's SEO and accessibility, add a text description to this image."
          />
        </MediaGalleryEditor>


      </React.Fragment>
    ) : (
      children
    );
  }
);
MediaGallery.displayName = "MediaGallery";
export default MediaGallery;
