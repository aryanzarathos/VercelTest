import { type } from "os"
import styled from "styled-components"

export const ProductDetailContainerMain = styled.div`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};

@media screen and (max-width: 1024px) {
    padding-top:${({ item }) => item?.tablet?.padding?.paddingTop};
padding-right:${({ item }) => item?.tablet?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.tablet?.padding?.paddingBottom};
padding-left:${({ item }) => item?.tablet?.padding?.paddingLeft};
}

  .slick-next {
    z-index: 1;
  }

.slick-prev {
    z-index: 1;
}

.slick-prev:before {
    border-right: 2px solid #6AA9FF;
    border-bottom: 2px solid #6AA9FF;
    transform: rotate(135deg);
    color: transparent;
    width: 12px;
    height: 12px;
}

.slick-next:before {
    font-size: 40px;
    border-right: 2px solid #6AA9FF;
    border-bottom: 2px solid #6AA9FF;
    color: transparent;
    width: 12px;
    height: 12px;
    transform: rotate(-45deg);
}
`
// export const Breadcrumb = styled.div`
// ul {
//     display: flex;
//     font-size: 12px;
//     line-height: 20px;

//     li a {
//         color: #00171F;

//     }

//     .active {
//         font-weight: 900;
//     }
// }
// `
export const MainContainer = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
gap: ${({ item }) => item?.desktop?.gap};
@media screen and (max-width: 767px) {
    grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};

}
`
export const ContainerMainLeft = styled.div`
/* width: 50%;
padding-right: 64px; */
background: ${({ item }) => item?.desktop?.background};
min-width: ${({ item }) => item?.desktop?.minWidth};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};

@media screen and (max-width: 767px) {
    width: 100%;
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
}

.slick-slider {
    .slick-dots {
        position: absolute;
        top: -10px;

        li {
            width: 12%;
            margin: 0px 4%;

            button {
                width: 100%;

                &::before {
                    content: '';
                    border: 1px solid #6AA9FF;
                    height: 0px;
                    width: 100%;
                }

            }

        }

    }
}
`
export const ImageContainer = styled.figure`
    display: block;
    margin-bottom: 22px;
    @media screen and (max-width: 1000px) {
        height: auto;
    }
`
export const ProductList = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`
export const ProductListImg = styled.div`
cursor: pointer;
height: 85px;
width: 100%;
border: 1px solid  #428BC1;
@media screen and (max-width: 424px) {
    height: 60px;
  }
img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
}
`
export const Social = styled.div`
display: ${({ item }) => item?.desktop?.display};
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
gap: ${({ item }) => item?.desktop?.gap};
`
export const Share = styled.div`
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
gap: ${({ item }) => item?.desktop?.gap};

svg {
    height: ${({ itemShare }) => itemShare?.desktop?.height};
    width: ${({ itemShare }) => itemShare?.desktop?.width};
}

/* 
p {
    font-size: 14px;
    line-height: 20px;
    color: #002A48;
} */
`
export const SocialShareLink = styled.div`
display: ${({ item }) => item?.desktop?.display};
gap: ${({ item }) => item?.desktop?.gap};
align-items: ${({ item }) => item?.desktop?.alignItems};

.twitterIcon {
    width: ${({ itemTwitter }) => itemTwitter?.desktop?.width};
    height: ${({ itemTwitter }) => itemTwitter?.desktop?.height};
    display: ${({ itemTwitter }) => itemTwitter?.desktop?.display};
}
.facebookIcon{
  width: ${({ itemFacebook }) => itemFacebook?.desktop?.width};
    height: ${({ itemFacebook }) => itemFacebook?.desktop?.height};
    display: ${({ itemFacebook }) => itemFacebook?.desktop?.display};
}
.gmailIcon{
  width: ${({ itemEmail }) => itemEmail?.desktop?.width};
    height: ${({ itemEmail }) => itemEmail?.desktop?.height};
    display: ${({ itemEmail }) => itemEmail?.desktop?.display};
}
.linkIcon{
    width: ${({ itemLink }) => itemLink?.desktop?.width};
    height: ${({ itemLink }) => itemLink?.desktop?.height};
    display: ${({ itemLink }) => itemLink?.desktop?.display};
}
`
export const ContainerMainRight = styled.div`
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
/* width: 50%; */
@media screen and (max-width: 768px) {
    margin-top:${({ item }) => item?.mobile?.margin?.marginTop} ;
    width: ${({ item }) => item?.mobile?.width};
}

`
export const HorizontalRow = styled.hr`
    border-top: ${({ item }) => item?.desktop?.border?.borderTop};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`
