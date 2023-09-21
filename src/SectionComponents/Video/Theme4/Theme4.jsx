import React, { useEffect, useRef, useState } from "react";
import videoIcon from "../../../Assets/SectionComponent/Images/Video/videoIcon.png";
import Image from "next/image";
import { MainContent, MainSection, MainVideo, PlayImage } from "./VideoTheme4.style";


const VideoData = [
  {
    id: 1,
    src: "./video_one.mp4",
    poster: "./poster1.png",
  },
  {
    id: 2,
    src: "./video_one.mp4",
    poster: "./poster2.png",
  },
  {
    id: 3,
    src: "./video_one.mp4",
    poster: "./poster3.png",
  },
];

const VideoTheme4 = (props) => {
  const vidRef = useRef([]);
  const [show, setShow] = useState(-1);
  const [control, setControl] = useState(-1);
  const handlePlayVideo = (key) => {
    vidRef.current[key].play();
    setControl(key);
    setShow(key);
  };

  return (
    <>
      <MainSection>
        {VideoData?.map((value, key) => {
          return (
            <>
              <MainContent key={value?.id} className={show ? "" : "overlay"}>
                <MainVideo className={"check"}>
                  <video
                    controls={control === key ? true : false}
                    poster={value.poster}
                    ref={(el) => (vidRef.current[key] = el)}
                  //   ref={vidRef[value.id]}
                  >
                    <source src={value?.src} type="video/mp4" />
                  </video>
                  {show !== key ? (
                    <PlayImage
                      className="btn"
                      onClick={() => handlePlayVideo(key)}
                    >
                      <Image
                        src={videoIcon}
                        alt="video_icon"
                        height={10}
                        width={10}
                      />
                    </PlayImage>
                  ) : null}
                </MainVideo>
                <h2>Your Video Title</h2>
                <p>
                  This is description of this video it is a two it is a two
                  line description
                </p>
              </MainContent>
            </>
          );
        })}
      </MainSection>
    </>
  );
};

export default VideoTheme4;
