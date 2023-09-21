import React, { useEffect, useState } from 'react'
import { BookIcon, ImageWrapper, MainHeader } from './variation1.style'
import HeaderLogo from '../../CommonComponentHeader/HeaderLogo'
import NavBar from '../../CommonComponentHeader/NavBar'
import SearchBar from '../../CommonComponentHeader/SearchBar'
// import CommonIcon from '../CommonComponentHeader/CommonIcon'
// import DynamicNavBar from '../CommonComponentHeader/NavBar/DynamicNavBar'
// import DynamicCommonIcon from '../CommonComponentHeader/CommonIcon/DynamicCommonIcon'
import { createContext } from 'react'
import useWindowDimensions from '../../../../SectionCommon/WindowSize/widnowSize'
import FullSearchBar from '../../CommonComponentHeader/FullSearchBar'
import DynamicCommonIcon from '../../CommonComponentHeader/CommonIcon/DynamicCommonIcon'
import Auth from '@/Classes/Auth'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import Image from 'next/image'
import BookAppointment from '../../CommonComponentHeader/BookAppointment'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'


export const UserContext = createContext();

const HeaderVariation1 = ({ children }) => {
    const data = children;
    //// console.log(data,"line 19")
    const styles = data?.custom_section_editable[0]
    const { width } = useWindowDimensions();
    let style = {
        UserDropDown: data?.custom_section_editable[49].style,
        ShowDropDown: data?.custom_section_editable[50].style,
        UserDropDownList: data?.custom_section_editable[51].style,
        UserListItem: data?.custom_section_editable[52].style,
        UserListItemLink: data?.custom_section_editable[53].style,
        WelcomeHeading: data?.custom_section_editable[54],
        WelcomeText: data?.custom_section_editable[55],
        WelcomeBtn: data?.custom_section_editable[56],
        AllIcons: data?.custom_section_editable[12]?.style,
        IconButton: data?.custom_section_editable[13]?.style,
        SearchOutIcon: data.custom_section_editable[15]?.style,
        FavoriteIcon: data?.custom_section_editable[14]?.style,
        UserIcon: data?.custom_section_editable[16]?.style,
        CartSection: data?.custom_section_editable[19]?.style,
        CartNumber: data.custom_section_editable[18]?.style,
        CartIcon: data?.custom_section_editable[17]?.style,
        MainSearchBar: data?.custom_section_editable[57]?.style,
        SearchIcon: data?.custom_section_editable[58]?.style,
        SearchForm: data?.custom_section_editable[59]?.style,
        SearchInput: data?.custom_section_editable[60]?.style,
        CloseBtn: data?.custom_section_editable[61]?.style,
        CloseIcon: data?.custom_section_editable[62]?.style,
        BookIcon: data?.custom_section_editable[64]?.style,
        BookAppointment: data?.custom_section_editable[65],
    }
    let NavigationData = data?.data?.data?.length ? data?.data?.data[0] : {}
    let FinalData = data?.data?.mainHeader
    console.log(FinalData?.booking_appointment?.Hover_Text_Color, "hover")
    const [searchBar, setSearchBar] = useState(false)
    const FullSearch = () => {
        setSearchBar(!searchBar)
    }
    // console.log(FinalData, "milakuch")
    const navigate = useAppNavigate()
    const [scrollY, setScrollY] = useState(0);
    let bookingAppointmentButton = {
        ...data?.custom_section_editable[65],
        text: FinalData?.booking_appointment?.text,
        styles: {
            ...data?.custom_section_editable[65]?.style,
            desktop: {
                ...data?.custom_section_editable[65]?.style?.desktop,

                "color": FinalData?.booking_appointment?.Normal_Text_Color,
                "backgroundColor": FinalData?.booking_appointment?.Normal_Button_Color,
                hover: {
                    ...data?.custom_section_editable[65]?.style?.desktop?.hover,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor": FinalData?.booking_appointment?.Hover_Button_Color
                },
                active: {
                    ...data?.custom_section_editable[65]?.style?.desktop?.hover?.active,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor": FinalData?.booking_appointment?.Hover_Button_Color,
                }
            }
        }


    }
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

    const AppointmentRedirect = () => {
        if ((AppLinkUrl.privateDomain() && Auth.isLogin() || AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
            navigate("/service-selection");
        }
        else {
            navigate("/login-signup");
        }
    }

    return (
        <>
            {
                width > 1024 ?
                    <UserContext.Provider value={data}>
                        {
                            searchBar ?
                                <FullSearchBar FullSearch={FullSearch} style={style}
                                    searchStyle={FinalData?.otherColor} /> :
                                <>
                                    <MainHeader item={styles} className={scrollY ? "sticky" : ""}>
                                        {
                                            FinalData?.logoAndSiteName?.show_site_logo || FinalData?.logoAndSiteName?.show_site_name ? (
                                                <HeaderLogo logoData={FinalData?.logoAndSiteName} />
                                            ) : (
                                                ""
                                            )
                                        }
                                        {
                                            FinalData?.navigation_menu?.hide_navigation ? "" :
                                                <NavBar NavigationData={NavigationData} NavStyle={FinalData} />
                                        }
                                        {/* ===== dynamic navbar is simple navbar for testing ====== */}
                                        {/* <DynamicNavBar /> */}
                                        {/* {
                                            FinalData.show_Search &&
                                            <SearchBar className={` ${width < 1200 ? "ml-auto" : ""}`} searchStyle={FinalData?.otherColor} />
                                        } */}

                                        {/* <CommonIcon favorite={true} content={data} search={false} user={true} cart={true} /> */}
                                        <BookIcon item={style?.BookIcon}>
                                            {
                                                FinalData?.show_Booking_Appointment ?
                                                    <BookAppointment style={bookingAppointmentButton} onClickHandle={AppointmentRedirect} /> : ""
                                            }

                                            {/* ===== dynamicCommonIcon  is simple navbar for testing ====== */}
                                            <DynamicCommonIcon FullSearch={FullSearch}
                                                favorite={FinalData?.show_wishlist} search={FinalData?.show_Search}
                                                user={FinalData?.show_User_profile} cart={FinalData?.show_shopping_cart}
                                                style={style} IconStyle={FinalData?.otherColor} />
                                        </BookIcon>

                                    </MainHeader>

                                </>

                        }
                    </UserContext.Provider> : ""
            }
            {
                // Auth.isSubdomainLogin()? <button onClick={()=>{navigate("/logout");console.log("hihi")}}>Logout</button>:<button onClick={()=>navigate("/login-signup")}>Login</button>
            }
        </>
    )
}

export default HeaderVariation1
