import { styled } from "styled-components";

export const ServicesContainer = styled.div`
min-width: 1px;

background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`;
export const ServicesWrapper = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
gap: ${({ item }) => item.desktop.gap};
padding-top: ${({ item }) => item.desktop.padding.paddingTop};
padding-right: ${({ item }) => item.desktop.padding.paddingRight};
padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
overflow:  ${({ item }) => item.desktop.overflow};

@media (max-width:1024px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);
}
@media (max-width:768px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);
}
`;
export const ServicesWrap = styled.div`
padding-top: ${({ item }) => item.desktop.padding.paddingTop};
padding-right: ${({ item }) => item.desktop.padding.paddingRight};
padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
position: ${({ item }) => item.desktop.position};
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    /* border-style:  ${({ item }) => item?.desktop?.borderStyle} ; */
    /* border-width:${({ item }) => item?.desktop?.borderWidth}; */
    /* border-color:${({ item }) => item?.desktop?.borderColor} ; */


&::before{
    content: ${({ item }) => item.desktop.before.content};
    position: ${({ item }) => item.desktop.before.position};
    height: ${({ item }) => item.desktop.before.height};
    width: ${({ item }) => item.desktop.borderWidth};
    background-color: ${({ item }) => item.desktop.borderColor};
    top: ${({ item }) => item.desktop.before.top};
    left: ${({ item }) => item.desktop.before.left};
}
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
`;
export const SwiperOurServices = styled.div`
.swiper-slide{
    height: auto;
}
`