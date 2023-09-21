import ImageEditor from '@/CommonComponents/ImageEditor';
import React, { useRef, useState } from 'react';
// import { Image } from "./ImageElementStyled";
import styled from 'styled-components';
import VideoPause from "../../../Assets/Icons/videoPause.svg";
import VideoPlay from "../../../Assets/Icons/videoPlay.svg";
import { isVideoAllowed } from "../../../Classes/FileValidation";

const Image = styled.img`
  max-width: ${({ item }) => item?.desktop?.maxWidth ? item.desktop.maxWidth : ""};
  min-width: ${({ item }) => item?.desktop?.minWidth ? item.desktop.minWidth : ""};
  width: ${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
  height: ${({ item }) => item?.desktop?.height ? item.desktop.height : ""};
  max-height: ${({ item }) => item?.desktop?.maxHeight ? item.desktop.maxHeight : ""};
  min-height: ${({ item }) => item?.desktop?.minHeight ? item.desktop.minHeight : ""};
  display: ${({ item }) => item?.desktop?.display ? item.desktop.display : ""};
  position: ${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""};
  background: ${({ item }) => item?.desktop?.background ? item?.desktop?.background : ""};
  top: ${({ item }) => item?.desktop?.top ? item.desktop.top : ""};
  left: ${({ item }) => item?.desktop?.left ? item.desktop.left : ""};
  right: ${({ item }) => item?.desktop?.right ? item.desktop.right : ""};
  bottom: ${({ item }) => item?.desktop?.bottom ? item.desktop.bottom : ""};
  object-fit: ${({ item }) => item?.desktop?.objectFit ? item.desktop.objectFit : ""};
  object-position: ${({ item }) => item?.desktop?.objectPosition ? item.desktop.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.desktop?.borderRadius?.borderTopLeftRadius ? item.desktop.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.desktop?.borderRadius?.borderTopRightRadius ? item.desktop.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.desktop?.borderRadius?.borderBottomLeftRadius ? item.desktop.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.desktop?.borderRadius?.borderBottomRightRadius ? item.desktop.borderRadius.borderBottomRightRadius : ""};
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
  order: ${({ item }) => item?.desktop?.order};
  mix-blend-mode: ${({ item }) => item?.desktop?.mixBlendMode ? item?.desktop?.mixBlendMode : ""} ;





  @media screen and (max-width:1024px) {
  max-width: ${({ item }) => item?.tablet?.maxWidth ? item.tablet.maxWidth : ""};
  min-width: ${({ item }) => item?.tablet?.minWidth ? item.tablet.minWidth : ""};
  width: ${({ item }) => item?.tablet?.width ? item.tablet.width : ""};
  height: ${({ item }) => item?.tablet?.height ? item.tablet.height : ""};
  max-height: ${({ item }) => item?.tablet?.maxHeight ? item.tablet.maxHeight : ""};
  min-height: ${({ item }) => item?.tablet?.minHeight ? item.tablet.minHeight : ""};
  display: ${({ item }) => item?.tablet?.display ? item.tablet.display : ""};
  position: ${({ item }) => item?.tablet?.position ? item?.tablet?.position : ""};
  background: ${({ item }) => item?.tablet?.background ? item?.tablet?.background : ""};
  top: ${({ item }) => item?.tablet?.top ? item.tablet.top : ""};
  left: ${({ item }) => item?.tablet?.left ? item.tablet.left : ""};
  right: ${({ item }) => item?.tablet?.right ? item.tablet.right : ""};
  bottom: ${({ item }) => item?.tablet?.bottom ? item.tablet.bottom : ""};
  object-fit: ${({ item }) => item?.tablet?.objectFit ? item.tablet.objectFit : ""};
  object-position: ${({ item }) => item?.tablet?.objectPosition ? item.tablet.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.tablet?.borderRadius?.borderTopLeftRadius ? item.tablet.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.tablet?.borderRadius?.borderTopRightRadius ? item.tablet.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.tablet?.borderRadius?.borderBottomLeftRadius ? item.tablet.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.tablet?.borderRadius?.borderBottomRightRadius ? item.tablet.borderRadius.borderBottomRightRadius : ""};
  order: ${({ item }) => item?.tablet?.order};

}
@media screen and (max-width:767px) {
  max-width: ${({ item }) => item?.mobile?.maxWidth ? item.mobile.maxWidth : ""};
  min-width: ${({ item }) => item?.mobile?.minWidth ? item.mobile.minWidth : ""};
  width: ${({ item }) => item?.mobile?.width ? item.mobile.width : ""};
  height: ${({ item }) => item?.mobile?.height ? item.mobile.height : ""};
  max-height: ${({ item }) => item?.mobile?.maxHeight ? item.mobile.maxHeight : ""};
  min-height: ${({ item }) => item?.mobile?.minHeight ? item.mobile.minHeight : ""};
  display: ${({ item }) => item?.mobile?.display ? item.mobile.display : ""};
  position: ${({ item }) => item?.mobile?.position ? item?.mobile?.position : ""};
  background: ${({ item }) => item?.mobile?.background ? item?.mobile?.background : ""};
  top: ${({ item }) => item?.mobile?.top ? item.mobile.top : ""};
  left: ${({ item }) => item?.mobile?.left ? item.mobile.left : ""};
  right: ${({ item }) => item?.mobile?.right ? item.mobile.right : ""};
  bottom: ${({ item }) => item?.mobile?.bottom ? item.mobile.bottom : ""};
  object-fit: ${({ item }) => item?.mobile?.objectFit ? item.mobile.objectFit : ""};
  object-position: ${({ item }) => item?.mobile?.objectPosition ? item.mobile.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.mobile?.borderRadius?.borderTopLeftRadius ? item.mobile.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.mobile?.borderRadius?.borderTopRightRadius ? item.mobile.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.mobile?.borderRadius?.borderBottomLeftRadius ? item.mobile.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.mobile?.borderRadius?.borderBottomRightRadius ? item.mobile.borderRadius.borderBottomRightRadius : ""};
  order: ${({ item }) => item?.mobile?.order};
}
`;

