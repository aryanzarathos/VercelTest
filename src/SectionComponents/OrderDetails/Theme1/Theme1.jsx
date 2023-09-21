import React, { useRef, useState } from 'react';
import Product_img from '../../../Assets/SectionComponent/Images/OrderDetails/Theme1/Product_img.png'
import BackBtnImg from '../../../Assets/SectionComponent/Icons/backBtn.svg'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { BackBtnOrderId, CurrentProduct, MainWrapper, HeadingWrap, TopSection, SkuWrap, CancleProductBtn, TextWrap, CurrentProductDetails, CurrentProductImg, CurrentProductOtherDetails, CurrentProductOtherDetailsContainer, CurrentProductStatus, StatusLi, HR, HeadingOrderID, OrderIdwrap, NeedHelpContainer, OrderIDContainer, OrderIDContainerLeft, OrderIDContainerRight, OrderIdHeroContainer, OrderSummary, OrderTotal, ButtonViewOrder, OtherItemDetailContainer, OtherItemDetails, OtherItemImg, OtherItemOtherDetails, OtherItemOtherDetailsDiv, OtherItems, OtherItemsContainer, OtherItemsContainerBox, OtherItemtStatus, PaymentSummary, ProductDetailList, ProductVariantWrap, SKU, TrackingDetailsContainer, TrackingDetailsWrapper, TrackingIdWrapper, BackBtnImgOrderId, CanceleBtnWrap, CancelButton } from './OrderDetailsTheme1.style';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';
import useOrderDetail from '@/TemplateCustomHooks/useOrderDetail';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { styled } from 'styled-components';
import { dummyImgProduct } from '@/Constant/constants';

const StateText = styled.span`
    color: ${({ item }) => item?.desktop?.color};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    font-weight: ${({ item }) => item?.desktop?.fontWeight};
    font-family:${({ item }) => item?.desktop?.fontFamily};
    line-height: ${({ item }) => item?.desktop?.lineHeight};

    &.red{
        color: #FF0000;
    }
    &.shippedcolor{
        color: #f9ac1b;
    }
    &.green{
        color: #4a9e42;
    }
    &.primary{
        color: #3758F9;
    }
`;


