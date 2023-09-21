import React, { useRef, useState } from 'react'
import { CurrencySearch, HumBurgar, HumLine, MainLogo, MainMobileNavbar, MainSearch, SlidenavOverlay } from './ResponsiveNavbar.style'
import Image from 'next/image';
import MobileLogo from "../../../Assets/SectionComponent/Images/Header/mobilenavbar/mobileNavbar.png";
import MobileSearch from "../../../Assets/SectionComponent/Images/Header/mobilenavbar/mobileSearch.svg"
import ResponsiveSideBar from './ResponsiveSideBar/ResponsiveSideBar';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import useWindowDimensions from '../../../SectionCommon/WindowSize/widnowSize';
import DynamicCommonIcon from '../CommonComponentHeader/CommonIcon/DynamicCommonIcon';
import FullSearchBar from '../CommonComponentHeader/FullSearchBar';
import CurrencySelector from '@/SectionComponents/Ribbons/TopHeader/CurrencySelector/CurrencySelector';
import ResponsiveBookingButton from '../HeaderVariation/HeaderVariation5/ResponsiveSideBar/ResponsiveBookingButton/ResponsiveBookingButton';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import Auth from '@/Classes/Auth';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import Text from '@/SectionsLayout/Elements/TextElement/Text';
import { useOutsideClick } from 'rooks';
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';

const ResponsiveNavbar = ({ children }) => {
    const data = children;
    const ref = useRef()
    const [active, setActive] = useState(false);
    let FinalData = data?.data?.mainHeader;
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
        CartIcon: data?.custom_section_editable[39]?.style
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
        CloseIcon: data?.custom_section_editable[47]?.style,
        ResponsiveBookAppointment: data?.custom_section_editable[48]
    }
    let bookingAppointmentButton = {
        ...data?.custom_section_editable[48],
        text: "Booking Appointment",
        styles: {
            ...data?.custom_section_editable[48]?.style,
            desktop: {
                ...data?.custom_section_editable[48]?.style?.desktop,
                "color": "#fff",
                "backgroundColor": "rgba(31, 50, 89,.8)",
                hover: {
                    ...data?.custom_section_editable[48]?.style?.desktop?.hover,
                    "color": "#fff",
                    "backgroundColor": "rgba(31, 50, 89,1)"
                },
                active: {
                    ...data?.custom_section_editable[48]?.style?.desktop?.hover?.active,
                    "color": "white",
                    "backgroundColor": "green",
                }
            }
        }


    }
    const navigate = useAppNavigate()

    const AppointmentRedirect = () => {
        if ((AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            navigate("/service-selection");
        }
        else {
            navigate("/login-signup");
        }
    }
    useOutsideClick(ref, () => {
        if (active) {
            setActive(false)
        }
    }, [])
    return (
        <>
            {
                width < 1024 ?
                    <>
                        {
                            searchBar ? <FullSearchBar FullSearch={FullSearch} style={style} /> :
                                <>
                                    <MainMobileNavbar item={styles?.MainMobileNavbar}>
                                        {/* === side bar === */}
                                        <HumBurgar onClick={() => setActive(true)} item={styles?.HumBurgar}>
                                            <HumLine item={styles?.HumLine}></HumLine>
                                            <HumLine item={styles?.HumLine}></HumLine>
                                            <HumLine item={styles?.HumLine}></HumLine>
                                        </HumBurgar>
                                        {/* === side bar === */}
                                        {/* ==== logo === */}
                                        <AnchorElement link={"/"} style={""}>
                                            {
                                                FinalData?.logoAndSiteName.show_site_logo &&

                                                <MainLogo item={styles?.MainLogo} >
                                                    <ImageElement src={FinalData?.logoAndSiteName?.logo ? FinalData?.logoAndSiteName?.logo : MobileLogo} defaultImage={MobileLogo}
                                                        alt='logo' style={styles?.MainLogoImage} />
                                                </MainLogo>
                                            }
                                            {
                                                FinalData?.logoAndSiteName?.show_site_name &&
                                                <Text tagType={styles?.LogoContentP?.tagType}
                                                    text={FinalData?.logoAndSiteName?.site_name}
                                                    style={styles?.LogoContentP?.style} />
                                            }
                                        </AnchorElement>
                                        {/* ==== logo ==== */}

                                        {/* <MainSearch item={styles?.MainSearch}>
                            <MobileSearch />
                        </MainSearch> */}

                                        {/* <CurrencySearch>
                                            {
                                                width > 767 ? "" :
                                                    <CurrencySelector type={"dynamic"} />
                                            }
                                            {
                                                width > 767 && FinalData?.show_Booking_Appointment ?
                                                    <ResponsiveBookingButton style={bookingAppointmentButton} onClickHandle={AppointmentRedirect} /> : ""
                                            }
                                            <DynamicCommonIcon style={styles} FullSearch={FullSearch} favorite={FinalData?.show_wishlist} search={FinalData?.show_Search}
                                                user={FinalData?.show_User_profile} cart={FinalData?.show_shopping_cart} IconStyle={FinalData?.otherColor} />
                                        </CurrencySearch> */}

                                    </MainMobileNavbar>
                                    <SlidenavOverlay className={active ? "active" : ""} item={styles?.SlidenavOverlay}
                                        itemActive={styles?.SlidenavOverlayActive}
                                    >
                                        <ResponsiveSideBar
                                            ref={ref}
                                            data={data}
                                            show={active}
                                            responsiveBookingAppointmentButton={bookingAppointmentButton}
                                            // bookingAppointmentButton={bookingAppointmentButton}
                                            AppointmentRedirect={AppointmentRedirect}
                                            setShow={setActive}
                                            FinalData={FinalData}
                                        />
                                    </SlidenavOverlay>
                                </>
                        }
                    </>
                    : ""
            }
        </>
    )
}

export default ResponsiveNavbar
