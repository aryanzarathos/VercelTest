import styled from "styled-components";

export const VideoGalleryWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
min-width: 1px;

    @media (max-width: 768px) {
      padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
      padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
      padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
      padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    }
    .mySwipper-VideoTheme1{
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
`;

export const VideoWrap = styled.div`
  height:${({ item }) => item?.desktop?.height};
  width: ${({ item }) => item?.desktop?.width};
  position: relative;
  overflow: hidden;
  background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;

  @media (max-width: 767px) {
    height:${({ item }) => item?.mobile?.height};
    }
    &:hover{
      .PlayImageWrap{
        bottom: 0%;
      }
    }
`;
export const Video = styled.video`
  height:  ${({ item }) => item?.desktop?.maxWidth};
  width:  ${({ item }) => item?.desktop?.width};
  object-fit:  ${({ item }) => item?.desktop?.objectFit};
  
`

export const PlayImageWrap = styled.div`
    position:${({ item }) => item?.desktop?.position};
    left:${({ item }) => item?.desktop?.left};
    right:${({ item }) => item?.desktop?.right};
    /* top: ${({ item }) => item.desktop.top}; */
    background:${({ item }) => item?.desktop?.background};
    height:${({ item }) => item?.desktop?.height};
    width: ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    cursor: pointer;
    bottom: -100%;
    transition: all 0.3s ease-in-out;
    @media (max-width:767px) {
      svg{
        height: 16px;
        width: 16px;
      }
    }
`;