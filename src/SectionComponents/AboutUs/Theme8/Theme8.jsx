import React from 'react'

import Image1 from '../../../Assets/SectionComponent/Images/OurTeam/aboutImg.png'
import styled from 'styled-components';
import Image from 'next/image';
// import { Container } from '../../../SectionCommon/Containers/Container.styled';
import AboutData from '../AboutData';
import { AboutHeading, AboutSectionTheme, AboutSectionThird, AboutText, AboutThirdTheme1Container, FirstPara, ImgContainerThird, ImgItem, ImgSection, MeetOurTeamText, NameThird, OurTeamText, PositionThird, SecondPara, SectionLt, SectionRt, WrapContainer } from './AboutTheme8.style';


const AboutTheme8 = () => {
    return (
        <AboutThirdTheme1Container>
            {/* <Container> */}
            <AboutSectionTheme>
                <SectionLt>
                    <AboutText>About us</AboutText>
                    <AboutHeading>What we’re Offering</AboutHeading>
                    <FirstPara>Started as a small plant nursery plant planet is now offering home delivery service of various plant varities in 35+ cities.</FirstPara><br />
                    <SecondPara>We work in the motto clean air with healthy plants. All the plants are grown with natural manure.</SecondPara><br />
                </SectionLt>
                <SectionRt>
                    <ImgSection>
                        <Image src={Image1} alt='img' />
                    </ImgSection>
                </SectionRt>
            </AboutSectionTheme>
            {/* </Container> */}

            {/* <Container className='container-xl'> */}
            <OurTeamText>Our Team</OurTeamText>
            <MeetOurTeamText>Meet Our Team</MeetOurTeamText>
            <WrapContainer>
                {AboutData.map((e) => {
                    return (

                        e.data1.map((e, index) => {
                            return (
                                <ImgItem key={index}>
                                    <ImgContainerThird>
                                        <Image src={e.img} alt="img" />
                                    </ImgContainerThird>
                                    <AboutSectionThird>
                                        <PositionThird>{e.position}</PositionThird>
                                        <NameThird>{e.name}</NameThird>
                                    </AboutSectionThird>
                                </ImgItem>
                            )
                        })

                    )
                })}

            </WrapContainer>

            {/* </Container> */}


        </AboutThirdTheme1Container>
    )
}

export default AboutTheme8
