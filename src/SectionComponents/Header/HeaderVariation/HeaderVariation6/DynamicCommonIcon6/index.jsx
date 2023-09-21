
import React, { useRef, useState } from 'react'
import { AllIcons, CartNumber, CartSection, IconButton, UserDetail, UserDropDown, UserDropDownList, UserListItem } from './DynamicIcon6.style';
import FavoriteIcon from "../../../../../Assets/SectionComponent/Images/Header/favorite.svg";
import SearchOutIcon from "../../../../../Assets/SectionComponent/Images/Header/searchOutIcon.svg";
import UserIcon from "../../../../../Assets/SectionComponent/Images/Header/userIcon.svg";
import CartIcon from "../../../../../Assets/SectionComponent/Images/Header/cartIconSvg.svg";
// import { useContext } from 'react';
// import { UserContext } from '../../../HeaderVariation';
// import Link from 'next/link';
import AnchorElement from '../../../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { useDetectOutsideClick } from '../../../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
// import SearchBar from '../../SearchBar';
// import FullSearchBar from '../../FullSearchBar';
import useWindowDimensions from '../../../../../SectionCommon/WindowSize/widnowSize';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import useCart from '@/TemplateCustomHooks/useCart';
import { useSelector } from 'react-redux';

const DynamicCommonIcon6 = ({ favorite, search, user, cart, style, FullSearch, IconStyle }) => {
    const { width } = useWindowDimensions();
    const ref = useRef(null);
    const [userDropDown, setUserDropDown] = useDetectOutsideClick(ref, false);
    const navigate = useAppNavigate();
    const { users, subdomainuser } = useSelector((state) => {
        return {
            users: state.user,
            subdomainuser: state.subdomainuser
        }
    })
    const [customerCartSuccess, customerCartData, removefromCartHandler, transferToWishlistHandler, changeQtyHandler, cartLoading, history, orderFromCartHandler, shippingRoute, guestLoginModalState, setGuestLoginModalState] = useCart()
    const listData = [
        {
            id: 1,
            route: "",
            title: AppLinkUrl.subdomain() ? subdomainuser?.user_fullname ? subdomainuser?.user_fullname :
                subdomainuser?.user_contact ? subdomainuser?.user_contact
                    : subdomainuser?.user_email
                : users?.user_fullname ? user?.user_fullname :
                    users?.user_contact ? users?.user_contact :
                        users?.user_email,
            accessid: ""
        },
        {
            id: 2,
            route: "/my-personal-details",
            title: "My Account",
            accessid: ""
        },
        {
            id: 3,
            route: "/my-orders",
            title: "Orders",
            accessid: ""
        },
        {
            id: 4,
            route: "/my-wishlist",
            title: "Wishlist",
            accessid: ""
        },
        {
            id: 5,
            route: "/logout",
            title: "Logout",
            accessid: ""
        },
    ];

    const OpenWishList = () => {
        if((AppLinkUrl.privateDomain() && users._id) ||AppLinkUrl.isEditor()|| (!AppLinkUrl.privateDomain() && subdomainuser._id)){
            navigate("/my-wishlist")
        }else{
             navigate("/login-signup")
        }
    }

    const LoginRedirect = () => {
        navigate("/login-signup")
    }

    const OpenCart = () => {
        navigate("/cart")
    }
    return (
        <AllIcons item={style.AllIcons}>
            {/* ==== wishlist icon start ==== */}
            {
                search ? <IconButton item={style.IconButton} itemSearch={style?.SearchOutIcon}
                    onClick={FullSearch} iconColor={IconStyle}><SearchOutIcon className="searchIcon" /></IconButton> : ""
            }
            {/* ==== wishlist icon end ==== */}
            {/* ==== searchBar Icon start ===  */}
            {
                width > 767 &&
                <>
                    {
                        favorite ? <IconButton item={style.IconButton} iconColor={IconStyle} itemFav={style?.FavoriteIcon} onClick={() => OpenWishList()}><FavoriteIcon className="wishlist" /></IconButton> : ""
                    }
                </>

            }
            {/* ==== searchBar Icon end ===  */}
            {/* ==== userIcon start === */}
            {
                width > 767 && <>
                    {
                        user ?
                            <IconButton ref={ref} item={style.IconButton} iconColor={IconStyle} itemUser={style.UserIcon} >
                                <UserIcon className="userIcon" onClick={() => setUserDropDown(!userDropDown)} />
                                <UserDropDown className={userDropDown ? "showDropDown" : ""}
                                    item={style?.UserDropDown}
                                    itemShow={style?.ShowDropDown}>
                                    {
                                        (AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ? <>
                                            <UserDropDownList item={style?.UserDropDownList} >
                                                {
                                                    listData.map((value) => {
                                                        return (
                                                            <>
                                                                <UserListItem key={value.id} item={style?.UserListItem}>
                                                                    <AnchorElement link={value.route} style={style?.UserListItemLink}>
                                                                        {value.title}
                                                                    </AnchorElement>
                                                                </UserListItem>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </UserDropDownList>
                                        </> :
                                            <>
                                                <Text style={style?.WelcomeHeading.style}
                                                    text={style?.WelcomeHeading?.text}
                                                    tagType={style?.WelcomeHeading?.tagType}
                                                />
                                                <Text style={style?.WelcomeText.style}
                                                    text={style?.WelcomeText.text}
                                                    tagType={style?.WelcomeText.tagType} />
                                                <Button text={style?.WelcomeBtn.text} onClick={() => LoginRedirect()}
                                                    style={style?.WelcomeBtn.style} />
                                            </>
                                    }
                                </UserDropDown>


                            </IconButton> : ""
                    }

                </>
            }
            {/* ==== userIcon end === */}
            {/* === cart Icon start === */}
            {
                width > 767 && <>

                    {
                        cart ? <CartSection item={style.CartSection} onClick={() => OpenCart()} >
                            <IconButton item={style.IconButton} itemCart={style.CartIcon} iconColor={IconStyle}>
                                <CartIcon className="cartIcon" />
                            </IconButton>
                            {customerCartSuccess && customerCartData && customerCartData?.length ?
                                <CartNumber item={style.CartNumber}>{customerCartSuccess && customerCartData ? customerCartData?.length : ""}</CartNumber> : ""}
                        </CartSection> : ""
                    }
                </>
            }
            {

            }


            {/* === cart Icon end === */}



        </AllIcons>
    )
}

export default DynamicCommonIcon6
