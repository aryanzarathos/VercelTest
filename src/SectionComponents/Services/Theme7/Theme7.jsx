import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import DefaultImage from "../../../Assets/SectionComponent/Images/Services/default-bg.jpg";
import { ServiceHomePage, ServiceHomePageHead, ServiceHomePageSection, ServicePageCaption, ServicePageGrid, ServicePageImage, ServicePageItem } from "./ServicesTheme7.style";
import Image from "next/image";

const ServiceTheme7 = () => {
    return (
        <React.Fragment>
            <ServiceHomePageSection>
                <ServiceHomePage>
                    <ServiceHomePageHead>
                        <h2>Our Services</h2>
                        <h3>bookservicesubhead</h3>
                    </ServiceHomePageHead>
                    <ServicePageGrid>
                        <React.Fragment>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Neuro Surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>X-ray</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Dialysis</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>


                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Neuro Surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>X-ray</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Dialysis</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                            <ServicePageItem>
                                <ServicePageImage>
                                    <Image src={DefaultImage} alt="Album" />
                                </ServicePageImage>
                                <ServicePageCaption>
                                    <h6>Laparoscopic surgery</h6>
                                </ServicePageCaption>
                            </ServicePageItem>
                        </React.Fragment>
                    </ServicePageGrid>
                </ServiceHomePage>
            </ServiceHomePageSection>
        </React.Fragment>
    )
}

export default ServiceTheme7