import React, { useRef } from 'react';

import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import { BannerMainContainer, ImgWraper, Opacity, ContentWrapper } from './Theme2.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';

import { useState } from "react";

import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION } from '@/store/reducers/SiteEditor';
import { isBrowser } from '@/CommonFunctions/isBrowser';



// import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




const SliderTheme2 = ({ children }) => {
  const dispatch = useDispatch();
  const data = children.data;
  const staticStyle = children.custom_section_editable;
  const shadowHostRef = useRef(null);
  const sliderSeting = children.sliderSetting

  // get image style of slider
  const imagestyle = children.sliderSetting.Silderheight;
  // get video style of slider
  const videostyle = children.sliderVideoStyle;
  const [count, setCount] = useState(1)




  // slider setting
  let setting = {
    spaceBetween: 0,
    centeredSlides: true,
    speed: sliderSeting?.speed,
    slidesPerView: 1,
    autoplay: sliderSeting.autoPlay ? {
      disableOnInteraction: false,
      stopOnLastSlide: !(sliderSeting?.loop),
      delay: sliderSeting?.autoPlaySpeed,
      pauseOnMouseEnter: sliderSeting?.pauseOnHover,
    }
      : false,
    pagination: sliderSeting?.dots ? { clickable: true } : false,
    navigation: sliderSeting?.arrows,
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    effect: sliderSeting?.effect,
    cssMode: true,
  };



  // useEffect(() => {
  //   setSetting(setting)
  // }, []);



  // swiper element
  // useEffect(() => {
  //   const swiperEl =  shadowHostRef.current;

  //    if(swiperEl) Object.assign(swiperEl, setting);

  //   // and now initialize it
  //    if(swiperEl) swiperEl.initialize();

  // }, [])



  // const sliderChangeValue = () => {

  //   setting = {
  //     ...setting,
  //     autoplay: {
  //       disableOnInteraction: false,
  //       stopOnLastSlide: !(sliderSeting?.loop),
  //       delay: sliderSeting?.autoPlaySpeed,
  //       pauseOnMouseEnter: true,
  //     }
  //   }


  //   console.log("settingsssss",setting)
  // };

  // const pauseSlider = () => {
  //    setting= {
  //     ...setting,
  //       autoPlay: false
  //     }
  //     console.log("setting",setting)
  // };

  // 
  const currentSlideClicked = useSelector((state) => (state.editor.selectedIndexAndId.sliderValues.currentIndex));

  // useEffect(() => {
  //   dispatch(SELECT_OPTION({
  //     sliderValues: {
  //       isAutoplay: setting
  //     }
  //   }))
  // }, [dispatch])


  const pauseOnOver = () => {
    setting = {
      ...setting,
      autoplay: false
    }



  }


  const pauseResume = () => {
    setting = {
      ...setting,
      autoplay: {
        disableOnInteraction: false,
        stopOnLastSlide: !(sliderSeting?.loop),
        delay: sliderSeting?.autoPlaySpeed,
        pauseOnMouseEnter: true,
      }
    }

  }










  // get the shadow dosts and changes dots color
  // useEffect(() => {
  //   if (sliderSeting?.dots) {

  //     const shadowHost = shadowHostRef.current;
  //     if (shadowHost && shadowHost.shadowRoot) {
  //       const shadowElement = shadowHost.shadowRoot.querySelector('.swiper-pagination-bullet');

  //       if (shadowElement) {
  //         let style =  document.createElement('style');
  //         style.innerHTML = `.swiper-pagination-bullet { background: ${sliderSeting.dotsColor};width:10px; height:10px }`;
  //         shadowElement.appendChild(style)
  //       }
  //     }
  //   }

  // }, [sliderSeting?.dots, sliderSeting.dotsColor])

  // to to specfic index of slide when cliked on editor 
  useEffect(() => {
    // const swiperEl =  document.querySelector('swiper-container').shadowRoot;
    const shadowHost = shadowHostRef.current;
    if (shadowHost) shadowHost.swiper.slideTo(currentSlideClicked);
  }, [currentSlideClicked])




  return (

    <BannerMainContainer item={staticStyle[0].style} sliderStyle={sliderSeting} key={JSON.stringify(setting)}  >
      <Swiper ref={shadowHostRef} {...setting} key={JSON.stringify(setting)} >
        {
          data.length ? data?.map((object, key) => {
            return (
              <SwiperSlide key={object.id}>
                <ImgWraper item={staticStyle[1].style} backgroundColor={object?.background_color} imgHeight={imagestyle}   >

                  {

                    object.type === "image" ? (
                      <>

                        <>
                          <ImageElement
                            src={object.url}
                            alt={object.alt}

                            style={children.sliderImageStyle}
                          />
                          <Opacity item={staticStyle[7].style} opacityValue={object?.opacity} verticalAlign={object.alignItems} >
                            <ContentWrapper style={staticStyle[3].style}>
                              {
                                object.showHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"headingStyle"} tagType={object.headingStyle.tagType} DataCheck={object.headingStyle} style={object.headingStyle.style} text={object.heading} />
                              }
                              {
                                object.showSubHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"subHeadingStyle"} tagType={object.subHeadingStyle.tagType} DataCheck={object.subHeadingStyle} style={object.subHeadingStyle.style} text={object.subHeading} />

                              }
                              {
                                object.showButton &&
                                <Button style={object.buttonStyle.style} text={object.buttonStyle.text} customButton={true} sectionType='static' index={object?._id} sliderKey={key} />

                              }


                            </ContentWrapper>
                          </ Opacity>
                        </>
                      </>
                    )
                      : object.type === "video" ? (
                        <>
                          <video src={object?.url} styleElement={staticStyle[1].style} muted={videostyle?.desktop?.muted} autoPlay={videostyle?.desktop?.autoplay} loop={videostyle?.desktop?.loop} />
                          <Opacity item={staticStyle[7].style} opacityValue={object?.opacity} verticalAlign={object.alignItems}>
                            <ContentWrapper style={staticStyle[3].style} >
                              {
                                object.showHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"headingStyle"} tagType={object?.headingStyle?.tagType} DataCheck={object.headingStyle} style={object?.headingStyle?.style} text={object.heading} />}
                              {
                                object.showSubHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"subHeadingStyle"} tagType={object?.subHeadingStyle?.tagType} DataCheck={object.subHeadingStyle} style={object.subHeadingStyle?.style} text={object.subHeading} />}
                              {
                                object.showButton &&
                                <Button style={object?.buttonStyle?.style} text={object?.buttonStyle?.text} customButton={true} sectionType='static' index={object?._id} sliderKey={key} />}


                            </ContentWrapper>
                          </Opacity>


                        </>
                      ) : (
                        <>
                          <Opacity item={staticStyle[7].style} opacityValue={object?.opacity} verticalAlign={object.alignItems}>
                            <ContentWrapper style={staticStyle[3].style} >
                              {
                                object.showHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"headingStyle"} tagType={object?.headingStyle?.tagType} DataCheck={object.headingStyle} style={object?.headingStyle?.style} text={object.heading} />}
                              {
                                object.showSubHeading &&
                                <Text CustomText={true} index={key} sliderId={object._id} sliderKey={key} slider={true} ContextChange={"subHeadingStyle"} tagType={object?.subHeadingStyle?.tagType} DataCheck={object.subHeadingStyle} style={object.subHeadingStyle?.style} text={object.subHeading} />}
                              {
                                object.showButton &&
                                <Button style={object?.buttonStyle?.style} text={object?.buttonStyle?.text} customButton={true} sectionType='static' index={object?._id} sliderKey={key} />}


                            </ContentWrapper>
                          </Opacity>


                        </>
                      )
                  }

                </ImgWraper>
              </SwiperSlide>
            )
          }) : ""
        }
      </Swiper>

    </BannerMainContainer >
  )
}

export default SliderTheme2