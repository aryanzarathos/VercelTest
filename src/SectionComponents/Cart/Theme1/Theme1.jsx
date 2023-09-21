import React, { useRef, useState } from 'react'
// import CommonLayoutTheme1 from '../CartCommonLayout/Theme1';
// import BackBtn from '../../../Assets/SectionComponent/Images/Cart/backbtn.svg'
import DeleteSvg from '../../../Assets/SectionComponent/Images/Cart/delete.svg'
import WishlistSvg from '../../../Assets/SectionComponent/Images/Cart/wishlist.svg'
// import Image6 from '../../../Assets/SectionComponent/Images/Cart/heartaero.png'

import { data } from '../CartData.js'
// import Image from 'next/image';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import Text from "../../../SectionsLayout/Elements/TextElement/Text";
import FormInput from "../../../SectionCommon/Form/FormInput";
import Button from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement"
import QuantityHandler from '../QuantityHandler'
import { AboutImg, AboutItem, BtnContain, ButtonContinue, MoveToWrapper, CartIconMain, DeleteLikeBtn, Deletebtn, DeletebtnIcon, DescriptionMain, DiscountMobile, ImgItem, LayoutSectionLt, LayoutSectionRt, LikeBtmItem, LikeBtmItemDesk, Line, OrderSumaryText, OrderSummaryContainer, Product, ProductContainer, ProductCount, ProductItem, ProgressContainer, Quantity, QuantityItem, Row, Shipping, ShoppingCartMobile, Subtotal, Total, TotalAmmount, TotalItem, TotalItemMobile, Variant, VariantItem, VariantItemMobile, VarientContent, VariantItemDesktop, VariantQuantity } from './CartTheme1.style';
import ProgressTheme1 from '../../Progress/Theme1/Theme1';
import OrderSummary from '../../../SectionCommon/OrderSummary/OrderSummary'
import CartMobileSection from './CartMobileSection/CartMobileSection'
import { useSelector } from 'react-redux'
import usePriceDifference from '@/CustomHooks/usePriceDifference'
import useCart from '@/TemplateCustomHooks/useCart'
import Auth from '@/Classes/Auth'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import Storage from '@/Classes/Storage'
import { dummyImgProduct } from '@/Constant/constants'

