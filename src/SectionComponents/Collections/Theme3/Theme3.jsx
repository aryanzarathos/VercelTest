import React from "react";
// import './CollectionFirst.scss'
import Image1 from "../../../Assets/SectionComponent/Images/Collection/collection1.png";
import Image2 from "../../../Assets/SectionComponent/Images/Collection/collection2.png";
import Image3 from "../../../Assets/SectionComponent/Images/Collection/collection3.png";
import Image4 from "../../../Assets/SectionComponent/Images/Collection/collection4.png";
import Image5 from "../../../Assets/SectionComponent/Images/Collection/collection5.png";
import Image6 from "../../../Assets/SectionComponent/Images/Collection/collection6.png";
import Image7 from "../../../Assets/SectionComponent/Images/Collection/collection7.png";
import Image8 from "../../../Assets/SectionComponent/Images/Collection/collection8.png";
import Image from "next/image";
import { Button, ButtonSection, CollectionThirdContainer, Combination, Discount, HeaderText, ImageSection, ImgMain } from "./CollectionsTheme3.style";

let data = [
  {
    img: Image1,
    name: "Morbius",
    price: "Rs. 490.00",
    discountPrice: "Rs. 520.00",
    off: "(25% off)",
  },
  { img: Image2, name: "Electra", price: "Rs. 790.00" },
  { img: Image3, name: "Tom Hank", price: "Rs. 450.00" },
  { img: Image4, name: "Roseliette", price: "Rs. 1600.00" },
  {
    img: Image5,
    name: "Hooper",
    price: "Rs. 490.00",
    discountPrice: "Rs. 520.00",
    off: "(25% off)",
  },
  {
    img: Image6,
    name: "Air Tagged",
    price: "Rs. 450.00",
    discountPrice: "Rs. 900.00",
    off: "(50% off)",
  },
  { img: Image7, name: "Robetto", price: "Rs. 4500.00" },
  { img: Image8, name: "Ferrero Heur", price: "Rs. 1600.00" },
];

const CollectionsTheme3 = () => {
  return (
    <CollectionThirdContainer>
      <HeaderText>
        <h3>Best Sellers</h3>
        <h2>Subheading</h2>
      </HeaderText>
      <>
        <Combination>
          {data.map((elm, key) => {
            return (
              <ImageSection key={key}>
                <ImgMain>
                  <Image src={elm.img} alt="" />
                </ImgMain>
                <h3>{elm.name}</h3>
                <h2>{elm.price}</h2>

                <Discount>
                  <h6>
                    {" "}
                    <del> {elm.discountPrice}</del>
                  </h6>
                  <p>{elm.off}</p>
                </Discount>
              </ImageSection>
            );
          })}
        </Combination>
      </>
      <ButtonSection>
        <Button>View All</Button>
      </ButtonSection>
    </CollectionThirdContainer>
  );
};

export default CollectionsTheme3;
