import React from 'react'
import FeaturedBlogsTopImg from '../../../Assets/SectionComponent/Images/BolgCategories/FeaturedBlogsTopImg.png'
import FeaturedBlogsBottomImg from '../../../Assets/SectionComponent/Images/BolgCategories/FeaturedBlogsBottomImg.png'
// import FeaturedBlogsBottomImg from '../../../Assets/Images/BolgCategories/test.jpg'
import LikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/LikeButton.svg'
import DisLikeButton from '../../../Assets/SectionComponent/Images/BolgCategories/DisLikeButton.svg'
import CopyButton from '../../../Assets/SectionComponent/Images/BolgCategories/CopyButton.svg'
import ShareButton from '../../../Assets/SectionComponent/Images/BolgCategories/ShareButton.svg'
import CommentButton from '../../../Assets/SectionComponent/Images/BolgCategories/CommentButton.svg'
import Image from 'next/image'
import { BottomMidSectionImgContainer, BottomSection, CategoriesTopHeading, FeaturedBlogsSubContainer, FeaturedBlogsTopContainer, HeadContainer, ImgContainerContent, ImgContainerHeading, LineInner, MidSection, MidSectionContent, MidSectionHeading, SubBottomContainer, SubTopContainer, TopSection, TopSectionImageConatainer, TopSectionImgContent } from './BolgCategoriesTheme4.style'

const BolgCategoriesTheme4 = () => {
  return (
    <>
      <FeaturedBlogsTopContainer>
        <CategoriesTopHeading>Featured Blogs</CategoriesTopHeading>
        <HeadContainer>
          <LineInner></LineInner>
        </HeadContainer>
      </FeaturedBlogsTopContainer>
      <FeaturedBlogsSubContainer>
        <SubTopContainer>
          <TopSection>
            <TopSectionImageConatainer>
              <Image src={FeaturedBlogsTopImg} alt="Profile Img" />
            </TopSectionImageConatainer>
            <TopSectionImgContent>
              <ImgContainerHeading>Sakshi Pandey</ImgContainerHeading>
              <ImgContainerContent>Manager at Amazon (company)</ImgContainerContent>
            </TopSectionImgContent>
          </TopSection>
          <MidSection>
            <MidSectionHeading>Should I go for HealthifyMe to lose weight?</MidSectionHeading>
            <MidSectionContent>
              Yes one should surely give it a try.. 3 reasons why I ll recommend it is because 1. daily calorie intake in line to Indian meals consumed. I have used several apps but none of them had the Indian foods spilt at calorie level I found a new-in-box pair of Swarovski Crystal Spider earrings in the room safe at a hotel in Barcelona. The mat in bottom of the safe was raised and the earrings were tucked underneath. The manager contacted the previous new-in-box pair of Swarovski Crystal Spider earrings in the room.....
            </MidSectionContent>
          </MidSection>
          <BottomSection>
            <LikeButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <DisLikeButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <CommentButton fill={'rgba(32, 32, 32, 0.8)'} height={18} width={21} />
            <ShareButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <CopyButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
          </BottomSection>
        </SubTopContainer>
        <SubBottomContainer>
          <TopSection>
            <TopSectionImageConatainer>
              <Image src={FeaturedBlogsTopImg} alt="Profile Img" />
            </TopSectionImageConatainer>
            <TopSectionImgContent>
              <ImgContainerHeading>Sakshi Pandey</ImgContainerHeading>
              <ImgContainerContent>Manager at Amazon (company)</ImgContainerContent>
            </TopSectionImgContent>
          </TopSection>
          <MidSection>
            <MidSectionHeading>Should I go for HealthifyMe to lose weight?</MidSectionHeading>
            <BottomMidSectionImgContainer>
              <Image src={FeaturedBlogsBottomImg} alt="FeaturedBlogsBottomImg" />
            </BottomMidSectionImgContainer>
          </MidSection>
          <BottomSection>
            <LikeButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <DisLikeButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <CommentButton fill={'rgba(32, 32, 32, 0.8)'} height={18} width={21} />
            <ShareButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
            <CopyButton fill={'rgba(32, 32, 32, 0.8)'} height={20} width={20} />
          </BottomSection>
        </SubBottomContainer>
      </FeaturedBlogsSubContainer>
    </>
  )
}

export default BolgCategoriesTheme4