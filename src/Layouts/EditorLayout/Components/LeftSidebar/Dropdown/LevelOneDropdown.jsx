import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Dropdown.module.scss"
import { OPEN_LEFTSIDEBAR, PAGE_DROPDOWN, SELECT_OPTION } from '../../../../../store/reducers/SiteEditor';
import FirstLevel from "../leftPanel.json"
import Image from 'next/image';
import LevelTwoDropdown from './LevelTwoDropdown';
import { addSection } from '../../../../../store/actions/websiteTemplate';
import CrudDopdown from './OptionDropdown';
import AddExternalPages from '../../AddExternalPages/AddExternalPages';
import AddPagesPopup from '../../AddPagesPopup';
import useTemplateId from '../../../../../CustomHooks/useTemplateId';
import NavigationCrudDropdown from './OptionDropdown/NavigationCrudDropdown';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import RenamePages from '../../ManagePages/renamePages';
import { addNewEmptyPage, getCategoryPages } from '@/store/actions/siteEditor';

const SubPages = [
  {
    id: 1,
    title: "Men",
    subcategory: []
  },
  {
    id: 2,
    title: "Women",
    subcategory: [
      {
        id: 1,
        subTitle: "Topwear"
      },
      {
        id: 2,
        subTitle: "Bottomwear"
      }
    ]
  },
  {
    id: 3,
    title: "Kids",
    subcategory: [
      {
        id: 1,
        subTitle: "Topwear"
      },
      {
        id: 2,
        subTitle: "Bottomwear"
      }
    ]
  }
]

