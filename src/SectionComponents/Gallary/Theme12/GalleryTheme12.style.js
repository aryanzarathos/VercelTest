import { styled } from "styled-components";

export const GalleryWrapper = styled.div`
min-width: 1px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
.mySwipper-GalleryTheme12{
    .swiper-slide {
        transform: scale(0.94,0.89);
        transition: all .3s ease-in-out;
            @media (max-width:767px) {
                transform: scale(.84) ;
            }
        &.swiper-slide-active {  
            transform: scale(1)!important;
        }
    }
        
}
`
export const ImageWrap = styled.div`
height: ${({ item }) => item.desktop.height};
width: ${({ item }) => item.desktop.width};
background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
@media (max-width:767px) {
    height: ${({ item }) => item.mobile.height};
}
`