import React, { useEffect, useState } from "react";
import styles from "./SliderTab.module.scss";
import SelectDropDown from "../../../../../SelectDropdown";
import ColorPalette from "../../../../../ColorPalette";
import SwitchButton from "../../../../../SwitchButton";
import FormInput from "../../../../../Form/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { UPDATE_SLIDER_GRID } from "@/store/reducers/SiteEditor";
import { updateSliderGrid } from "@/store/actions/appearanceSettings";
import { Navigation } from "swiper";
import { UPDATE_SLIDER } from "@/store/reducers/websiteTemplate";
import useTemplateData from "@/CustomHooks/useTemplateData";

const SliderTab = ({ handleColorWrap, colors }) => {
  const SliderSize = ["Small", "Medium", "Large", "Extra Large"];
  const NavigationValue = ["Arrows & Dots", "Arrows", "Dots", "None"];
  const symbolsArray = ["e", "+", "-", ".", " "];
  const dispatch = useDispatch();
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
    selectedElementData] = useTemplateData()
  const {
    pageId
  } = useSelector((state) => state.editor.selectedIndexAndId);
  const debounce = useDebounceFunction((callback) => callback(), 500);
  const [navVal, setNavVal] = useState("");
  const [sliderSetting, setSliderSetting] = useState({
    arrows: true,
    dots: true,
    autoPlay: false,
    autoPlaySpeed: 3000,
    pauseOnHover: true,
    loop: true,
  });
  const [sliderSize, setSliderSize] = useState("");
  const seleteSizeHandle = (val) => {
    let size =
      val === "Small"
        ? "375px"
        : val === "Medium"
          ? "475px"
          : val === "Large"
            ? "575px"
            : val === "Extra Large"
              ? "675px"
              : "";
    setSliderSize(val);
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...sliderSetting,
      Silderheight: size,
    };
    debounce(() =>
      dispatch(
        updateSliderGrid({
          pageId: pageId,
          gridId: gridId,
          body: { sliderSetting: gridPayload["sliderSetting"] },
        })
      )
    );
    dispatch(
      UPDATE_SLIDER({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: gridPayload,
      })
    );
    dispatch(UPDATE_SLIDER_GRID({ data: gridPayload }));
  };
  const handleNavigation = (val) => {
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
      ...sliderSetting,
      ...obj,
    };
    dispatch(
      updateSliderGrid({
        pageId: pageId,
        gridId: gridId,
        body: { sliderSetting: gridPayload["sliderSetting"] },
      })
    );
    dispatch(
      UPDATE_SLIDER({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: gridPayload,
      })
    );
    dispatch(UPDATE_SLIDER_GRID({ data: gridPayload }));
  };
  const updateSliderToggle = (val, type) => {
    setSliderSetting({ ...sliderSetting, [type]: val });
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...sliderSetting,
      [type]: val,
    };
    dispatch(
      updateSliderGrid({
        pageId: pageId,
        gridId: gridId,
        body: { sliderSetting: gridPayload["sliderSetting"] },
      })
    );
    dispatch(
      UPDATE_SLIDER({
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        gridIndex: gridIndex,
        selectedElementIndex: selectedElementIndex,
        sectionIndex: sectionIndex,
        data: gridPayload,
      })
    );
    dispatch(UPDATE_SLIDER_GRID({ data: gridPayload }));
  };
  const handleInput = (val, type) => {
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...sliderSetting,
      [type]: val,
    };
    debounce(() =>
      dispatch(
        UPDATE_SLIDER({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
          data: gridPayload,
        })
      )
    );
    dispatch(UPDATE_SLIDER_GRID({ data: gridPayload }));
    dispatch(
      updateSliderGrid({
        pageId: pageId,
        gridId: gridId,
        body: { sliderSetting: gridPayload["sliderSetting"] },
      })
    );
  };
  useEffect(() => {
    if (gridData?.sliderSetting) {
      setSliderSetting(gridData.sliderSetting);
    }
    let height = gridData.sliderSetting?.Silderheight;
    let size =
      height === "375px"
        ? "Small"
        : height === "475px"
          ? "Medium"
          : height === "575px"
            ? "Large"
            : height === "675px"
              ? "Extra Large"
              : "";
    setSliderSize(size);
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
  }, [gridData?.sliderSetting]);
  return (
    <React.Fragment>
      <div className={styles.Slide_Wrapper}>
        <div className={styles.SlideSetting}>
          <div className={styles.SlideSetting_Item}>
            <p className={styles.title}>Slider Size</p>
            <SelectDropDown
              className={styles.Select_Wrapper}
              showValue={"Small"}
              values={SliderSize}
              handleSelect={(val) => seleteSizeHandle(val)}
            />
          </div>
        </div>
        <div className={styles.SlideSetting}>
          <div className={styles.SlideSetting_Item}>
            <p className={styles.title}>Navigation</p>
            <SelectDropDown
              className={styles.Select_Wrapper}
              showValue={navVal}
              values={NavigationValue}
              handleSelect={(val) => handleNavigation(val)}
            />
          </div>
          {
            navVal == "Arrows" ?
              <div className={styles.SlideSetting_Item}>
                <p className={styles.title}>Arrow Color</p>
                <ColorPalette
                  colorCode={colors?.arrowColor}
                  paletteHandle={() => handleColorWrap("arrowColor")}
                />
              </div> : navVal == "Arrows & Dots" ?
                <>
                  <div className={styles.SlideSetting_Item}>
                    <p className={styles.title}>Arrow Color</p>
                    <ColorPalette
                      colorCode={colors?.arrowColor}
                      paletteHandle={() => handleColorWrap("arrowColor")}
                    />
                  </div>
                  <div className={styles.SlideSetting_Item}>
                    <p className={styles.title}>Dots Color</p>
                    <ColorPalette
                      colorCode={colors?.dotsColor}
                      paletteHandle={() => handleColorWrap("dotsColor")}
                    />
                  </div>
                </> : ""
          }


        </div>
        <div className={styles.SlideSetting}>
          <div className={styles.SlideSetting_Item}>
            <p className={styles.title}>AutoPlay</p>
            <SwitchButton
              layout={true}
              checked={sliderSetting.autoPlay}
              onChange={(e) => updateSliderToggle(e.target.checked, "autoPlay")}
            />
          </div>
          <div className={styles.SlideSetting_Item}>
            <p className={styles.title}>AutoPlay Speed</p>
            <div className={styles.AutoSpeedWrapper}>
              <input
                type="number"
                placeholder="5000"
                className={styles.FormInputFields}
                onChange={(e) => handleInput(e.target.value, "autoPlaySpeed")}
                onKeyDown={(e) =>
                  symbolsArray.includes(e.key) && e.preventDefault()
                }
                value={sliderSetting?.autoPlaySpeed}
              />
              <span className={styles.measure}>ms</span>
            </div>
          </div>
        </div>
        <div className={styles.SlideSetting}>
          <div className={styles.SlideSetting_Item}>
            <p className={styles.title}>Pause on Hover</p>
            <SwitchButton
              layout={true}
              checked={sliderSetting.pauseOnHover}
              onChange={(e) =>
                updateSliderToggle(e.target.checked, "pauseOnHover")
              }
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.button_group}>
        <button className={`button btn-o-silver btn-xs btn-oval`}>Cancel</button>
        <button className={`button button-primary btn-xs btn-oval`}>Save</button>
      </div> */}
    </React.Fragment>
  );
};

export default SliderTab;
