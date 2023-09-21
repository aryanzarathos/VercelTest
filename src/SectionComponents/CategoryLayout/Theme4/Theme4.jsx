import React from 'react'
import image12 from "../../../Assets/SectionComponent/Images/Category/Rectangle827.png";
import image13 from "../../../Assets/SectionComponent/Images/Category/Rectangle1231.png";
import image14 from "../../../Assets/SectionComponent/Images/Category/Rectangle1233.png";
import Image from 'next/image';
import { Categoryfourth, HeaderText, ImageContainer4 } from './CategoryLayoutTheme4.style';


const CategoryTheme4 = () => {
  let data = [
    { img: image12, name: "Lovida Barrel Chair" },
    { img: image13, name: "Lovida Barrel Chair" },
    { img: image14, name: "Lovida Barrel Chair" }
  ];

  return (
    <div>
      <HeaderText><h1>CATEGORY 4</h1><p>Subheading</p> </HeaderText>
      <Categoryfourth>
        {data.map((e,index) => {
          return (
            <ImageContainer4 key={index}>
              <Image src={e.img} alt="img" />
              <h2>{e.name}</h2>
            </ImageContainer4>
          )
        })}
      </Categoryfourth>
    </div>
  )
}

export default CategoryTheme4
