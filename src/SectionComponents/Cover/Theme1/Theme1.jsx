import React from 'react'
import box1_img from "../../../Assets/SectionComponent/Images/Cover/Rectangle1370.png";
import Image from 'next/image';
import { Button, CoverLt, TextLt } from './CoverTheme1.style';




const CoverTheme1 = () => {
  return (
    <div>

      <CoverLt >
        <Image src={box1_img} alt="img" />
        <TextLt>
          <h1>Top-left aligned texts hfs fsk wifjij skn skj eghd fsk fioe fs euid skji fjh </h1>
          <p >This is a paragraph. Click here to edit the text. It’s easy. Just
            click here to add your own content and make changes to it. here to add your own content and make changes to it.This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it This is a paragraph. Click here to edit the text. It’s easy. Just click here to add your own content and make changes to it. d your own content and make changes to it d your own content and make changes to it</p>
          <Button className='button'>Button</Button>
        </TextLt>
      </CoverLt>
    </div>
  )
}

export default CoverTheme1
