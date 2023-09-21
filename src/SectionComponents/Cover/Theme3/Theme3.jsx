import React from 'react'
import box3_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1372.png";
import Image from 'next/image';
import { Button, CoverRt, TextRt } from './CoverTheme3.style';


const CoverTheme3 = () => {
  return (
    <CoverRt >
      <Image src={box3_img} alt="img" />
      <TextRt>
        <h1>Top-right aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextRt>
    </CoverRt>
  )
}

export default CoverTheme3
