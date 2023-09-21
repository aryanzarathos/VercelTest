import React from 'react'

// import laboratoryImg from "../../Assets/Images/Services/laboratory.png"
import laboratoryImg from "../../../Assets/SectionComponent/Images/Services/laboratory.png"
// import emergencyImg from "../../Assets/Images/Services/emergency.png"
import emergencyImg from "../../../Assets/SectionComponent/Images/Services/emergency.png"
// import xrayImg from "../../Assets/Images/Services/xray.png"
import xrayImg from "../../../Assets/SectionComponent/Images/Services/xray.png"
// import orthopedics from "../../Assets/Images/Services/orthopedics.png"
import orthopedics from "../../../Assets/SectionComponent/Images/Services/orthopedics.png"
// import ForwardImg from "../../Assets/Images/Services/forwardArrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import { BoxBottomContent, BoxForwardImg, BoxTopContent, BoxTopHeading, SectionMainHeading, SectionSubContainer, SubContainerBox, SubLeftContent, SubRightContent } from './ServicesTheme2.style'


const ServicesTheme2 = () => {
    return (
        <>
            <SectionMainHeading>Categories 2</SectionMainHeading>
            <SectionSubContainer>
                <SubContainerBox>
                    <SubLeftContent>
                        <Image src={laboratoryImg} alt='img' />
                    </SubLeftContent>
                    <SubRightContent>
                        <BoxTopContent>
                            <BoxTopHeading>Laboratory</BoxTopHeading>
                            <Link href={'#'}><BoxForwardImg></BoxForwardImg></Link>
                        </BoxTopContent>
                        <hr />
                        <BoxBottomContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...</BoxBottomContent>
                    </SubRightContent>
                </SubContainerBox>
                <SubContainerBox>
                    <SubLeftContent>
                        <Image src={emergencyImg} alt='img' />
                    </SubLeftContent>
                    <SubRightContent>
                        <BoxTopContent>
                            <BoxTopHeading>Emergency</BoxTopHeading>
                            <Link href={'#'}><BoxForwardImg></BoxForwardImg></Link>
                        </BoxTopContent>
                        <hr />
                        <BoxBottomContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...</BoxBottomContent>
                    </SubRightContent>
                </SubContainerBox>
                <SubContainerBox>
                    <SubLeftContent>
                        <Image src={xrayImg} alt='img' />
                    </SubLeftContent>
                    <SubRightContent>
                        <BoxTopContent>
                            <boxTopHeading>B- ray</boxTopHeading>
                            <Link href={'#'}><BoxForwardImg></BoxForwardImg></Link>
                        </BoxTopContent>
                        <hr />
                        <BoxBottomContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...</BoxBottomContent>
                    </SubRightContent>
                </SubContainerBox>
                <SubContainerBox>
                    <SubLeftContent>
                        <Image src={orthopedics} alt='img' />
                    </SubLeftContent>
                    <SubRightContent>
                        <BoxTopContent>
                            <BoxTopHeading>Orthopedics</BoxTopHeading>
                            <Link href={'#'}><BoxForwardImg></BoxForwardImg></Link>
                        </BoxTopContent>
                        <hr />
                        <BoxBottomContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laborer incididunt ut labore et dolore magna aliqua dolor...</BoxBottomContent>
                    </SubRightContent>
                </SubContainerBox>
            </SectionSubContainer>
        </>
    )
}

export default ServicesTheme2