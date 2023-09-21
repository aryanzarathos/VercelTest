import React from 'react'
import box7_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1376.png";
import Image from 'next/image';
import { Button, CoverLb, TextLb } from './CoverTheme7.style';

const CoverTheme7 = () => {
  return (
    <CoverLb>
      <Image src={box7_img} alt="img" />
      <TextLb>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextLb>
    </CoverLb>
  )
}

export default CoverTheme7
