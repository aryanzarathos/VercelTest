import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComputerFacilities1 from "../../../Assets/SectionComponent/Images/Facilities/School_facilities.png";
import Image from "next/image";
import { FacilitiesHomeHero, FacilitiesHomeHeroHead, FacilitiesHomeHeroSlide, FacilitiesSliderDescription, FacilitiesSliderImage, FacilitiesSliderItem, FacilityHeading, GalleryHomeHeroSection, ViewMoreButtonSection, ViewMoreFacilitiesButton } from "./FacilitiesTheme4.style";

const FacilitiesTheme4 = () => {
    const settingsFacilitiesHomeHeroSlide = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <GalleryHomeHeroSection>
            <FacilitiesHomeHero>
                <FacilitiesHomeHeroHead>
                    <h2>School’s Facilities</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, reprehenderit?</h3>
                </FacilitiesHomeHeroHead>
                <FacilitiesHomeHeroSlide>

                    <>
                        <Slider {...settingsFacilitiesHomeHeroSlide}>
                            <FacilitiesSliderItem>
                                <FacilitiesSliderImage>
                                    <Image src={ComputerFacilities1} alt="" />
                                </FacilitiesSliderImage>
                                <FacilitiesSliderDescription>
                                    <FacilityHeading>
                                        <h4>Computer Laboratory</h4>
                                    </FacilityHeading>
                                    <ul>
                                        <li>Computer Education is compulsory for classes from Std. I to X.</li>
                                        <li>
                                            A fully-fledged computer laboratory has been established with a sufficient number of computer sets and able teachers run the computer classes efficiently.
                                        </li>
                                        <li>
                                            Computer education keeping pace with the latest trends in information technology is provided compulsorily to all the students well-equipped computer centers with latest machine and software are the most resource houses.
                                        </li>
                                    </ul>
                                </FacilitiesSliderDescription >
                            </FacilitiesSliderItem>
                            <FacilitiesSliderItem>
                                <FacilitiesSliderImage>
                                    <Image src={ComputerFacilities1} alt="" />
                                </FacilitiesSliderImage>
                                <FacilitiesSliderDescription>
                                    <FacilityHeading>
                                        <h4>Computer Laboratory</h4>
                                    </FacilityHeading>
                                    <ul>
                                        <li>Computer Education is compulsory for classes from Std. I to X.</li>
                                        <li>
                                            A fully-fledged computer laboratory has been established with a sufficient number of computer sets and able teachers run the computer classes efficiently.
                                        </li>
                                        <li>
                                            Computer education keeping pace with the latest trends in information technology is provided compulsorily to all the students well-equipped computer centers with latest machine and software are the most resource houses.
                                        </li>
                                    </ul>
                                </FacilitiesSliderDescription >
                            </FacilitiesSliderItem>
                        </Slider>
                    </>

                </FacilitiesHomeHeroSlide >
                <ViewMoreButtonSection>
                    <ViewMoreFacilitiesButton onClick={""}>
                        View More
                    </ViewMoreFacilitiesButton>
                </ViewMoreButtonSection>
            </FacilitiesHomeHero >
        </GalleryHomeHeroSection >
    );
};

export default FacilitiesTheme4;
