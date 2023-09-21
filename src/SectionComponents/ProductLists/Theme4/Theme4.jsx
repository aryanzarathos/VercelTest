// import Image from "next/image";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const WishlistPopUp = dynamic(() => import("../../WishlistPopUp/Theme1/Theme1"));
import { Heading, Paragraph, MainContent,ModalBody, MainImage, MainSection, ProductContent, OfferWrap, SliderWrapper } from "./ProductListsTheme4.style";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "../../../SectionsLayout/Elements/TextElement/Text";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import useAppNavigate from "../../../CustomHooks/useAppNavigate";
import usePriceDifference from "../../../CustomHooks/usePriceDifference";
import useAddToCartStyle from "../../../TemplateCustomHooks/useAddToCartStyle";
import Modal from "../../../SectionCommon/Modal";
// import ModalBody from "../../../SectionCommon/Modal/ModalBody";
import Slider from "../../../SectionCommon/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { dummyImg, dummyImgProduct } from "../../../Constant/constants";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";

const ProductTheme4 = ({ children }) => {
  const data = children;
  let styles = {
    mainSection: data.custom_section_editable[0].style,
    MainContent: data.custom_section_editable[1].style,
    card: data.custom_section_editable[2].style,
    h5: data.custom_section_editable[3],
    p: data.custom_section_editable[4],
    button: data.custom_section_editable[5],
    mainImage: data.custom_section_editable[6].style,
    cardImage: data?.custom_section_editable[7]?.style,
    oldPrice: data.custom_section_editable[8],
    perOff: data.custom_section_editable[9],
    OfferWrap: data?.custom_section_editable[10]?.style,
    GridCount: data.style,
    GridView: data.style.desktop.objectView
  }

  const [prodId, setprodId] = useState("");

  const navigate = useAppNavigate();
  const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
  const [AddToWishListPopUp] = useAddToCartStyle()
  const HandleClick = (slug) => {
    navigate(`product-details/${slug}/`)
  }

  const popUpHandle = useRef(null)

  const handlePopUp = (slug) => {
    if (popUpHandle.current) {
      setprodId(slug)
      popUpHandle?.current?.open()
    }
  }


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

  return (
    <>
      <MediaGallery sectionName={"ProductSection"} manageText={"Manage Product"} tabs={tabsData} arrayofImages={true} fieldName={"productPicture"} fieldIdLabel={"_id"} data={data}>
        <MainSection item={styles.mainSection}>
          {
            (styles.GridView).toLowerCase() === "Grid".toLowerCase() ? (
              <MainContent itemProp={styles.MainContent} gridCount={styles.GridCount}>
                {data?.data[0]?.productlist.length > 0 && data?.data[0]?.productlist.map((item, key) => {
                  return (
                    <ProductContent itemProp={styles.card} key={key}>
                      <MainImage itemProp={styles.mainImage} onClick={() => HandleClick(item.urlSlug)}>
                        <ImageElement
                          style={styles.cardImage}
                          src={item?.productPicture[0]}
                          alt={`Product ${key}`}
                          defaultImage={dummyImg}
                        />
                        {
                          // <ImageElement data={styles.img} src={item.productImage} alt={`collection_page ${key}`}/>
                          // <Image src={item.productImage} alt={`collection_page ${key}`} objectPosition={styles.img.desktop.objectPosition} objectFit={styles.img.desktop.objectFit} height={styles.img.desktop.height} width={styles.img.desktop.width} />
                        }
                      </MainImage>


                      <Text tagType={styles?.h5?.tagType} text={item?.productName} style={styles.h5.style} />
                      {/* <Heading itemProp={styles.h5}>{item.title}</Heading> */}
                      <Text tagType={styles.p.tagType} text={shopProductsPriceDiff(item)} style={styles.p.style} />

                      <OfferWrap itemProp={styles?.OfferWrap} >

                        {item?.discountPercentage > 0 ?
                          <Text
                            tagType={styles?.oldPrice?.tagType}
                            style={styles?.oldPrice?.style}
                          >{`${shopProductsActualPrice((item))}`}</Text>
                          : ""
                        }
                        <Text tagType={styles?.perOff?.tagType} text={discount(item) ? `(${discount(item)} off)` : ''} style={styles?.perOff?.style} />

                      </OfferWrap>
                      {/* <Paragraph itemProp={styles.p}>{item.price}</Paragraph> */}
                      {/* <Button style={styles.button.style} text={styles.button.text} onClick={(Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) ? () => addToCartHandler("", item, 1) : () => addToCartHandler("GuestLogin", item, 1)} /> */}
                      <Button style={styles.button.style} text={styles.button.text} onClick={() => handlePopUp(item.urlSlug)} />
                      {/* <Button itemProp={styles.button}>ADD TO CART</Button> */}
                    </ProductContent>
                  );
                })}

              </MainContent>
            ) : (
              <SliderWrapper>
                <Slider  {...data}>
                  {data?.data[0]?.productlist.length > 0 && data?.data[0]?.productlist.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <ProductContent itemProp={styles.card} >
                          <MainImage itemProp={styles.mainImage} onClick={() => HandleClick(item.urlSlug)}>
                            <ImageElement
                              style={styles.cardImage}
                              src={item.productPicture[0]}
                              alt={`Product ${key}`}
                              defaultImage={dummyImg}
                            />
                            {
                              // <ImageElement data={styles.img} src={item.productImage} alt={`collection_page ${key}`}/>
                              // <Image src={item.productImage} alt={`collection_page ${key}`} objectPosition={styles.img.desktop.objectPosition} objectFit={styles.img.desktop.objectFit} height={styles.img.desktop.height} width={styles.img.desktop.width} />
                            }
                          </MainImage>
                          <Text tagType={styles.h5.tagType} text={item.productName} style={styles.h5.style} />
                          {/* <Heading itemProp={styles.h5}>{item.title}</Heading> */}
                          <Text tagType={styles.p.tagType} text={shopProductsPriceDiff(item)} style={styles.p.style} />
                          <OfferWrap itemProp={styles.OfferWrap} >

                            {item?.discountPercentage > 0 ?
                              <Text
                                tagType={styles?.oldPrice?.tagType}
                                style={styles?.oldPrice?.style}
                              ><del> {`${shopProductsActualPrice((item))}`}</del></Text>
                              : ""
                            }
                            <Text tagType={styles?.perOff?.tagType} text={discount(item) ? `(${discount(item)} off)` : ''} style={styles?.perOff?.style} />

                          </OfferWrap>
                          {/* <Paragraph itemProp={styles.p}>{item.price}</Paragraph> */}
                          {/* <Button style={styles.button.style} text={styles.button.text} onClick={(Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) ? () => addToCartHandler("", item, 1) : () => addToCartHandler("GuestLogin", item, 1)} /> */}
                          <Button style={styles.button.style} text={styles.button.text} onClick={() => handlePopUp(item.urlSlug)} />
                          {/* <Button itemProp={styles.button}>ADD TO CART</Button> */}
                        </ProductContent>
                      </SwiperSlide>
                    );
                  })}
                </Slider>
              </SliderWrapper>
            )



          }

        </MainSection>
        <Modal ref={popUpHandle} ModalsSize={'modal-xl'}>
          <ModalBody>
            <WishlistPopUp popUpHandleRef={popUpHandle} WishlistPopupStyle={AddToWishListPopUp().WishlistPopupStyle} style4Slider={AddToWishListPopUp().style4Slider} prodId={prodId} fromWhere={"home"} />
          </ModalBody>
        </Modal>
      </MediaGallery>
    </>
  );
};

export default ProductTheme4;
