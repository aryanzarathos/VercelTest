import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import MidContainerImg from '../../../Assets/SectionComponent/Images/GeneralPages/theme5Img.png'
import { GeneralPageTheme5BottomContainer, GeneralPageTheme5MidContainer, GeneralPageTheme5TopContainer, HeaderContent, HeaderSection, HeaderTopHeading, ImgOverContainer, MidImgContainer, OverContainerButton, OverContainerContent, OverContainerHeading } from './GeneralPagesTheme5.style';

const GeneralPageTheme5 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slidingData = [1, 2, 3, 4, 5]

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
      <GeneralPageTheme5TopContainer>
        <h3>Block Title</h3>
        <p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>

          <p>
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32.
          </p>
        </p>
        <button>Button</button>
      </GeneralPageTheme5TopContainer>
      <GeneralPageTheme5MidContainer>
        <Slider {...settings}>
          {
            slidingData.map((data, index) => (
              <MidImgContainer data={data} key={index}>
                <Image src={MidContainerImg} alt="img" />
                <ImgOverContainer>
                  <OverContainerHeading>Left -center aligned texts</OverContainerHeading>
                  <OverContainerContent>
                    This is a paragraph. Click here to edit the text. It’s easy. Just
                    click here to add your own content and make changes to it.
                  </OverContainerContent>
                  <OverContainerButton>Button</OverContainerButton>
                </ImgOverContainer>
              </MidImgContainer>
            ))
          }
        </Slider>
      </GeneralPageTheme5MidContainer>
      <GeneralPageTheme5BottomContainer>
        <h3>Block Title</h3>
        <p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>

          <p>
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32.
          </p>
        </p>
      </GeneralPageTheme5BottomContainer>
    </>
  )
}

export default GeneralPageTheme5