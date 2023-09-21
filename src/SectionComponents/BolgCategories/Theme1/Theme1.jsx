import React from 'react'
import LatestBlogImg from "../../../Assets/SectionComponent/Images/BolgCategories/LatestBlogImg.png"
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import Image from 'next/image'
import { HeadContainer, LatestBolgSubContainer, LatestBolgTopContainer, LatestBolgTopHeading, LineInner, RightContainerButton, RightContainerContent, RightContainerTopHeading, SubLeftContainer } from './BlogCategoriesTheme1.style'

const BolgCategoriesTheme1 = () => {
  return (
    <>
      <LatestBolgTopContainer>
        <LatestBolgTopHeading>Latest Blog</LatestBolgTopHeading>
        <HeadContainer>
          <LineInner></LineInner>
        </HeadContainer>
      </LatestBolgTopContainer>
      <LatestBolgSubContainer>
        <SubLeftContainer>
          <Image src={LatestBlogImg} alt="LatestBolgImg" />
        </SubLeftContainer>
        <div className='sub-right-container'>
          <RightContainerTopHeading>Attack On Titans</RightContainerTopHeading>
          <RightContainerContent>The CSS Grid Layout Module offers a grid-based layout
            system, with rows and columns, making it easier to
            design web pages without having to use floats
            and positioning.
          </RightContainerContent>
          <RightContainerButton>Read Full<ForwardIcon height={11} width={11} fill={'rgba(0, 52, 89, 1)'} /></RightContainerButton>
        </div>
      </LatestBolgSubContainer>
    </>
  )
}

export default BolgCategoriesTheme1