// export const ProductCode = styled.p`
// font-size: 14px;
// line-height: 20px;
// color: #99A2A5;
// margin-bottom: 12px;
// `
// export const ProductHeading = styled.h1`
// font-size: 24px;
// line-height: 36px;
// color: #003459;
// @media screen and (max-width: 620px) {
//     font-size: 20px;
//     font-family: 'Gilroy-Medium',sans-serif;
//     line-height: 26px;
// }
// `
export const PriceDetail = styled.div`
display: ${({ item }) => item?.desktop?.display};
gap: ${({ item }) => item?.desktop?.gap};
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
flex-wrap: ${({ item }) => item?.desktop?.flexWrap};
align-items: ${({ item }) => item?.desktop?.alignItems};
/* font-size: 20px;
line-height: 32px;
font-family: 'Gilroy-Bold',sans-serif; */
/* @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
} */

`
// export const Price = styled.p`
// color: #003459;
// `
// export const OldPrice = styled.p`

// text-decoration-line: line-through;
// color: rgba(32, 32, 32, 0.6);
// `
// export const Offer = styled.p`
// color: #428BC1;
// `
export const ProductCategoryWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background};
`
export const HorizontalLine = styled.hr`
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`;
export const ProductCategoryList = styled.ul`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    flex-wrap: ${({ item }) => item?.desktop?.flexWrap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
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
    &.active {
        background: ${({ item }) => item?.desktop?.hover?.background};
        color: ${({ item }) => item?.desktop?.hover?.color};
    }
    @media (max-width: 768px) {
            padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
            /* font-size: ${({ item }) => item?.mobile?.fontSize}; */
            padding: 2px 8px;
        }
`;
export const Cart = styled.div`
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
gap: ${({ item }) => item?.desktop?.gap};
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};

/* a {
    font-weight: 900;
    font-size: 14px;
    line-height: 168%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    @media screen and (max-width: 374px) {
        font-size: 10px;
        font-weight: 800;
    }
} */

/* button {
    border: 1px solid #003459;
    border-radius: 4px;
    width: 100%;
} */
`
// export const Cartimg = styled.img`
// margin-right: 7px;
// `
export const AddtoCart = styled.button`
display: ${({ item }) => item.desktop.display};
align-items:  ${({ item }) => item.desktop.alignItems};
justify-content:  ${({ item }) => item.desktop.justifyContent};
gap:  ${({ item }) => item.desktop.gap};
background:  ${({ item }) => item.desktop.background};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
border-width: ${({ item }) => item?.desktop?.border?.borderWidth};
border-style: ${({ item }) => item?.desktop?.border?.borderStyle};
border-radius: ${({ item }) => item?.desktop?.border?.borderRadius};
border-color: ${({ item }) => item?.desktop?.border?.borderColor};
width:${({ item }) => item?.desktop?.width};
/* a {
    color: #fff;
} */
`
export const Addto__Wishlist = styled.button`
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
gap: ${({ item }) => item?.desktop?.gap};
background:${({ item }) => item?.desktop?.background};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
border-width: ${({ item }) => item?.desktop?.border?.borderWidth};
border-style: ${({ item }) => item?.desktop?.border?.borderStyle};
border-radius: ${({ item }) => item?.desktop?.border?.borderRadius};
border-color: ${({ item }) => item?.desktop?.border?.borderColor};
width:${({ item }) => item?.desktop?.width};


/* a {
    color: #003459;
} */
`;
export const SelectVarianterror = styled.div`
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};

`

