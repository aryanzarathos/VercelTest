import styled from "styled-components";

export const MainHeaderDropdown = styled.ul`
  position: ${({ item }) => item?.desktop?.position};
  left:${({ item }) => item?.desktop?.left};
  width: ${({ item }) => item?.desktop?.width};
  max-width: ${({ item }) => item?.desktop?.maxWidth};
  z-index: 2;
  opacity:${({ item }) => item?.desktop?.opacity};
  visibility:${({ item }) => item?.desktop?.visibility};
  background:${({ item }) => item?.desktop?.background};
  box-shadow: ${({ item }) => item?.desktop?.boxShadow};
  transform: ${({ item }) => item?.desktop?.transform};
  transition: ${({ item }) => item?.desktop?.transition};
  max-height: ${({ item }) => item?.desktop?.maxHeight};
  min-height: ${({ item }) => item?.desktop?.minHeight};
  overflow: ${({ item }) => item?.desktop?.overflow};
  &::-webkit-scrollbar-thumb {
      background-color: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.backgroundColor};
      border: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.border};
      border-radius: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.borderRadius};
      background-clip: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.backgroundClip};
  }
  &::-webkit-scrollbar {
      width: ${({ item }) => item?.desktop?.webkitScrollbar?.width};
  }
  `;

export const MenuSubDropDown = styled.li`
position:${({ item }) => item?.desktop?.position};`;


export const MenuSubHeader = styled.div`
display:${({ item }) => item?.desktop?.display};
justify-content:${({ item }) => item?.desktop?.justifyContent};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
align-items:${({ item }) => item?.desktop?.alignItems};
svg{
    fill:${({ itemDropDownIcon }) => itemDropDownIcon?.desktop?.fill};
    transition:${({ itemDropDownIcon }) => itemDropDownIcon?.desktop?.transition};
    transform: ${({ itemDropDownIcon }) => itemDropDownIcon?.desktop?.transform};
}

`;

export const MenuDropDownList = styled.ul`
display:${({ item }) => item?.desktop?.display};
flex-direction:${({ item }) => item?.desktop?.flexDirection};
border-bottom: ${({ item }) => item?.desktop?.borderBottom};
max-height:${({ item }) => item?.desktop?.maxHeight};
overflow:${({ item }) => item?.desktop?.overflow};
`;

export const MenuDropDownListItem = styled.li`
`;
export const SubLink = styled.li`

padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items:${({ item }) => item?.desktop?.alignItems};

&:first-child{
    padding-top:${({ item }) => item?.desktop?.firstChild?.padding?.paddingTop};
    border-top: ${({ item }) => item?.desktop?.firstChild?.borderTop};
}
&:last-child{
    padding-bottom:${({ item }) => item?.desktop?.lastChild?.padding?.paddingBottom};
}
svg{
  fill:${({ itemSubLinkDownIcon }) => itemSubLinkDownIcon?.desktop?.fill};
    transition:${({ itemSubLinkDownIcon }) => itemSubLinkDownIcon?.desktop?.transition};
    transform: ${({ itemSubLinkDownIcon }) => itemSubLinkDownIcon?.desktop?.transform};
}
`;
export const SubSubLinkSection = styled.div`
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
`;

