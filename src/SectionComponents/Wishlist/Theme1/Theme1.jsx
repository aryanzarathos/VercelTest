import React, { useEffect, useState } from 'react'
// import CrossIcon from "../../../Assets/SectionComponent/Images/Wishlist/CrossIcon.svg"
import CrossIcon from '../../../Assets/SectionComponent/Images/Wishlist/crossIcon.svg';
import { CrossImg, Discount, GridContainer, ImageSection, ImgMain, DetailsWrappper, Theme1Container, WishlistTheme, ShopSection, BtnContain } from './WishlistTheme1.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement'
import Modal from '../../../SectionCommon/Modal'
import ModalBody from '../../../SectionCommon/Modal/ModalBody'
import { useRef } from 'react'
import WishlistPopup from '../../WishlistPopUp/Theme1/Theme1'
import useWishList from '@/TemplateCustomHooks/useWishList';
import usePriceDifference from '@/CustomHooks/usePriceDifference';
import EmptyWishlist from "../../EmptyWishlist/Theme1/Theme1"
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { useSelector } from 'react-redux';
import Loader from '@/CommonComponents/Loader/Editor';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';
import BackBtn from "../../../Assets/SectionComponent/Images/Cart/backbtn.svg";
import { useRouter } from 'next/router';
const WishlistTheme1 = ({ children }) => {
  const router = useRouter()

  const popUpHandle = useRef(null)

  const handleAddAddress = () => {
    popUpHandle.current.open()
  }
  const { user, subdomainuser } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser
    }
  })

  const [itemList, handleMoveButton, handleRemoveButton, wishlistPopupRef, prodDetails, varDetails,
    handleOnCloseWishlistPopup, variationValueSeletced, VariationChange, showProductDetails, changeQtyHandler, quantity, AddToCartHandler, handleChildParent, active, setActive] = useWishList();
  const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();


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

  const handleActive = () => {
    // setActive(true)
    //// console.log('set now');
  }

  const style = {
    Theme1Container: children.custom_section_editable[0].style,
    WishlistTheme: children.custom_section_editable[1].style,
    MyWislistHeader: children.custom_section_editable[2],
    ItemText: children.custom_section_editable[3],
    GridContainer: children.custom_section_editable[4].style,
    ImageSection: children.custom_section_editable[5].style,
    ImgMain: children.custom_section_editable[6].style,
    CrossImg: children.custom_section_editable[7].style,
    CrossIcon: children.custom_section_editable[8],
    Discount: children.custom_section_editable[9].style,
    PorductName: children.custom_section_editable[10],
    PorductPrice: children.custom_section_editable[11],
    DiscountPrice: children.custom_section_editable[12],
    OffPrice: children.custom_section_editable[13],
    MoveBtn: children.custom_section_editable[14],
    data: children.data,
    ProductImage: children.custom_section_editable[15].style,
    DetailsWrappper: children.custom_section_editable[56].style,
  }

  const WishlistPopupStyle = {
    WishlistPopUpContainer: children.custom_section_editable[16].style,
    MainContainer: children.custom_section_editable[17].style,
    ContainerMainRight: children?.custom_section_editable[18]?.style,
    ProductCode: children?.custom_section_editable[19],
    ProductHeading: children?.custom_section_editable[20],
    PriceDetail: children?.custom_section_editable[21]?.style,
    Price: children?.custom_section_editable[22],
    OldPrice: children?.custom_section_editable[23],
    Offer: children?.custom_section_editable[24],
    Hr: children?.custom_section_editable[25]?.style,
    ProductCategoryListWrappper: children?.custom_section_editable[26].style,
    ProductCategoryboldText: children?.custom_section_editable[27],
    ProductCategoryList: children?.custom_section_editable[28]?.style,
    ProductCategoryListItem: children?.custom_section_editable[29]?.style,
    ButtonAddToCart: children?.custom_section_editable[30]?.style,
    Bag: children?.custom_section_editable[31]?.style.desktop,
    QuantityItem: children?.custom_section_editable[32]?.style,
    QuantityText: children?.custom_section_editable[33],
    ProductList: children?.custom_section_editable[34].style,
    ProductListImg: children?.custom_section_editable[35].style,
    ProductSmallImgStyle: children?.custom_section_editable[36].style,
    ProductSmallImg: children.children,
    ContainerMainLeft: children?.custom_section_editable[37].style,
    ImageContainer: children?.custom_section_editable[38].style,
    incerementBtn: children.custom_section_editable[57],
    descrimentBtn: children.custom_section_editable[58],
    CounterSvg: children.custom_section_editable[59].style.desktop,
    Quantity: children.custom_section_editable[60],
    QuantityPara: children.custom_section_editable[61],
  }

  const style4Slider = {
    ImgWraper: children?.custom_section_editable[39].style,
    DataImgsStyle: children?.custom_section_editable[40].style,
    ProductList: children?.custom_section_editable[41].style,
    ProductListImg: children?.custom_section_editable[42].style,
    DataImgsStyleMain: children?.custom_section_editable[43].style,
    DataImgs: children?.data,
    mySwiper2: children?.custom_section_editable[44].style,
    swiperButton: children?.custom_section_editable[45].style,
    swiperPagination: children?.custom_section_editable[46].style,
    swiperPaginationBullet: children?.custom_section_editable[47].style,
    SliderSetting: {
      Slider1: children.settings[0],
      Slider2: children.settings[1],
    }
  }


  const styleEmptyWishlist = {
    PageNotFoundSubContainer: children.custom_section_editable[48],
    SubContainerHeading: children.custom_section_editable[49],
    WeCannotPara: children.custom_section_editable[50],
    SubContainerImg: children.custom_section_editable[51],
    PageNotfoundImg: children.custom_section_editable[52],
    SubBottomContent: children.custom_section_editable[53],
    goShopBtn: children.custom_section_editable[54],
    BackwardImg: children.custom_section_editable[55],
  };

  // console.log(children.custom_section_editable.length, 'children.custom_section_editable')

  const statiicData = {
    "message": "AddProduct",
    "error": false,
    "code": 200,
    "data": [
      {
        _id: '64c4c1784310390832be4420',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c16ef55a9f07852c3696',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/169061617596151rC1P47OZL.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: '51rC1P47OZL.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/169061617596151rC1P47OZL.png',
            type: 'img',
            size: 13013,
            desc: '',
            createdAt: '2023-07-29T07:36:14.593Z',
            updatedAt: '2023-07-29T07:36:14.593Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Ferrero Heur',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 0,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c1784310390832be441c',
        SKU: 'zpjkhfrrofg001',
        barcode: '',
        price: 1600,
        salePrice: 1600,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:36:24.916Z',
        updatedAt: '2023-07-29T07:36:24.916Z',
        __v: 0,
        slug: 'Ferrero-Heur'
      },
      {
        _id: '64c4c1504310390832be4364',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c146f55a9f07852c3694',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690616135835images2.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: 'images (2).png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690616135835images2.png',
            type: 'img',
            size: 21418,
            desc: '',
            createdAt: '2023-07-29T07:35:34.424Z',
            updatedAt: '2023-07-29T07:35:34.424Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Robetto',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 50,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c1504310390832be4360',
        SKU: '2w70rsekfex001',
        barcode: '',
        price: 900,
        salePrice: 450,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:35:44.467Z',
        updatedAt: '2023-07-29T07:35:44.467Z',
        __v: 0,
        slug: 'Robetto1'
      },
      {
        _id: '64c4c0bc4310390832be42ba',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c0b2f55a9f07852c3690',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615987746tom-ford-round-shaped-glasses.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: 'tom-ford-round-shaped-glasses.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615987746tom-ford-round-shaped-glasses.png',
            type: 'img',
            size: 16201,
            desc: '',
            createdAt: '2023-07-29T07:33:06.329Z',
            updatedAt: '2023-07-29T07:33:06.329Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Air Tagged',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 0,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c0bc4310390832be42b6',
        SKU: 'mqkjh1p25ja001',
        barcode: '',
        price: 790,
        salePrice: 790,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:33:16.549Z',
        updatedAt: '2023-07-29T07:33:16.549Z',
        __v: 0,
        slug: 'Air-Tagged'
      },
      {
        _id: '64c4c09a4310390832be4299',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c08ef55a9f07852c368c',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/169061595235130f33bb48e84a34305080947f07a838c2.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: '30f33bb48e84a34305080947f07a838c 2.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/169061595235130f33bb48e84a34305080947f07a838c2.png',
            type: 'img',
            size: 15343,
            desc: '',
            createdAt: '2023-07-29T07:32:30.930Z',
            updatedAt: '2023-07-29T07:32:30.930Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Hooper',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 20,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c09a4310390832be4295',
        SKU: 'kj5c7looh4001',
        barcode: '',
        price: 520,
        salePrice: 416,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:32:42.417Z',
        updatedAt: '2023-07-29T07:32:42.417Z',
        __v: 0,
        slug: 'Hooper'
      },
      {
        _id: '64c4c07a4310390832be427b',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c071f55a9f07852c3688',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615922732271d0e324aa866f1ff4a000be39adca9.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: '271d0e324aa866f1ff4a000be39adca9.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615922732271d0e324aa866f1ff4a000be39adca9.png',
            type: 'img',
            size: 15340,
            desc: '',
            createdAt: '2023-07-29T07:32:01.521Z',
            updatedAt: '2023-07-29T07:32:01.521Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Roseliette',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 0,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c07a4310390832be4277',
        SKU: 'r03g6hjx6q001',
        barcode: '',
        price: 1600,
        salePrice: 1600,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:32:10.349Z',
        updatedAt: '2023-07-29T07:32:10.349Z',
        __v: 0,
        slug: 'Roseliette'
      },
      {
        _id: '64c4c04f4310390832be425b',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: false,
        defaultVariation: true,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [
          {
            isDeleted: false,
            _id: '64c4c041f55a9f07852c3686',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615874872FT5625-B001OSA.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: 'FT5625-B_001_OS_A.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615874872FT5625-B001OSA.png',
            type: 'img',
            size: 12606,
            desc: '',
            createdAt: '2023-07-29T07:31:13.510Z',
            updatedAt: '2023-07-29T07:31:13.510Z',
            __v: 0
          }
        ],
        defaultPicture: [],
        tags: [],
        variationName: 'Tom Hank',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 0,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        businessShopId: '64c39dc59c2514b981cec71d',
        productId: '64c4c04f4310390832be4257',
        SKU: 'bxeunp854h001',
        barcode: '',
        price: 450,
        salePrice: 450,
        stock: 100,
        productDescription: '',
        sellOutofStock: false,
        base_currency: '₹',
        variant_scheme: [],
        createdAt: '2023-07-29T07:31:27.910Z',
        updatedAt: '2023-07-29T07:31:27.910Z',
        __v: 0,
        slug: 'Tom-Hank'
      },
      {
        _id: '64c4bf8c4310390832be41f7',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: true,
        defaultVariation: false,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [],
        defaultPicture: [
          {
            isDeleted: false,
            _id: '64c4be00f55a9f07852c3682',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615297243morbius.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: 'morbius.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690615297243morbius.png',
            type: 'img',
            size: 50943,
            desc: '',
            createdAt: '2023-07-29T07:21:36.057Z',
            updatedAt: '2023-07-29T07:21:36.057Z',
            __v: 0
          }
        ],
        tags: [],
        variationName: 'Electra  Cat-eyeglasses for Adults  Light weight',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 0,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        SKU: 'y9528yqvr501',
        variant_scheme: [
          {
            _id: '64c4bf8c4310390832be41f8',
            title: 'Select frame',
            value: 'Rectangle Frame'
          }
        ],
        stock: 998,
        price: 520,
        businessShopId: '64c39dc59c2514b981cec71d',
        salePrice: 520,
        costPrice: 0,
        profit: 0,
        barcode: '',
        tax_included_in_price: false,
        base_currency: '₹',
        sellOutofStock: false,
        productId: '64c4bf8c4310390832be41f2',
        __v: 0,
        createdAt: '2023-07-29T07:28:12.190Z',
        updatedAt: '2023-08-03T09:27:33.016Z',
        slug: 'Electra--Cat-eyeglasses-for-Adults--Light-weight'
      },
      {
        _id: '64c3a01d9c7439082b01613d',
        variationStatus: 'active',
        showInOnlineStore: true,
        onSale: true,
        defaultVariation: false,
        outOfStock: false,
        cod: true,
        deliveryFees: 0,
        productPicture: [],
        defaultPicture: [
          {
            isDeleted: false,
            _id: '64c39f7fd485e607e156a381',
            src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690541952204morbius.png',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            title: 'morbius.png',
            alt: '',
            key: '64c39dc59c2514b981cec71d/64c39d749c2514b981cec6ef/1690541952204morbius.png',
            type: 'img',
            size: 50943,
            desc: '',
            createdAt: '2023-07-28T10:59:11.497Z',
            updatedAt: '2023-07-28T10:59:11.497Z',
            __v: 0
          },
          {
            isDeleted: false,
            _id: '64c3be50d485e607e156a395',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            src: 'https://images.unsplash.com/photo-1581239125393-67d48d3dd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHxleWVnbGFzc2VzfGVufDB8fHx8MTY5MDU0MjEzM3ww&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Transparent eyeglasses lying on a laptop.',
            desc: '',
            alt: 'silver framed eyeglasses on white table',
            size: 0,
            key: '',
            type: 'img',
            createdAt: '2023-07-28T13:10:40.879Z',
            updatedAt: '2023-07-28T13:10:40.879Z',
            __v: 0
          },
          {
            isDeleted: false,
            _id: '64c3be50d485e607e156a397',
            business: '64c39dc59c2514b981cec71d',
            owner: '64c39d749c2514b981cec6ef',
            src: 'https://images.unsplash.com/photo-1633621641966-23836fcafd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxleWVnbGFzc2VzfGVufDB8fHx8MTY5MDU0MjEzM3ww&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Green background and glasses',
            desc: '',
            alt: 'a pair of glasses sitting on top of a table',
            size: 0,
            key: '',
            type: 'img',
            createdAt: '2023-07-28T13:10:40.889Z',
            updatedAt: '2023-07-28T13:10:40.889Z',
            __v: 0
          }
        ],
        tags: [],
        variationName: 'Morbius  Sleek steel wayfarer eyeglasses for Adults  Light weight',
        discountFix: 0,
        discount_by_percent: true,
        discountPercentage: 20,
        variationActive: true,
        isDeleted: false,
        variant_scheme_title: [],
        variant_scheme_values: [],
        SKU: '#100007801',
        variant_scheme: [
          {
            _id: '64c3a01d9c7439082b01613e',
            title: 'Select frame',
            value: 'Rectangle Frame'
          }
        ],
        stock: 998,
        price: 520,
        businessShopId: '64c39dc59c2514b981cec71d',
        salePrice: 416,
        costPrice: 0,
        profit: 0,
        barcode: '',
        tax_included_in_price: false,
        base_currency: '₹',
        sellOutofStock: false,
        productId: '64c3a01d9c7439082b016137',
        __v: 0,
        createdAt: '2023-07-28T11:01:49.689Z',
        updatedAt: '2023-08-03T09:27:33.013Z',
        allowCancellation: null,
        slug: 'Morbius--Sleek-steel-wayfarer-eyeglasses-for-Adults--Light-weight'
      }
    ]
  }
  const finalData = AppLinkUrl.isEditor() ? statiicData.data : itemList && itemList ? itemList : []
  return (
    (AppLinkUrl.privateDomain() && user._id) || AppLinkUrl.isEditor() || (!AppLinkUrl.privateDomain() && subdomainuser._id) ?
      <Theme1Container item={style.Theme1Container}>
        {
          window.innerWidth > 768 ? <WishlistTheme item={style.WishlistTheme}>
            <Text
              tagType={style.MyWislistHeader.tagType}
              text={style.MyWislistHeader.text}
              style={style.MyWislistHeader.style}
            />
            <Text
              tagType={style.ItemText.tagType}
              text={itemList?.length ? `${itemList.length} Item(s)` : ""}
              style={style.ItemText.style}
            />
          </WishlistTheme> :
            <ShopSection>
              <BtnContain onClick={() => router.back()}>
                <BackBtn />
                <Text
                  tagType={style.MyWislistHeader.tagType}
                  text={style.MyWislistHeader.text}
                  style={style.MyWislistHeader.style}
                />
              </BtnContain>
              <Text
                tagType={style.ItemText.tagType}
                text={itemList?.length ? `${itemList.length} Item(s)` : ""}
                style={style.ItemText.style}
              />
            </ShopSection>
        }

        {
          finalData?.length ? (
            <GridContainer item={style.GridContainer}>
              {finalData?.map((elm, key) => {
                return (
                  <ImageSection item={style.ImageSection} htmlFor={elm.id} key={key} onClick={() => { handleChildParent('parent', `/product-details/${elm.slug}`) }}>
                    <ImgMain item={style.ImgMain}>
                      {/* <Image src={elm.img} alt="" /> */}
                      <ImageElement src={elm?.productPicture[0] || elm?.defaultPicture[0]} alt={'altText'} style={style.ProductImage} />
                      <CrossImg item={style.CrossImg} onClick={() => { handleChildParent('child', `remove`, elm._id) }}>
                        <CrossIcon width={style.CrossIcon.style.desktop.width}
                          height={style.CrossIcon.style.desktop.height}
                          fill={style.CrossIcon.style.desktop.fill} />
                      </CrossImg>
                    </ImgMain>
                    <DetailsWrappper item={style.DetailsWrappper}>
                      <Text
                        tagType={style.PorductName.tagType}
                        text={elm.variationName}
                        style={style.PorductName.style}
                      />
                      <Text
                        tagType={style.PorductPrice.tagType}
                        text={`${getPrice(elm?.salePrice)}.00`}
                        style={style.PorductPrice.style}
                      />
                      <Discount item={style.Discount}>
                        {
                          elm?.discountPercentage > 0 ?
                            <Text
                              tagType={style.DiscountPrice.tagType}
                              text={`${getPrice((elm?.price))}.00`}
                              style={style.DiscountPrice.style}
                            /> : ""
                        }
                        <Text
                          tagType={style.OffPrice.tagType}
                          text={discount(elm) ? `(${discount(elm)} off)` : ''}
                          style={style.OffPrice.style}
                        />
                      </Discount>
                    </DetailsWrappper>
                    {
                      elm?.variationStatus && elm?.variationStatus === "draft" ? (
                        <ButtonElement style={style.MoveBtn.style} text={style.MoveBtn.text} onClick={handleAddAddress} />
                      ) : (
                        <ButtonElement style={style.MoveBtn.style} onClick={() => handleChildParent('child', windowSize.width > 800 ? `moveToBagDesktop` : "moveToBagMobile", elm._id, elm.slug)}>Move to Bag</ButtonElement>
                      )
                    }
                    {/* <MoveBtn>Move to Bag</MoveBtn> */}

                  </ImageSection>
                )
              })}
            </GridContainer>
          ) : (

            <EmptyWishlist style={styleEmptyWishlist} />
          )
        }

        <Modal ref={wishlistPopupRef} Position={'center'} ModalsSize={window.innerWidth > "767" ? 'modal-l' : "modal-xxl"} onclose={() => handleOnCloseWishlistPopup()} >
          <ModalBody>
            <WishlistPopup sliderData={children} WishlistPopupStyle={WishlistPopupStyle} style4Slider={style4Slider}
              variationDetails={varDetails} productDetails={prodDetails} variationValueSeletced={variationValueSeletced}
              priceDifference={priceDifference} actualPrice={actualPrice} showProductDetails={showProductDetails}
              discount={discount} handleVariationChange={(vl, option) => VariationChange(vl, option)}
              changeQtyHandler={changeQtyHandler} quantity={quantity} AddToCartHandler={() => AddToCartHandler()} handleChildParent={() => { handleChildParent }} getPrice={getPrice}
            />
          </ModalBody>
        </Modal>


      </Theme1Container> : <SpinnerLoader />
  )
}

export default WishlistTheme1