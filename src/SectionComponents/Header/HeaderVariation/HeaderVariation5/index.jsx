import React, { useEffect, useRef, useState } from 'react'
import { BookIcon, CurrencySearch, HumBurgar, HumLine, LogoContent, MainLogo, MainLogoContainer, MainMobileNavbar, MainSearch, MenuIcon, SlidenavOverlay } from './headerVariation5.style'
// import MobileLogo from "../../../../Assets/SectionComponent/Images/Header/mobilenavbar/mobileNavbar.png";
// import MobileLogo from "../../../../Assets/SectionComponent/Images/Header/svgLogo.png";
import ResponsiveSideBar from './ResponsiveSideBar/ResponsiveSideBar';
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import useWindowDimensions from '../../../../SectionCommon/WindowSize/widnowSize';
// import DynamicCommonIcon from '../../CommonComponentHeader/CommonIcon/DynamicCommonIcon';
// import FullSearchBar from '../../CommonComponentHeader/FullSearchBar';
import CurrencySelector from '@/SectionComponents/Ribbons/TopHeader/CurrencySelector/CurrencySelector';
// import HeaderLogo4 from '../HeaderVariation4/HeaderLogo4';
import FullSearchBar5 from './FullSearchBar5';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import DynamicCommonIcon5 from './DynamicCommonIcon5';
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import BookAppointment5 from './BookAppointment';
import DefaultLogo from "../../../../Assets/SectionComponent/Images/Header/logo.png";
import { useOutsideClick } from 'rooks';

