import { styled } from "styled-components";

export const SwiperMainContainer = styled.div`
.mySwiper2{
    margin-bottom: 20px;
    padding-top: 20px;
    .swiper-button-next,.swiper-button-prev{
    height: ${({ item2 }) => item2.desktop.height};
    width: ${({ item2 }) => item2.desktop.width};
    user-select:none;
    display: block;
    border-top: 2px solid ${({ item2 }) => item2.desktop.after.color};
    border-left: 2px solid ${({ item2 }) => item2.desktop.after.color};
    transform: rotate(135deg);
    margin-top: 0;
        &::after{
            font-size: ${({ item2 }) => item2.desktop.after.fontSize};
            color: ${({ item2 }) => item2.desktop.after.color};
        }
    }
    .swiper-button-prev{
        transform: rotate(-45deg);
    }
    .swiper-pagination{
        display: ${({ item3 }) => item3.desktop.display};
        justify-content:${({ item3 }) => item3.desktop.justifyContent};
        top:${({ item3 }) => item3.desktop.top};
        height: ${({ item3 }) => item3.desktop.height};
        .swiper-pagination-bullet{
            width: ${({ item4 }) => item4.desktop.width};
            border-radius: ${({ item4 }) => item4.desktop.borderRadius};
            height: ${({ item4 }) => item4.desktop.height};
            background: ${({ item4 }) => item4.desktop.background};
        }
    }
    
}
    // .mySwiper{
    //     margin-bottom: 20px;
    // }
`
export const ImgWraper = styled.div`
width: ${({ item }) => item.desktop.width};
max-width: ${({ item }) => item.desktop.maxWidth};
height: ${({ item }) => item.desktop.height};
max-height: ${({ item }) => item.desktop.maxHeight};
margin:${({ item }) => item.desktop.margin};

`;
export const ProductList = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns:${({ item }) => item.desktop.gridTemplateColumns};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items:${({ item }) => item.desktop.alignItems};
gap: ${({ item }) => item.desktop.gap};


@media screen and (max-width: 1024px) {
    gap: ${({ item }) => item.mobile.gap};
}

@media screen and (max-width: 800px) {
    gap: ${({ item }) => item.mobile.gap};
}
`

export const ProductListImg = styled.div`
cursor: ${({ item }) => item.desktop.cursor};
height: ${({ item }) => item.desktop.height};
width: ${({ item }) => item.desktop.width};
border: ${({ item }) => item.desktop.border};
@media screen and (max-width: 767px) {
}
`