import { styled } from "styled-components";

export const PrevBtn = styled.button`
left: ${({ item }) => item.PrevBtn.left};
background: transparent;
border: ${({ item }) => item.PrevBtn.border};
outline: ${({ item }) => item.PrevBtn.outline};
transform: translateY(-50%);
text-rendering: auto;

&::after{
    font-size: ${({ item }) => item.PrevBtn.fontSize};
    color: ${({ color }) => color};
        left: 0;
    margin: auto;
   width: 100%;
   /* font-size: 20px; */
font-weight: 600;


}
    
`;
export const NextBtn = styled.button`
    background: transparent;
    border: ${({ item }) => item.NextBtn.border};
outline: ${({ item }) => item.NextBtn.outline};
right: ${({ item }) => item.NextBtn.right};
transform: translateY(-50%);
text-rendering: auto;

&:after{
    font-size: ${({ item }) => item.NextBtn.fontSize};
    color: ${({ color }) => color};
    right: 0;
    margin: auto;
    width: 100%;
    /* font-size: 20px; */
font-weight: 600;
    
}

`;
export const MainSwiper = styled.div`
position: relative;
.swiper-button-next, .swiper-button-prev {
  text-rendering: auto;
}

.swiper{
    z-index: 0;
    .swiper-wrapper{
        z-index: 0;
    }
    padding-bottom: ${({ item }) => item?.padding?.paddingBottom};
    .swiper-pagination-bullet-active{
        background: ${({ item }) => item?.dotsColor};
    }

}
`;