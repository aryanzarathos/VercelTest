import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import image9 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1347.png'
import image10 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1348.png'
import image11 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1349.png'
import image12 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1350.png'
import { AboutSectionThird, ImageSectionThird, ImgContainerThird, NameThird, OurTeamContainerThird, PositionThird } from './OurTeamTheme4.style';



const OurTeamTheme4 = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        centerPadding: 10,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <OurTeamContainerThird>

                <ImageSectionThird>
                    <ImgContainerThird>
                        <Image src={image9} alt="img" />
                    </ImgContainerThird>
                    <AboutSectionThird>
                        <PositionThird>Tech. Lead</PositionThird>
                        <NameThird>James Andertion</NameThird>
                    </AboutSectionThird>
                </ImageSectionThird>

                <ImageSectionThird>
                    <ImgContainerThird>
                        <Image src={image10} alt="img" />
                    </ImgContainerThird>
                    <AboutSectionThird>
                        <PositionThird>Tech. Lead</PositionThird>
                        <NameThird>James Andertion</NameThird>
                    </AboutSectionThird>
                </ImageSectionThird>

                <ImageSectionThird>
                    <ImgContainerThird>
                        <Image src={image11} alt="img" />
                    </ImgContainerThird>
                    <AboutSectionThird>
                        <PositionThird>Tech. Lead</PositionThird>
                        <NameThird>James Andertion</NameThird>
                    </AboutSectionThird>
                </ImageSectionThird>

                <ImageSectionThird>
                    <ImgContainerThird>
                        <Image src={image12} alt="img" />
                    </ImgContainerThird>
                    <AboutSectionThird>
                        <PositionThird>Tech. Lead</PositionThird>
                        <NameThird>James Andertion</NameThird>
                    </AboutSectionThird>
                </ImageSectionThird>

        </OurTeamContainerThird>

    )
}

export default OurTeamTheme4;