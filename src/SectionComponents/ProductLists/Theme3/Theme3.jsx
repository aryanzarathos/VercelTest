import Image from "next/image";
import React from "react";
import product5 from "../../../Assets/SectionComponent/Images/productlisting/product5.png";
import product6 from "../../../Assets/SectionComponent/Images/productlisting/product6.png";
import product7 from "../../../Assets/SectionComponent/Images/productlisting/product7.png";
import product8 from "../../../Assets/SectionComponent/Images/productlisting/product8.png";
import bird from "../../../Assets/SectionComponent/Images/productlisting/bird.jpeg";
import cycle from "../../../Assets/SectionComponent/Images/productlisting/cycle.jpg";
// import ProductData from "./ProductTheme3.json"
import { MainContent, MainHeader, MainImage, MainSection, ProductContent } from "./ProductListsTheme3.style";
import { Container } from "../../../SectionCommon/Containers/Container.styled";

const ProductTheme3 = ({children}) => {
  const data = children;
  const ProductData = [
    {
      id: 1,
      productImage: product5,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 2,
      productImage: product6,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 3,
      productImage: product7,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 4,
      productImage: product8,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 5,
      productImage: product7,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 6,
      productImage: product5,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 7,
      productImage: product7,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
    {
      id: 8,
      productImage: product8,
      title: "Relaxed Fit Cotton Tshirts",
      price: "Rs.1,999.00",
    },
  ];


  // ////// console.log(data.ProductList, "ProductData.productList")
  return (
    <>
      <MainSection>
        <MainContent>
          {ProductData.map((item, key) => {
            return (
              <ProductContent key={key}>
                <MainImage>
                  <Image src={item.productImage} alt="collection_page" height={417} width={279} />
                </MainImage>
                <h5>{item.title}</h5>
                <p>{item.price}</p>
              </ProductContent>
            );
          })}
        </MainContent>
      </MainSection>
    </>
  );
};

export default ProductTheme3;
