import React, { forwardRef } from 'react'
import { HumBurgar, HumLine, LoginSignUpBtn, MainSideBar, MenuList, MenuListContent, MenuListItem, MenuSubList, MenuSubListContent, MenuSubListItem, MenuSubSubList, MenuSubSubListContent, MenuSubSubListItem, SideNavbarWrapper, SlidenavOverlay, UserProfile } from './ResponsiveSideBar.style'
import { useState } from 'react';
import Text from "../../../../SectionsLayout/Elements/TextElement/Text";
import Button from "../../../../SectionsLayout/Elements/ButtonElement/ButtonElement"
import ResponsiveBookingButton6 from './ResponsiveBookingButton/ResponsiveBookingButton6';
import useWindowDimensions from '@/CustomHooks/useWindowDimension';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import { useSelector } from 'react-redux';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import ValidationFile from '@/Classes/ValidationFile';

const ResponsiveSideBar = forwardRef(({ show, setShow, data, FinalData, responsiveBookingAppointmentButton, AppointmentRedirect }, ref) => {

    const menuLIst = [
        {
            Name: "Home",
            _id: "1",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                            data: []
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2",
                            data: [
                                {
                                    key: 1,
                                    name: "first sub sub cat"
                                },
                                {
                                    key: 2,
                                    name: "second sub sub cat"
                                },
                            ]
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3",
                            data: []
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4",
                            data: []
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5",
                            data: []
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2"
                },
                {
                    Name: "subData3",
                    _id: "3"
                },
                {
                    Name: "subData4",
                    _id: "4"
                },
                {
                    Name: "subData5",
                    _id: "5"
                },
            ]
        },
        {
            Name: "Shop",
            _id: "2",
            subData: []
        },
        {
            Name: "About us",
            _id: "3",
            subData: []
        },
        {
            Name: "Contact us",
            _id: "4",
            subData: []
        },
        {
            Name: "Blog",
            _id: "5",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2",
                    subSubData: []
                },
                {
                    Name: "subData3",
                    _id: "3",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData4",
                    _id: "4",
                    subSubData: []
                },
                {
                    Name: "subData5",
                    _id: "5",
                    subSubData: []
                },
            ]
        },
        {
            Name: "collection",
            _id: "6",
            subData: []
        },
        {
            Name: "Category",
            _id: "7",
            subData: []
        },
        {
            Name: "Men",
            _id: "8",
            subData: []
        },
        {
            Name: "Women",
            _id: "10",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                            , data: [
                                {
                                    key: 1,
                                    name: "first sub sub cat"
                                },
                                {
                                    key: 2,
                                    name: "second sub sub cat"
                                },
                            ]
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2",
                    subSubData: []
                },
                {
                    Name: "subData3",
                    _id: "3",
                    subSubData: []
                },
                {
                    Name: "subData4",
                    _id: "4",
                    subSubData: []
                },
                {
                    Name: "subData5",
                    _id: "5",
                    subSubData: []
                },
            ]
        }
    ]
    const navigate = useAppNavigate();
    const [expandlevel1, setExpandlevel1] = useState(-1);
    const [expandlevel2, setExpandlevel2] = useState(-1);

    const { user, subdomainuser } = useSelector((state) => {
        return {
            user: state.user,
            subdomainuser: state.subdomainuser
        }
    })

    const ExpandData = (index) => {
        setExpandlevel1(expandlevel1 === index ? -1 : index);
        setExpandlevel2(-1);
    }

    const ExpandSubData = (index) => {
        setExpandlevel2(expandlevel2 === index ? -1 : index);
    }
    const { width } = useWindowDimensions();

    const styleData = data;
    const menuListing = data?.data?.data;
    let styles = {
        SideNavbarWrapper: styleData.custom_section_editable[8].style,
        SideNavbarWrapperActive: styleData.custom_section_editable[9].style,
        UserProfile: styleData.custom_section_editable[10].style,
        UserProfileWelcome: styleData.custom_section_editable[11].style,
        LoginSignUpBtn: styleData.custom_section_editable[12].style,
        LoginBtn: styleData.custom_section_editable[13].style,
        SignUpBtn: styleData.custom_section_editable[14].style,
        MenuList: styleData.custom_section_editable[15].style,
        MenuListItem: styleData.custom_section_editable[16].style,
        MenuListContent: styleData.custom_section_editable[17].style,
        MenuListContentBtn: styleData.custom_section_editable[18].style,
        MenuSubList: styleData.custom_section_editable[19].style,
        MenuSubListItem: styleData.custom_section_editable[20].style,
        MenuSubListContent: styleData.custom_section_editable[21].style,
        MenuSubListContentBtn: styleData.custom_section_editable[22].style,
        MenuSubSubListContent: styleData.custom_section_editable[23].style,
        MenuSubSubList: styleData.custom_section_editable[24].style,
        MenuSubSubListItem: styleData.custom_section_editable[25].style,
        MenuSubSubListItem: styleData.custom_section_editable[25].style,

    }

    const RedirectTo = (slug, prefix, pageData) => {
        if (pageData?.page_type === "custom") {
            if (ValidationFile.validWebsiteLink(pageData?.customUrl)) {
                window.open(pageData?.customUrl ? pageData?.customUrl?.includes("https://") ? pageData?.customUrl : `https://${pageData?.customUrl}` : "", "_blank");
            }
        } else {
            switch (prefix) {
                case "category":
                    if (
                        pageData?.page_category_id?.categorySlug &&
                        pageData?.page_category_id?.subcategorySlug &&
                        pageData?.page_category_id?.subsubcategorySlug
                    ) {
                        navigate(
                            `/category/${pageData?.page_category_id?.categorySlug}/${pageData?.page_category_id?.subcategorySlug}/${pageData?.page_category_id?.subsubcategorySlug}`
                        );
                    } else if (
                        pageData?.page_category_id?.categorySlug &&
                        pageData?.page_category_id?.subcategorySlug
                    ) {
                        navigate(
                            `/category/${pageData?.page_category_id?.categorySlug}/${pageData?.page_category_id?.subcategorySlug}`
                        );
                    } else {
                        navigate(`/category/${slug}`);
                    }
                    break;
                case "collection":
                    navigate(`/collection/${slug}`)
                    break;

                default:
                    navigate(`/${slug}`)
                    break;
            }
        }
    }

    return (

        <SideNavbarWrapper ref={ref} item={styles?.SideNavbarWrapper}
            itemActive={styles?.SideNavbarWrapperActive}
            className={show ? "active" : ""}>
            <UserProfile item={styles?.UserProfile}>
                {
                    (AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ? (
                        <>
                            <Text tagType={styleData.custom_section_editable[11].tagType}
                                text={styleData.custom_section_editable[11].text}
                                style={styles?.UserProfileWelcome} />

                        </>
                    ) : (
                        <Text tagType={styleData.custom_section_editable[11].tagType}
                            text={`Guest`}
                            style={styles?.UserProfileWelcome} />

                    )
                }
                {(AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
                    <>
                        <Text tagType={styleData.custom_section_editable[11].tagType}
                            text={subdomainuser?.user_fullname ? subdomainuser?.user_fullname : subdomainuser?.user_email ? subdomainuser?.user_email : subdomainuser?.user_contact ? `${subdomainuser?.user_country_code ? subdomainuser?.user_country_code : ""} ${subdomainuser?.user_contact}` : ""}
                            style={styles?.UserProfileWelcome} />
                    </>
                    :
                    <LoginSignUpBtn item={styles?.LoginSignUpBtn}>
                        <Button onClick={() => RedirectTo("/login-signup")}
                            text={styleData.custom_section_editable[13].text}
                            style={styles?.LoginBtn} />
                        /
                        <Button onClick={() => RedirectTo("/login-signup")}
                            text={styleData.custom_section_editable[14].text}
                            style={styles?.SignUpBtn} />
                    </LoginSignUpBtn>
                }
                {
                    FinalData?.show_Booking_Appointment ?
                        <ResponsiveBookingButton6 style={responsiveBookingAppointmentButton} onClickHandle={AppointmentRedirect} />
                        : ""
                }
            </UserProfile>
            {/*  === menu list === */}
            <MenuList item={styles?.MenuList}>
                {menuListing && menuListing?.length &&
                    menuListing[0]?.data && menuListing[0]?.data?.length &&
                    menuListing[0]?.data?.map((value) => {
                        return (
                            <>
                                <MenuListItem key={value?._id} item={styles?.MenuListItem}>
                                    <MenuListContent item={styles?.MenuListContent}>
                                        <Button text={value?.page?.page_name}
                                            onClick={() => RedirectTo(value?.page?.page_slug, value?.page?.prefix, value?.page)}
                                            style={styles?.MenuListContentBtn}>
                                        </Button>

                                        {
                                            value.data && value.data.length > 0 && <Button
                                                onClick={() => ExpandData(value?._id)}
                                                style={styles?.MenuListContentBtn}>
                                                {expandlevel1 === value._id ? " - " : " + "}
                                            </Button>
                                        }
                                    </MenuListContent>
                                    {
                                        (expandlevel1 === value._id) &&
                                        value.data && value.data.length > 0 &&
                                        <MenuSubList item={styles?.MenuSubList}>
                                            {
                                                value.data.map((item) => {
                                                    return (
                                                        <>
                                                            <MenuSubListItem key={item._id} item={styles?.MenuSubListItem}>
                                                                <MenuSubListContent item={styles?.MenuSubListContent}>
                                                                    <Button onClick={() => RedirectTo(item?.page?.page_slug, item?.page?.prefix, item?.page)}
                                                                        text={item?.page?.page_name} style={styles?.MenuSubListContentBtn} />

                                                                    {
                                                                        item.data && item.data.length > 0 &&
                                                                        <Button onClick={() => ExpandSubData(item?._id)}
                                                                            style={styles?.MenuSubListContentBtn} >
                                                                            {expandlevel2 === item._id ? " - " : " + "}
                                                                        </Button>
                                                                    }
                                                                </MenuSubListContent>
                                                                {(expandlevel2 === item?._id) &&
                                                                    item.data && item.data.length > 0 && <MenuSubSubList item={styles?.MenuSubSubList}>
                                                                        {
                                                                            item.data?.map((subsubcategory) => {
                                                                                return (
                                                                                    <>
                                                                                        <MenuSubSubListItem key={subsubcategory._id} item={styles?.MenuSubSubListItem}>
                                                                                            <MenuSubSubListContent item={styles?.MenuSubSubListContent}>
                                                                                                <Button onClick={() => RedirectTo(subsubcategory?.page?.page_slug, subsubcategory?.page?.prefix, subsubcategory?.page)}
                                                                                                    text={subsubcategory?.page?.page_name} style={styles?.MenuSubListContentBtn} />

                                                                                                {
                                                                                                    subsubcategory.data && subsubcategory.data.length > 0 &&
                                                                                                    <Button text={subsubcategory?.Name} style={styles?.MenuSubListContentBtn}>
                                                                                                        +
                                                                                                    </Button>
                                                                                                }
                                                                                            </MenuSubSubListContent>
                                                                                        </MenuSubSubListItem>

                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                    </MenuSubSubList>
                                                                }
                                                            </MenuSubListItem>
                                                        </>
                                                    )
                                                })
                                            }
                                        </MenuSubList>
                                    }
                                </MenuListItem>

                            </>
                        )
                    })
                }

            </MenuList>
            {/* ==== menu list  ===*/}
        </SideNavbarWrapper>





    )
})

ResponsiveSideBar.displayName = "ResponsiveSideBar"
export default ResponsiveSideBar
