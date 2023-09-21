import React from 'react'
import image2 from '../../../Assets/SectionComponent/Images/TextPage/Rectangle1409.png'
import { BlogImg, BlogImgMain, BlogText, Button } from './TextPageTheme2.style';
import Image from 'next/image';


const TextTheme2 = () => {
  return (
    <BlogImgMain>
      <BlogText>
        <h3>Now you can blog from everywhere!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
        <Button>Read More</Button>
      </BlogText>
      <BlogImg>
        {/* <InnerImg src={image2} alt="img" /> */}
        <Image src={image2} alt="img" />
      </BlogImg>
    </BlogImgMain>
  )
}

export default TextTheme2;