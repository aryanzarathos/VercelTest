import React, { useRef } from "react";
import PlayIcon from "../../../Assets/SectionComponent/Images/Video/play.svg";
import PauseIcon from "../../../Assets/SectionComponent/Images/Video/pause.svg";
import { VideoGalleryWrapper, VideoWrap, Video, PlayImageWrap } from "./VideoTheme6.style";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import { useState } from "react";
import MediaGallery from "../../../CommonComponents/MediaGalleryEditor";

const VideoTheme6 = ({ children }) => {
    const data = children;
    const style = {
        VideoGalleryWrapper: data.custom_section_editable[0].style,
        VideoWrap: data.custom_section_editable[1].style,
        Video: data.custom_section_editable[2],
        PlayImageWrap: data.custom_section_editable[3].style,
        playBtn: data.custom_section_editable[4].style,
        IconsPlayPause: data.custom_section_editable[5].style,
        videoData: data.data,
    }
    const videoData = data?.data;
    const ref = useRef(null)
    const [play, setPlay] = useState(null);
    const [selectedItem, setSelectedItem] = useState({})
    const vidRef = useRef([]);

    function playVid(type) {
        if (type === "lightbox") {
            ref.current.open()
            setSelectedItem(true)
        } else {
            vidRef.current.play();
            setPlay(!play)
        }

    }

    function pauseVid(type) {
        if (type === "lightbox") {
            ref.current.open()
            setSelectedItem(true)
        } else {
            vidRef.current.pause();
            setPlay(!play)
        }

    }



    return (
        <MediaGallery sectionName={"ManagevideoGallery"} manageText={"Manage Video"} data={data} showAltText={false}
            showOnlyTab={"Video Setting"} showSelectedData={1} >
            <VideoGalleryWrapper item={style.VideoGalleryWrapper} >
                <VideoWrap item={style.VideoWrap}>
                    <Video
                        controls={false}
                        muted
                        item={style.Video.style}
                        ref={vidRef}
                        key={JSON.stringify(videoData)}
                    >
                        <source src={videoData[0]?.src} type="video/mp4" />
                    </Video>
                    <PlayImageWrap item={style.PlayImageWrap} className='PlayImageWrap'>
                        <Button onClick={() => !play ? playVid() : pauseVid()} style={style.playBtn} className="playBtn">
                            {!play ?
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
            </VideoGalleryWrapper>
        </MediaGallery>
    );
};

export default VideoTheme6;
