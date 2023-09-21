import React, { useEffect, useRef, useState } from 'react';
import WishListFillSvg from "../../../Assets/SectionComponent/Icons/wishListFill.svg";
import WishListOutlineSvg from "../../../Assets/SectionComponent/Icons/wishListOutline.svg";
import ShareIcon from "../../../Assets/SectionComponent/Icons/shareIcon.svg";
import UnCheck from "../../../Assets/SectionComponent/Icons/unCheck.svg";
import DownArrow from "../../../Assets/SectionComponent/Icons/downArrow.svg";
import { Combination, Discount, FillWishlist, ImageSection, BreadcrumbWrap, ImgMain, LikeShareImg, MainHeader, MainSection, PopularIcon, PopularList, PopularListItem, ShopSection, ShopSectionLt, ShopSectionRt, ShopWrap, SortBy, ShareIconWrap, RibbonMain, BtnContain } from "./shopPageStyle";
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImgProduct } from '../../../Constant/constants';
import usePriceDifference from '../../../CustomHooks/usePriceDifference';
import useAppNavigate from '../../../CustomHooks/useAppNavigate';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationChange, sortByChange, storeProductList } from '@/store/actions/productList';
import { useOutsideClick } from "rooks";
import { useDetectOutsideClick } from '@/CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { useRouter } from 'next/router';
import ShareToast from './ShareToast';
import Pagination from '@/SectionComponents/Pagination/Theme1/Theme1';
import Breadcrumbs from '@/SectionCommon/Breadcrumbs';
import BreadcrumbsItem from '@/SectionCommon/Breadcrumbs/BreadcrumbsItem';
import useShopPage from '@/TemplateCustomHooks/useShopPage';
import BackBtn from "../../../Assets/SectionComponent/Images/Cart/backbtn.svg";

