import React, { useRef } from "react";
import PlayIcon from "../../../Assets/SectionComponent/Images/Video/play.svg";
import PauseIcon from "../../../Assets/SectionComponent/Images/Video/pause.svg";
import { VideoGalleryWrapper, VideoWrap, Video, PlayImageWrap, CardWrap, CardBottom, CardWrapper } from "./VideoTheme7.style";
import { SwiperSlide } from "swiper/react";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import Slider from "../../../SectionCommon/Slider/Slider";
import { useState } from "react";
import MediaGallery from "../../../CommonComponents/MediaGalleryEditor";
import Text from "@/SectionsLayout/Elements/TextElement/Text";

const VideoTheme7 = ({ children }) => {
    const data = children;
    const style = {
        VideoGalleryWrapper: data.custom_section_editable[0].style,
        VideoWrap: data.custom_section_editable[1].style,
        Video: data.custom_section_editable[2].style,
        PlayImageWrap: data.custom_section_editable[3].style,
        playBtn: data.custom_section_editable[4].style,
        IconsPlayPause: data.custom_section_editable[5].style,
        CardBottomwrap: data.custom_section_editable[6].style,
        HeadingPara: data.custom_section_editable[7].style,
        Desc: data.custom_section_editable[8].style,
        CardWrapper: data.custom_section_editable[9].style,
        videoData: data.data,
        ObjectView: data?.style?.desktop?.objectView,
        gridCount: data.style,

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

    function pauseVid(key, item, type) {
        if (type === "lightbox") {
            ref.current.open()
            setSelectedItem(item)
        } else {
            vidRef.current[key].pause();
            setPlay(key - 1)
        }

    }

    return (
        <MediaGallery sectionName={"ManagevideoGallery"} manageText={"Manage Video"} data={data} showAltText={false} >
            <VideoGalleryWrapper item={style.VideoGalleryWrapper} >
                {style?.ObjectView.toLowerCase() === "grid".toLowerCase() ?
                    <CardWrapper item={style.CardWrapper} gridCount={style.gridCount}>
                        {style.videoData?.map((value, key) => {
                            return (
                                <CardWrap key={key}>
                                    <VideoWrap item={style.VideoWrap}>
                                        <Video
                                            controls={false}
                                            muted
                                            item={style.Video}
                                            ref={(e) => (vidRef.current[key] = e)}
                                            alt={value.video.alt}
                                            key={JSON.stringify(value)}
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
                                    <CardBottom item={style.CardBottomwrap}>
                                        <Text style={style.HeadingPara}>{value.tittle}</Text>
                                        <Text style={style.Desc}>{value.desc}</Text>
                                    </CardBottom>
                                </CardWrap>
                            );
                        })}
                    </CardWrapper> :
                    <Slider {...data}>
                        {style.videoData?.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <CardWrap>
                                        <VideoWrap item={style.VideoWrap}>
                                            <Video
                                                controls={false}
                                                muted
                                                item={style.Video}
                                                ref={(e) => (vidRef.current[key] = e)}
                                                alt={value.video.alt}
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
                                        <CardBottom item={style.CardBottomwrap}>
                                            <Text style={style.HeadingPara}>{value.tittle}</Text>
                                            <Text style={style.Desc}>{value.desc}</Text>
                                        </CardBottom>
                                    </CardWrap>
                                </SwiperSlide>
                            );
                        })}
                    </Slider>
                }
            </VideoGalleryWrapper>
        </MediaGallery>
    );
};

export default VideoTheme7;
