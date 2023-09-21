// import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "../../../Assets/SectionComponent/Images/Banner/banner-hero-tranquil.jpg";
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ImageViewer from '../../../CommonComponents/ImageViewer';
import { Banner, SliderImage } from './BannerTheme4.style';

const SliderTheme4 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data = [
        { img: BannerImage },
        { img: BannerImage },
        { img: BannerImage },
    ]
    return (
        <Banner>
            <Slider {...settings}>
                {
                    data ? (
                        data.length ?
                            data.map((item, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {
                                            windowSize.width <= 768 ? (

                                                <SliderImage itemProp={"440"} href={'#'}>
                                                    <ImageViewer
                                                        object={item.img}
                                                        defaultImage={BannerImage}
                                                    />
                                                </SliderImage>
                                            ) : (
                                                <SliderImage itemProp={"440"} href={'#'}>
                                                    <ImageViewer
                                                        object={item.img}
                                                        defaultImage={BannerImage}
                                                    />
                                                </SliderImage>
                                            )
                                        }

                                    </React.Fragment>
                                )
                            })
                            :
                            <React.Fragment>
                                <SliderImage itemProp={"440"} href="#">
                                    <ImageViewer
                                        defaultImage={BannerImage}
                                    />
                                </SliderImage>
                            </React.Fragment>) :
                        <React.Fragment>
                            <SliderImage itemProp={"440"} href="#">
                                <ImageViewer
                                    defaultImage={BannerImage}
                                />
                            </SliderImage>
                        </React.Fragment>
                }
            </Slider>

        </Banner>
    )
}

export default SliderTheme4