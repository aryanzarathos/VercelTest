import React, { useEffect, useRef } from 'react'
import useWindowDimensions from "../../CustomHooks/useWindowDimension";
import { Video } from "./SectionVideoBannerStyle"

const SectionVideoBanner = ({ videoSection }) => {
  // get current window size
  const { width } = useWindowDimensions();

  let videoDesktop = videoSection.desktop.video;
  let videoTablet = videoSection.tablet.video;
  let videoMobile = videoSection.mobile.video;


  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Check if the browser allows autoplay with sound
      const playPromise = video.play();

      // Handle promise according to browser policies
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            // console.log("Autoplay started");
          })
          .catch((error) => {
            // Autoplay failed
            // console.error("Autoplay failed:", error);
          });
      }
    }
  }, []);


  // const bannerVideo = useRef(null)
  // useEffect(()=>{
  //   bannerVideo.current.muted = false

  // },[])



  // useEffect(()=>{
     
  // let video = document.getElementById("myVideo");
  // video.muted = false
  //   video.play();
  
  //   console.log("video is playing ")
  // },[])

  // const onloadFunction = ()=> {
  //   console.log("this is onload Function")
  // }



  return (
    <>
      {
        videoDesktop?.url != null &&
        <>
           
        <Video ref={videoRef} id='myVideo'    item={videoSection}  autoPlay={true} muted={videoDesktop.mute} loop={videoDesktop.loop} src={videoDesktop.url} type="video/mp4" >
        </Video>
        </>
     
      }

      {
        width < 1024 && videoTablet?.url != null &&
        <>
           
         <Video id='myVideo'    item={videoSection} autoPlay={true} muted={videoTablet.mute} loop={videoTablet.loop} src={videoTablet.url} type="video/mp4">
        </Video>
        </>
      
      }

      {
        width < 768 && videoMobile?.url != null &&
         <>
                            
          <Video id='myVideo'    item={videoSection} autoPlay={videoMobile.autoPlay} muted={videoMobile.mute} loop={videoMobile.loop} src={videoMobile.url} type="video/mp4">
        </Video>
        </>
      }
        
       
    </>
  )
}

export default SectionVideoBanner