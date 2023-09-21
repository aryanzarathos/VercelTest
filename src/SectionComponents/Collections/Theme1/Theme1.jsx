import React from "react";
// import"../Theme/CollectionFirst.scss"
import Slider from "react-slick";
import Image1 from "../../../Assets/SectionComponent/Images/Collection/collection1.png";
import Image2 from "../../../Assets/SectionComponent/Images/Collection/collection2.png";
import Image3 from "../../../Assets/SectionComponent/Images/Collection/collection3.png";
import Image4 from "../../../Assets/SectionComponent/Images/Collection/collection4.png";
import Image from "next/image";
import { CollectionFirstContainer, ContainerFirst, Discount, HeaderText, ImageItem, ImgContainer } from "./CollectionsTheme1.style";

let data = [
  { img: Image1, discount: "20%", name: "Morbius", price: "Rs. 490.00" },
  { img: Image2, name: "Electra", price: "Rs. 790.00" },
  { img: Image3, name: "Tom Hank", price: "Rs. 490.00" },
  { img: Image4, name: "Roseliette", price: "Rs. 790.00" },
  { img: Image1, name: "Roseliette", price: "Rs. 490.00" },
];

const CollectionsTheme1 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CollectionFirstContainer>
      <HeaderText>
        <h1>Wear the trend</h1>
        <h2>Subheading</h2>
      </HeaderText>
      <>
        <ContainerFirst>
          <Slider {...settings}>
            {data.map((elem, index) => {
              return (
                <ImageItem key={index}>
                  <ImgContainer>
                    <Image src={elem.img} alt="img" />
                  </ImgContainer>
                  <h3>{elem.name}</h3>
                  <h2>{elem.price}</h2>
                  {elem.discount ? (
                    <Discount>
                      <h6>
                        {" "}
                        <del> Rs. 520.00</del>
                      </h6>
                      <p>(25% off)</p>
                    </Discount>
                  ) : (
                    ""
                  )}
                </ImageItem>
              );
            })}
          </Slider>
        </ContainerFirst>
      </>
    </CollectionFirstContainer>
  );
};

export default CollectionsTheme1;
