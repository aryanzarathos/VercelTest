import React, { useState } from 'react'
// import { Container } from '../../../SectionCommon/Containers/Container.styled'
import PositiveImg from '../../../Assets/SectionComponent/Images/Faq/positive.svg'
import NagetiveImg from '../../../Assets/SectionComponent/Images/Faq/nagetive.svg'
import data from '../data.json'
import { Description, FaqWrap, FaqWrapper, HeadingWrapper, MainConatainer, TitleWrapper, ToggleIcon } from './FaqTheme1.style'
import MediaGallery from '@/CommonComponents/MediaGalleryEditor'

const Index = () => {

    const [activeFaq, setActiveFaq] = useState(0)

    const clickHandle = (index) => {
        setActiveFaq(index === activeFaq ? null : index)
    }
    // const active = 0;
    return (
        <MediaGallery sectionName={"ManageFaq"} manageText={"Manage Faq"} data={data} showSettings={false} showAltText={false}>

            <MainConatainer>
                {/* <Container> */}
                <HeadingWrapper>
                    <h1>FAQs</h1>
                    <h3>Frequently asked questions</h3>
                    <p>Have questions? We’re here to help</p>
                </HeadingWrapper>
                <FaqWrapper>
                    {data.map((e, index) => {
                        return (
                            <FaqWrap onClick={() => { clickHandle(e.id) }} key={index}>
                                <TitleWrapper >
                                    <h1>{e.title}</h1>
                                    {/* <ToggleIcon active={activeFaq === index ? true : false} ></ToggleIcon> */}

                                    <ToggleIcon active={activeFaq === index ? true : false}> {activeFaq === index ? <NagetiveImg fill={'$000'} height={17} width={17} /> : <PositiveImg fill={'$000'} height={17} width={17} />} </ToggleIcon>


                                </TitleWrapper>
                                {
                                    <Description active={activeFaq === index ? true : false}  >
                                        <p className={activeFaq === index ? 'show' : ''}>{e.desc}</p>
                                    </Description>
                                }
                            </FaqWrap>
                        )
                    })}

                </FaqWrapper>
                {/* </Container> */}
            </MainConatainer >
        </MediaGallery>
    )
}

export default Index