export const Product__Info = styled.div`
position: ${({ item }) => item?.desktop?.position};



`;
export const ProductDetailTabs = styled.div`
background:  ${({ item }) => item?.desktop?.background};
    .tabsBtn {
    font-size: ${({ itemTabs }) => itemTabs?.desktop?.fontSize};
    min-width: ${({ itemTabs }) => itemTabs?.desktop?.minWidth};
    line-height: ${({ itemTabs }) => itemTabs?.desktop?.lineHeight};
    color: ${({ itemTabs }) => itemTabs?.desktop?.color};
    background-color: ${({ itemTabs }) => itemTabs?.desktop?.background};
    border: ${({ itemTabs }) => itemTabs?.desktop?.border};
    border-bottom: ${({ itemTabs }) => itemTabs?.desktop?.borderBottom};
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: ${({ itemTabs }) => itemTabs?.mobile?.fontSize};
    }
}

.tab__active {
    color: ${({ itemTabs }) => itemTabs?.desktop?.active?.color};
    border-bottom: ${({ itemTabs }) => itemTabs?.desktop?.active?.borderBottom};
}
.Product__Info__Tabs {
    /* overflow-x: scroll;
    white-space: nowrap;
    display: flex;
    width: 545px;
    gap: 18px;
    margin: 0 20px;

    @media (max-width: 1200px) {
        width: 42vw;
    }
    @media (max-width: 768px) {
        width: calc(100vw - 115px);
    }

    &::-webkit-scrollbar {
        display: none;
    } */
    &::-webkit-scrollbar-button{
        /* background-color: red !important; */
        display:${({ itemWrapper }) => itemWrapper?.desktop?.webkitBtn?.display} ;
        width: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitBtn?.width};
        position: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitBtn?.position};
        top: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitBtn?.top};
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitThumb?.background};
       
    } 
    &::-webkit-scrollbar-track{
        background-color: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitTrack?.background};
      
    } 
    &::-webkit-resizer{
        background-color: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitResizer?.background};
        position: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitResizer?.position};
        bottom: ${({ itemWrapper }) => itemWrapper?.desktop?.webkitResizer?.bottom};
    } 

    overflow-x: ${({ itemWrapper }) => itemWrapper?.desktop?.overFlowX};
    /* white-space: nowrap; */
    display: ${({ itemWrapper }) => itemWrapper?.desktop?.display};
    max-width: ${({ itemWrapper }) => itemWrapper?.desktop?.maxWidth};
    gap:  ${({ itemWrapper }) => itemWrapper?.desktop?.gap};
    margin-left:  ${({ itemWrapper }) => itemWrapper?.desktop?.margin?.marginLeft};
    margin-right:  ${({ itemWrapper }) => itemWrapper?.desktop?.margin?.marginRight};
    @media (max-width: 767px){
    gap:  ${({ itemWrapper }) => itemWrapper?.mobile?.gap};
    margin-left:  ${({ itemWrapper }) => itemWrapper?.mobile?.margin?.marginLeft};
    margin-right:  ${({ itemWrapper }) => itemWrapper?.mobile?.margin?.marginRight};
    margin-left: 15px; 
    margin-right: 15px;
    margin-top: 10px;
    }
/* 
    @media (max-width: 1200px) {
        width: 42vw;
    }
    @media (max-width: 768px) {
        width: calc(100vw - 115px);
    } */

}`;



