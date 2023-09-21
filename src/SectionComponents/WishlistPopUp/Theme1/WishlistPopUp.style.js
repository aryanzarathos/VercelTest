import styled from "styled-components"

export const WishlistPopUpContainer = styled.div`
    height: ${({ item }) => item.desktop.height};
    width: ${({ item }) => item.desktop.width};
    display:${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    background: ${({ item }) => item.desktop.background};
`

export const MainContainer = styled.div`
/* padding: ${({ item }) => item.desktop.padding}; */
border-radius: ${({ item }) => item.desktop.borderRadius};
position: ${({ item }) => item.desktop.position};
display:grid;
grid-template-columns: 1fr 1fr;
gap:${({ item }) => item.desktop.gap};
width: ${({ item }) => item.desktop.width};
padding: ${({ item }) => item.desktop.padding};
background-color: ${({ item }) => item.desktop.backgroundColor};
/* min-width: ${({ item }) => item.desktop.minWidth}; */
/* background: red; */
@media screen and (max-width: 1024px) {
    // flex-wrap:${({ item }) => item.tablet.flexWrap};
    padding: ${({ item }) => item.tablet.padding};
    gap: ${({ item }) => item.tablet.gap};
    grid-template-columns: 1fr;
    height: 100%;
    max-height: 100vh;
    overflow: auto;
}
@media screen and (max-width: 767px) {
    padding: ${({ item }) => item.mobile.padding};
    width: ${({ item }) => item.mobile.width};
    height: calc(${({ item }) => item.mobile.height} - 100px);
    overflow-y: ${({ item }) => item.mobile.overflowY};
    height: 100vh;
}
`
export const ImageContainer = styled.div`
    display:${({ item }) => item.desktop.display};
    height: ${({ item }) => item.desktop.height};
    // margin-bottom: ${({ item }) => item.desktop.marginBottom};
    @media screen and (max-width: 1000px) {
        height: ${({ item }) => item.mobile.height};
    }
    /* img{
        display: block;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    } */
`
export const ContainerMainLeft = styled.div`
width:  97%;
padding-right: ${({ item }) => item.desktop.paddingRight};
padding-left: ${({ item }) => item.desktop.paddingLeft};
position:  ${({ item }) => item.desktop.position}; 
text-align:  ${({ item }) => item.desktop.textAlign}; 
@media screen and (max-width: 1024px) {
    // width:  ${({ item }) => item.tablet.width};
    padding: ${({ item }) => item.tablet.padding};
}
     
`
export const ProductList = styled.div`
display:${({ item }) => item.desktop.display};
grid-template-columns:${({ item }) => item.desktop.gridTemplateColumns};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items:${({ item }) => item.desktop.alignItems};
gap: ${({ item }) => item.desktop.gap};


@media screen and (max-width: 1024px) {
    gap: ${({ item }) => item.tablet.gap};
}

@media screen and (max-width: 800px) {
    gap: ${({ item }) => item.mobile.gap};
}
`
export const ProductListImg = styled.div`
cursor: ${({ item }) => item.desktop.cursor};
height: ${({ item }) => item.desktop.height};
width: ${({ item }) => item.desktop.width};
border: ${({ item }) => item.desktop.border};
@media screen and (max-width: 800px) {
    width: 20%;
}
/* img {
width: 100%;
height: 100%;
display: block;
object-fit: cover;
object-position: center;
} */
`

export const ContainerMainRight = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    padding-right: ${({ item }) => item?.desktop?.paddingRight};
@media screen and (max-width: 1024px) {
    width: ${({ item }) => item?.mobile?.width};

}
@media screen and (max-width: 768px) {
    padding-right: 0;

}

`
export const ProductCode = styled.p`
`
export const ProductHeading = styled.h1`
`
export const PriceDetail = styled.div`
display: ${({ item }) => item.desktop.display};
gap: ${({ item }) => item.desktop.gap};
 flex-wrap: ${({ item }) => item.desktop.flexWrap};
 margin-bottom: ${({ item }) => item.desktop.marginBottom};

`

export const HorizontalRow = styled.hr`
    border-top: ${({ item }) => item?.desktop?.border?.borderTop};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`
export const Price = styled.p`
`
export const OldPrice = styled.p`
`
export const Offer = styled.p`
`
export const ProductCategoryListWrappper = styled.div`

`
export const QuantityWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
justify-content: flex-start;
margin-bottom: 24px;
`

export const ProductCategoryList = styled.ul`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    flex-wrap: ${({ item }) => item?.desktop?.flexWrap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    `;
export const ProductCategoryListItem = styled.li`
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
    border-width: ${({ item }) => item?.desktop?.border?.borderWidth};
    border-style: ${({ item }) => item?.desktop?.border?.borderStyle};
    border-color:${({ item }) => item?.desktop?.border?.borderColor};
    border-radius: ${({ item }) => item?.desktop?.border?.borderRadius};
    cursor: ${({ item }) => item?.desktop?.cursor};
    transition: ${({ item }) => item?.desktop?.transition};
    &:hover {
        background: ${({ item }) => item?.desktop?.hover?.background};
        color: ${({ item }) => item?.desktop?.hover?.color};
    }
    &.active{
        background: ${({ item }) => item?.desktop?.hover?.background};
        color: ${({ item }) => item?.desktop?.hover?.color};
    }
    @media (max-width: 768px) {
            padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
            font-size: ${({ item }) => item?.mobile?.fontSize};
        }
`;


export const ProductCategoryboldText = styled.h1`

`
export const QuantityItem = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  width: ${({ item }) => item?.desktop?.width};
  border: ${({ item }) => item?.desktop?.border};

  border-radius: 4px;
  padding: 6px 35px 6px 10px;
  position: relative;
  background: #fff;
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  .incerement-btn {
    background: transparent;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    border-style: none;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 7px;
    right: 10px;

    svg {
      stroke: var(--global-color-primary);
    }
  }
  .descriment-btn {
    background: transparent;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    border-style: none;
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: 7px;
    right: 10px;
    top: auto;
    transform: rotate(180deg);

    svg {
      stroke: var(--global-color-primary);
    }
  }
`;

export const QuantityText = styled.label`
`
export const ButtonAddToCart = styled.button`
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
    padding: ${({ item }) => item.desktop.padding};
    background-color: ${({ item }) => item.desktop.backgroundColor};
    color: ${({ item }) => item.desktop.color};
    display: ${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    gap:${({ item }) => item.desktop.gap};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    border: ${({ item }) => item.desktop.border};
    white-space: ${({ item }) => item.desktop.whiteSpace};
    cursor: ${({ item }) => item.desktop.cursor};
    &:hover{
        background-color: ${({ item }) => item.desktop.hover.backgroundColor};
        transition: ${({ item }) => item.desktop.transition};
    }
`;


export const ImgWraper = styled.div`
/* width: 100%;
min-height: 100%;
max-height: 480px;
margin: 0; */

/* img {
    // object-position: center top;
    object-fit: cover;
    // display: block;
    width: 100%;
    object-position: center;
    height: 100%;
    max-height: 100%;
} */
`;