import styled from "styled-components";

export const ServiceCaregoryWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
min-width: 1px;

`

export const ServicesCategoryThememaingrid = styled.div`
display: ${({ itemProp }) => itemProp.desktop.display};
grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount} ,1fr) ;
gap: ${({ itemProp }) => itemProp.desktop.gap};
@media screen and (max-width: 1024px){
  grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount} ,1fr) ;
    
}
@media screen and (max-width: 768px){
  grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount} ,1fr) ;
}
`

export const ServicesCategoryFirst = styled.div`
display: ${({ itemProp }) => itemProp.desktop.position};
min-width:1px;
`;

export const ImageContainer1 = styled.div`
  position: ${({ itemProp }) => itemProp.desktop.position};
  background: red;
  background: ${({ itemProp }) => itemProp?.desktop?.background} ;
    padding: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ itemProp }) => itemProp?.desktop?.borderStyle} ;
    border-width:${({ itemProp }) => itemProp?.desktop?.borderWidth};
    border-color:${({ itemProp }) => itemProp?.desktop?.borderColor} ;


`;
export const MainImage = styled.div`
  position: ${({ itemProp }) => itemProp.desktop.position};
  height:  ${({ itemProp }) => itemProp.desktop.height};
  width:  ${({ itemProp }) => itemProp.desktop.width};
  
  `;
