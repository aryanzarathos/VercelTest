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
import { UPDATE_BUTTON } from "../../store/reducers/websiteTemplate";
import { updateButtonElement } from "../../store/actions/siteEditor";
import AppLinkUrl from "../AppLink/AppLinkUrl";
import { SELECT_OPTION, UPDATE_SELECTED_ELEMENT } from "../../store/reducers/SiteEditor";
import { useOutsideClick } from "rooks";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import useTemplateData from "@/CustomHooks/useTemplateData";
const LinkDropdown = dynamic(() => import("../Dropdown/LinkDropdown"), { ssr: false });
const SelectDropDown = dynamic(() => import("../SelectDropdown"), { ssr: false });
const InputSelectDropDown = dynamic(() => import("../InputSelectDropdown"), { ssr: false });
const Dropdown = dynamic(() => import("./ColorDropdown/Dropdown"), { ssr: false });
const ParentButtonEditor = styled.div`
    position:relative;
    display: block;
    border-radius: 4px;
    transition:all .2s ease-in-out;
    width: 100%;
    transition: all ease  0.7s;
   
    &.ActiveEdit{
        display: block;
        padding: 8px 16px;
        margin-bottom: 22px;
        z-index: 3;
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
   z-index:-1;
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

const ButtonEditor = ({ children, index }) => {
  const settingRef = useRef(null);
  const buttonRef = useRef(null)
  const { modalState, user } = useSelector((state) => {
    return {
      modalState: state.commonStates.modalState,
      user: state.user
    }
  })
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
    selectedElementData, pageId] = useTemplateData()
  const {
    selectedElementActive,
    buttonActive
  } = useSelector((state) => state.editor.selectedIndexAndId);
  useOutsideClick(buttonRef, () => {
    if (!modalState && buttonActive && `${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}`) {
      setSelectedElement(``)
      dispatch(SELECT_OPTION({ selectedElementActive: ``, buttonActive: false }))
      setOpenState("")
      setEditButton(false)
    }
  })
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
        fontSize: "14px",
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
        lineHeight: "24px",
      };
    }
    let gridPayload = [...gridData.data];
    let data = {
      desktop: {
        ...gridData.data[selectedElementIndex]["style"].desktop,
        ...paddingObj,
      },
      mobile: {
        ...gridData.data[selectedElementIndex]["style"].mobile,
        ...paddingObj,
      },
      tablet: {
        ...gridData.data[selectedElementIndex]["style"].tablet,
        ...paddingObj,
      },
    };
    // Create a new object with the updated property value
    const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
    // Create a new array with the updated object
    const updatedData = [
      ...gridPayload.slice(0, selectedElementIndex),
      updatedObject,
      ...gridPayload.slice(selectedElementIndex + 1),
    ];
    dispatch(
      UPDATE_BUTTON({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: updatedData[selectedElementIndex]["style"],
      })
    );
    dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
    dispatch(
      updateButtonElement({
        pageId: pageId,
        gridId: gridId,
        body: { data: updatedData },
      })
    );
  };
  const selectBorderRadius = (val) => {
    let gridPayload = [...gridData.data];
    let data = {
      desktop: {
        ...gridData.data[selectedElementIndex]["style"].desktop,
        borderRadius: `${val}px`,
      },
      mobile: {
        ...gridData.data[selectedElementIndex]["style"].mobile,
        borderRadius: `${val}px`,
      },
      tablet: {
        ...gridData.data[selectedElementIndex]["style"].tablet,
        borderRadius: `${val}px`,
      },
    };
    // Create a new object with the updated property value
    const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
    // Create a new array with the updated object
    const updatedData = [
      ...gridPayload.slice(0, selectedElementIndex),
      updatedObject,
      ...gridPayload.slice(selectedElementIndex + 1),
    ];
    dispatch(
      UPDATE_BUTTON({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: updatedData[selectedElementIndex]["style"],
      })
    );
    dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
    dispatch(
      updateButtonElement({
        pageId: pageId,
        gridId: gridId,
        body: { data: updatedData },
      })
    );
  };


  const buttonSize = () => {
    if (
      selectedElementData?.style?.["desktop"]?.fontSize === "14px" &&
      selectedElementData?.style?.["desktop"]?.lineHeight === "20px"
    ) {
      return "Small";
    } else if (
      selectedElementData?.style?.["desktop"]?.fontSize === "18px" &&
      selectedElementData?.style?.["desktop"]?.lineHeight === "22px"
    ) {
      return "Medium";
    } 
    else if (
      selectedElementData?.style?.["desktop"]?.fontSize === "var(--global-typography-fontSizeButton)" &&
      selectedElementData?.style?.["desktop"]?.lineHeight === "var(--global-typography-lineHeightButton)"
    ) return "Small"
    else {
      return "Large";
    }
  };
  const buttonProperty = () => {
    if (selectedElementData?.style?.["desktop"]?.backgroundColor === "transparent" && selectedElementData?.style["desktop"]?.borderColor === "transparent") {
      return "None"
    } else if (selectedElementData?.style?.["desktop"]?.backgroundColor === "transparent") {
      return "Stroke"
    } else {
      return "Fill"
    }
  };
  const [hideBackground, setHideBackground] = useState(false);
  const selectButtonProperty = (val) => {
    let obj = {};
    if (val === "Fill") {
      setHideBackground(false);
      obj = {
        backgroundColor:
          selectedElementData?.style?.["desktop"]?.backgroundColor ===
            "transparent"
            ? selectedElementData?.style?.["desktop"]?.defaultBackgroundColor
            : selectedElementData?.style?.["desktop"]?.backgroundColor,
        borderColor:
          selectedElementData?.style?.["desktop"]?.backgroundColor ===
            "transparent"
            ? selectedElementData?.style?.["desktop"]?.defaultBackgroundColor
            : selectedElementData?.style?.["desktop"]?.backgroundColor,
        padding: {
          paddingTop: "12px",
          paddingRight: "24px",
          paddingBottom: "12px",
          paddingLeft: "24px",
        },
      };
    } else if (val === "Stroke") {
      setHideBackground(true);
      obj = {
        backgroundColor: "transparent",
        borderColor:
          selectedElementData?.style?.["desktop"]?.borderColor ===
            "transparent"
            ? selectedElementData?.style?.["desktop"]?.color
            : selectedElementData?.style?.["desktop"]?.color,
        borderWidth: "1px",
        borderStyle: "solid",

        padding: {
          paddingTop: "12px",
          paddingRight: "24px",
          paddingBottom: "12px",
          paddingLeft: "24px",
        },
      };
    } else if (val === "None") {
      setHideBackground(true);
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
    let gridPayload = [...gridData.data];
    let data = {
      desktop: {
        ...gridData.data[selectedElementIndex]["style"].desktop,
        ...obj,
      },
      mobile: {
        ...gridData.data[selectedElementIndex]["style"].mobile,
        ...obj,
      },
      tablet: {
        ...gridData.data[selectedElementIndex]["style"].tablet,
        ...obj,
      },
    };
    // Create a new object with the updated property value
    const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
    // Create a new array with the updated object
    const updatedData = [
      ...gridPayload.slice(0, selectedElementIndex),
      updatedObject,
      ...gridPayload.slice(selectedElementIndex + 1),
    ];
    dispatch(
      UPDATE_BUTTON({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: updatedData[selectedElementIndex]["style"],
      })
    );
    dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
    dispatch(
      updateButtonElement({
        pageId: pageId,
        gridId: gridId,
        body: { data: updatedData },
      })
    );
  };

  const handleSelection = () => {

    setSelectedElement(`${gridId}_${index}`)
    if (selectedElementActive !== `${gridId}_${index}`) {
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
    let gridPayload = [...gridData.data];
    let data = {
      desktop: {
        ...gridData.data[selectedElementIndex]["style"].desktop,
        ButtonAlign: val
      },
      mobile: {
        ...gridData.data[selectedElementIndex]["style"].mobile,
        ButtonAlign: val
      },
      tablet: {
        ...gridData.data[selectedElementIndex]["style"].tablet,
        ButtonAlign: val
      },
    };
    // Create a new object with the updated property value
    const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
    // Create a new array with the updated object
    const updatedData = [
      ...gridPayload.slice(0, selectedElementIndex),
      updatedObject,
      ...gridPayload.slice(selectedElementIndex + 1),
    ];
    dispatch(
      UPDATE_BUTTON({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: updatedData[selectedElementIndex]["style"],
      })
    );
    dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
    dispatch(
      updateButtonElement({
        pageId: pageId,
        gridId: gridId,
        body: { data: updatedData },
      })
    );
  }


  return (
    AppLinkUrl.isEditor() ?
      <ParentButtonEditor
        className={(isHovering || (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")) ? "ActiveEdit" : ""}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => handleSelection()}
        ref={buttonRef}
      >
        {(isHovering || (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")) && (
          <ButtonEditorWrap>
            {(isHovering || (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "")) && (
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
                          selectedElementData?.style["desktop"]?.borderRadius
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
                  {openState === "color" && <Dropdown hideBackground={hideBackground} />}
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

        <LinkDropdown ModalsRef={settingRef} onClose={ActionHandleClose} />
      </ParentButtonEditor> : children
  );
};

export default ButtonEditor;
