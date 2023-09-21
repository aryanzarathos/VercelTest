import { styled } from "styled-components"

export const FacilitiesWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    min-width:1px;

    
    .mySwipper{
        padding-top: 80px;
        .swiper-slide{
            height: auto;
        }
    }
    .swiper-button-prev{
        top: 44px;
        right: 63px;
        left: auto;
        height: 43px;
        width: 43px;
        border-radius: 50%;
        background: ${({ arrowBgcolor }) => arrowBgcolor?.background};
        &::before{
            background: ${({ arrowColor }) => arrowColor};
            height: 2px;
            width: 50%;
            left: 10px;
        }
        &::after{
            left: 10px;
            width: auto;
        }
    }
    .swiper-button-next{
        top: 44px;
        right: 0;
        height: 43px;
        width: 43px;
        background:  ${({ arrowBgcolor }) => arrowBgcolor?.background};
        border-radius: 50%;
        &::before{
            background: ${({ arrowColor }) => arrowColor};
            height: 2px;
            width: 50%;
            left: 9px;
        }
        &::after{
            left: 10px;
            width: auto;
        }
    }
`
export const FacilitiesWrap = styled.div`
background:  ${({ item }) => item.desktop.background};
border:  ${({ item }) => item.desktop.border};
box-shadow: ${({ item }) => item.desktop.boxShadow};
border-radius:  ${({ item }) => item.desktop.borderRadius};
padding-top:  ${({ item }) => item.desktop.padding.paddingTop};
padding-right:  ${({ item }) => item.desktop.padding.paddingRight};
padding-bottom:  ${({ item }) => item.desktop.padding.paddingBottom};
padding-left:  ${({ item }) => item.desktop.padding.paddingLeft};
height: 100%;
display:flex;
flex-direction: column;
justify-content: space-between;
`
export const ContentWrap = styled.div`

`
export const ImageWrap = styled.div`
height: ${({ item }) => item.desktop.height};
width:  ${({ item }) => item.desktop.width};
    @media (max-width:1024px) {
        height: ${({ item }) => item.tablet.height};
    }
    @media (max-width:767px) {
        height: ${({ item }) => item.mobile.height};
    }
`

