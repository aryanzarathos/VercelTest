import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InputColorPicker from "../../../ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_BUTTON } from "../../../../store/reducers/websiteTemplate";
import { updateButtonElement } from "../../../../store/actions/siteEditor";
import { useDebounceFunction } from "../../../../CommonFunctions/debounce";
import {
  rgbaToHex,
  useGlobalVariable,
} from "../../../../CommonFunctions/changeColorType";
import { UPDATE_SELECTED_ELEMENT } from "@/store/reducers/SiteEditor";
import { useOutsideClick } from "rooks";
import useTemplateData from "@/CustomHooks/useTemplateData";
import { updateSlide } from "@/store/actions/appearanceSettings";

const ColorWrapper = styled.div`
  width: 139px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #202020;
`;
const ColorPickerWrapper = styled.div`
  position: absolute;
  left: 259px;
  top: 0;
`;
const ColorPalletWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(32, 32, 32, 0.4);
  border-radius: 4px;
  padding: 6px;
  gap: 8px;
  width: 125px;
`;
const ColorCode = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: rgba(32, 32, 32, 0.8);
  padding-right: 8px;
  border-right: 1px solid rgba(32, 32, 32, 0.2);
`;
const ColorValue = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #202020;
`;
const ColorPallet = styled.div`
  background: ${({ itemProp }) => itemProp};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  width: 20px;
  height: 20px;
`;

const Hover = ({ selectedElementData, sliderKey }) => {
  const dispatch = useDispatch();
  const debouncedColor = useDebounceFunction((callback) => callback(), 2000);
  const [globalVariable] = useGlobalVariable();

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
    selectedElementDataa,pageId] =useTemplateData()
  const [displayColorPicker, setdisplayColorPicker] = useState(-1);
  const colorPickerRef = useRef();
  let [valueArray, setValuesArray] = useState([
    {
      title: "Text Color",
      colorHex: "",
      value: "color",
    },
    {
      title: "Background",
      colorHex: "",
      value: "backgroundColor",
    },
  ]);
  const CustomColorPickerhandle = (key) => {
    setdisplayColorPicker(key);
  };
  const CloseHandlePicker = () => {
    setdisplayColorPicker(-1);
  };
  const changeColor = (type, color, key) => {
    let dynamicData = valueArray;
    dynamicData[key]["colorHex"] = color;
    setValuesArray([...dynamicData]);

    // let data = {
    //   desktop: {
    //     ...gridData.data[selectedElementIndex]["style"].desktop,
    //     hover: {
    //       ...gridData.data[selectedElementIndex]["style"]?.desktop?.hover,
    //       [type]: color,
    //     },
    //   },
    //   mobile: {
    //     ...gridData.data[selectedElementIndex]["style"].mobile,
    //     hover: {
    //       ...gridData.data[selectedElementIndex]["style"]?.mobile?.hover,
    //       [type]: color,
    //     },
    //   },
    //   tablet: {
    //     ...gridData.data[selectedElementIndex]["style"].tablet,
    //     hover: {
    //       ...gridData.data[selectedElementIndex]["style"]?.tablet?.hover,
    //       [type]: color,
    //     },
    //   },
    // };
    let data = {
      ...selectedElementData,
      buttonStyle: {
        ...selectedElementData?.buttonStyle,
        style: {
          ...selectedElementData?.buttonStyle?.style,
          desktop: {
            ...selectedElementData?.buttonStyle?.style.desktop,
            hover: {
              ...selectedElementData?.buttonStyle?.style.desktop?.hover,
              [type]: color,
            },
          },
          mobile: {
            ...selectedElementData?.buttonStyle?.style.mobile,
            hover: {
              ...selectedElementData?.buttonStyle?.style.mobile?.hover,
              [type]: color,
            },
          },
          tablet: {
            ...selectedElementData?.buttonStyle?.style.tablet,
            hover: {
              ...selectedElementData?.buttonStyle?.style.tablet?.hover,
              [type]: color,
            },
          },
        },
      },
    };
    dispatch(
      updateSlide({
        gridId: gridId,
        slideId: selectedElementData._id,
        body: data,
        dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex,
          sliderKey: sliderKey,
        },
      })
    );
  };
  useOutsideClick(colorPickerRef, () => {
    if (displayColorPicker !== -1) {
      setdisplayColorPicker(-1);
    }
  });
  useEffect(() => {
    let data = valueArray;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element.colorHex =
        selectedElementData?.buttonStyle?.["style"]?.desktop?.hover?.[
          element.value
        ];
    }
    setValuesArray([...data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {valueArray.length &&
        valueArray.map((item, key) => {
          return (
            <ColorWrapper key={key}>
              <Paragraph>{item.title}</Paragraph>
              <ColorPalletWrap>
                <ColorCode>Hex</ColorCode>
                <ColorValue>
                  {rgbaToHex(globalVariable(item.colorHex))}
                </ColorValue>
                <ColorPallet
                  itemProp={item.colorHex}
                  onClick={() => CustomColorPickerhandle(key)}
                ></ColorPallet>
              </ColorPalletWrap>
              {displayColorPicker === key && (
                <ColorPickerWrapper>
                  <InputColorPicker
                    onclose={CloseHandlePicker}
                    ref={colorPickerRef}
                    value={item.colorHex}
                    handleChange={(color) =>
                      changeColor(item.value, color, key)
                    }
                  />
                </ColorPickerWrapper>
              )}
            </ColorWrapper>
          );
        })}
    </React.Fragment>
  );
};

export default Hover;