const ShopTheme1 = ({ children }) => {
  const data = children;
  const sortbyRef = useRef(null);
  const router = useRouter()
  const navigate = useAppNavigate();
  const { customerProductList, success, loading, sortBy, localApi } = useSelector((state) => {
    return {
      customerProductList: state?.productList?.customerProductList?.data,
      success: state?.productList?.customerProductList?.success,
      loading: state?.productList?.customerProductList?.loading,
      sortBy: state?.productList?.productList?.productSearchandSortBy?.data?.sortby,
      localApi: state.productList?.customerProductList?.localApi,
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    !localApi && dispatch(storeProductList(data?.data?.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localApi])
  const [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice] = usePriceDifference();
  const outsideRef = useRef(null)
  const [activeTab, setActiveTab] = useState(false);
  const [check, setCheck] = useState(sortBy ? sortBy : "");
  const [activeTab1, setActiveTab1] = useState("LikeShareImg");
  const [ShareMedia, setShareMedia] = useDetectOutsideClick(outsideRef, false)
  const [currentPage, setCurrentPage] = useState(1);
  const handleOnClick = (item, index) => {
    navigate(`/product-details/${item.urlSlug}/`)
    setActiveTab(index);
    setActiveTab1("show");
  };
  const [sortActive, setSortActive] = useState(false);
  let FinalData = customerProductList;
  let styles = {
    ShopSection: data?.custom_section_editable[0]?.style,
    Combination: data?.custom_section_editable[1]?.style,
    ShopSectionLt: data?.custom_section_editable[2]?.style,
    ShopSectionLTH4: data?.custom_section_editable[3],
    ShopSetionLTP: data?.custom_section_editable[4],
    ShopSectionRt: data?.custom_section_editable[5]?.style,
    SortBy: data?.custom_section_editable[8]?.style,
    SortByText: data?.custom_section_editable[6],
    Popular: data?.custom_section_editable[7],
    PopularIcon: data?.custom_section_editable[9]?.style,
    PopularList: data?.custom_section_editable[10]?.style,
    PopularListItem: data?.custom_section_editable[11]?.style,
    listItemText: data?.custom_section_editable[12]?.style,
    ImageSection: data?.custom_section_editable[13]?.style,
    ImgMain: data?.custom_section_editable[14]?.style,
    ProductImage: data?.custom_section_editable[15]?.style,
    LikeShareImg: data?.custom_section_editable[16]?.style,
    FillWishlist: data?.custom_section_editable[17]?.style,
    ProductTitle: data?.custom_section_editable[18],
    ProductPrice: data?.custom_section_editable[19],
    Discount: data?.custom_section_editable[20]?.style,
    DiscountText: data?.custom_section_editable[21],
    OffText: data?.custom_section_editable[22],
    RibbonMain: data?.custom_section_editable[30]?.style,
    RibbonTxt: data?.custom_section_editable[31]?.style,
    GridCount: data?.style
  }
  const paginationStyle = {
    PaginationContainer: data?.custom_section_editable[23].style,
    PrivButton: data?.custom_section_editable[24].style,
    Prev: data?.custom_section_editable[25].style,
    PaginationNumber: data?.custom_section_editable[26].style,
    Number: data?.custom_section_editable[27].style,
    NextButton: data?.custom_section_editable[28].style,
    Next: data?.custom_section_editable[29].style,
  }

  const [wishListActive, RemoveWishListHandle, WishListHandle, wishListBody] = useShopPage();

  const ShowList = () => {
    setSortActive(sortActive ? false : true)
  }
  const handlePagination = (page) => {
    if (page) {
      setCurrentPage(page);
      dispatch(PaginationChange(page))
      const updatedQuery = { ...router.query, page: page };
      router.push({
        pathname: router.pathname,
        query: updatedQuery,
      }, null, { shallow: true });
    }
  }

  const SelectCheck = (value) => {
    if (value) {
      const updatedQuery = { ...router.query, sort: value };
      router.push({
        pathname: router.pathname,
        query: updatedQuery,
      }, null, { shallow: true });
      dispatch(sortByChange(value))
      setCheck(value ? value : "")
    }
  }

  const HandleShare = (e, index) => {
    e.stopPropagation();
    setShareMedia(ShareMedia === index ? -1 : index)
  }

  const [sortedText, setSortedText] = useState("Recent To Old")

  console.log(FinalData, 'FinalData?.productlength')
  console.log(styles?.Combination, 'styles?.Combination')

  return (
    <>
      {
        window.innerWidth > 768 ?
          <ShopSection item={styles?.ShopSection}>
            <ShopSectionLt item={styles?.ShopSectionLt}>
              <Text tagType={styles?.ShopSectionLTH4.tagType} style={styles?.ShopSectionLTH4.style} text={"Shop"} />
              <Text tagType={styles?.ShopSetionLTP.tagType} style={styles?.ShopSetionLTP.style} >
                {FinalData?.productlength} products
              </Text>
            </ShopSectionLt>
            <ShopSectionRt item={styles?.ShopSectionRt} ref={sortbyRef}>
              <SortBy item={styles?.SortBy} onClick={() => ShowList()}>
                <Text tagType={styles?.SortByText.tagType} style={styles?.SortByText.style} text={"Sort by:"} />
                <PopularIcon item={styles?.PopularIcon}>
                  <Text tagType={styles?.Popular.tagType} style={styles?.Popular.style} text={sortedText} />
                  <DownArrow />
                </PopularIcon>
              </SortBy>

              {
                sortActive ? <PopularList item={styles?.PopularList}>
                  <PopularListItem item={styles?.PopularListItem} className={sortedText === "Recent To Old" && "activeSvg"}><UnCheck /><Text tagType={"p"} style={styles?.listItemText} text={"Recent To Old"} name="RTO" onClick={() => { SelectCheck("RTO"); setSortActive(false); setSortedText("Recent To Old") }} /></PopularListItem>
                  <PopularListItem item={styles?.PopularListItem} className={sortedText === "Old To Recent" && "activeSvg"}><UnCheck /><Text tagType={"p"} style={styles?.listItemText} text={"Old To Recent"} name="OTR" onClick={() => { SelectCheck("OTR"); setSortActive(false); setSortedText("Old To Recent") }} /></PopularListItem>
                  <PopularListItem item={styles?.PopularListItem} className={sortedText === "Price : High to Low" && "activeSvg"}><UnCheck /><Text tagType={"p"} style={styles?.listItemText} text={"Price : High to Low"} name="PriceHTL" onClick={() => { SelectCheck("PriceHTL"); setSortActive(false); setSortedText("Price : High to Low") }} /></PopularListItem>
                  <PopularListItem item={styles?.PopularListItem} className={sortedText === "Price : Low to High" && "activeSvg"}><UnCheck /><Text tagType={"p"} style={styles?.listItemText} text={"Price : Low to High"} name="PriceLTH" onClick={() => { SelectCheck("PriceLTH"); setSortActive(false); setSortedText("Price : Low to High") }} /></PopularListItem>
                </PopularList> : ""
              }

            </ShopSectionRt>
          </ShopSection> : <ShopSection item={styles?.ShopSection}>
            <BtnContain onClick={() => router.back()}>
              <BackBtn />
              <Text tagType={styles?.ShopSectionLTH4.tagType} style={styles?.ShopSectionLTH4.style} text={"Shop"} />
            </BtnContain>
            <Text tagType={styles?.ShopSetionLTP.tagType} style={styles?.ShopSetionLTP.style} >
              {FinalData?.productlength} products
            </Text>
          </ShopSection>
      }
      <Combination item={styles?.Combination} gridview={styles?.GridCount}>
        {
          !loading && success ? (
            FinalData && FinalData?.productlist?.length ? FinalData?.productlist?.map((item, index) => {

              return (
                <ImageSection item={styles?.ImageSection} onClick={() => handleOnClick(item, index)} key={index}>
                  <ImgMain item={styles?.ImgMain}>
                    <ImageElement src={item?.productPicture ? item.productPicture[0] : ""} defaultImage={dummyImgProduct} alt="" style={styles?.ProductImage} />
                    {
                      item?.ribbon &&
                      <RibbonMain item={styles?.RibbonMain}>
                        <Text style={styles?.RibbonTxt} text={item?.ribbon} />
                      </RibbonMain>
                    }
                    <LikeShareImg ref={outsideRef} item={styles?.LikeShareImg}>
                      <ShareIconWrap >
                        <ShareIcon
                          fill={"none"}
                          height={19}
                          width={19}
                          onClick={(e) => { HandleShare(e, item._id) }}
                        ></ShareIcon>
                        {
                          ShareMedia === item._id && <ShareToast outsideRef={outsideRef} />
                        }
                      </ShareIconWrap>
                      {wishListActive(item._id) ? (
                        // <FillWishlist item={styles?.FillWishlist} onClick={() => wishListActive(options._id) ? RemoveWishListHandle(options._id) : WishListHandle(options._id)}>
                        <FillWishlist item={styles?.FillWishlist} onClick={(e) => { RemoveWishListHandle(e, item._id) }}>
                          <WishListFillSvg></WishListFillSvg>
                        </FillWishlist>
                      ) : (
                        <WishListOutlineSvg onClick={(e) => { WishListHandle(e, item._id) }}
                          fill={"none"}
                          height={19}
                          width={19}
                        ></WishListOutlineSvg>
                      )}
                    </LikeShareImg>
                  </ImgMain>

                  <Text tagType={styles?.ProductTitle.tagType} text={item?.productName} style={styles?.ProductTitle.style} />
                  <Text tagType={styles?.ProductPrice.tagType} text={`${getPrice(item?.salePrice)}.00`} style={styles?.ProductPrice.style} />

                  <Discount item={styles?.Discount}>
                    {item?.discountPercentage > 0 && <del><Text tagType={styles?.DiscountText.tagType} style={styles?.DiscountText.style} text={`${getPrice((item.price))}.00`} /></del>}
                    <Text tagType={styles?.OffText.tagType} style={styles?.OffText.style} text={discount(item) ? `(${discount(item)} off)` : ''} />
                  </Discount>
                </ImageSection>
              );
            }) : "Product Not Found"
          ) : "Loading"
        }

      </Combination>
      {FinalData?.productlength ?
        <Pagination
          style={paginationStyle}
          currentPage={currentPage}
          totalCount={FinalData?.productlength ? FinalData?.productlength : 0}
          pageSize={12}
          onPageChange={(page) => handlePagination(page)}
        /> : ""}
      {/* </ShopWrap> */}
    </>
  )
}

export default ShopTheme1