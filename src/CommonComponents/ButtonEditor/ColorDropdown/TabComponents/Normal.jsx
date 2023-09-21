import React, { useRef, useState } from "react";
import styled from "styled-components";
import InputColorPicker from "../../../ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_BUTTON } from "../../../../store/reducers/websiteTemplate";
import { updateButtonElement } from "../../../../store/actions/siteEditor";
import { useDebounceFunction } from "../../../../CommonFunctions/debounce";
import { useEffect } from "react";
import { rgbaToHex, useGlobalVariable } from "../../../../CommonFunctions/changeColorType";
import { UPDATE_SELECTED_ELEMENT } from "@/store/reducers/SiteEditor";
import { useOutsideClick } from "rooks";
import useTemplateData from "@/CustomHooks/useTemplateData";

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

const Normal = ({ hideBackground }) => {
  const dispatch = useDispatch();
  const [globalColors, setGlobalColors] = useState({})
  const [displayColorPicker, setdisplayColorPicker] = useState(-1);
  const colorPickerRef = useRef(null)
  const debouncedColor = useDebounceFunction(
    (callback) => callback(),
    2000
  );
  const [globalVariable] = useGlobalVariable()
  const { templateData } = useSelector((state) => {
    return {
      templateData: state.websiteTemplate.getTemplate.data
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
  const CloseHandlePicker = (e) => {
    e.stopPropagation()
    setdisplayColorPicker(-1);
  };
  const changeColor = (type, color, key) => {
    let dynamicData = valueArray
    dynamicData[key]['colorHex'] = color
    setValuesArray([...dynamicData])
    let gridPayload = [...gridData.data];
    let data = {
      desktop: {
        ...gridData.data[selectedElementIndex]["style"].desktop,
        [type]: color,
      },
      mobile: {
        ...gridData.data[selectedElementIndex]["style"].mobile,
        [type]: color,
      },
      tablet: {
        ...gridData.data[selectedElementIndex]["style"].tablet,
        [type]: color,
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
    )
    dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
    debouncedColor(() =>
      dispatch(
        updateButtonElement({
          pageId: pageId,
          gridId: gridId,
          body: { data: updatedData },
        })
      ))
  };
  useOutsideClick(colorPickerRef, () => {
    if (displayColorPicker !== -1) {
      setdisplayColorPicker(-1)
    }
  })


  useEffect(() => {
    setGlobalColors(templateData?.template?.theme?.color)
  }, [templateData?.template?.theme?.color])
  useEffect(() => {
    let data = valueArray
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element.colorHex = selectedElementData?.["style"]?.desktop?.[element.value]
    }
    setValuesArray([...data])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridData, selectedElementIndex])

  return (
    <React.Fragment>
      {valueArray.length &&
        valueArray.map((item, key) => {
          return (
            hideBackground && item?.title === "Background" ? "" : <ColorWrapper key={key}>
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
                    onclose={(e) => CloseHandlePicker(e)}
                    value={globalVariable(item.colorHex)}
                    handleChange={(color) => changeColor(item.value, color, key)}
                  // ref={colorPickerRef}
                  />
                </ColorPickerWrapper>
              )}
            </ColorWrapper>
          );
        })}
    </React.Fragment>
  );
};

export default Normal;
