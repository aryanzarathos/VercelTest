import React from 'react'
// import styled from 'styled-components'
// import { Container } from '../../../SectionCommon/Containers/Container.styled'
import data from '../data.json'
import { CardWrapper, ContainerMain, Description, FaqWrap, HeadingWrapper, TitleWrapper } from './FaqTheme3.style'
// import image3 from '../../Assets/Images/Testimonial/Ellipse620.png'
// import image4 from '../../Assets/Images/Testimonial/double-quotation-mark-black.png'

const Theme10 = () => {
    return (
        <div>
            <ContainerMain>
                {/* <Container className='container-lg'> */}
                <HeadingWrapper>
                    <p>FAQs</p>
                    <h1>Most Asked Questions</h1>
                </HeadingWrapper>
                <CardWrapper>
                    {data.map((e,key) => {
                        return (
                            <FaqWrap key={key}>
                                <TitleWrapper >
                                    <h1>{e.title}</h1>
                                </TitleWrapper>
                                <Description >
                                    <p>{e.desc}</p>
                                </Description>
                            </FaqWrap>
                        )
                    })}

                </CardWrapper>
                {/* </Container> */}
            </ContainerMain>
        </div >
    )
}

export default Theme10
