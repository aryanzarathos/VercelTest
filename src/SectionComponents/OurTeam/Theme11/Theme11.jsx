import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import data from '../Teamdata'
import { About, AboutSectionThird, ImgContainerThird, ImgItem, Line, MeetOurTeamText, NameThird, OurTeamText, PositionThird, Wrap, WrapContainer, WrapWhiteContainer } from './OurTeamTheme11.style';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';


const OurTeamTheme11 = () => {
    return (
        <>
            <MediaGallery manageText={"Manage Team"} sectionName={"ManageTeam"} fieldName={"profileurl"} fieldIdLabel={"_id"} data={children}>

                <OurTeamText>Our Team</OurTeamText>
                <MeetOurTeamText>Meet Our Team</MeetOurTeamText>
                <WrapContainer>
                    {data.map((e) => {
                        return (

                            e.data3.map((e, index) => {
                                return (
                                    <Wrap key={index}>
                                        <ImgItem>
                                            <ImgContainerThird>
                                                <Image src={e.img} alt="img" />
                                            </ImgContainerThird>
                                            <AboutSectionThird>
                                                <PositionThird>{e.position}</PositionThird>
                                                <NameThird>{e.name}</NameThird>
                                                <Line></Line>
                                                <About>{e.about}</About>
                                            </AboutSectionThird>
                                        </ImgItem>
                                    </Wrap>
                                )
                            })

                        )
                    })}

                    {data.map((e) => {
                        return (

                            e.data3.map((e, index) => {
                                return (
                                    <WrapWhiteContainer key={index}>
                                        <ImgItem>
                                            <ImgContainerThird>
                                                <Image src={e.img} alt="img" />
                                            </ImgContainerThird>
                                            <AboutSectionThird>
                                                <PositionThird>{e.position}</PositionThird>
                                                <NameThird>{e.name}</NameThird>
                                                <Line></Line>
                                                <About>{e.about}</About>
                                            </AboutSectionThird>
                                        </ImgItem>
                                    </WrapWhiteContainer>
                                )
                            })

                        )
                    })}
                    {data.map((e) => {
                        return (

                            e.data3.map((e, index) => {
                                return (
                                    <Wrap key={index}>
                                        <ImgItem>
                                            <ImgContainerThird>
                                                <Image src={e.img} alt="img" />
                                            </ImgContainerThird>
                                            <AboutSectionThird>
                                                <PositionThird>{e.position}</PositionThird>
                                                <NameThird>{e.name}</NameThird>
                                                <Line></Line>
                                                <About>{e.about}</About>
                                            </AboutSectionThird>
                                        </ImgItem>
                                    </Wrap>
                                )
                            })

                        )
                    })}

                </WrapContainer>
            </MediaGallery>
        </>
    )
}

export default OurTeamTheme11