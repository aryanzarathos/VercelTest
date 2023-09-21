import React from 'react'
import image3 from '../../../Assets/SectionComponent/Images/TextPage/Rectangle1424.png'
import Image from 'next/image';
import { BottomImg, BottomImgMain, Button, LTMainBottom, RTMainBottom } from './TextPageTheme7.style';

const TextTheme7 = () => {
  return (
    <BottomImgMain>
      <LTMainBottom>
        <h2>This is a header Now you can blog from everywhere!</h2>
        <BottomImg className='bottomImg'>
          {/* <InnerImg src={image3} alt="img" /> */}
          <Image src={image3} alt="img" />
        </BottomImg>
      </LTMainBottom>
      <RTMainBottom>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
        <Button>Read More</Button>
      </RTMainBottom>
    </BottomImgMain>
  )
}

export default TextTheme7