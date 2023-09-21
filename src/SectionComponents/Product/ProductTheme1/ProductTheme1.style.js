import { styled } from "styled-components";

export const ProductMainConatiner = styled.section`
min-width:1px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`
export const ProductWrapper = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
gap: ${({ item }) => item.desktop.gap};
@media (max-width:1024px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);
}
@media (max-width:767px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);
}
`
export const ProductWrap = styled.div`

background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;

height:100%;

`
export const ImageWrap = styled.div`
height: ${({ item }) => item.desktop.height};
width: ${({ item }) => item.desktop.width};
margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};

`
export const DiscountWrap = styled.div`
display:  ${({ item }) => item.desktop.display};
align-items:  ${({ item }) => item.desktop.alignItems};
gap:  ${({ item }) => item.desktop.gap};
`
export const ProductSliderWrap = styled.div`
 .swiper-slide{
            height: auto;
        }
`