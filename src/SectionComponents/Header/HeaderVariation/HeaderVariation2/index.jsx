import React, { useEffect, useState } from 'react'
// import CommonIcon from '../CommonComponentHeader/CommonIcon'
// import DynamicNavBar from '../CommonComponentHeader/NavBar/DynamicNavBar'
// import DynamicCommonIcon from '../CommonComponentHeader/CommonIcon/DynamicCommonIcon'
import { createContext } from 'react'
import useAppNavigate from '@/CustomHooks/useAppNavigate'
import HeaderLogo2 from './HeaderLogo2'
import { BookIcon, MainHeader } from './headerVariation2.style'
import NavBar2 from './NavBarVariation2'
import DynamicCommonIcon2 from './DynamicCommonIcon2'
import useWindowDimensions from '@/SectionCommon/WindowSize/widnowSize'
import FullSearchBar2 from './FullSearchBar2'
import BookAppointment2 from './BookAppointment'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import Auth from '@/Classes/Auth'


export const UserContext2 = createContext();

const HeaderVariation2 = ({ children }) => {
    const dataa = children;

    const styles = dataa?.custom_section_editable[0]
    const { width } = useWindowDimensions();
    let style = {
        UserDropDown: dataa?.custom_section_editable[49].style,
        ShowDropDown: dataa?.custom_section_editable[50].style,
        UserDropDownList: dataa?.custom_section_editable[51].style,
        UserListItem: dataa?.custom_section_editable[52].style,
        UserListItemLink: dataa?.custom_section_editable[53].style,
        WelcomeHeading: dataa?.custom_section_editable[54],
        WelcomeText: dataa?.custom_section_editable[55],
        WelcomeBtn: dataa?.custom_section_editable[56],
        AllIcons: dataa?.custom_section_editable[12]?.style,
        IconButton: dataa?.custom_section_editable[13]?.style,
        SearchOutIcon: dataa.custom_section_editable[15]?.style,
        FavoriteIcon: dataa?.custom_section_editable[14]?.style,
        UserIcon: dataa?.custom_section_editable[16]?.style,
        CartSection: dataa?.custom_section_editable[19]?.style,
        CartNumber: dataa.custom_section_editable[18]?.style,
        CartIcon: dataa?.custom_section_editable[17]?.style,
        MainSearchBar: dataa?.custom_section_editable[57]?.style,
        SearchIcon: dataa?.custom_section_editable[58]?.style,
        SearchForm: dataa?.custom_section_editable[59]?.style,
        SearchInput: dataa?.custom_section_editable[60]?.style,
        CloseBtn: dataa?.custom_section_editable[61]?.style,
        CloseIcon: dataa?.custom_section_editable[62]?.style,
        BookIcon: dataa?.custom_section_editable[64]?.style,
        BookAppointment: dataa?.custom_section_editable[65],
    }
    let NavigationData = dataa?.data?.data[0]
    let FinalData = dataa?.data?.mainHeader
    const [searchBar, setSearchBar] = useState(false)
    const FullSearch = () => {
        setSearchBar(!searchBar)
    }
    // console.log(FinalData, "milakuch")
    const navigate = useAppNavigate();
    const [scrollY, setScrollY] = useState(0);

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
        ...dataa?.custom_section_editable[65],
        text: FinalData?.booking_appointment?.text,
        styles: {
            ...dataa?.custom_section_editable[65]?.style,
            desktop: {
                ...dataa?.custom_section_editable[65]?.style?.desktop,
                "color": FinalData?.booking_appointment?.Normal_Text_Color,
                "backgroundColor":FinalData?.booking_appointment?.Normal_Button_Color,
                hover: {
                    ...dataa?.custom_section_editable[65]?.style?.desktop?.hover,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor":  FinalData?.booking_appointment?.Hover_Button_Color
                },
                active: {
                    ...dataa?.custom_section_editable[65]?.style?.desktop?.hover?.active,
                    "color": FinalData?.booking_appointment?.Hover_Text_Color,
                    "backgroundColor": FinalData?.booking_appointment?.Hover_Button_Color,
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

    return (
        <>
            {
                width > 1024 ?
                    <UserContext2.Provider value={dataa}>
                        {
                            searchBar ? <FullSearchBar2 FullSearch={FullSearch} style={style}
                                searchStyle={FinalData?.otherColor} /> :
                                <MainHeader item={styles} className={scrollY ? "sticky" : ""}>
                                    {
                                        FinalData?.logoAndSiteName?.show_site_logo || FinalData?.logoAndSiteName?.show_site_name ? (
                                            <HeaderLogo2 logoData={FinalData?.logoAndSiteName} />
                                        ) : (
                                            ""
                                        )
                                    }
                                    {
                                            FinalData?.navigation_menu?.hide_navigation ? "" :
                                    <NavBar2 NavigationData={NavigationData} NavStyle={FinalData} className={"centeredNav"} />}
                                    {/* ===== dynamic navbar is simple navbar for testing ====== */}
                                    {/* <DynamicNavBar /> */}
                                    {/* {
                                        FinalData?.show_Search &&
                                        <SearchBar className={"ml-auto"} searchStyle={FinalData?.otherColor} />
                                    } */}

                                    {/* <CommonIcon favorite={true} content={data} search={false} user={true} cart={true} /> */}

                                    <BookIcon item={style?.BookIcon}>
                                        {
                                            FinalData?.show_Booking_Appointment ?
                                                <BookAppointment2 style={bookingAppointmentButton} onClickHandle={AppointmentRedirect} /> : ""
                                        }

                                        {/* ===== dynamicCommonIcon  is simple navbar for testing ====== */}
                                        <DynamicCommonIcon2 FullSearch={FullSearch}
                                            favorite={FinalData?.show_wishlist} search={FinalData?.show_Search}
                                            user={FinalData?.show_User_profile} cart={FinalData?.show_shopping_cart}
                                            style={style} IconStyle={FinalData?.otherColor} />
                                    </BookIcon>
                                    {/* ===== dynamicCommonIcon  is simple navbar for testing ====== */}


                                </MainHeader>
                        }
                    </UserContext2.Provider> : ""
            }
            {
                // Auth.isSubdomainLogin()? <button onClick={()=>{navigate("/logout");console.log("hihi")}}>Logout</button>:<button onClick={()=>navigate("/login-signup")}>Login</button>
            }
        </>
    )
}

export default HeaderVariation2