const VideoWrapper = styled.div`
   max-width: ${({ item }) => item?.desktop?.maxWidth ? item.desktop.maxWidth : ""};
  min-width: ${({ item }) => item?.desktop?.minWidth ? item.desktop.minWidth : ""};
  width: ${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
  height: ${({ item }) => item?.desktop?.height ? item.desktop.height : ""};
  max-height: ${({ item }) => item?.desktop?.maxHeight ? item.desktop.maxHeight : ""};
  min-height: ${({ item }) => item?.desktop?.minHeight ? item.desktop.minHeight : ""};
  display: ${({ item }) => item?.desktop?.display ? item.desktop.display : ""};
  position: ${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""};
  background: ${({ item }) => item?.desktop?.background ? item?.desktop?.background : ""};
  top: ${({ item }) => item?.desktop?.top ? item.desktop.top : ""};
  left: ${({ item }) => item?.desktop?.left ? item.desktop.left : ""};
  right: ${({ item }) => item?.desktop?.right ? item.desktop.right : ""};
  bottom: ${({ item }) => item?.desktop?.bottom ? item.desktop.bottom : ""};

    &:hover {
        .overlayButton {
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

    .imgaesVideo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

    }


`
const OverlayButton = styled.div`
      position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        display: none;
`

const ImageElement = ({ src, alt, style, defaultImage, index, className, customImage, ...data }) => {
  const isVideo = () => {
    const lastPeriodIndex = src ? src?.src ? src?.src.lastIndexOf(".") : (typeof(src) === "string" && src) ? src?.lastIndexOf(".") : "" : "";

    // Extract the file extension
    const extension = src ? src?.src ? src?.src?.substring(lastPeriodIndex + 1) : (typeof(src) === "string" && src) ? src?.substring(lastPeriodIndex + 1) : "" : "";

    if (src && (src.type === "video" || isVideoAllowed(extension))) {
      return true
    } else {
      return false
    }
  }

  const [pauseVideo, setPauseVideo] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPauseVideo(!pauseVideo);
  };

  return (
    <>
      {
        // open when  customSection image
        customImage ?
          (
            isVideo() ?
              <React.Fragment>
                {src?.key ? (
                  <VideoWrapper className="videoWrapper" item={style} >
                    <video
                      src={src?.src ? encodeURI(src?.src) : defaultImage}
                      alt={src?.alt}
                      className="imgaesVideo"
                      // controls={true}
                      item={style}
                      ref={videoRef}
                      {...data} />

                    <OverlayButton >
                      {
                        pauseVideo ? <VideoPause width="24px" height="24px" onClick={togglePlay} /> : <VideoPlay width="24px" height="24px" onClick={togglePlay} />
                      }


                    </OverlayButton>
                  </VideoWrapper>


                ) : (
                  <VideoWrapper className="videoWrapper" item={style}>
                    <video
                      src={src?.src ? encodeURI(src.src) : defaultImage}
                      alt={src?.alt}
                      className="imgaesVideo"
                      controls={true}
                      item={style}
                      {...data} />
                    <OverlayButton className="overlayButton">
                      {
                        pauseVideo ? <VideoPause width="24px" height="24px" onClick={togglePlay} /> : <VideoPlay width="24px" height="24px" onClick={togglePlay} />
                      }


                    </OverlayButton>
                  </VideoWrapper>
                )}
              </React.Fragment>
              :
              <ImageEditor index={index} >

                {src?.key ? (
                  <Image
                    src={(src?.src) ? encodeURI(src?.src) : defaultImage}
                    alt={src?.alt ? src?.alt : alt}
                    item={style}
                    className={className}
                  />
                ) : (

                  <Image
                    src={src?.src ? src.src : src ? src : defaultImage}
                    alt={src?.alt ? src?.alt : alt}
                    item={style}
                    className={className}
                  />
                )}
              </ImageEditor>
          ) :
          (
            isVideo() ?
              <React.Fragment>
                {src?.key ? (
                  <VideoWrapper className="videoWrapper" item={style}>
                    <video
                      src={src?.src ? encodeURI(src?.src) : defaultImage}
                      alt={src?.alt}
                      className="imgaesVideo"
                      item={style}
                      // controls={true}
                      ref={videoRef}
                      {...data} />

                    <OverlayButton className="overlayButton">
                      {
                        pauseVideo ? <VideoPause width="24px" height="24px" onClick={togglePlay} /> : <VideoPlay width="24px" height="24px" onClick={togglePlay} />
                      }


                    </OverlayButton>
                  </VideoWrapper>
                ) : (
                  <VideoWrapper className="videoWrapper" item={style}>
                    <video
                      src={src?.src ? encodeURI(src.src) : defaultImage}
                      alt={src?.alt}
                      className="imgaesVideo"
                      controls={true}
                      item={style}
                      {...data} />
                    <OverlayButton className="overlayButton">
                      {
                        pauseVideo ? <VideoPause width="24px" height="24px" onClick={togglePlay} /> : <VideoPlay width="24px" height="24px" onClick={togglePlay} />
                      }


                    </OverlayButton>
                  </VideoWrapper>
                )}
              </React.Fragment>
              :
              <React.Fragment>
                {src?.key ? (
                  <Image
                    src={src?.src ? encodeURI(src?.src) : defaultImage}
                    alt={src?.alt ? src?.alt : alt}
                    item={style}
                    className={className}
                  />
                ) : (

                  <Image
                    src={src?.src ? src.src : src ? src : defaultImage}
                    alt={src?.alt ? src?.alt : alt}
                    item={style}
                    className={className}
                  />
                )}
              </React.Fragment>
          )
      }
    </>

    // <Image src={src} alt={alt} item={style} />
  )
}



export default ImageElement