import React from 'react'
import { GridContainer, Title, WrapperSection } from './TextTabstyled'
import ColorPalette from '@/CommonComponents/ColorPalette'
import GridInput from '@/CommonComponents/GridInput/GridInput'

const TextTab = ({ data }) => {
    // const [isSelectedColor, setIsSelectedColor] = useState(false)
    // const handleColorWrap = () => {
    //     setIsSelectedColor(true)
    // }

    return (
        <GridContainer>
            <WrapperSection >
                <Title>Product Name</Title>
                <ColorPalette colorCode="#f00909" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Price</Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Strikethrough Price </Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />
            </WrapperSection>
            <WrapperSection >
                <Title>Discount</Title>
                <ColorPalette colorCode="#fff" paletteHandle={() => handleColorWrap(true)} />

            </WrapperSection>
        </GridContainer>
    )
}

export default TextTab