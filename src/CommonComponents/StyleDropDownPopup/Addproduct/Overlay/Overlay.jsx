import React from 'react'
import { GridContainer, Title, WrapperSection } from './OverlayStyled'
import ColorPalette from '@/CommonComponents/ColorPalette'

const Overlay = ({ data }) => {
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
        </GridContainer>
    )
}

export default Overlay