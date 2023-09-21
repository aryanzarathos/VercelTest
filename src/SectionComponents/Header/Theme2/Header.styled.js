import styled from 'styled-components'
import EmailIcon from "../../../Assets/SectionComponent/Icons/email-icon.svg";
import PhoneIcon from "../../../Assets/SectionComponent/Icons/phone-icon.svg";
import AddressIcon from "../../../Assets/SectionComponent/Icons/address-icon.svg";
import CartIcon from "../../../Assets/SectionComponent/Icons/cart.svg";
import ProfileIocn from "../../../Assets/SectionComponent/Icons/profm sile.svg";
import WishlistIcon from "../../assets/Icons/wishlist.svg";
import SearchIcon from "../../assets/Icons/search.svg";



export const SubCategoryWrap = styled.div`
        ${'' /* display: none; */}
        visibility:hidden;
        background: #ffffff;
        box-shadow: 0px 8px 24px 2px rgba(0, 0, 0, 0.12);
        position: absolute;
        top: 96px;
        ${'' /* width:100%;
        min-width: 315px; */}
        max-width:100%; 
        z-index: 1;
        left: 0;
        right:0;
        ${'' /* bottom:0; */}
    
        &.visible{
           ${'' /* display:block; */}
           visibility:visible;
        }
        @media (max-width: 600px) {
          width: 100%;
          box-shadow: none;
          padding-left: 20px;
          position: relative;
          top: 0;
          left: 0;
        }
        h6{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: #003459;
        display: flex;
        align-item:center;
        justify-contain:flex-start;
        padding: 8px 0;
        cursor:pointer;
        }
          @media (max-width: 600px) {
            grid-template-columns: 1fr;
          }      
    
        &.Right {
          top: 0;
          right: 0;
          left: 0;
          z-index: 1;
    
          @media (max-width: 600px) {
            padding: 10px 40px;
            position: relative;
            top: 0;
            left: auto;
            right: 0;
          }
        }
`;
export const SubCategory = styled.ul`
        position:relative;
        z-index:-1;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        transition: bottom 0.5s ease-in-out;
        padding: 32px 60px;
        height: 380px;
        column-gap: 12px;
    
        h6{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: #003459;
        display: flex;
        align-item:center;
        justify-contain:flex-start;
        padding: 8px 0;
        cursor:pointer;
        }
          @media (max-width: 600px) {
            grid-template-columns: 1fr;
          }        
`;
export const ArrowIconLeft = styled.i`
  display: inline-block;
  height: 9px;
  position: relative;
  width:9px;
  -moz-transform:rotate(135deg);
  -ms-transform:rotate(135deg);
  -webkit-transform:rotate(135deg);
  transform:rotate(135deg);
  cursor:pointer;
  &::after {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-right-style: solid;
    border-right-width: 2px;
    content: '';
    display: inline-block;
    height: 9px;
    left: 10px;
    position: absolute;
    top: 11px;
    width: 9px;
    border-color: #003459;
  }
`;
export const DropList = styled.li`
        &::after {
              display: none;
            }
            button {
              padding: 0;
              line-height: 0;
              text-align: start;
              display: block;
            }
            h5 {
              padding: 0;
              font-weight: 600;
              font-size: 16px;
                line-height: 24px;
              letter-spacing: 0.04em;
                color: #003459;
              margin-bottom: 8px;
            }
`;
export const SubSubItems = styled.p`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;
        color: #003459;
        margin-bottom: 8px;
        cursor: pointer;
        padding-left:10px;
        &:hover,
        &:active {
        color: $success;
        }
`;
export const SubCategoroy = styled.h5`
        font-size: 16px;
        line-height: 24px;
        color: #003459;
`;
export const SubSubCategoroy = styled.small`
        font-size: 16px;
        line-height: 24px;
        color: #003459;
        padding-left:10px;
`;

