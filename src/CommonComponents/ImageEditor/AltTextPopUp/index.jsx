import React, { forwardRef, useCallback, useEffect, useState } from "react";
import styles from "./imageEditorAltPopUp.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Modals from "@/CommonComponents/Modals";
import ModalHeader from "@/CommonComponents/Modals/ModalsHeader";
import ModalBody from "@/CommonComponents/Modals/ModalsBody";
import ModalsFooter from "@/CommonComponents/Modals/ModalsFooter";
import FormInput from "@/CommonComponents/Form/FormInput";
import FormTextArea from "@/CommonComponents/Form/FormTextArea";
import ValidationFile from "@/Classes/ValidationFile";
import { UPDATE_SELECTED_ELEMENT } from "@/store/reducers/SiteEditor";
import { UPDATE_BUTTON_DATA } from "@/store/reducers/websiteTemplate";
import { updateButtonElement } from "@/store/actions/siteEditor";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import { dummyImg } from "@/Constant/constants";

const MediaAltTextPopup = forwardRef(
  ({ onclose, Discription, buttonTitle1, buttonTitle2 }, ref) => {
    const dispatch = useDispatch();

    const {
      mainContainerId,
      mainContainerIndex,
      mainContainerData,
      subcontainerId,
      subcontainerIndex,
      subcontainerData,
      sectionId,
      sectionIndex,
      sectionData,
      gridId,
      gridIndex,
      gridData,
      selectedElementId,
      selectedElementIndex,
      selectedElementActive,
      selectedElementData,
      pageId,
      addSectionTo,
    } = useSelector((state) => state.editor.selectedIndexAndId);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [altText, setAltText] = useState("");

    useEffect(() => {
      if (selectedElementData) {
        setTitle(selectedElementData?.title);
        setDesc(selectedElementData?.desc);
        setAltText(selectedElementData?.alt);
      }
    }, [selectedElementData]);

    const handleInput = (e) => {
      let inputName = e.target.name;
      let inputValue = e.target.value;
      let value = ValidationFile.spaceNotAccept(inputValue);
      switch (inputName) {
        case "title":
          setTitle(value);
          break;
        case "alt":
          setAltText(value);
          break;
        case "desc":
          setDesc(value);
          break;
        default:
          break;
      }
    };

    const ModalClosehandle = () => {
      onclose();
    };

    const handleSaveBtn = () => {
      let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
      gridPayload[selectedElementIndex]["alt"] = altText;
      gridPayload[selectedElementIndex]["title"] = title;
      gridPayload[selectedElementIndex]["desc"] = desc;
      dispatch(
        UPDATE_BUTTON_DATA({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
          data: gridPayload[selectedElementIndex],
        })
      );
      dispatch(
        UPDATE_SELECTED_ELEMENT({
          elementData: gridPayload[selectedElementIndex],
          gridData: gridPayload,
        })
      );
      dispatch(
        updateButtonElement({
          pageId: pageId,
          gridId: gridId,
          body: { data: gridPayload },
        })
      );
      onclose();
    };
    return (
      <Modals
        ref={ref}
        ModalsSize={`modalM`}
        Position="center"
        ClosePopUp={ModalClosehandle}
        ClassName={styles.modalWrapper}
      >
        <ModalHeader className={styles.headerstyle} title="Edit Alt Text" />
        <ModalBody className={styles.AltTextPopupBody}>
          {Discription && (
            <div className={styles.Discription_Wrapper}>
              <p className={styles.Discription_title}>{Discription}</p>
            </div>
          )}
          <React.Fragment>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.Grid_Wrap}>
                  <div className={styles.Image_Wrap}>
                    {selectedElementData.tagType === "video" ? (
                      <video >
                        <source
                          src={`${selectedElementData.videoSrc}#t=0.1`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <>
                        {/* <Image
                        src={
                          selectedElementData?.src ||
                          selectedElementData?.defaultImage
                        }
                        alt=""
                        width={103}
                        height={103}
                      /> */}
                        <ImageElement
                          className={styles.Item_image}
                          src={selectedElementData?.src}
                          defaultImage={dummyImg}
                        />
                      </>
                    )}
                  </div>
                  <div className={styles.FormInputFiels}>
                    <FormInput
                      labelPosition="top"
                      label="Edit Title"
                      value={title}
                      name="title"
                      placeholder="eg:  Apple"
                      LabelClassName={styles.label}
                      onChange={(e) => handleInput(e)}
                      onKeyUp={(e) => handleInput(e)}
                      className={styles.InputFields}
                    />
                    <FormInput
                      labelPosition="top"
                      label="Edit Alt Text"
                      value={altText}
                      name="alt"
                      placeholder="eg:  The image describes basket of a.."
                      LabelClassName={styles.label}
                      disabled={selectedElementData.tagType === "video"}
                      onChange={(e) => handleInput(e)}
                      onKeyUp={(e) => handleInput(e)}
                      className={styles.InputFields}
                    />
                  </div>
                </div>
                <div className={styles.AreaFormInputFields}>
                  <FormTextArea
                    labelPosition="top"
                    value={desc}
                    rows={4}
                    name={"desc"}
                    label="Edit Image Desicription"
                    placeholder="eg:  Red scattered apple"
                    onChange={(e) => handleInput(e)}
                    onKeyUp={(e) => handleInput(e)}
                    LabelClassName={styles.Arealabel}
                    className={styles.AreaInputFields}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        </ModalBody>
        <ModalsFooter>
          <div className={styles.button_group}>
            <button
              className={`button btn-o-silver btn-xs btn-oval`}
              onClick={ModalClosehandle}
            >
              Cancel
            </button>
            <button
              className={`button button-primary btn-xs btn-oval`}
              onClick={handleSaveBtn}
            >
              Save
            </button>
          </div>
        </ModalsFooter>
      </Modals>
    );
  }
);
MediaAltTextPopup.displayName = "MediaAltTextPopup";
export default MediaAltTextPopup;
