import React from 'react'
import image9 from "../../../Assets/SectionComponent/Images/Category/Rectangle226.png";
import image10 from "../../../Assets/SectionComponent/Images/Category/Rectangle1227.png";
import image11 from "../../../Assets/SectionComponent/Images/Category/Rectangle1229.png";
import Image from 'next/image';
import { CategoryThird, HeaderText, ImageContainer3 } from './CategoryLayoutTheme3.style';


const CategoryTheme3 = () => {
  let data = [
    { img: image9, name: "Lovida Barrel Chair" },
    { img: image10, name: "Lovida Barrel Chair" },
    { img: image11, name: "Lovida Barrel Chair" }
  ];

  return (
    <div>
      <HeaderText><h1>CATEGORY 3</h1>  <p>Subheading</p></HeaderText>
      <CategoryThird>

        {data.map((e,index) => {
          return (
            <ImageContainer3 key={index}>
              <Image src={e.img} alt="img" />
              <h2>{e.name}</h2>
            </ImageContainer3>
          )
        })}

      </CategoryThird>
    </div>
  )
}

export default CategoryTheme3