const OrderDetailsTheme1 = ({ children }) => {

    const Navigate = useAppNavigate();
    const data = [
        {
            "Size": "M",
            "Colour": "24 July 2022",
            "Material": "Silk",
            "Style": "Indo-Western"
        }
    ]

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
        TrackingDetailsContainer: children.custom_section_editable[61]?.style,
        TrackingDetailsWrapper: children.custom_section_editable[62]?.style,
        TrackingDetailPara: children.custom_section_editable[63],
        Courier: children.custom_section_editable[64],
        CourierDetail: children.custom_section_editable[65],
        TrackIdLink: children.custom_section_editable[66],

    }

    const [
        getPrice, getSingleOrderData, getSingleOrderSuccess,
        selectedOrder, elseSubOrder,
        orderId, handleCancelProduct
    ] = useOrderDetail();

    const CancelOrderRef = useRef(null);

    const handleContactSettingPopup = () => {
        CancelOrderRef.current.open();
    }
    const closeModals = () => {
        CancelOrderRef.current.close();
    }

    const VieworderDetailHandle = (orderId, itemId) => {
        Navigate(`/orders-details/${orderId}/${itemId}`)
    }

    // // console.log(getSingleOrderSuccess, getSingleOrderData, selectedOrder)

    return (
        <React.Fragment>
            {getSingleOrderSuccess ?
                getSingleOrderData && selectedOrder ?
                    <OrderIdHeroContainer item={style.MyOrdersContainer}>
                        <BackBtnOrderId item={style.BackBtnOrderId}>
                            <AnchorElement link='/my-orders' style={style.BackIconWrap}>
                                <BackBtnImg height={style.BackBtnImg.desktop.height} width={style.BackBtnImg.desktop.width} ></BackBtnImg>
                            </AnchorElement>
                            <HeadingOrderID item={style.HeadingOrderID}>
                                <OrderIdwrap item={style.OrderIdwrap}>
                                    <Text tagType={style.HeadingText.tagType} style={style.HeadingText.style} text={style.HeadingText.text}></Text>
                                    <Text tagType={style.OrderID.tagType} style={style.OrderID.style} text={`#${getSingleOrderData.order_id ? getSingleOrderData?.order_id : 'No Order'}`}></Text>
                                </OrderIdwrap>
                                <Text tagType={style.OrderDate.tagType} style={style.OrderDate.style} text={`${elseSubOrder?.length + 1} item(s)   |   Order Date : ${getSingleOrderData?.order_placing_date ? moment(getSingleOrderData.order_placing_date).format("DD MMM YYYY") : 'No Order'}`}></Text>
                            </HeadingOrderID>
                        </BackBtnOrderId>
                        <MainWrapper item={style.MainWrapper}>
                            <OrderIDContainer item={style.OrderIDContainer}>
                                <OrderIDContainerLeft item={style.OrderIDContainerLeft}>
                                    <CurrentProduct item={style.CurrentProduct}>
                                        <CurrentProductImg item={style.CurrentProductImg}>
                                            <ImageElement src={selectedOrder.orderProduct?.productPicture && selectedOrder.orderProduct?.productPicture.length > 0 ? selectedOrder.orderProduct?.productPicture[0]?.src : selectedOrder?.orderProduct?.defaultPicture.length > 0 ? selectedOrder?.orderProduct?.defaultPicture[0]?.src : dummyImgProduct} alt="" style={style.ProductImg.custom_section_editable[14].style} defaultImage={dummyImgProduct} />
                                        </CurrentProductImg>
                                        <CurrentProductDetails item={style.CurrentProductDetails} >
                                            <TopSection item={style.TopSection}>
                                                <Text
                                                    tagType={style.ProductName.tagType}
                                                    style={style.ProductName.style}
                                                    text={selectedOrder.orderProduct?.variationName}>
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
                                                        text={selectedOrder.orderProduct?.SKU}>
                                                    </Text>
                                                </SkuWrap>
                                            </TopSection>
                                            <CurrentProductOtherDetailsContainer item={style.CurrentProductOtherDetailsContainer}>
                                                <CurrentProductOtherDetails item={style.CurrentProductOtherDetails}>
                                                    <ProductDetailList item={style.ProductDetailList}>
                                                        {
                                                            selectedOrder.orderProduct?.variant_scheme && selectedOrder.orderProduct?.variant_scheme.length ?
                                                                selectedOrder.orderProduct?.variant_scheme.map((subItem, index) => {
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
                                                    <StatusLi item={style.StatusLi}>
                                                        <Text
                                                            tagType={style.Status.tagType}
                                                            style={style.Status.style}
                                                            text={style.Status.text}>
                                                        </Text>
                                                        {
                                                            // <Text
                                                            //     tagType={style.Processing.tagType}
                                                            //     style={`${style.Processing.style}`}
                                                            //     text={selectedOrder && selectedOrder.status}>
                                                            // </Text>
                                                        }
                                                        <StateText item={style.Processing.style} className={`${selectedOrder && selectedOrder.status === "Placed" ? "primary" : selectedOrder && selectedOrder.status === "Cancelled" ? "red" : selectedOrder && selectedOrder.status === "Shipped" ? "shippedcolor" : selectedOrder && selectedOrder.status === "Failed" ? "red" : selectedOrder && selectedOrder.status === "Delivered" ? "green" : selectedOrder && selectedOrder.status === "Processing" ? "primary" : selectedOrder && selectedOrder.status === "Rejected" ? "red" : ""}`}>
                                                            {selectedOrder && selectedOrder.status}
                                                        </StateText>
                                                    </StatusLi>
                                                    {
                                                        (selectedOrder.allowCancellation === true && (selectedOrder.status === "Processing" || selectedOrder.status === "Placed")) ? (
                                                            <Button text={style.CancleProductBtn.text} onClick={() => handleCancelProduct(getSingleOrderData._id, selectedOrder._id)} style={style.CancleProductBtn.style} />
                                                        ) : ""
                                                    }
                                                </CurrentProductStatus>
                                            </CurrentProductOtherDetailsContainer>
                                        </CurrentProductDetails>
                                    </CurrentProduct>
                                    {selectedOrder && selectedOrder?.status === "Failed" && selectedOrder?.cancellaion_reason &&
                                        <div className='other-item-tracking-wrapper'>
                                            <div className='other-item-tracking-item'>
                                                <p className="tracking-heading-item  w-700">Order failed reason</p>
                                                <p className="mt-10 gray w-400 text-xxs">{selectedOrder?.cancellaion_reason}</p>
                                            </div>
                                        </div>
                                    }
                                    {selectedOrder && selectedOrder?.status === "Rejected" &&
                                        <div className='other-item-tracking-wrapper'>
                                            <div className='other-item-tracking-item'>
                                                <p className="tracking-heading-item  w-700">Order Rejected reason</p>
                                                <p className="mt-10 gray w-400 text-xxs">{getSingleOrderData?.rejection_reason}</p>
                                            </div>
                                        </div>
                                    }
                                    {/* If tracking details are available */}

                                    <TrackingDetailsContainer item={style.TrackingDetailsContainer}>
                                        <TrackingDetailsWrapper item={style.TrackingDetailsWrapper}>
                                            <HeadingWrap item={style.TrackingDetailPara.style}>
                                                <Text
                                                    style={style.TrackingDetailPara?.style}
                                                    tagType={style.TrackingDetailPara?.tagType}
                                                    text={style.TrackingDetailPara?.text}
                                                />
                                            </HeadingWrap>
                                            <TrackingIdWrapper>
                                                <TextWrap>
                                                    <Text
                                                        style={style.Courier?.style}
                                                        tagType={style.Courier?.tagType}
                                                        text={style.Courier?.text}
                                                    />
                                                    <Text
                                                        style={style.CourierDetail?.style}
                                                        tagType={style.CourierDetail?.tagType}
                                                        text={selectedOrder?.shipping_partner}
                                                    />
                                                    {/* <p>Courier: </p> */}
                                                    {/* <p>dff {selectedOrder?.shipping_partner}</p> */}
                                                </TextWrap>
                                                <TextWrap>
                                                    <Text
                                                        style={style.Courier?.style}
                                                        tagType={style.Courier?.tagType}
                                                        text={"Tracking ID: "}
                                                    />
                                                    <Text
                                                        style={style.CourierDetail?.style}
                                                        tagType={style.CourierDetail?.tagType}
                                                        text={selectedOrder?.shipping_tracking_id}
                                                    />
                                                </TextWrap>
                                            </TrackingIdWrapper>
                                            <TextWrap>
                                                <Text
                                                    style={style.Courier?.style}
                                                    tagType={style.Courier?.tagType}
                                                    text={"Tracking ID: "}
                                                />

                                                {
                                                    selectedOrder?.tracking_url &&
                                                    <AnchorElement
                                                        style={style.TrackIdLink?.style}
                                                        tagType={style.TrackIdLink?.tagType}
                                                        text={"selectedOrder?.tracking_urlselectedOrder?.tracking_urlselectedOrder?.tracking_urlselectedOrder?.tracking_urlselectedOrder?.tracking_url"}
                                                        link={selectedOrder?.tracking_url}
                                                        target={"_blank"} rel={"noreferrer"}
                                                    />
                                                }
                                            </TextWrap>
                                            {/* <p>Tracking ID:
                                                {
                                                    selectedOrder?.tracking_url ?
                                                        <a href={selectedOrder?.tracking_url} target="_blank" rel="noreferrer">
                                                            {selectedOrder?.tracking_url}
                                                        </a>
                                                        : ""
                                                }
                                            </p> */}
                                        </TrackingDetailsWrapper>
                                    </TrackingDetailsContainer>


                                    {/* If more than one product is in the order */}
                                    {
                                        elseSubOrder && elseSubOrder.length ?
                                            <OtherItemsContainer item={style.OtherItemsContainer}>
                                                <Text
                                                    tagType={style.OtherItemsHeading.tagType}
                                                    style={style.OtherItemsHeading.style}
                                                    text={style.OtherItemsHeading.text}>
                                                </Text>
                                                <OtherItemsContainerBox item={style.OtherItemsContainerBox}>
                                                    {elseSubOrder.map((item, key) => {
                                                        return (
                                                            <OtherItems item={style.OtherItems} key={key}>
                                                                <OtherItemImg item={style.OtherItemImgWrap}>
                                                                    {
                                                                        item.orderProduct?.productPicture && item.orderProduct?.productPicture.length > 0 ? (
                                                                            <ImageElement src={item.orderProduct?.productPicture && item.orderProduct?.productPicture.length > 0 ? item.orderProduct?.productPicture[0] : ""} alt="product images" style={style.OtherItemImg.custom_section_editable[14].style} />
                                                                        ) : (
                                                                            <ImageElement src={item.orderProduct?.defaultPicture && item.orderProduct?.defaultPicture.length > 0 ? item.orderProduct?.defaultPicture[0] : ""} alt="product images" style={style.OtherItemImg.custom_section_editable[14].style} />
                                                                        )
                                                                    }
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
                                                                                item.orderProduct.variant_scheme && item.orderProduct.variant_scheme.length ?
                                                                                    item.orderProduct.variant_scheme.map((subSubItem, subSubkey) => {
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
                                                                        <OtherItemtStatus item={style.OtherItemtStatus} >
                                                                            <Button text={style.ViewDetails.text} onClick={() => VieworderDetailHandle(orderId, item._id)} style={style.ViewDetails.style} />
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
                                            link="/contact-us"
                                        />
                                    </NeedHelpContainer>
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
                                            {
                                                getSingleOrderData?.tax_included === false ? (
                                                    <Text
                                                        tagType={style.CartTotal.tagType}
                                                        style={style.CartTotal.style}
                                                        text={getSingleOrderData?.orderTotal ?
                                                            getPrice(getSingleOrderData?.orderTotal - getSingleOrderData?.tax_amount) : getPrice(0)}>
                                                    </Text>
                                                ) : (
                                                    <Text
                                                        tagType={style.CartTotal.tagType}
                                                        style={style.CartTotal.style}
                                                        text={getSingleOrderData?.orderTotal ? getPrice(getSingleOrderData?.orderTotal) : getPrice(0)}>
                                                    </Text>
                                                )
                                            }
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
                                                text={getPrice(getSingleOrderData?.shipping_price)}>
                                            </Text>
                                        </OrderSummary>
                                        {
                                            getSingleOrderData?.tax_included === false &&
                                                getSingleOrderData?.tax_amount ?
                                                <OrderSummary item={style.OrderSummary}>
                                                    <Text
                                                        tagType={style.DeliveryFreePara.tagType}
                                                        style={style.DeliveryFreePara.style}
                                                        text={`Tax`}>
                                                    </Text>
                                                    <Text
                                                        tagType={style.DeliveryFree.tagType}
                                                        style={style.DeliveryFree.style}
                                                        text={getSingleOrderData?.tax_amount ? getPrice(getSingleOrderData?.tax_amount) : getPrice(0)}>
                                                    </Text>
                                                </OrderSummary>
                                                : ""
                                        }
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
                                                text={getSingleOrderData?.orderTotal ? getPrice(getSingleOrderData?.orderTotal + (getSingleOrderData?.shipping_price ? getSingleOrderData?.shipping_price : 0)) : getPrice(0)}>
                                            </Text>
                                        </OrderTotal>
                                    </PaymentSummary>
                                    {((getSingleOrderData.Status.includes("Proccessing") || getSingleOrderData.Status.includes("Placed")) && getSingleOrderData.suborders.every((item) => item.allowCancellation === true)) ?
                                        <div>
                                            <button onClick={() => handleContactSettingPopup()} >Cancel complete order</button>
                                        </div>
                                        : ""
                                    }
                                </OrderIDContainerRight>
                            </OrderIDContainer>
                        </MainWrapper>
                    </OrderIdHeroContainer>
                    : "Not Found" : <SpinnerLoader />
            }
        </React.Fragment>
    )
}

export default OrderDetailsTheme1;