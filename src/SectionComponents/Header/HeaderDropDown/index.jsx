import React, { useContext } from 'react'
import { useState } from 'react';
import { MainHeaderDropdown, MenuDropDownIcon, MenuDropDownList, MenuHeading, MenuSubDropDown, MenuSubHeader, SubLink, SubSubLink, SubSubLinkSection } from './dropDown.style';
import Link from 'next/link';
import DownArrowIcon from "../../../Assets/SectionComponent/Icons/arrowSvg.svg"
import { UserContext } from '../HeaderVariation/HeaderVariation1';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
// import { ButtonElement } from '../../../SectionsLayout/Elements/ButtonElement/ButtonStyle';

const HeaderDropDown = ({ dorpDownData, dropDownStyle }) => {
  const styles = useContext(UserContext)
  const navigate = useAppNavigate()
  const [expand, setExpand] = useState("");
  const [subItemExpand, setSubItemExpand] = useState("");
  const HandleChange = (index) => {

    setExpand(expand === index ? "" : index)
  }

  const SubCategoryHandleChange = (index) => {

    setSubItemExpand(subItemExpand === index ? "" : index)
  }
  let style = {
    MainHeaderDropdown: styles?.custom_section_editable[29].style,
    MenuSubDropDown: styles?.custom_section_editable[30].style,
    MenuSubHeader: styles?.custom_section_editable[31].style,
    CategoryHeadingButton: styles?.custom_section_editable[32].style,
    CategoryDropDownButton: styles?.custom_section_editable[33].style,
    DownArrowIcon: styles?.custom_section_editable[34].style,
    MenuDropDownList: styles?.custom_section_editable[35].style,
    SubLink: styles?.custom_section_editable[36].style,
    SubLinkBtn: styles?.custom_section_editable[37].style,
    SubLinkDownIcon: styles?.custom_section_editable[38].style,
    SubSubLinkSection: styles?.custom_section_editable[39].style,
    SubSubLinkSectionBtn: styles?.custom_section_editable[40].style,
  }
  // console.log(dropDownStyle, "dropDownStyle")
  const RedirectPage = (slug, prefix, pageData) => {
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
  let CategoryHeadingButton = {
    desktop: {
      ...styles?.custom_section_editable[32].style?.desktop,
      "color": dropDownStyle?.Normal_Text_Color,
      "backgroundColor": dropDownStyle?.Normal_Background_Color,
      hover: {
        ...styles?.custom_section_editable[32].style?.desktop?.hover,
        "color": dropDownStyle?.Hover_Text_Color,
        "backgroundColor": dropDownStyle?.Hover_Background_Color,
      },
      active: {
        ...styles?.custom_section_editable[32].style?.desktop?.active,
        "color": dropDownStyle?.Active_Text_Color,
        "backgroundColor": dropDownStyle?.Active_Background_Color,
      }
    }
  }
  let SubLinkBtn = {
    desktop: {
      ...styles?.custom_section_editable[37].style?.desktop,
      "color": dropDownStyle?.Normal_Text_Color,
      "backgroundColor": dropDownStyle?.Normal_Background_Color,
      hover: {
        ...styles?.custom_section_editable[37].style?.desktop?.hover,
        "color": dropDownStyle?.Hover_Text_Color,
        "backgroundColor": dropDownStyle?.Hover_Background_Color,
      },
      active: {
        ...styles?.custom_section_editable[37].style?.desktop?.active,
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
  console.log(SubLinkBtn, "SubSubLinkSectionBtn")
  return (
    <MainHeaderDropdown className='active' item={style?.MainHeaderDropdown}>
      {
        dorpDownData?.map((value) => {
          return (
            <>
              <MenuSubDropDown key={value?._id} item={style?.MenuSubDropDown}>
                <MenuSubHeader item={style?.MenuSubHeader} itemDropDownIcon={style?.DownArrowIcon}>
                  <Button text={value?.page?.page_name} style={CategoryHeadingButton} onClick={() => RedirectPage(value?.page.page_slug, value?.page.prefix)} />
                  {
                    value.data && value.data.length > 0 &&
                    <Button style={style.CategoryDropDownButton}
                      onClick={() => HandleChange(value._id)} >
                      <DownArrowIcon />
                    </Button>
                  }
                </MenuSubHeader>
                {
                  expand == value._id &&
                  <MenuDropDownList item={style?.MenuDropDownList}>
                    {
                      value.data.map((item, subkey) => {
                        return (
                          <>
                            <SubLink key={subkey} item={style?.SubLink}
                              itemSubLinkDownIcon={style?.SubLinkDownIcon}>
                              <Button text={item?.page?.page_name} style={SubLinkBtn} onClick={() => RedirectPage(item?.page?.page_slug, item?.page?.prefix)} />
                              {
                                item.data && item.data.length > 0 &&
                                <Button style={style?.CategoryDropDownButton}
                                  onClick={() => SubCategoryHandleChange(item._id)}>
                                  <DownArrowIcon />

                                </Button>
                              }
                            </SubLink>
                            {
                              (subItemExpand == item._id) && item.data && item.data.length > 0 && item.data.map((subItem, subSubKey) => (
                                <>
                                  <SubSubLinkSection item={style?.SubSubLinkSection} subSubKey={subSubKey}>
                                    <Button text={subItem?.page?.page_name} style={SubSubLinkSectionBtn}
                                      onClick={() => RedirectPage(subItem?.page?.page_slug, subItem?.page?.prefix)} />
                                  </SubSubLinkSection>
                                </>
                              ))
                            }
                          </>
                        )
                      })
                    }

                  </MenuDropDownList>
                }
                {/* <MenuDropDownList className={`${change ? "change" : ""}`}>
                  <SubLink href="#">
                    Aqualens
                  </SubLink>
                  <SubLink href="#">
                    Aqualens
                  </SubLink>
                  <SubLink href="#">
                    Aqualens
                  </SubLink>
                </MenuDropDownList> */}

              </MenuSubDropDown>

            </>
          )
        })
      }



    </MainHeaderDropdown>

  )
}

export default HeaderDropDown