export const Tabs__Content = styled.div`
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
   
`
export const LeftArrow = styled.button`
position: ${({ item }) => item?.desktop?.position};
background: ${({ item }) => item?.desktop?.background};
border: ${({ item }) => item?.desktop?.border?.borderWidth};
color: ${({ item }) => item?.desktop?.color};
top: ${({ item }) => item?.desktop?.top};
left: ${({ item }) => item?.desktop?.left};
cursor: pointer;
/* background: red; */
@media (max-width: 425px) {
    top: ${({ item }) => item?.mobile?.top};
    top: 4px;
}
svg {
    fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
    height: 14px;
    width: 8px;
}
`
export const RightArrow = styled.button`
position: ${({ item }) => item?.desktop?.position};
background: ${({ item }) => item?.desktop?.background};
border: ${({ item }) => item?.desktop?.border};
color: ${({ item }) => item?.desktop?.color};
top: ${({ item }) => item?.desktop?.top};
right: ${({ item }) => item?.desktop?.right};
cursor: pointer;
@media (max-width: 767px) {
    top: ${({ item }) => item?.mobile?.top};
    
}
@media (max-width: 425px) {
    top: 4px;
}
svg{
    fill: ${({ itemSvgIcon }) => itemSvgIcon?.desktop?.fill};
}
`
export const QuantityItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
   margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
   margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
   position: ${({ item }) => item?.desktop?.position};
   align-items: ${({ item }) => item?.desktop?.alignItems};
   .inputArrow::-webkit-outer-spin-button,
    .inputArrow::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    .inputArrow[type=number] {
    -moz-appearance: textfield;
    }
   @media screen and (max-width: 767px) {
    flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
    }

`;
export const Input = styled.input`
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    border-width:${({ item }) => item?.desktop?.border?.borderWidth};
    border-style:${({ item }) => item?.desktop?.border?.borderStyle};
    border-color:${({ item }) => item?.desktop?.border?.borderColor};

    border-radius: ${({ item }) => item?.desktop?.border?.borderRadius};
    &::-webkit-outer-spin-button{
        display: ${({ item }) => item?.desktop?.webkit?.display};
        opacity: ${({ item }) => item?.desktop?.webkit?.opacity};
    }
    /* &::-webkit-inner-spin-button {
        display: inline-block;
        opacity: 1;
    } */
    @media screen and (max-width: 767px){
        width: ${({ item }) => item?.mobile?.width};
   }
`
export const QuantityText = styled.label`
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    
    
    @media screen and (max-width: 767px){
            font-size: ${({ item }) => item?.mobile?.fontSize};
        margin-top: 10px;
        display: block;

            
   }
`
export const ImageWrapper = styled.div`
    height: 480PX;
    width: 100%;
    @media screen and (max-width: 1200px) {
    height: 350px;
    }
    @media screen and (max-width: 767px) {
    height: 300px;
    }
      img{
      display: block;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
`
export const QuantityItemText = styled.label`
font-family: ${({ item }) => item?.desktop?.fontFamily};
font-size: ${({ item }) => item?.desktop?.fontSize};
line-height: ${({ item }) => item?.desktop?.lineHeight};
color: ${({ item }) => item?.desktop?.color};
`;
export const Tabs__Content__List = styled.ul`
position: ${({ item }) => item?.desktop?.position};
background:  ${({ item }) => item?.desktop?.background};
`;
export const Tabs__Content__List__Item = styled.li`
        /* list-style: ${({ item }) => item?.desktop?.listStyle}; */
        font-size: ${({ item }) => item?.desktop?.fontSize};
        line-height: ${({ item }) => item?.desktop?.lineHeight};
        color: ${({ item }) => item?.desktop?.color};
        /* @media (max-width: 425px) {
            font-size: 13px;
        } */

        p {
            list-style:disc outside none;
             display:list-item; 
            /* color: red; */
        }

`;
export const InputWrapper = styled.div`
position: relative;

`;


export const SpinnerLoader_wrap = styled.div`
    text-align: center;
    height: calc(100vh - 168px);
    .Spinner{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`