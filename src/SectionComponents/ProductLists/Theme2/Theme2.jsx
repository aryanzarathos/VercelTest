import Image from "next/image";
import React from "react";
import styled from "styled-components";
import product2 from "../../../Assets/SectionComponent/Images/productlisting/product2.png";
import product3 from "../../../Assets/SectionComponent/Images/productlisting/product3.png";
import product4 from "../../../Assets/SectionComponent/Images/productlisting/product4.png";
import bird from "../../../Assets/SectionComponent/Images/productlisting/bird.jpeg";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
import { MainContent, MainHeader, MainImage, MainSection, ProductContent } from "./ProductListsTheme2.style";

const ProductTheme2 = () => {

  const ProductData = [
    {
      id: 1,
      productImage: product2,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 2,
      productImage: product3,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
    {
      id: 3,
      productImage: product4,
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
      productImage: product3,
      title: "Valencia Barrel Chair in Blue & Pink Colour",
      price: "₹13,200",
    },
  ];

  return (
    <>
      <MainSection>
        <MainHeader>
          <h3>Product List 2</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laudantium.
          </h5>
        </MainHeader>
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
      </MainSection>
    </>
  );
};

export default ProductTheme2;
