import React, { useRef, useState, useEffect } from 'react'
import { SideNavbarWrapper, LoginSignWrap, ShopcategoryWrap, SubCategoriesWrap, SubSubCategory, SubSubCategoryList, SubcategoryListWrap, SubcategoryList, ShopcategoryList, LoginWrap, BtnList, SideNavBtn, CategoryBtn, SideNavbar, SideNavbarList, Categorybutton, Subcategorieswrap, SubcategorieList } from "./Header.styled";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Auth from '../../../Classes/Auth';
import AppLinkUrl from '../../../Common/AppLink/AppLinkUrl';
import { useDetectOutsideClick } from '../../../Common/DetectOutsideClick/useDetectOutsideClick';
import { getAllCategoryList } from '../../../store/actions/ecomAdmin';
import { CategoryPush, clearAllCategory, showAddCat, showAddSubCat, showAddSubSubCat, SubCategoryPush, SubSubCategoryPush } from '../../../store/actions/catergoryFilter';

const MobileNavbar = ({ MobileSlideRef, show, Close }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [totalItems, setTotalItems] = useState(0);
  const [categoryMenu, setCategoryMenu] = useState(-1)
  const [showMenu, setShowMenu] = useState(-1);
  const [showSubMenu, setShowSubMenu] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(false);
  const [indexCheck, setIndexCheck] = useState(null)
  const RedirectHandle = (item) => {
    history.push(item)
  }


  const handleCategoryMenu = (index) => {
    categoryMenu === index && setCategoryMenu(-1);
    showMenu === index && setShowMenu(-1);
    setCategoryMenu(categoryMenu === index ? -1 : index);
    // Close(false)
  }
  const handleShowMenu = (index) => {
    showMenu === index && setShowSubMenu(-1);
    setShowMenu(showMenu === index ? -1 : index);
    setShowSubMenu(showSubMenu === index ? -1 : index);
    // Close(false)
  }

  const handleShowSubMenu = (index) => {
    setShowSubMenu(showSubMenu === index ? -1 : index);
    // Close(false)
  }

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const user = useSelector((state) => state.user);
  const subdomainuser = useSelector((state) => state.subdomainuser);
  const { customerCart } = useSelector((state) => state.orderCartList);
  const { data, success } = useSelector((state) => state.businessInfo.ecomWebsite);
  const { getAllData, getloading, getsuccess, getbusinessInfoData, getbusinessInfoSuccess, getbusinessInfoloading } = useSelector((state) => {
    return {
      getAllData: state.ecomAdmin.list.data,
      getloading: state.ecomAdmin.list.loading,
      getsuccess: state.ecomAdmin.list.success,
      getbusinessInfoData: state.businessInfo.ecomWebsite.data,
      getbusinessInfoSuccess: state.businessInfo.ecomWebsite.success,
      getbusinessInfoloading: state.businessInfo.ecomWebsite.loading,
    };
  })
  const { dynamicHeaderData } = useSelector((state) => state.ecommerceTemplate.getTemplate.data)
  const { subheadersData } = useSelector((state) => state.ecommerceTemplate.getTemplate.data)

  useEffect(() => {
    if (getbusinessInfoData && getbusinessInfoData._id) {
      dispatch(getAllCategoryList(getbusinessInfoData._id))

    }
  }, [dispatch, getbusinessInfoData])

  const handle = (item) => {
    // shopDropdown && setShopDropdown(false)
    // setSearch("")
    history.push(item)
    Close(false)
  }

  const handleCategoryNavbarFilter = (Categoryitem) => {
    dispatch(clearAllCategory())
    dispatch(CategoryPush(Categoryitem._id))
    dispatch(showAddCat(Categoryitem._id))
    if (Categoryitem.subcategories.length > 0) {
      for (let i = 0; i < Categoryitem.subcategories.length; i++) {
        dispatch(showAddSubCat(Categoryitem.subcategories[i]._id))
        if (Categoryitem.subcategories[i].subsubcategories.length > 0) {
          dispatch(showAddSubSubCat(Categoryitem.subcategories[i]._id))
        }
      }
    }
    history.push("/products")
    Close(false)
  }
  const handleSubCategoryNavbarFilter = (subCategoryitem) => {
    dispatch(clearAllCategory())
    dispatch(SubCategoryPush(subCategoryitem._id))
    dispatch(showAddSubCat(subCategoryitem._id))
    if (subCategoryitem.subsubcategories.length > 0) {
      for (let i = 0; i < subCategoryitem.subsubcategories.length; i++) {
        dispatch(showAddSubSubCat(subCategoryitem.subsubcategories[i]._id))
      }
    }
    history.push("/products")
    Close(false)
  }
  const handleSubSubCategoryNavbarFilter = (subsubitem) => {
    dispatch(clearAllCategory())
    dispatch(SubSubCategoryPush(subsubitem))
    dispatch(showAddSubSubCat(subsubitem._id))
    history.push("/products")
    Close(false)
  }

  useEffect(() => {
    if (customerCart.success === true && customerCart.data && customerCart.data.cartProduct && customerCart.data.cartProduct.length > 0) {

      const iTot = customerCart.data.cartProduct.reduce((tot, curr, i) => {
        return tot + curr.quantity;
      }, 0);
      setTotalItems(iTot);
    }
  }, [customerCart]);

  const logoutHandler = () => {
    Auth.logout()
    history.push("/loginSignUp");
    Close(false)
  };
  const [category_id, setCategory_Id] = useState(null)

  const handleOnClick = (index, category) => {
    setCategory_Id(category)
    setActiveIndex(index); // remove the curly braces
  };

  const ShopMenuList = getsuccess && getAllData?.data && getAllData?.data.filter((item) => item.show_on_header === false);
  const Categoryitem = getsuccess && category_id && getAllData?.data && getAllData?.data.find((item) => item._id === category_id);

  return (
    <SideNavbarWrapper ref={MobileSlideRef} className={`${show ? "active" : ""}`}>
      <LoginSignWrap>
        {(Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) || (Auth.isLogin() && AppLinkUrl.privateDomain()) ? (
          <>
            {
              Auth.isSubdomainLogin() ? (
                <>
                  <h5>Hello {subdomainuser.user_fullname}</h5>
                  <p>{subdomainuser.user_email}</p>
                </>
              ) : (
                <>
                  <h5>Hello {user.user_fullname}</h5>
                  <p>{user.user_email}</p>
                </>
              )

            }
          </>
        ) :
          <React.Fragment>
            <h4>Welcome Guest</h4>
            <LoginWrap>
              <BtnList><button onClick={() => handle('/loginSignUp')}>Login</button></BtnList>/
              <BtnList><button onClick={() => handle('/loginSignUp')}>Sign Up</button></BtnList>
            </LoginWrap>
          </React.Fragment>
        }
      </LoginSignWrap>
      <SideNavbar>
        {dynamicHeaderData && dynamicHeaderData.dynamic_header && dynamicHeaderData.dynamic_header.length > 0 && dynamicHeaderData.dynamic_header.filter((item) => item.showOnHeader === true).map((headerMenuList, index) => {
          return (
            <SideNavbarList className={activeIndex === index ? "active" : ""} key={index}>
              <CategoryBtn className="Category-btn">
                <NavLink exact={true} key={index} data-targetid={index} to={headerMenuList.path} onClick={() => { headerMenuList.component === "category" ? handleOnClick(index, headerMenuList.ref_id) : handleOnClick(index) }} className={pathname === headerMenuList.path && "active"} style={{ position: 'relative' }}> {(subheadersData && subheadersData[headerMenuList.titleKey]) || headerMenuList.title}</NavLink>
                {
                  ShopMenuList && ShopMenuList.length > 0 && headerMenuList.component === "Shop" ?
                    (
                      categoryMenu === "shop" ? (
                        <SideNavBtn onClick={() => {handleCategoryMenu(`shop`);handleOnClick(index)}}><i className="icon">&#8722;</i></SideNavBtn>
                      ) : (
                        <SideNavBtn onClick={() => {handleCategoryMenu(`shop`);handleOnClick(index)}}><i className="icon">&#43;</i></SideNavBtn>
                      )
                    ) : ""
                }
                {
                  headerMenuList.component === "category"&&getsuccess && getAllData?.data.find((item) => item._id === headerMenuList.ref_id)?.subcategories.length > 0  ?
                    (
                      categoryMenu === "category" && index === indexCheck ? (
                        <SideNavBtn onClick={() => { handleCategoryMenu(`category`); setIndexCheck(index === indexCheck ? null : index);handleOnClick(index, headerMenuList.ref_id) }}><i className="icon">&#8722;</i></SideNavBtn>
                      ) : (
                        <SideNavBtn onClick={() => { handleCategoryMenu(`category`); setIndexCheck(index === indexCheck ? null : index);handleOnClick(index, headerMenuList.ref_id) }}><i className="icon">&#43;</i></SideNavBtn>
                      )
                    ) : ""
                }
              </CategoryBtn>
              {
                getsuccess && ShopMenuList && ShopMenuList.length > 0 && headerMenuList.component === "Shop" && categoryMenu === "shop" && (
                  <ShopcategoryWrap>
                    {ShopMenuList.map((Categoryitem, key) => (
                      <>
                        <ShopcategoryList key={key}>
                          <CategoryBtn>
                            <SideNavBtn onClick={() => handleCategoryNavbarFilter(Categoryitem)}>{Categoryitem?.categoryName}</SideNavBtn>
                            {
                              getsuccess && Categoryitem?.subcategories && Categoryitem?.subcategories.length > 0 && (
                                showMenu === `${key + "categorysshop"}` ? (
                                  <SideNavBtn onClick={() => handleShowMenu(`${key + "categorysshop"}`)}><i className="icon">&#8722;</i></SideNavBtn>
                                ) : (
                                  <SideNavBtn onClick={() => handleShowMenu(`${key + "categorysshop"}`)}><i className="icon">&#43;</i></SideNavBtn>
                                )
                              )
                            }
                          </CategoryBtn>
                          {
                            showMenu === `${key + "categorysshop"}` && (
                              <React.Fragment>
                                <SubCategoriesWrap>
                                  {
                                    getsuccess && Categoryitem?.subcategories && Categoryitem?.subcategories.length > 0 &&
                                    Categoryitem?.subcategories.map((subCategoryitem, Arraykey) => {
                                      return (
                                        <SubcategoryList className="" key={Arraykey + "secondshop"}>
                                          <SubcategoryListWrap>
                                            <SideNavBtn onClick={() => handleSubCategoryNavbarFilter(subCategoryitem)}>{subCategoryitem?.subCategoryName}</SideNavBtn>
                                            {
                                              getsuccess && subCategoryitem?.subsubcategories && subCategoryitem?.subsubcategories.length > 0 && (
                                                showSubMenu === `${Arraykey + "secondshop"}` ? (
                                                  <SideNavBtn onClick={() => handleShowSubMenu(`${Arraykey + "secondshop"}`)}><i className="icon">&#8722;</i></SideNavBtn>
                                                ) : (
                                                  <SideNavBtn onClick={() => handleShowSubMenu(`${Arraykey + "secondshop"}`)}><i className="icon">&#43;</i></SideNavBtn>
                                                )
                                              )
                                            }
                                          </SubcategoryListWrap>
                                          {
                                            showSubMenu === `${Arraykey + "secondshop"}` && (
                                              <SubSubCategory>
                                                {
                                                  getsuccess && subCategoryitem?.subsubcategories && subCategoryitem?.subsubcategories.length > 0 && (
                                                    subCategoryitem?.subsubcategories.map((subsubitem, Arraykey) => (
                                                      <>
                                                        <SubSubCategoryList key={`${Arraykey + "secondshop"}`} className="subsubcategory-list">
                                                          <SideNavBtn onClick={() => handleSubSubCategoryNavbarFilter(subsubitem)}>{subsubitem?.subSubCategoryName}</SideNavBtn>
                                                        </SubSubCategoryList>
                                                      </>
                                                    ))
                                                  )
                                                }
                                              </SubSubCategory>
                                            )
                                          }
                                        </SubcategoryList>
                                      )
                                    }
                                    )
                                  }
                                </SubCategoriesWrap>
                              </React.Fragment>
                            )
                          }
                        </ShopcategoryList>
                      </>
                    ))}
                  </ShopcategoryWrap>
                )
              }
              {
                index === indexCheck && getsuccess && Categoryitem?.subcategories && Categoryitem?.subcategories.length > 0 && (
                  <React.Fragment>
                    <SubCategoriesWrap>
                      {
                        getsuccess && Categoryitem?.subcategories && Categoryitem?.subcategories.length > 0 &&
                        Categoryitem?.subcategories.map((subCategoryitem, Arraykey) => {
                          return (
                            <SubcategorieList key={Arraykey + "second"}>
                              <SubcategoryListWrap>
                                <SideNavBtn onClick={() => handleSubCategoryNavbarFilter(subCategoryitem)}>{subCategoryitem?.subCategoryName}</SideNavBtn>
                                {
                                  getsuccess && subCategoryitem?.subsubcategories && subCategoryitem?.subsubcategories.length > 0 && (
                                    showMenu === `${Arraykey + "second"}` ? (
                                      <SideNavBtn onClick={() => handleShowMenu(`${Arraykey + "second"}`)}><i className="icon">&#8722;</i></SideNavBtn>
                                    ) : (
                                      <SideNavBtn onClick={() => handleShowMenu(`${Arraykey + "second"}`)}><i className="icon">&#43;</i></SideNavBtn>
                                    )
                                  )
                                }
                              </SubcategoryListWrap>
                              {
                                showMenu === `${Arraykey + "second"}` && (
                                  <SubSubCategory>
                                    {
                                      getsuccess && subCategoryitem?.subsubcategories && subCategoryitem?.subsubcategories.length > 0 && (
                                        subCategoryitem?.subsubcategories.map((subsubitem, Arraykey) => (
                                          <>
                                            <SubSubCategoryList key={`${Arraykey + "second"}`}>
                                              <SideNavBtn onClick={() => handleSubSubCategoryNavbarFilter(subsubitem)}>{subsubitem?.subSubCategoryName}</SideNavBtn>
                                            </SubSubCategoryList>
                                          </>
                                        ))
                                      )
                                    }
                                  </SubSubCategory>
                                )
                              }
                            </SubcategorieList>
                          )
                        }
                        )
                      }
                    </SubCategoriesWrap>
                  </React.Fragment>
                )
              }

            </SideNavbarList>

          )
        })}

        {(Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) || (Auth.isLogin() && AppLinkUrl.privateDomain()) ? (
          <React.Fragment>
            <SideNavbarList className={`list ${splitLocation[1] === "ecom-orderlist" ? "active" : ""}`}>
              <SideNavBtn className="CategoryListOption" onClick={() => handle('/ecom-myOrders')}>My Orders</SideNavBtn>
            </SideNavbarList>
            <SideNavbarList className={`list ${splitLocation[1] === "ecom-contactus" ? "active" : ""}`}>
              <SideNavBtn className="CategoryListOption" onClick={() => { logoutHandler() }}>Logout</SideNavBtn>
            </SideNavbarList>
          </React.Fragment>
        ) : ""
        }
      </SideNavbar>
    </SideNavbarWrapper>
  )
}

export default MobileNavbar