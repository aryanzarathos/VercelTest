import React from 'react'
import box9_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1378.png";
import Image from 'next/image';
import { Button, CoverRb, TextRb } from './CoverTheme9.style';

const CoverTheme9 = () => {
  return (
    <CoverRb>
      <Image src={box9_img} alt="img" />
      <TextRb>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it d your own content and make changes to it d your own content and make changes to igit </p>
        <Button className='button'>Button</Button>
      </TextRb>
    </CoverRb>
  )
}

export default CoverTheme9
