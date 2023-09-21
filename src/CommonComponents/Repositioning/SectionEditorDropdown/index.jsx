import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./bannerEditorDropdown.module.scss";
import Tabs from "../../Tabs/Tabs";
import Appearance from "./CustomizeEditorSlider/Appearance";
import Elements from "./CustomizeEditorSlider/Elements";
import CheckboxInput from "../../Form/CheckboxInput";
import FormInput from "../../Form/FormInput";
import { useDebounceFunction } from "../../../CommonFunctions/debounce";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewSlide,
  deleteSlide,
  updateBlockElements,
  updateMainContainerAppearance,
  updateSlide,
} from "../../../store/actions/appearanceSettings";
import { UPDATE_BLOCK_ELEMENTS, UPDATE_GRID_DATA } from "../../../store/reducers/websiteTemplate";
import { SELECT_OPTION, updateMainContainer } from "@/store/reducers/SiteEditor";
import useTemplateData from "@/CustomHooks/useTemplateData";
import { updateGridSettings } from "@/store/actions/updateGridSetting";

const EditorDropdownWrap = styled.div`
  min-width: 316px;
  background: #ffffff;
  border: 1px solid rgba(32, 32, 32, 0.2);
  box-shadow: 2px 5px 10px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
  padding: 16px;
  position: absolute;
  top: 45px;
  left: 0;

  h5 {
    font-family: "Poppins", sans-serif;
  }
`;
const Tabs__Content = styled.div``;
const TabRenderWrap = styled.div`
  padding-top: 14px;
`;

