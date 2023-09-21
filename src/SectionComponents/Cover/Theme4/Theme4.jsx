import React from 'react'
import box4_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1373.png";
import Image from 'next/image';
import { Button, CoverLc, TextLc } from './CoverTheme4.style';

const CoverTheme4 = () => {
  return (
    <CoverLc>
      <Image src={box4_img} alt="img" />
      <TextLc>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextLc>
    </CoverLc>
  )
}

export default CoverTheme4
