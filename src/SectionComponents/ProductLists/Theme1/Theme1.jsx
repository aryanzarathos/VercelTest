import React, { useState } from "react";
// import './CollectionFirst.scss'
import WishListFillSvg from "../../../Assets/SectionComponent/Icons/wishListFill.svg";
import WishListOutlineSvg from "../../../Assets/SectionComponent/Icons/wishListOutline.svg";
import ShareIcon from "../../../Assets/SectionComponent/Icons/shareIcon.svg";
// import Check from "../../../Assets/SectionComponent/Icons/check.svg";
import UnCheck from "../../../Assets/SectionComponent/Icons/unCheck.svg";
import DownArrow from "../../../Assets/SectionComponent/Icons/downArrow.svg";
// import Image from "next/image";
import Text from "../../../SectionsLayout/Elements/TextElement/Text";
import { Combination, Discount, FillWishlist, ImageSection, ImgMain, LikeShareImg, MainHeader, MainSection, PopularIcon, PopularList, PopularListItem, ShopSection, ShopSectionLt, ShopSectionRt, ShopWrap, SortBy } from "./ProductListsTheme1.style";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import { Anchor } from "../../../SectionsLayout/Elements/Anchor/AnchorElement/AnchorTextStyled";
import useAppNavigate from "../../../CustomHooks/useAppNavigate";
import MediaGallery from "@/CommonComponents/MediaGalleryEditor";



const ProductTheme1 = ({ children }) => {
  const data = children;
  const navigate = useAppNavigate();

  const [activeTab, setActiveTab] = useState(false);
  const [check, setCheck] = useState(false);
  const [activeTab1, setActiveTab1] = useState("LikeShareImg");

  const handleActive = (index) => {
    navigate(`product-details/${slug}/`)
    setActiveTab(index);
    setActiveTab1("show");
  };
  const [sort, setSort] = useState(false);
  let styles = {
    ShopSection: data?.custom_section_editable[0]?.style,
    Combination: data?.custom_section_editable[1]?.style,
    ShopSectionLt: data?.custom_section_editable[2]?.style,
    ShopSectionLTH4: data?.custom_section_editable[3]?.style,
    ShopSetionLTP: data?.custom_section_editable[4]?.style,
    ShopSectionRt: data?.custom_section_editable[5]?.style,
    SortBy: data?.custom_section_editable[8]?.style,
    SortByText: data?.custom_section_editable[6]?.style,
    Popular: data?.custom_section_editable[7]?.style,
    PopularIcon: data?.custom_section_editable[9]?.style,
    PopularList: data?.custom_section_editable[10]?.style,
    PopularListItem: data?.custom_section_editable[11]?.style,
    listItemText: data?.custom_section_editable[12]?.style,
    ImageSection: data?.custom_section_editable[13]?.style,
    ImgMain: data?.custom_section_editable[14]?.style,
    ProductImage: data?.custom_section_editable[15]?.style,
    LikeShareImg: data?.custom_section_editable[16]?.style,
    FillWishlist: data?.custom_section_editable[17]?.style,
    ProductTitle: data?.custom_section_editable[18]?.style,
    ProductPrice: data?.custom_section_editable[19]?.style,
    Discount: data?.custom_section_editable[20]?.style,
    DiscountText: data?.custom_section_editable[21]?.style,
    OffText: data?.custom_section_editable[22]?.style,
  }
  const ShowList = () => {
    setSort(!sort)
  }
  const SelectCheck = () => {
    setCheck(!check)
  }
  return (
    <>
      {/* <MainHeader>
        <h2>SUMMAR COLLECTION</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          laudantium.
        </h5>
      </MainHeader> */}
      {/* <ShopWrap> */}
      <MediaGallery sectionName={"ProductSection"} manageText={"Manage Product"} arrayofImages={true} fieldName={"productPicture"} fieldIdLabel={"_id"} data={data}>

        <ShopSection item={styles?.ShopSection}>
          <ShopSectionLt item={styles?.ShopSectionLt}>

            <Text tagType="h4" style={styles?.ShopSectionLTH4} text={"Shop"} />
            <Text tagType={"p"} style={styles?.ShopSetionLTP} text={"52 products"}>
              <Anchor tagType={"p"} style={styles?.ShopSetionLTP} text={"52 products"} href="sdads"></Anchor>
            </Text>
          </ShopSectionLt>
          <ShopSectionRt item={styles?.ShopSectionRt}>
            <SortBy item={styles?.SortBy} onClick={ShowList}>
              <Text tagType={"p"} style={styles?.SortByText} text={"Sort by:"} />
              <PopularIcon item={styles.PopularIcon}>
                <Text tagType={"p"} style={styles?.Popular} text={"Popular"} />
                <DownArrow />
              </PopularIcon>
            </SortBy>
            {/* <label htmlFor="popular">Sort by:</label> */}
            {/* <select className="popular">
            <option>popular</option>
            <option>X</option>
            <option>Y</option>
            <option>Z</option>
          </select> */}
            {
              sort && <PopularList item={styles.PopularList}>
                <PopularListItem item={styles.PopularListItem}><UnCheck /><Text tagType={"p"} style={styles.listItemText} text={"Latest products"} /></PopularListItem>
                <PopularListItem item={styles.PopularListItem}><UnCheck /><Text tagType={"p"} style={styles.listItemText} text={"Popularity"} /></PopularListItem>
                <PopularListItem item={styles.PopularListItem}><UnCheck /><Text tagType={"p"} style={styles.listItemText} text={"Price : High to Low"} /></PopularListItem>
                <PopularListItem item={styles.PopularListItem}><UnCheck /><Text tagType={"p"} style={styles.listItemText} text={"Price : Low to High"} /></PopularListItem>
              </PopularList>
            }

          </ShopSectionRt>
        </ShopSection>
        <Combination item={styles?.Combination}>
          {data?.data?.map((elm, index) => {
            return (
              <ImageSection item={styles?.ImageSection} onClick={() => handleActive(elm?.id)} key={index}>
                <ImgMain item={styles?.ImgMain}>
                  <ImageElement src={elm?.img} alt="" style={styles?.ProductImage} />
                  <LikeShareImg item={styles?.LikeShareImg}>
                    <ShareIcon
                      fill={"none"}
                      height={19}
                      width={19}
                    ></ShareIcon>
                    {activeTab ? (
                      <FillWishlist item={styles?.FillWishlist}>
                        <WishListFillSvg></WishListFillSvg>
                      </FillWishlist>
                    ) : (
                      <WishListOutlineSvg
                        fill={"none"}
                        height={19}
                        width={19}
                      ></WishListOutlineSvg>
                    )}
                  </LikeShareImg>
                </ImgMain>

                <Text tagType={"h3"} text={elm?.title} style={styles?.ProductTitle} />
                <Text tagType={"h5"} text={elm?.price} style={styles?.ProductPrice} />

                <Discount item={styles?.Discount}>
                  <del><Text tagType={"h6"} style={styles?.DiscountText} text={elm?.discount} /></del>
                  <Text tagType={"p"} style={styles?.OffText} text={`(${elm?.off} off)`} />
                </Discount>
              </ImageSection>
            );
          })}
        </Combination>
        {/* <Pagination/> */}
        {/* </ShopWrap> */}
      </MediaGallery>
    </>
  );
};

export default ProductTheme1;
