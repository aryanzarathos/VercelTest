import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import headerMenuList from "./headerMenu.json";
import IntersectionObserverWrap from "../../../../../../Common/OverflowMenu/intersection-observer-wrapper";
const HeaderMenuList = ({ preview }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  }; 
  const { pathname } = useLocation()
 
  return (
    <React.Fragment>
    <IntersectionObserverWrap LongMenuWrapProp="LongMenuWrapProp">
     {headerMenuList.map((headerMenuList, index) => {
            return (
              <NavLink key={index} data-targetid={index} onClick={() => handleOnClick(index)} to={headerMenuList.menuLink} className={headerMenuList.path === pathname ? "active" : ""}>
              {headerMenuList.menuName}
              </NavLink>
            )
          })}
          </IntersectionObserverWrap>
    </React.Fragment >
  )
}
export default HeaderMenuList