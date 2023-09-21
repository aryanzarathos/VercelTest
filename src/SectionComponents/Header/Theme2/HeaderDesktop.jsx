import { StyledHeader,HumBurgar,HumLine,SlidenavOverlay, Nav, NavAuthListItem, NavAuthList, LogoWrapper, NavAuthWrapper, NavMenuWrapper } from './Header.styled'
import { Container } from '../../CommonComponent/Container.styled'
import { useState, useEffect } from "react";
import logo from "../../assets/Images/Header/Theme2/logo.png";
import React ,{useRef} from 'react';
import HeaderMenuList from './HeaderMenuList';
import Auth from '../../../Classes/Auth';
import AppLinkUrl from '../../../Common/AppLink/AppLinkUrl';
import useEcomHeader from '../../../CustomHooks/EcomHeader/useEcomHeader';
import MobileNavbar from './MobileNavbar';
import { useDetectOutsideClick } from '../../../Common/DetectOutsideClick/useDetectOutsideClick';
import CurrencySelector from '../../WebsiteNewTemplateEcommerce/HeaderLayout/CurrencySelector/CurrencySelector';


const HeaderDesktop = ({ preview }) => {
const MobileSlideRef= useRef()
const [SideNav, setSideNav] = useDetectOutsideClick(MobileSlideRef, false);

  const handleSidebarMenu = () => {
    setSideNav(!SideNav);
  }
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  const [handle, logoutHandler, showDropDown,
    MouseEnter,
    MouseLeave,
    CloseDropdown,
    handleSearch,
    handleShowMenu,
    handleforGuestbag,
    handleCategoryNavbarFilter,
    handleFormSubmit, openDropDown, optimizedFn, innerWindow, businessData, searchIcon, setSearchIcon, searchRef, ribbinHead, getAllData, getloading, getsuccess,] = useEcomHeader()
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <>
      <StyledHeader className={scrollY > 100 ? "sticky" : ""}>
        <Container>
          <Nav>
          {
            windowSize.width < 992 && (
              <HumBurgar onClick={handleSidebarMenu}>
                <HumLine></HumLine>
                <HumLine></HumLine>
                <HumLine></HumLine>
             </HumBurgar>
            )
          }
            <LogoWrapper to="/" className={scrollY > 100 ? "sticky" : ""}>
              <img src={businessData?.business_logo ? businessData?.business_logo : logo} alt='' />

              {
                businessData?.showBusinessName ?
                  windowSize.width <= 768 ? "" :
                    <div>
                      <p title={businessData.business_name ? businessData.business_name : "The Eblouiussante"}>
                        {businessData.business_name ? businessData.business_name : "The Eblouiussante"}
                      </p>
                    </div> : ""
              }
            </LogoWrapper>
            {
              windowSize.width >= 992 && (

                <NavMenuWrapper>
                  <HeaderMenuList preview={preview} CategoryData={getAllData} getCategorySuccess={getsuccess} />
                </NavMenuWrapper>
              )
            }
            <NavAuthWrapper>
              <NavAuthList>
                {/* <NavAuthListItem>
                  <BookAppoinmentButton type="button">Book Appoinment</BookAppoinmentButton>
                </NavAuthListItem> */}
                {
              windowSize.width < 768 ? (
                <>
                <NavAuthListItem onClick={() => handleSearch()}>
                 <CurrencySelector/>
                </NavAuthListItem>
                <NavAuthListItem onClick={() => handleSearch()}>
                  <i className="icon search"></i>
                </NavAuthListItem>
                </>
              ):(
                <>
                <NavAuthListItem onClick={() => handleSearch()}>
                  <i className="icon search"></i>
                </NavAuthListItem>
                <NavAuthListItem to={'/shop'}>
                  <i className="icon wishlist"></i>
                </NavAuthListItem>
                <NavAuthListItem onClick={() => showDropDown()}>
                  <i className="icon profile"></i>
                </NavAuthListItem>
                <NavAuthListItem>
                  <i className="icon cart"></i>
                </NavAuthListItem>
                </>
              )
              }
              </NavAuthList>
            </NavAuthWrapper>
          </Nav>

        </Container>
        {
          openDropDown &&
          <React.Fragment>
            {
              (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) || (Auth.isLogin() && AppLinkUrl.privateDomain()) ?
                <React.Fragment>
                  <button className='li-btn-link' onClick={() => handle('/ecom-myprofile')}>My Account</button>
                  <button className='li-btn-link' onClick={() => handle('/ecom-myOrders')}>My Orders</button>
                  <button className='li-btn-link' onClick={() => handle('/ecom-wishlist')}>My Wishlist</button>
                  <button className='li-btn-link' onClick={() => logoutHandler()}>Logout</button>
                </React.Fragment>
                : <button onClick={() => handle('/loginSignUp')}>Login / Sign Up</button>
            }
          </React.Fragment>
        }
        {searchIcon && <div className={`search-overlay ${searchIcon ? "active" : ""}`}>
          <div ref={searchRef} className={`search-div ${searchIcon ? "active" : ""}  ${ribbinHead ? "ribbinTrue" : ""}`}>
            <div className='containerTrue'>
              {/* <SearchControl
              type="search"
              placeholder='Search for products and more'
              value={search}
              onChange={(e) => { e.key !== 'Enter' && setSearch(e.target.value) }}
              onKeyDown={(e) => { e.key === 'Enter' && searchHandler() }}
            /> */}
              {searchIcon ? <form onSubmit={(e) => handleFormSubmit(e)}>
                <input
                  type="search"
                  placeholder='Search for products and more'
                  onChange={(e) => { e.key !== 'Enter' && optimizedFn(e.target.value) }}
                  onKeyDown={(e) => { e.key === 'Enter' && setSearchIcon(false) }}
                  autoFocus={true}
                />
                <button className="search-close-icon" type="reset" onClick={() => optimizedFn("")}>&#215;</button>
              </form> : ""}
              <div className='search-icon-div'>
                <i className=' ed-icon i-s gray icon-search'></i>
              </div>
            </div>
          </div>
        </div>}


        {
        innerWindow.width < 992 ? (
          <SlidenavOverlay className={SideNav ? "active" : ""}>
            <MobileNavbar
              MobileSlideRef={MobileSlideRef}
              show={SideNav}
              Close={setSideNav}
            />
          </SlidenavOverlay>
        ) : ""
      }
      </StyledHeader>

    </>
  )
}

export default HeaderDesktop