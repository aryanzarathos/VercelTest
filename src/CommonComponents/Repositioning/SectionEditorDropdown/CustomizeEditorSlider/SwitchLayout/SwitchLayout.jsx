import React, { forwardRef, useEffect, useState } from "react";
import styles from "./SwitchLayout.module.scss";
import { styled } from "styled-components";
import SelectDropDown from "@/CommonComponents/SelectDropdown";
import { useDebounceFunction } from "@/CommonFunctions/debounce";
import { useDispatch, useSelector } from "react-redux";
import { updateMainContainer } from "@/store/reducers/SiteEditor";
import {
  changeLayout,
  updateMainContainerAppearance,
  updateSection,
  updateSectionGrid,
} from "@/store/actions/appearanceSettings";
import { CHANGE_LAYOUT } from "@/store/reducers/websiteTemplate";
import useTemplateData from "@/CustomHooks/useTemplateData";

const PositionPopupWrapper = styled.div`
  position: absolute;
  top: 97px;
  left: -190px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid rgba(32, 32, 32, 0.2);
  box-shadow: 2px 5px 10px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`;

const PositionPopupHead = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  padding-bottom: 6px;
  margin-bottom: 6px;
  justify-content: space-between;
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    font-family: "Poppins", sans-serif;
    color: #000000;
  }
  button {
    background: transparent;
    border: none;
    font-weight: 800;
    cursor: pointer;
  }
`;

const PositionPopupBody = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #202020;
    margin-bottom: 8px;
    font-family: "Poppins", sans-serif;
  }
`;

