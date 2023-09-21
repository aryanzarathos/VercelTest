import React, { createRef, useEffect, useState } from 'react'
import ShareIcon from "../../../Assets/SectionComponent/Images/ProductDetails/Theme1/share.svg";
import TwitterIcon from "../../../Assets/SectionComponent/Images/ProductDetails/Theme1/Vector(1).svg";
import FacebookIcon from "../../../Assets/SectionComponent/Images/ProductDetails/Theme1/Vector(2).svg";
import MailIcon from "../../../Assets/SectionComponent/Images/ProductDetails/Theme1/Vector(3).svg";
import LinkIcon from "../../../Assets/SectionComponent/Images/ProductDetails/Theme1/Group.svg";
// import FormError from '../../../SectionCommon/Form/FormError';
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import RenderTabs from '../../../CommonComponents/Tabs/RenderTabs';
import { AddtoCart, Addto__Wishlist, Breadcrumb, Cart, SpinnerLoader_wrap, ContainerMainLeft, ContainerMainRight, HorizontalLine, HorizontalRow, ImageContainer, ImageWrapper, Input, InputWrapper, LeftArrow, MainContainer, Offer, OldPrice, Price, PriceDetail, ProductCategoryList, ProductCategoryListItem, ProductCategoryWrapper, ProductCode, ProductDetailContainerMain, ProductDetailTabs, ProductHeading, ProductList, ProductListImg, Product__Info, QuantityItem, QuantityItemText, QuantityText, RightArrow, SelectVarianterror, Share, Social, SocialShareLink, Tabs__Content, Tabs__Content__List, Tabs__Content__List__Item } from './ProductDetailsTheme1.style';
// import Breadcrumbs from '../../../SectionCommon/Breadcrumbs';
// import BreadcrumbsItem from '../../../SectionCommon/Breadcrumbs/BreadcrumbsItem';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import AddToCart from "../../../Assets/SectionComponent/Icons/addToCart.svg";
import WishlistIcon from "../../../Assets/SectionComponent/Icons/wislist.svg";
import LeftArrowIcon from "../../../Assets/SectionComponent/Icons/leftArrow.svg";
import RightArrowIcon from "../../../Assets/SectionComponent/Icons/rightArrow.svg";
import WishlistProductSlider from '../../WishlistPopUp/Theme1/WishlistProductSlider';
import useProductDetailPopUp from '../../../TemplateCustomHooks/useProductDetailPopUp';
import usePriceDifference from '../../../CustomHooks/usePriceDifference';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductDetail } from '../../../store/actions/productList';
import useAddToCartStyle from "../../../TemplateCustomHooks/useAddToCartStyle";
import useShare from '@/CustomHooks/useShare';
import ProductSpecification from "./ProductSpecification"
import { ButtonElement } from '@/SectionsLayout/Elements/ButtonElement/ButtonStyle';
import ProductPageButton from '../ProductPageButton';
import { useRef } from 'react';
import CounterSvg from '../../../Assets/SectionComponent/Icons/CounterSvg.svg';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { randomUUID } from 'crypto';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';



