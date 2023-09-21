import React from 'react'
import DefaultImage from "../../../Assets/SectionComponent/Images/OurTeam/default-bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamAlbumHeroHead, TeamAlbumHomeCard, TeamAlbumHomeCardOverlay, TeamAlbumHomeList, TeamHeroSection, ViewMoreButton, ViewMoreSection, ViewMoreSectionDivider, ViewProfileButton, ViewProfileButtonSection } from './OurTeamTheme15.style';
import Image from 'next/image';


const OurTeamTheme15 = () => {
    const settingsTeamHero = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
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
            <TeamHeroSection>
                <TeamAlbumHeroHead>

                    <h2>Our Doctors</h2>
                    <h3>Trusted Care</h3>
                </TeamAlbumHeroHead>
                <TeamAlbumHomeList>
                    <React.Fragment>
                        <Slider {...settingsTeamHero}>
                            <TeamAlbumHomeCard>
                                <Image src={DefaultImage} alt="" />
                                <TeamAlbumHomeCardOverlay>
                                    <h6 title="Dr. Davinder Sabherwal">Dr. Davinder Sabherwal</h6>
                                    <p title="Neurology">Neurology</p>
                                </TeamAlbumHomeCardOverlay>
                                <ViewProfileButtonSection>
                                    <ViewProfileButton>
                                        View Profile
                                    </ViewProfileButton>
                                </ViewProfileButtonSection>
                            </TeamAlbumHomeCard>
                            <TeamAlbumHomeCard>
                                <Image src={DefaultImage} alt="" />
                                <TeamAlbumHomeCardOverlay>
                                    <h6 title="Dr. Mrs. Savita Sabherwal">Dr. Mrs. Savita Sabherwal</h6>
                                    <p title="Neurology">Neurology</p>
                                </TeamAlbumHomeCardOverlay>
                                <ViewProfileButtonSection>
                                    <ViewProfileButton>
                                        View Profile
                                    </ViewProfileButton>
                                </ViewProfileButtonSection>
                            </TeamAlbumHomeCard>
                            <TeamAlbumHomeCard>
                                <Image src={DefaultImage} alt="" />
                                <TeamAlbumHomeCardOverlay>
                                    <h6 title="Dr. Vipender Sabherwal">Dr. Vipender Sabherwal</h6>
                                    <p title="Neurology">Neurology</p>
                                </TeamAlbumHomeCardOverlay>
                                <ViewProfileButtonSection>
                                    <ViewProfileButton>
                                        View Profile
                                    </ViewProfileButton>
                                </ViewProfileButtonSection>
                            </TeamAlbumHomeCard>
                        </Slider>
                    </React.Fragment>
                </TeamAlbumHomeList>
                <ViewMoreSection>
                    <ViewMoreSectionDivider></ViewMoreSectionDivider>
                    <ViewMoreButton onClick={""}>
                        View All
                    </ViewMoreButton>
                </ViewMoreSection>
            </TeamHeroSection>
        </React.Fragment>
    )
}

export default OurTeamTheme15