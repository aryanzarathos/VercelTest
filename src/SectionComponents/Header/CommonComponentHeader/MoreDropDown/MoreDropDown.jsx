import React, { useContext } from 'react'
import { MoreContainer, MoreList, MoreListItem, MoreSubLink, MoreSubLinkSection, MoreSubListItem } from './MoreDropDown.style'
import MoreRightArrow from "../../../../Assets/SectionComponent/Icons/moreRightArrow.svg";
import MoreLeftArrow from "../../../../Assets/SectionComponent/Icons/LeftArrowIcon.svg";
import DownArrowIcon from "../../../../Assets/SectionComponent/Icons/DownArrowIcon.svg";
import Link from 'next/link'
import { useState } from 'react'
import { SubSubLink, SubSubLinkSection } from '../../HeaderDropDown/dropDown.style';
import { UserContext } from '../../HeaderVariation/HeaderVariation1';
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import HeaderDropDown from '../../HeaderDropDown';
// import { useDetectOutsideClick } from '../../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { useRouter } from 'next/router';
import ValidationFile from '@/Classes/ValidationFile';
const MoreDropDown = ({ DropDownData, dropDownStyle }) => {
    const styles = useContext(UserContext)
    const navigate = useAppNavigate();
    const [selecetedList, setSelectedItem] = useState("");
    const [subItemExpand, setSubItemExpand] = useState("");
    const [dropDownData, setDropDownData] = useState({});
    const router = useRouter();
    const findLastIndex = router.asPath;
    const routeQuery = findLastIndex.split('/');
    const pathname = routeQuery[routeQuery.length - 1];
    const arrowHandle = (val) => {
        setSelectedItem(val)
    }
    const SubCategoryHandleChange = (index) => {
        setSubItemExpand(subItemExpand === index ? "" : index)
    }
    let style = {
        SubSubLinkSection: styles?.custom_section_editable[39].style,
        SubSubLinkSectionBtn: styles?.custom_section_editable[40].style,
        MoreContainer: styles?.custom_section_editable[41].style,
        MoreList: styles?.custom_section_editable[42].style,
        MoreSubListItem: styles?.custom_section_editable[43].style,
        MoreSubListItemBorder: styles?.custom_section_editable[44].style,
        MoreSubListItemBtn: styles?.custom_section_editable[45].style,
        LeftIcon: styles?.custom_section_editable[46].style,
        MoreListItem: styles?.custom_section_editable[47].style,
        DownIcon: styles?.custom_section_editable[48].style,


    }

    const OpenMoreInnerDropDown = (item) => {
        setDropDownData(item);
        setSelectedItem("1")
    }

    const RedirectTo = (slug, prefix, pageData) => {
        if (pageData?.page_type === "custom") {
            if (ValidationFile.validWebsiteLink(pageData?.customUrl)) {
                window.open(pageData?.customUrl ? pageData?.customUrl?.includes("https://") ? pageData?.customUrl : `https://${pageData?.customUrl}` : "", "_blank");
            }
        }
        else {
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

    let MoreSubListItemBtn = {
        desktop: {
            ...styles?.custom_section_editable[45].style?.desktop,
            "color": dropDownStyle?.Normal_Text_Color,
            "backgroundColor": dropDownStyle?.Normal_Background_Color,
            hover: {
                ...styles?.custom_section_editable[45].style?.desktop?.hover,
                "color": dropDownStyle?.Hover_Text_Color,
                "backgroundColor": dropDownStyle?.Hover_Background_Color,
            },
            active: {
                ...styles?.custom_section_editable[45].style?.desktop?.active,
                "color": dropDownStyle?.Active_Text_Color,
                "backgroundColor": dropDownStyle?.Active_Background_Color,
            }
        }
    }
    let SubSubLinkSectionBtn = {
        desktop: {
            ...styles?.custom_section_editable[40].style?.desktop,
            "color": dropDownStyle?.Normal_Text_Color,
            "backgroundColor": dropDownStyle?.Normal_Background_Color,
            hover: {
                ...styles?.custom_section_editable[40].style?.desktop?.hover,
                "color": dropDownStyle?.Hover_Text_Color,
                "backgroundColor": dropDownStyle?.Hover_Background_Color,
            },
            active: {
                ...styles?.custom_section_editable[40].style?.desktop?.active,
                "color": dropDownStyle?.Active_Text_Color,
                "backgroundColor": dropDownStyle?.Active_Background_Color,
            }
        }
    }

    return (
        <>
            <MoreContainer item={style.MoreContainer}>
                {
                    selecetedList === "1" ? (
                        <MoreList item={style?.MoreList}>
                            <MoreSubListItem className='border' item={style?.MoreSubListItem}
                                itemBorder={style?.MoreSubListItemBorder}
                                itemLeftIcon={style?.LeftIcon}>
                                <Button onClick={() => arrowHandle("")} style={MoreSubListItemBtn}>
                                    <MoreLeftArrow />
                                </Button>
                                <Button onClick={() => RedirectTo(
                                    dropDownData?.page?.page_slug,
                                    dropDownData?.page?.prefix,
                                    dropDownData?.page
                                )}
                                    style={MoreSubListItemBtn}
                                    className={item?.page?.page_slug === pathname ? 'active' : ''}
                                >
                                    {dropDownData?.page?.page_name}
                                </Button>
                            </MoreSubListItem >
                            {dropDownData.data && dropDownData.data.length > 0 ? (
                                <>
                                    {dropDownData.data.map((item, key) => {
                                        return (
                                            <MoreListItem key={key} item={style?.MoreListItem} itemDownSvg={style?.DownIcon}>
                                                <Button onClick={() => RedirectTo(
                                                    item?.page?.page_slug,
                                                    item?.page?.prefix,
                                                    item?.page
                                                )}
                                                    style={MoreSubListItemBtn}
                                                    className={item?.page?.page_slug === pathname ? 'active' : ''}
                                                >
                                                    {item?.page?.page_name}
                                                </Button>
                                                {item?.data && item?.data?.length > 0 ? (
                                                    <Button style={MoreSubListItemBtn} onClick={() => SubCategoryHandleChange(item._id)}>
                                                        <DownArrowIcon />
                                                    </Button>
                                                ) : (
                                                    ""
                                                )}
                                                {
                                                    (subItemExpand === item._id) && item.data && item.data.length > 0 && item.data.map((subItem, subSubKey) => (
                                                        <>
                                                            <SubSubLinkSection item={style?.SubSubLinkSection} subSubKey={subSubKey}>
                                                                <Button text={subItem?.page.page_name} style={SubSubLinkSectionBtn}
                                                                    onClick={() => RedirectTo(
                                                                        subItem?.page?.page_slug,
                                                                        subItem?.page?.prefix,
                                                                        subItem?.page
                                                                    )}
                                                                    className={item?.page?.page_slug === pathname ? 'active' : ''}
                                                                />
                                                            </SubSubLinkSection>
                                                        </>
                                                    ))
                                                }
                                            </MoreListItem>
                                        )
                                    })
                                    }
                                </>
                            ) : (
                                ""
                            )}

                        </MoreList>
                    ) : (
                        <MoreList item={style?.MoreList}>
                            {DropDownData && DropDownData.length > 0 ? (
                                <>
                                    {
                                        DropDownData.map((item, key) => {
                                            return (
                                                <MoreListItem key={key} item={style?.MoreListItem} itemDownSvg={style?.DownIcon}>
                                                    <Button
                                                        onClick={() => RedirectTo(item?.page?.page_slug, item?.page?.prefix, item.page)}
                                                        style={MoreSubListItemBtn}
                                                        className={item?.page?.page_slug === pathname ? 'active' : ''}
                                                    >
                                                        {item?.page?.page_name}
                                                    </Button>
                                                    {
                                                        item?.data && item.data.length > 0 ? (
                                                            <Button onClick={() => OpenMoreInnerDropDown(item)} style={MoreSubListItemBtn}>
                                                                <MoreRightArrow />
                                                            </Button>
                                                        ) : (
                                                            ""
                                                        )
                                                    }
                                                </MoreListItem >
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                ""
                            )}

                        </MoreList >
                    )
                }

            </MoreContainer>

        </>
    )
}

export default MoreDropDown
