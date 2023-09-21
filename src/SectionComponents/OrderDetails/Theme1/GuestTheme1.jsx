import React, { useRef, useState } from 'react';
import Product_img from '../../../Assets/SectionComponent/Images/OrderDetails/Theme1/Product_img.png'
import BackBtnImg from '../../../Assets/SectionComponent/Icons/backBtn.svg'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { BackBtnOrderId, CurrentProduct, MainWrapper, TopSection, SkuWrap, CancleProductBtn, CurrentProductDetails, CurrentProductImg, CurrentProductOtherDetails, CurrentProductOtherDetailsContainer, CurrentProductStatus, StatusLi, HR, HeadingOrderID, OrderIdwrap, NeedHelpContainer, OrderIDContainer, OrderIDContainerLeft, OrderIDContainerRight, OrderIdHeroContainer, OrderSummary, OrderTotal, ButtonViewOrder, OtherItemDetailContainer, OtherItemDetails, OtherItemImg, OtherItemOtherDetails, OtherItemOtherDetailsDiv, OtherItems, OtherItemsContainer, OtherItemsContainerBox, OtherItemtStatus, PaymentSummary, ProductDetailList, ProductVariantWrap, SKU, TrackingDetailsContainer, TrackingDetailsWrapper, TrackingIdWrapper, BackBtnImgOrderId, CanceleBtnWrap, CancelButton } from './OrderDetailsTheme1.style';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import useOrderDetail from '@/TemplateCustomHooks/useOrderDetail';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { styled } from 'styled-components';
import usePriceDifference from '@/CustomHooks/usePriceDifference';
import useGuestOrderDetails from '@/TemplateCustomHooks/useGuestOrderDetails';

const ExploreBtn = styled.span`
    padding: 12px 32px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: none;
    border-radius: 8px;
    margin-top: 28px;
    &:hover{
        cursor: pointer;
        transition: all 1s;
    }
    @media screen and (max-width: 700px){
        font-size: 16px;
        line-height: 20px;
    }
`;


