import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import DefaultImage from "../../../Assets/SectionComponent/Images/Services/default-bg.jpg";
import { ServiceHeroCaption, ServiceHeroGrid, ServiceHeroImage, ServiceHeroItem, ServiceHomeHero, ServiceHomeHeroHead, ServiceHomeHeroSection, ViewMoreButton, ViewMoreSection, ViewMoreSectionDivider } from "./ServicsTheme6.style";
import Image from "next/image";

const ServiceTheme6 = () => {

    const settingsServiceHero = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <React.Fragment>
            <ServiceHomeHeroSection>
                <ServiceHomeHero>
                    <ServiceHomeHeroHead>
                        <h2>Our Services</h2>
                        <h3>bookservicesubhead</h3>
                    </ServiceHomeHeroHead>

                    <ServiceHeroGrid>
                        <Slider {...settingsServiceHero}>
                            <ServiceHeroItem>
                                <ServiceHeroImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServiceHeroImage>
                                <ServiceHeroCaption>
                                    <h6>Neuro Surgery</h6>
                                </ServiceHeroCaption>
                            </ServiceHeroItem>
                            <ServiceHeroItem>
                                <ServiceHeroImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServiceHeroImage>
                                <ServiceHeroCaption>
                                    <h6>X-ray</h6>
                                </ServiceHeroCaption>
                            </ServiceHeroItem>
                            <ServiceHeroItem>
                                <ServiceHeroImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServiceHeroImage>
                                <ServiceHeroCaption>
                                    <h6>Dialysis</h6>
                                </ServiceHeroCaption>
                            </ServiceHeroItem>
                            <ServiceHeroItem>
                                <ServiceHeroImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServiceHeroImage>
                                <ServiceHeroCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServiceHeroCaption>
                            </ServiceHeroItem>
                            <ServiceHeroItem>
                                <ServiceHeroImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServiceHeroImage>
                                <ServiceHeroCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServiceHeroCaption>
                            </ServiceHeroItem>
                        </Slider>
                    </ServiceHeroGrid>

                    <ViewMoreSection>
                        <ViewMoreSectionDivider></ViewMoreSectionDivider>
                        <ViewMoreButton onClick={""}>
                            View All
                        </ViewMoreButton>
                    </ViewMoreSection>
                </ServiceHomeHero>
            </ServiceHomeHeroSection>

        </React.Fragment>
    )
}

export default ServiceTheme6