const SwitchLayoutDropdown = forwardRef(
  ({ setPositionState, selectSliderPosition, variationName, SettingType, sliderPos }, ref) => {
    const dispatch = useDispatch();
    const [selectPosition, setSelectPosition] = useState(false);
    let positionValue = ["Top", "Middle", "Bottom"];
    const [bannerPosition, setBannerPosition] = useState("Top");
    const { eventData } = useSelector((state) => {
      return {
        eventData: state.editor.selectedIndexAndId,
      };
    });
    const [selectedLayout, setSelectedLayout] = useState("")
    const [sliderPosition, setSliderPosition] = useState("Top");
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

    const debounce = useDebounceFunction((callback) => callback(), 1000);
    const selectPositionHandle = (val) => {
      selectSliderPosition(val);
    };

    const SwitchHandleClose = () => {
      setPositionState(false);
    };
    const updatePositionsBanner = (val) => {
      let value =
        val === "Top"
          ? "flex-start"
          : val === "Middle"
            ? "center"
            : val === "Bottom"
              ? "flex-end"
              : "";
      let mainContainerDataa = { ...mainContainerData };
      let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          alignItems: value,
        },
        mobile: {
          ...mainContainerData.style.mobile,
          alignItems: value,
        },
        tablet: {
          ...mainContainerData.style.tablet,
          alignItems: value,
        },
      };
      const updatedObject = { ...mainContainerDataa, style: data };
      debounce(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
      dispatch(updateMainContainer(updatedObject));
    };
    useEffect(() => {
      if (mainContainerData?.style?.["desktop"]) {
        let position =
          mainContainerData?.style?.["desktop"].alignItems;
        setBannerPosition(
          position === "flex-start"
            ? "Top"
            : position === "center"
              ? "Middle"
              : position === "flex-end"
                ? "Bottom"
                : ""
        );
      }
    }, [mainContainerData?.style]);
    useEffect(() => {
      if (SettingType === "Slider") {
        let position = sliderPos;
        setSliderPosition(
          position === "flex-start"
            ? "Top"
            : position === "center"
              ? "Middle"
              : position === "flex-end"
                ? "Bottom"
                : ""
        );
      }
    }, [SettingType, sliderPos]);

    const handleContactUs = (val, layout) => {
      // let gridPayload =  {...mainContainerData.data[0]["data"][0] } ;
      let gridPayload = { ...sectionData };
      setSelectedLayout(layout)
      let index = 0
      // if(mainContainerData.data[0]["data"].length>1){
      //   gridPayload =  [...mainContainerData.data[0]["data"][1]["data"]]
      //   index=1
      // }
      let data = {
        desktop: {
          ...gridPayload.style.desktop,
          order: val,
        },
        mobile: {
          ...gridPayload.style.mobile,
          order: val,
        },
        tablet: {
          ...gridPayload.style.tablet,
          order: val,
        },
        layout: layout
      };
      const updatedObject = { ...gridPayload, style: data };
      dispatch(updateSection({
        pageId: pageId,
        body: { style: data },
        sectionId: sectionId
      }))
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: 0,
          sectionIndex: sectionIndex,
          data: updatedObject,
          type: "RichText",
        })
      )
    };
    const CallToAction = (val, layout) => {
      let gridPayload = [...mainContainerData.data[0]["data"][0]["data"]];
      setSelectedLayout(layout)
      let data = {
        desktop: {
          ...gridPayload[0].style.desktop,
          order: val,
        },
        mobile: {
          ...gridPayload[0].style.mobile,
          order: val,
        },
        tablet: {
          ...gridPayload[0].style.tablet,
          order: val,
        },
        layout: layout
      };
      const updatedObject = { ...gridPayload[0], style: data };
      // Create a new array with the updated object
      const updatedData = [
        ...gridPayload.slice(0, 0),
        updatedObject,
        ...gridPayload.slice(0 + 1),
      ];
      dispatch(
        changeLayout({
          pageId: pageId,
          gridId: gridPayload[0]?._id,
          body: { style: data },
        })
      );
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: 0,
          sectionIndex: 0,
          data: updatedObject,
          type: "Call",
        })
      );
    };
    const handleAboutUs = (val, layout, posValue) => {
      let gridPayload = [...mainContainerData.data[0]["data"][0]["data"]];
      let index = 0
      let gridIndex = 0

      let data
      setSelectedLayout(layout)
      if (mainContainerData.data[0]["data"].length > 1) {
        gridPayload = [...mainContainerData.data[0]["data"][1]["data"]]
        index = 1
      }
      if (variationName === "AboutUsTheme3") {
        gridIndex = 1
        data = {
          desktop: {
            ...gridPayload[gridIndex].style.desktop,
            order: val,
            position: {
              ...gridPayload[gridIndex]?.style?.desktop?.position,
              left: posValue
            }
          },
          mobile: {
            ...gridPayload[gridIndex].style.mobile,
            order: val,
            position: {
              ...gridPayload[gridIndex].style.desktop.position,
              left: posValue
            }
          },
          tablet: {
            ...gridPayload[gridIndex].style.tablet,
            order: val,
            position: {
              ...gridPayload[gridIndex].style.desktop.position,
              left: posValue
            }
          },
          layout: layout
        };
      } else {
        data = {
          desktop: {
            ...gridPayload[gridIndex].style.desktop,
            order: val,
          },
          mobile: {
            ...gridPayload[gridIndex].style.mobile,
            order: val,
          },
          tablet: {
            ...gridPayload[gridIndex].style.tablet,
            order: val,
          },
          layout: layout
        };
      }

      const updatedObject = { ...gridPayload[gridIndex], style: data };
      // Create a new array with the updated object
      // const updatedData = [
      //   ...gridPayload.slice(0, 0),
      //   updatedObject,
      //   ...gridPayload.slice(0 + 1),
      // ];
      dispatch(
        changeLayout({
          pageId: pageId,
          gridId: gridPayload[gridIndex]?._id,
          body: { style: data },
        })
      );
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: 0,
          gridIndex: gridIndex,
          sectionIndex: index,
          data: updatedObject,
          type: "AboutUs",
        })
      );
    };

    const handleRichTextLayout = (val, type) => {
      setSelectedLayout(type)
      let gridPayload = { ...mainContainerData.data[0]["data"][0] };
      gridPayload["style"] = {
        ...gridPayload["style"],
        desktop: {
          ...gridPayload["style"].desktop,
          gridColumns: "1"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          gridColumns: "1"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          gridColumns: "1"
        },
        layout: type
      };
      let data = {
        ...gridPayload["style"],
        desktop: {
          ...gridPayload["style"].desktop,
          gridColumns: "1",
          display: "none"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          gridColumns: "1",
          display: "none"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          gridColumns: "1",
          display: "none"
        },
      }
      const updatedObject = { ...gridPayload.data[1], style: data };
      // Create a new array with the updated object
      const updatedData = [
        ...gridPayload.data.slice(0, 1),
        updatedObject,
        ...gridPayload.data.slice(1 + 1),
      ];

      gridPayload['data'] = updatedData
      let array = [...gridPayload.data[0].data]
      let imgData = array.find((item) => item.tagType === "image")
      let imgIndex = array.findIndex((item) => item.tagType === "image")
      let imgStyle = {
        ...imgData.style,
        desktop: {
          ...gridPayload["style"].desktop,
          display: "block"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          display: "block"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          display: "block"
        },
      }
      array[imgIndex] = {
        ...imgData,
        style: imgStyle
      }
      if (type === "layout3") {
        let indexImg = array.findIndex((item) => item.tagType === "image")
        const element = array.splice(indexImg, 1)[0]
        // console.log(element,"hi")
        array.splice(1, 0, element)
      } else if (type === "layout4") {
        let indexImg = array.findIndex((item) => item.tagType === "image")
        const element = array.splice(indexImg, 1)[0]
        array.splice(2, 0, element)
        // console.log(array)
      }
      let final = JSON.parse(JSON.stringify(gridPayload));
      final.data[0].data = array
      // console.log(final)
      dispatch(updateSectionGrid({
        pageId: pageId,
        body: { style: final.style, data: final.data },
        sectionId: final._id
      }))
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: 0,
          sectionIndex: sectionIndex,
          data: final,
          type: "RichText",
        })
      );
    };

    const handleRichTextLatest = (val, layout) => {
      let gridPayload = { ...mainContainerData.data[0]["data"][0] };
      setSelectedLayout(layout)
      gridPayload["style"] = {
        ...gridPayload["style"],
        desktop: {
          ...gridPayload["style"].desktop,
          gridColumns: "2"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          gridColumns: "2"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          gridColumns: "2"
        },
        layout: layout
      };
      let data = {
        ...gridPayload["style"],
        desktop: {
          ...gridPayload["style"].desktop,
          gridColumns: "2",
          display: "block"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          gridColumns: "2",
          display: "block"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          gridColumns: "2",
          display: "block"
        },
      }
      const updatedObject = { ...gridPayload.data[1], style: data };
      // Create a new array with the updated object
      const updatedData = [
        ...gridPayload.data.slice(0, 1),
        updatedObject,
        ...gridPayload.data.slice(1 + 1),
      ];

      gridPayload['data'] = updatedData
      let array = [...gridPayload.data[0].data]
      let imgData = array.find((item) => item.tagType === "image")
      let imgIndex = array.findIndex((item) => item.tagType === "image")
      let imgStyle = {
        ...imgData.style,
        desktop: {
          ...gridPayload["style"].desktop,
          display: "none"
        },
        tablet: {
          ...gridPayload["style"].tablet,
          display: "none"
        },
        mobile: {
          ...gridPayload["style"].mobile,
          display: "none"
        },
      }
      array[imgIndex] = {
        ...imgData,
        style: imgStyle
      }
      let final = JSON.parse(JSON.stringify(gridPayload));
      final.data[0].data = array
      let newStyles = {
        ...final.data[0].style,
        desktop: {
          ...final.data[0].style.desktop,
          order: val,
        },
        mobile: {
          ...final.data[0].style.mobile,
          order: val,
        },
        tablet: {
          ...final.data[0].style.tablet,
          order: val,
        },
      };
      final.data[0]['style'] = newStyles
      // console.log(final,"hihi")
      dispatch(updateSectionGrid({
        pageId: pageId,
        body: { style: final.style, data: final.data },
        sectionId: final._id
      }))
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: 0,
          sectionIndex: sectionIndex,
          data: final,
          type: "RichText",
        })
      );
    }
    const handleRichTextVariations = (val, layout) => {
      let gridPayload = [...mainContainerData.data[0]["data"][0]["data"]];
      setSelectedLayout(layout)
      let data = {
        desktop: {
          ...gridPayload[0].style.desktop,
          order: val,
        },
        mobile: {
          ...gridPayload[0].style.mobile,
          order: val,
        },
        tablet: {
          ...gridPayload[0].style.tablet,
          order: val,
        },
        layout: layout
      };
      const updatedObject = { ...gridPayload[0], style: data };
      // Create a new array with the updated object
      const updatedData = [
        ...gridPayload.slice(0, 0),
        updatedObject,
        ...gridPayload.slice(0 + 1),
      ];
      dispatch(
        changeLayout({
          pageId: pageId,
          gridId: gridPayload[0]?._id,
          body: { style: data },
        })
      );
      dispatch(
        CHANGE_LAYOUT({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: 0,
          sectionIndex: 0,
          data: updatedObject,
          type: "Call",
        })
      );
    }
    const RenderLayoutSetting = (valueType) => {
      switch (valueType) {
        case "Banner":
          return (
            <React.Fragment>
              <p>Vertical Align</p>
              <SelectDropDown
                showValue={bannerPosition}
                values={positionValue}
                deafultValue={bannerPosition}
                handleSelect={(val) => updatePositionsBanner(val)}
              />
            </React.Fragment>
          );
        case "RichText":
          return (
            <React.Fragment>
              {variationName === "richTextTheme1" ?
                <div className={styles.RichText_Wrap}>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout1" && styles.Active}`}
                    onClick={() => handleRichTextLatest(0, "layout1")}
                  >
                    <i className={styles.RichText_Icon1}></i>
                  </button>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout2" && styles.Active}`}
                    onClick={() => handleRichTextLatest(4, "layout2")}
                  >
                    <i className={styles.RichText_Icon2}></i>
                  </button>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout3" && styles.Active}`}
                    onClick={() => handleRichTextLayout("", "layout3")}
                  >
                    <i className={styles.RichText_Icon3}></i>
                  </button>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout4" && styles.Active}`}
                    onClick={() => handleRichTextLayout("", "layout4")}
                  >
                    <i className={styles.RichText_Icon4}></i>
                  </button>
                </div> :
                <div className={styles.RichText_Wrap}>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout1" && styles.Active}`}
                    onClick={() => handleRichTextVariations(0, "layout1")}
                  >
                    <i className={styles.contactus_Icon1}></i>
                  </button>
                  <button
                    className={`${styles.buttonWrap} ${selectedLayout === "layout2" && styles.Active}`}
                    onClick={() => handleRichTextVariations(3, "layout2")}
                  >
                    <i className={styles.contactus_Icon2}></i>
                  </button>
                </div>}
            </React.Fragment>
          );
        case "ContactUs":
          return (
            <React.Fragment>
              <div className={styles.RichText_Wrap}>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout1" && styles.Active}`}
                  onClick={() => handleContactUs(0, "layout1")}
                >
                  <i className={styles.contactus_Icon1}></i>
                </button>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout2" && styles.Active}`}
                  onClick={() => handleContactUs(4, "layout2")}
                >
                  <i className={styles.contactus_Icon2}></i>
                </button>
              </div>
            </React.Fragment>
          );
        case "AboutUs":
          return (
            <React.Fragment>
              <div className={styles.RichText_Wrap}>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout1" && styles.Active}`}
                  onClick={() => handleAboutUs(variationName === "AboutUsTheme3" ? 2 : 1, "layout1", "")}
                >
                  <i className={styles.aboutus_Icon1}></i>
                </button>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout2" && styles.Active}`}
                  onClick={() => handleAboutUs(variationName === "AboutUsTheme3" ? 0 : 3, "layout2", "40px")}
                >
                  <i className={styles.aboutus_Icon2}></i>
                </button>
              </div>
            </React.Fragment>
          );
        case "CallToAction":
          return (
            <React.Fragment>
              <div className={styles.RichText_Wrap}>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout1" && styles.Active}`}
                  onClick={() => CallToAction(1, "layout1")}
                >
                  <i className={styles.callToAction_Icon1}></i>
                </button>
                <button
                  className={`${styles.buttonWrap} ${selectedLayout === "layout2" && styles.Active}`}
                  onClick={() => CallToAction(3, "layout2")}
                >
                  <i className={styles.callToAction_Icon2}></i>
                </button>
              </div>
            </React.Fragment>
          );
        case "Slider":
          return (
            <React.Fragment>
              <p>Vertical Align</p>
              <SelectDropDown
                showValue={sliderPosition}
                values={positionValue}
                deafultValue={sliderPosition}
                handleSelect={(val) => selectPositionHandle(val)}
              />
            </React.Fragment>
          );
        default:
          return;
      }
    };
    useEffect(() => {
      if (SettingType === "RichText") {
        if (variationName === "richTextTheme1") {
          setSelectedLayout(sectionData?.style?.layout ? sectionData?.style?.layout : mainContainerData?.data?.[0]?.["data"]?.[0]?.style?.layout)
        } else {
          setSelectedLayout(mainContainerData?.data?.[0]?.["data"]?.[0]?.style?.layout)
        }
      } else if (SettingType === "ContactUs") {
        setSelectedLayout(sectionData?.style?.layout ? sectionData?.style?.layout : mainContainerData?.data?.[0]?.["data"]?.[0]?.style?.layout)
      } else if (SettingType === "AboutUs") {
        if (mainContainerData?.data?.[0]?.["data"]?.length > 1) {
          setSelectedLayout(mainContainerData?.data?.[0]?.["data"]?.[1]?.["data"]?.[0]?.style?.layout)
        } else {
          setSelectedLayout(mainContainerData?.data?.[0]?.["data"]?.[0]?.["data"]?.[0]?.style?.layout)
        }

      } else if (SettingType === "CallToAction") {
        setSelectedLayout(mainContainerData?.data?.[0]?.["data"]?.[0]?.style?.layout)
      }
    }, [SettingType, mainContainerData, sectionData, variationName])
    return (
      <PositionPopupWrapper ref={ref}>
        <PositionPopupHead>
          <h5>Position</h5>
          <button onClick={SwitchHandleClose}>&#10005;</button>
        </PositionPopupHead>
        <PositionPopupBody>
          {RenderLayoutSetting(SettingType)}
        </PositionPopupBody>
      </PositionPopupWrapper>
    );
  }
);

SwitchLayoutDropdown.displayName = "SwitchLayoutDropdown";

export default SwitchLayoutDropdown;
