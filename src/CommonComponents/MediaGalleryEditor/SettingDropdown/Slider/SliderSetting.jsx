import React, { useEffect, useRef, useState } from "react";
import {
  SettingItemWrap,
  SettingItems,
  FormFieldWrap,
  Span,
  ColorPickerDropdown,
} from "./SliderSettingStyle";
import SelectDropDown from "../../../SelectDropdown";
import SwitchButton from "../../../SwitchButton";
import ColorPalette from "../../../ColorPalette";
import FormInput from "../../../Form/FormInput";
import { useDetectOutsideClick } from "../../../DetectOutsideClick/useDetectOutsideClick";
import InputColorPicker from "../../../ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import useTemplateData from "@/CustomHooks/useTemplateData";
import { updateGridSettings } from "@/store/actions/updateGridSetting";

const SliderSetting = ({ showGridOptions, showNumberOfItem }) => {
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
  const symbolsArray = ["e", "+", "-", ".", " "];
  const dispatch = useDispatch()
  const ArrowColorRef = useRef(null);
  const objView = ["Grid", "Slider"];
  const GridItemValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [sliderSettings, setSliderSettings] = useState({
    dots: "",
    arrowColor: "",
    dotsColor: "",
    autoPlay: "",
    autoPlaySpeed: "",
    pauseOnHover: "",
    loop: ""
  });
  const [isSelectedColor, setIsSelectedColor] = useState(false);
  const [gridType, setGridType] = useState(showGridOptions ? "Grid" : "Slider");
  const [gridItems, setGridItems] = useState("");
  const NavigationValue = ["Arrows & Dots", "Dots", "Arrows", "None"];
  const [navVal, setNavVal] = useState("")
  const gridHandle = (val, type) => {
    if (type === "gridCount") {
      setGridItems(val)
    } else {
      setGridType(val)
    }
    setGridItems(val);

    if (gridType === "Slider" && type === "gridCount") {
      let gridPayload = { ...gridData };
      let obj = {
        breakpoints: {
          ...gridPayload?.sliderSetting?.breakpoints,
          desktop: {
            slidesPerView: parseInt(val)
          }
        }
      };
      gridPayload["sliderSetting"] = {
        ...gridPayload["sliderSetting"],
        ...obj,
      };
      dispatch(updateGridSettings({
        pageId: pageId,
        gridId: gridId,
        body: { sliderSetting: gridPayload['sliderSetting'] },
        indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          sectionIndex: sectionIndex,
          gridIndex: gridIndex
        }
      }))
    } else {
      const gridPayload = { ...gridData };
      let styleData = {
        ...gridPayload.style,
        desktop: {
          ...gridPayload.style.desktop,
          [type]: val,
        },
       
      };
      gridPayload["style"] = styleData;
      dispatch(updateGridSettings({
        pageId: pageId,
        gridId: gridId,
        body: { style: styleData },
        indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          sectionIndex: sectionIndex,
          gridIndex: gridIndex
        }
      }))
    }

  };
  const NavigationTypeHandle = (val) => {
    setNavVal(val);
    let obj = {};
    if (val === "Arrows & Dots") {
      obj = {
        arrows: true,
        dots: true,
      };
    } else if (val === "Arrows") {
      obj = {
        arrows: true,
        dots: false,
      };
    } else if (val === "Dots") {
      obj = {
        arrows: false,
        dots: true,
      };
    } else if (val === "None") {
      obj = {
        arrows: false,
        dots: false,
      };
    }
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...gridPayload["sliderSetting"],
      ...obj,
    };
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { sliderSetting: gridPayload['sliderSetting'] },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  };

  const colorPalletHandle = (val) => {
    setIsSelectedColor(val);
  };
  const CloseColorPalletHandle = () => {
    setIsSelectedColor(false);
  };
  useEffect(() => {
    if (gridData) {
      if (showGridOptions) {
        if (gridType === "Slider") {

          setGridItems(gridData?.["sliderSetting"]?.["breakpoints"]?.["desktop"]?.slidesPerView)
        } else {
          setGridItems(gridData?.["style"]?.["desktop"]?.gridCount)
        }
        setGridType(gridData?.["style"]?.["desktop"]?.objectView)
      }

      setSliderSettings({
        dots: gridData?.sliderSetting?.dots,
        arrowColor: gridData?.sliderSetting?.arrowColor,
        dotsColor: gridData?.sliderSetting?.dotsColor,
        autoPlay: gridData?.sliderSetting?.autoPlay,
        autoPlaySpeed: gridData?.sliderSetting?.autoPlaySpeed,
        arrows: gridData?.sliderSetting?.arrows,
        pauseOnHover: gridData?.sliderSetting?.pauseOnHover,
        loop: gridData?.sliderSetting?.loop
      })
      if (
        gridData?.sliderSetting?.arrows === true &&
        gridData?.sliderSetting?.dots === true
      ) {
        setNavVal("Arrows & Dots");
      } else if (gridData?.sliderSetting?.arrows === true) {
        setNavVal("Arrows");
      } else if (gridData?.sliderSetting?.dots) {
        setNavVal("Dots");
      } else {
        setNavVal("None");
      }
    }
  }, [gridData, gridType, showGridOptions])


  const updateSliderToggle = (val, type) => {
    setSliderSettings({ ...sliderSettings, [type]: val });
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...gridPayload["sliderSetting"],
      [type]: val,
    };
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { sliderSetting: gridPayload['sliderSetting'] },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  };
  const handleInput = (e, type) => {
    setSliderSettings({ ...sliderSettings, [type]: e.target.value })
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...gridPayload["sliderSetting"],
      [type]: parseInt(e.target.value),
    };
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { sliderSetting: gridPayload['sliderSetting'] },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  }
  const changeColor = (val) => {
    setSliderSettings({ ...sliderSettings, [isSelectedColor]: val })
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...gridPayload["sliderSetting"],
      [isSelectedColor]: val,
    };
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { sliderSetting: gridPayload['sliderSetting'] },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  }
  const NoShowMore = gridData?.componentRender === 'BlogTheme13';


  return (
    <React.Fragment>
      <>
        <SettingItemWrap>
          {showGridOptions &&
            <SettingItems>
              <p>Object View</p>
              <SelectDropDown
                className={`select_dropdown`}
                showValue={gridType}
                values={objView}
                handleSelect={(val) => gridHandle(val, "objectView")}
              />
            </SettingItems>
          }
          {showNumberOfItem && <SettingItems>
            <p>No. of items per row</p>
            <SelectDropDown
              className={`select_dropdown`}
              showValue={gridItems}
              values={GridItemValue}
              handleSelect={(val) => gridHandle(val, "gridCount")}
              showMore={!NoShowMore}
            />
          </SettingItems>}
        </SettingItemWrap>
      </>
      {gridType === "Slider" && (
        <React.Fragment>
          <SettingItemWrap>
            <SettingItems>
              <p>Navigation</p>
              <SelectDropDown
                className={`select_dropdown`}
                showValue={navVal}
                values={NavigationValue}
                handleSelect={NavigationTypeHandle}
              />
            </SettingItems>
            {navVal == "Arrows" ?
              <SettingItems>
                <p>Arrow Color</p>
                <ColorPalette
                  colorCode={sliderSettings.arrowColor}
                  paletteHandle={() => colorPalletHandle("arrowColor")}
                />
              </SettingItems> : navVal == "Arrows & Dots" ?
                <>
                  <SettingItems>
                    <p>Dots Color</p>
                    <ColorPalette
                      colorCode={sliderSettings.dotsColor}
                      paletteHandle={() => colorPalletHandle("dotsColor")}
                    />
                  </SettingItems>
                  <SettingItems>
                    <p>Arrow Color</p>
                    <ColorPalette
                      colorCode={sliderSettings.arrowColor}
                      paletteHandle={() => colorPalletHandle("arrowColor")}
                    />
                  </SettingItems>
                </> : navVal == "Dots" ? <SettingItems>
                  <p>Dots Color</p>
                  <ColorPalette
                    colorCode={sliderSettings.dotsColor}
                    paletteHandle={() => colorPalletHandle("dotsColor")}
                  />
                </SettingItems> : ""
            }


          </SettingItemWrap>
          <SettingItemWrap>
            <SettingItems>
              <p>AutoPlay</p>
              <SwitchButton layout={true} checked={sliderSettings.autoPlay} onChange={(e) => updateSliderToggle(e.target.checked, "autoPlay")} />
            </SettingItems>
            <SettingItems>
              <p>AutoPlay Speed</p>
              <FormFieldWrap>
                <FormInput type="number" className="InputFields"
                  onChange={(e) => handleInput(e, "autoPlaySpeed")}
                  value={sliderSettings.autoPlaySpeed}
                  onKeyDown={(e) =>
                    symbolsArray.includes(e.key) && e.preventDefault()
                  }
                />
                <Span>ms</Span>
              </FormFieldWrap>
            </SettingItems>
          </SettingItemWrap>
          <SettingItemWrap>
            <SettingItems>
              <p>Pause on Hover</p>
              <SwitchButton layout={true} checked={sliderSettings.pauseOnHover} onChange={(e) => updateSliderToggle(e.target.checked, "pauseOnHover")} />
            </SettingItems>
            <SettingItems>
              <p>Play in Loop</p>
              <SwitchButton layout={true} checked={sliderSettings.loop} onChange={(e) => updateSliderToggle(e.target.checked, "loop")} />
            </SettingItems>
            {/* <SettingItems>
              <button className="button btn-o-silver btn-oval btn-xs">
                Cancel
              </button>
              <button className="button button-primary btn-oval btn-xs">
                Save
              </button>
            </SettingItems> */}
          </SettingItemWrap>
        </React.Fragment>
      )}
      {isSelectedColor && (
        <ColorPickerDropdown >
          <InputColorPicker onclose={CloseColorPalletHandle}
            value={sliderSettings[isSelectedColor]}
            handleChange={(color) => changeColor(color)}
            ref={ArrowColorRef} />
        </ColorPickerDropdown>
      )}
    </React.Fragment>
  );
};

export default SliderSetting;
