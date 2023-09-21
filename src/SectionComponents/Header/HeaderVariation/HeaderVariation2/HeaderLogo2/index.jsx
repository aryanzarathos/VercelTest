import React from 'react'
import { MainImage, MainLogo, LogoText, MainLogoContainer } from './logo2.style';
// import DefaultLogo from "../../../../Assets/SectionComponent/Images/Header/logo.png";
import DefaultLogo from "../../../../../Assets/SectionComponent/Images/Header/logo.png";
// import Image from 'next/image';
// import Link from 'next/link';
import { useContext } from 'react';
import AchorElement from '../../../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import Text from '../../../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { UserContext2 } from '..';

const HeaderLogo2 = ({ logoData }) => {
    const data = useContext(UserContext2);
    let styles = {
        MainLogoContainer: data?.custom_section_editable[1]?.style,
        MainLogo: data?.custom_section_editable[2]?.style,
        MainImage: data?.custom_section_editable[3]?.style,
        sitelogo: data?.custom_section_editable[4]?.style,
        LogoText: data?.custom_section_editable[5]?.style

    }
    const logoTemp = {
        src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5938&q=80 5938w"
    }

    let LogoText = {
        desktop: {
            ...data.custom_section_editable[5].style.desktop,
            "color": logoData?.color,
            "fontSize": logoData?.font_size,
            "fontFamily": logoData?.font_family,
            "fontWeight": logoData?.font_weight
        }
    }
    // console.log(LogoText, "LogoText")
    return (
        <MainLogoContainer item={styles?.MainLogoContainer}>
            {/* <Link href={""}> */}
            <AchorElement link={"/"} style={""} >

                <MainLogo item={styles?.MainLogo}>
                    {
                        logoData.show_site_logo &&
                        <MainImage item={styles?.MainImage} itemApperance={logoData}>
                            <ImageElement src={logoData?.logo ? logoData?.logo : logoTemp} defaultImage={DefaultLogo}
                                alt='logo' style={styles?.sitelogo} />
                        </MainImage>
                    }
                    {
                        logoData.show_site_name &&
                        <Text tagType={"p"} style={LogoText} text={logoData.site_name} />
                    }
                    {/* <LogoText item={styles?.img}> */}
                    {/* </LogoText> */}
                </MainLogo>
            </AchorElement>
            {/* </Link> */}
        </MainLogoContainer>
        // <Logo />

    )
}

export default HeaderLogo2
