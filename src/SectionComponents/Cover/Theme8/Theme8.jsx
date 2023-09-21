import React from 'react'
import box8_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1377.png";

import styled from 'styled-components';
import Image from 'next/image';
import { Button, CoverCb, TextCb } from './CoverTheme8.style';


const CoverTheme8 = () => {
  return (
    <CoverCb>
      <Image src={box8_img} alt="img" />
      <TextCb>
        <h1>Left-center aligned texts Top-center aligned texts</h1>
        <p >This is a paragraph. Click here to edit the text. It’s easy. Just
          click here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
        <Button className='button'>Button</Button>
      </TextCb>
    </CoverCb>
  )
}

export default CoverTheme8
