import React, { useEffect, useState } from "react";
import {
  SettingDropdownWrapper,
  SettingBody,
  SettingHead,
} from "./SettingDropdownStyle";
import Grid from "./Grid/Grid";
import SliderSetting from "./Slider/SliderSetting";
import CategoryCollectionSetting from "./Category&Collection/CategoryCollectionSetting";
import Tabs from "@/CommonComponents/Tabs/Tabs";
import ImageDropDown from "../ImageDropDown";
import VideoSetting from "./VideoSetting";
import useTemplateData from "@/CustomHooks/useTemplateData";

const SettingDropdown = ({ SettingType, sectionName, showSettingTab, showNumberOfItem = true,showGridOptions = true, showOnlyTab = false }, ref) => {
  // set state of slider
  const [isSelected, setIsSelected] = useState("");
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
    selectedElementData,] = useTemplateData()
  const [showGridOpts, setShowGridOpts] = useState("")
  const [activeTabslide, setActiveTabSlide] = useState("Image Setting");
  const SeleteGridType = (val) => {
    setIsSelected(val);
  };
  useEffect(() => {
    if (gridData?.section_name === "VideoGallery" || gridData?.section_name === "VideoGalleryTheme6") {
      setActiveTabSlide("Video Setting")
    }
  }, [gridData?.section_name])

  const [gridView, setGridview] = useState(gridData?.style?.desktop?.objectView ? gridData?.style?.desktop?.objectView : 'Grid');


  useEffect(() => {
    if (showSettingTab) {
      // setActiveTabSlide(showSettingTab)
    }
  }, [showSettingTab])
  useEffect(() => {
    if (gridData?.section_name === "VideoGallery" || gridData?.section_name === "VideoGalleryTheme6") {
      setShowGridOpts(false)
    } else {
      setShowGridOpts(showGridOptions)
    }
  }, [gridData?.section_name, showGridOptions])
  useEffect(() => {
    if (showOnlyTab) {
      setActiveTabSlide(showOnlyTab)
    }
  }, [showOnlyTab])

  useEffect(() => {
    setGridview(gridData?.style?.desktop?.objectView ? gridData?.style?.desktop?.objectView : 'Grid');
  }, [gridData])

  const NotshowNumberOfItem = gridData?.componentRender === 'VideoGallery';
  
  return (
    <SettingDropdownWrapper>
      <SettingHead>
        <h5>Settings</h5>
      </SettingHead>
      <SettingBody>
        {gridData?.section_name === "VideoGallery" || gridData?.section_name === "VideoGalleryTheme6" ? (
          <React.Fragment>
            {showOnlyTab ? "" : <Tabs
              valueState={true}
              clearState={true}
              activeTitle={(val) => {
                setActiveTabSlide(val);
              }}
              TabWrapperClass={`${"externalPageTabBtn"}`}
              TabButtonClass={`button btn-xs btn-oval ${"externalPagesTabButton"}`}
              ActiveTabClass={`${"Active"}`}
              tabs={["Video Setting", "Slider Setting"]}
              defaultValue={"Video Setting"}
            />}
            <>
              {activeTabslide === "Video Setting" ? (
                <VideoSetting />
              ) : activeTabslide === "Slider Setting" ? (
                <SliderSetting  showNumberOfItem={NotshowNumberOfItem? false : showNumberOfItem} showGridOptions={showGridOpts}  />
              )
                : (
                  "hi"
                )}
            </>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {showOnlyTab ? "" :
              <Tabs
                valueState={true}
                clearState={true}
                activeTitle={(val) => {
                  setActiveTabSlide(val);
                }}
                TabWrapperClass={`${"externalPageTabBtn"}`}
                TabButtonClass={`button btn-xs btn-oval ${"externalPagesTabButton"}`}
                ActiveTabClass={`${"Active"}`}
                tabs={["Image Setting", `${gridView === "Grid" ? "Grid Setting" : gridView === "Slider" ? "Slider Setting" : "Grid Setting"}`]}
                defaultValue={"Image Setting"}
              />}

            <>
              {activeTabslide === "Image Setting" ? (
                <ImageDropDown />
              ) : activeTabslide === "Grid Setting" || "Slider Setting" ? (
                SettingType === true ? (
                  <SliderSetting  showNumberOfItem={showNumberOfItem} showGridOptions={showGridOpts} />
                ) : (
                  <CategoryCollectionSetting />
                )
              ) : (
                ""
              )}
            </>
          </React.Fragment>
        )}
      </SettingBody>
    </SettingDropdownWrapper>
  );
};

export default SettingDropdown;
