import React from 'react'
import Slider from 'react-slick';
// import BlogPostCards from '../BlogPosts/BlogPostsCards'

import latesNewsImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNews.png'
import latesNewsMidImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNewsMid.png'
import Link from 'next/link';
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import Image from 'next/image';
import { BlogsBottomContainer, BlogsSubContainer, BlogsTopContainer, BlogsTopHeading, BottomContainerButton, CardBottomContent, CardButton, CardContainer, CardContent, CardHeading, CardImages, HeadContainer, LineInner } from './BolgCategoriesTheme3.style';

const BolgCategoriesTheme3 = () => {

  const BlogCategoriesData = [
    {
      id: 0,
      img: latesNewsImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 1,
      img: latesNewsMidImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 2,
      img: latesNewsImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 0,
      img: latesNewsImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 1,
      img: latesNewsMidImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 2,
      img: latesNewsImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    },
    {
      id: 2,
      img: latesNewsImg,
      heading: "11 rules of UI/UX to improve your skills in modern days",
      description: "A wide range of variety of  reviews & blogs of UI/UX from around the world..."
    }
  ]

  var settings = {
    dots: true,
    infinite: false,
    rows: 2,
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

  return (
    <>
      <BlogsTopContainer>
        <BlogsTopHeading>Blogs</BlogsTopHeading>
        <HeadContainer>
          <LineInner></LineInner>
        </HeadContainer>
      </BlogsTopContainer>
      <BlogsSubContainer>
        <Slider {...settings}>
          {
            BlogCategoriesData.map((data, index) => (
              <>
                <CardContainer key={index}>
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
                </CardContainer>
              </>
            ))
          }
        </Slider>
      </BlogsSubContainer>
      <BlogsBottomContainer>
        <HeadContainer />
        <BottomContainerButton>See more</BottomContainerButton>
      </BlogsBottomContainer>
    </>
  )
}

export default BolgCategoriesTheme3