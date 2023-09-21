import React from 'react'
import { Video } from "./videoStyled"
import ImageEditor from '@/CommonComponents/ImageEditor'

const VideoElement = ({ videoSrc, showPoster, style, poster, index, customVideo, videoSetting, ...rest }) => {





  return (
    <>
      {

        customVideo ?
          (
            <ImageEditor index={index}>
              <Video item={style} key={JSON.stringify(videoSetting)} src={videoSrc} poster={showPoster ? poster : ""} type="video/mp4" playsinline  {...videoSetting} >
                Your browser does not support the video format.
              </Video >
            </ImageEditor>
          ) :
          <Video item={style} src={videoSrc} poster={showPoster ? poster : ""} type="video/mp4" playsinline  {...videoSetting} >
            Your browser does not support the video format.
          </Video >
      }
    </>
  )
}

export default VideoElement