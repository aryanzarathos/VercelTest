import styled from "styled-components";

export const AllIcons = styled.div`
display:${({ item }) => item?.desktop?.display};
gap:${({ item }) => item?.desktop?.gap};
`;

export const IconButton = styled.button`
display:${({ item }) => item?.desktop?.display};
cursor:${({ item }) => item?.desktop?.cursor};
background:${({ item }) => item?.desktop?.backgroundColor};
border:${({ item }) => item?.desktop?.border};
outline:${({ item }) => item?.desktop?.outline};
position:${({ item }) => item?.desktop?.position};
min-width: ${({item})=>item?.desktop?.minWidth};
.wishlist{
    fill: ${({ iconColor }) => iconColor?.Icon};
    transition: ${({ itemFav }) => itemFav?.desktop?.transition};
}
.searchIcon{
    fill: ${({ iconColor }) => iconColor?.Icon};
    transition: ${({ itemSearch }) => itemSearch?.desktop?.transition};
}
.userIcon{
    fill: ${({ iconColor }) => iconColor?.Icon};
    transition: ${({ itemUser }) => itemUser?.desktop?.transition};
}
.cartIcon{
fill: ${({ iconColor }) => iconColor?.Icon};
    transition: ${({ itemCart }) => itemCart?.desktop?.transition};
}
&:hover{
.wishlist{
       fill: ${({ itemFav }) => itemFav?.desktop?.hover?.fill};
       
    }
    .searchIcon{
    fill: ${({ itemSearch }) => itemSearch?.desktop?.hover?.fill};
}
.userIcon{
    fill: ${({ itemUser }) => itemUser?.desktop?.hover?.fill};
}
.cartIcon{
    fill: ${({ itemCart }) => itemCart?.desktop?.hover?.fill};
}
}

`;

export const CartNumber = styled.span`
background: ${({ item }) => item?.desktop?.background};
width: ${({ item }) => item?.desktop?.width};
height: ${({ item }) => item?.desktop?.height};
position: ${({ item }) => item?.desktop?.position};
font-size: ${({ item }) => item?.desktop?.fontSize};
display: ${({ item }) => item?.desktop?.display};
line-height: ${({ item }) => item?.desktop?.lineHeight};
color: ${({ item }) => item?.desktop?.color};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
top: ${({ item }) => item?.desktop?.top};
left: ${({ item }) => item?.desktop?.left};
right: ${({ item }) => item?.desktop?.right}; `;
export const CartSection = styled.div`
position: ${({ item }) => item?.desktop?.position}; `;
export const UserDropDown = styled.div`
position:${({ item }) => item?.desktop?.position};
top:${({ item }) => item?.desktop?.top};
width:${({ item }) => item?.desktop?.width};
background:${({ item }) => item?.desktop?.background};
left:${({ item }) => item?.desktop?.left};
right:${({ item }) => item?.desktop?.right};
transform:${({ item }) => item?.desktop?.transform};
transition:${({ item }) => item?.desktop?.transition};
cursor:${({ item }) => item?.desktop?.cursor};
transform-origin:${({ item }) => item?.desktop?.transformOrigin};
box-shadow:${({ item }) => item?.desktop?.boxShadow};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
z-index: 2;
&.showDropDown{
    transform:${({ itemShow }) => itemShow?.desktop?.transform};
    transition:${({ itemShow }) => itemShow?.desktop?.transition};
}`;
export const UserDropDownList = styled.ul`
display:${({ item }) => item?.desktop?.display};
flex-direction:${({ item }) => item?.desktop?.flexDirection};
gap:${({ item }) => item?.desktop?.gap};
`;
export const UserListItem = styled.li`
text-align: ${({ item }) => item?.desktop?.textAlign};
&:first-child{
    padding-bottom:${({ item }) => item?.desktop?.firstChild?.padding?.paddingBottom};
    margin-bottom:${({ item }) => item?.desktop?.firstChild?.margin?.marginBottom};
    border-bottom:${({ item }) => item?.desktop?.firstChild?.borderBottom};
    a{
        color: ${({ item }) => item?.desktop?.firstChild?.color};
    }
}
&:last-child{
    padding-top:${({ item }) => item?.desktop?.lastChild?.padding?.paddingTop};
    margin-top:${({ item }) => item?.desktop?.lastChild?.margin?.marginTop};
    border-top:${({ item }) => item?.desktop?.lastChild?.borderTop};
}`;
