import React, { useEffect } from 'react';
// import ContinerLayout from '../../../../SectionsLayout/ContainerLayout/index'
import GlobalStyle from '../../GlobalCss/GlobalStyles';
import GlobalCss from "../../GlobalCss.json"
// import data from "../../../../DynamicCssFile/ContactUs/ContactTheme6/ContactUsTheme6.json";
// import RenderComponent from '../../../../SectionsLayout/RendersComponent/RenderComponent';
import ContinerLayout from '../../../../SectionsLayout/ContainerLayout';
// import bannertheme2Data from "../../../../DynamicCssFile/Banner/Theme2/banner.json"
// import data from "../../../../DynamicCssFile/ContactUs/ContactTheme6/ContactUsTheme6.json"
// import product from "../../../../DynamicCssFile/ProductList/ProductTheme3.json"
// import product1 from "../../../../DynamicCssFile/ProductList/ProductTheme1.json"
// import TopHeader from "../../../../DynamicCssFile/TopHeader/TopHeader.json"
// import header from "../../../../DynamicCssFile/Header/Header1.json";
// import HomeJson from "./HomePageStyle.json";
// import category from "../../../../DynamicCssFile/Category/CategoryTheme1.json"
// import FeatureCollection from "../../../../DynamicCssFile/FeatureCollection/featureColllection.json";
import SideFilter from "../../../../DynamicCssFile/SideFilter/SideFilter.json";
// import RenderComponent from "../../../../../RendersComponent/RenderComponent"

const HomeLayout = () => {
  useEffect(() => {

    // get the root elements
    const root = document.querySelector(":root");
    for (let globalcss of GlobalCss.globalTheme) {
      for (let globalcssitem in globalcss) {
        // set property of all object in root element 
        root.style.setProperty(`--${globalcssitem}`, globalcss[globalcssitem])
      }

    }

  }, [])

  // React.createElement(RenderComponent[sectionData.componentRender], null, sectionData.data)
  return (
    <>
      <GlobalStyle />
      <ContinerLayout data={TopHeader} /> 
      {/* <React.Fragment>
      {HomeJson.data.map((item,key)=>{
        return (
          <>
          {////// console.log(item,"pikachu CHECK")}
          {React.createElement(RenderComponent[item.componentRender],null,item)}
          </>
        )
      })}
      </React.Fragment> */}

      {/* <ContinerLayout data={header} />
      <ContinerLayout data={bannertheme2Data} />
      <ContinerLayout data={product} />
      <ContinerLayout data={category} />
      <ContinerLayout data={FeatureCollection} />
      {/* <ContinerLayout data={product1} /> */}
      <ContinerLayout data={SideFilter} />


    </>

  )
}

export default HomeLayout