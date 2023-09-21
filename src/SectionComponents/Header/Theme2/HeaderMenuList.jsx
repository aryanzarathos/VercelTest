import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import headerMenuList from "./headerMenu.json";
import { NavbarList, CategoryList, MoreDropDown, MoreDropList, ArrowIcon, Button } from './Header.styled'
// import IntersectionObserverWrap from "../../../Common/OverflowMenu/intersection-observer-wrapper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectRouteForPreview } from "../../../store/actions/ecommerceWebsiteTemplate";
import Dropdown from "./Dropdown";
// import useEcomHeader from "../../../CustomHooks/EcomHeader/useEcomHeader";
import { useRef } from "react";
import { useEffect } from "react";
import ShopDropdown from "./ShopDropdown";
const HeaderMenuList = ({ preview, CategoryData, getCategorySuccess }) => {
  let refDrop = useRef(null);
  const [activeIndex, setActiveIndex] = useState(false);
  const dispatch = useDispatch()
  const { dynamicHeaderData } = useSelector((state) => state.ecommerceTemplate.getTemplate.data)
  const { subheadersData } = useSelector((state) => state.ecommerceTemplate.getTemplate.data)
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  const { pathname } = useLocation()
  const handleSelectPage = (item, index) => {
    dispatch(selectRouteForPreview(item, true))
    handleOnClick(index)
  }



  const [dropdown, setDropdown] = useState(false)
  const [shopDropdown, setShopDropdown] = useState(false)
  const [MoreDropdown, setMoreDropdown] = useState(false)
  const [hoverId, setHoverId] = useState("")
  const [moreHoverId, setMoreHoverId] = useState("")
  const [MoreCategory, setMoreCategory] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && shopDropdown && MoreDropdown && MoreCategory && refDrop.current && !refDrop.current.contains(e.target)) {
        setDropdown(false)
        setMoreDropdown(false)
        setShopDropdown(false)
        setMoreCategory(false)
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [setDropdown])

  const MouseEnter = (id) => {
    setDropdown(true)
    setMoreDropdown(true)
    setShopDropdown(true)
    setMoreCategory(true)
    setHoverId(id)
    setMoreHoverId(id)
  }
  const MouseLeave = () => {
    setDropdown(false)
    setMoreDropdown(false)
    setShopDropdown(false)
    setMoreCategory(false)
    setHoverId("")
    setMoreHoverId("")
  }
  const CloseDropdown = () => {
    dropdown && setDropdown(false)
    MoreDropdown && setMoreDropdown(false)
    shopDropdown && setShopDropdown(false)
    MoreCategory && setMoreCategory(false)
  }

  const ShowMoreButton = getCategorySuccess && CategoryData?.data && CategoryData?.data.filter((item) => item.show_on_header === true).slice(2);


  return (
    <React.Fragment>
      {
        preview ?
          (dynamicHeaderData && dynamicHeaderData.dynamic_header && dynamicHeaderData.dynamic_header.length > 0 && dynamicHeaderData.dynamic_header.filter((item) => item.showOnHeader === true).map((headerMenuList, index) => {
            return (
              <button key={index} data-targetid={index} onClick={() => handleSelectPage(headerMenuList.path, index)} className={activeIndex === index ? "active" : ""}>
                {(subheadersData && subheadersData[headerMenuList.titleKey]) || headerMenuList.title}
              </button>
            )
          })) :
          <NavbarList>
            {dynamicHeaderData && dynamicHeaderData.dynamic_header && dynamicHeaderData.dynamic_header.length > 0 && dynamicHeaderData.dynamic_header.filter((item) => item.showOnHeader === true).map((headerMenuList, index) => {
              return (
                <CategoryList onMouseEnter={headerMenuList.path === "/products" && hoverId === "Shop" ? null : MouseLeave} key={index} ref={headerMenuList.path === "/products" ? refDrop : null}>
                  <NavLink exact={true} key={index} data-targetid={index} to={headerMenuList.path} onClick={() => handleOnClick(index)} className={pathname === headerMenuList.path && "active"} style={{ position: 'relative' }} onMouseEnter={() => MouseEnter(headerMenuList.path === "/products" ? "Shop" : null)}>
                    {(subheadersData && subheadersData[headerMenuList.titleKey]) || headerMenuList.title}
                  </NavLink>
                  {
                    hoverId === "Shop" && headerMenuList.path === "/products" ? (
                      <>
                        <ShopDropdown
                          refDrop={refDrop}
                          MouseLeave={MouseLeave}
                          hoverId={headerMenuList.path === "/products"}
                          headerMenuList={headerMenuList}
                          Successdata={getCategorySuccess}
                          AllCategoryData={CategoryData?.data}
                          dropdown={MoreCategory}
                        />
                        {/* {
                          getCategorySuccess && CategoryData?.data && CategoryData?.data.length > 0 && CategoryData?.data.map((item) => {
                            //// console.log(item,"item?.show_on_header")
                            return (
                              item?.show_on_header === false ?
                                 : ""
                            )
                          }
                          )} */}
                      </>
                    ) : ""
                  }
                </CategoryList>
              );
            })}
            {getCategorySuccess && CategoryData?.data && CategoryData?.data.filter((item) => item.show_on_header === true).slice(0, 2).map((Categoryitem, key) => {
              return (
                <CategoryList key={key}>
                  <NavLink to={Categoryitem.slug} onMouseEnter={() => MouseEnter(Categoryitem?._id)} onClick={() => handleOnClick(key)} className={pathname === Categoryitem.slug && "active"}>
                    {Categoryitem.categoryName}
                  </NavLink>
                  {
                    Categoryitem.subcategories.length > 0 ? (
                      <Dropdown
                        refDrop={refDrop}
                        // dropdownPosition="Right"
                        MouseLeave={MouseLeave}
                        hoverId={moreHoverId}
                        dropdown={dropdown}
                        Successdata={getCategorySuccess}
                        Categoryitem={Categoryitem}
                      />
                    ) : ""
                  }
                </CategoryList>
              )
            })}
            <CategoryList>
              {
                ShowMoreButton && ShowMoreButton.length > 0 ? (
                  <button
                    ref={refDrop}
                    onMouseEnter={() => MouseEnter("MoreOptionvisible")}
                    onClick={CloseDropdown}
                  >More</button>
                ) : ""
              }

              {
                ShowMoreButton && ShowMoreButton.length > 0 ? (
                  <MoreDropDown onMouseLeave={MouseLeave} ref={refDrop} className={`${MoreDropdown && hoverId === "MoreOptionvisible" ? "MoreOptionvisible" : "MoreInvisible"}`}>
                    {
                      getCategorySuccess ? (
                        ShowMoreButton.map((Categoryitem) => (
                          <>
                          <MoreDropList key={Categoryitem._id}>
                            <h5
                              ref={refDrop}
                              onClick={() => setMoreHoverId(Categoryitem._id)}
                            >
                              {Categoryitem?.categoryName}
                              <ArrowIcon></ArrowIcon>
                            </h5>
                          </MoreDropList>
                            {
                              Categoryitem?.subcategories.length > 0 ? (
                                <Dropdown
                                  refDrop={refDrop}
                                  dropdownPosition="Right"
                                  MouseLeave={MouseLeave}
                                  dropdown={MoreCategory}
                                  hoverId={moreHoverId}
                                  Successdata={getCategorySuccess}
                                  Categoryitem={Categoryitem}
                                  MouseEnter={MouseEnter}
                                />
                              ) : ""
                            }
                          </>
                        ))
                      ) : ("")
                    }
                  </MoreDropDown>

                ) : ""

              }
              {/* <NavLink to={Categoryitem.slug} onMouseEnter={() => MouseEnter(Categoryitem?._id)} onClick={() => handleOnClick(key)} className={pathname === Categoryitem.slug && "active"}>
                    {Categoryitem.categoryName}
                  </NavLink>
                  {
                    Categoryitem.subcategories.length > 0 ? (
                      <Dropdown
                        refDrop={refDrop}
                        // dropdownPosition="Right"
                        MouseLeave={MouseLeave}
                        hoverId={moreHoverId}
                        dropdown={dropdown}
                        Successdata={getCategorySuccess}
                        Categoryitem={Categoryitem}
                      />
                    ) : ""
                  } */}
            </CategoryList>
          </NavbarList>
      }

    </React.Fragment>
  )
}
export default HeaderMenuList