import React from "react";
import { BlogCard, BlogContent, Button, MainContent, MainImage } from "./BolgCategoriesTheme17.style";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import RecordNotFound from "@/CommonComponents/RecordNotFound/RecordNotFound";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import blogcat20 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat20.png";
import blogcat21 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat21.png";
import blogcat22 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat22.png";
import blogcat23 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat23.png";
import { dummyImg } from "@/Constant/constants";

const BlogCategoriesTheme17 = ({ children }) => {

  const navigate = useAppNavigate();

  const data = children
  const BlogData = data?.data
  let style = {
    MainContent: data.custom_section_editable[0].style,
    BlogCard: data.custom_section_editable[1].style,
    MainImage: data.custom_section_editable[2].style,
    ImageElement: data.custom_section_editable[3].style,
    Text1: data.custom_section_editable[4],
    Text2: data.custom_section_editable[5],
    BlogBtn: data.custom_section_editable[6].style,

  }

  const DefaultImg = [blogcat20, blogcat21, blogcat22, blogcat23]

  return (
    <MediaGallery sectionName={"ManageBlogs"} manageText={"Manage Blogs"} arrayofImages={false} fieldName={"blog_image"} fieldIdLabel={"_id"} data={data}>
      {BlogData && BlogData?.length > 0 ?
        <MainContent item={style.MainContent}>
          {BlogData?.map((value, key) => {

            return (
              <BlogCard key={key} item={style.BlogCard} onClick={() => navigate(`/blog-details/${value?.url_slug}`)}>
                <MainImage item={style.MainImage}>
                  <ImageElement
                    style={style.ImageElement}
                    src={value?.blog_image}
                    alt={value?.blog_image?.alt}
                    defaultImage={dummyImg}
                  />
                </MainImage>
                <BlogContent paraStyle={style.Text2.style}>
                  <Text tagType={style.Text1.tagType} style={style.Text1.style}>{value?.title}</Text>
                  <Text className= "blogDec" dangerouslySetInnerHTML={{
                    __html:
                      value?.content > 180 ?
                        `${value?.content.slice(0, 180)}... ` : value?.content,
                  }} tagType={style.Text2.tagType} style={style.Text2.style} />
                  <Button onClick={() => navigate(`/blog-details/${value?.url_slug}`)} item={style.BlogBtn}>Read More</Button>
                </BlogContent>
              </BlogCard>
            );
          })}
        </MainContent>
        :
        <RecordNotFound />
      }

    </MediaGallery>
  );
};

export default BlogCategoriesTheme17;
