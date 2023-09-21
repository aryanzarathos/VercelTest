import Image from 'next/image';
import React from 'react'
import Image1 from "../../../Assets/SectionComponent/Images/GeneralPages/blog5.png"
import Image2 from "../../../Assets/SectionComponent/Images/GeneralPages/blog6.png"
import Image3 from "../../../Assets/SectionComponent/Images/GeneralPages/blog7.png"
import Image4 from "../../../Assets/SectionComponent/Images/GeneralPages/blog8.png"
import Image5 from "../../../Assets/SectionComponent/Images/GeneralPages/blog9.png"
import { BlogPara, BlogParaItem, Buton, ButtonItem, HeaderText, HeadingTxt, Text, TittleTextSecond, WrapFistFigure, WrapSecond, WrapSecondFigure, Wrapfirst } from './GeneralPagesTheme8.style';

let data1 = [
  { img: Image1 }, { img: Image2 }
];
let data2 = [
  { img: Image3 }, { img: Image4 }, { img: Image5 }
]
const data3 = [
  { para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
  { para: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32.' }
]

const Imagery = () => {
  return (
    <>
      <HeaderText>
        <HeadingTxt>Page Title</HeadingTxt>
        <Text>This is a block description. To edit, click and type the text or replace it with your own custom content</Text>
      </HeaderText>
      <Wrapfirst>
        {data1.map((e, index) => {
          return (
            <WrapFistFigure key={index}>
              <Image src={e.img} alt="" />
            </WrapFistFigure>
          )
        })}
      </Wrapfirst>
      <WrapSecond>
        {data2.map((e, index) => {
          return (
            <WrapSecondFigure key={index}>
              <Image src={e.img} alt="" />
            </WrapSecondFigure>
          )
        })}
      </WrapSecond>
      <TittleTextSecond>Block Title</TittleTextSecond>
      <BlogParaItem>
        {data3.map((e, index) => {
          return (
            <BlogPara key={index}>{e.para}</BlogPara>
          )
        })}
      </BlogParaItem>
      <ButtonItem>
        <Buton>Button</Buton>
      </ButtonItem>
    </>
  )
}

export default Imagery;