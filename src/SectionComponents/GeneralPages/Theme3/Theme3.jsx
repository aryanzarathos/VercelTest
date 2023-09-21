import Image from 'next/image';
import React from 'react'
import GeneralPageTheme3Img1 from '../../../Assets/SectionComponent/Images/GeneralPages/image1.png'
import GeneralPageTheme3Img2 from '../../../Assets/SectionComponent/Images/GeneralPages/image2.png'
import GeneralPageTheme3Img3 from '../../../Assets/SectionComponent/Images/GeneralPages/image3.png'
import { GeneralPageTheme3SubContainer, HeaderContent, HeaderSection, HeaderTopHeading, MainContentContainer, MainImgContainer, MidContentContainer, MidImgContainer, MidMainContainer, SubMainContainer } from './GeneralPagesTheme3.style';

const GeneralPageTheme3 = () => {
    return (
        <>
            <HeaderSection>
                <HeaderTopHeading>
                    Page Title
                </HeaderTopHeading>
                <HeaderContent>
                    This is a block description. To edit, click and type the text or replace it with your own custom content
                </HeaderContent>
            </HeaderSection>
            <GeneralPageTheme3SubContainer>
                <SubMainContainer>
                    <MainImgContainer>
                        <Image src={GeneralPageTheme3Img1} alt="img" />
                    </MainImgContainer>
                    <MainContentContainer>
                        <h3>Block Title</h3>
                        <p>
                           Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy.Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.
                        </p>
                    </MainContentContainer>
                </SubMainContainer>
                <MidMainContainer>
                    <MidImgContainer>
                        <Image src={GeneralPageTheme3Img2} alt="img" />
                    </MidImgContainer>
                    <MidContentContainer>
                        <h3>Block Title</h3>
                        <p>
                           Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy.Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.
                        </p>
                    </MidContentContainer>
                </MidMainContainer>
                <SubMainContainer>
                    <MainImgContainer>
                        <Image src={GeneralPageTheme3Img3} alt="img" />
                    </MainImgContainer>
                    <MainContentContainer>
                        <h3>Block Title</h3>
                        <p>
                           Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy.Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.
                        </p>
                    </MainContentContainer>
                </SubMainContainer>
            </GeneralPageTheme3SubContainer>
        </>
    )
}

export default GeneralPageTheme3