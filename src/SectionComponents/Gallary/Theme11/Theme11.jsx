import React from 'react';
import DefaultImage from "../../../Assets/SectionComponent/Images/Gallery/Sneakpeak.png";
import { GalleryHomeHeroSection, SneekPeakHomeHero, SneekPeakHomeHeroAlbum, SneekPeakHomeHeroHead, SneekPeakSliderImage, ViewMoreButtonSection, ViewMoreSneekPeakButton } from './GallaryTheme11.style';
import Image from 'next/image';


const GallaryTheme11 = () => {

    return (
        <React.Fragment>
            <GalleryHomeHeroSection>
                <SneekPeakHomeHero>
                    <SneekPeakHomeHeroHead>
                        <h2>Sneak Peak</h2>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, libero.</h3>

                    </SneekPeakHomeHeroHead>
                    <SneekPeakHomeHeroAlbum>

                        <SneekPeakSliderImage>
                            <Image src={DefaultImage} alt="Album" />
                        </SneekPeakSliderImage>

                    </SneekPeakHomeHeroAlbum>
                    <ViewMoreButtonSection>
                        <ViewMoreSneekPeakButton>
                            View More
                        </ViewMoreSneekPeakButton>
                    </ViewMoreButtonSection>
                </SneekPeakHomeHero>
            </GalleryHomeHeroSection>
        </React.Fragment>
    )
}

export default GallaryTheme11