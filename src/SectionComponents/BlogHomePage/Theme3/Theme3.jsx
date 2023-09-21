import React from 'react'

import latesNewsImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNews.png'
import latesNewsMidImg from '../../../Assets/SectionComponent/Images/BlogPosts/latestNewsMid.png'
import Link from 'next/link';
import ForwardIcon from "../../../Assets/SectionComponent/Images/BolgCategories/forwardArrow.svg"
import Image from 'next/image';
import { BlogsBottomContainer, BlogsSubContainer, BlogsTopContainer, BlogsTopHeading, BottomContainerButton, CardBottomContent, CardButton, CardContainer, CardContent, CardHeadContainer, CardHeading, CardImages, HeadContainer, HeadingCover, LineInner } from './BlogHomeTheme3.style';
import Slider from '@/SectionCommon/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import { useSelector } from 'react-redux';
import useEcomSelectRoute from '@/TemplateCustomHooks/EcomSelectRoute';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const BlogHomeTheme3 = ({ children }) => {
  const data = children;
  let history = useAppNavigate();
  const industry = "Ecommerce";
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
  const latestBlogData = data.data;
  const { blogsSuccess, preview, blogsData } = useSelector((state) => {
    return {
      preview: state.ecommerceTemplate.preview,
      blogsSuccess: state.instituteblogs.getWesbiteBlogList.success,
      blogsData: state.instituteblogs.getWesbiteBlogList.blogData
    }
  })
  const [selectEcomRouteForPreview] = useEcomSelectRoute();

 
  const handleSeeMore = () => {
    // if (preview) {
    //   if (industry === "Ecommerce") {
    //     selectEcomRouteForPreview('/blogs', "");
    //   }
    //   else if (industry === "Services") {
    //     // selectServiceRouteForPreview('/blog/bloglist', "");
    //   }
    // }
    // else {
    //   history('/blogs');
    // }
    history('/blogs');
  }

  const handlePreviewBlog = (slug) => {
    // if (preview) {
    //   if (industry === "Ecommerce") {
    //     selectEcomRouteForPreview(`/blog-details/${slug}`, slug);
    //   }
    //   else if (industry === "Services") {
    //     // selectServiceRouteForPreview(`/blog/${slug}`, slug);
    //   }
    // } else {
    //   history(`/blog-details/${slug}`);
    // }
    
    history(`/blog-details/${slug}`);
  }

  let style = {
    BlogsTopContainer: data.custom_section_editable[0].style,
    LatestBolgTopHeading: data?.custom_section_editable[1],
    HeadContainer: data?.custom_section_editable[2].style,
    LineInner: data?.custom_section_editable[3].style,
    BlogsSubContainer: data?.custom_section_editable[4].style,
    CardContainer: data?.custom_section_editable[5].style,
    CardImages: data?.custom_section_editable[6].style,
    CardImagesImage: data?.custom_section_editable[7].style,
    HeadingCover: data?.custom_section_editable[8].style,
    CardHeading: data?.custom_section_editable[9],
    CardHeadContainer: data?.custom_section_editable[10].style,
    CardBottomContent: data?.custom_section_editable[11],
    RightContainerButton: data?.custom_section_editable[12],
    CardContent: data?.custom_section_editable[13].style,
    BlogsBottomContainer: data?.custom_section_editable[14].style,
    BottomContainerButton: data?.custom_section_editable[15],
    ArrowColor: data?.sliderSetting,


  }
  //// console.log(style.HeadingCover, "content")
  return (
    <>
      <BlogsTopContainer item={style.BlogsTopContainer}>
        {/* <BlogsTopHeading>Blogs</BlogsTopHeading> */}
        <Text tagType={style.LatestBolgTopHeading.tagType}
          style={style?.LatestBolgTopHeading.style}
          text={style?.LatestBolgTopHeading.text} />
        <HeadContainer item={style?.HeadContainer}>
          <LineInner item={style?.LineInner}></LineInner>
        </HeadContainer>
      </BlogsTopContainer>
      <BlogsSubContainer item={style.BlogsSubContainer} arrowColor={style.ArrowColor}>
        <Slider {...data}>
          {
            latestBlogData && latestBlogData.length > 0 && latestBlogData.map((data, index) => (
              <>
                <SwiperSlide key={index}>
                  <CardContainer item={style.CardContainer} onClick={() => handlePreviewBlog(data?.url_slug)}>
                    <CardImages item={style.CardImages}>
                      <ImageElement src={data?.blog_image?.src && data?.blog_image?.src} alt={data?.blog_image?.alt} style={style.CardImagesImage} />
                    </CardImages>
                    <CardContent itemSvg={style.ForwardIcon} item={style.CardContent}>
                      <HeadingCover item={style.HeadingCover}>
                        <Text tagType={style.CardHeading.tagType}
                          style={style.CardHeading.style}
                          text={data?.title} />
                      </HeadingCover>
                      <CardHeadContainer item={style.CardHeadContainer} />

                      <Text tagType={style.CardBottomContent.tagType}
                        style={style.CardBottomContent.style}
                        dangerouslySetInnerHTML={{
                          __html:
                            data?.content && data?.content.length > 240 ?
                              `${data?.content.slice(0, 240)}... ` : data?.content,
                        }}
                      />
                      {
                        data?.content && data?.content.length > 240 ? (
                          <Button style={style?.RightContainerButton.style}>
                            {style?.RightContainerButton?.text}
                          </Button>
                        ) : ""
                      }
                    </CardContent>
                  </CardContainer>
                </SwiperSlide>
              </>
            ))
          }
        </Slider>
      </BlogsSubContainer>
      <BlogsBottomContainer item={style.BlogsBottomContainer}>
        <HeadContainer item={style.CardHeadContainer} />
        {
          blogsSuccess && blogsData && blogsData.length > 6 ? (
            <Button
              onClick={handleSeeMore}
              text={style.BottomContainerButton.text}
              style={style.BottomContainerButton.style}
            />
          ) : ""
        }
      </BlogsBottomContainer>

    </>
  )
}

export default BlogHomeTheme3