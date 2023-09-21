import Image from "next/image";
import React from "react";

import collectionlayout4 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout4.png";
import collectionlayout5 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout5.png";
import collectionlayout6 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout6.png";
import collectionlayout7 from "../../../Assets/SectionComponent/Images/Collection/collectionlayout7.png";
import { MainContent, MainHeader, MainImage, MainSection, ProductContent } from "./CollectionsTheme7.style";

const CollectionsTheme7 = () => {
  
  const ProductData = [
    {
      id: 1,
      productImage: collectionlayout4,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 2,
      productImage: collectionlayout5,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 3,
      productImage: collectionlayout6,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 4,
      productImage: collectionlayout7,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 5,
      productImage: collectionlayout6,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 6,
      productImage: collectionlayout4,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 7,
      productImage: collectionlayout6,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 8,
      productImage: collectionlayout7,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
  ];

  return (
    <>
      <MainSection>
        <MainHeader>
          <h3>SUMMAR COLLECTION</h3>
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

export default CollectionsTheme7;
