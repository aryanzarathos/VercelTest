import { styled } from "styled-components";

export const ServicesContainer = styled.div`
min-width: 1px;
padding: 20px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
@media screen and (max-width:767px) {
padding: 0px;
    
}
/* background: red; */
`;
export const ServicesWrapper = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
gap: ${({ item }) => item.desktop.gap};

@media (max-width:1024px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);
}
@media (max-width:768px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);
}
`;
export const ServicesWrap = styled.div`
/* border:${({ item }) => item.desktop.border}; */
box-shadow: ${({ item }) => item.desktop.boxShadow};
border-radius: ${({ item }) => item.desktop.borderRadius};
/* padding-top: ${({ item }) => item.desktop.padding.paddingTop};
padding-right: ${({ item }) => item.desktop.padding.paddingRight};
padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
padding-left: ${({ item }) => item.desktop.padding.paddingLeft}; */
background: ${({ item }) => item.desktop.background};
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;


background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;

`;
export const ImageWrap = styled.div`
height: ${({ item }) => item.desktop.height};
width: ${({ item }) => item.desktop.width};
`;
export const DetailWrap = styled.div`

`;
export const PriceBtnWrap = styled.div`
display: ${({ item }) => item.desktop.display};
justify-content: ${({ item }) => item.desktop.justifyContent};
gap: ${({ item }) => item.desktop.gap};
align-items: ${({ item }) => item.desktop.alignItems};
margin-top: ${({ item }) => item.desktop.margin.marginTop};
margin-right: ${({ item }) => item.desktop.margin.marginRight};
margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
margin-left: ${({ item }) => item.desktop.margin.marginLeft};
`;
export const SwiperOurServices = styled.div`
.mySwipper-ServiceTheme12{
    padding-left: 15px;
    padding-right: 15px;
}
.swiper-slide{
    height: auto;
}
.swiper-wrapper{
    padding-top: 20px;
    padding-bottom: 20px;
}
.swiper-button-next,.swiper-button-prev{
    top: 100%;
}
`