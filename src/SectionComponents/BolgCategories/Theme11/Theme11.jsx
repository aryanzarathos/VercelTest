import React from "react";
import blogcat8 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat8.png";
import blogcat9 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat9.png";
import blogcat10 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat10.png";
import blogcat4 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat4.png";
import Image from "next/image";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import { BlogCard, BlogContent, BlogImage, MainContent, BlogThemeContainer } from "./BolgCategoriesTheme11.style";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Slider from "@/SectionCommon/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import useAppNavigate from "@/CustomHooks/useAppNavigate";



const BlogCategoriesTheme11 = ({ children }) => {

  const data = children;
  const BlogData = data.data;

  const navigate = useAppNavigate();

  let styles = {
    BlogMainContainer: data.custom_section_editable[0].style,
    BlogGridContainer: data.custom_section_editable[1].style,
    BlogCard: data.custom_section_editable[2].style,
    BlogImage: data.custom_section_editable[3].style,
    Blogimage: data.custom_section_editable[4].style,
    BlogContent: data.custom_section_editable[5].style,
    BlogcardHeading: data.custom_section_editable[6].style,
    GridView: data.style,
    ObjectView: data.style.desktop.objectView,

  }



  return (
    <MediaGallery sectionName={"ManageBlogCategory"} manageText={"Manage Blog Category"} arrayofImages={false} fieldName={"blog_image"} fieldIdLabel={"_id"} data={data} >
      <BlogThemeContainer item={styles.BlogMainContainer}>
        {
          styles.ObjectView.toLowerCase() === "grid".toLowerCase() ?

            <MainContent item={styles.BlogGridContainer}>
              {BlogData?.map((item, key) => {

                return (
                  <BlogCard key={key} item={styles.BlogCard}
                    onClick={() => navigate(`/blogcategory/${item?.url_slug}`)}>
                    <BlogImage item={styles.BlogImage}>
                      <ImageElement style={styles.Blogimage} src={item?.category_cover_image} alt="blog image" />
                    </BlogImage>
                    <BlogContent item={styles.BlogContent}>
                      <Text style={styles.BlogcardHeading}>{item?.category_title}</Text>
                    </BlogContent>
                  </BlogCard>
                );
              })}
            </MainContent> :
            <Slider {...data}>
              {BlogData?.map((item, key) => {

                return (
                  <SwiperSlide key={key}>
                    <BlogCard key={key} item={styles.BlogCard}
                      onClick={() => navigate(`/blogcategory/${item?.url_slug}`)}>
                      <BlogImage item={styles.BlogImage}>
                        <ImageElement style={styles.Blogimage} src={item?.category_cover_image} alt="blog image" />
                      </BlogImage>
                      <BlogContent item={styles.BlogContent}>
                        <Text style={styles.BlogcardHeading}>{item?.category_title}</Text>
                      </BlogContent>
                    </BlogCard>
                  </SwiperSlide>
                );
              })}
            </Slider>
        }
      </BlogThemeContainer>
    </MediaGallery>
  );
};

export default BlogCategoriesTheme11;
