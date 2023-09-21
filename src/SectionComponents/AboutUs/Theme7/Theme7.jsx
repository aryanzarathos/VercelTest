import React from 'react'

// import { Container } from '../../../SectionCommon/Containers/Container.styled';
//Bottom images
import bottomPic1 from "../../../Assets/SectionComponent/Images/AboutUs/Theme7/aboutUsBottom1.png"
import bottomPic2 from "../../../Assets/SectionComponent/Images/AboutUs/Theme7/aboutUsBottom2.png"
import bottomPic3 from "../../../Assets/SectionComponent/Images/AboutUs/Theme7/aboutUsBottom3.png"
import bottomPic4 from "../../../Assets/SectionComponent/Images/AboutUs/Theme7/aboutUsBottom4.png"
import midImg from "../../../Assets/SectionComponent/Images/AboutUs/Theme7/aboutusMidImg.png"        //Mid Onces
import Image from 'next/image';
import { AboutUsImg, AboutUsMidContainer, AboutUsMidContent, AboutUsMidHeading, AboutUsTopContainer, AboutUsTopContent, AboutUsTopHeading, AboutUsUpperContainer, BottomImgContainer, BottomImgContent, BottomImgHeading, BottomSubContainer, BottomSubLeftContainer, BottomSubLeftHeading, HeadingVerticleLine, MidContent, VerticleLine } from './AboutTheme7.style'

const AboutTheme7 = () => {
    return (
        <>
            <AboutUsUpperContainer>
                {/* <Container> */}
                <AboutUsTopContainer>
                    <AboutUsTopHeading >About Eblouissante</AboutUsTopHeading>
                    <VerticleLine></VerticleLine>
                    <AboutUsTopContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.
                        Duis aute irure dolor in reprehenderit.
                    </AboutUsTopContent>
                </AboutUsTopContainer>
                <AboutUsImg>
                    <Image src={midImg} alt='img' />
                </AboutUsImg>
                <AboutUsMidContainer>
                    <MidContent>
                        <AboutUsMidHeading>
                            <HeadingVerticleLine />
                            <h3>Our Mission</h3>
                        </AboutUsMidHeading>
                        <AboutUsMidContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.
                            Duis aute irure dolor in reprehenderit.
                        </AboutUsMidContent>
                    </MidContent>
                    <MidContent>
                        <AboutUsMidHeading>
                            <HeadingVerticleLine />
                            <h3>Our Vision</h3>
                        </AboutUsMidHeading>
                        <AboutUsMidContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.
                            Duis aute irure dolor in reprehenderit.
                        </AboutUsMidContent>
                    </MidContent>
                </AboutUsMidContainer>
                {/* </Container> */}
            </AboutUsUpperContainer>
            {/* <Container> */}
            <div className="aboutUs-bottom-container">
                <BottomSubContainer>
                    <BottomSubLeftContainer>
                        <BottomSubLeftHeading>Let’s <br /> Meet Our Team</BottomSubLeftHeading>
                        {/* <hr/> */}
                    </BottomSubLeftContainer>
                    <div className="bottom-sub-right-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </BottomSubContainer>
                <BottomImgContainer>
                    <div className='images'>
                        <Image src={bottomPic1} alt="Img" />
                        <BottomImgHeading>David Johnson</BottomImgHeading>
                        <BottomImgContent>CEO</BottomImgContent>
                    </div>
                    <div className='images'>
                        <Image src={bottomPic2} alt="img" />
                        <BottomImgHeading>Peter Dek</BottomImgHeading>
                        <BottomImgContent>Co-Founder</BottomImgContent>
                    </div>
                    <div className='images'>
                        <Image src={bottomPic3} alt="img" />
                        <BottomImgHeading>Sonu Malhotra</BottomImgHeading>
                        <BottomImgContent>Chief Technical Officer</BottomImgContent>
                    </div>
                    <div className='images'>
                        <Image src={bottomPic4} alt="img" />
                        <BottomImgHeading>Ileana Jones</BottomImgHeading>
                        <BottomImgContent>Marketing Head</BottomImgContent>
                    </div>
                </BottomImgContainer>
            </div>
            {/* </Container> */}
        </>

    )
}

export default AboutTheme7