const HeaderVariation5 = ({ children }) => {
    const data = children;
    console.log("line 25 CHILDREN CHECK", data)
    const ref = useRef(null)
    const [active, setActive] = useState(false)
    let styles = {
        MainMobileNavbar: data.custom_section_editable[0].style,
        HumBurgar: data.custom_section_editable[1].style,
        HumLine: data.custom_section_editable[2].style,
        MainLogo: data.custom_section_editable[3].style,
        MainLogoImage: data.custom_section_editable[4].style,
        MainSearch: data.custom_section_editable[5].style,
        SlidenavOverlay: data.custom_section_editable[6].style,
        SlidenavOverlayActive: data.custom_section_editable[7].style,
        ShowDropDown: data?.custom_section_editable[26].style,
        UserDropDownList: data?.custom_section_editable[27].style,
        UserDropDown: data?.custom_section_editable[28].style,
        UserListItem: data?.custom_section_editable[29].style,
        UserListItemLink: data?.custom_section_editable[30].style,
        WelcomeHeading: data?.custom_section_editable[31],
        WelcomeText: data?.custom_section_editable[32],
        WelcomeBtn: data?.custom_section_editable[33],
        AllIcons: data?.custom_section_editable[34]?.style,
        IconButton: data?.custom_section_editable[35]?.style,
        SearchOutIcon: data.custom_section_editable[37]?.style,
        FavoriteIcon: data?.custom_section_editable[36]?.style,
        UserIcon: data?.custom_section_editable[38]?.style,
        CartSection: data?.custom_section_editable[41]?.style,
        CartNumber: data.custom_section_editable[40]?.style,
        CartIcon: data?.custom_section_editable[39]?.style,
        MenuIcon: data?.custom_section_editable[48]?.style,
        MenuP: data?.custom_section_editable[49],
        MainLogoContainer: data?.custom_section_editable[50]?.style,
        LogoContent: data?.custom_section_editable[51]?.style,
        LogoContentP: data?.custom_section_editable[52],
        BookIcon: data?.custom_section_editable[53]?.style,
        BookAppointment: data?.custom_section_editable[54],
    }
    const { width } = useWindowDimensions();
    const [searchBar, setSearchBar] = useState(false)
    const FullSearch = () => {
        setSearchBar(!searchBar)
    }
    let style = {
        MainSearchBar: data?.custom_section_editable[42]?.style,
        SearchIcon: data?.custom_section_editable[43]?.style,
        SearchForm: data?.custom_section_editable[44]?.style,
        SearchInput: data?.custom_section_editable[45]?.style,
        CloseBtn: data?.custom_section_editable[46]?.style,
        CloseIcon: data?.custom_section_editable[47]?.style
    }
    let FinalData = data?.data?.mainHeader;
    let ResponsiveBooking = FinalData?.show_Booking_Appointment;
    let TopHeaderData = data?.data?.topHeader;

    const [scrollY, setScrollY] = useState(0);
    const navigate = useAppNavigate()
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, []);
    let bookingAppointmentButton = {
        ...data?.custom_section_editable[54],
        text: FinalData?.booking_appointment?.text,
        styles: {
            ...data?.custom_section_editable[54]?.style,
            desktop: {
                ...data?.custom_section_editable[54]?.style?.desktop,
                "color": FinalData?.booking_appointment?.Normal_Text_Color,
                "backgroundColor": FinalData?.booking_appointment?.Normal_Button_Color,
                hover: {
                    ...data?.custom_section_editable[54]?.style?.desktop?.hover,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor": FinalData?.booking_appointment?.Hover_Button_Color
                },
                active: {
                    ...data?.custom_section_editable[54]?.style?.desktop?.hover?.active,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor": FinalData?.booking_appointment?.Hover_Button_Color
                }
            }
        }


    }
    const AppointmentRedirect = () => {
        if ((AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            navigate("/service-selection");
        }
        else {
            navigate("/login-signup");
        }
    }
    const logoTemp = {
        src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5938&q=80 5938w"
    }

    useOutsideClick(ref, () => {
        if (active) {
            setActive(false)
        }
    }, [])

    return (
        <>
            {
                searchBar ? <FullSearchBar5 FullSearch={FullSearch} style={style} /> :
                    <>
                        <MainMobileNavbar item={styles?.MainMobileNavbar} className={scrollY ? "sticky" : ""}>
                            {/* === side bar === */}
                            <MenuIcon item={styles?.MenuIcon}>
                                <HumBurgar onClick={() => setActive(true)} item={styles?.HumBurgar}>
                                    <HumLine item={styles?.HumLine}></HumLine>
                                    <HumLine item={styles?.HumLine}></HumLine>
                                    <HumLine item={styles?.HumLine}></HumLine>
                                </HumBurgar>
                                <Text tagType={styles?.MenuP?.tagType}
                                    text={styles?.MenuP?.text}
                                    style={styles?.MenuP?.style} />
                            </MenuIcon>

                            {/* === side bar === */}
                            {/* ==== logo === */}
                            <MainLogoContainer item={styles?.MainLogoContainer}>
                                <AnchorElement link={"/"} style={""} >
                                    <LogoContent item={styles?.LogoContent}>
                                        {/* <MainLogo item={styles?.MainLogo}>
                                            <ImageElement src={MobileLogo} alt="logo-image" style={styles?.MainLogoImage} />
                                        </MainLogo>
                                        <Text tagType={styles?.LogoContentP?.tagType}
                                            text={styles?.LogoContentP?.text}
                                            style={styles?.LogoContentP?.style} /> */}

                                        {
                                            FinalData.logoAndSiteName.show_site_logo &&

                                            <MainLogo item={styles?.MainLogo} >
                                                <ImageElement src={FinalData.logoAndSiteName?.logo ? FinalData.logoAndSiteName?.logo : logoTemp} defaultImage={DefaultLogo}
                                                    alt='logo' style={styles?.MainLogoImage} />
                                            </MainLogo>
                                        }
                                        {
                                            FinalData.logoAndSiteName.show_site_name &&
                                            <Text tagType={styles?.LogoContentP?.tagType}
                                                text={FinalData?.logoAndSiteName?.site_name}
                                                style={styles?.LogoContentP?.style} />
                                        }


                                    </LogoContent>
                                </AnchorElement>
                            </MainLogoContainer>
                            {/* ==== logo ==== */}
                            <CurrencySearch>
                                {
                                    width > 767 && TopHeaderData?.Multiple_Currency ?
                                        <CurrencySelector type={"dynamic"} /> : ""
                                }
                                {
                                    width > 767 && FinalData?.show_Booking_Appointment ?
                                        <BookAppointment5 style={bookingAppointmentButton} onClickHandle={AppointmentRedirect} /> : ""
                                }
                                <DynamicCommonIcon5 style={styles} FullSearch={FullSearch} favorite={FinalData?.show_wishlist} search={FinalData?.show_Search}
                                    user={FinalData?.show_User_profile} cart={FinalData?.show_shopping_cart} IconStyle={FinalData?.otherColor} />
                            </CurrencySearch>

                        </MainMobileNavbar>
                        <SlidenavOverlay className={active ? "active" : ""} item={styles?.SlidenavOverlay}
                            itemActive={styles?.SlidenavOverlayActive}
                        // onClick={() => setActive(false)}
                        >
                            <ResponsiveSideBar
                                ref={ref}
                                data={data}
                                show={active}
                                setShow={setActive}
                                ResponsiveBooking={ResponsiveBooking}
                                bookingAppointmentButton={bookingAppointmentButton}
                                AppointmentRedirect={AppointmentRedirect}
                                FinalData={FinalData}
                            />
                        </SlidenavOverlay>
                    </>
            }
        </>
    )
}

export default HeaderVariation5
