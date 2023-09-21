import React, { useContext, useState } from 'react';
import styled from 'styled-components'
//  
// import Tabs from '../../../../../../Common/Tabs/Tabs';
// import AppLink from '../../../../../../Common/AppLink'
import ProfileImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile.svg'
import logoutImg from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/logout.svg'
import Product_img from '../../../../Assets/SectionComponent/Images/MyProfile/Theme1/Product_img.png'
import BackBtnImg from '../../../../../src/Assets/SectionComponent/Icons/backBtn.svg'
import Link from 'next/link';
import Image from 'next/image';
import { BackBtn, OrderDetail, OrderDetailContainer, ProdcutDetailContainer, ProductContainer, ProductDetail, ProductImgContainer, ProductMainContainer, ProductName, Products, SKU, Title } from './Orders.style';
import { MyProfile } from '../Theme1';
import ButtonElement from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import { activateProfile } from '@/store/actions/myprofile';
import { useDispatch } from 'react-redux';
import useMyOrders from '@/TemplateCustomHooks/useMyOrders';
import moment from 'moment';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const Orders = () => {

    const dispatch = useDispatch();
    const data = useContext(MyProfile);
    const [
        customerOrderListData, customerOrderListSuccess, handleCancelProduct, orderInfoHandler,
        ordersCount, setCurrentPage, currentPage, limit, suborderlength
    ] = useMyOrders();

    let styles = {
        ProductMainContainer: data?.custom_section_editable[66]?.style,
        ProductBackBtn: data?.custom_section_editable[67]?.style,
        ProductBackBtnLink: data?.custom_section_editable[68]?.style,
        ProductBackBtnSvg: data?.custom_section_editable[69]?.style,
        ProductBackBtnText: data?.custom_section_editable[70]?.style,
        OrderDetailContainer: data?.custom_section_editable[71]?.style,
        OrderDetailContainerLeftHeading: data?.custom_section_editable[72]?.style,
        OrderDetailContainerRightHeading: data?.custom_section_editable[73]?.style,
        ProductContainer: data?.custom_section_editable[74]?.style,
        Title: data?.custom_section_editable[75]?.style,
        ProdcutDetailContainer: data?.custom_section_editable[76]?.style,
        Products: data?.custom_section_editable[77]?.style,
        ProductImgContainer: data?.custom_section_editable[78]?.style,
        ProductImgContainerImage: data?.custom_section_editable[79]?.style,
        ProductDetail: data?.custom_section_editable[80]?.style,
        SKU: data?.custom_section_editable[81]?.style,
        ProductName: data?.custom_section_editable[82]?.style,
        ProductDetailLink: data?.custom_section_editable[83]?.style,
        ProdcutDetailContainerLink: data?.custom_section_editable[84]?.style,
        BackBtnImg: data?.custom_section_editable[150],
        noOrderFound: data?.custom_section_editable[151],
    }
    // console.log(data?.custom_section_editable[150], "data?.custom_section_editable[150]")
    const staticData = {
        "000002": [
            {
                "_id": "64cb73050cfff3349899fe90",
                "orderProduct": {
                    "showInOnlineStore": true,
                    "onSale": true,
                    "defaultVariation": false,
                    "outOfStock": false,
                    "cashOnDelivery": true,
                    "discount_by_percent": true,
                    "deliveryFees": 0,
                    "productPicture": [],
                    "defaultPicture": [
                        {
                            "isDeleted": false,
                            "_id": "64c4be00f55a9f07852c3682",
                            "src": "https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615297243morbius.png",
                            "business": "64c39dc59c2514b981cec71d",
                            "owner": "64c39d749c2514b981cec6ef",
                            "title": "morbius.png",
                            "alt": "",
                            "key": "64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615297243morbius.png",
                            "type": "img",
                            "size": 50943,
                            "desc": "",
                            "createdAt": "2023-07-29T07:21:36.057Z",
                            "updatedAt": "2023-07-29T07:21:36.057Z",
                            "__v": 0
                        }
                    ],
                    "tags": [],
                    "variationName": "Electra  Cat-eyeglasses for Adults  Light weight",
                    "discountFix": 0,
                    "discountPercentage": 0,
                    "variationActive": true,
                    "isDeleted": false,
                    "variant_scheme_title": [],
                    "variant_scheme_values": [],
                    "SKU": "y9528yqvr501",
                    "variant_scheme": [
                        {
                            "_id": "64c4bf8c4310390832be41f8",
                            "title": "Select frame",
                            "value": "Rectangle Frame"
                        }
                    ],
                    "stock": 999,
                    "price": 520,
                    "salePrice": 520,
                    "costPrice": 0,
                    "profit": 0,
                    "barcode": "",
                    "productId": "64c4bf8c4310390832be41f2",
                    "quantity_of_products": 1,
                    "allowCancellation": false,
                    "variationId": "64c4bf8c4310390832be41f7"
                },
                "cancelledByUser": false,
                "isDeleted": false,
                "orderId": "64cb73040cfff3349899fe87",
                "cartId": "64cb72dcd3eda4b49ba79358",
                "businessShopId": "64c39dc59c2514b981cec71d",
                "userId": "64cb6c142498526fb4768999",
                "order_id": "000002",
                "status": "Placed",
                "quantity": 1,
                "allowCancellation": false,
                "allowReturn": false,
                "variationId": "64c4bf8c4310390832be41f7",
                "createdAt": "2023-08-03T09:27:33.002Z",
                "updatedAt": "2023-08-03T09:27:33.002Z",
                "__v": 0
            },
            {
                "_id": "64cb73040cfff3349899fe8d",
                "orderProduct": {
                    "showInOnlineStore": true,
                    "onSale": true,
                    "defaultVariation": false,
                    "outOfStock": false,
                    "cashOnDelivery": true,
                    "discount_by_percent": true,
                    "deliveryFees": 0,
                    "productPicture": [],
                    "defaultPicture": [
                        {
                            "isDeleted": false,
                            "_id": "64c39f7fd485e607e156a381",
                            "src": "https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690541952204morbius.png",
                            "business": "64c39dc59c2514b981cec71d",
                            "owner": "64c39d749c2514b981cec6ef",
                            "title": "morbius.png",
                            "alt": "",
                            "key": "64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690541952204morbius.png",
                            "type": "img",
                            "size": 50943,
                            "desc": "",
                            "createdAt": "2023-07-28T10:59:11.497Z",
                            "updatedAt": "2023-07-28T10:59:11.497Z",
                            "__v": 0
                        },
                        {
                            "isDeleted": false,
                            "_id": "64c3be50d485e607e156a395",
                            "business": "64c39dc59c2514b981cec71d",
                            "owner": "64c39d749c2514b981cec6ef",
                            "src": "https://images.unsplash.com/photo-1581239125393-67d48d3dd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHxleWVnbGFzc2VzfGVufDB8fHx8MTY5MDU0MjEzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
                            "title": "Transparent eyeglasses lying on a laptop.",
                            "desc": "",
                            "alt": "silver framed eyeglasses on white table",
                            "size": 0,
                            "key": "",
                            "type": "img",
                            "createdAt": "2023-07-28T13:10:40.879Z",
                            "updatedAt": "2023-07-28T13:10:40.879Z",
                            "__v": 0
                        },
                        {
                            "isDeleted": false,
                            "_id": "64c3be50d485e607e156a397",
                            "business": "64c39dc59c2514b981cec71d",
                            "owner": "64c39d749c2514b981cec6ef",
                            "src": "https://images.unsplash.com/photo-1633621641966-23836fcafd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxleWVnbGFzc2VzfGVufDB8fHx8MTY5MDU0MjEzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
                            "title": "Green background and glasses",
                            "desc": "",
                            "alt": "a pair of glasses sitting on top of a table",
                            "size": 0,
                            "key": "",
                            "type": "img",
                            "createdAt": "2023-07-28T13:10:40.889Z",
                            "updatedAt": "2023-07-28T13:10:40.889Z",
                            "__v": 0
                        }
                    ],
                    "tags": [],
                    "variationName": "Morbius  Sleek steel wayfarer eyeglasses for Adults  Light weight",
                    "discountFix": 0,
                    "discountPercentage": 20,
                    "variationActive": true,
                    "isDeleted": false,
                    "variant_scheme_title": [],
                    "variant_scheme_values": [],
                    "SKU": "#100007801",
                    "variant_scheme": [
                        {
                            "_id": "64c3a01d9c7439082b01613e",
                            "title": "Select frame",
                            "value": "Rectangle Frame"
                        }
                    ],
                    "stock": 999,
                    "price": 520,
                    "salePrice": 416,
                    "costPrice": 0,
                    "profit": 0,
                    "barcode": "",
                    "productId": "64c3a01d9c7439082b016137",
                    "allowCancellation": false,
                    "quantity_of_products": 1,
                    "variationId": "64c3a01d9c7439082b01613d"
                },
                "cancelledByUser": false,
                "isDeleted": false,
                "orderId": "64cb73040cfff3349899fe87",
                "cartId": "64cb72dcd3eda4b49ba79358",
                "businessShopId": "64c39dc59c2514b981cec71d",
                "userId": "64cb6c142498526fb4768999",
                "order_id": "000002",
                "status": "Placed",
                "quantity": 1,
                "allowCancellation": false,
                "allowReturn": false,
                "variationId": "64c3a01d9c7439082b01613d",
                "createdAt": "2023-08-03T09:27:32.995Z",
                "updatedAt": "2023-08-03T09:27:32.995Z",
                "__v": 0
            }
        ]
    }
    const finalData = AppLinkUrl.isEditor() ? staticData : customerOrderListSuccess && customerOrderListData
    return (
        <ProductMainContainer item={styles?.ProductMainContainer}>
            <BackBtn item={styles?.ProductBackBtn} itemProductBackBtnSvg={styles?.ProductBackBtnSvg}>
                <ButtonElement onClick={() => dispatch(activateProfile(""))} style={styles?.ProductBackBtnLink}>
                    <BackBtnImg fill={styles?.BackBtnImg} />
                    <Text tagType={data?.custom_section_editable[70]?.tagType}
                        style={styles?.ProductBackBtnText}
                        text={"Orders"} />
                </ButtonElement>
            </BackBtn>

            {(customerOrderListSuccess || AppLinkUrl.isEditor()) && finalData && Object.entries(finalData).length ?
                Object.entries(finalData).map(([i, vl]) => {
                    return (
                        <React.Fragment key={i}>

                            <OrderDetailContainer item={styles?.OrderDetailContainer}>
                                <Text tagType={data?.custom_section_editable[72]?.tagType}
                                    style={styles?.OrderDetailContainerLeftHeading}
                                    text={`Order ID : #${vl[0]?.order_id}`} />
                                <Text tagType={data?.custom_section_editable[73]?.tagType}
                                    style={styles?.OrderDetailContainerRightHeading}
                                    text={`Order Date : ${moment(vl[0]?.order_placing_date).format("DD MMM YYYY")}`} />
                            </OrderDetailContainer>

                            <ProductContainer item={styles?.ProductContainer}>
                                <Text tagType={data?.custom_section_editable[75]?.tagType} style={styles?.Title}
                                    text={data?.custom_section_editable[75]?.text} />
                                {vl && vl.length && vl.map((item, key) => {
                                    return (
                                        <ProdcutDetailContainer item={styles?.ProdcutDetailContainer} key={key} >
                                            <Products item={styles?.Products}>
                                                <ProductImgContainer item={styles?.ProductImgContainer} >
                                                    {
                                                        item.orderProduct.productPicture && item.orderProduct.productPicture.length > 0 ? (
                                                            <ImageElement src={item.orderProduct.productPicture && item.orderProduct.productPicture.length > 0 ? item.orderProduct.productPicture[0]?.src : ""}
                                                                alt="Product_img" style={styles?.ProductImgContainerImage} />
                                                        ) : (
                                                            <ImageElement src={item.orderProduct.defaultPicture && item.orderProduct.defaultPicture.length > 0 ? item.orderProduct.defaultPicture[0]?.src : ""}
                                                                alt="Product_img" style={styles?.ProductImgContainerImage} />
                                                        )
                                                    }
                                                </ProductImgContainer>
                                                <ProductDetail item={styles?.ProductDetail}>
                                                    <div>
                                                        <Text tagType={data?.custom_section_editable[81]?.tagType}
                                                            style={styles?.SKU}
                                                            text={`SKU #${item.orderProduct.SKU}`} />
                                                        <Text tagType={data?.custom_section_editable[82]?.tagType}
                                                            style={styles?.ProductName}
                                                            text={item.orderProduct.variationName} />
                                                    </div>
                                                    <ButtonElement
                                                        onClick={() => orderInfoHandler(vl[0]?.order_id, item._id)}
                                                        text={data?.custom_section_editable[84]?.text}
                                                        style={styles?.ProdcutDetailContainerLink}
                                                    />
                                                </ProductDetail>

                                            </Products>

                                        </ProdcutDetailContainer>
                                    );
                                })}
                            </ProductContainer>
                        </React.Fragment>
                    );
                })
                :
                <Text
                    style={styles.noOrderFound.style}
                    text={styles.noOrderFound.text}
                    tagType={styles.noOrderFound.tagType}
                />

            }



        </ProductMainContainer>
    )
}

export default Orders