export const CategoryList = styled.li`
${'' /* padding:20px 0; */}
`;
export const NavbarList = styled.ul`
         list-style-type: none;
        display: flex;
        align-items: center;
        ${'' /* position: relative; */}
        word-break: keep-all;
        word-wrap: normal;
        gap: 18px;
        ${'' /* position: relative; */}
        z-index:1;
`;

export const MoreDropDown = styled.ul`
                width: 315px;
                min-height: 100%;
                display: none;
                flex-direction: column;
                align-items: flex-start;
                z-index: 5;
                background: #ffffff;
                box-shadow: 0px 8px 24px 2px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
                position: absolute;
                top: 96px;
                padding:32px 60px;

                @media (max-width: 600px) {
                width: 100%;
                box-shadow: none;
                padding-left: 20px;
                position: relative;
                top: 0;
                left: 0;
                }

                &.MoreOptionvisible {
                display: block;
                }

                
`;
export const Button = styled.button`
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.04em;
                color: #003459;
                padding: 8px 16px;
                font-weight: 500;
                margin:0;
                display: flex;
                justify-content:space-between;
                align-item:center;
`;
export const MoreDropList = styled.li`
        h5{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: #003459;
        padding: 8px 0;
        font-weight: 500;
        margin:0;
        display: flex;
        justify-content:space-between;
        align-item:center;
        cursor:pointer;
        }
`;

export const ArrowIcon = styled.i`
  display: block;
  height: 9px;
  position: relative;
  width:9px;
  -moz-transform:rotate(315deg);
  -ms-transform:rotate(315deg);
  -webkit-transform:rotate(315deg);
  transform:rotate(315deg);
  &::after {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-right-style: solid;
    border-right-width: 2px;
    content: '';
    display: inline-block;
    height: 9px;
    right: 0;
    position: absolute;
    top: 10px;
    width: 9px;
    border-color: #003459;
  }
`;
export const StyledHeader = styled.header`
           
 z-index: 99;     
 background-color: transparent;
 ${'' /* position: relative; */}
 box-shadow: 0px 3px 9px rgb(0 0 0 / 5%);
        &.sticky{
                background-color: ${({ theme }) => theme.Header.Background}; 
     
                     
 position: fixed;
 width: 100%;
 top: 0;
    animation: headerSticky .95s ease forwards;
    box-shadow: 0px 3px 9px rgb(0 0 0 / 5%);
        }
        @keyframes headerSticky {
                0% {
                  transform: translateY(-100%); }
                100% {
                  transform: translateY(0); } }
        `


export const Nav = styled.nav`
display: grid;
align-items: center;
grid-template-columns: auto 45% auto;
gap: 32px;
padding: 16px 0;
position:relative;
@media (max-width: 768px) {
        grid-template-columns: 1fr 1fr auto;
}
        `

export const NavAuthList = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        @media (max-width: ${({ theme }) => theme.mobile}) {

        }
        `
export const NavAuthListItem = styled.li`
        .icon{
                width: 24px;
                height: 24px;
                display: block;
                cursor: pointer;
                background-color: #1F3259;    

                &.wishlist{

                        -webkit-mask: url(${WishlistIcon}) no-repeat center;
                        mask-image: url(${WishlistIcon}) no-repeat center;
                }
                &.profile{

                        -webkit-mask: url(${ProfileIocn}) no-repeat center;
                        mask-image: url(${ProfileIocn}) no-repeat center;
                }
                &.cart{

                        -webkit-mask: url(${CartIcon}) no-repeat center;
                        mask-image: url(${CartIcon}) no-repeat center;
                }
                &.search{

                        -webkit-mask: url(${SearchIcon}) no-repeat center;
                        mask-image: url(${SearchIcon}) no-repeat center;
                }
        }
        `;

export const BookAppoinmentButton = styled.button`
        font-weight: 700;
