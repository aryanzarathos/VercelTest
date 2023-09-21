import React from "react";
import ProductTheme2 from "./Theme2/Theme2";
import ProductTheme3 from "./Theme3/Theme3";
import ProductTheme4 from "./Theme4/Theme4";
import ProductTheme5 from "./Theme5/Theme5";
import ProductTheme6 from "./Theme6/Theme6";
import ProductTheme7 from "./Theme7/Theme7";
import ProductTheme1 from "./Theme1/Theme1";

const ProductListSection = () => {
  return (
    <>
      <ProductTheme2 />
      <ProductTheme1 />
      <ProductTheme3 />
      <ProductTheme4 />
      <ProductTheme5 />
      <ProductTheme6 />
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <ProductTheme7 />
      </div>
    </>
  );
};

export default ProductListSection;
