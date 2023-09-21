import { StyledHeader, Nav, Logo, NavAuth, LogoText, LogoWrapper, ButtonLogin, BookAppoinmentButton, NavMenuWrapperContainer, NavMenuWrapper, NavContactWrap, ItemInnerContent, NavContactWrapItem, NavMenuCustom, LogoTextPrimary } from './Header.styled'
import { Container } from '../../../CommonComponent/Container.styled'
import { useState, useEffect } from "react";
import logo from "../../../Assets/TheTranquill/logo.png";
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import HeaderMenuList from './HeaderMenuList';

export default function TranquillHeader() {
  const history = useHistory()
  //Slide click







  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
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

  
  
  const handleLogin = () => {
    history.push('/customer-login')

  }
 
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <LogoWrapper href='/'>
            <Logo>
              <img src={logo} alt='' />
            </Logo>
            {
                windowSize.width <= 768 ? ""
                   : <LogoText>
                   <LogoTextPrimary title="The Tranquil">
                   The Tranquill
                   </LogoTextPrimary>
                 </LogoText>
            }
          </LogoWrapper>
          {windowSize.width >= 768 &&
            <NavContactWrap>
              <NavContactWrapItem>
                <i className="phone-icon"></i>
                <ItemInnerContent>
                  <h6>Call</h6>
                  <p>+91 9819127217</p>
                </ItemInnerContent>
              </NavContactWrapItem>
              <NavContactWrapItem>
                <i className="address-icon"></i>
                <ItemInnerContent>
                  <h6>Location</h6>
                  <p title="title">Budh Vihar, New Delhi, India, 110086</p>
                </ItemInnerContent>
              </NavContactWrapItem>
            </NavContactWrap>
          }
          <NavAuth>
          <React.Fragment>
                      <ButtonLogin type="button">Login</ButtonLogin>
                      <ButtonLogin type="button">Sign Up</ButtonLogin>
                    </React.Fragment>
          </NavAuth>
        </Nav>

      </Container>
      <NavMenuWrapper>

<Container>
  <NavMenuWrapperContainer>
    <NavMenuCustom>
      {/* {scrollX !== 0 && (
        <button
          className="menuPrevClass"
          onClick={() => slide(-50)}
        >
        </button>
      )}
      <ul ref={scrl} onScroll={scrollCheck}> */}


      <HeaderMenuList/>
      {/* <li><button>Home</button></li>
        <li><button>About us</button></li>
        <li><button>Empanelment</button></li>
        <li><button>Doctors</button></li>
        <li><button>Facilities</button></li>
        <li><button>Categories</button></li>
        <li><button>Services</button></li>
        <li><button>Center of Excellence</button></li> */}
      {/* <HeaderMenuList preview={preview} /> */}

      {/* </ul>
      {!scrolEnd && (
        <button
          className="menuNextClass"
          onClick={() => slide(+50)}
        >
        </button>
      )} */}
    </NavMenuCustom>
    {windowSize.width >= 768 &&
      <BookAppoinmentButton type="button">
        BOOK APPOINTMENT
      </BookAppoinmentButton>
    }
  </NavMenuWrapperContainer>
</Container>
</NavMenuWrapper>
    </StyledHeader >
  )
}
