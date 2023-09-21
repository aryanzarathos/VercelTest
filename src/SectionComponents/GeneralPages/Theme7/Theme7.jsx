import Image from 'next/image';
import React from 'react'
import Image1 from "../../../Assets/SectionComponent/Images/GeneralPages/blog1.png"
import Image2 from "../../../Assets/SectionComponent/Images/GeneralPages/blog2.png"
import Image3 from "../../../Assets/SectionComponent/Images/GeneralPages/blog3.png"
import Image4 from "../../../Assets/SectionComponent/Images/GeneralPages/blog4.png"
import { BlogHeading, BlogPara, BlogTxt, Buton, ButtonItem, HeaderText, HeadingTxt, ImgItem, ImgTxt, ImgTxtItem, Text, TittleText, Wrap } from './GeneralPagesTheme7.style';
let data = [
  { img: Image1, tittle: "Block Title", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { img: Image2, tittle: "Block Title", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { img: Image3, tittle: "Block Title", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { img: Image4, tittle: "Block Title", text: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
]

const ListHorizantal = () => {
  return (
    <>
      <HeaderText>
        <HeadingTxt>Page Title</HeadingTxt>
        <Text>This is a block description. To edit, click and type the text or replace it with your own custom content</Text>
      </HeaderText>
      <Wrap>
        {data.map((e, index) => {
          return (
            <ImgTxtItem key={index}>
              <ImgItem><Image src={e.img} alt="" /></ImgItem>
              <ImgTxt>
                <BlogHeading>{e.tittle}</BlogHeading>
                <BlogTxt>{e.text}</BlogTxt>
              </ImgTxt>
            </ImgTxtItem>
          )
        })}
      </Wrap>
      <TittleText>Block Title</TittleText>
      <BlogPara>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </BlogPara>
      <ButtonItem>
        <Buton>Button</Buton>
      </ButtonItem>
    </>
  )
}

export default ListHorizantal