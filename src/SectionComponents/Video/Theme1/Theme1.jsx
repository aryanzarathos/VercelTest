import React, { useEffect, useRef } from "react";
import PlayIcon from "../../../Assets/SectionComponent/Images/Video/play.svg";
import PauseIcon from "../../../Assets/SectionComponent/Images/Video/pause.svg";
import { VideoGalleryWrapper, VideoWrap, Video, PlayImageWrap } from "./VideoTheme1.style";
import { SwiperSlide } from "swiper/react";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import Slider from "../../../SectionCommon/Slider/Slider";
import { useState } from "react";
import LightBox from "@/CommonComponents/LightBox";
import MediaGallery from "../../../CommonComponents/MediaGalleryEditor";

const VideoTheme1 = ({ children }) => {
  const data = children;
  let videoSetting = data?.videoSetting;
  const style = {
    VideoGalleryWrapper: data.custom_section_editable[0].style,
    VideoWrap: data.custom_section_editable[1].style,
    Video: data.custom_section_editable[2].style,
    PlayImageWrap: data.custom_section_editable[3].style,
    playBtn: data.custom_section_editable[4].style,

    IconsPlayPause: data.custom_section_editable[5].style,
    videoData: data.data,
  }
  const ref = useRef(null)
  const [play, setPlay] = useState(null);
  const [selectedItem, setSelectedItem] = useState({})
  const vidRef = useRef([]);

  function playVid(key, item, type) {
    if (type === "lightbox") {
      ref.current.open()
      setSelectedItem(item)
    } else {
      vidRef.current[key].play();
      setPlay(key)
    }

  }
  console.log(data, "line no 400", data?.videoSetting);
  function pauseVid(key, item, type) {
    if (type === "lightbox") {
      ref.current.open()
      setSelectedItem(item)
    } else {
      vidRef.current[key].pause();
      setPlay(key - 1)
    }

  }
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };
  
  return (
    <MediaGallery sectionName={"ManagevideoGallery"} manageText={"Manage Video"} data={data} showAltText={false}>
      <VideoGalleryWrapper item={style.VideoGalleryWrapper} >
        <Slider {...data} onSlideChange={handleSlideChange}>
          {style.videoData?.map((value, key) => {
            return (
              <SwiperSlide key={key} >
                <VideoWrap item={style.VideoWrap} >
                  <Video
                    controls={videoSetting?.controls}
                    muted={videoSetting?.muted}
                    autoPlay=  { activeSlideIndex === key ? videoSetting?.autoPlay : false } 
                    loop={videoSetting?.loop}
                    item={style.Video}
                    ref={(e) => (vidRef.current[key] = e)}
                    key={`${JSON.stringify(value)}  ${JSON.stringify(activeSlideIndex)} `}
                    poster={value?.video?.videoPosterToggle ? value?.video?.poster : ""}
                    // key={JSON.stringify(activeSlideIndex)} 
                  >
                   
                    <source src={value.video.src} type="video/mp4" />
                  </Video>
                  <PlayImageWrap item={style.PlayImageWrap} className='PlayImageWrap'>
                    <Button onClick={() => play !== key ? playVid(key) : pauseVid(key)} style={style.playBtn} className="playBtn">
                      {play !== key ?
                        <PlayIcon
                          width={style.IconsPlayPause.desktop.width}
                          height={style.IconsPlayPause.desktop.height}
                          fill={style.IconsPlayPause.desktop.fill} />
                        :
                        <PauseIcon
                          width={style.IconsPlayPause.desktop.width}
                          height={style.IconsPlayPause.desktop.height}
                          fill={style.IconsPlayPause.desktop.fill} />
                      }
                    </Button>
                  </PlayImageWrap>
                </VideoWrap>
              </SwiperSlide>
            );
          })}
        </Slider>


      </VideoGalleryWrapper >
    </MediaGallery>
  );
};

export default VideoTheme1;
