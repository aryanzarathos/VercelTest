import Image from "next/image";
import React from "react";
import blogcat16 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat16.png";
import blogcat17 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat17.png";
import blogcat18 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat18.png";
import blogcat19 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat19.png";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import { BlogCard, Button, MainContent, MainHeader, MainImage, MainSection, RightContent } from "./BolgCategoriesTheme15.style";

const BlogCategoriesTheme15 = () => {
 
  const BlogData15 = [
    {
      id: 1,
      blogImage: blogcat16,
      title: "This is Header of Blog Tile",
      desc: "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own are content and make changes to it",
      button: "Raed More",
    },
    {
      id: 2,
      blogImage: blogcat17,
      title: "This is Header of Blog Tile",
      desc: "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own are content and make changes to it",
      button: "Raed More",
    },
    {
      id: 3,
      blogImage: blogcat18,
      title: "This is Header of Blog Tile",
      desc: "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own are content and make changes to it",
      button: "Raed More",
    },
    {
      id: 4,
      blogImage: blogcat19,
      title: "This is Header of Blog Tile",
      desc: "This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own are content and make changes to it",
      button: "Raed More",
    },
  ];
  return (
    <>
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
            {BlogData15?.map((value, key) => {
              const { blogImage, title, desc } = value;
              return (
                <BlogCard key={key}>
                  <MainImage>
                    <Image src={blogImage} alt="blog-image1" />
                  </MainImage>
                  <RightContent>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <Button>Read more</Button>
                  </RightContent>
                </BlogCard>
              );
            })}
          </MainContent>
        </>
      </MainSection>
    </>
  );
};

export default BlogCategoriesTheme15;