import EmptyCart from '@/SectionComponents/EmptyCart/Theme1/Theme1'
import Modal from '@/SectionCommon/Modal/index'
import ModalBody from '@/SectionCommon/Modal/ModalBody'
import CounterSvg from '../../../Assets/SectionComponent/Icons/CounterSvg.svg'
import { ButtonElement } from '@/SectionsLayout/Elements/ButtonElement/ButtonStyle'
const CartTheme1 = ({ children }) => {

    let style = {
        progressContainer: children.custom_section_editable[5],
        row: children.custom_section_editable[12],
        layoutSectionLt: children.custom_section_editable[13],
        aboutItem: children.custom_section_editable[14],
        product: children.custom_section_editable[15],
        variant: children.custom_section_editable[16],
        quantity: children.custom_section_editable[17],
        total: children.custom_section_editable[18],
        line: children.custom_section_editable[19],
        productContainer: children.custom_section_editable[20],
        productItem: children.custom_section_editable[21],
        imgItem: children.custom_section_editable[22],
        productImage: children.custom_section_editable[23],
        aboutImg: children.custom_section_editable[24],
        descriptionMain: children.custom_section_editable[25],
        descriptionPara: children.custom_section_editable[26],
        deleteLikeBtn: children.custom_section_editable[27],
        deletebtn: children.custom_section_editable[28],
        deleteSvg: children.custom_section_editable[29],
        likeBtmItem: children.custom_section_editable[30],
        wishlistSvg: children.custom_section_editable[31],
        totalItemMobile: children.custom_section_editable[32],
        amount: children.custom_section_editable[33],
        discountMobile: children.custom_section_editable[34],
        discount: children.custom_section_editable[35],
        off: children.custom_section_editable[36],
        variantItem: children.custom_section_editable[37],
        frames: children.custom_section_editable[38],
        quantityItem: children.custom_section_editable[39],
        QuantityPara: children.custom_section_editable[40],
        variantItemMobile: children.custom_section_editable[41],
        varientFrame: children.custom_section_editable[42],
        totalItem: children.custom_section_editable[43],
        totalAmout: children.custom_section_editable[44],
        totalDiscount: children.custom_section_editable[45],
        totalOff: children.custom_section_editable[46],
        deletebtnIcon: children.custom_section_editable[47],
        deleteIcon: children.custom_section_editable[48],
        likeBtmItemDesk: children.custom_section_editable[49],
        wishlistSvg: children.custom_section_editable[50],
        MoveToWishlistHeading: children.custom_section_editable[96],
        MoveToWishlistHeadingDesc: children.custom_section_editable[97],
        CancelBtn: children.custom_section_editable[98],
        MoveToWishlistBtn: children.custom_section_editable[99],
        MoveToWrapper: children.custom_section_editable[100].style,
        incerementBtn: children.custom_section_editable[101],
        descrimentBtn: children.custom_section_editable[102],
        CounterSvg: children.custom_section_editable[103].style.desktop,
    };
    // // console.log(style.QuantityPara, "formInput")
    let cartMobile = {
        shoppingCartMobile: children.custom_section_editable[0],
        btnContain: children.custom_section_editable[1],
        backBtn: children.custom_section_editable[2],
        backBtnText: children.custom_section_editable[3],
        productCount: children.custom_section_editable[4],

    }

    let styleProgressBar = {
        progressContainer: children.custom_section_editable[6],
        processSection: children.custom_section_editable[7],
        main: children.custom_section_editable[8],
        processStep: children.custom_section_editable[9],
        number: children.custom_section_editable[10],
        text: children.custom_section_editable[11],
        CheckWrap: children.custom_section_editable[67],
        CheckSvg: children.custom_section_editable[68].style.desktop,
        Activenumber: children.custom_section_editable[104],
        ActiveText: children.custom_section_editable[105],
    }

    let orderSummary = {
        layoutSectionRt: children.custom_section_editable[51],
        orderSummaryContainer: children.custom_section_editable[52],
        orderSumaryText: children.custom_section_editable[53],
        orderText: children.custom_section_editable[54],
        subtotal: children.custom_section_editable[55],
        subTotalHeading: children.custom_section_editable[56],
        subTotalPara: children.custom_section_editable[57],
        shipping: children.custom_section_editable[58],
        shippingHeading: children.custom_section_editable[59],
        shippingPara: children.custom_section_editable[60],
        totalAmmount: children.custom_section_editable[61],
        totalHeading: children.custom_section_editable[62],
        totalPara: children.custom_section_editable[63],
        button: children.custom_section_editable[64],
        cartIconMain: children.custom_section_editable[65],
        cartSvg: children.custom_section_editable[66],

        CuponPage: {
            CuponMainContainer: children.custom_section_editable[69].style,
            HorizontalLine: children.custom_section_editable[70].style,
            CuponsubContainer: children.custom_section_editable[71].style,
            SubLeftContainer: children.custom_section_editable[72].style,
            CouponsPara: children.custom_section_editable[73],
            ApplyCouponPara: children.custom_section_editable[74],
            PromoCode: children.custom_section_editable[75].style.desktop,
            SubRightContainer: children.custom_section_editable[76].style,
            removeEditBtn: children.custom_section_editable[77].style,
            ArrowSvg: children.custom_section_editable[78].style.desktop,
            PopContent: {
                headingPara: children.custom_section_editable[79],
                AppyBtn: children.custom_section_editable[80],
                TopContainer: children.custom_section_editable[81].style,
                AvailableCoupons: children.custom_section_editable[82],
                BottomContainer: children.custom_section_editable[83].style,
                BottomCuponCards: children.custom_section_editable[84].style,
                CardsTopContainer: children.custom_section_editable[85].style,
                TopLeftContainer: children.custom_section_editable[86].style,
                discountCode: children.custom_section_editable[87],
                AppyBtn2: children.custom_section_editable[88],
                CardsSubContainer: children.custom_section_editable[89].style,
                discountName: children.custom_section_editable[90],
                detail: children.custom_section_editable[91],
                DetailsWrap: children.custom_section_editable[92].style,
                Details: children.custom_section_editable[93],
                ArrowSvg: children.custom_section_editable[94].style.desktop,
                topContainerInput: children.custom_section_editable[95].style,
            }

        }
    }

    let emptyCartStyle = {
        PageNotFoundSubContainer: children.custom_section_editable[106],
        SubContainerHeading: children.custom_section_editable[107],
        WeCannotPara: children.custom_section_editable[108],
        EmptySvgStyle: children.custom_section_editable[109].style.desktop,
        SubContainerImg: children.custom_section_editable[110],
        PageNotfoundImg: children.custom_section_editable[111],
        SubBottomContent: children.custom_section_editable[112],
        goShopBtn: children.custom_section_editable[113],
        BackwardImg: children.custom_section_editable[114],

    }


    const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
    const [customerCartSuccess, customerCartData, removefromCartHandler, transferToWishlistHandler, changeQtyHandler, cartLoading, history, orderFromCartHandler, shippingRoute, guestLoginModalState, setGuestLoginModalState] = useCart()

    const [wishlistAddPr, setWishlistAddPr] = useState(null)
    const WishlistAddPopup = useRef(null);
    //// console.log(WishlistAddPopup, "line 131")
    const handleAddWishlist = (productID) => {
        if (WishlistAddPopup.current) {
            WishlistAddPopup.current.open();
            setWishlistAddPr(productID)
        }

    }
    const closeModals = () => {
        if (WishlistAddPopup.current) {
            WishlistAddPopup.current.close();
        }
    }
    const moveToWishlistHandle = () => {
        if (WishlistAddPopup.current) {
            transferToWishlistHandler(wishlistAddPr)
            WishlistAddPopup.current.close();
        }
    }
    const staticData = {
        "message": "Cart Success",
        "data": [
            {
                product: {
                    _id: '64c4bf8c4310390832be41f7',
                    tax_included_in_price: false,
                    priceBeforeDiscount: 520,
                    productPicture: [],
                    priceAfterDiscount: 520,
                    SKU: 'y9528yqvr501',
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
                    deliveryFees: 0,
                    stock: 998,
                    cod: true,
                    productId: '64c4bf8c4310390832be41f2',
                    variant_scheme_title: [],
                    variant_scheme_values: [],
                    variant_scheme: [
                        {
                            _id: '64c4bf8c4310390832be41f8',
                            title: 'Select frame',
                            value: 'Rectangle Frame'
                        }
                    ],
                    variationActive: true,
                    variationStatus: 'active',
                    tags: [],
                    showInOnlineStore: true,
                    onSale: true,
                    defaultVariation: false,
                    variationName: 'Electra  Cat-eyeglasses for Adults  Light weight',
                    barcode: '',
                    discount_by_percent: true,
                    discountPercentage: 0
                },
                quantity: 1,
                cartId: '64cb9b126967aa07046fa275'
            },
            {
                product: {
                    _id: '64c3a01d9c7439082b01613d',
                    tax_included_in_price: false,
                    priceBeforeDiscount: 520,
                    productPicture: [],
                    priceAfterDiscount: 416,
                    SKU: '#100007801',
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
                    deliveryFees: 0,
                    stock: 998,
                    cod: true,
                    productId: '64c3a01d9c7439082b016137',
                    variant_scheme_title: [],
                    variant_scheme_values: [],
                    variant_scheme: [
                        {
                            _id: '64c3a01d9c7439082b01613e',
                            title: 'Select frame',
                            value: 'Rectangle Frame'
                        }
                    ],
                    variationActive: true,
                    variationStatus: 'active',
                    tags: [],
                    showInOnlineStore: true,
                    onSale: true,
                    defaultVariation: false,
                    variationName: 'Morbius  Sleek steel wayfarer eyeglasses for Adults  Light weight',
                    allowCancellation: null,
                    barcode: '',
                    discount_by_percent: true,
                    discountPercentage: 20
                },
                quantity: 1,
                cartId: '64cb9b126967aa07046fa275'
            }
        ],
        "beforediscount": 1040,
        "afterdiscount": 936,
        "taxamount": 0,
        "DeliveryFees": 0,
        "TotalPrice": 936,
        "shippingPrice": 0,
        "discountOnCart": 104,
        "tax_included": false
    }
    let finalData = AppLinkUrl.isEditor() ?
        staticData.data :
        customerCartSuccess && customerCartData ? customerCartData : [];

    return (
        <>

            <CartMobileSection finalData={finalData} {...cartMobile} />
            {
                ((Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) || AppLinkUrl.isEditor() || (Auth.isLogin() && AppLinkUrl.privateDomain())) || Storage.alive("Uuid_For_Guest_Login") ? (
                    <>
                        {customerCartSuccess || AppLinkUrl.isEditor() ? (
                            <>
                                {
                                    finalData?.length > 0 ? (
                                        <>
                                            <ProgressContainer item={style.progressContainer.style}>
                                                <ProgressTheme1 {...styleProgressBar} />
                                            </ProgressContainer>
                                            <Row item={style.row.style} >
                                                <LayoutSectionLt item={style.layoutSectionLt.style} >
                                                    <AboutItem item={style.aboutItem.style}>
                                                        <Text tagType={style.product.tagType} text={customerCartData?.length === 1 ? ' Product' : ' Product(s)'} style={style.product.style} />
                                                        <Text tagType={style.variant.tagType} text={style.variant.text} style={style.variant.style} />
                                                        <Text tagType={style.quantity.tagType} text={style.quantity.text} style={style.quantity.style} />
                                                        <Text tagType={style.total.tagType} text={style.total.text} style={style.total.style} />
                                                    </AboutItem>
                                                    <Line item={style.line.style}></Line>
                                                    {
                                                        finalData.map((pr, index) => {
                                                            return (
                                                                <>
                                                                    <ProductContainer item={style.productContainer.style} key={index}>
                                                                        <ProductItem item={style.productItem.style}>
                                                                            {pr.product.productPicture && pr.product.productPicture.length > 0 ?
                                                                                <ImgItem item={style.imgItem.style}>
                                                                                    <ImageElement src={pr?.product?.productPicture[0]} defaultImage={dummyImgProduct} style={style.productImage.style} />
                                                                                </ImgItem>
                                                                                :
                                                                                <ImgItem item={style.imgItem.style}>
                                                                                    <ImageElement src={pr?.product?.defaultPicture[0]} defaultImage={dummyImgProduct} style={style.productImage.style} />
                                                                                </ImgItem>
                                                                            }
                                                                            <AboutImg item={style.aboutImg.style} >
                                                                                <DescriptionMain item={style.descriptionMain.style}>
                                                                                    <Text tagType={style.descriptionPara.tagType} text={pr.product.variationName} style={style.descriptionPara.style} />
                                                                                    <DeleteLikeBtn item={style.deleteLikeBtn.style} >
                                                                                        <Deletebtn item={style.deletebtn.style} onClick={() => {
                                                                                            removefromCartHandler(pr.cartId, pr.product._id)
                                                                                        }}>
                                                                                            <DeleteSvg fill={style.deleteSvg.style.desktop.fill} height={style.deleteSvg.style.desktop.height} width={style.deleteSvg.style.desktop.width} />

                                                                                        </Deletebtn>
                                                                                        <LikeBtmItem item={style.likeBtmItem.style} onClick={() => handleAddWishlist(pr.product._id)}  >
                                                                                            <WishlistSvg fill={style.wishlistSvg.style.desktop.fill} height={style.wishlistSvg.style.desktop.height} width={style.wishlistSvg.style.desktop.width} />
                                                                                        </LikeBtmItem>
                                                                                    </DeleteLikeBtn>
                                                                                </DescriptionMain>
                                                                                <TotalItemMobile item={style.totalItemMobile.style}>
                                                                                    <Text tagType={style.amount.tagType} text={pr?.product?.priceAfterDiscount ? getPrice(pr?.product?.priceAfterDiscount) : 0} style={style.amount.style} />
                                                                                    {/* <h2></h2> */}
                                                                                    <DiscountMobile tagType={style.discountMobile.tagType}>
                                                                                        <Text tagType={style.discount.tagType}
                                                                                            style={style.discount.style}
                                                                                            text={pr?.product?.discountPercentage > 0 ?
                                                                                                (pr?.product?.priceBeforeDiscount ? getPrice(pr?.product?.priceBeforeDiscount) : 0)
                                                                                                : ""
                                                                                            } />
                                                                                        {/* <h6> <del>{pr.discount}</del></h6> */}
                                                                                        <Text tagType={style.off.tagType} text={discount(pr?.product) ? `(${discount(pr?.product)} off)` : ''} style={style.off.style} />
                                                                                    </DiscountMobile>
                                                                                </TotalItemMobile>
                                                                            </AboutImg>
                                                                        </ProductItem>
                                                                        <VariantItem item={style.variantItem.style}>

                                                                            <Text tagType={style.frames.tagType} text={pr?.product?.variationStatus === "draft" ? "Out of stock" : ""} style={style.frames.style} />
                                                                            {/* <p>{pr.frame}</p> */}
                                                                            <VariantItemDesktop item={style.variantItemMobile.style}>
                                                                                {
                                                                                    pr && pr.product && pr.product?.variant_scheme?.length ? pr.product.variant_scheme.map((item, key) => {
                                                                                        return (
                                                                                            <>
                                                                                                <VarientContent>
                                                                                                    <Text key={key} tagType={style.varientFrame.tagType} text={item.title} style={style.varientFrame.style} />
                                                                                                    :
                                                                                                    <Text key={key} tagType={style.varientFrame.tagType} text={item.value} style={style.varientFrame.style} />
                                                                                                </VarientContent>
                                                                                            </>
                                                                                        )
                                                                                    }) : ""
                                                                                }
                                                                                {/* <p>{pr.frame}</p> */}
                                                                            </VariantItemDesktop>
                                                                        </VariantItem>
                                                                        <VariantQuantity>
                                                                            <QuantityItem item={style.quantityItem.style}>
                                                                                {/* <input type="number" /> */}
                                                                                <QuantityHandler
                                                                                    pr={pr?.product}
                                                                                    outofStock={"Out of Stock"}
                                                                                    quantityPlus={<ButtonElement item={style.incerementBtn.style} disabled={pr.quantity === pr.product.stock} onClick={() => { changeQtyHandler(pr.cartId, 'plus', pr.product._id, pr.product.stock, pr.quantity) }}><CounterSvg height={style.CounterSvg.height} width={style.CounterSvg.width} stroke={style.CounterSvg.fill} className='incerement-icon' /></ButtonElement>}
                                                                                    quantityMinus={<ButtonElement item={style.descrimentBtn.style}
                                                                                        disabled={cartLoading || pr.quantity === 1}
                                                                                        onClick={() => { changeQtyHandler(pr.cartId, 'minus', pr.product._id, pr.product.stock, pr.quantity) }}
                                                                                    ><CounterSvg height={style.CounterSvg.height} width={style.CounterSvg.width} stroke={style.CounterSvg.fill} className='decriment-icon'></CounterSvg></ButtonElement>}
                                                                                    quantity={<Text style={style.QuantityPara.style} text={pr.quantity + " Pcs"} className='qauntity' />}
                                                                                    showAllTime={true}
                                                                                />
                                                                                {/* <FormInput InputStyle={style.formInput} value={10} type={style.formInput.type} placeholder={style.formInput.placeHolder} /> */}


                                                                            </QuantityItem>
                                                                            <VariantItemMobile item={style.variantItemMobile.style}>
                                                                                {
                                                                                    pr && pr.product && pr.product?.variant_scheme?.length ? pr.product.variant_scheme.map((item, key) => {
                                                                                        return (
                                                                                            <>
                                                                                                <VarientContent>
                                                                                                    <Text key={key} tagType={style.varientFrame.tagType} text={item.title} style={style.varientFrame.style} />
                                                                                                    :
                                                                                                    <Text key={key} tagType={style.varientFrame.tagType} text={item.value} style={style.varientFrame.style} />
                                                                                                </VarientContent>
                                                                                            </>
                                                                                        )
                                                                                    }) : ""
                                                                                }
                                                                                {/* <p>{pr.frame}</p> */}
                                                                            </VariantItemMobile>
                                                                        </VariantQuantity>

                                                                        <TotalItem item={style.totalItem.style}>
                                                                            <Text tagType={style.totalAmout.tagType} text={pr?.product?.priceAfterDiscount ? getPrice(pr?.product?.priceAfterDiscount) : 0} style={style.totalAmout.style} />
                                                                            {/* <h2>{pr.amount}</h2> */}
                                                                            {pr?.product?.discountPercentage > 0 ?
                                                                                <Text tagType={style.totalDiscount.tagType} text={pr?.product?.priceBeforeDiscount ? getPrice(pr?.product?.priceBeforeDiscount) : 0} style={style.totalDiscount.style} />
                                                                                : ""
                                                                            }

                                                                            {/* <h6> <del>{pr.discount}</del></h6> */}
                                                                            <Text tagType={style.totalOff.tagType} text={discount(pr?.product) ? `(${discount(pr?.product)} off)` : ''} style={style.totalOff.style} />
                                                                            {/* <p>{pr.off}</p> */}
                                                                        </TotalItem>
                                                                        <DeletebtnIcon item={style.deletebtnIcon.style}>
                                                                            <DeleteSvg onClick={() => {
                                                                                removefromCartHandler(pr.cartId, pr.product._id)
                                                                            }} fill={style.deleteIcon.style.desktop.fill} height={style.deleteIcon.style.desktop.height} width={style.deleteIcon.style.desktop.width} />
                                                                            {(Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) || (Auth.isLogin() && AppLinkUrl.privateDomain()) ?
                                                                                <LikeBtmItemDesk item={style.likeBtmItemDesk.style}>
                                                                                    <WishlistSvg fill={style.wishlistSvg.style.desktop.fill} onClick={() => handleAddWishlist(pr.product._id)} height={style.wishlistSvg.style.desktop.height} width={style.wishlistSvg.style.desktop.width} />
                                                                                </LikeBtmItemDesk> : ""}
                                                                        </DeletebtnIcon>
                                                                    </ProductContainer>
                                                                    {
                                                                        customerCartData?.length - 1 <= index ? '' :
                                                                            <Line item={style.line.style}></Line>
                                                                    }
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </LayoutSectionLt>
                                                {/* // order summary */}
                                                <OrderSummary
                                                    page={"Cart"}
                                                    orderSummaryStyle={orderSummary}
                                                    submitCart={() => shippingRoute()}
                                                    disabled={customerCartSuccess && customerCartData?.length === 0 ? true :
                                                        customerCartSuccess && customerCartData?.find((item) => item?.product?.variationStatus === "draft") ? true :
                                                            false}
                                                    someothertext="sdsdsdsd" />
                                            </Row>
                                        </>
                                    ) : (
                                        // <h1>sdsdsd</h1>
                                        <EmptyCart style={emptyCartStyle} />
                                    )
                                }
                            </>
                        ) : (
                            "LOADING ...."
                        )}

                    </>
                ) : (
                    // "EMPTY CART"
                    <EmptyCart style={emptyCartStyle} />
                )
            }
            <Modal ref={WishlistAddPopup} ClosePopUp={() => closeModals()} Position="center" slide="center" className={""} ModalsSize={`${window.innerWidth > "600" ? ('modal-s') : ('modal-xl')}`}>
                <ModalBody >

                    <Text text={style.MoveToWishlistHeading.text} tagType={style.MoveToWishlistHeading.tagType} style={style.MoveToWishlistHeading.style}></Text>
                    <Text text={style.MoveToWishlistHeadingDesc.text} tagType={style.MoveToWishlistHeadingDesc.tagType} style={style.MoveToWishlistHeadingDesc.style}></Text>
                    <MoveToWrapper item={style.MoveToWrapper}>
                        <ButtonElement item={style.CancelBtn.style} onClick={() => closeModals()}>{style.CancelBtn.text}</ButtonElement>
                        <ButtonElement item={style.MoveToWishlistBtn.style} onClick={() => moveToWishlistHandle()}>{style.MoveToWishlistBtn.text}</ButtonElement>
                    </MoveToWrapper>
                </ModalBody>
            </Modal>
        </>

    )
}

export default CartTheme1