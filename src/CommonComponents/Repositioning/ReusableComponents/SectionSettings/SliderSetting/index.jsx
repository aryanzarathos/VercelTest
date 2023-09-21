import React, { useEffect, useState } from "react";
import Tabs from "../../../../Tabs/Tabs";
import SliderTab from "./Slider/SliderTab";
import VideoTab from "./Video/VideoTab";
import ImageTab from "./Image/ImageTab";
import styles from "./SliderSetting.module.scss";
import InputColorPicker from "../../../../ColorPicker";
import { updateSliderGrid } from "@/store/actions/appearanceSettings";
import { UPDATE_SLIDER } from "@/store/reducers/websiteTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { UPDATE_SLIDER_GRID } from "@/store/reducers/SiteEditor";
import useTemplateData from "@/CustomHooks/useTemplateData";

const SliderSetting = () => {
  const dispatch = useDispatch()
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
  const [active, setActive] = useState("Slider");
  const [colorPopup, setColorPopup] = useState("");
  const [colors, setColors] = useState({
    arrowColor: "",
    dotsColor: "",
  });
  const handleColorWrap = (val) => {
    setColorPopup(val);
  };
  const ClosehandleColor = () => {
    setColorPopup("");
  };
  const updateColor = (color) => {
    setColors({ ...colors, [colorPopup]: color });
    let gridPayload = { ...gridData };
    gridPayload["sliderSetting"] = {
      ...gridPayload["sliderSetting"],
      [colorPopup]: color,
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
  useEffect(() => {
    if (gridData?.sliderSetting) {
      setColors({
        arrowColor: gridData?.sliderSetting?.arrowColor,
        dotsColor: gridData?.sliderSetting?.dotsColor,
      });
    }
  }, [gridData?.sliderSetting]);
  return (
    <React.Fragment>
      <Tabs
        valueState={true}
        defaultValue="Slider"
        clearState={true}
        activeTitle={(val) => setActive(val)}
        TabWrapperClass={styles.BannerEditorDropdown}
        TabButtonClass={`${styles.EditorBtns}`}
        ActiveTabClass={styles.ActiveBtn}
        tabs={["Slider", "Image", "Video"]}
      />
      <div>
        {active === "Slider" ? (
          <SliderTab handleColorWrap={handleColorWrap} colors={colors} />
        ) : active === "Image" ? (
          <ImageTab />
        ) : active === "Video" ? (
          <VideoTab />
        ) : (
          ""
        )}
      </div>

      {colorPopup && (
        <div className={styles.ColorPopup_Wrapper}>
          <InputColorPicker
            onclose={ClosehandleColor}
            handleChange={(color) => updateColor(color)}
            value={colors[colorPopup]}
            Color={colors[colorPopup]}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default SliderSetting;
