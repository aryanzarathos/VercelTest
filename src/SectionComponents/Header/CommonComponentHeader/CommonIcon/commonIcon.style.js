import styled from "styled-components";

export const AllIcons = styled.div`
display:${({ item }) => item.desktop.display};
gap:${({ item }) => item.desktop.gap};
`;

export const IconButton = styled.button`
display:${({ item }) => item.desktop.display};
cursor:${({ item }) => item.desktop.cursor};
background:${({ item }) => item.desktop.background};
border:${({ item }) => item.desktop.border};
outline:${({ item }) => item.desktop.outline};
position:${({ item }) => item.desktop.position};
.wishlist{
    fill: ${({ item }) => item.desktop.fill};
    transition: ${({ item }) => item.desktop.transition};
}
.searchIcon{
    fill: ${({ item }) => item.style.desktop.fill};
    transition: ${({ item }) => item.style.desktop.transition};
}
.userIcon{
    fill: ${({ item }) => item.desktop.fill};
    transition: ${({ item }) => item.desktop.transition};
}
.cartIcon{
fill: ${({ item }) => item.desktop.fill};
    transition: ${({ item }) => item.desktop.transition};
}
&:hover{
.wishlist{
       fill: ${({ item }) => item.desktop.hover.fill};
       
    }
    .searchIcon{
    fill: ${({ item }) => item.desktop.hover.fill};
}
.userIcon{
    fill: ${({ item }) => item.desktop.hover.fill};
}
.cartIcon{
    fill: ${({ item }) => item.desktop.hover.fill};
}
}

`;
export const UserDetail = styled.div`
position:relative;`;
export const UserDropDown = styled.div`
position:absolute;
top:40px;
width:max-content;
background:#ffff;
left:inherit;
right:0px;
transform:scale(0);
transition:all .3s  ;
cursor:pointer;
transform-origin:top right;
box-shadow:0px 0px 10px #eee;
padding:16px 24px;
&.showDropDown{
    transform:scale(1);
    transition:all .3s  ;
}`;
export const UserDropDownList = styled.ul`
display:flex;
flex-direction:column;
gap:4px;`;
export const UserListItem = styled.li`
&:first-child{
    padding-bottom:8px;
    margin-bottom:4px;
    border-bottom:1px solid rgba(0, 52, 89, 0.2);
    a{
        color: #6AA9FF;
    }
}
&:last-child{
    padding-top:8px;
    margin-top:4px;
    border-top:1px solid rgba(0, 52, 89, 0.2);
}
a{
    // font-family: 'Gilroy-Medium';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #003459;
}`;
export const CartNumber = styled.span`
// font-family: 'Gilroy-Regular';
    background: #6AA9FF;
    width: 16px;
    height: 16px;
    position: absolute;
    font-size: 8px;
    display: flex;
    line-height: 9px;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: -7px;
    left: inherit;
    right: -5px;`;
export const CartSection = styled.div`
position:relative;`;