const OrderDetailsTheme1 = ({ children }) => {
    const style = {
        MyOrdersContainer: children.custom_section_editable[0].style,
        BackBtnOrderId: children.custom_section_editable[1].style,
        BackIconWrap: children.custom_section_editable[2].style,
        BackBtnImg: children.custom_section_editable[3].style,
        HeadingText: children.custom_section_editable[4],
        OrderID: children.custom_section_editable[5],
        OrderIdwrap: children.custom_section_editable[6].style,
        HeadingOrderID: children.custom_section_editable[7].style,
        OrderDate: children.custom_section_editable[8],
        MainWrapper: children.custom_section_editable[9].style,
        OrderIDContainer: children.custom_section_editable[10].style,
        OrderIDContainerLeft: children.custom_section_editable[11].style,
        CurrentProduct: children.custom_section_editable[12].style,
        CurrentProductImg: children.custom_section_editable[13].style,
        ProductImg: children,
        CurrentProductDetails: children.custom_section_editable[15].style,
        TopSection: children.custom_section_editable[16].style,
        ProductName: children.custom_section_editable[17],
        SKUCode: children.custom_section_editable[18],
        Code: children.custom_section_editable[19],
        SkuWrap: children.custom_section_editable[20].style,
        CurrentProductOtherDetailsContainer: children.custom_section_editable[21].style,
        CurrentProductOtherDetails: children.custom_section_editable[22].style,
        ProductDetailList: children.custom_section_editable[23].style,
        ProductVariantWrap: children.custom_section_editable[24].style,
        VariantKey: children.custom_section_editable[25],
        VariantVal: children.custom_section_editable[26],
        CurrentProductStatus: children.custom_section_editable[27].style,
        StatusLi: children.custom_section_editable[28].style,
        Status: children.custom_section_editable[29],
        Processing: children.custom_section_editable[30],
        CancleProductBtn: children.custom_section_editable[31],
        OtherItemsContainer: children.custom_section_editable[32].style,
        OtherItemsHeading: children.custom_section_editable[33],
        OtherItemsContainerBox: children.custom_section_editable[34].style,
        OtherItems: children.custom_section_editable[35].style,
        OtherItemImgWrap: children.custom_section_editable[36].style,
        OtherItemImg: children,
        OtherItemDetails: children.custom_section_editable[38].style,
        OtherItemName: children.custom_section_editable[39],
        OtherItemDetailContainer: children.custom_section_editable[40].style,
        OtherItemOtherDetailsDiv: children.custom_section_editable[41].style,
        OtherItemOtherDetails: children.custom_section_editable[42].style,
        OtherItemVariantsKey: children.custom_section_editable[43],
        OtherItemVariantsVal: children.custom_section_editable[44],
        OtherItemtStatus: children.custom_section_editable[45].style,
        ViewDetails: children.custom_section_editable[46],
        NeedHelpContainer: children.custom_section_editable[47].style,
        NeedHelpPara: children.custom_section_editable[48],
        ConnectSupport: children.custom_section_editable[49],
        OrderIDContainerRight: children.custom_section_editable[50].style,
        PaymentSummary: children.custom_section_editable[51].style,
        PaymentSummaryPara: children.custom_section_editable[52],
        OrderSummary: children.custom_section_editable[53].style,
        CartTotalPara: children.custom_section_editable[54],
        CartTotal: children.custom_section_editable[55],
        DeliveryFreePara: children.custom_section_editable[56],
        DeliveryFree: children.custom_section_editable[57],
        OrderTotal: children.custom_section_editable[58].style,
        TotalAmountPara: children.custom_section_editable[59],
        TotalAmount: children.custom_section_editable[60],

    }
    const Navigate = useAppNavigate();
    const [productDetail, getGuestOrderBookingListLoading, getGuestOrderBookingListSuccess, getGuestOrderBookingListData, ShippingDetail, handleCancelProduct, orderInfoHandler] = useGuestOrderDetails()
    const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference()

    const handleRoute = (item) => {
        Navigate(item)
    }

    return (
        <React.Fragment>
            {getGuestOrderBookingListLoading && !getGuestOrderBookingListSuccess ?
                "Loading...." :
                <OrderIdHeroContainer item={style.MyOrdersContainer}>
                    <BackBtnOrderId item={style.BackBtnOrderId}>
                        <AnchorElement link='/ecom-myOrders' style={style.BackIconWrap}>
                            <BackBtnImg height={style.BackBtnImg.desktop.height} width={style.BackBtnImg.desktop.width} ></BackBtnImg>
                        </AnchorElement>
                        <HeadingOrderID item={style.HeadingOrderID}>
                            <OrderIdwrap item={style.OrderIdwrap}>
                                <Text tagType={style.HeadingText.tagType} style={style.HeadingText.style} text={style.HeadingText.text}></Text>
                                <Text tagType={style.OrderID.tagType} style={style.OrderID.style} text={`#{productDetail ? productDetail.order_id : 'No Order'}`}></Text>
                            </OrderIdwrap>
                            <Text tagType={style.OrderDate.tagType} style={style.OrderDate.style} text={`getGuestOrderBookingListData?.suborders?.length} item(s)   |   Order Date : {productDetail.createdAt ? moment(productDetail.createdAt).format("ll") : 'No Order'`}></Text>
                        </HeadingOrderID>
                    </BackBtnOrderId>
                    <MainWrapper item={style.MainWrapper}>
                        <OrderIDContainer item={style.OrderIDContainer}>
                            <OrderIDContainerLeft item={style.OrderIDContainerLeft}>
                                <CurrentProduct item={style.CurrentProduct}>
                                    <CurrentProductImg item={style.CurrentProductImg}>
                                        <ImageElement src={productDetail?.orderProduct?.productPicture[0] ?
                                            productDetail?.orderProduct?.productPicture[0] :
                                            productDetail?.orderProduct?.defaultPicture.length > 0 ?
                                                productDetail?.orderProduct?.defaultPicture[0] : ""}
                                            alt=""
                                            style={style.ProductImg.custom_section_editable[14].style}
                                        />
                                    </CurrentProductImg>
                                    <CurrentProductDetails item={style.CurrentProductDetails} >
                                        <TopSection item={style.TopSection}>
                                            <Text
                                                tagType={style.ProductName.tagType}
                                                style={style.ProductName.style}
                                                text={productDetail?.orderProduct?.variationName ? productDetail?.orderProduct?.variationName : ""}>
                                            </Text>
                                            <SkuWrap item={style.SkuWrap}>
                                                <Text
                                                    tagType={style.SKUCode.tagType}
                                                    style={style.SKUCode.style}
                                                    text={style.SKUCode.text}>
                                                </Text>
                                                <Text
                                                    tagType={style.Code.tagType}
                                                    style={style.Code.style}
                                                    text={productDetail?.orderProduct?.SKU ?? productDetail?.orderProduct?.SKU}>
                                                </Text>
                                            </SkuWrap>
                                        </TopSection>
                                        <CurrentProductOtherDetailsContainer item={style.CurrentProductOtherDetailsContainer}>
                                            <CurrentProductOtherDetails item={style.CurrentProductOtherDetails}>
                                                <ProductDetailList item={style.ProductDetailList}>
                                                    {
                                                        productDetail.orderProduct?.variant_scheme && productDetail.orderProduct?.variant_scheme.length ?
                                                            productDetail.orderProduct?.variant_scheme.map((subItem, index) => {
                                                                return (
                                                                    <ProductVariantWrap item={style.ProductVariantWrap} key={index}>
                                                                        <Text
                                                                            tagType={style.VariantKey.tagType}
                                                                            style={style.VariantKey.style}
                                                                            text={`${subItem?.title} :`}>
                                                                        </Text>
                                                                        <Text
                                                                            tagType={style.VariantVal.tagType}
                                                                            style={style.VariantVal.style}
                                                                            text={`${subItem?.value}`}>
                                                                        </Text>
                                                                    </ProductVariantWrap>
                                                                )
                                                            }) : ""
                                                    }
                                                </ProductDetailList>
                                            </CurrentProductOtherDetails>
                                            <CurrentProductStatus item={style.CurrentProductStatus}>
                                                {
                                                    productDetail?.status && (
                                                        <React.Fragment>
                                                            <StatusLi item={style.StatusLi}>
                                                                <Text
                                                                    tagType={style.Status.tagType}
                                                                    style={style.Status.style}
                                                                    text={style.Status.text}>
                                                                </Text>
                                                                <Text
                                                                    tagType={style.Processing.tagType}
                                                                    style={`${style.Processing.style}`}
                                                                    text={productDetail?.status}>
                                                                </Text>
                                                            </StatusLi>
                                                        </React.Fragment>
                                                    )
                                                }
                                            </CurrentProductStatus>
                                        </CurrentProductOtherDetailsContainer>
                                    </CurrentProductDetails>
                                </CurrentProduct>

                                {/* If tracking details are available */}


                                {/* If more than one product is in the order */}
                                {
                                    getGuestOrderBookingListSuccess && getGuestOrderBookingListData && getGuestOrderBookingListData.suborders.filter((val) => val._id !== productDetail._id).length > 0 ?
                                        <OtherItemsContainer item={style.OtherItemsContainer}>
                                            <Text
                                                tagType={style.OtherItemsHeading.tagType}
                                                style={style.OtherItemsHeading.style}
                                                text={style.OtherItemsHeading.text}>
                                            </Text>
                                            <OtherItemsContainerBox item={style.OtherItemsContainerBox}>
                                                {getGuestOrderBookingListSuccess && getGuestOrderBookingListData && getGuestOrderBookingListData.suborders.filter((val) => val._id !== productDetail._id).map((item, key) => {
                                                    return (
                                                        <OtherItems item={style.OtherItems} key={key}>
                                                            <OtherItemImg item={style.OtherItemImgWrap}>
                                                                <ImageElement src={item.orderProduct?.productPicture && item.orderProduct?.productPicture.length > 0 ? item.orderProduct?.productPicture[0] : ""} alt="product images" style={style.OtherItemImg.custom_section_editable[14].style} />
                                                            </OtherItemImg>
                                                            <OtherItemDetails item={style.OtherItemDetails}>
                                                                <Text
                                                                    tagType={style.OtherItemName.tagType}
                                                                    style={style.OtherItemName.style}
                                                                    text={item.orderProduct.variationName}>
                                                                </Text>
                                                                <OtherItemDetailContainer item={style.OtherItemDetailContainer}>
                                                                    <OtherItemOtherDetailsDiv item={style.OtherItemOtherDetailsDiv}>
                                                                        {
                                                                            item.orderProduct.variant_scheme && item.orderProduct.variant_scheme.length ? item.orderProduct.variant_scheme.map((subSubItem, subSubkey) => {
                                                                                return (
                                                                                    <OtherItemOtherDetails item={style.OtherItemOtherDetails} key={subSubkey}>
                                                                                        <Text
                                                                                            tagType={style.OtherItemVariantsKey.tagType}
                                                                                            style={style.OtherItemVariantsKey.style}
                                                                                            text={`${subSubItem?.title} :`}>
                                                                                        </Text>
                                                                                        <Text
                                                                                            tagType={style.OtherItemVariantsVal.tagType}
                                                                                            style={style.OtherItemVariantsVal.style}
                                                                                            text={subSubItem?.value}>
                                                                                        </Text>
                                                                                    </OtherItemOtherDetails>
                                                                                )
                                                                            }) : ""
                                                                        }
                                                                    </OtherItemOtherDetailsDiv>
                                                                    <OtherItemtStatus item={style.OtherItemtStatus}>
                                                                        <Button text={style.ViewDetails.text} onClick={() => orderInfoHandler(item)} style={style.ViewDetails.style} />
                                                                    </OtherItemtStatus>
                                                                </OtherItemDetailContainer>
                                                            </OtherItemDetails>
                                                        </OtherItems>
                                                    )
                                                })
                                                }
                                            </OtherItemsContainerBox>
                                        </OtherItemsContainer> : ""
                                }
                                <NeedHelpContainer item={style.NeedHelpContainer}>
                                    <Text
                                        tagType={style.NeedHelpPara.tagType}
                                        style={style.NeedHelpPara.style}
                                        text={style.NeedHelpPara.text}>
                                    </Text>
                                    <AnchorElement
                                        style={style.ConnectSupport.style}
                                        text={style.ConnectSupport.text}
                                        link="#"
                                    />
                                </NeedHelpContainer>
                                <ExploreBtn onClick={() => handleRoute("/shop")}>Continue Shopping <i>&#10132;</i></ExploreBtn>
                            </OrderIDContainerLeft>
                            <OrderIDContainerRight item={style.OrderIDContainerRight}>
                                <PaymentSummary item={style.PaymentSummary}>
                                    <Text
                                        tagType={style.PaymentSummaryPara.tagType}
                                        style={style.PaymentSummaryPara.style}
                                        text={style.PaymentSummaryPara.text}>
                                    </Text>
                                    <OrderSummary item={style.OrderSummary}>
                                        <Text
                                            tagType={style.CartTotalPara.tagType}
                                            style={style.CartTotalPara.style}
                                            text={style.CartTotalPara.text}>
                                        </Text>
                                        <Text
                                            tagType={style.CartTotal.tagType}
                                            style={style.CartTotal.style}
                                            text={getPrice(ShippingDetail?.orderTotal)}>
                                        </Text>
                                    </OrderSummary>
                                    <OrderSummary item={style.OrderSummary}>
                                        <Text
                                            tagType={style.DeliveryFreePara.tagType}
                                            style={style.DeliveryFreePara.style}
                                            text={style.DeliveryFreePara.text}>
                                        </Text>
                                        <Text
                                            tagType={style.DeliveryFree.tagType}
                                            style={style.DeliveryFree.style}
                                            text={getPrice(ShippingDetail?.shipping_price)}>
                                        </Text>
                                    </OrderSummary>
                                    <OrderSummary item={style.OrderSummary}>
                                        <Text
                                            tagType={style.DeliveryFreePara.tagType}
                                            style={style.DeliveryFreePara.style}
                                            text={`Order Total`}>
                                        </Text>
                                        <Text
                                            tagType={style.DeliveryFree.tagType}
                                            style={style.DeliveryFree.style}
                                            text={getPrice(ShippingDetail?.orderTotal)}>
                                        </Text>
                                    </OrderSummary>
                                    <HR />
                                    <OrderTotal item={style.OrderTotal}>
                                        <Text
                                            tagType={style.TotalAmountPara.tagType}
                                            style={style.TotalAmountPara.style}
                                            text={style.TotalAmountPara.text}>
                                        </Text>
                                        <Text
                                            tagType={style.TotalAmount.tagType}
                                            style={style.TotalAmount.style}
                                            text={ShippingDetail?.orderTotal ? getPrice(ShippingDetail.orderTotal + (ShippingDetail?.shipping_price ? ShippingDetail?.shipping_price : 0)) : getPrice(0)}>
                                        </Text>
                                    </OrderTotal>
                                </PaymentSummary>
                            </OrderIDContainerRight>
                        </OrderIDContainer>
                    </MainWrapper>
                </OrderIdHeroContainer>
            }
        </React.Fragment>
    )
}

export default OrderDetailsTheme1;