const ProductDetailsTheme1 = ({ children }) => {

  const data = children;
  const dispatch = useDispatch();

  let FinalData = AppLinkUrl.isEditor()
    ? {
      "product": {
        "_id": "64c3a01d9c7439082b016137",
        "tax": {
          "taxPercentage": 0
        },
        "uncategorized": true,
        "onSale": true,
        "shipping_cost": 0,
        "defaultVariation": false,
        "newArrival": false,
        "bestSeller": false,
        "categoryId": [],
        "subSubCategoryId": [],
        "subCategoryId": [],
        "collectionId": [],
        "deliveryFees": 0,
        "physicalProduct": true,
        "productPicture": [
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
        "productSearch": "",
        "tags": [],
        "discountAvailability": false,
        "discount_by_percent": true,
        "discountPercentage": 20,
        "productActive": "active",
        "isFavourite": false,
        "isDeleted": false,
        "cod": true,
        "metaKeywords": [],
        "shipment_length": 0,
        "shipment_width": 0,
        "shipment_height": 0,
        "shipment_weight": 0,
        "productName": "Morbius  Sleek steel wayfarer eyeglasses for Adults  Light weight",
        "productDescription": "<p>Crafted in supreme quality IP-plated titanium material<br>Super-sleek shape for stunning style and a striking look<br>Comes with a complimentary micro-fibre cloth and a classic eyewear case<br>Alias - Pro Titanium JJ E12634 Unisex Eyeglasses<br>Product ID: 1000078<br></p>",
        "metaDescription": "Crafted in supreme quality IP-plated titanium material Super-sleek shape for stunning style and a striking look Comes with a complimentary micro-fibre clot",
        "metaTitle": "Morbius  Sleek steel wayfarer eyeglasses for Adults  Light weight",
        "urlSlug": "Morbius--Sleek-steel-wayfarer-eyeglasses-for-Adults--Light-weight",
        "price": 520,
        "salePrice": 416,
        "SKU": "#1000078",
        "stock": 1000,
        "variant": [
          {
            "isActive": true,
            "value": [
              "Rectangle Frame",
              "Round Frame",
              "Square Frame",
              "Aviator Frame ",
              "Cat-eye Frame",
              "Rimless Frame",
              "Half-Rim Frames"
            ],
            "_id": "64c3a01d9c7439082b016138",
            "title": "Select frame",
            "isConnectImg": false,
            "imageSet": [],
            "variant_id": "64c3a01d9c7439082b01614d"
          }
        ],
        "miscellaneous": [
          {
            "_id": "64c3a01d9c7439082b016139",
            "title": "Nearby Store",
            "description": "<p>We are available at the nearest store.</p>"
          },
          {
            "_id": "64c3a01d9c7439082b01613a",
            "title": "Privacy Policy",
            "description": "<p>Please find our policy attached.</p>"
          }
        ],
        "businessShopId": "64c39dc59c2514b981cec71d",
        "base_currency": "₹",
        "variationOption": [],
        "rating": [],
        "comment": [],
        "likeProfile": [],
        "Review": [],
        "additionalSection": [],
        "createdAt": "2023-07-28T11:01:49.676Z",
        "updatedAt": "2023-07-28T14:19:14.096Z",
        "__v": 0,
        "costPrice": 0,
        "profit": 0,
        "ribbon": "",
        "tax_included_in_price": false
      },
      "variation": [
        {
          "_id": "64c3a01d9c7439082b01613d",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
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
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.689Z",
          "updatedAt": "2023-07-28T14:19:14.032Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b01613f",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007802",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b016140",
              "title": "Select frame",
              "value": "Round Frame"
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.689Z",
          "updatedAt": "2023-07-28T14:19:14.036Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b016141",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007803",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b016142",
              "title": "Select frame",
              "value": "Square Frame"
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.690Z",
          "updatedAt": "2023-07-28T14:19:14.040Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b016143",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007804",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b016144",
              "title": "Select frame",
              "value": "Aviator Frame "
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.690Z",
          "updatedAt": "2023-07-28T14:19:14.043Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b016145",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007805",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b016146",
              "title": "Select frame",
              "value": "Cat-eye Frame"
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.690Z",
          "updatedAt": "2023-07-28T14:19:14.046Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b016147",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007806",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b016148",
              "title": "Select frame",
              "value": "Rimless Frame"
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.690Z",
          "updatedAt": "2023-07-28T14:19:14.049Z",
          "allowCancellation": null
        },
        {
          "_id": "64c3a01d9c7439082b016149",
          "variationStatus": "active",
          "showInOnlineStore": true,
          "onSale": true,
          "defaultVariation": false,
          "outOfStock": false,
          "cod": true,
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
          "discount_by_percent": true,
          "discountPercentage": 20,
          "variationActive": true,
          "isDeleted": false,
          "variant_scheme_title": [],
          "variant_scheme_values": [],
          "SKU": "#100007807",
          "variant_scheme": [
            {
              "_id": "64c3a01d9c7439082b01614a",
              "title": "Select frame",
              "value": "Half-Rim Frames"
            }
          ],
          "stock": 1000,
          "price": 520,
          "businessShopId": "64c39dc59c2514b981cec71d",
          "salePrice": 416,
          "costPrice": 0,
          "profit": 0,
          "barcode": "",
          "tax_included_in_price": false,
          "base_currency": "₹",
          "sellOutofStock": false,
          "productId": "64c3a01d9c7439082b016137",
          "__v": 0,
          "createdAt": "2023-07-28T11:01:49.690Z",
          "updatedAt": "2023-07-28T14:19:14.053Z",
          "allowCancellation": null
        }
      ]
    }
    : data?.data?.data;
  let ProductData = FinalData?.product
  let VariationData = FinalData?.variation

  const { user, subdomainuser, customerCartData,
    customerCartSuccess, postLoading, guestCustomerCartData, postGuestAddCartLoading, guestCustomerCartSuccess } = useSelector((state) => {
      return {
        user: state.user,
        subdomainuser: state.subdomainuser,
        customerCartData: state.cartOrder.customerCart?.data,
        customerCartSuccess: state.cartOrder.customerCart.success,
        postLoading: state.cartOrder.customerCart.postLoading,
        postSuccess: state.cartOrder.customerCart.postSuccess,
        postGuestAddCartLoading: state.guestCart.guestCustomerCart.loading,
        guestCustomerCartData: state.guestCart.guestCustomerCart?.data,
        guestCustomerCartSuccess: state.guestCart.guestCustomerCart.success,

      }
    });

  useEffect(() => {
    if (!AppLinkUrl.isEditor()) {
      if (FinalData && VariationData && ProductData) {
        dispatch(AddProductDetail(FinalData));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FinalData, ProductData, VariationData]);
  useEffect(() => {
    if (AppLinkUrl.isEditor()) {
      if (FinalData && VariationData && ProductData) {
        dispatch(AddProductDetail(FinalData));
      }
    }
  }, []);
  const [showProductDetails, quantity, variationValueSeletced, setQuantity, VariationChange, checkWishListed, PushToBag, addToCartHandler, addToWishListHandler] = useProductDetailPopUp();
  const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
  const [AddToWishListPopUp] = useAddToCartStyle();
  const [shareUrl, copyToClipBoard, copySuccess] = useShare("", "")

  let styles = {
    ProductDetailContainerMain: data?.custom_section_editable[0]?.style,
    MainContainer: data?.custom_section_editable[1]?.style,
    ContainerMainRight: data?.custom_section_editable[2]?.style,
    ProductCode: data?.custom_section_editable[3]?.style,
    ProductHeading: data?.custom_section_editable[4]?.style,
    PriceDetail: data?.custom_section_editable[5]?.style,
    Price: data?.custom_section_editable[6]?.style,
    OldPrice: data?.custom_section_editable[7]?.style,
    Offer: data?.custom_section_editable[8]?.style,
    Hr: data?.custom_section_editable[9]?.style,
    ProductCategoryWrapper: data?.custom_section_editable[10]?.style,
    QuantityText: data?.custom_section_editable[11]?.style,
    ProductCategoryList: data?.custom_section_editable[12]?.style,
    ProductCategoryListItem: data?.custom_section_editable[13]?.style,
    SelectVarianterror: data?.custom_section_editable[14]?.style,
    FormError: data?.custom_section_editable[15]?.style,
    QuantityItem: data?.custom_section_editable[16]?.style,
    Input: data?.custom_section_editable[17]?.style,
    QuantityItemText: data?.custom_section_editable[18]?.style,
    Cart: data?.custom_section_editable[19]?.style,
    AddtoCart: data?.custom_section_editable[20]?.style,
    AddtoCartLink: data?.custom_section_editable[21]?.style,
    Addto__Wishlist: data?.custom_section_editable[22]?.style,
    Addto__WishlistLink: data?.custom_section_editable[23]?.style,
    HorizontalLine: data?.custom_section_editable[24]?.style,
    Product__Info: data?.custom_section_editable[25]?.style,
    LeftArrow: data?.custom_section_editable[26]?.style,
    LeftArrowIcon: data?.custom_section_editable[27]?.style,
    ProductDetailTabs: data?.custom_section_editable[28]?.style,
    TabsBtn: data?.custom_section_editable[29]?.style,
    Product__Info__Tabs: data?.custom_section_editable[30]?.style,
    Tabs__Content: data?.custom_section_editable[31]?.style,
    Tabs__Content__List: data?.custom_section_editable[32]?.style,
    Tabs__Content__List__Item: data?.custom_section_editable[33]?.style,
    RightArrow: data?.custom_section_editable[34]?.style,
    RightArrowIcon: data?.custom_section_editable[35]?.style,
    ContainerMainLeft: data?.custom_section_editable[36]?.style,
    Social: data?.custom_section_editable[37]?.style,
    Share: data?.custom_section_editable[38]?.style,
    ShareIcon: data?.custom_section_editable[39]?.style,
    ShareText: data?.custom_section_editable[40]?.style,
    SocialShareLink: data?.custom_section_editable[41]?.style,
    TwitterIcon: data?.custom_section_editable[42]?.style,
    FacebookIcon: data?.custom_section_editable[43]?.style,
    GmailIcon: data?.custom_section_editable[44]?.style,
    LinkIcon: data?.custom_section_editable[45]?.style,
    incerementBtn: data?.custom_section_editable[55],
    descrimentBtn: data?.custom_section_editable[56],
    CounterSvg: data?.custom_section_editable[57]?.style?.desktop,
  }

  const styleSlider = {
    ImgWraper: data?.custom_section_editable[46].style,
    DataImgsStyle: data?.custom_section_editable[47].style,
    ProductList: data?.custom_section_editable[48].style,
    ProductListImg: data?.custom_section_editable[49].style,
    DataImgsStyleMain: data?.custom_section_editable[50].style,
    DataImgs: data,
    mySwiper2: data?.custom_section_editable[51].style,
    swiperButton: data?.custom_section_editable[52].style,
    swiperPagination: data?.custom_section_editable[53].style,
    swiperPaginationBullet: data?.custom_section_editable[54].style,
    SliderSetting: {
      Slider1: data.settings[0],
      Slider2: data.settings[1],
    }
  }

  const RenderSpecificationTitle = (data) => {
    //// console.log(data, "line 118")
    return data?.map(obj => {
      return {
        title: obj.title,
        render: () => <ProductSpecification styles={styles} data={obj?.description} />
      };
    });
  }

  const getRef = useRef(null);
  const [clientWidth, setClientWidh] = useState(0);




  // add drap event in scroll bar
  // getRef.current.children[0].addEventListener("drag", () => {
  //     alert("hello")
  // })
  const scrolllist = (scrollDirection) => {
    if (scrollDirection === "left") {
      getRef.current.children[0] != null ? getRef.current.children[0].scrollLeft -= 50 : ""
    }
    else if (scrollDirection === "right") {
      getRef.current.children[0] != null ? getRef.current.children[0].scrollLeft += 50 : ""
    }
  }


  // useEffect(() => {

  //     // const scrollWidth = getRef.current.children[0].scrollWidth;
  //     const getclientWidth = getRef.current.children[0] != null ? getRef.current.children[0].clientWidth : "";
  //     // const result = scrollWidth - getclientWidth;
  //     // const distance = scrollWidth / result;
  //     setClientWidh(getclientWidth);
  // }, [clientWidth])


  const AddProductDetailsToMiscallenous = (value, description) => {
    console.log(value, "line 984")
    let NewValue = value
    if (description) {
      let newdata = {
        _id: Math.random(),
        title: "Product Info",
        description: description
      }
      NewValue = [newdata, ...NewValue]
    }
    return RenderSpecificationTitle(NewValue)
  }

  return (

    <>{FinalData && showProductDetails && ProductData && customerCartData ? (
      <ProductDetailContainerMain item={styles?.ProductDetailContainerMain}>
        {/* <Breadcrumb>
                    <ul className='mb-20'>
                        <li> <Link href="/"> Home &gt; &nbsp;  </Link></li>
                        <li> <Link href="/"> Shop &gt; &nbsp; </Link></li>
                        <li> <Link href="/" className='active'> Morbius</Link></li>
                    </ul>
                </Breadcrumb> */}
        {/* <Breadcrumbs>
                    <BreadcrumbsItem to={"/"} title={"home"} />
                    <BreadcrumbsItem to={"/"} title={"Shop"} />
                    <BreadcrumbsItem to={"/"} title={"Morbius"} />
                </Breadcrumbs> */}

        <MainContainer item={styles?.MainContainer}>
          <ContainerMainLeft item={styles?.ContainerMainLeft}>
            <WishlistProductSlider sliderStyle={styleSlider} data={showProductDetails?.productPicture?.length ? showProductDetails?.productPicture : showProductDetails?.defaultPicture} />

            <Social item={styles?.Social}>
              <Share item={styles?.Share} itemShare={styles?.ShareIcon}>
                <ShareIcon />
                <Text tagType={"p"} style={styles?.ShareText} text={"Share:"} />
              </Share>
              <SocialShareLink item={styles?.SocialShareLink} itemTwitter={styles?.TwitterIcon}
                itemFacebook={styles?.FacebookIcon} itemEmail={styles?.GmailIcon} itemLink={styles?.LinkIcon}>
                <AnchorElement link={`https://twitter.com/intent/tweet?url=${shareUrl}&text=`} title="Twiter" target="_blank" rel="noopener noreferrer"><TwitterIcon className="twitterIcon" /> </AnchorElement>
                <AnchorElement link={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} title="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon className="facebookIcon" /> </AnchorElement>
                <AnchorElement link={`mailto:info@example.com?subject=&cc=&bcc=&body=${encodeURIComponent(shareUrl)}%0A`} title="Email"><MailIcon className="gmailIcon" /> </AnchorElement>
                <AnchorElement onClick={() => copyToClipBoard()} title="Copy"><LinkIcon className="linkIcon" /> </AnchorElement>
              </SocialShareLink>
            </Social>
          </ContainerMainLeft>
          <ContainerMainRight item={styles?.ContainerMainRight}>
            <Text tagType={"p"} style={styles?.ProductCode} text={`SKU ${ProductData?.SKU}`} />
            <Text tagType={"h4"} style={styles?.ProductHeading}
              text={ProductData?.productName} />


            <PriceDetail item={styles?.PriceDetail}>
              <Text tagType={"p"} style={styles?.Price} text={`${getPrice(showProductDetails?.salePrice)}.00`} />
              {showProductDetails?.discountPercentage > 0 ?
                <del><Text tagType={"del"} style={styles?.OldPrice} text={`${getPrice((showProductDetails?.price))}.00`} /></del>
                // <del>{`${getPrice((showProductDetails?.price))}.00`}</del>
                : ""
              }

              <Text tagType={"p"} style={styles?.Offer} text={discount(showProductDetails) ? `(${discount(showProductDetails)} off)` : ''} />
            </PriceDetail>
            <HorizontalRow item={styles?.Hr} />
            <ProductCategoryWrapper item={styles?.ProductCategoryWrapper}>

              {
                ProductData?.variant && ProductData?.variant.length > 0 && ProductData?.variant.map((vl, i) => {
                  return (
                    <React.Fragment key={i}>
                      <QuantityText item={styles?.QuantityText}>{vl.title}</QuantityText>
                      <ProductCategoryList item={styles?.ProductCategoryList}>
                        {vl.value.map((option, index) => {
                          return (
                            <React.Fragment key={index}>
                              <ProductCategoryListItem className={`${variationValueSeletced.includes(option) ? "active" : ""}`} onClick={() => VariationChange(vl, option)} item={styles?.ProductCategoryListItem}>{option}</ProductCategoryListItem>
                              {/* <ProductCategoryListItem className={`${variationValueSeletced.includes(option) ? "active" : ""}`} onClick={() => VariationChange(vl, option)} item={WishlistPopupStyle.ProductCategoryListItem}>{option}{`${variationValueSeletced.includes(option) ? "active" : ""}`}</ProductCategoryListItem> */}
                            </React.Fragment>
                          )
                        })}
                      </ProductCategoryList>
                    </React.Fragment>
                  )
                })
              }
              {/* <SelectVarianterror item={styles?.SelectVarianterror}>
                                <FormError style={styles?.FormError} show={true} error="Select Variant" />
                            </SelectVarianterror> */}
              <QuantityItem item={styles?.QuantityItem}>
                <QuantityItemText item={styles?.QuantityItemText}>Quantity :</QuantityItemText>
                <InputWrapper>
                  <Input type="number" item={styles?.Input} readOnly className='inputArrow' max={showProductDetails.stock} value={quantity ? quantity : 1} min={1} />
                  <ButtonElement item={styles?.incerementBtn?.style} className='incrementBtn' onClick={(e) => setQuantity(quantity + 1, showProductDetails.stock)}>
                    <CounterSvg height={styles?.CounterSvg?.height} width={styles?.CounterSvg?.width} stroke={styles?.CounterSvg?.fill} />
                  </ButtonElement>
                  <ButtonElement item={styles?.descrimentBtn?.style} className='decrementBtn' onClick={(e) => setQuantity(quantity - 1, showProductDetails.stock)}>
                    <CounterSvg height={styles?.CounterSvg?.height} width={styles?.CounterSvg?.width} stroke={styles?.CounterSvg?.fill} />
                  </ButtonElement>
                </InputWrapper>
              </QuantityItem>
              <Cart item={styles?.Cart}>
                <ProductPageButton
                  loadingButton={<AddtoCart item={styles?.AddtoCart}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />Loading...</ButtonElement></AddtoCart>}
                  viewBagButton={<AddtoCart item={styles?.AddtoCart} onClick={() => PushToBag()}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />VIEW BAG</ButtonElement></AddtoCart>}
                  outOfStockButton={<AddtoCart item={styles?.AddtoCart}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />Out Of Stock </ButtonElement></AddtoCart>}
                  addToCartButton={<AddtoCart item={styles?.AddtoCart} onClick={() => { addToCartHandler() }}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />ADD TO CART</ButtonElement></AddtoCart>}
                  guestGoToBagButton={<AddtoCart item={styles?.AddtoCart} onClick={() => PushToBag()}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />Go To BAG</ButtonElement></AddtoCart>}
                  guestOutofStockButton={<AddtoCart><AddToCart /> Out of Stock</AddtoCart>}

                  guestAddtoCartButton={
                    <AddtoCart item={styles?.AddtoCart} onClick={() => { addToCartHandler("GuestLogin") }}><ButtonElement item={styles?.AddtoCartLink}><AddToCart />ADD TO CART</ButtonElement></AddtoCart>
                  }
                  postLoading={postLoading}
                  customerCartSuccess={customerCartSuccess}
                  customerCartData={customerCartData?.data}
                  showProductDetails={showProductDetails}
                  postGuestAddCartLoading={postGuestAddCartLoading}
                  guestCustomerCartSuccess={guestCustomerCartSuccess}
                  guestCustomerCartData={guestCustomerCartData?.data}
                />

                <Addto__Wishlist item={styles?.Addto__Wishlist}><ButtonElement item={styles?.Addto__WishlistLink} onClick={checkWishListed() ? "NO" : () => addToWishListHandler()}>
                  <WishlistIcon stroke={styles?.Addto__Wishlist?.desktop?.border?.borderColor} fill={styles?.Addto__Wishlist?.desktop?.border?.borderColor}/> {checkWishListed() ? "WISHLISTED" : "WISHLIST"}
                </ButtonElement>
                </Addto__Wishlist>
              </Cart>
              {
                ProductData && ProductData?.miscellaneous && ProductData?.miscellaneous.length ? <HorizontalLine item={styles?.HorizontalLine} /> : ""
              }

            </ProductCategoryWrapper>
            {/* <HorizontalRow item={styles?.Hr} />
            <div>
              <Text tagType={"p"} style={styles?.productDescription} text={`${ProductData?.productDescription}`} />

            </div> */}
            {/* <Text tagType={"h4"} style={styles?.ProductHeading}
              dangerouslySetInnerHTML={{ __html: ProductData?.productDescription }} /> */}

            {
              (ProductData && ProductData?.miscellaneous && ProductData?.miscellaneous.length || ProductData?.productDescription) ?
                <Product__Info item={styles?.Product__Info}>
                  <LeftArrow item={styles?.LeftArrow} itemSvg={styles?.LeftArrowIcon} onClick={() => { scrolllist("left") }}><LeftArrowIcon className={"leftArrowIcon"} /></LeftArrow>

                  <ProductDetailTabs ref={getRef} item={styles?.ProductDetailTabs} itemTabs={styles?.TabsBtn} itemWrapper={styles?.Product__Info__Tabs}>
                    <RenderTabs
                      TabWrapperClass={"Product__Info__Tabs"}
                      TabButtonClass={` btn-xs tabsBtn`}
                      ActiveTabClass="tabsBtn tab__active "
                      tabs={AddProductDetailsToMiscallenous(ProductData?.miscellaneous, ProductData?.productDescription)}
                    />
                  </ProductDetailTabs>
                  <RightArrow item={styles.RightArrow} itemSvgIcon={styles.RightArrowIcon} onClick={() => { scrolllist("right") }} ><RightArrowIcon /></RightArrow>
                </Product__Info> : ""
            }

            {/* <ReviewAndRating /> */}
          </ContainerMainRight>
          {/* <WishlistPopUP>
                        <p>1 Product added to your wishlist</p>
                    </WishlistPopUP> */}
        </MainContainer >

      </ProductDetailContainerMain >
    ) : (
      <SpinnerLoader_wrap>
        <SpinnerLoader className="Spinner" />
      </SpinnerLoader_wrap>
    )
    }
    </ >
  )
}

export default ProductDetailsTheme1
