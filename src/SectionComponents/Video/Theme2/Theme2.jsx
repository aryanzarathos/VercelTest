import React from "react";
import videoIcon from "../../../Assets/SectionComponent/Images/Video/videoIcon.png";
import Image from "next/image";
import { MainSection, MainVideo, PlayImage } from "./VideoTheme2.style";


const VideoTheme2 = () => {
  // object data
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
    {
      id: 4,
      src: "./video_one.mp4",
      poster: "./poster4.png",
    },
    {
      id: 5,
      src: "./video_one.mp4",
      poster: "./poster5.png",
    },
    {
      id: 6,
      src: "./video_one.mp4",
      poster: "./poster6.png",
    },
    {
      id: 7,
      src: "./video_one.mp4",
      poster: "./poster7.png",
    },
    {
      id: 8,
      src: "./video_one.mp4",
      poster: "./poster5.png",
    },
  ];

  return (
    <>
      <MainSection>
        {VideoData?.map((value, key) => {
          return (
            <MainVideo key={key} className={"check"}>
              <video controls={false} poster={value.poster}>
                <source src={value?.src} type="video/mp4" />
              </video>
              <PlayImage className="btn">
                <Image
                  src={videoIcon}
                  alt="video_icon"
                  height={10}
                  width={10}
                />
              </PlayImage>
            </MainVideo>
          );
        })}
      </MainSection>
    </>
  );
};

export default VideoTheme2;
