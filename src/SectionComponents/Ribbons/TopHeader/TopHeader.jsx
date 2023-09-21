import React from "react";
import EmailIcon from "../../../Assets/SectionComponent/Icons/mailIcon.svg";
import CallIcon from "../../../Assets/SectionComponent/Icons/phoneIcon.svg";
import Location from "../../../Assets/SectionComponent/Icons/locationIcon.svg";
import Twitter from "../../../Assets/SectionComponent/Images/Ribbons/Icon/twitter.svg";
import Gmail from "../../../Assets/SectionComponent/Images/Ribbons/Icon/gmail.svg";
import Instagram from "../../../Assets/SectionComponent/Images/Ribbons/Icon/instagram.svg";
import Facebook from "../../../Assets/SectionComponent/Images/Ribbons/Icon/facebook.svg";
import { Icon, InfoIcon, MainContent, Paragraph, MainSection, PersonalInfo, PersonalInfoData, SocialLinks, LeftDivider, IconWrapper, FollowSection } from "./TopHeader.style";
import MultiLanguage from "@/CommonComponents/MultiLanguage/MultiLanguage";
import AnchorElement from "@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { useSelector } from "react-redux";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import { isBrowser } from "@/CommonFunctions/isBrowser";

const TopHeader = ({ children }) => {

    const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data);
    const data = children;
    const styles = {
        section: data.custom_section_editable[0]?.style,
        content: data.custom_section_editable[1]?.style,
        contact: data.custom_section_editable[2]?.style,
        contactLits: data.custom_section_editable[3]?.style,
        NumberparaGraph: data.custom_section_editable[4],
        socialLink: data.custom_section_editable[5]?.style,
        CallIcon: data.custom_section_editable[6]?.style,
        EmailIcon: data.custom_section_editable[7]?.style,
        EmailParaGraph: data.custom_section_editable[8],
        LocationIcon: data.custom_section_editable[9]?.style,
        LocationParaGraph: data.custom_section_editable[10],
        FollowParaGraph: data.custom_section_editable[11],
        TwitterIcon: data.custom_section_editable[12]?.style,
        FacebookIcon: data.custom_section_editable[13]?.style,
        GmailIcon: data.custom_section_editable[14]?.style,
        InstaIcon: data.custom_section_editable[15]?.style,
        LeftDivider: data.custom_section_editable[16]?.style,
        GoogleTranslateWrapper: data.custom_section_editable[17]?.style,
        Option: data.custom_section_editable[18]?.style,
        GoogleLanguageIcon: data.custom_section_editable[19]?.style,
        IconWrapper: data.custom_section_editable[20]?.style,
        FollowSection: data.custom_section_editable[21]?.style,
    }
    let FinalData = data?.data;
    const MultiLanguageColor = FinalData?.Appearance;
    let Numbertext = {
        desktop: {
            ...data.custom_section_editable[4]?.style?.desktop,
            "color": FinalData?.Appearance?.text,
        }
    }
    let Emailtext = {
        desktop: {
            ...data.custom_section_editable[8]?.style?.desktop,
            "color": FinalData?.Appearance?.text,

        }
    }
    let LocationParaGraph = {
        desktop: {
            ...data.custom_section_editable[10]?.style?.desktop,
            "color": FinalData?.Appearance?.text,
        }
    }
    let FollowUs = {
        desktop: {
            ...data.custom_section_editable[11]?.style?.desktop,
            "color": FinalData?.Appearance?.text,
        },
        mobile: {
            ...data.custom_section_editable[11]?.style?.mobile,
        }
    }


    console.log(FinalData, "finaldata");

    return (
        <>
            <MainSection item={styles.section}>
                <MainContent item={styles.content}>
                    {/* ==== personal Info start ======= */}
                    <PersonalInfo item={styles.contact}
                    >
                        {
                            FinalData?.show_phone_number &&
                            <AnchorElement target="_blank" link={`tel:${FinalData?.phone_number}`}>
                                <PersonalInfoData item={styles.contactLits}
                                    itemCall={styles.CallIcon}
                                    itemApperance={FinalData?.Appearance}>
                                    <CallIcon className="callIcon" />
                                    <Text style={Numbertext}
                                        tagType={styles.NumberparaGraph?.tagType}
                                        text={FinalData?.phone_number}
                                    />
                                </PersonalInfoData>
                            </AnchorElement>
                        }
                        {FinalData?.show_email && <AnchorElement target="_blank" link={`mail:${FinalData.email}`}>
                            <PersonalInfoData item={styles.contactLits}
                                itemEmail={styles.EmailIcon}
                                itemApperance={FinalData?.Appearance}>
                                <EmailIcon className={"emailIcon"} />
                                <Text style={Emailtext}
                                    tagType={styles.EmailParaGraph?.tagType}
                                    text={FinalData.email}
                                />
                            </PersonalInfoData>
                        </AnchorElement>}
                        {FinalData?.show_location ?
                            FinalData?.locationUrl ? <AnchorElement target="_blank" link={FinalData?.locationUrl}>
                                <PersonalInfoData item={styles.contactLits}
                                    itemLocation={styles.LocationIcon}
                                    itemApperance={FinalData?.Appearance}>
                                    <Location className="location" />
                                    <Text style={LocationParaGraph}
                                        tagType={styles.LocationParaGraph?.tagType}
                                        text={FinalData.location}
                                    />
                                </PersonalInfoData>
                            </AnchorElement> : <PersonalInfoData item={styles.contactLits}
                                itemLocation={styles.LocationIcon}
                                itemApperance={FinalData?.Appearance}>
                                <Location className="location" />
                                <Text style={LocationParaGraph}
                                    tagType={styles.LocationParaGraph?.tagType}
                                    text={FinalData.location}
                                />
                            </PersonalInfoData> : ""}
                    </PersonalInfo>
                    {/* ==== personal Info end ======= */}

                    {/* ===== social link start ======= */}
                    <SocialLinks item={styles.socialLink}
                        itemTwitter={styles.TwitterIcon}
                        itemFacebook={styles.FacebookIcon}
                        itemGmail={styles.GmailIcon}
                        itemInsta={styles.InstaIcon}
                        itemApperance={FinalData?.Appearance}>

                        {FinalData?.show_followUs && <FollowSection item={styles.FollowSection}>

                            <Text style={FollowUs}
                                tagType={styles.FollowParaGraph?.tagType}
                                text={FinalData.followUs}
                            />
                            {(FinalData.show_twitter || FinalData.show_facebook || FinalData.show_gmail || FinalData.show_instagram) &&
                                <>
                                    <IconWrapper item={styles.IconWrapper} >
                                        {FinalData.show_twitter &&
                                            <AnchorElement link={FinalData.twitter} target="_blank">
                                                <Twitter className="Twitter" />
                                            </AnchorElement>
                                        }
                                        {FinalData.show_facebook &&
                                            <AnchorElement link={FinalData.facebook} target="_blank">
                                                <Facebook className="facebook" />
                                            </AnchorElement>
                                        }
                                        {FinalData.show_gmail &&
                                            <AnchorElement link={FinalData.gmail} target="_blank">
                                                <Gmail className="gmail" />
                                            </AnchorElement>
                                        }
                                        {FinalData.show_instagram &&
                                            <AnchorElement link={FinalData.instagram} target="_blank">
                                                <Instagram className="instagram" />
                                            </AnchorElement>
                                        }
                                    </IconWrapper>
                                </>
                            }
                        </FollowSection>}

                        {FinalData?.show_followUs && FinalData?.Multiple_Currency && <LeftDivider item={styles.LeftDivider} itemMultiLanguageColor={MultiLanguageColor} />}
                        {isBrowser() && window &&
                            window?.innerWidth > 1024 ?
                            FinalData?.Multiple_Currency && <CurrencySelector type="dynamic" /> : ""
                        }

                        {
                            (AppLinkUrl.subdomain() || AppLinkUrl.privateDomain()) ?
                                <>
                                    {FinalData?.Multiple_Language ?
                                        <MultiLanguage type="dynamic" styles={styles} SelectColor={MultiLanguageColor} /> : ""}
                                </>
                                : ""
                        }
                        {/* <CurrencySelector type="dynamic" /> */}

                    </SocialLinks>
                    {/* ===== social link end ======= */}
                </MainContent>
            </MainSection>
            {
                //         {/* ==== personal Info start ======= */}
                //         <PersonalInfo item={styles.contact}>
                //             <PersonalInfoData item={styles.contactLits}>
                //                 <CallIcon />
                //                 <Paragraph item={styles.paraGraph}>+9560625959</Paragraph>
                //             </PersonalInfoData>
                //             <PersonalInfoData item={styles.contactLits}>
                //                 <EmailIcon />
                //                 <Paragraph item={styles.paraGraph}>thebrandneed@gmail.com</Paragraph>
                //             </PersonalInfoData>
                //             <PersonalInfoData item={styles.contactLits}>
                //                 <Location />
                //                 <Paragraph item={styles.paraGraph}>Jeewan Nagar, New Delhi</Paragraph>
                //             </PersonalInfoData>
                //         </PersonalInfo>
                //         {/* ==== personal Info end ======= */}

                //         {/* ===== social link start ======= */}
                //         <SocialLinks item={styles.socialLink}>
                //             <Paragraph item={styles.paraGraph}>Follow us :</Paragraph>
                //             <Twitter />
                //             <Facebook />
                //             <Gmail />
                //             <Instagram />
                //         </SocialLinks>

                //         {/* ===== social link end ======= */}
                //     </MainContent>
                // </MainSection>
            }
        </>
    );
};

export default TopHeader;