const BannerEditorDropdown = forwardRef(
  ({ sectionType, CloseSettingHandle, variationName }, ref) => {
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
      selectedElementData, pageId] = useTemplateData()
    const { data, user } = useSelector((state) => {
      return {
        user: state.user,
        data: state.websiteTemplate.getTemplate.data,
      };
    });
    const [sliderKey, setSliderKey] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [slideName, setSlideName] = useState("");
    const [slideId, setSlideId] = useState("");
    const [active, setActive] = useState("Appearance");
    const [selectedValue, setSelectedValue] = useState(false);
    const [editName, setEditName] = useState(false);
    const [appearanceValues, setAppearanceValues] = useState({});
    const debouncedAppearance = useDebounceFunction(
      (callback) => callback(),
      1000
    );

    const OpenSettingHandle = (_id, key) => {
      dispatch(SELECT_OPTION({
        sliderValues: {
          currentIndex: key
        }
      }))
      setSelectedValue(true);
      setSliderKey(key);
      setSlideId(_id);
    };

    // Function to handle checkbox selection
    const handleCheckboxChange = (e, itemId, key) => {
      let items = selectedItems;
      if (e.target.checked) {
        if (items.length !== (gridData?.data.length - 1)) {
          items.push(itemId);
        }
      } else {
        let index = items.indexOf(itemId);
        items.splice(index, 1);
      }
      setSelectedItems([...items]);
    };
    const addNewSlide = () => {
      let defaultSlideData = {
        opacity: 0.5,
        id: 1,
        url: "https://images.unsplash.com/photo-1682613375621-c10d167c852e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt: "video",
        heading: "Top-left aligned texts",
        subHeading:
          "This is a paragraph. Click here to edit the text. Its easy. Just click here to add your own content and make changes to it.",
        button: "button",
        type: "image",
        business: user.user_business,
        Slide_name: `Slide ${gridData?.data.length + 1}`,
        background_color: "",
        background_type: "",

      };
      dispatch(createNewSlide({
        gridId: gridId, body: defaultSlideData, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
        }
      }))

    };
    // Function to delete selected items
    const deleteSelectedItems = () => {
      dispatch(deleteSlide({
        gridId: gridId, body: selectedItems, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,

        }
      }))
      setSelectedItems([])
    };
    const EditSlideNameHandle = (val) => {
      if (slideName !== "" && slideName) {
        let data = {
          ...gridData?.data[sliderKey],
          Slide_name: slideName
        }
        dispatch(updateSlide({
          gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
            mainContainerIndex: mainContainerIndex,
            subcontainerIndex: subcontainerIndex,
            gridIndex: gridIndex,
            selectedElementIndex: selectedElementIndex,
            sectionIndex: sectionIndex,
            sliderKey: sliderKey
          }
        }))
        setEditName(false);
      }
    };
    const updateSectionColor = (color, type) => {
      let mainContainerDataa = { ...mainContainerData };
      let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          background: color,
          backgroundType: type?.toLowerCase(),
        },
        mobile: {
          ...mainContainerData.style.mobile,
          background: color,
          backgroundType: type?.toLowerCase(),
        },
        tablet: {
          ...mainContainerData.style.tablet,
          background: color,
          backgroundType: type?.toLowerCase(),
        },
      };
      const updatedObject = { ...mainContainerDataa, style: data };
      debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
      dispatch(
        updateMainContainer(updatedObject)
      )
    };
    const updateBackgroundType = (type) => {
      let mainContainerDataa = { ...mainContainerData };
      let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          backgroundType: type?.toLowerCase(),
        },
        mobile: {
          ...mainContainerData.style.mobile,
          backgroundType: type?.toLowerCase(),
        },
        tablet: {
          ...mainContainerData.style.tablet,
          backgroundType: type?.toLowerCase(),
        },
      };
      const updatedObject = { ...mainContainerDataa, style: data };
      debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
      dispatch(
        updateMainContainer(updatedObject)
      )
    }
    const handleSectionUpload = (val, type) => {
      let mainContainerDataa = { ...mainContainerData };
      let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          backgroundType: type?.toLowerCase(),
          [type.toLowerCase() === "image"
            ? "backgroundImage"
            : type.toLowerCase()]: {
            ...mainContainerData?.style?.desktop?.[
            type.toLowerCase() === "image"
              ? "backgroundImage"
              : type.toLowerCase()
            ],
            url: val.src,
          },
        },
        mobile: {
          ...mainContainerData.style.mobile,
          backgroundType: type?.toLowerCase(),
          [type.toLowerCase() === "image"
            ? "backgroundImage"
            : type.toLowerCase()]: {
            ...mainContainerData?.style?.mobile?.[
            type.toLowerCase() === "image"
              ? "backgroundImage"
              : type.toLowerCase()
            ],
            url: val.src,
          },
        },
        tablet: {
          ...mainContainerData.style.tablet,
          backgroundType: type?.toLowerCase(),
          [type.toLowerCase() === "image"
            ? "backgroundImage"
            : type.toLowerCase()]: {
            ...mainContainerData?.style?.tablet?.[
            type.toLowerCase() === "image"
              ? "backgroundImage"
              : type.toLowerCase()
            ],
            url: val.src,
          },
        },
      };
      const updatedObject = { ...mainContainerDataa, style: data };
      debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
      dispatch(
        updateMainContainer(updatedObject)
      )
    };
    const updateSectionOpacity = (val) => {
      let mainContainerDataa = { ...mainContainerData };
      let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          overlayOpacity: parseFloat(val),
        },
        mobile: {
          ...mainContainerData.style.mobile,
          overlayOpacity: parseFloat(val),
        },
        tablet: {
          ...mainContainerData.style.tablet,
          overlayOpacity: parseFloat(val),
        },
      };
      const updatedObject = { ...mainContainerDataa, style: data };
      debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
      dispatch(
        updateMainContainer(updatedObject)
      )
    };
    const handleHideShowElement = (e, data, gridData) => {
      let gridPayload = [...gridData.data];
      const updatedObject = {
        ...gridPayload[data.elementIndex],
        show: e.target.checked,
      };
      // Create a new array with the updated object
      const updatedData = [
        ...gridPayload.slice(0, data.elementIndex),
        updatedObject,
        ...gridPayload.slice(data.elementIndex + 1),
      ];
      dispatch(
        UPDATE_BLOCK_ELEMENTS({
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: data?.containerIndex,
          gridIndex: data?.gridIndex,
          selectedElementIndex: data?.elementIndex,
          sectionIndex: data?.sectionIndex,
          data: updatedData[data?.elementIndex],
        })
      );
      debouncedAppearance(() =>
        dispatch(
          updateBlockElements({
            pageId: pageId,
            gridId: data?.gridId,
            body: { data: updatedData },
          })
        )
      );
    };
    const handleGridElement = (e, data, gridData) => {
      dispatch(updateGridSettings({
        pageId: pageId, gridId: data?.gridId, body: { gridShow: e.target.checked }, indexesData: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: data?.containerIndex,
          sectionIndex: data?.sectionIndex,
          gridIndex: data?.gridIndex,
        }
      }));

    }
    const handleElementPosition = () => { };
    const selectSliderPosition = (val) => {
      let value = val === "Top" ? "flex-start" : val === "Middle" ? "center" : val === "Bottom" ? "flex-end" : ""
      let data = {
        ...gridData?.data[sliderKey],
        alignItems: value
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      }))
    }
    const handleSliderUpload = (url, type) => {
      let data = {
        ...gridData?.data[sliderKey],
        url: url,
        type: type.toLowerCase(),
        background_type: type.toLowerCase()
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
          sliderKey: sliderKey
        }
      }))
    }
    const updateSliderColor = (color, type) => {
      let data = {
        ...gridData?.data[sliderKey],
        background_color: color,
        type: type.toLowerCase(),
        background_type: type.toLowerCase()
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      }))
    }
    const upadteSliderType = (type) => {
      let data = {
        ...gridData?.data[sliderKey],
        type: type.toLowerCase(),
        background_type: type.toLowerCase()
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      }))
    }
    const updateSliderOpacity = (val) => {
      let data = {
        ...gridData?.data[sliderKey],
        opacity: val
      }
      debouncedAppearance(() => dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      })))
    }
    const handleHideShowSliderElement = (e, type) => {
      let data = {
        ...gridData?.data[sliderKey],
        [type]: e.target.checked
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: gridData?.data[sliderKey]._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
          sliderKey: sliderKey
        }
      }))
    }
    useEffect(() => {
      if (sectionType === "Slider" && sliderKey !== "") {
        let sliderProperty = gridData?.data[sliderKey]?.type
        setAppearanceValues({
          type: sliderProperty,
          range: "",
          showButton: gridData?.data[sliderKey]?.showButton,
          showHeading: gridData?.data[sliderKey]?.showHeading,
          showSubHeading: gridData?.data[sliderKey]?.showSubHeading,
          valueSrc: gridData?.data[sliderKey]?.url,
          backgroundColor:
            gridData?.data[sliderKey]?.background_color,
          overlayOpacity:
            gridData?.data[sliderKey]?.opacity,
          alignItems: gridData?.data[sliderKey]?.alignItems
        });
        setSlideName(gridData?.data[sliderKey]?.Slide_name)
      } else {
        let property =
          mainContainerData?.style?.["desktop"]?.backgroundType ===
            "image"
            ? "backgroundImage"
            : "video";
        setAppearanceValues({
          type: mainContainerData?.style?.["desktop"].backgroundType,
          range: "",
          valueSrc:
            mainContainerData?.style?.["desktop"][property]?.url,
          backgroundColor:
            mainContainerData?.style?.["desktop"]?.background,
          overlayOpacity:
            mainContainerData?.style?.["desktop"]?.overlayOpacity,
        });
      }
    }, [mainContainerData?.style, gridData?.data, sectionType, sliderKey]);

    return (
      <EditorDropdownWrap ref={ref}>
        <div className={styles.EditorDropHead}>
          {sectionType === "Slider" && selectedValue ? (
            <React.Fragment>
              {editName ? (
                <div className={styles.SeletedSlider_Wrap}>
                  <button
                    onClick={() => {
                      setSelectedValue(false)
                      setActive("Appearance")
                    }}
                    className={styles.Back_button}
                  >
                    &#10094;
                  </button>
                  <div className={styles.FormInputWrapper}>
                    <FormInput
                      className={styles.FormInputFiels}
                      value={slideName}
                      onKeyUp={(e) => setSlideName(e.target.value)}
                      onChange={(e) => setSlideName(e.target.value)}
                    />
                    <button
                      onClick={() => EditSlideNameHandle(false)}
                      className={styles.Submit_button}
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.SeletedSlider_Wrap}>
                  <button
                    onClick={() => {
                      setSelectedValue(false)
                      setActive("Appearance")
                    }}
                    className={styles.Back_button}
                  >
                    &#10094;
                  </button>
                  <span>{slideName}</span>
                  <button
                    onClick={() => {
                      setEditName(true)
                      setActive("Appearance")
                    }}
                    className={styles.Back_button}
                  >
                    <i className={styles.Edit_Icon}></i>
                  </button>
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h5 className={`text-xs w-500 base ${styles.title}`}>
                {true ? "Customize Section" : "Customize Section"}{" "}
              </h5>
              <button
                className={styles.close_button}
                onClick={() => CloseSettingHandle()}
              >
                &#10005;
              </button>
            </React.Fragment>
          )}
        </div>
        {sectionType !== "Slider" && (
          <React.Fragment>
            <Tabs
              valueState={true}
              activeTitle={(val) => setActive(val)}
              TabWrapperClass={styles.BannerEditorDropdown}
              TabButtonClass={`${styles.EditorBtns}`}
              ActiveTabClass={styles.ActiveBtn}
              tabs={["Appearance", "Elements"]}
              clearState={true}
              defaultValue={"Appearance"}
            />
            <TabRenderWrap>
              {active === "Appearance" ? (
                <Appearance
                  onUpload={(val, type) => handleSectionUpload(val, type)}
                  apiHitColor={(color, type) => updateSectionColor(color, type)}
                  apiHitOpacity={(val) => updateSectionOpacity(val)}
                  apiHitType={(val) => updateBackgroundType(val)}
                  appearanceValues={appearanceValues}
                />

              ) : active === "Elements" ? (
                <Elements
                  apiHitPosition={(val) => handleElementPosition(val)}
                  hideShowElement={(e, data, gridData) =>
                    handleHideShowElement(e, data, gridData)
                  }
                  handleGridElement={(e, data, gridData) => handleGridElement(e, data, gridData)}
                  appearanceValues={appearanceValues}
                  sectionType={sectionType}
                  variationName={variationName}
                />

              ) : (
                ""
              )}
            </TabRenderWrap>
          </React.Fragment>
        )}

        {sectionType === "Slider" ? (
          selectedValue ? (
            <React.Fragment>
              <Tabs
                valueState={true}
                activeTitle={(val) => setActive(val)}
                TabWrapperClass={styles.BannerEditorDropdown}
                TabButtonClass={`${styles.EditorBtns}`}
                ActiveTabClass={styles.ActiveBtn}
                tabs={["Appearance", "Elements"]}
                clearState={true}
                defaultValue={"Appearance"}
              />
              <TabRenderWrap>
                {active === "Appearance" ? (
                  <Appearance
                    onUpload={(val, type) => handleSliderUpload(val?.src, type)}
                    apiHitColor={(color, type) => updateSliderColor(color, type)}
                    apiHitOpacity={(val) => updateSliderOpacity(val)}
                    apiHitType={(val) => upadteSliderType(val)}
                    appearanceValues={appearanceValues}
                  />

                ) : active === "Elements" ? (
                  <Elements appearanceValues={appearanceValues} sliderObj={gridData?.data[sliderKey]} sectionType={sectionType}
                    hideShowElement={(e, data) =>
                      handleHideShowSliderElement(e, data)
                    }
                    variationName={variationName}
                    selectSliderPosition={(val) => selectSliderPosition(val)}
                  />

                ) : (
                  ""
                )}
              </TabRenderWrap>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={styles.slider_wrap_Container}>
                {gridData?.data &&
                  gridData?.data.length > 0 &&
                  gridData?.data.map((item, key) => (
                    <div className={styles.SliderWrapper} key={key}>
                      <CheckboxInput
                        checked={selectedItems.includes(item._id)}
                        onChange={(e) => handleCheckboxChange(e, item._id, key)}
                        label={item?.Slide_name ? item?.Slide_name : `Slide ${key + 1}`}
                        LabelClass={styles.Label}
                        className={styles.FormCheckbox}
                      />
                      <button
                        className={styles.Arrow_button}
                        onClick={() => OpenSettingHandle(item._id, key)}
                        disabled={selectedItems.length > 0}
                      >
                        &#10095;
                      </button>
                    </div>
                  ))}
              </div>
              {selectedItems.length > 0 ? (
                <button
                  className={`button btn-o-red btn-xs btn-oval ${styles.AddSlides_button}`}
                  onClick={deleteSelectedItems}
                >
                  <i className={styles.Delete_Icon}></i> Delete
                </button>
              ) : (
                <button
                  className={`button btn-o-primary btn-xs btn-oval ${styles.AddSlides_button}`}
                  onClick={() => addNewSlide()}
                >
                  &#43; Add Slide
                </button>
              )}
            </React.Fragment>
          )
        ) : (
          ""
        )}
      </EditorDropdownWrap>
    );
  }
);
BannerEditorDropdown.displayName = "BannerEditorDropdown";

export default BannerEditorDropdown;
