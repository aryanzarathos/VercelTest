import Image from 'next/image';
import React from 'react'
import data from '../Teamdata'
import { AboutSecond, HeaderText, ImgContainerSecond, Name, OurTeamImgContainerSecond, Position, TeamAboutSectionSecond, WrapContainer } from './OurTeamTheme10.style';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';


const OurTeamTheme10 = () => {
    return (
        <>
            <MediaGallery manageText={"Manage Team"} sectionName={"ManageTeam"} fieldName={"profileurl"} fieldIdLabel={"_id"} data={children}>

                <HeaderText>Meet Our Team</HeaderText>
                <WrapContainer>
                    {data.map((e, index) => {
                        return (
                            e.data1.map((e, index) => {
                                return (
                                    <OurTeamImgContainerSecond key={index}>
                                        <ImgContainerSecond>
                                            <Image src={e.img} alt="img" />
                                        </ImgContainerSecond>
                                        <TeamAboutSectionSecond>
                                            <Position>{e.position}</Position>
                                            <Name>{e.name}</Name>
                                            <AboutSecond>{e.about}</AboutSecond>
                                        </TeamAboutSectionSecond>
                                    </OurTeamImgContainerSecond>
                                )
                            })

                        )
                    })}

                </WrapContainer>
            </MediaGallery>
        </>
    )
}

export default OurTeamTheme10;