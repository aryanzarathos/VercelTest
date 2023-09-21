import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import IconLeftAlign from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-LeftAlign.svg";
import IconRightAlign from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-RightAlign.svg";
import IconCenterAlign from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-CenterAlign.svg";
import IconBorder from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-borderSize.svg";
import IconLink from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-Link.svg";
import IconBackgroundFill from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-BackgrouondColor.svg";
import { useDispatch, useSelector } from "react-redux";
import AppLinkUrl from "../AppLink/AppLinkUrl";
import { SELECT_OPTION, UPDATE_SELECTED_ELEMENT } from "../../store/reducers/SiteEditor";
import { useOutsideClick } from "rooks";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { updateSlide } from "@/store/actions/appearanceSettings";
import useTemplateData from "@/CustomHooks/useTemplateData";
const LinkDropdown = dynamic(() => import("../Dropdown/StaticButtonLinkDropdown"), { ssr: false });
const SelectDropDown = dynamic(() => import("../SelectDropdown"), { ssr: false });
const InputSelectDropDown = dynamic(() => import("../InputSelectDropdown"), { ssr: false });
const Dropdown = dynamic(() => import("./ColorDropdown/Dropdown"), { ssr: false });
const ParentButtonEditor = styled.div`
    position:relative;
    display: block;
    border-radius: 4px;
    transition:all .2s ease-in-out;
    z-index: 3;
    width: 100%;
    transition: all ease  0.7s;
    
    width: 100%;
    &.ActiveEdit{
        display: block;
        padding: 8px 16px;
        margin-bottom: 22px;
    }

`;
const CustomizeButtonEditorWrapper = styled.div`
  position: absolute;
  padding: 8px 10px;
  background-color: #202020;
  border-radius: 4px;
  top: -70px;
  left: 0;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 99;
  &:after {
    content: " ";
    left: 17px;
    bottom: -9px;
    border-top: 20px solid #202020;
    border-right: 19px solid transparent;
    border-left: 19px solid transparent;
    border-bottom: none;
    z-index: -1;
  }
  &:before {
    height: 100%;
    width: 100%;
    bottom: -16px;
    left: 0;
    background: transparent;
    z-index: -1;
  }
`;
const ResizeButton = styled.div`
  .button_Resize {
    .select_button {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      span {
        color: white;
        i {
          background: white;
        }
      }
    }
  }
`;
const FontSize = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  .button_Resize {
  }
`;
const ButtonType = styled.div`
z-index: -1;
  .button_Resize {
    width: 75px;
    .select_button {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      span {
        color: white;
        i {
          background: white;
        }
      }
    }
  }
`;
const EditButton = styled.button`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const ButtonEditorWrap = styled.div`
  position: absolute;
  padding: 6px 16px;
  border: 2px solid #3758f9;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const IconLarge = styled.i`
  width: 29px;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #0184ff;
  }
`;
const IconMedium = styled.i`
  width: 29px;
  height: 16px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #0184ff;
  }
`;
const BorderSize = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0 6px;
  position: relative;
  svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      fill: #0184ff;
    }
  }
`;
const ButtonAlign = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0 6px;
  position: relative;
  svg {
    stroke: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      stroke: #0184ff;
    }
  }
`;
const IconLinkWrap = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0 6px;
  svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      fill: #0184ff;
    }
  }
`;
const IconTextWrap = styled.div`
  display: flex;
  cursor: pointer;
  svg,
  stroke {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg,
    stroke {
      fill: #0184ff;
    }
  }
`;
const IconDeleteWrap = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      fill: #0184ff;
    }
  }
`;
const ColorWrapper = styled.div`
  position: relative;
`;
const IconFillWrap = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0 6px;
  svg,
  stroke {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg,
    stroke {
      fill: #0184ff;
    }
  }
`;

