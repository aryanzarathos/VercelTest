import React from 'react'
import box6_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1375.png";

import Image from 'next/image';
import { Button, CoverRc, TextRc } from './CoverTheme6.style';

const CoverTheme6 = () => {
  return (
    <CoverRc>
      <Image src={box6_img} alt="img" />
      <TextRc>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextRc>
    </CoverRc>
  )
}

export default CoverTheme6
