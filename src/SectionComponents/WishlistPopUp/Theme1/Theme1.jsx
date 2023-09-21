import React, { useEffect } from 'react'
// import Slider from "react-slick";
import Bag from '../../../Assets/SectionComponent/Images/Wishlist/wishlistbag.svg'
// import Image from 'next/image';
import { ButtonAddToCart, ContainerMainLeft, ContainerMainRight, ImageContainer, ImgWraper, MainContainer, Offer, OldPrice, Price, PriceDetail, HorizontalRow, ProductCategoryListWrappper, ProductCategoryList, ProductCategoryListItem, ProductCategoryboldText, ProductCode, ProductHeading, ProductList, ProductListImg, QuantityItem, QuantityWrapper, QuantityText, WishlistPopUpContainer } from './WishlistPopUp.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
// import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import WishlistProductSlider from './WishlistProductSlider';
import AppLinkUrl from '../../../CommonComponents/AppLink/AppLinkUrl';
import { ResetCustomerProductDetail, getCustomerProductDetail } from '../../../store/actions/productList/index';
import { useDispatch, useSelector } from 'react-redux';
import useProductDetailPopUp from '../../../TemplateCustomHooks/useProductDetailPopUp';
import usePriceDifference from '../../../CustomHooks/usePriceDifference';
import Auth from '../../../Classes/Auth';
import useAddToCart from '../../../TemplateCustomHooks/useAddToCart';
import CounterSvg from '../../../Assets/SectionComponent/Icons/CounterSvg.svg'
import QuantityHandler from '@/SectionComponents/Cart/QuantityHandler';
import { ButtonElement } from '@/SectionsLayout/Elements/ButtonElement/ButtonStyle.js';
import useCart from '@/TemplateCustomHooks/useCart';
import useWishList from '@/TemplateCustomHooks/useWishList';


