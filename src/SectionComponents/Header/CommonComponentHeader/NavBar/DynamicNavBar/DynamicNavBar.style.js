import styled from "styled-components";

export const Navbar = styled.nav`
background: ${({ itemProp }) => itemProp?.custom_section_editable[6]?.style?.desktop?.background};
position: ${({ itemProp }) => itemProp?.custom_section_editable[6]?.style?.desktop?.position};
overflow: ${({ itemProp }) => itemProp?.custom_section_editable[6]?.style?.desktop?.overflow};
max-width: ${({ itemProp }) => itemProp?.custom_section_editable[6]?.style?.desktop?.maxWidth};
width: ${({ itemProp }) => itemProp?.custom_section_editable[6]?.style?.desktop?.width};
`;
export const MenuList = styled.ul`
display:${({ itemProp }) => itemProp?.custom_section_editable[7]?.style?.desktop?.display};
background:${({ itemProp }) => itemProp?.custom_section_editable[7]?.style?.desktop?.background};
a{
   position:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.position};
    color:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.color}; 
    font-family: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.fontFamily};
    font-size: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.fontSize};
    line-height: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.lineHeight};
    transition: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.transition};
    padding: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.padding};
    display: ${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.display};
    &:hover{
        color:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.hover?.color}; 
        background:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.hover?.background}; 
    }
    &:active{
      color:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.active?.color}; 
        background:${({ itemProp }) => itemProp?.custom_section_editable[9]?.style?.desktop?.active?.background};   
    }
}

`;
export const MenuListItem = styled.li`
position:${({ itemProp }) => itemProp?.custom_section_editable[8]?.style?.desktop?.position};
background:${({ itemProp }) => itemProp?.custom_section_editable[8]?.style?.desktop?.background};
`;
// export const MenuListItemInside = styled.div`
//     padding:${({ itemProp }) => itemProp.custom_section_editable[9].style.desktop.padding};
//     background:${({ itemProp }) => itemProp.custom_section_editable[9].style.desktop.background};
//     &:hover{
//         background:${({ itemProp }) => itemProp.custom_section_editable[9].style.desktop.hover.background};

//     }
//     &:active{
//         background: ${({ itemProp }) => itemProp.custom_section_editable[9].style.desktop.active.background};
//     }
// `;


