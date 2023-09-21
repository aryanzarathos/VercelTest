import React, { useState } from 'react'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import { ProductMainConatiner, ProductWrapper, ProductWrap, ImageWrap, DiscountWrap, ProductSliderWrap } from './ProductTheme1.style'
import Slider from '@/SectionCommon/Slider/Slider'
import { SwiperSlide } from "swiper/react";
import { dummyImg, dummyImgProduct } from "../../../Constant/constants";
import useAppNavigate from "../../../CustomHooks/useAppNavigate";
import usePriceDifference from "../../../CustomHooks/usePriceDifference";
import MediaGallery from '@/CommonComponents/MediaGalleryEditor'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
const ProductTheme1 = ({ children }) => {
    const data = children;
    const style = {
        ProductMainConatiner: data.custom_section_editable[0].style,
        ProductWrapper: data.custom_section_editable[1].style,
        ProductWrap: data.custom_section_editable[2].style,
        ImageWrap: data.custom_section_editable[3].style,
        imageStyle: data.custom_section_editable[4].style,
        heading: data.custom_section_editable[5],
        price: data.custom_section_editable[6],
        DiscountWrap: data.custom_section_editable[7].style,
        oldPrice: data.custom_section_editable[8],
        perOff: data.custom_section_editable[9],
        productData: data.data,
        objectView: data.style.desktop.objectView,
        gridCount: data.style,
    }

    const navigate = useAppNavigate();
    const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();

    const HandleClick = (slug) => {
        navigate(`/product-details/${slug}`)
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
            <MediaGallery sectionName={"ProductSection"} manageText={"Manage Product"} tabs={tabsData} arrayofImages={true} fieldName={"productPicture"} fieldIdLabel={"_id"} data={data} >
                {data?.data[0]?.productlist.length > 0 ?
                    <ProductMainConatiner item={style.ProductMainConatiner}>
                        {style.objectView?.toLowerCase() === "grid".toLowerCase() ?
                            <ProductWrapper item={style.ProductWrapper} gridCount={style.gridCount}>
                                {data?.data[0]?.productlist.length > 0 && data?.data[0]?.productlist.map((item, key) => {
                                    return (
                                        <ProductWrap key={key} item={style.ProductWrap}>
                                            <ImageWrap item={style.ImageWrap} onClick={() => HandleClick(item.urlSlug)}>
                                                <ImageElement src={item?.productPicture[0]}
                                                    alt={`Product ${key}`}
                                                    defaultImage={dummyImg}
                                                    style={style.imageStyle} />
                                            </ImageWrap>
                                            <Text
                                                tagType={style.heading.tagType}
                                                style={style.heading.style}
                                                text={item?.productName}
                                            />
                                            <Text
                                                tagType={style.price.tagType}
                                                style={style.price.style}
                                                text={shopProductsPriceDiff(item)}
                                            />
                                            <DiscountWrap item={style.DiscountWrap}>
                                                {item?.discountPercentage > 0 ?
                                                    <Text
                                                        tagType={style.oldPrice.tagType}
                                                        style={style.oldPrice.style}
                                                    >{`${shopProductsActualPrice((item))}`}</Text>
                                                    : ""
                                                }

                                                <Text
                                                    tagType={style.perOff.tagType}
                                                    style={style.perOff.style}
                                                    text={discount(item) ? `(${discount(item)} off)` : ''}
                                                />
                                            </DiscountWrap>
                                        </ProductWrap>
                                    )
                                })}
                            </ProductWrapper>
                            :
                            <ProductSliderWrap>
                                <Slider sliderSetting={data.sliderSetting}>
                                    {data?.data[0]?.productlist.length > 0 && data?.data[0]?.productlist.map((item, key) => {
                                        return (
                                            <SwiperSlide key={key}>
                                                <ProductWrap item={style.ProductWrap}>
                                                    <ImageWrap item={style.ImageWrap} onClick={() => HandleClick(item.urlSlug)}>
                                                        <ImageElement src={item.productPicture[0]}
                                                            alt={`Product ${key}`}
                                                            defaultImage={dummyImg} style={style.imageStyle} />
                                                    </ImageWrap>
                                                    <Text
                                                        tagType={style.heading.tagType}
                                                        style={style.heading.style}
                                                        text={item.productName}
                                                    />
                                                    <Text
                                                        tagType={style.price.tagType}
                                                        style={style.price.style}
                                                        text={shopProductsPriceDiff(item) ? shopProductsPriceDiff(item) : ""}
                                                    />
                                                    <DiscountWrap item={style.DiscountWrap}>

                                                        {item?.discountPercentage > 0 ?
                                                            <Text
                                                                tagType={style.oldPrice.tagType}
                                                                style={style.oldPrice.style}
                                                            ><del> {`${shopProductsActualPrice((item))}`}</del></Text>
                                                            : ""
                                                        }

                                                        <Text
                                                            tagType={style.perOff.tagType}
                                                            style={style.perOff.style}
                                                            text={discount(item) ? `(${discount(item)} off)` : ''}
                                                        />
                                                    </DiscountWrap>
                                                </ProductWrap>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Slider>
                            </ProductSliderWrap>

                        }
                    </ProductMainConatiner>
                    :
                    <RecordNotFound />
                }

            </MediaGallery>
        </>
    )
}

export default ProductTheme1
