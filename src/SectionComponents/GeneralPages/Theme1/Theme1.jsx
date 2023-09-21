import React from 'react';
import topSectionImg from '../../../Assets/SectionComponent/Images/GeneralPages/topImg.png';
import bottomSectionImg from '../../../Assets/SectionComponent/Images/GeneralPages/BottomImg.png';
import Slider from 'react-slick';
import Image from 'next/image';
import { ButtomImgContainer, CardsContent, CardsHeading, ContentButton, ContentCardContainer, ContentTopHeading, GeneralPageTheme1ButtomSection, GeneralPageTheme1SubSection, GeneralPageTheme1TopSection, HeaderContent, HeaderSection, HeaderTopHeading, HeadingContent, HeadingContentConatiner, ImgContentContainer, ImgOverContainer, OverContainerButton, OverContainerContent, OverContainerHeading, SubSectionHeading, TopSectionImgContainer } from './GeneralPages.style';

const GeneralPageTheme1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
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
      <GeneralPageTheme1TopSection>
        <TopSectionImgContainer>
          <Image src={topSectionImg} alt="img" />
        </TopSectionImgContainer>
        <ImgContentContainer>
          <ContentTopHeading>Headering</ContentTopHeading>
          <HeadingContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </HeadingContent>
          <ContentButton>Button</ContentButton>
        </ImgContentContainer>
      </GeneralPageTheme1TopSection>
      <GeneralPageTheme1SubSection>
        <SubSectionHeading>
          Block Title
        </SubSectionHeading>
        <HeadingContentConatiner>
          <ContentCardContainer>
            <CardsHeading>Charles Patterson</CardsHeading>
            <CardsContent>
              This is a Paragraph. Click on Edit Textor double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
            </CardsContent>
          </ContentCardContainer>
          <ContentCardContainer>
            <CardsHeading>Charles Patterson</CardsHeading>
            <CardsContent>
              This is a Paragraph. Click on Edit Textor double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
            </CardsContent>
          </ContentCardContainer>
          <ContentCardContainer>
            <CardsHeading>Charles Patterson</CardsHeading>
            <CardsContent>
              This is a Paragraph. Click on Edit Textor double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
            </CardsContent>
          </ContentCardContainer>
          <ContentCardContainer>
            <CardsHeading>Charles Patterson</CardsHeading>
            <CardsContent>
              This is a Paragraph. Click on Edit Textor double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
            </CardsContent>
          </ContentCardContainer>
        </HeadingContentConatiner>
      </GeneralPageTheme1SubSection>
      <GeneralPageTheme1ButtomSection>
        <Slider {...settings}>
          <ButtomImgContainer>
            <Image src={bottomSectionImg} alt="img" />
            <ImgOverContainer>
              <OverContainerHeading>Left -center aligned texts</OverContainerHeading>
              <OverContainerContent>
                This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.
              </OverContainerContent>
              <OverContainerButton>Button</OverContainerButton>
            </ImgOverContainer>
          </ButtomImgContainer>
          <ButtomImgContainer>
            <Image src={bottomSectionImg} alt="img" />
            <ImgOverContainer>
              <OverContainerHeading>Left -center aligned texts</OverContainerHeading>
              <OverContainerContent>
                This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.
              </OverContainerContent>
              <OverContainerButton>Button</OverContainerButton>
            </ImgOverContainer>
          </ButtomImgContainer>
          <ButtomImgContainer>
            <Image src={bottomSectionImg} alt="img" />
            <ImgOverContainer>
              <OverContainerHeading>Left -center aligned texts</OverContainerHeading>
              <OverContainerContent>
                This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.
              </OverContainerContent>
              <OverContainerButton>Button</OverContainerButton>
            </ImgOverContainer>
          </ButtomImgContainer>
        </Slider>
      </GeneralPageTheme1ButtomSection>

    </>
  )
}

export default GeneralPageTheme1