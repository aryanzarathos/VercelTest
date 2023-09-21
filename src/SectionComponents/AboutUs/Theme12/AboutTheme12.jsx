import React from 'react'
import Image from 'next/image';
import MessageDeskDummyProfile from "../../../Assets/SectionComponent/Images/AboutUs/Principal.png";
import { MessageDeskSection, MessageDeskSectionHead, MessageDeskGrid, MessageWrapper, MessageDeskGridLeft, MessageDeskProfileImage, MessageDeskGridRight } from './styles'

const AboutTheme12 = () => {

    return (
        <MessageDeskSection>
            <MessageDeskSectionHead>
                <h2>Principal’s Welcome</h2>

            </MessageDeskSectionHead>
            <MessageDeskGrid>

                <MessageWrapper>
                    <MessageDeskGridLeft>
                        <MessageDeskProfileImage>
                            <Image src={MessageDeskDummyProfile} alt="" />
                        </MessageDeskProfileImage>
                    </MessageDeskGridLeft>
                    <MessageDeskGridRight>
                        <h4>{"Rajat Kumar"}</h4>
                        <h5>{"business Owner"}</h5>
                        <p dangerouslySetInnerHTML={{
                            __html:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }}
                        ></p>
                    </MessageDeskGridRight></MessageWrapper>

            </MessageDeskGrid>
        </MessageDeskSection>
    )
}
export default AboutTheme12