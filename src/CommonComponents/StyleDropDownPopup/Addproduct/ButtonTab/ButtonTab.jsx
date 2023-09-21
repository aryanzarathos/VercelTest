import React from 'react'
import { GridContainer, Title, WrapperSection } from './ButtonTabStyle'
import ColorPalette from '@/CommonComponents/ColorPalette'
import SelectDropDown from '@/CommonComponents/SelectDropdown'
import Tabs from '@/CommonComponents/Tabs/Tabs'
import { useState } from 'react'
import GridInput from '@/CommonComponents/GridInput/GridInput'

const ButtonTab = ({ data }) => {
    const onChangeHandle = (val) => {
        setSelectValue(val)
    }


    const [activeTabSlide, setActiveTabSlide] = useState("Normal");
    const values = ["Fill", "Stroke", "None"]
    return (
        <GridContainer>
            <WrapperSection >
                <Title>Button Style</Title>
                <SelectDropDown showValue={"Fill"} values={values} selectClassName={"dropDownWidth"} handleSelect={onChangeHandle} />
            </WrapperSection>
            <WrapperSection >
                <Title>Border Radius</Title>
                <GridInput inputTypeText={"px"} className={"inputWidth"} />
            </WrapperSection>
            {/* <WrapperSection >
                <Title>Strikethrough Price </Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Discount</Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />

            </WrapperSection> */}

            <Tabs
                valueState={true}
                activeTitle={(val) => { setActiveTabSlide(val) }}
                TabWrapperClass={`${"externalPageTabBtn"}`}
                TabButtonClass={`button btn-xs btn-oval ${"externalPagesTabButton"}`}
                ActiveTabClass={`${"Active"}`}
                tabs={["Normal", "Hover"]}
            />
            {
                activeTabSlide === "Normal" ? (
                    <>
                        <WrapperSection >
                            <Title>Border Radius</Title>
                            <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
                        </WrapperSection>
                        <WrapperSection >
                            <Title>Border Radius</Title>
                            <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
                        </WrapperSection>
                    </>
                ) : activeTabSlide === "Hover" ? (
                    <>
                        <WrapperSection >
                            <Title>Border Radius</Title>
                            <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
                        </WrapperSection>
                        <WrapperSection >
                            <Title>Border Radius</Title>
                            <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
                        </WrapperSection>
                    </>
                ) : ""
            }

        </GridContainer>
    )
}

export default ButtonTab