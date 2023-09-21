import React from 'react'
import Image1 from "../../../Assets/SectionComponent/Images/GeneralPages/blog10.png"
import Image2 from "../../../Assets/SectionComponent/Images/GeneralPages/blog11.png"
import Image3 from "../../../Assets/SectionComponent/Images/GeneralPages/blog13.png"
import Image4 from "../../../Assets/SectionComponent/Images/GeneralPages/blog14.png"
import { BlogTxt, Button, HeaderText, HeadingTxt, InnerImg, Text, TittleText, Wrap, WrapContainer, WrapLt, WrapRt } from './GeneralPagesTheme10.style'
import Image from 'next/image'


let data = [
    {
        img: Image1,
        tittle: "This is a header Now you",
        Txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
    },
    {
        img: Image2,
        tittle: "This is a header Now you",
        Txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
    },
    {
        img: Image3,
        tittle: "This is a header Now you",
        Txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
    },
    {
        img: Image4,
        tittle: "This is a header Now you",
        Txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
    }


]

const ListVertical = () => {
    return (
        <>
            <HeaderText>
                <HeadingTxt>Page Title</HeadingTxt>
                <Text>This is a block description. To edit, click and type the text or replace it with your own custom content</Text>
            </HeaderText>
            <Wrap>
                {data.map((e, index) => {
                    return (
                        <WrapContainer key={index}>
                            <WrapLt><Image src={e.img} alt="" /></WrapLt>
                            <WrapRt>
                                <TittleText>{e.tittle}</TittleText>
                                <BlogTxt>{e.Txt}</BlogTxt>
                                <Button>Read more</Button>
                            </WrapRt>
                        </WrapContainer>
                    )
                })}
            </Wrap>
        </>
    )
}

export default ListVertical;