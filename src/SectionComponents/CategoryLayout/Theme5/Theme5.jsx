import React from 'react';
// import './CollectionFirst.scss';
import image10 from '../../../Assets/SectionComponent/Images/Collection/collection13.png'
import image11 from '../../../Assets/SectionComponent/Images/Collection/collection14.png'
import image12 from '../../../Assets/SectionComponent/Images/Collection/collection15.png'
import image13 from '../../../Assets/SectionComponent/Images/Collection/collection16.png'
import image14 from '../../../Assets/SectionComponent/Images/Collection/collection17.png'
import image15 from '../../../Assets/SectionComponent/Images/Collection/collection18.png'
import image16 from '../../../Assets/SectionComponent/Images/Collection/collection19.png'
import image17 from '../../../Assets/SectionComponent/Images/Collection/collection20.png'
import Image from 'next/image';
import { Caption, CollectonSecondContainer, HeaderText, ImageItem, ImageMain, ImageSection, Wrap } from './CategoryLayoutTheme5.style';


let datafirst = [
  { img: image10, Caption: "Computer Glasses" },
  { img: image11, Caption: 'Kids Glasses' },
  { img: image12, Caption: "Contact Lenses" },
  { img: image13, Caption: "Sunglasses" },
  { img: image14, Caption: "Wayfarers" },
  { img: image15, Caption: "Zero Power Computer  Glasses" },
  { img: image16, Caption: "Power Sunglasses" },
  { img: image17, Caption: "Designer Sunglasses" }];


const CategoryTheme5 = () => {
  return (
    <CollectonSecondContainer>

      <HeaderText>
        <h1>Categories</h1>
        <h2>Subheading</h2>
      </HeaderText>
      <ImageSection>

        <Wrap>
          {datafirst.map((elm, index) => {
            return (
              <ImageItem key={index}>
                <ImageMain>
                  <Image src={elm.img} alt="img" />
                </ImageMain>
                <Caption>{elm.Caption}</Caption>
              </ImageItem>
            )
          })}
        </Wrap>

      </ImageSection>
    </CollectonSecondContainer>
  )
}

export default CategoryTheme5;