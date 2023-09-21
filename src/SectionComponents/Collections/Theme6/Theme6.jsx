import Image from "next/image";
import React from "react";
import collectionlayout1 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout1.png";
import collectionlayout2 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout2.png";
import collectionlayout3 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout3.png";
import bird from "../../../Assets/SectionComponent/Images/Collection/bird.jpeg";
import cycle from "../../../Assets/SectionComponent/Images/Collection/cycle.jpg";
import { MainContent, MainHeader, MainImage, MainSection, ProductContent } from "./CollectionsTheme6.style";

const CollectionsTheme6 = () => {
  
  const ProductData = [
    {
      id: 1,
      productImage: collectionlayout1,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 2,
      productImage: collectionlayout2,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 3,
      productImage: collectionlayout3,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 4,
      productImage: bird,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 5,
      productImage: cycle,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 6,
      productImage: collectionlayout2,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
  ];

  return (
    <>
      <MainSection>
        <MainHeader>
          <h3>NEW ARRIVAL</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laudantium.
          </h5>
        </MainHeader>
        <>
          <MainContent>
            {ProductData?.map((item,key) => {
              const { productImage, title, price } = item;
              return (
                <ProductContent key={key}>
                  <MainImage>
                    <Image src={productImage} alt="collection_page" />
                  </MainImage>
                  <h5>{title}</h5>
                  <p>{price}</p>
                </ProductContent>
              );
            })}
          </MainContent>
        </>
      </MainSection>
    </>
  );
};

export default CollectionsTheme6;
