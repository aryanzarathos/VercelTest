import Image from "next/image";
import React from "react";
import blogcat14 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat14.png";
import blogProfile from "../../../Assets/SectionComponent/Images/BolgCategories/blogProfile.png";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import blogcat3 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat3.png";
import { BlogContent, MainContent, MainImage, MainWrapper, ProfileContent, ProfileImage, RightContent } from "./BolgCategoriesTheme13.style";
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import Button from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import RecordNotFound from "@/CommonComponents/RecordNotFound/RecordNotFound";
import Slider from "@/SectionCommon/Slider/Slider";
import { SwiperSlide } from 'swiper/react';
import { dummyImg } from "@/Constant/constants";
const BlogCategoriesTheme13 = ({ children }) => {

  const navigate = useAppNavigate();

  const data = children;
  const blogData = data?.data;

  const style = {
    mainWrapper: data?.custom_section_editable[0]?.style,
    MainContent: data?.custom_section_editable[1]?.style,
    MainImage: data?.custom_section_editable[2]?.style,
    imageStyle: data?.custom_section_editable[3]?.style,
    RightContent: data?.custom_section_editable[4]?.style,
    ProfileContent: data?.custom_section_editable[5]?.style,
    ProfileImage: data?.custom_section_editable[6]?.style,
    ProfileImageStyle: data?.custom_section_editable[7]?.style,
    UserName: data?.custom_section_editable[8],
    BlogContent: data?.custom_section_editable[9].style,
    blogTitle: data?.custom_section_editable[10],
    blogDesc: data?.custom_section_editable[11],
    readMoreBtn: data?.custom_section_editable[12],
    BlogDatas: data.data,
    objectView: data.style.desktop.objectView,
  }

  return (
    <MediaGallery sectionName={"ManageBlogs"} manageText={"Manage Blogs"} arrayofImages={false} fieldName={"blog_image"} fieldIdLabel={"_id"} data={data}>
      {blogData?.length ?
        <MainWrapper item={style.mainWrapper}>
          {style.objectView.toLowerCase() === "grid".toLowerCase() ? <>
            {blogData?.map((item, key) => {
              return (
                <MainContent item={style.MainContent} key={key}
                  onClick={() => navigate(`/blog-details/${item?.url_slug}`)}>
                  <MainImage item={style.MainImage}>
                    <ImageElement src={item?.blog_image} style={style.imageStyle} defaultImage={dummyImg} />
                  </MainImage>
                  <RightContent item={style.RightContent}>
                    <BlogContent item={style.BlogContent} paraStyle={style.blogDesc.style}>
                      <Text
                        tagType={style.blogTitle.tagType}
                        text={item?.title}
                        style={style.blogTitle.style}
                      />
                      <Text
                        tagType={style.blogDesc.tagType}
                        style={style.blogDesc.style}
                        className="blogDec"
                        dangerouslySetInnerHTML={{
                          __html:
                            item?.content?.length > 180 ?
                              `${item?.content.slice(0, 180)}... 
                         `: item?.content,
                        }} />
                      <Button
                        onClick={() => navigate(`/blog-details/${item?.url_slug}`)}
                        text={style?.readMoreBtn?.text}
                        style={style?.readMoreBtn?.style}
                      />
                    </BlogContent>
                  </RightContent>
                </MainContent>
              );
            })
            }
          </>
            :
            <Slider {...children}>
              {blogData?.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <MainContent item={style.MainContent}
                      onClick={() => navigate(`/blog-details/${item?.url_slug}`)}>
                      <MainImage item={style.MainImage}>
                        <ImageElement src={item?.blog_image} style={style.imageStyle} defaultImage={dummyImg} />
                      </MainImage>
                      <RightContent item={style.RightContent}>
                        <BlogContent item={style.BlogContent}>
                          <Text
                            tagType={style.blogTitle.tagType}
                            text={item?.title}
                            style={style.blogTitle.style}
                          />
                          <Text
                            tagType={style.blogDesc.tagType}
                            style={style.blogDesc.style}
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.content?.length > 180 ?
                                  `${item?.content.slice(0, 180)}... 
                         `: item?.content,
                            }} />
                          <Button
                            onClick={() => navigate(`/blog-details/${item?.url_slug}`)}
                            text={style?.readMoreBtn?.text}
                            style={style?.readMoreBtn?.style}
                          />
                        </BlogContent>
                      </RightContent>
                    </MainContent>
                  </SwiperSlide>
                );
              })
              }
            </Slider>
          }
        </MainWrapper>
        : <RecordNotFound />
      }
    </MediaGallery>
  );
};

export default BlogCategoriesTheme13;
