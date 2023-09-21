import styled from "styled-components";

export const Navbar = styled.nav`
position: ${({ item }) => item?.desktop?.position};
`;
export const MenuList = styled.ul`
display:${({ item }) => item?.desktop?.display};
flex-wrap: wrap;

/* .dropdownArrow{
    &::after{
        position:absolute;
        transition: all .3s;
        content:"";
        left:inherit;
        right:-15px;
        height:6px;
        width:6px;
        border-right:2px solid #003459;
        border-bottom:2px solid #003459;
        top:50%;
        transform:translateY(-75%) rotate(45deg);
    }
    &:hover{
        :after{
            border-right:2px solid #428BC1;
            border-bottom:2px solid #428BC1;
        }
    }  
} */
`;
export const MenuListItem = styled.li`
position:${({ item }) => item?.desktop?.position};
&:hover{
    .active{
        visibility:${({ itemActive }) => itemActive?.desktop?.visibility};
        opacity:${({ itemActive }) => itemActive?.desktop?.opacity};
        transform: ${({ itemActive }) => itemActive?.desktop?.transform};
    }
}`;
export const MenuListItemInside = styled.div`
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    a,button{
   /* position:relative;
    color:rgba(0, 52, 89, 0.6); 
    font-size: 16px;
    line-height: 24px;
    transition: all .3s;
    white-space: nowrap;
    background: transparent;
    border: none;
    outline: none;
    font-family: 'Gilroy-SemiBold';
    display: flex;
    align-items: center;
    gap: 5px; */
    &:hover{
        svg{
            fill: ${({ itemDropDown }) => itemDropDown?.desktop?.hover?.fill};
        }
    }
}
svg{
    fill:${({ itemDropDown }) => itemDropDown?.desktop?.fill};
    transition:${({ itemDropDown }) => console.log(itemDropDown?.desktop?.transition)};
    transform: ${({ itemDropDown }) => itemDropDown?.desktop?.transform};
}
`;
