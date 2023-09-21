import Image from 'next/image';
import React from 'react'
import data from '../Teamdata'
import { About, Headertext, ImageContainerEight, ImageSection, ImageSectionEight, NameEight, PositionEight, SubHeading } from './OurTeamTheme1.style';



const OurTeamTheme3 = () => {
    return (
        <>
            <Headertext>Our <span> Team</span></Headertext>
            <SubHeading>Subheading </SubHeading>
            <ImageSection>
                {data.map((e) => {
                    return (
                        e.data2.map((e, index) => {
                            return (
                                <ImageSectionEight key={index}>
                                    <ImageContainerEight>
                                        <Image src={e.img} alt="" />
                                    </ImageContainerEight>
                                    <NameEight>{e.name}</NameEight>
                                    <PositionEight>{e.position}</PositionEight>
                                    <About>{e.about}</About>
                                </ImageSectionEight>
                            )
                        })
                    )
                })}

            </ImageSection>
        </>
    )
}

export default OurTeamTheme3