const LevelOneDropdown = ({ }) => {
  const dispatch = useDispatch();
  const managePageRef = useRef(null)
  const AddPageRef = useRef(null)
  const AddBlankPageRef = useRef(null)
  const templateId = useTemplateId()
  const [hide, setHide] = useState(false);
  const navigate = useAppNavigate()
  const [secondLavelPages, setSecondLavelPages] = useState(-1);
  const [thirdLavelPages, setThirdLavelPages] = useState(-1);
  const [thirdLavelSeoPages, setThirdLavelSeoPages] = useState(-1);
  const [activePage, setActivePage] = useState(-1);
  const [activeItem, setActiveItem] = useState("");
  const [addBlankPageCategory, setAddBlankPageCategory] = useState("");

  const { level1Component, RenderLeftComponent, level1Active, level1Data, level2Active, IndexLevel1, IndexLevel2, level1Heading, leftSidebarActive } = useSelector((state) => state.editor.leftSidebar)

  const { user, templateData, mainContainerIndex, addSectionTo, addSectionData } = useSelector((state) => {
    return {
      user: state.user,
      templateData: state.websiteTemplate.getTemplate.data,
      mainContainerIndex: state.editor.selectedIndexAndId.mainContainerIndex,
      addSectionTo: state.editor.selectedIndexAndId.addSectionTo,
      addSectionSuccess: state.websiteTemplate.addSection.success,
      addSectionData: state.websiteTemplate.addSection.data,
    };
  });
  const handleState = (_id) => {
    if (_id) {
      dispatch(
        addSection({
          variationId: _id,
          templateId: templateId,
          pageId: templateData._id,
          position: addSectionTo === "upper" ? mainContainerIndex - 1 : mainContainerIndex + 1,
          business: user.user_business,
          owner: user._id,
        })
      );
      // if (addSectionTo === "upper") {
      //   dispatch(SELECT_OPTION({ activeMainContainer: addSectionData._id, mainContainerIndex: mainContainerIndex - 1 }))

      // } else {
      //   dispatch(SELECT_OPTION({ activeMainContainer: addSectionData._id, mainContainerIndex: mainContainerIndex + 1 }))
      // }
    }
    setActiveItem("")
    setActivePage(false)
    dispatch(OPEN_LEFTSIDEBAR({ leftSidebarActive: false, level1Active: false, level2Active: false }))
  }
  const PageshandleState = (index, e) => {
    // dispatch(OPEN_LEFTSIDEBAR({ level1Active: false }))
    e.stopPropagation()
    setActivePage(activePage === index ? 1 : index)
    // dispatch(OPEN_LEFTSIDEBAR({ level2Active: false, IndexLevel2: index }))
  }
  const SecondlavelPageshandleState = (index, e) => {
    e.stopPropagation()
    setThirdLavelSeoPages(thirdLavelSeoPages === index ? 1 : index)

  }
  const ThirdlavelPageshandleState = (index, e) => {
    e.stopPropagation()
    setThirdLavelSeoPages(thirdLavelSeoPages === index ? 1 : index)
  }

  const openPagesPopupHandle = () => {
    managePageRef.current.open()
  }
  const ClosePagesPopupHandle = () => {
    managePageRef.current.close()
  }

  const addPagesPopupHandle = () => {
    AddPageRef.current.open();
    dispatch(getCategoryPages({ id: templateData?.business, templateId: templateId }));
  }

  const closeAddPagesPopupHandle = () => {
    AddPageRef.current.close()
  }

  const addPagesBlankPopupHandle = (val) => {
    AddBlankPageRef.current.open()
    setAddBlankPageCategory(val);
  }

  const closeAddBlankPagesPopupHandle = () => {
    AddBlankPageRef.current.close()
  }

  const handleAddBlankPageBtn = (pageName) => {
    dispatch(addNewEmptyPage({ name: pageName, template: templateId, business: user.user_business, owner: user._id, category_name: addBlankPageCategory }));
    closeAddBlankPagesPopupHandle();
  }


  const secondlavelhandle = (id, e) => {
    e.stopPropagation()
    setSecondLavelPages(secondLavelPages === id ? 1 : id)
    // setSecondLavelPages(false)
    // setThirdLavelPages(false)
  }
  const thirdlavelhandle = (id, e) => {
    setThirdLavelPages(thirdLavelPages === id ? 1 : id)
  }

  const LevelOneHandle = (item, index) => {
    setActiveItem(item._id)
    dispatch(OPEN_LEFTSIDEBAR({ level2Active: true, level2Data: item, IndexLevel2: index }))
  }

  function Truncate(str, maxLength) {
    if (str?.length > maxLength) {
      return str?.substring(0, maxLength - 3) + "...";
    }
    return str;
  }

  const FindData = FirstLevel?.SectionPages?.find((item) => item?._id === IndexLevel1);

  const FindPagesData = FirstLevel?.SitePage?.find((item) => item?._id === IndexLevel1);


  const validSectionComponents = ["Banner & Slider", "Store", "Media", "Services", "Blog", "Blogs"];

  const isvalidSectionComponent = validSectionComponents?.includes(level1Data?.section_name);

  const validPagesComponents = ["NavigationPages", "StorePages", "CartPages", "BlogPages", "BookingPages", "MemberPages", "PoliciesPages", "DynamicPages"];
  const isvalidPagesComponent = validPagesComponents.includes(level1Component);

  const isValidList = ["Dynamic Pages", "NavigationPages", "Store Page"]
  const isValidlistOverly = isValidList.includes(level1Component)

  const handleRoute = (slug, event, prefix) => {
    // Check if the clicked element is a child div
    if (event?.target?.id?.includes('route_level1') || event?.target?.id?.includes('route_level2') || event?.target?.id?.includes('route_level3') || event?.target?.id?.includes('sitePages_level')) {
      switch (prefix) {
        case "category":
          navigate(`/category/${slug}`, "", true);
          dispatch(PAGE_DROPDOWN(false));
          break;
        case "collection":
          navigate(`/collection/${slug}`, "", true);
          dispatch(PAGE_DROPDOWN(false));
          break;

        default:
          if (slug === "product-details") {
            navigate(`/${slug}/product`, "", true);
          } else if (slug === "service-details") {
            navigate(`/${slug}/service`, "", true);
          } else if (slug === "service-category-details") {
            navigate(`/${slug}/service-category`, "", true);
          } else if (slug === "service-collection-details") {
            navigate(`/${slug}/service-collection`, "", true);
          } else if (slug === "blog-details") {
            navigate(`/${slug}/details`, "", true);
          } else if (slug === "blogcategory") {
            navigate(`/${slug}/blogcategory`, "", true);
          } else {
            navigate(`/${slug}`, "", true);
          }
          // navigate(`/${slug}`, "", true);
          dispatch(PAGE_DROPDOWN(false));
          break;
      }
    } else {
      // Handle the click event on the parent div
      // console.log('child div clicked!');
    }

  }

  // console.log(level1Data?.Variation, 'validSectionComponents')
  return (
    <React.Fragment>
      <aside className={`${styles.FirstLeftAside} ${level1Active ? `${styles.Active_LeftSidebar}` : ""}`}>
        <div className={`${styles.FirstLeftAsideInnerWrap} ${isValidlistOverly ? `${styles.description_Active}` : ""}`}>
          {
            level1Heading && (
              <div className={styles.FirstHeadWrapper}>
                <h3 className={styles.Heading}>{level1Heading === "Banner & Slider" || level1Heading === "Store" || level1Heading === "Media" || level1Heading === "Services" || level1Heading === "Blog" ? "What do you want to add ?" : level1Heading}</h3>
                <button type="button" className={styles.CloseButton} onClick={() => handleState()} />
              </div>
            )
          }
          {
            RenderLeftComponent === "SectionPages" && (
              <ul className={`${styles.ListWrap}  ${isvalidSectionComponent ? `${styles.ActivePagesMenuList}` : `${styles.unActivePagesList}`}`}>
                {level1Data?.isExpanded ? <React.Fragment>
                  {
                    level1Data?.Expanded.length > 0 && level1Data?.Expanded.map((item, key) => (

                      <li key={key} className={`${styles.List} ${activeItem === item._id ? `${styles.Active}` : ""}`} onClick={() => LevelOneHandle(item, key)}>
                        <div className={styles.HeadingWrap}>
                          <i className={`${styles[item.section_name ? item.section_name : ""]} ${item.section_name === "Blog Posts" ? `${styles.blog}` : ""} `}></i>
                          <h3 className={styles.Title}> {item.section_name.replace(/([a-z])([A-Z])/g, '$1 $2')} </h3>

                        </div>
                        <button type="button" className={styles.RightArrow}>&#10095;</button>
                      </li>
                    ))
                  }
                </React.Fragment> :
                  <React.Fragment>
                    {
                      level1Data?.Variation?.length > 0 && level1Data?.Variation?.map((item, key) => (
                        <li key={key} className={`${styles.PagesList}`}>
                          {
                            // item?.variation_name && <h3 className={styles.heading}>{item?.variation_name}</h3>
                          }
                          <div className={styles.scetionImages}>
                            <Image className={styles.Images} src={item?.img} alt='product images' layout='fill' />
                            <button className={styles.addButton} onClick={() => handleState(item._id)}><i className={styles.AddIcon}></i> Add Section</button>
                          </div>
                        </li>
                      ))
                    }
                  </React.Fragment>}
              </ul>
            )
          }
          {
            RenderLeftComponent === "SitePages" && (
              level1Component === "NavigationPages" ?
                <ul className={`${styles.ListWrap} ${RenderLeftComponent === "SitePages" ? styles.site_page_list_wrap : ''} ${level1Component === "NavigationPages" ? `${styles.dynamic_Height}` : ""}`}>
                  {
                    level1Data?.length > 0 && level1Data?.map((item, key) => (
                      <React.Fragment key={key}>
                        <li onClick={(e) => handleRoute(item?.page?.page_slug, e, item?.page?.prefix)} id="route_level1" className={`${styles.List} ${item?.pageEditable?.includes("unHide") ? `${styles.desiabled}` : ""} ${IndexLevel2 === item._id ? `${styles.Active}` : secondLavelPages === item._id ? `${styles.Active}` : ""}`} >
                          <div className={styles.HeadingWrap} onClick={(e) => handleRoute(item?.page?.page_slug, e, item?.page?.prefix)}>
                            <h3 className={styles.Title}>{Truncate(item?.page?.page_name, 22)}</h3>
                          </div>

                          <div className={styles.Navigate_button_Wrapper}>
                            {item?.data && item?.data.length > 0 ?
                              <button onClick={(e) => secondlavelhandle(item._id, e)} className={`${styles.Arrow_button} ${secondLavelPages === item._id && styles.active}`}><i className={styles.Arrow_Icon}></i></button>
                              : ""
                            }
                            {
                              item?.page?.pageEditable?.length > 0 ?
                                <div className={styles.buttonWrapper}>
                                  <button type="button" className={`${styles.DotsButton} ${activePage === item._id ? `${styles.active}` : ""}`} onClick={(e) => PageshandleState(item._id, e)}><i className={styles.dots}></i></button>
                                  {
                                    activePage === item._id &&
                                    <NavigationCrudDropdown item={item?.page} itemObj={item} navigation={"true"} />
                                  }
                                </div> : ""
                            }
                          </div>

                        </li>
                        {
                          secondLavelPages === item._id && (
                            <ul className={`${styles.secondLavel_pages_wrap} ${secondLavelPages === item._id ? `${styles.Expend_Dropdown}` : ""}`}>
                              {
                                item?.data && item?.data?.map((pagesItem, key) => (
                                  <React.Fragment key={key}>
                                    <li className={styles.secondLavel_pages} id="route_level2" onClick={(e) => handleRoute(pagesItem?.page?.page_slug, e, pagesItem?.page?.prefix)}>
                                      <h5 onClick={(e) => handleRoute(pagesItem?.page?.page_slug, e, pagesItem?.page?.prefix)} className={`${styles.title} ${thirdLavelPages === pagesItem?._id && styles.title_active}`}>{Truncate(pagesItem?.page?.page_name, 22)}</h5>
                                      <div className={styles.pages_button_wrap}>
                                        {
                                          pagesItem?.data?.length > 0 && <button onClick={() => thirdlavelhandle(pagesItem?._id)} className={`${styles.Arrow_button} ${thirdLavelPages === pagesItem?._id && styles.active}`}><i className={styles.Arrow_Icon}></i></button>
                                        }
                                        {
                                          pagesItem?.page?.pageEditable && (
                                            <React.Fragment>
                                              <div className={styles.buttonWrapper}>
                                                <button type="button" className={`${styles.DotsButton} ${thirdLavelSeoPages === pagesItem?._id ? `${styles.active}` : ""}`} onClick={(e) => SecondlavelPageshandleState(pagesItem?._id, e)}><i className={styles.dots}></i></button>
                                                {
                                                  thirdLavelSeoPages === pagesItem?._id &&
                                                  <NavigationCrudDropdown item={pagesItem?.page} itemObj={pagesItem} navigation={"true"} />
                                                }
                                              </div>
                                            </React.Fragment>
                                          )
                                        }
                                      </div>
                                    </li>
                                    {
                                      thirdLavelPages === pagesItem?._id && pagesItem?.data.length > 0 && (
                                        <ul className={styles.thirdlevel_wrap}>
                                          {
                                            pagesItem?.data?.length > 0 && pagesItem?.data?.map((subSubItem, key) => (
                                              <li key={key} className={styles.thirdlevel_list} id="route_level3" onClick={(e) => handleRoute(subSubItem?.page?.page_slug, e, subSubItem?.page?.prefix)}>
                                                <h5 className={`${styles.title}`}>{subSubItem.page?.page_name}</h5>
                                                {
                                                  subSubItem?.page?.pageEditable && (
                                                    <div className={styles.buttonWrapper}>
                                                      <button type="button" className={`${styles.DotsButton} ${thirdLavelSeoPages === subSubItem?._id ? `${styles.active}` : ""}`} onClick={(e) => ThirdlavelPageshandleState(subSubItem?._id, e)}><i className={styles.dots}></i></button>
                                                      {
                                                        thirdLavelSeoPages === subSubItem?._id &&
                                                        <NavigationCrudDropdown item={subSubItem?.page} itemObj={subSubItem} navigation={"true"} />
                                                      }
                                                    </div>
                                                  )
                                                }
                                              </li>
                                            ))
                                          }
                                        </ul>
                                      )
                                    }
                                  </React.Fragment>
                                ))
                              }
                            </ul>
                          )
                        }
                      </React.Fragment>
                    ))
                  }
                </ul> :
                <ul className={`${styles.ListWrap} ${RenderLeftComponent === "SitePages" ? styles.site_page_list_wrap : ''} ${level1Component === "NavigationPages" ? `${styles.dynamic_Height}` : ""}`}>
                  {
                    level1Data?.pagemodels?.length > 0 && level1Data?.pagemodels.map((item, key) => (
                      <li key={key} onClick={(e) => handleRoute(item?.page_slug, e, item?.prefix)} id={"sitePages_level"} className={`${styles.List} ${item?.pageEditable?.includes("unHide") ? `${styles.desiabled}` : ""} ${IndexLevel2 === item?._id ? `${styles.Active}` : ""}`} >
                        <div className={styles.HeadingWrap} onClick={(e) => handleRoute(item?.page_slug, e, item?.prefix)}>
                          <h3 className={styles.Title}>{Truncate(item?.page_name, 22)}</h3>
                        </div>
                        {
                          item?.pageEditable?.length > 0 ?
                            <div className={styles.buttonWrapper}>
                              <button type="button" className={`${styles.DotsButton} ${activePage === item?._id ? `${styles.active}` : ""}`} onClick={(e) => PageshandleState(item?._id, e)}><i className={styles.dots}></i></button>
                              {
                                activePage === item?._id &&
                                <CrudDopdown item={item} />
                              }
                            </div>
                            : ""
                        }
                      </li>
                    ))
                  }
                </ul>
            )
          }
          {
            level1Component === "NavigationPages" && (
              <div className={styles.fixed_Discription}>
                <p className={styles.title}>To add pages to Navigation Menu, you need to add it from Dashboard</p>
              </div>
            )
          }
          {
            level1Component === "Dynamic Pages" && (
              <div className={`${styles.fixed_Discription} ${styles.fixed_button}`}>
                <button type="button" onClick={openPagesPopupHandle} className={styles.add_pages_button}>+ Add Page</button>
              </div>
            )
          }
          {
            level1Component === "Store Page" && (
              <div className={`${styles.fixed_Discription} ${styles.fixed_button}`}>
                <button type="button" onClick={addPagesPopupHandle} className={styles.add_pages_button}>+ Add Page</button>
              </div>
            )
          }
          {
            level1Component === "Blog Pages" && (
              <div className={`${styles.fixed_Discription} ${styles.fixed_button}`}>
                <button type="button" onClick={() => addPagesBlankPopupHandle("Blog Pages")} className={styles.add_pages_button}>+ Add Blank Page</button>
              </div>
            )
          }
          {
            level1Component === "Policies & Error Pages" && (
              <div className={`${styles.fixed_Discription} ${styles.fixed_button}`}>
                <button type="button" onClick={() => addPagesBlankPopupHandle("Policies & Error Pages")} className={styles.add_pages_button}>+ Add Blank Page</button>
              </div>
            )
          }
          {
            level1Component === "Booking Pages" && (
              <div className={`${styles.fixed_Discription} ${styles.fixed_button}`}>
                <button type="button" onClick={() => addPagesBlankPopupHandle("Booking Pages")} className={styles.add_pages_button}>+ Add Blank Page</button>
              </div>
            )
          }
        </div>

      </aside>

      <LevelTwoDropdown />
      <AddExternalPages Ref={managePageRef} onclose={ClosePagesPopupHandle} />
      <AddPagesPopup ref={AddPageRef} onClose={closeAddPagesPopupHandle} />
      <RenamePages ModalsRef={AddBlankPageRef} onclose={closeAddBlankPagesPopupHandle} addNewPage={(val) => handleAddBlankPageBtn(val)} />
    </React.Fragment>
  )
}

export default LevelOneDropdown