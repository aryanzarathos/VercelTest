import React, { forwardRef, useEffect, useRef } from "react";
import { GridContainer, Title, WrapperSection } from "./GridStyle";
import ColorPalette from "@/CommonComponents/ColorPalette";
import { useState } from "react";
import GridInput from "@/CommonComponents/GridInput/GridInput";
import SelectDropDown from "@/CommonComponents/SelectDropdown";
import Tabs from "@/CommonComponents/Tabs/Tabs";
import InputColorPicker from "@/CommonComponents/ColorPicker";
import { useGlobalVariable } from "@/CommonFunctions/changeColorType";

const GridTab = forwardRef(({ selectedTabData, handleColorDropDown, updateButtonDropdown, activeTab, updateCustomProperties }, ref) => {
  const [activeTabSlide, setActiveTabSlide] = useState("Normal")
  const [globalVariable] = useGlobalVariable()
  const [button_style, setbutton_style] = useState("");

  const handleColorWrap = (item, state) => {
    handleColorDropDown(item, state)
  };

  useEffect(() => {
    if (selectedTabData && selectedTabData?.length) {
      let data = selectedTabData?.find((item) => item?.type === "Dropdown")
      setbutton_style(data?.value)
    }
  }, [selectedTabData])

  return (

    <GridContainer>
      {activeTab !== "Button" ? (
        <React.Fragment>
          {selectedTabData.length
            ? selectedTabData.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  {item.type === "color" ? (
                    <WrapperSection>
                      <Title>{item.title}</Title>
                      <ColorPalette
                        colorCode={item["propertyType"] === "object" && item[item?.objectKey] !== undefined ? item[item.objectKey] : item.value}
                        paletteHandle={() => handleColorWrap(item, item?.propertyType === "object" ? item?.objectKey : "")}
                        className={'color-plate-style'}
                      />
                    </WrapperSection>
                  ) : item.type === "input" ? (
                    <WrapperSection>
                      <Title>{item.title}</Title>
                      <GridInput
                        inputType={"number"}
                        inputTypeText={"px"}
                        className={"inputWidth"}
                        value={item[item?.objectKey] !== undefined ? item[item?.objectKey] && item[item?.objectKey]?.includes("px") ? item[item?.objectKey]?.replace("px", "") : item[item?.objectKey]?.length ? item[item?.objectKey] : 0 : item.value && item?.value?.includes("px") ? item?.value?.replace("px", "") : item.value?.length ? item.value : 0}
                        onChange={(e) => updateCustomProperties(`${e.target.value}px`, item.id, item.propertyChange, item.editId, item.objectKey)}
                        onKeyUp={(e) => updateCustomProperties(`${e.target.value}px`, item.id, item.propertyChange, item.editId, item.objectKey)}
                      />
                    </WrapperSection>
                  ) : item.type === "Dropdown" ? (
                    <WrapperSection>
                      <Title>{item.title}</Title>
                      <SelectDropDown
                        showValue={item.value}
                        values={item.options}
                        selectClassName={"dropDownWidth"}
                        handleSelect={(val) => updateCustomProperties(val, item.id, item.propertyChange, item.editId)}
                      />
                    </WrapperSection>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            })
            : ""}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            selectedTabData.length ?
              selectedTabData.filter((item) => item.type !== "color").map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    {item.type === "input" ? (
                      <WrapperSection>
                        <Title>{item.title}</Title>
                        <GridInput
                          inputType={"number"}
                          inputTypeText={"px"}
                          value={item.value && item?.value?.includes("px") ? Math.ceil(item?.value?.replace("px", "")) : Math.ceil(item.value)}
                          className={"inputWidth"}
                          onChange={(e) => updateCustomProperties(`${e.target.value}px`, item.id, item.propertyChange, item.editId)}
                          onKeyUp={(e) => updateCustomProperties(`${e.target.value}px`, item.id, item.propertyChange, item.editId)}
                        />
                      </WrapperSection>
                    ) : item.type === "Dropdown" ? (
                      <WrapperSection>
                        <Title>{item.title}</Title>
                        <SelectDropDown
                          showValue={(item.value === "None" || item.value === "Stroke") ? item.value : "Fill"}
                          values={item.options}
                          selectClassName={"dropDownWidth"}
                          className={'selectWrapper'}
                          handleSelect={(val) => {
                            updateButtonDropdown(val, item.id, item.propertyChange, item.editId)
                            setbutton_style(val)
                          }}
                        />
                      </WrapperSection>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                );
              }) : ""
          }

          {selectedTabData.filter((item) => item.type === "color").length > 0 ?
            <Tabs
              valueState={true}
              activeTitle={(val) => { setActiveTabSlide(val) }}
              TabWrapperClass={`${"externalPageTabBtn"}`}
              TabButtonClass={`button btn-xs btn-oval ${"externalPagesTabButton"}`}
              ActiveTabClass={`${"Active"}`}
              defaultValue={"Normal"}
              clearState={true}
              tabs={["Normal", "Hover"]}
            /> : ""}
          {

            selectedTabData.filter((item) => item.type === "color").map((item, key) => {
              return (
                button_style && button_style !== "Fill" && item?.title === "Background" && activeTabSlide === "Normal" ? "" :
                  <WrapperSection key={key}>
                    <Title>{item.title}</Title>
                    <ColorPalette className={'color-plate-style'} colorCode={globalVariable(item[activeTabSlide !== "Normal" ? activeTabSlide.toLowerCase() : "value"])} paletteHandle={() => handleColorWrap(item, activeTabSlide === "Hover" ? activeTabSlide.toLowerCase() : "")} />
                  </WrapperSection>
              )
            })



          }
        </React.Fragment>
      )}

      {/* <WrapperSection >
                <Title>Grid Background</Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Grid Border</Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Grid Border</Title>
                <GridInput inputTypeText={"px"} className={"inputWidth"} />

            </WrapperSection> */}
    </GridContainer>

  );
});
GridTab.displayName = "GridTab"
export default GridTab;