const StaticButtonEditor = ({ children, index, sliderKey }) => {
  const settingRef = useRef(null);
  const buttonRef = useRef(null)
  const { modalState, user, eventData, data } = useSelector((state) => {
    return {
      modalState: state.commonStates.modalState,
      user: state.user,
      eventData: state.editor.selectedIndexAndId,
      data: state.websiteTemplate.getTemplate.data,
    }
  })
  const [selectedElementData, setSelectedElementData] = useState({})
  const debounce = useDebounceFunction(
    (callback) => callback(),
    2000
  );
  const [borderSizeInput, setBorderSizeInput] = useState("")
  const [isHovering, setIsHovering] = useState(false);
  const [selectedElement, setSelectedElement] = useState("")
  const [editButton, setEditButton] = useState(false);
  const [borderSize, setBorderSize] = useState(false);
  const [openState, setOpenState] = useState("")
  const dispatch = useDispatch();
  const [BackgroundFill, setBackgroundFill] = useState(false);
  const [mainContainerId,
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
    selectedElementDataa, pageId] = useTemplateData()
  useOutsideClick(buttonRef, () => {
    if (!modalState && `${gridId}_${eventData?.selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "") {
      setSelectedElement(``)
      dispatch(SELECT_OPTION({ selectedElementActive: ``, buttonActive: false }))
      setOpenState("")
      setEditButton(false)
    }
  })
  function handleMouseOver() {
    setIsHovering(true);
  }
  function CustomizeButtonHandle(index) {
    setEditButton(!editButton);
  }
  function handleMouseOut() {
    setIsHovering(false);
  }

  const ActionHandleOpen = () => {
    setOpenState("")
    settingRef.current.open();
  };
  const BorderSizeHandle = () => {
    setBorderSize(!borderSize);
    setOpenState(openState === "borderSize" ? "" : "borderSize")
  };
  const ActionHandleClose = () => {
    settingRef.current.close();
  };

  const HandleChangeBackground = () => {
    setBackgroundFill(!BackgroundFill);
    setOpenState(openState === "color" ? "" : "color")
  };
  let bannerSizeValue = ["Small", "Medium", "Large"];
  let borderSizeValue = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
  ];

  let BannerPositionValue = ["Fill", "Stroke", "None"];

  const selectButtonSizeHandle = (val) => {
    let paddingObj = {};
    if (val === "Small") {
      paddingObj = {
        fontSize: "16px",
        lineHeight: "20px",
      };
    } else if (val === "Medium") {
      paddingObj = {
        fontSize: "18px",
        lineHeight: "22px",
      };
    } else if (val === "Large") {
      paddingObj = {
        fontSize: "20px",
        lineHeight: "24x",
      };
    }

    let data = {
      ...selectedElementData,
      buttonStyle: {
        ...selectedElementData?.buttonStyle,
        style: {
          ...selectedElementData?.buttonStyle?.style,
          desktop: {
            ...selectedElementData?.buttonStyle?.style.desktop,
            ...paddingObj,
          },
          mobile: {
            ...selectedElementData?.buttonStyle?.style.mobile,
            ...paddingObj,
          },
          tablet: {
            ...selectedElementData?.buttonStyle?.style.tablet,
            ...paddingObj,
          },
        }
      }
    }
    dispatch(updateSlide({
      gridId: gridId, slideId: selectedElementData._id, body: data, dynamicUpdate: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex, sliderKey: sliderKey
      }
    }))
  };
  const selectBorderRadius = (val) => {
    // handleBorderRadius(`${val}px`)
    let data = {
      ...selectedElementData,
      buttonStyle: {
        ...selectedElementData?.buttonStyle,
        style: {
          ...selectedElementData?.buttonStyle?.style,
          desktop: {
            ...selectedElementData?.buttonStyle?.style.desktop,
            borderRadius: `${val}px`,
          },
          mobile: {
            ...selectedElementData?.buttonStyle?.style.mobile,
            borderRadius: `${val}px`,
          },
          tablet: {
            ...selectedElementData?.buttonStyle?.style.tablet,
            borderRadius: `${val}px`,
          },
        }
      }
    }
    dispatch(updateSlide({
      gridId: gridId, slideId: selectedElementData._id, body: data, dynamicUpdate: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex, sliderKey: sliderKey
      }
    }))
  };


  const buttonSize = () => {
    if (
      selectedElementData?.buttonStyle?.style["desktop"]?.fontSize === "14px" &&
      selectedElementData?.buttonStyle?.style["desktop"]?.lineHeight === "18px"
    ) {
      return "Small";
    } else if (
      selectedElementData?.buttonStyle?.style["desktop"]?.fontSize === "16px" &&
      selectedElementData?.buttonStyle?.style["desktop"]?.lineHeight === "20px"
    ) {
      return "Medium";
    } else {
      return "Large";
    }
  };
  const buttonProperty = () => {
    if (selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor === "transparent" && selectedElementData?.buttonStyle?.style["desktop"]?.borderColor === "transparent") {
      return "None"
    } else if (selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor === "transparent") {
      return "Stroke"
    } else {
      return "Fill"
    }
  };
  const selectButtonProperty = (val) => {
    let obj = {};
    if (val === "Fill") {
      obj = {
        backgroundColor:
          selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor ===
            "transparent"
            ? selectedElementData?.buttonStyle?.style["desktop"]?.defaultBackgroundColor
            : selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor,
        borderColor:
          selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor ===
            "transparent"
            ? selectedElementData?.buttonStyle?.style["desktop"]?.defaultBackgroundColor
            : selectedElementData?.buttonStyle?.style["desktop"]?.backgroundColor,
        padding: {
          paddingTop: "8px",
          paddingRight: "24px",
          paddingBottom: "8px",
          paddingLeft: "24px",
        },
      };
    } else if (val === "Stroke") {
      obj = {
        backgroundColor: "transparent",
        borderColor:
          selectedElementData?.buttonStyle?.style["desktop"]?.borderColor ===
            "transparent"
            ? selectedElementData?.buttonStyle?.style["desktop"]?.color
            : selectedElementData?.buttonStyle?.style["desktop"]?.color,
        borderWidth: "1px",
        borderStyle: "solid",
        padding: {
          paddingTop: "8px",
          paddingRight: "24px",
          paddingBottom: "8px",
          paddingLeft: "24px",
        },
      };
    } else if (val === "None") {
      obj = {
        backgroundColor: "transparent",
        borderColor: "transparent",
        padding: {
          paddingTop: "0px",
          paddingRight: "0px",
          paddingBottom: "0px",
          paddingLeft: "0px",
        },
      };
    }
    let data = {
      ...selectedElementData,
      buttonStyle: {
        ...selectedElementData?.buttonStyle,
        style: {
          ...selectedElementData?.buttonStyle?.style,
          desktop: {
            ...selectedElementData?.buttonStyle?.style.desktop,
            ...obj,
          },
          mobile: {
            ...selectedElementData?.buttonStyle?.style.mobile,
            ...obj,
          },
          tablet: {
            ...selectedElementData?.buttonStyle?.style.tablet,
            ...obj,
          },
        }
      }
    }
    dispatch(updateSlide({
      gridId: gridId, slideId: selectedElementData._id, body: data, dynamicUpdate: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex, sliderKey: sliderKey
      }
    }))
    // handleButtonProperty(obj)
  };

  const handleSelection = () => {

    setSelectedElement(`${gridId}_${index}`)
    if (eventData?.selectedElementActive !== `${gridId}_${index}`) {
      dispatch(SELECT_OPTION({ selectedElementActive: `${gridId}_${index}`, buttonActive: true }))
    }
  }
  const handleBorderInput = (e) => {
    let value = e.target.value
    setBorderSizeInput(value)
    if (value) {
      debounce(() => selectBorderRadius(value))
    }
  }
  const selectBtnAlignment = (val) => {
    setOpenState("")
    let data = {
      ...selectedElementData,
      buttonStyle: {
        ...selectedElementData?.buttonStyle,
        style: {
          ...selectedElementData?.buttonStyle?.style,
          desktop: {
            ...selectedElementData?.buttonStyle?.style.desktop,
            ButtonAlign: val
          },
          mobile: {
            ...selectedElementData?.buttonStyle?.style.mobile,
            ButtonAlign: val
          },
          tablet: {
            ...selectedElementData?.buttonStyle?.style.tablet,
            ButtonAlign: val
          },
        }
      }
    }
    dispatch(updateSlide({
      gridId: gridId, slideId: selectedElementData._id, body: data, dynamicUpdate: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex, sliderKey: sliderKey
      }
    }))
  }

  useEffect(() => {
    if (gridData && editButton) {
      let data = gridData?.data?.length && gridData?.data?.find((item) => item._id === index)
      setSelectedElementData(data)
    }
  }, [editButton, gridData, index])
  return (
    AppLinkUrl.isEditor() ? <ParentButtonEditor
      className={(isHovering || (`${gridId}_${eventData?.selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")
      ) ? "ActiveEdit" : ""}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleSelection()}
      ref={buttonRef}
    >
      {(isHovering || (`${gridId}_${eventData?.selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")
      )
        && (
          <ButtonEditorWrap>
            {(isHovering || (`${gridId}_${eventData?.selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")
            ) && (
                <EditButton
                  className="button btn-3xs button-primary rounded-0"
                  onClick={(index) => CustomizeButtonHandle(index)}
                >
                  {editButton ? "Close" : "Edit"}
                </EditButton>
              )}
            {editButton && (
              <CustomizeButtonEditorWrapper>
                <ResizeButton onClick={() => setOpenState("")}>
                  <SelectDropDown
                    className="button_Resize"
                    selectClassName="select_button"
                    selectListClassName="select_List"
                    showValue={buttonSize()}
                    values={bannerSizeValue}
                    handleSelect={(val) => selectButtonSizeHandle(val, "size")}
                  />
                </ResizeButton>
                <ButtonAlign onClick={() => selectBtnAlignment("flex-start")}>
                  <IconLeftAlign />
                </ButtonAlign>
                <ButtonAlign onClick={() => selectBtnAlignment("center")}>
                  <IconCenterAlign />
                </ButtonAlign>
                <ButtonAlign onClick={() => selectBtnAlignment("flex-end")}>
                  <IconRightAlign />
                </ButtonAlign>
                <BorderSize>
                  <IconBorder onClick={BorderSizeHandle} />
                  {openState === "borderSize" && (
                    <FontSize>
                      <InputSelectDropDown
                        className="button_Resize"
                        ChangeValue={(e) => handleBorderInput(e)}
                        selectClassName="select_button"
                        selectListClassName="select_List"
                        showValue={
                          selectedElementData?.buttonStyle?.style["desktop"]?.borderRadius
                        }
                        showInputValue={borderSizeInput}
                        values={borderSizeValue}
                        handleSelect={(val) =>
                          selectBorderRadius(val, "bordersize")
                        }
                      />
                    </FontSize>
                  )}
                </BorderSize>
                <IconLinkWrap onClick={ActionHandleOpen}>
                  <IconLink />
                </IconLinkWrap>
                <ColorWrapper>
                  <IconFillWrap onClick={HandleChangeBackground}>
                    <IconBackgroundFill />
                  </IconFillWrap>
                  {openState === "color" && <Dropdown selectedElementData={selectedElementData} sliderKey={sliderKey} />}
                </ColorWrapper>
                <ButtonType onClick={() => setOpenState("")}>
                  <SelectDropDown
                    className="button_Resize"
                    selectClassName="select_button"
                    selectListClassName="select_List"
                    showValue={buttonProperty()}
                    values={BannerPositionValue}
                    handleSelect={(val) => selectButtonProperty(val)}
                  />
                </ButtonType>
              </CustomizeButtonEditorWrapper>
            )}
          </ButtonEditorWrap>
        )}
      {children}

      <LinkDropdown ModalsRef={settingRef} onClose={ActionHandleClose} selectedElementData={selectedElementData} sliderKey={sliderKey} />
    </ParentButtonEditor> : children
  );
};

export default StaticButtonEditor;
