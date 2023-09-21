import Image from "next/image";
import React from "react";
import product2 from "../../../Assets/SectionComponent/Images/productlisting/product2.png";
import product3 from "../../../Assets/SectionComponent/Images/productlisting/product3.png";
import product4 from "../../../Assets/SectionComponent/Images/productlisting/product4.png";
import bird from "../../../Assets/SectionComponent/Images/Collection/bird.jpeg";
import cycle from "../../../Assets/SectionComponent/Images/Collection/cycle.jpg";
import { Button, MainContent, MainHeader, MainImage, MainSection, ProductContent } from "./ProductListsTheme6.style";

const ProductTheme6 = () => {

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
          <h3>NEW ARRIVAL</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laudantium.
          </h5>
        </MainHeader>
        <MainContent>
          {ProductData?.map((item, key) => {
            const { productImage, title, price } = item;
            return (
              <ProductContent key={key}>
                <MainImage>
                  <Image src={productImage} alt="collection_page" />
                </MainImage>
                <h5>{title}</h5>
                <p>{price}</p>
                {/* <Button>ADD TO CART</Button> */}
                <Button style={styles.button.style} text={styles.button.text} onClick={() => handlePopUp(item.urlSlug)} />

              </ProductContent>
            );
          })}
        </MainContent>
      </MainSection>
    </>
  );
};

export default ProductTheme6;
