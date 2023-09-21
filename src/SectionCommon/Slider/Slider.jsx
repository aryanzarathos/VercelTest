import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Grid } from "swiper";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import { MainSwiper, NextBtn, PrevBtn } from "./Slider.style";



export default function Slider({ children, data, sliderSetting, className, onSlideChange }) {
    const setting = {
        modules: [Grid, Navigation, EffectFade, Pagination, Autoplay],
        spaceBetween: sliderSetting?.spaceBetween,
        className: sliderSetting?.className,
        slidesPerView: sliderSetting?.slidesPerView,
        centeredSlides: sliderSetting?.centeredSlides,
        speed: sliderSetting.speed,
        cssMode: true,
        // loop: sliderSetting?.loop,

        autoplay: sliderSetting?.autoPlay ? { disableOnInteraction: false, stopOnLastSlide: !(sliderSetting?.loop), delay: sliderSetting.autoPlaySpeed, pauseOnMouseEnter: sliderSetting.pauseOnHover } : false,
        grid: {
            rows: sliderSetting?.rows,
            fill: "row",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: sliderSetting?.dots ? { clickable: sliderSetting?.pagination?.clickable } : false,
        breakpoints: {
            600: {
                slidesPerView: sliderSetting?.breakpoints?.mobile?.slidesPerView,
            },
            769: {
                slidesPerView: sliderSetting?.breakpoints?.tablet?.slidesPerView,
            },
            1025: {
                slidesPerView: sliderSetting?.breakpoints?.desktop.slidesPerView,
            }
        }
    }

    return (
        <>
            <MainSwiper className={className} key={JSON.stringify(setting)} item={sliderSetting}>
                <Swiper {...setting} onSlideChange={onSlideChange}>
                    {children}
                </Swiper>
                {
                    sliderSetting?.arrows ?
                        <>
                            <PrevBtn item={sliderSetting?.customNavigation} color={sliderSetting.arrowColor} className="swiper-button-prev"></PrevBtn>
                            <NextBtn item={sliderSetting?.customNavigation} color={sliderSetting.arrowColor} className="swiper-button-next"></NextBtn>
                        </>
                        : ""
                }
            </MainSwiper>
        </>
    );
}
