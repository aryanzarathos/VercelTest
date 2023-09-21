import { styled } from "styled-components";

export const GalleryWrapper = styled.div`
min-width: 1px;

background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`
export const GalleryWrap = styled.div`
    display: ${({ item }) => item.desktop.display};
    gap: ${({ item }) => item.desktop.gap};
    grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
        @media (max-width:1024px) {
            grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);
        }
        @media (max-width:767px) {
            grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);
        }
    `
export const ImageWrap = styled.div`
    height:  ${({ item }) => item.desktop.height};
    width:  ${({ item }) => item.desktop.width};
  
    background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
    &:first-child {
    grid-area: 1 / 1 / span 2 / span 2;
        @media screen and (min-width:768px) and (max-width:1024px) {
            grid-area: 1 / 1 / span 2 / span 1;
        }
        @media (max-width:767px) {
            height: calc(${({ item }) => item.desktop.height} / 1.5);
        }
    }
    &:not(:first-child){
        height: calc((${({ item }) => item.desktop.height} - ${({ item2 }) => item2.desktop.gap} )/2);
        @media (max-width:767px) {
            height: calc((${({ item }) => item.desktop.height} - ${({ item2 }) => item2.desktop.gap} )/2.5);
        }
    }
`
export const SliderImageWrap = styled.div`
    height:  ${({ item }) => item.desktop.height};
    width:  ${({ item }) => item.desktop.width};
`