const WislistTheme1 = ({ children, WishlistPopupStyle, sliderData, style4Slider, prodId, popUpHandleRef, fromWhere }) => {

    const dispatch = useDispatch();
    // const [showProductDetails, quantity, variationValueSeletced, setQuantity, VariationChange] = useProductDetailPopUp();
    const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
    const [addToCartHandler] = useAddToCart();

    const [itemList, handleMoveButton, handleRemoveButton, wishlistPopupRef, prodDetails, varDetails,
        handleOnCloseWishlistPopup, variationValueSeletced, VariationChange, showProductDetails, changeQtyHandler, quantity, AddToCartHandler, handleChildParent, active, setActive] = useWishList()

    const { user, subdomainuser, productDetails, customerCartData, customerproductDetailLoading, customerproductDetailSuccess, variationDetails } = useSelector((state) => {
        return {
            user: state.user,
            subdomainuser: state.subdomainuser,
            customerproductDetailLoading: state.productList.customerproductDetail.loading,
            customerproductDetailSuccess: state.productList.customerproductDetail.success,
            customerCartData: state.productList.customerproductDetail.data,
            variationDetails: state.productList.customerproductDetail.data.variation,
            productDetails: state.productList.customerproductDetail.data.product,
        }
    });

    useEffect(() => {
        if (prodId) {
            if (AppLinkUrl.privateDomain()) {
                dispatch(getCustomerProductDetail("domain", AppLinkUrl.getHost(), prodId));
            } else {
                dispatch(getCustomerProductDetail("subdomain", AppLinkUrl.subdomain(), prodId));
            }
        }

    }, [dispatch, prodId]);

    useEffect(() => {
        return () => {
            dispatch(ResetCustomerProductDetail())
        }
    }, [dispatch]);


    const AddCarthandleProduct = (type, value, quantity) => {
        popUpHandleRef?.current?.close()
        addToCartHandler(type, value, quantity, fromWhere)
    }

    // console.log(popUpHandleRef?.current, "popUpHandleRef")

    return (
        <React.Fragment>
            {
                customerproductDetailSuccess && customerCartData && showProductDetails ? (
                    <WishlistPopUpContainer item={WishlistPopupStyle.WishlistPopUpContainer}>
                        <MainContainer item={WishlistPopupStyle.MainContainer}>
                            <ContainerMainLeft item={WishlistPopupStyle.ContainerMainLeft}>
                                <ImageContainer item={WishlistPopupStyle.ImageContainer}>
                                    <WishlistProductSlider sliderData={sliderData} sliderStyle={style4Slider} data={showProductDetails?.productPicture?.length ? showProductDetails?.productPicture : showProductDetails?.defaultPicture} />
                                </ImageContainer>
                            </ContainerMainLeft>
                            <ContainerMainRight item={WishlistPopupStyle.ContainerMainRight}>
                                <Text tagType={WishlistPopupStyle.ProductCode.tagType} style={WishlistPopupStyle.ProductCode.style} text={productDetails?.SKU} />
                                <Text tagType={WishlistPopupStyle.ProductHeading.tagType} style={WishlistPopupStyle.ProductHeading.style}
                                    text={productDetails?.productName} />
                                <PriceDetail item={WishlistPopupStyle.PriceDetail}>
                                    <Text tagType={WishlistPopupStyle.Price.tagType} style={WishlistPopupStyle.Price.style} text={`${getPrice(showProductDetails?.salePrice)}.00`} />
                                    <s>
                                        <Text tagType={WishlistPopupStyle.OldPrice.tagType} style={WishlistPopupStyle.OldPrice.style} text={`${getPrice((showProductDetails?.price))}.00`} />
                                    </s>
                                    <Text tagType={WishlistPopupStyle.Offer.tagType} style={WishlistPopupStyle.Offer.style} text={discount(showProductDetails) ? `(${discount(showProductDetails)} off)` : ''} />

                                </PriceDetail>
                                <HorizontalRow item={WishlistPopupStyle.Hr} />
                                <ProductCategoryListWrappper item={WishlistPopupStyle.ProductCategoryListWrappper}>
                                    {
                                        productDetails?.variant && productDetails?.variant.length > 0 && productDetails?.variant.map((vl, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <Text
                                                        tagType={WishlistPopupStyle.ProductCategoryboldText.tagType}
                                                        style={WishlistPopupStyle.ProductCategoryboldText.style}
                                                        text={WishlistPopupStyle.ProductCategoryboldText.text}
                                                    />
                                                    <ProductCategoryList item={WishlistPopupStyle.ProductCategoryList}>
                                                        {vl.value.map((option, index) => {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <ProductCategoryListItem className={`${variationValueSeletced.includes(option) ? "active" : ""}`} onClick={() => VariationChange(vl, option)} item={WishlistPopupStyle.ProductCategoryListItem}>{option}{`${variationValueSeletced.includes(option) ? "" : ""}`}</ProductCategoryListItem>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </ProductCategoryList>
                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </ProductCategoryListWrappper>
                                <QuantityWrapper>
                                    <Text
                                        style={WishlistPopupStyle?.QuantityPara?.style}
                                        text={"Quantity :"}
                                        className='qauntity'
                                    />

                                    <QuantityItem item={WishlistPopupStyle.QuantityItem}>

                                        {/* <input type="number"
                                        max={showProductDetails.stock}
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value, showProductDetails.stock)}
                                        min={1}
                                    /> */}
                                        <QuantityHandler
                                            pr={showProductDetails}
                                            outofStock={"Out of Stock"}
                                            quantityPlus={
                                                <ButtonElement item={WishlistPopupStyle?.incerementBtn?.style} className='incerement-btn'
                                                    disabled={quantity === productDetails.stock}
                                                    onClick={() => { changeQtyHandler('plus') }}
                                                ><CounterSvg height={WishlistPopupStyle?.CounterSvg?.height} width={WishlistPopupStyle?.CounterSvg?.width} stroke={WishlistPopupStyle?.CounterSvg?.fill} className='incerement-icon' />
                                                </ButtonElement>
                                            }
                                            quantityMinus={
                                                <ButtonElement item={WishlistPopupStyle?.descrimentBtn?.style} className='descriment-btn'
                                                    disabled={quantity === 1}
                                                    onClick={() => { changeQtyHandler('minus') }}
                                                ><CounterSvg height={WishlistPopupStyle?.CounterSvg?.height} width={WishlistPopupStyle?.CounterSvg?.width} stroke={WishlistPopupStyle?.CounterSvg?.fill} className='decriment-icon'></CounterSvg>
                                                </ButtonElement>
                                            }
                                            quantity={<Text style={WishlistPopupStyle?.Quantity?.style} text={`${quantity} Pcs`} className='qauntity' />}
                                            showAllTime={true}
                                        />
                                    </QuantityItem>
                                </QuantityWrapper>
                                <ButtonAddToCart type="button" item={WishlistPopupStyle?.ButtonAddToCart} onClick={(Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) ? () => AddCarthandleProduct("", showProductDetails, quantity) : () => AddCarthandleProduct("GuestLogin", showProductDetails, quantity)}>
                                    <Bag height={WishlistPopupStyle?.Bag?.height} width={WishlistPopupStyle?.Bag?.width} fill={WishlistPopupStyle?.Bag?.fill}
                                    /> ADD TO CART</ButtonAddToCart>
                            </ContainerMainRight>
                        </MainContainer>
                    </WishlistPopUpContainer >
                ) : (
                    ""
                )
            }
        </React.Fragment >

    )
}

export default WislistTheme1