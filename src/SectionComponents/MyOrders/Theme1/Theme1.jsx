import React, { useEffect, useState } from "react"
import Product_img from '../../../Assets/SectionComponent/Images/MyProfile/Theme1/Product_img.png'
import Image from 'next/image';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import { ButtonsContainer, HeadingMyOrder, MyOrderContainer, MyOrderDetailcontainer, MyOrderProduct, ProductWrap, MyOrderProductDetail, MyOrderProductDetailBox, OrdersWrapper, MyOrderProductImgWrap, MyOrderTitle, MyOrdersContainer, MyOrdersMainContainer, OrderDetailsContainer, OrderMainContainers, Processing, TitleOrderDetails, TitleProduct, TitleVarient, VarientContainer, VarientWrapper, OrderDetailsWrap, CancleProductBtn, ViewOrderBtn, ButtonsWrap, MyOrderMobileCard, MyOrderMobileTitle, BackBtnContainer } from './MyOrders.style'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';
import useMyOrders from "@/TemplateCustomHooks/useMyOrders";
import { useDispatch, useSelector } from "react-redux";
import Storage from "@/Classes/Storage";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import Auth from "@/Classes/Auth";
import { Getcart, GuestGetcart } from "@/store/actions/cartOrder/cartOrder";
import { useParams } from "react-router-dom";
import moment from 'moment/moment';
import { styled } from "styled-components";
import BackBtnImg from '../../../Assets/SectionComponent/Icons/backBtn.svg';
import { useRouter } from 'next/router'
import { dummyImgProduct } from "@/Constant/constants";



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


