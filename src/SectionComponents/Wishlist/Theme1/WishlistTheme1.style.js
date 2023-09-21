import styled from "styled-components";

export const WishlistTheme = styled.div`
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    text-align: ${({ item }) => item.desktop.textAlign};
    align-items: ${({ item }) => item.desktop.alignItems};
    padding: ${({ item }) => item.desktop.padding};
    gap: ${({ item }) => item.desktop.gap};
    background: ${({ item }) => item.desktop.background};
`;

export const GridContainer = styled.div`
    padding: ${({ item }) => item.desktop.padding};
    display: ${({ item }) => item.desktop.display};
    grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
    width: ${({ item }) => item.desktop.width};
    margin: ${({ item }) => item.desktop.margin};
    max-width: ${({ item }) => item.desktop.maxWidth};
    gap: 30px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: ${({ item }) => item.tablet.gridTemplateColumns};
        gap: ${({ item }) => item.desktop.gap};
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: ${({ item }) => item.mobile.gridTemplateColumns};
        grid-template-columns: 1fr 1fr;
    }
    
`;

export const ImageSection = styled.div`
    text-align: ${({ item }) => item.desktop.textAlign};
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    align-items: ${({ item }) => item.desktop.alignItems};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
/* h3{
  font-size: 18px;
  line-height: 24px;
  color: #1F3259;
  font-weight: 900;
} */
/* h2{
    font-size: 16px;
    line-height: 20px;
    color: #1F3259;
} */
`;
export const ImgMain = styled.div`
    position:  ${({ item }) => item.desktop.position};
    height:  ${({ item }) => item.desktop.height};
    width:  ${({ item }) => item.desktop.width};
    margin-top:  ${({ item }) => item.desktop.margin.marginTop};
    margin-right:  ${({ item }) => item.desktop.margin.marginRight};
    margin-bottom:  ${({ item }) => item.desktop.margin.marginBottom};
    margin-left:  ${({ item }) => item.desktop.margin.marginLeft};
    @media screen and (max-width:768px) {
        width: 100%;
        height: 158px;
    }

`;
export const DetailsWrappper = styled.div`
min-height:  ${({ item }) => item.desktop.minHeight};
margin-top:  ${({ item }) => item.desktop.margin.marginTop};
`

export const Discount = styled.div`
    display:  ${({ item }) => item.desktop.display};
    gap:  ${({ item }) => item.desktop.gap};
    justify-content: center;
    /* margin-top:  ${({ item }) => item.desktop.margin.marginTop};
    margin-right:  ${({ item }) => item.desktop.margin.marginRight}; */
    margin-bottom:  ${({ item }) => item.desktop.margin.marginBottom};
    /* margin-left:  ${({ item }) => item.desktop.margin.marginLeft}; */

`;
export const CrossImg = styled.div`

    position: ${({ item }) => item.desktop.position};
    top: ${({ item }) => item.desktop.top};
    right: ${({ item }) => item.desktop.right};
    display: ${({ item }) => item.desktop.display};
    height: ${({ item }) => item.desktop.height};
    width: ${({ item }) => item.desktop.width};
    background: ${({ item }) => item.desktop.background};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    align-items: ${({ item }) => item.desktop.alignItems};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    &:hover{
        cursor: ${({ item }) => item.desktop.hover.cursor};
    }
`;


export const Theme1Container = styled.div``;
export const ShopSection = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
`;
 export const BtnContain = styled.div`
    display:flex;
    gap: 10px;
    align-items:center;
    svg{
      height: 16px;
      width: 16px;
      fill: var(--global-color-primary);
    }
    `;


