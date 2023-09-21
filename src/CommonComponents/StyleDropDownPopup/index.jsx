import React, { forwardRef, useEffect, useRef } from "react";
import { ColorDropWon, SettingBody, SettingDropdownWrapper } from "./StyleDropDownStyle";
import Tabs from "@/CommonComponents/Tabs/Tabs";
import { useState } from "react";
import GridTab from "./Addproduct/GridTab/GridTab";
import TextTab from "./Addproduct/TextTab/TextTab";
import ButtonTab from "./Addproduct/ButtonTab/ButtonTab";
import Overlay from "./Addproduct/Overlay/Overlay";
import InputColorPicker from "../ColorPicker";
import useTemplateData from "@/CustomHooks/useTemplateData";
import { useDispatch } from "react-redux";
import { UPDATE_GRID_DATA } from "@/store/reducers/websiteTemplate";
import { useOutsideClick } from "rooks";
import { updateGridSettings } from "@/store/actions/updateGridSetting";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { useGlobalVariable } from "@/CommonFunctions/changeColorType";

const StyleDropDown = forwardRef(() => {
  const [isFilled, setIsFilled] = useState(false);
  const dispatch = useDispatch();
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
  const debounce = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const colorPickerRef = useRef(null);
  const [activeTabSlide, setActiveTabSlide] = useState("Grid");
  const [activeTabArray, setActiveTabArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(false);
  const [staticTabs, setStaticTabs] = useState([]);
  const [stateType, setStateType] = useState("");
  const [colorDropdown, setColorDropdown] = useState(false)

  const [globalVariable] = useGlobalVariable();

  useOutsideClick(colorPickerRef, () => {
    if (colorDropdown) setColorDropdown(false)
  })
  useEffect(() => {
    let array = [];
    if (!isFilled) {
      if (gridData?.custom_section_editable?.length) {
        gridData.custom_section_editable.map((item) => {
          item?.editableField?.length &&
            item?.editableField?.map((subItem) => {
              if (subItem.tab != undefined) {
                if (!array.includes(subItem.tab)) {
                  array.push(subItem.tab);
                }
              }
            });
        });
        setStaticTabs([...array]);
        setIsFilled(true);
      }
    }
  }, [gridData.custom_section_editable, isFilled]);
  useEffect(() => {
    let array = [];
    if (gridData?.custom_section_editable?.length) {
      gridData.custom_section_editable.map((item) => {
        item?.editableField?.length &&
          item?.editableField?.map((subItem) => {
            if (subItem.tab === activeTabSlide) {
              array.push({ ...subItem, id: item.id });
            }
          });
      });
      setActiveTabArray([...array]);
    }
  }, [activeTabSlide, gridData.custom_section_editable]);

  const updateCustomProperties = (val, id, property, editableId, state) => {
    let gridPayload = JSON.parse(
      JSON.stringify(gridData.custom_section_editable)
    );

    let updatedObject = gridPayload.find((item) => item.id === id);
    let editableIndex = updatedObject.editableField.findIndex(
      (item) => item.editId === editableId
    );
    updatedObject["editableField"][editableIndex][state ? state : "value"] = val;

    let activeArray = activeTabArray;
    let index = activeArray.findIndex((item) => item.editId === editableId);
    activeArray[index][state ? state : "value"] = val;
    setSelectedItem({
      ...selectedItem,
      [state ? state : "value"]: val,
    });
    setActiveTabArray([...activeArray]);

    if (state) {
      updatedObject = {
        ...updatedObject,
        style: {
          ...updatedObject.style,
          desktop: {
            ...updatedObject.style.desktop,
            [state]: {
              ...updatedObject.style.desktop[state],
              [property]: val,
            },
          },
          mobile: {
            ...updatedObject.style.mobile,
            [state]: {
              ...updatedObject?.style?.mobile?.[state],
              [property]: val,
            },
          },
          tablet: {
            ...updatedObject.style.tablet,
            [state]: {
              ...updatedObject.style.tablet?.[state],
              [property]: val,
            },
          },
        },
      };
    } else {
      updatedObject = {
        ...updatedObject,
        style: {
          ...updatedObject.style,
          desktop: {
            ...updatedObject.style.desktop,
            [property]: val,
          },
          mobile: {
            ...updatedObject.style.mobile,
            [property]: val,
          },
          tablet: {
            ...updatedObject.style.tablet,
            [property]: val,
          },
        },
      };
    }
    const latestArray = gridPayload.map((obj) => {
      if (updatedObject.id === obj.id) {
        return { ...obj, ...updatedObject };
      }
      return obj;
    });
    let indexesData = {
      mainContainerIndex: mainContainerIndex,
      subcontainerIndex: subcontainerIndex,
      sectionIndex: sectionIndex,
      gridIndex: gridIndex,
    };

    debounce(() => dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { custom_section_editable: latestArray },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    })))
    // dispatch(
    //   UPDATE_GRID_DATA({
    //     data: { custom_section_editable: latestArray },
    //     ...indexesData,
    //   })
    // );
  };



  const handleColors = (color, id, property, editableId) => {
    console.log(stateType,"jjiijij")
    if (stateType) {
      updateCustomProperties(color, id, property, editableId, stateType);
    } else {
      updateCustomProperties(color, id, property, editableId);
    }
  };
  const updateButtonDropdown = (val, id, property, editableId, state) => {
    let grid = JSON.parse(JSON.stringify(gridData.custom_section_editable));
    let selectedElementData = grid.find((item) => item.id === id);
    let obj = {};
    if (val === "Fill") {
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
          selectedElementData?.style?.["desktop"]?.borderColor === "transparent"
            ? selectedElementData?.style?.["desktop"]?.defaultBorderColor
            : selectedElementData?.style?.["desktop"]?.borderColor,
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
    let gridPayload = JSON.parse(
      JSON.stringify(gridData.custom_section_editable)
    );
    let updatedObject = gridPayload.find((item) => item.id === id);
    let editableIndex = updatedObject.editableField.findIndex(
      (item) => item.editId === editableId
    );
    updatedObject["editableField"][editableIndex][state ? state : "value"] =
      val;

    let activeArray = activeTabArray;
    let index = activeArray.findIndex((item) => item.editId === editableId);
    activeArray[index][state ? state : "value"] = val;
    setSelectedItem({
      ...selectedItem,
      [state ? state : "value"]: val,
    });
    setActiveTabArray([...activeArray]);

    updatedObject = {
      ...updatedObject,
      style: {
        ...updatedObject.style,
        desktop: {
          ...updatedObject.style.desktop,
          ...obj,
        },
        mobile: {
          ...updatedObject.style.mobile,
          ...obj,
        },
        tablet: {
          ...updatedObject.style.tablet,
          ...obj,
        },
      },
    };

    const latestArray = gridPayload.map((obj) => {
      if (updatedObject.id === obj.id) {
        return { ...obj, ...updatedObject };
      }
      return obj;
    });
    debounce(() => dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { custom_section_editable: latestArray },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    })))
  };


  return (
    <React.Fragment>
      <SettingDropdownWrapper >
        {staticTabs.length ? (
          <SettingBody>
            <Tabs
              valueState={true}
              clearState={true}
              activeTitle={(val) => {
                setActiveTabSlide(val);
              }}
              defaultValue={"Grid"}
              TabWrapperClass={`externalPageTabBtn ${staticTabs.length <= 1 ? 'none' : ''}`}
              TabButtonClass={`button btn-xs btn-oval ${"externalPagesTabButton"}`}
              ActiveTabClass={`${"Active"}`}
              tabs={staticTabs}
            />
            <GridTab
              selectedTabData={activeTabArray}
              activeTab={activeTabSlide}
              updateCustomProperties={updateCustomProperties}
              handleColorDropDown={(item, state) => {
                setSelectedItem(item);
                setStateType(state ? state : "");
                setColorDropdown(!colorDropdown)
              }}
              updateButtonDropdown={updateButtonDropdown}
            />
            {/* {activeTabSlide === "Grid" ? (
          <GridTab data={tabs.content[activeTabSlide]} />
        ) : activeTabSlide === "Text" ? (
          <TextTab data={tabs.content[activeTabSlide]} />
        ) : activeTabSlide === "Button" ? (
          <ButtonTab data={tabs.content[activeTabSlide]} />
        ) : activeTabSlide === "Text" ? (
          <Overlay data={tabs.content[activeTabSlide]} />
        ) : null} */}
          </SettingBody>
        ) : (
          ""
        )}
      </SettingDropdownWrapper>
      {colorDropdown && (
        <ColorDropWon ref={colorPickerRef}>
          <InputColorPicker
            value={selectedItem[stateType ? stateType : "value"]}
            onclose={() => setColorDropdown(false)}
            handleChange={(color) =>
              handleColors(
                color,
                selectedItem.id,
                selectedItem.propertyChange,
                selectedItem.editId
              )
            }
          />
        </ColorDropWon>
      )}
    </React.Fragment>
  );
});
StyleDropDown.displayName = "StyleDropDown"
export default StyleDropDown;