const MyOrdersTheme1 = ({ children }) => {
    const dispatch = useDispatch();
    const history = useAppNavigate();
    const OrderId = useParams();

    const [
        customerOrderListData, customerOrderListSuccess, handleCancelProduct, orderInfoHandler,
        ordersCount, setCurrentPage, currentPage, limit, suborderlength
    ] = useMyOrders();

    const { user, subdomainuser, customerCartData, cartLoading,
        customerCartSuccess, business } = useSelector((state) => {
            return {
                user: state.user,
                subdomainuser: state.subdomainuser,
                business: state.websiteTemplate.getTemplate.data.buisnessData
            }
        })

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const style = {
        MyOrdersContainer: children.custom_section_editable[0].style,
        HeadingMyOrder: children.custom_section_editable[1].style,
        HeadingText: children.custom_section_editable[2],
        OrderCountPara: children.custom_section_editable[3],
        MyOrdersMainContainer: children.custom_section_editable[4].style,
        OrderMainContainers: children.custom_section_editable[5].style,
        MyOrderDetailcontainer: children.custom_section_editable[6].style,
        OrderIdText: children.custom_section_editable[7],
        MyOrderContainer: children.custom_section_editable[8].style,
        MyOrderTitle: children.custom_section_editable[9].style,
        TitleProduct: children.custom_section_editable[10].style,
        TitleVarient: children.custom_section_editable[11].style,
        TitleOrderDetails: children.custom_section_editable[12].style,
        MyOrderProductDetailBox: children.custom_section_editable[13].style,
        OrdersWrapper: children.custom_section_editable[14].style,
        ProductWrap: children.custom_section_editable[15].style,
        MyOrderProductImgWrap: children.custom_section_editable[16].style,
        MyOrderProductImg: children.custom_section_editable[17].style,
        MyOrderProductDetail: children.custom_section_editable[18].style,
        SKUText: children.custom_section_editable[19],
        ProductName: children.custom_section_editable[20],
        VarientWrapper: children.custom_section_editable[21].style,
        VarientContainer: children.custom_section_editable[22].style,
        Varients: children.custom_section_editable[23],
        VarientsType: children.custom_section_editable[24],
        OrderDetailsContainer: children.custom_section_editable[25].style,
        OrderDetailsWrap: children.custom_section_editable[26].style,
        OrderIdPara: children.custom_section_editable[27],
        OrderID: children.custom_section_editable[28],
        OrderDatePara: children.custom_section_editable[29],
        OrderDate: children.custom_section_editable[30],
        OrderNumberPara: children.custom_section_editable[31],
        OrderNumber: children.custom_section_editable[32],
        StatusPara: children.custom_section_editable[33],
        Status: children.custom_section_editable[34],
        ButtonsContainer: children.custom_section_editable[35].style,
        ButtonsWrap: children.custom_section_editable[36].style,
        ViewOrderBtn: children.custom_section_editable[37],
        CancleProductBtn: children.custom_section_editable[38],
        // data1: children.data[0].data1,
        // data2: children.data[1].data2,
    }
    const router = useRouter()
    return (
        <MyOrdersContainer item={style.MyOrdersContainer}>
            {
                window.innerWidth > 991 ? <HeadingMyOrder item={style.HeadingMyOrder}>
                    <Text tagType={style.HeadingText.tagType} style={style.HeadingText.style} text={style.HeadingText.text}></Text>
                    {
                        customerOrderListSuccess ?
                            <Text tagType={style.OrderCountPara.tagType} style={style.OrderCountPara.style} text={`${suborderlength} Order(s)`}></Text> : ""
                    }
                </HeadingMyOrder> : <BackBtnContainer onClick={() => router.back()}>
                    <BackBtnImg />
                    <p>Orders</p>
                </BackBtnContainer>
            }

            <MyOrdersMainContainer item={style.MyOrdersMainContainer}>
                <OrderMainContainers item={style.OrderMainContainers}>
                    {
                        window.innerWidth > 991 ?
                            customerOrderListSuccess ?
                                customerOrderListData && Object.entries(customerOrderListData).length ? Object.entries(customerOrderListData).map(([i, vl]) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <MyOrderDetailcontainer item={style.MyOrderDetailcontainer}>
                                                <Text tagType={style.OrderIdText.tagType} text={`Order ID : ${vl[0].order_id}`} style={style.OrderIdText.style} />
                                                {

                                                    <Text tagType={style.OrderIdText.tagType} text={`Order Date : ${moment(vl[0].createdAt).format("DD MMM YYYY")}`} style={style.OrderIdText.style}>  </Text>
                                                }
                                            </MyOrderDetailcontainer>

                                            <MyOrderContainer item={style.MyOrderContainer}>
                                                <MyOrderTitle item={style.MyOrderTitle}>
                                                    <tr>
                                                        <TitleProduct scope="col" item={style.TitleProduct}> Product</TitleProduct>
                                                        <th scope="col"> </th>
                                                        <TitleVarient scope="col" item={style.TitleVarient}>Variant</TitleVarient>
                                                        <TitleOrderDetails scope="col" item={style.TitleOrderDetails}>Order Details</TitleOrderDetails>
                                                    </tr>
                                                </MyOrderTitle>
                                                {vl && vl.length && vl.map((item, key) =>
                                                    <MyOrderProductDetailBox key={key} item={style.MyOrderProductDetailBox}>
                                                        <OrdersWrapper item={style.OrdersWrapper}>
                                                            <MyOrderProduct colSpan='2'>
                                                                <ProductWrap item={style.ProductWrap}>
                                                                    <MyOrderProductImgWrap item={style.MyOrderProductImgWrap}>
                                                                        <ImageElement src={item.orderProduct.productPicture.length ? item?.orderProduct?.productPicture[0] : item.orderProduct.defaultPicture.length ? item.orderProduct.defaultPicture[0] : ""} alt={"Product_img"} style={style.MyOrderProductImg}  defaultImage={dummyImgProduct}  />
                                                                    </MyOrderProductImgWrap>
                                                                    <MyOrderProductDetail item={style.MyOrderProductDetail}>
                                                                        <Text
                                                                            tagType={style.SKUText.tagType}
                                                                            text={`SKU ${item?.orderProduct?.SKU}`}
                                                                            style={style.SKUText.style}
                                                                        />
                                                                        <Text
                                                                            tagType={style.ProductName.tagType}
                                                                            text={` ${item?.orderProduct?.variationName}`}
                                                                            style={style.ProductName.style}
                                                                        />
                                                                    </MyOrderProductDetail>
                                                                </ProductWrap>
                                                            </MyOrderProduct>
                                                            <VarientWrapper item={style.VarientWrapper}>
                                                                {
                                                                    item.orderProduct.variant_scheme && item.orderProduct.variant_scheme.length ?
                                                                        item.orderProduct.variant_scheme.map((varItem, Subkey) => {
                                                                            return (
                                                                                <React.Fragment key={Subkey}>
                                                                                    <VarientContainer item={style.VarientContainer}>
                                                                                        <Text
                                                                                            tagType={style.Varients.tagType}
                                                                                            text={`${varItem?.title} `}
                                                                                            style={style.Varients.style}
                                                                                        />
                                                                                        <Text
                                                                                            tagType={style.VarientsType.tagType}
                                                                                            text={`${varItem?.value}`}
                                                                                            style={style.VarientsType.style}
                                                                                        />
                                                                                    </VarientContainer>
                                                                                </React.Fragment>
                                                                            );
                                                                        }) : '-'
                                                                }

                                                            </VarientWrapper>
                                                            <OrderDetailsContainer item={style.OrderDetailsContainer}>
                                                                <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                                    <Text
                                                                        tagType={style.OrderIdPara.tagType}
                                                                        text={style.OrderIdPara.text}
                                                                        style={style.OrderIdPara.style}
                                                                    />
                                                                    <Text
                                                                        tagType={style.OrderID.tagType}
                                                                        text={`#${item?.orderId}`}
                                                                        style={style.OrderID.style}
                                                                    />
                                                                </OrderDetailsWrap>
                                                                <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                                    <Text
                                                                        tagType={style.OrderDatePara.tagType}
                                                                        text={style.OrderDatePara.text}
                                                                        style={style.OrderDatePara.style}
                                                                    />
                                                                    <Text
                                                                        tagType={style.OrderDate.tagType}
                                                                        text={`${moment(item?.createdAt).format("ll")}`}
                                                                        style={style.OrderDate.style}
                                                                    />
                                                                </OrderDetailsWrap>
                                                                {

                                                                    // <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                                    //     <Text
                                                                    //         tagType={style.OrderNumberPara.tagType}
                                                                    //         text={style.OrderNumberPara.text}
                                                                    //         style={style.OrderNumberPara.style}
                                                                    //     />
                                                                    //     <Text
                                                                    //         tagType={style.OrderNumber.tagType}
                                                                    //         text={item.quantity}
                                                                    //         style={style.OrderNumber.style}
                                                                    //     />
                                                                    // </OrderDetailsWrap>

                                                                    // // console.log(item,"shadab saifi")
                                                                }
                                                                <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                                    <Text
                                                                        tagType={style.StatusPara.tagType}
                                                                        text={style.StatusPara.text}
                                                                        style={style.StatusPara.style}
                                                                    />
                                                                    {
                                                                        // <Text
                                                                        //     tagType={style.Status.tagType}
                                                                        //     text={item?.status}
                                                                        //     style={style.Status.style}
                                                                        // />
                                                                    }
                                                                    <StateText item={style.Status.style} className={`${item.status === "Placed" ? "primary" : item.status === "Cancelled" ? "red" : item.status === "In Transit" ? "shippedcolor" : item.status === "Failed" ? "red" : item.status === "Delivered" ? "green" : item.status === "Processing" ? "primary" : item.status === "Rejected" ? "red" : ""}`}>
                                                                        {item?.status}
                                                                    </StateText>
                                                                </OrderDetailsWrap>
                                                            </OrderDetailsContainer>
                                                            <ButtonsContainer item={style.ButtonsContainer}>
                                                                <ButtonsWrap item={style.ButtonsWrap}>
                                                                    <Button text={`View Order Detail`} onClick={() => orderInfoHandler(vl[0]?.order_id, item._id)} style={style.ViewOrderBtn.style} />
                                                                    {item?.allowCancellation === true && (item?.status === "Placed" || item?.status === "Processing") ?
                                                                        <Button text={item?.status === "Failed" || item?.status === "Cancelled" ? "Cancelled" : "Cancel Product"} disabled={item?.status === "Failed" || item?.status === "Cancelled"} onClick={() => handleCancelProduct(item.orderId, item._id)} style={style.CancleProductBtn.style} />
                                                                        : ""
                                                                    }
                                                                </ButtonsWrap>
                                                            </ButtonsContainer>
                                                        </OrdersWrapper>
                                                    </MyOrderProductDetailBox>

                                                )}

                                            </MyOrderContainer>

                                        </React.Fragment>
                                    )
                                }) :
                                    (<Text tagType={style.HeadingText.tagType} style={style.HeadingText.style} text={`No Orders Found.`}></Text>)
                                :
                                <SpinnerLoader /> :
                            customerOrderListSuccess ?
                                customerOrderListData && Object.entries(customerOrderListData).length ? Object.entries(customerOrderListData).map(([i, vl]) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <MyOrderDetailcontainer item={style.MyOrderDetailcontainer}>
                                                <Text tagType={style.OrderIdText.tagType} text={`Order ID : ${vl[0].order_id}`} style={style.OrderIdText.style} />
                                                {

                                                    <Text tagType={style.OrderIdText.tagType} text={`Order Date : ${moment(vl[0].createdAt).format("DD MMM YYYY")}`} style={style.OrderIdText.style}>  </Text>
                                                }
                                            </MyOrderDetailcontainer>

                                            <MyOrderMobileCard item={style.MyOrderContainer}>
                                                <MyOrderMobileCard>
                                                    <MyOrderMobileTitle item={style.MyOrderTitle}>
                                                        <Text item={style.TitleProduct} text={"Product"} />
                                                    </MyOrderMobileTitle>
                                                </MyOrderMobileCard>
                                                {vl && vl.length && vl.map((item, key) =>
                                                    // <MyOrderProductDetailBox key={key} item={style.MyOrderProductDetailBox}>
                                                    //     <OrdersWrapper item={style.OrdersWrapper}>
                                                    //     <MyOrderProduct colSpan='2'>
                                                    //             <ProductWrap item={style.ProductWrap}>
                                                    //                 <MyOrderProductImgWrap item={style.MyOrderProductImgWrap}>
                                                    //                     <ImageElement src={item.orderProduct.productPicture.length ? item?.orderProduct?.productPicture[0] : item.orderProduct.defaultPicture.length ? item.orderProduct.defaultPicture[0] : ""} alt={"Product_img"} style={style.MyOrderProductImg} />
                                                    //                 </MyOrderProductImgWrap>
                                                    //                 <MyOrderProductDetail item={style.MyOrderProductDetail}>
                                                    //                     <Text
                                                    //                         tagType={style.SKUText.tagType}
                                                    //                         text={`SKU ${item?.orderProduct?.SKU}`}
                                                    //                         style={style.SKUText.style}
                                                    //                     />
                                                    //                     <Text
                                                    //                         tagType={style.ProductName.tagType}
                                                    //                         text={` ${item?.orderProduct?.variationName}`}
                                                    //                         style={style.ProductName.style}
                                                    //                     />
                                                    //                     <ButtonsContainer item={style.ButtonsContainer}>
                                                    //                         <ButtonsWrap item={style.ButtonsWrap}>
                                                    //                             <Button text={`View Order Detail`} onClick={() => orderInfoHandler(vl[0]?.order_id, item._id)} style={style.ViewOrderBtn.style} />
                                                    //                             {item?.allowCancellation === true && (item?.status === "Placed" || item?.status === "Processing") ?
                                                    //                                 <Button text={item?.status === "Failed" || item?.status === "Cancelled" ? "Cancelled" : "Cancel Product"} disabled={item?.status === "Failed" || item?.status === "Cancelled"} onClick={() => handleCancelProduct(item.orderId, item._id)} style={style.CancleProductBtn.style} />
                                                    //                                 : ""
                                                    //                             }
                                                    //                         </ButtonsWrap>
                                                    //                     </ButtonsContainer>
                                                    //                 </MyOrderProductDetail>
                                                    //             </ProductWrap>
                                                    //         </MyOrderProduct>
                                                    //     <ProductWrap item={style.ProductWrap}>
                                                    //         <MyOrderProductImgWrap item={style.MyOrderProductImgWrap}>
                                                    //             <ImageElement src={item.orderProduct.productPicture.length ? item?.orderProduct?.productPicture[0] : item.orderProduct.defaultPicture.length ? item.orderProduct.defaultPicture[0] : ""} alt={"Product_img"} style={style.MyOrderProductImg} />
                                                    //         </MyOrderProductImgWrap>
                                                    //         <MyOrderProductDetail item={style.MyOrderProductDetail}>
                                                    //             <Text
                                                    //                 tagType={style.SKUText.tagType}
                                                    //                 text={`SKU ${item?.orderProduct?.SKU}`}
                                                    //                 style={style.SKUText.style}
                                                    //             />
                                                    //             <Text
                                                    //                 tagType={style.ProductName.tagType}
                                                    //                 text={` ${item?.orderProduct?.variationName}`}
                                                    //                 style={style.ProductName.style}
                                                    //             />
                                                    //             <ButtonsContainer item={style.ButtonsContainer}>
                                                    //                 <ButtonsWrap item={style.ButtonsWrap}>
                                                    //                     <Button text={`View Order Detail`} onClick={() => orderInfoHandler(vl[0]?.order_id, item._id)} style={style.ViewOrderBtn.style} />
                                                    //                     {item?.allowCancellation === true && (item?.status === "Placed" || item?.status === "Processing") ?
                                                    //                         <Button text={item?.status === "Failed" || item?.status === "Cancelled" ? "Cancelled" : "Cancel Product"} disabled={item?.status === "Failed" || item?.status === "Cancelled"} onClick={() => handleCancelProduct(item.orderId, item._id)} style={style.CancleProductBtn.style} />
                                                    //                         : ""
                                                    //                     }
                                                    //                 </ButtonsWrap>
                                                    //             </ButtonsContainer>
                                                    //         </MyOrderProductDetail>
                                                    //     </ProductWrap>
                                                    //     <VarientWrapper item={style.VarientWrapper}>
                                                    //             {
                                                    //                 item.orderProduct.variant_scheme && item.orderProduct.variant_scheme.length ?
                                                    //                     item.orderProduct.variant_scheme.map((varItem, Subkey) => {
                                                    //                         return (
                                                    //                             <React.Fragment key={Subkey}>
                                                    //                                 <VarientContainer item={style.VarientContainer}>
                                                    //                                     <Text
                                                    //                                         tagType={style.Varients.tagType}
                                                    //                                         text={`${varItem?.title} `}
                                                    //                                         style={style.Varients.style}
                                                    //                                     />
                                                    //                                     <Text
                                                    //                                         tagType={style.VarientsType.tagType}
                                                    //                                         text={`${varItem?.value}`}
                                                    //                                         style={style.VarientsType.style}
                                                    //                                     />
                                                    //                                 </VarientContainer>
                                                    //                             </React.Fragment>
                                                    //                         );
                                                    //                     }) : '-'
                                                    //             }

                                                    //         </VarientWrapper>
                                                    //     <OrderDetailsContainer item={style.OrderDetailsContainer}>
                                                    //             <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                    //                 <Text
                                                    //                     tagType={style.OrderIdPara.tagType}
                                                    //                     text={style.OrderIdPara.text}
                                                    //                     style={style.OrderIdPara.style}
                                                    //                 />
                                                    //                 <Text
                                                    //                     tagType={style.OrderID.tagType}
                                                    //                     text={`#${item?.orderId}`}
                                                    //                     style={style.OrderID.style}
                                                    //                 />
                                                    //             </OrderDetailsWrap>
                                                    //             <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                    //                 <Text
                                                    //                     tagType={style.OrderDatePara.tagType}
                                                    //                     text={style.OrderDatePara.text}
                                                    //                     style={style.OrderDatePara.style}
                                                    //                 />
                                                    //                 <Text
                                                    //                     tagType={style.OrderDate.tagType}
                                                    //                     text={`${moment(item?.createdAt).format("ll")}`}
                                                    //                     style={style.OrderDate.style}
                                                    //                 />
                                                    //             </OrderDetailsWrap>
                                                    //             {

                                                    //                 // <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                    //                 //     <Text
                                                    //                 //         tagType={style.OrderNumberPara.tagType}
                                                    //                 //         text={style.OrderNumberPara.text}
                                                    //                 //         style={style.OrderNumberPara.style}
                                                    //                 //     />
                                                    //                 //     <Text
                                                    //                 //         tagType={style.OrderNumber.tagType}
                                                    //                 //         text={item.quantity}
                                                    //                 //         style={style.OrderNumber.style}
                                                    //                 //     />
                                                    //                 // </OrderDetailsWrap>

                                                    //                 // // console.log(item,"shadab saifi")
                                                    //             }
                                                    //             <OrderDetailsWrap item={style.OrderDetailsWrap}>
                                                    //                 <Text
                                                    //                     tagType={style.StatusPara.tagType}
                                                    //                     text={style.StatusPara.text}
                                                    //                     style={style.StatusPara.style}
                                                    //                 />
                                                    //                 {
                                                    //                     // <Text
                                                    //                     //     tagType={style.Status.tagType}
                                                    //                     //     text={item?.status}
                                                    //                     //     style={style.Status.style}
                                                    //                     // />
                                                    //                 }
                                                    //                 <StateText item={style.Status.style} className={`${item.status === "Placed" ? "primary" : item.status === "Cancelled" ? "red" : item.status === "In Transit" ? "shippedcolor" : item.status === "Failed" ? "red" : item.status === "Delivered" ? "green" : item.status === "Processing" ? "primary" : item.status === "Rejected" ? "red" : ""}`}>
                                                    //                     {item?.status}
                                                    //                 </StateText>
                                                    //             </OrderDetailsWrap>
                                                    //         </OrderDetailsContainer>

                                                    //     </OrdersWrapper>
                                                    // </MyOrderProductDetailBox>
                                                    <ProductWrap item={style.ProductWrap} key={key}>
                                                        <MyOrderProductImgWrap item={style.MyOrderProductImgWrap}>
                                                            <ImageElement src={item.orderProduct.productPicture.length ? item?.orderProduct?.productPicture[0] : item.orderProduct.defaultPicture.length ? item.orderProduct.defaultPicture[0] : ""} alt={"Product_img"} style={style.MyOrderProductImg} />
                                                        </MyOrderProductImgWrap>
                                                        <MyOrderProductDetail item={style.MyOrderProductDetail}>
                                                            <Text
                                                                tagType={style.SKUText.tagType}
                                                                text={`SKU ${item?.orderProduct?.SKU}`}
                                                                style={style.SKUText.style}
                                                            />
                                                            <Text
                                                                tagType={style.ProductName.tagType}
                                                                text={` ${item?.orderProduct?.variationName}`}
                                                                style={style.ProductName.style}
                                                            />
                                                            <ButtonsContainer item={style.ButtonsContainer}>
                                                                <ButtonsWrap item={style.ButtonsWrap}>
                                                                    <Button text={`View Order Detail`} onClick={() => orderInfoHandler(vl[0]?.order_id, item._id)} style={style.ViewOrderBtn.style} />
                                                                    {item?.allowCancellation === true && (item?.status === "Placed" || item?.status === "Processing") ?
                                                                        <Button text={item?.status === "Failed" || item?.status === "Cancelled" ? "Cancelled" : "Cancel Product"} disabled={item?.status === "Failed" || item?.status === "Cancelled"} onClick={() => handleCancelProduct(item.orderId, item._id)} style={style.CancleProductBtn.style} />
                                                                        : ""
                                                                    }
                                                                </ButtonsWrap>
                                                            </ButtonsContainer>
                                                        </MyOrderProductDetail>
                                                    </ProductWrap>

                                                )}

                                            </MyOrderMobileCard>

                                        </React.Fragment>
                                    )
                                }) :
                                    (<Text tagType={style.HeadingText.tagType} style={style.HeadingText.style} text={`No Orders Found.`}></Text>)
                                :
                                <SpinnerLoader />

                    }

                </OrderMainContainers>
            </MyOrdersMainContainer>
        </MyOrdersContainer>
    )
}

export default MyOrdersTheme1
