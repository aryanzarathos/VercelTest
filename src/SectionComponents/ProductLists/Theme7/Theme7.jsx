import React, { useRef, useState } from "react";
import {  MainContent, MainHeader, ProductWrap, OfferWrap, MainImage, MainSection, PrdoductDescription, ProductContent } from "./ProductListsTheme7.style";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import Slider from "@/SectionCommon/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Modal from "@/SectionCommon/Modal";
import ModalBody from "@/CommonComponents/Modal/ModalBody";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import usePriceDifference from "@/CustomHooks/usePriceDifference";
import useAddToCartStyle from "@/TemplateCustomHooks/useAddToCartStyle";
import dynamic from "next/dynamic";
const WishlistPopUp = dynamic(() => import("../../WishlistPopUp/Theme1/Theme1"));
import Button from "@/SectionsLayout/Elements/ButtonElement/ButtonElement";
import { dummyImg, dummyImgProduct } from "../../../Constant/constants";

const ProductTheme7 = ({ children }) => {

  const data = children;
  const ProductData = data.data;
  const popUpHandle = useRef();
  const [prodId, setprodId] = useState("");
  const navigate = useAppNavigate();
  const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
  const [AddToWishListPopUp] = useAddToCartStyle()
  const tabsData = {
    tabs: ["Grid", "Text", "Button"],
    content:
    {
      Grid: {
        renderTab: "Grid",
      },

      Text: {
        renderTab: "Text",
      },
      Button: {
        renderTab: "Button",
      },

    }

  }


  let styles = {
    mainSection: data.custom_section_editable[0].style,
    MainContent: data.custom_section_editable[1].style,
    card: data.custom_section_editable[2].style,
    heading: data.custom_section_editable[3],
    price: data.custom_section_editable[4],
    button: data.custom_section_editable[5],
    mainImage: data.custom_section_editable[6].style,
    cardImage: data?.custom_section_editable[7]?.style,
    oldPrice: data.custom_section_editable[8],
    perOff: data.custom_section_editable[9],
    OfferWrap: data?.custom_section_editable[10]?.style,
    GridCount: data.style,
    GridView: data.style.desktop.objectView
  }

  const HandleClick = (slug) => {
    navigate(`product-details/${slug}/`)
  }

  const handlePopUp = (slug) => {
    if (popUpHandle.current) {
      setprodId(slug)
      popUpHandle?.current?.open()
    }
  }

  return (

    <MediaGallery sectionName={"ProductSection"} manageText={"Manage Product"} tabs={tabsData} arrayofImages={true} fieldName={"productPicture"} fieldIdLabel={"_id"} data={data}>
      <MainSection item={styles.mainSection}>
        {
          (styles.GridView).toLowerCase() === "grid".toLowerCase() ? (

            <MainContent itemProp={styles.MainContent} itemProp1={styles.GridCount}>
              {ProductData && ProductData?.length && ProductData[0]?.productlist.length > 0 &&
                ProductData[0]?.productlist?.map((item, key) => {
                  return (
                    <ProductContent itemProp={styles.card} key={key}>
                      <MainImage itemProp={styles.mainImage} onClick={() => HandleClick(item.urlSlug)}>
                        <ImageElement
                          style={styles.cardImage}
                          src={item?.productPicture[0]}
                          alt={`Product ${key}`}
                          defaultImage={dummyImg}
                        />
                      </MainImage>
                      <PrdoductDescription>
                        <ProductWrap>
                          <Text style={styles.heading.style} text={item?.productName} />
                          <Text style={styles.price.style} text={shopProductsPriceDiff(item)} />
                          <OfferWrap itemProp={styles?.OfferWrap}>
                            {item?.discountPercentage > 0 ?
                              <Text
                                tagType={styles?.oldPrice?.tagType}
                                style={styles?.oldPrice?.style}
                              >
                                <del>{`${shopProductsActualPrice((item))}`}</del>
                              </Text>
                              : ""
                            }
                            <Text tagType={styles?.perOff?.tagType} text={discount(item) ? `(${discount(item)} off)`

                              : ''} style={styles?.perOff?.style} />
                          </OfferWrap>
                        </ProductWrap>
                        {/* <Button itemProp={styles.button.style} onClick={() => handlePopUp(item?.urlSlug)}  >ADD TO CART</Button> */}
                        <Button style={styles.button.style} text={styles.button.text} onClick={() => handlePopUp(item.urlSlug)} />

                      </PrdoductDescription>
                    </ProductContent>
                  );
                })}
            </MainContent>
          ) :
            <Slider  {...data}>
              {ProductData && ProductData?.length && ProductData[0]?.productlist.length > 0 &&
                ProductData[0]?.productlist?.map((item, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <ProductContent itemProp={styles.card} key={key}>
                        <MainImage itemProp={styles.mainImage} onClick={() => HandleClick(item.urlSlug)} >
                          <ImageElement
                            style={styles.cardImage}
                            src={item?.productPicture[0]}
                            alt={`Product ${key}`}
                            defaultImage={dummyImg}
                          />
                        </MainImage>
                        <PrdoductDescription>
                          <ProductWrap>
                            <Text style={styles.heading.style} text={item?.productName} />
                            <Text style={styles.price.style} text={shopProductsPriceDiff(item)} />
                            <OfferWrap itemProp={styles?.OfferWrap}>
                              {item?.discountPercentage > 0 ?
                                <Text
                                  tagType={styles?.oldPrice?.tagType}
                                  style={styles?.oldPrice?.style}
                                >
                                  <del> {`${shopProductsActualPrice((item))}`}</del>
                                </Text>
                                : ""
                              }
                              <Text tagType={styles?.perOff?.tagType} text={discount(item) ? `(${discount(item)} off)`
                                : ''} style={styles?.perOff?.style} />
                            </OfferWrap>
                          </ProductWrap>
                          {/* <Button itemProp={styles.button.style} onClick={() => handlePopUp(item?.urlSlug)}  >ADD TO CART</Button> */}
                          <Button style={styles.button.style} text={styles.button.text} onClick={() => handlePopUp(item.urlSlug)} />

                        </PrdoductDescription>
                      </ProductContent>
                    </SwiperSlide>
                  );
                })}
            </Slider>
        }
      </MainSection>
      <Modal ref={popUpHandle} ModalsSize={'modal-xl'}>
        <ModalBody>
          {/* <WishlistPopUp WishlistPopupStyle={AddToWishListPopUp().WishlistPopupStyle} style4Slider={AddToWishListPopUp().style4Slider} prodId={prodId} /> */}
          <WishlistPopUp popUpHandleRef={popUpHandle} WishlistPopupStyle={AddToWishListPopUp().WishlistPopupStyle} style4Slider={AddToWishListPopUp().style4Slider} prodId={prodId} fromWhere={"home"} />

        </ModalBody>
      </Modal>
    </MediaGallery>

  );
};

export default ProductTheme7;
