import React from "react";
import blogcat20 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat20.png";
import blogcat21 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat21.png";
import blogcat22 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat22.png";
import blogcat23 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat23.png";
import Image from "next/image";
import { MainContent, MainHeader, MainSection } from "./BolgCategoriesTheme16.style";
import { BlogCard, BlogContent } from "../Theme9/BolgCategoriesTheme9.style";
import { Button, MainImage } from "../Theme13/BolgCategoriesTheme13.style";

const BlogCategoriesTheme16 = () => {
  
  const BlogData16 = [
    {
      id: 1,
      blogImage: blogcat20,
      title: "This is Header of Blog Tile",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
      link: "Read More",
    },
    {
      id: 2,
      blogImage: blogcat21,
      title: "This is Header of Blog Tile",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
      link: "Read More",
    },
    {
      id: 3,
      blogImage: blogcat22,
      title: "This is Header of Blog Tile",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
      link: "Read More",
    },
    {
      id: 4,
      blogImage: blogcat23,
      title: "This is Header of Blog Tile",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
      link: "Read More",
    },
  ];
  return (
    <MainSection>
      <>
        <MainHeader>
          <h5>Block title</h5>
          <p>
            This is a block description. To edit, click and type the text or
            replace it with your own custom content.
          </p>
        </MainHeader>
        <MainContent>
          {BlogData16?.map((value, key) => {
            const { blogImage, title, desc, link } = value;
            return (
              <BlogCard key={key}>
                <MainImage>
                  <Image src={blogImage} alt="blog-image" />
                </MainImage>
                <BlogContent>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Button>{link}</Button>
                </BlogContent>
              </BlogCard>
            );
          })}
        </MainContent>
      </>
    </MainSection>
  );
};

export default BlogCategoriesTheme16;
