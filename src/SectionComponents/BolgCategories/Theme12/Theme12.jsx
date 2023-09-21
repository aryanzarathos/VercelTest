import React from "react";
import blogcat11 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat11.png";
import blogcat12 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat12.png";
import blogcat13 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat13.png";
import blogcat4 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat4.png";
import Image from "next/image";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import { BlogCard, BlogContent, BlogImage, MainContent, MainHeader, MainSection } from "./BolgCategoriesTheme12.style";

const BlogData = [
  {
    id: 1,
    blogImage: blogcat13,
    title: "This is Header of Blog Tile",
    description:
      "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it.",
  },
  {
    id: 2,
    blogImage: blogcat12,
    title: "This is Header of Blog Tile",
    description:
      "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it.",
  },
  {
    id: 3,
    blogImage: blogcat11,
    title: "This is Header of Blog Tile",
    description:
      "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it.",
  },
  // {
  //     id:4,
  //     blogImage:cycle,
  //     title:"This is Header of Blog Tile",
  //     description:"This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it."
  // },
];

const BlogCategoriesTheme12 = () => {
  
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
          {BlogData?.map((data, key) => {
            const { blogImage, title, description } = data;
            return (
              <BlogCard key={key}>
                <BlogImage>
                  <Image src={blogImage} alt="blog image" />
                </BlogImage>
                <BlogContent>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </BlogContent>
              </BlogCard>
            );
          })}
        </MainContent>
      </>
    </MainSection>
  );
};

export default BlogCategoriesTheme12;
