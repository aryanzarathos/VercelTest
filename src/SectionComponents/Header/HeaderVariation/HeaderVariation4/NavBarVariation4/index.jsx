import React, { useContext, useRef } from 'react'
import { MenuList, MenuListItem, MenuListItemInside, MenuListSubItem, Navbar } from './nav4.style'
import { useState } from 'react'
import MainMenuDropDown from "../../../../../Assets/SectionComponent/Icons/arrowSvg.svg";
import Button from "../../../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { UserContext4 } from '..';
import HeaderDropDown4 from '../HeaderDropDown4';
import MoreDropDown4 from '../MoreDropDown4/MoreDropDown4';
import { useDetectOutsideClick } from '@/CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { useRouter } from 'next/router';
import ValidationFile from '@/Classes/ValidationFile';
const NavBar4 = ({ NavigationData, NavStyle, className }) => {

  const styles = useContext(UserContext4)
  const ref = useRef(null);
  const navigate = useAppNavigate()
  const router = useRouter();
  const findLastIndex = router.asPath;
  const routeQuery = findLastIndex.split('/');
  const pathname = routeQuery[routeQuery.length - 1];
  // const [more, setMore] = useState(false)
  const [more, setMore] = useDetectOutsideClick(ref, false);

  let style = {
    Navbar: styles?.custom_section_editable[21]?.style,
    Navlist: styles?.custom_section_editable[22]?.style,
    MenuListItem: styles?.custom_section_editable[23]?.style,
    MenuListItemInside: styles?.custom_section_editable[24]?.style,
    MenuListItemInsideLink: styles?.custom_section_editable[25]?.style,
    MainMenuDropDown: styles?.custom_section_editable[26]?.style,
    MoreButton: styles?.custom_section_editable[27]?.style,
    MenuListItemActive: styles?.custom_section_editable[28]?.style,
  }
  const RedirectTo = (slug, prefix, pageData) => {
    if (pageData?.page_type === "custom") {
      if (ValidationFile.validWebsiteLink(pageData?.customUrl)) {
        window.open(pageData?.customUrl ? pageData?.customUrl?.includes("https://") ? pageData?.customUrl : `https://${pageData?.customUrl}` : "", "_blank");
      }
    }
    else {
      if (prefix === "collection") {
        navigate(`/collection/${slug}`);
      } else if (
        prefix === "category" ||
        prefix === "subcategory" ||
        prefix === "subsubcategory"
      ) {
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
      } else {
        navigate(`/${slug}`);
      }
    }
  };

  let NavItem = {
    desktop: {
      ...styles?.custom_section_editable[25]?.style?.desktop,
      "color": NavStyle?.navigation_menu?.navigationTypography?.Normal_Text_Color,
      hover: {
        ...styles?.custom_section_editable[25]?.style?.desktop?.hover,
        "color": NavStyle?.navigation_menu?.navigationTypography?.Hover_Text_Color
      },
      active: {
        ...styles?.custom_section_editable[25]?.style?.desktop?.active,
        "color": NavStyle?.navigation_menu?.navigationTypography?.Active_Text_Color
      }
    }
  }
  let dropDownIcon = {
    desktop: {
      ...styles?.custom_section_editable[26]?.style?.desktop,
      "fill": NavStyle?.navigation_menu?.navigationTypography?.Normal_Text_Color,
      hover: {
        ...styles?.custom_section_editable[26]?.style?.desktop?.hover,
        "fill": NavStyle?.navigation_menu?.navigationTypography?.Hover_Text_Color
      },
      active: {
        ...styles?.custom_section_editable[26]?.style?.desktop?.active,
        "fill": NavStyle?.navigation_menu?.navigationTypography?.Active_Text_Color
      }

    }
  }
  let MoreBtn = {
    desktop: {
      ...styles?.custom_section_editable[27]?.style?.desktop,
      "color": NavStyle?.navigation_menu?.navigationTypography?.Normal_Text_Color,
      hover: {
        ...styles?.custom_section_editable[27]?.style?.desktop?.hover,
        "color": NavStyle?.navigation_menu?.navigationTypography?.Hover_Text_Color
      },
      active: {
        ...styles?.custom_section_editable[27]?.style?.desktop?.active,
        "color": NavStyle?.navigation_menu?.navigationTypography?.Active_Text_Color
      }
    }
  }
  return (
    <Navbar item={style.Navbar} className={className}>
      <MenuList item={style.Navlist}>
        {
          NavigationData && NavigationData?.data && NavigationData.data.length > 0 ?
            (
              <>
                {
                  NavigationData?.data?.map((value, index) => {

                    return (
                      <React.Fragment key={index}>
                        {value?.page?.isHide === true ? "" :
                          <MenuListItem key={value._id} item={style?.MenuListItem} itemActive={style?.MenuListItemActive}>
                            <MenuListItemInside item={style?.MenuListItemInside}
                              itemDropDown={dropDownIcon}
                            >
                              <Button onClick={() => RedirectTo(value?.page?.page_slug, value?.page?.prefix, value?.page)}
                                style={NavItem}
                                className={`${value?.page?.page_slug === pathname || (findLastIndex === '/' && value?.page?.page_type === 'home') ? 'active' : ''}`}
                              >
                                {value?.page?.page_name}

                                {
                                  value.data && value.data.length > 0 ? <MainMenuDropDown /> : ""
                                }
                              </Button>
                            </MenuListItemInside>
                            {
                              value.data && value.data.length > 0 ? (
                                <HeaderDropDown4 dorpDownData={value.data} dropDownStyle={NavStyle?.navigation_menu?.navigationDropDownTypography} />
                              ) : ("")
                            }

                          </MenuListItem>
                        }
                      </React.Fragment>
                    )
                  })
                }
              </>

            ) : ("")

        }
        {/* {
          NavigationData && NavigationData?.data && NavigationData.data.length > 0 && NavigationData.data.slice(3).length ? (
            <>
              <MenuListItem item={style?.MenuListItem} ref={ref}>
                <MenuListItemInside item={style?.MenuListItemInside} onClick={() => setMore(!more)}>

                  <Button text={styles?.custom_section_editable[27].text} style={MoreBtn} />
                </MenuListItemInside>
                {
                  more && <MoreDropDown4 DropDownData={NavigationData.data.slice(3)}
                    dropDownStyle={NavStyle?.navigation_menu?.navigationDropDownTypography} />
                }


              </MenuListItem>
            </>
          ) : (
            ""
          )
        } */}

      </MenuList>
    </Navbar>
  )
}

export default NavBar4
