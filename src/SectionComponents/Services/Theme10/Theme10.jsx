import React from 'react'
// import OurServicesCardImg1 from '../../../Assets/Images/Services/OurServices/ourServicesImage.png';
import OurServicesCardImg1 from '../../../Assets/SectionComponent/Images/Services/OurServices/ourServicesImage.png';
// import OurServicesCardImg2 from '../../../Assets/Images/Services/OurServices/OurServicesCardsImg1.png';
// import OurServicesCardImg3 from '../../../Assets/Images/Services/OurServices/OurServicesCardsImg2.png';
import Image from 'next/image';
import { CardsContentConatiner, CardsContentDescription, CardsContentHeading, CardsImgContainer, HeadingBottomLine, HeadingContent, OurServicesCards, OurServicesCardsHeading, OurServicesCardsMainContainer, OurServicesCardsSubContainer } from './ServicesTheme10.style';

const ServicesTheme10 = () => {

    const OurServicesCardData = [
        {
            id: 0,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 1,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 2,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 3,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 4,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 5,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 6,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 7,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        },
        {
            id: 9,
            img: OurServicesCardImg1,
            title: "Neuro Surgery",
            description: "The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:"
        }
    ]

    return (
        <>
            <OurServicesCardsMainContainer>
                <OurServicesCardsHeading>
                    <HeadingContent>Our</HeadingContent> Services </OurServicesCardsHeading>
                <OurServicesCardsSubContainer>
                    {
                        OurServicesCardData.map((data, index) => (
                            <OurServicesCards data={data} key={index}>
                                <CardsImgContainer>
                                    <Image src={data.img} alt="Cards Img" />
                                </CardsImgContainer>
                                <CardsContentConatiner>
                                    <CardsContentHeading>
                                        {data.title}
                                    </CardsContentHeading>
                                    <HeadingBottomLine />
                                    <CardsContentDescription className='ExpandedContent'>
                                        {data.description}
                                    </CardsContentDescription>
                                </CardsContentConatiner>
                            </OurServicesCards>
                        ))
                    }
                </OurServicesCardsSubContainer>
            </OurServicesCardsMainContainer>
        </>
    )
}

export default ServicesTheme10