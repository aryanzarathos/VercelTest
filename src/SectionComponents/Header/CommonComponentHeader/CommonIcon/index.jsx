import React from 'react'
import { AllIcons, CartNumber, CartSection, IconButton, UserDetail, UserDropDown, UserDropDownList, UserListItem } from './commonIcon.style';
import FavoriteIcon from "../../../../Assets/SectionComponent/Images/Header/favorite.svg";
import SearchOutIcon from "../../../../Assets/SectionComponent/Images/Header/searchOutIcon.svg";
import UserIcon from "../../../../Assets/SectionComponent/Images/Header/userIcon.svg";
import CartIcon from "../../../../Assets/SectionComponent/Images/Header/cartIcon.svg";
import { useState } from 'react';
import Link from 'next/link';
import { Anchor } from '../../../../SectionsLayout/Elements/Anchor/AnchorElement/AnchorTextStyled';
import { useContext } from 'react';
import { UserContext } from '../../HeaderVariation/HeaderVariation1';

const CommonIcon = ({
    favorite = "true", search = "true", user = "true", cart = "true", content }) => {
    const [active, setActive] = useState(false);
    const toggleActiveClass = () => {
        setActive(!active)
    }
    const listData = [
        {
            id: 1,
            route: "",
            title: "Absek"
        },
        {
            id: 2,
            route: "",
            title: "My Account"
        },
        {
            id: 3,
            route: "",
            title: "Orders"
        },
        {
            id: 4,
            route: "",
            title: "Wishlist"
        },
        {
            id: 5,
            route: "",
            title: "Logout"
        },
    ]
    const data = useContext(UserContext);
    let styles = {
        AllIcons: data.custom_section_editable[12].style,
        IconButton: data.custom_section_editable[13].style,
        SearchOutIcon: data.custom_section_editable[15].style,
        FavoriteIcon: data.custom_section_editable[14].style,
        // UserDetail: data.custom_section_editable,
        UserIcon: data.custom_section_editable[16].style,
        CartIcon: data.custom_section_editable[17].style,
        CartNumber: data.custom_section_editable[18].style,
        CartSection: data.custom_section_editable[19].style
    }
    return (
        <AllIcons item={styles.AllIcons}>
            {/* ==== wishlist icon start ==== */}
            {
                search ?
                    // <IconButton item={content}>
                    <Anchor href={""} style={styles.IconButton}>
                        <SearchOutIcon item={styles.SearchOutIcon} className="searchIcon" />
                    </Anchor> : ""
                // </IconButton> 

            }
            {/* ==== wishlist icon end ==== */}
            {/* ==== searchBar Icon start ===  */}
            {
                // <IconButton item={content}>

                favorite ? <Anchor href={""} style={styles.IconButton}>
                    <FavoriteIcon item={styles.FavoriteIcon} className="wishlist" />
                </Anchor> : ""


            }
            {/* ==== searchBar Icon end ===  */}
            {/* ==== userIcon start === */}
            {
                user ? <UserDetail>
                    {/* <IconButton item={content} onClick={toggleActiveClass}> */}
                    <Anchor href={""} style={styles.IconButton} onClick={toggleActiveClass}>
                        <UserIcon item={styles.UserIcon} className="userIcon" />
                    </Anchor>
                    {/* </IconButton> */}
                    <UserDropDown className={active ? "showDropDown" : ""}>
                        <UserDropDownList >
                            {
                                listData.map((value) => {
                                    return (
                                        <>
                                            <UserListItem key={value.id}>
                                                <Link href={value.route}>
                                                    {value.title}
                                                </Link>
                                            </UserListItem>
                                        </>
                                    )
                                })
                            }

                        </UserDropDownList>
                    </UserDropDown>
                </UserDetail> : ""
            }
            {/* ==== userIcon end === */}
            {/* === cart Icon start === */}
            {
                cart ? <CartSection item={styles.CartSection}>
                    {/* <IconButton item={content}> */}
                    <Anchor href={""} style={styles.IconButton}>

                        <CartIcon item={styles.CartIcon} className="cartIcon" />
                    </Anchor>
                    {/* </IconButton> */}
                    <CartNumber item={styles.CartIcon}>1</CartNumber>
                </CartSection> : ""
            }

            {/* === cart Icon end === */}


        </AllIcons>
    )
}

export default CommonIcon
