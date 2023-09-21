import React from 'react'

import { useState } from "react";
import {
    CartIcon, CartItem, HomeIcon, HomeItem,
    MenuContainer, MobileMenu, MoileIcon, ProfileIcon, ProfileItem, ShopIcon, ShopItem,
    WishlistIcon, WishlistItem
} from './MobileMenu.style';
import HomeMenuIcon from "../../../Assets/SectionComponent/Icons/homeIcon.svg";
import ShopMenuIcon from "../../../Assets/SectionComponent/Icons/shopMenuIcon.svg";
import UserMenuIcon from "../../../Assets/SectionComponent/Icons/userMenuIcon.svg";
import WishlistMenuIcon from "../../../Assets/SectionComponent/Icons/wishlistMenuIcon.svg";
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import useWindowDimensions from '@/SectionCommon/WindowSize/widnowSize';
import Link from 'next/link';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { useRouter } from 'next/router';
import Auth from '@/Classes/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { activateProfile } from '@/store/actions/myprofile';
import CartMenuIcon from '../Icons/Cart/CartMenuIcon';


const MobileMenuTheme1 = ({ children }) => {
    const data = children;
    const router = useRouter();
    const query = router.asPath.split("/");
    const pathname = query[query.length - 1];
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const { users, subdomainuser } = useSelector((state) => {
        return {
            users: state.user,
            subdomainuser: state.subdomainuser
        }
    })

    const menuData = [
        {
            id: 1,
            title: "Home",
            route: "/home",
            image: <HomeMenuIcon />
        },
        {
            id: 2,
            title: "Shop",
            route: "/shop",
            image: <ShopMenuIcon />
        },
        {
            id: 3,
            title: "Wishlist",
            route: "/my-wishlist",
            image: <WishlistMenuIcon />
        },
        {
            id: 4,
            title: "Cart",
            route: "/cart",
            image: <CartMenuIcon />
        },
        {
            id: 5,
            title: "User",
            route: "/my-personal-details",
            image: <UserMenuIcon />
        },
    ]


    const navigate = useAppNavigate()
    const [addClass, setAddClass] = useState(`/${pathname}`)


    // console.log(pathname, "router")

    const ActiveClass = (route) => {
        if (route === "/my-personal-details") {
            if (AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
                setAddClass("/my-personal-details");
                navigate("/my-personal-details");
                dispatch(activateProfile(""))
            } else {
                navigate("/login-signup");
            }
        } else if (route === "/my-wishlist") {
            if ((AppLinkUrl.privateDomain() && users._id) || AppLinkUrl.isEditor() || (!AppLinkUrl.privateDomain() && subdomainuser._id)) {
                setAddClass("/my-wishlist");
                navigate("/my-wishlist");
            } else {
                navigate("/login-signup");
            }
        } else {
            setAddClass(route);
            navigate(route);
        }
    }
    let style = {
        MenuContainer: data?.custom_section_editable[0].style,
        MobileMenu: data?.custom_section_editable[1].style,
        MobileMenuActive: data?.custom_section_editable[2].style,
        MoileIcon: data?.custom_section_editable[3].style,
        MoileIconSvg: data?.custom_section_editable[4].style,
        MoileMenuText: data?.custom_section_editable[5].style,
    }
    return (
        <>
            {
                width < 600 && <MenuContainer item={style.MenuContainer} >
                    {
                        menuData.map((value) => {
                            return (
                                <>
                                    {/* <Link href={value?.route} key={value.id}> */}

                                    <MobileMenu item={style.MobileMenu}
                                        itemActive={style.MobileMenuActive}
                                        className={addClass === value.route ? "addclass" : ""}
                                        onClick={() => ActiveClass(value.route)}>
                                        <MoileIcon item={style.MoileIcon} itemSvg={style.MoileIconSvg}>
                                            {
                                                value?.image
                                            }
                                        </MoileIcon>
                                        <Text text={value?.time}
                                            style={style.MoileMenuText}
                                            tagType={data?.custom_section_editable[5].tagType}>
                                            {
                                                value?.title
                                            }
                                        </Text>
                                    </MobileMenu>
                                    {/* </Link> */}

                                </>
                            )
                        })
                    }

                </MenuContainer>
            }
        </>
    )
}

export default MobileMenuTheme1;