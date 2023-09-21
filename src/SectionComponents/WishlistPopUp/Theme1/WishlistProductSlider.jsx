import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
// Import Swiper styles

import image from "../../../Assets/images/img/caring.png";
// import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { ImgWraper, ProductListImg, ProductList, SwiperMainContainer } from './WishlistProductSlider.style'
import { dummyImg, dummyImgProduct } from "@/Constant/constants";

const WishlistProductSlider = ({ children, sliderData, sliderStyle, data }) => {
    //// console.log(sliderStyle, "line 15qqqq")
    const setting = {
        spaceBetween: sliderStyle.SliderSetting.Slider1.spaceBetween,
        navigation: sliderStyle.SliderSetting.Slider1.navigation,
        pagination: sliderStyle.SliderSetting.Slider1.pagination,
        thumbs: sliderStyle.SliderSetting.Slider1.thumbs,
        modules: sliderStyle.SliderSetting.Slider1.modules,
        className: sliderStyle.SliderSetting.Slider1.className,
    }

    const setting2 = {
        spaceBetween: sliderStyle.SliderSetting.Slider2.spaceBetween,
        slidesPerView: sliderStyle.SliderSetting.Slider2.slidesPerView,
        freeMode: sliderStyle.SliderSetting.Slider2.freeMode,
        watchSlidesProgress: sliderStyle.SliderSetting.Slider2.watchSlidesProgress,
        modules: sliderStyle.SliderSetting.Slider2.modules,
        className: sliderStyle.SliderSetting.Slider2.className,
    }
    // // console.log(sliderData, "line 31 vvvvv")
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let tempData = [
        {
            src: dummyImg
        }
    ]

    // console.log(setting,"sliderStyle.SliderSetting.Slider1")
    return (
        <>
            <SwiperMainContainer item1={sliderStyle.mySwiper2} item2={sliderStyle.swiperButton} item3={sliderStyle.swiperPagination} item4={sliderStyle.swiperPaginationBullet}>
                <Swiper
                    {...setting}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {
                        data && data.length ? data?.map((val, i) => {
                            return (
                                <>
                                    <SwiperSlide key={i}>
                                        <ImgWraper item={sliderStyle.ImgWraper} >
                                            <ImageElement src={val} alt={val.alt} style={sliderStyle.DataImgsStyleMain}  defaultImage={dummyImgProduct} />
                                        </ImgWraper>
                                    </SwiperSlide>

                                </>
                            )
                        }) : (
                            <>
                            
                                {tempData?.map((item, key) => {
                                    return(
                                        <>
                                        <SwiperSlide key={key}>
                                        <ImgWraper item={sliderStyle.ImgWraper} >
                                            <ImageElement src={item.src} alt={item.alt} style={sliderStyle.DataImgsStyleMain}  defaultImage={dummyImgProduct} />
                                        </ImgWraper>
                                    </SwiperSlide>
                                        </>
                                    )
                                    
                                })}
                            </>



                        )
                    }

                </Swiper>
                <Swiper
                    {...setting2}
                    onSwiper={setThumbsSwiper}
                >
                    {
                        data && data.length ? data?.map((val, i) => {
                            return (
                                <>
                                    <SwiperSlide key={i}>
                                        <ProductListImg item={sliderStyle.ProductListImg}>
                                            <ImageElement src={val} alt={val.alt} style={sliderStyle.DataImgsStyle} />
                                        </ProductListImg>
                                    </SwiperSlide>

                                </>
                            )
                        }) : (

                            <>
                                {tempData?.map((item, key) => {
                                    <SwiperSlide key={key}>
                                        <ImgWraper item={sliderStyle.ImgWraper} >
                                            <ImageElement src={item.src} alt={item.alt} style={sliderStyle.DataImgsStyleMain} />
                                        </ImgWraper>
                                    </SwiperSlide>
                                })}
                            </>

                        )
                    }
                </Swiper>
            </SwiperMainContainer>
        </>
    )
};

export default WishlistProductSlider;
