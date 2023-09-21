import React from 'react'
import CardImage1 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg1.png"
import CardImage2 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg2.png"
import CardImage3 from "../../../Assets/SectionComponent/Images/BolgCategories/CardImg3.png"
import Slider from 'react-slick'
// import BlogCategoriesCards from './BlogCategoriesCards'
import Image from 'next/image'

import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"

import Link from 'next/link';
import { BottomContainerButton, CardBottomContent, CardButton, CardContainer, CardContent, CardHeading, CardImages, CategoriesBottomContainer, CategoriesSubContainer, CategoriesTopContainer, CategoriesTopHeading, HeadContainer, LineInner } from './BlogCategories.style'

const BolgCategoriesTheme2 = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const CategoriesData = [
    {
      id: 0,
      img: CardImage1,
      heading: "Arcade of Games",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    },
    {
      id: 1,
      img: CardImage2,
      heading: "Who killed Jessica?",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    },
    {
      id: 2,
      img: CardImage3,
      heading: "How to play suicide squad at home?",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    },
    {
      id: 3,
      img: CardImage1,
      heading: "Arcade of Games",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    },
    {
      id: 4,
      img: CardImage2,
      heading: "Who killed Jessica?",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    },
    {
      id: 5,
      img: CardImage3,
      heading: "How to play suicide squad at home?",
      description: "A wide range of variety of  reviews & blogs of video games from around the world.  Also indulging reviews & blogs of video games from around globe ...."
    }
  ]


  return (
    <>
      <CategoriesTopContainer>
        <CategoriesTopHeading>Categories</CategoriesTopHeading>
        <HeadContainer>
          <LineInner></LineInner>
        </HeadContainer>
      </CategoriesTopContainer>
      <CategoriesSubContainer>
        <Slider {...settings}>
          {
            CategoriesData.map((data, index) => (

              <>

                <CardContainer key={index}>
                  <CardImages>
                    <Image src={data.img} alt='CardImg' />
                  </CardImages>
                  <CardContent>
                    <CardHeading>{data.heading}</CardHeading>
                    <HeadContainer />
                    <CardBottomContent>
                      {
                        data.description
                      }
                    </CardBottomContent>
                    <Link href={'#'}><CardButton>Read Full<ForwardIcon fill={'rgba(0, 52, 89, 1);'} width={11} height={11} /></CardButton></Link>
                  </CardContent>
                </CardContainer>


              </>
            ))
          }
        </Slider>
      </CategoriesSubContainer>
      <CategoriesBottomContainer>
        <HeadContainer />
        <BottomContainerButton>See more</BottomContainerButton>
      </CategoriesBottomContainer>
    </>
  )
};

export default BolgCategoriesTheme2