font-size: 16px;
line-height: 22px;
        background: #68A7FC;
        border: 1px solid #68A7FC;
        border-radius: 50px;
        color: #FFF;
        padding: 12px 32px;
        cursor: pointer;
        text-transform: uppercase;
        &:hover{
        background: #FFF;
        color: #68A7FC;
        -webkit-transition-duration: 700ms;
        -moz-transition-duration: 700ms;
        -o-transition-duration: 700ms;
        transition-duration: 700ms;
        }
        `;

export const NavAuthWrapper = styled.div`
        margin: auto 0 auto auto;
        ${'' /* // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // button{
        // margin-right: 16px;
        // &:last-child{
        // margin-right: 0;
        // }
        // }
        // @media (max-width: ${({ theme }) => theme.mobile}) {

        // } */}
        `;

export const LogoWrapper = styled.a`
width: 112px;
height: 64px;
display: block;
@media (max-width: ${({ theme }) => theme.mobile}) {

}
img{
width: 100%;
height: 100%;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
text-align: center;
object-fit: contain;
}
`;
export const NavContactWrapItem = styled.li`
display: grid;
grid-template-columns: auto 1fr;
gap: 8px;
.phone-icon{
 width: 40px;
  height: 40px;
  display: block;
  cursor: pointer;
  background-color: #006f9c;
  -webkit-mask: url(${PhoneIcon}) no-repeat center;
  mask-image: url(${PhoneIcon}) no-repeat center;
}
.email-icon{
        width: 40px;
        height: 40px;
  display: block;
  cursor: pointer;
  background-color: #006f9c;
  -webkit-mask: url(${EmailIcon}) no-repeat center;
  mask-image: url(${EmailIcon}) no-repeat center;
}
.address-icon{
        width: 40px;
        height: 40px;
  display: block;
  cursor: pointer;
  background-color: #006f9c;
  -webkit-mask: url(${AddressIcon}) no-repeat center;
  mask-image: url(${AddressIcon}) no-repeat center;
}
${'' /* h6{
        font-weight: ${({ theme }) => theme.Header.h6.FontWeight};
        font-size: ${({ theme }) => theme.Header.h6.FontSize};
        line-height: ${({ theme }) => theme.Header.h6.LineHeight};
        font-style: ${({ theme }) => theme.Header.h6.FontStyle};
        font-family: ${({ theme }) => theme.Header.h6.FontFamily};
        letter-spacing: ${({ theme }) => theme.Header.h6.LetterSpacing};
        color: ${({ theme }) => theme.Header.h6.Color};
        text-transform: ${({ theme }) => theme.Header.h6.TextTransform};
        text-alignment: ${({ theme }) => theme.Header.h6.TextAlignemnt};
      
}
a, p{
        font-weight: ${({ theme }) => theme.Header.p.FontWeight};
        font-size: ${({ theme }) => theme.Header.p.FontSize};
        line-height: ${({ theme }) => theme.Header.p.LineHeight};
        font-style: ${({ theme }) => theme.Header.p.FontStyle};
        font-family: ${({ theme }) => theme.Header.p.FontFamily};
        letter-spacing: ${({ theme }) => theme.Header.p.LetterSpacing};
        color: ${({ theme }) => theme.Header.p.Color};
        text-transform: ${({ theme }) => theme.Header.p.TextTransform};
        text-alignment: ${({ theme }) => theme.Header.p.TextAlignemnt};
     
} */}
`;
export const ItemInnerContent = styled.li`
`;

export const NavMenuWrapper = styled.div`
     
