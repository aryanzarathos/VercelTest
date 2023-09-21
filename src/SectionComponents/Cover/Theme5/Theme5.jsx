import React from 'react'
import box5_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1374.png";

import Image from 'next/image';
import { Button, CoverCt, TextCt } from './CoverTheme5.style';


const CoverTheme5 = () => {
  return (
    <CoverCt>
      <Image src={box5_img} alt="img" />
      <TextCt>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextCt>
    </CoverCt>
  )
}

export default CoverTheme5
