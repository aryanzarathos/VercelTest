import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import style from "./Gallarystyled.module.scss";
import MultiSelectDropdown from "@/CommonComponents/MultiSelectDropDown";
import Image from "next/image";
import ItemImage from "../../../../src/Assets/images/img/caring.png";
import DragIcon from "../../../Assets/SectionComponent/Icons/drag.svg";
import ImageUploade from "./ImageUploade";
import useTemplateData from "../../../CustomHooks/useTemplateData";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { UPDATE_GRID_DATA } from "../../../store/reducers/websiteTemplate";
import { useDispatch, useSelector } from "react-redux";
import { updateGalleryAltText } from "@/store/actions/altText";
import { MODAL_STATE } from "@/store/reducers/commonStates";
import { dummyImg } from "@/Constant/constants";
import { useOutsideClick } from "rooks";

const data = [
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
];
const GallarypopUp = ({ children }) => {
  const ref = children.ref;
  const uploadLimit = children.uploadLimit
  const multiSelect = children.multiSelect
  const Uploaderef = useRef();
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.commonStates);
  const [isOpen, setIsOpen] = useState(false);
  const dragOverItem = useRef()
  const dragItem = useRef()
  const [
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
    selectedElementData,
    pageId,
  ] = useTemplateData();
  const closePopup = () => {
    setIsOpen(false);
    dispatch(MODAL_STATE(false))
  };
  const openPopup = () => {
    setIsOpen(true);
  };
  useImperativeHandle(
    ref,
    () => ({
      open: () => openPopup(),
      close: closePopup,
      isOpen: isOpen,
    }),
    [isOpen]
  );
  const handleRemove = (id) => {
    let gridPayload = [...gridData.data];
    // let index = gridPayload.findIndex((item) => item.id === id);
    gridPayload.splice(id, 1);
    dispatch(
      updateGalleryAltText({
        body: { data: gridPayload },
        pageId: pageId,
        grid: gridData?._id,
        indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          sectionIndex: sectionIndex,
          gridIndex: gridIndex,
        },
      })
    );
  };
  const HandleUpload = (val) => {
    Uploaderef.current.open();
    let gridPayload = [...gridData.data];
    if (uploadLimit && uploadLimit !== 1 && uploadLimit === "noLimit") {
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        gridPayload.push({
          id: gridPayload.length + 1,
          image: element,
        });
      }
    } else {
      gridPayload.push({
        id: gridPayload.length + 1,
        image: val,
      });
    }

    dispatch(
      updateGalleryAltText({
        body: { data: gridPayload },
        pageId: pageId,
        grid: gridData?._id,
        indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          sectionIndex: sectionIndex,
          gridIndex: gridIndex,
        },
      })
    );
    Uploaderef.current.close()
  };
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  const drop = (e) => {
    const copyListItems = [...gridData.data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    dispatch(
      updateGalleryAltText({
        body: { data: copyListItems },
        pageId: pageId,
        grid: gridData?._id,
        indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          sectionIndex: sectionIndex,
          gridIndex: gridIndex,
        },
      })
    );
  };
  let data = document.getElementById("media_gallery_editor")
  useOutsideClick({ current: data }, () => {
    if (isOpen && !modalState) setIsOpen(false)
  }, []);
  return (
    isOpen && (
      <div ref={children.ref} className={style.gallery_Container_Img} id="img_gallery_mng">
        <div className={style.gallery_header_wrap}>
          <p className={style.header_txt}>Edit Images</p>
          <div className={style.btn_wrap}>
            {uploadLimit !== "noLimit" && uploadLimit - gridData?.data?.length === 0 ? "" : <button
              className={`button btn-oval btn-o-primary btn-xs`}
              onClick={(v) => Uploaderef.current.open()}
              disabled={uploadLimit !== "noLimit" && uploadLimit - gridData?.data?.length === 0}
            >
              &#x2B; Add Image
            </button>}
            <span
              className={`cursor`}
              onClick={() => {
                closePopup();
              }}
            >
              &#10006;
            </span>
          </div>
        </div>
        <div className={style.Line} />
        <div className={style.img_grid_container}>
          {gridData?.data?.length
            ? gridData?.data?.map((item, key) => {
              return (
                <div
                  className={style.image_wrap}
                  key={key}
                  draggable={true}
                  onDragStart={(e) => dragStart(e, key)}
                  onDragEnter={(e) => dragEnter(e, key)}
                  onDragEnd={drop}
                >
                  <ImageElement
                    src={item.image}
                    alt={"img-grid"}
                    className={style.image_grid}
                    defaultImage={dummyImg}
                    height={100}
                    width={100}
                  />
                  <div className={style.overLay_Img}>
                    <div
                      className={style.icon_wrap}
                      onClick={() => handleRemove(key)}
                    >
                      <span className={`${style.overlay_cross} cursor`}>
                        &#10006;
                      </span>
                    </div>
                    <DragIcon className={`cursor`} />
                  </div>
                </div>
              );
            })
            : ""}
          {uploadLimit !== "noLimit" && uploadLimit - gridData?.data?.length === 0 ? "" : <ImageUploade ref={Uploaderef} HandleUpload={HandleUpload} multiSelect={multiSelect} uploadLimit={uploadLimit ? uploadLimit !== "noLimit" ? uploadLimit - gridData?.data?.length : uploadLimit : 1} />}
        </div>
      </div>
    )
  );
};

export default forwardRef(GallarypopUp);
