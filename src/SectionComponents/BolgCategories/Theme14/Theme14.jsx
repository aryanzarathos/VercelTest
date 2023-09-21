import Image from "next/image";
import React from "react";
import blogcat14 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat14.png";
import blogProfile from "../../../Assets/SectionComponent/Images/BolgCategories/blogProfile.png";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import blogcat3 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat3.png";
import blogcat15 from "../../../Assets/SectionComponent/Images/BolgCategories/blogcat15.png";
import { BlogContent, MainContent, MainHeader, MainImage, MainSection, ProfileContent, ProfileImage, RightContent } from "./BolgCategoriesTheme14.style";

const BlogCategoriesTheme14 = () => {

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
            <MainImage>
              <Image src={blogcat15} alt="" />
            </MainImage>
            <RightContent>
              <BlogContent>
                <h3>Now you can blog from everywhere!</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </p>
              </BlogContent>
              <ProfileContent>
                <ProfileImage>
                  <Image src={blogProfile} alt="" />
                </ProfileImage>
                <h5>James Anderson</h5>
              </ProfileContent>
            </RightContent>
          </MainContent>
        </>
      </MainSection>
    </>
  );
};

export default BlogCategoriesTheme14;