a,button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex: 0 0 auto;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #003459;
        font-family: gilroy;
        margin: 0 8px;
        &:hover{
        color: ${({ theme }) => theme.Header.NavMenuWrapper.NavMenuCustom.Hover.Color};
        }
        &.active{
                a,button{
                color: ${({ theme }) => theme.Header.NavMenuWrapper.NavMenuCustom.Hover.Color};
                }    
                }
        }

        .LongMenuWrapProp{
                button, a{
                        color: ${({ theme }) => theme.Header.NavMenuWrapper.Background};
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 28px;
                }

        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
}`;

export const SlidenavOverlay = styled.div`
overflow: hidden;
&.active {
  height: 100vh;
  width: 100%;
  background-color: rgba(32, 32, 32, 0.4);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}`;

export const SideNavbarWrapper = styled.div`
      display: block;
      gap: 10px;
      border: 1px solid rgba(32,32,32, 0.1);
      z-index: 101;
      background-color: #ffffff;
      width: 280px;
      height: 100vh;
      transform: translateX(-100%);
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -ms-transition: all 0.4s ease;
      transition: all 0.4s ease;
      position: absolute;
      top: 0;
      left: 0;
      overflow-y: auto;
      scroll-behavior: smooth;

      &.active {
        transform: translateX(0);
      }
`;
export const LoginSignWrap = styled.div`
        padding: 16px;
        h5,
        h4 {
                font-size: 14px;
                font-weight: 600;
                letter-spacing: -0.02em;
                line-height: 22px;
                color: #000;
                font-family: "Poppins", sans-serif;
        }
        h4 {
          margin-bottom: 4px;
        }
`;
export const LoginWrap = styled.ul`
         display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(32,32,32, 0.6);
`;
export const BtnList = styled.li`
        button{
            background-color: transparent;
            border: none;
            line-height: 22px;
            outline: none;
            font-weight: 400;
            font-size: 12px;
            letter-spacing: -0.02em;
            color: rgba(32,32,32, 0.6);
        }
`;
export const SideNavbar = styled.ul`
        width: 100%;

`;
export const SideNavbarList = styled.li`
        border-bottom: 1px solid #eaeaea;
        padding: 6px 16px;
`;
export const Categorybutton = styled.div`
                display: flex;
            align-items: center;
            justify-content: space-between;
            .icon {
              font-weight: 400;
              font-size: 15px;
            }
`;
export const Subcategorieswrap = styled.ul`
        display: flex;
            flex-direction: column;
            padding: 10px 0 10px 8px;
            gap: 8px;

            ${'' /* button {
              font-weight: 400;
              font-size: 15px;
            } */}
`;
export const SubcategorieList = styled.li`
                display: flex;
            flex-direction: column;
            gap: 10px;
`;

export const CategoryBtn = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;

            .icon {
              font-weight: 400;
              font-size: 15px;
            }
            a{
                ${'' /* font-family: 'Gilroy-SemiBold'; */}
                font-size: 14px;
                line-height: 168%;
                letter-spacing: -0.02em;
                color: #000000;
                font-weight: 600;
            }
`;
export const SideNavBtn = styled.button`
        background-color:transparent;
        border:none;
`;
export const ShopcategoryWrap = styled.ul`
        padding: 10px 0 10px 16px;
`;
export const ShopcategoryList = styled.li`
        margin-bottom: 10px;
        &:last-child {
        margin-bottom: 0;
        }
`;
export const SubCategoriesWrap = styled.ul`
            display: flex;
            flex-direction: column;
            padding: 10px 0 10px 8px;
            gap: 10px;
`;
export const SubcategoryList = styled.li``;

export const SubcategoryListWrap = styled.div`
              display: flex;
              align-items: center;
              justify-content: space-between;
`;
export const SubSubCategory = styled.ul`
 padding: 0 0 0 18px;
`;
export const SubSubCategoryList = styled.li`
                margin-bottom: 10px;
                &:last-child {
                  margin-bottom: 0;
                }
`;
export const HumBurgar = styled.div`
          border: none;
          outline: none;
          background-color: transparent;
          display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            gap: 5px;
            order: -1;
            cursor:pointer;
            max-width: fit-content;
`;
export const HumLine = styled.span`
           width: 20px;
    height: 1.7px;
    background-color: #0184FF;
    border-radius: 8px;
    overflow: hidden;
`;





