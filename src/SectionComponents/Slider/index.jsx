import React from 'react'
import BannerTheme1 from './Theme1'
import Theme2 from "../Banner/Theme2/Theme2"
import BannerTheme3 from './BannerTheme3'
// import BannerTheme4 from './Theme4/BannerTheme4'

const Banners = () => {
  return (
    <>
      <BannerTheme1 />
      <Theme2 />
      <BannerTheme3 />
      {/* <BannerTheme4 /> */}
    </>
  )
}

export default Banners