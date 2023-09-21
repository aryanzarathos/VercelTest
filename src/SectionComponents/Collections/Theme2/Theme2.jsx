import React from "react";
import CollectionArrow from "../../../Assets/SectionComponent/Images/Collection/collectionArrow.svg";
import Image from "next/image";
import { ArrivalText, ExploreSection, ExploreText, GroupCardSection, GroupCollectionContainer, GroupHeaderText, Groupcardmain, ItemLeft, ItemRight } from "./CollectionsTheme2.style";
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "../../../SectionsLayout/Elements/TextElement/Text";
import MediaGallery from "../../../CommonComponents/MediaGalleryEditor";
import useAppNavigate from "../../../CustomHooks/useAppNavigate";
import { dummyImg } from "../../../Constant/constants";
import Slider from "../../../SectionCommon/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import RecordNotFound from "@/CommonComponents/RecordNotFound/RecordNotFound";

const CollectionsTheme2 = ({ children }) => {
  const navigate = useAppNavigate()
  const datas = children;

  const Styles = {
    section: datas.custom_section_editable[0].style,
    collection: datas.custom_section_editable[1].style,
    cardList: datas.custom_section_editable[2].style,
    imageWrapper: datas.custom_section_editable[3].style,
    CardImage: datas.custom_section_editable[4].style,
    contentWrapper: datas.custom_section_editable[5].style,
    CardHeading: datas.custom_section_editable[6],
    ExploarWrap: datas.custom_section_editable[7].style,
    icon: datas.custom_section_editable[8],
    ExploarText: datas.custom_section_editable[9],
    GridView: datas.style,
    ObjectView: datas.style.desktop.objectView

  }

  const OnClickHandle = (item) => {
    if (item?.isPageExists) {
      navigate(`/collection/${item?.slug}`);
    }
    else {

    }
  }

  return (
    <MediaGallery arrayofImages={true} fieldName={"picture"} fieldIdLabel={"_id"} sectionName={"ManageCollections"} manageText={"Manage Collection"} data={datas} >
      {datas.data && datas.data?.length ?
        <GroupCollectionContainer item={Styles.section}>
          {
            Styles.ObjectView.toLowerCase() === "grid".toLowerCase() ?
              <GroupCardSection item={Styles.collection} gridView={Styles.GridView}>
                {datas.data.map((item, index) => {
                  return (
                    <Groupcardmain key={index} item={Styles.cardList} onClick={() => OnClickHandle(item)}>
                      <ItemLeft item={Styles.imageWrapper}>
                        <ImageElement src={item?.picture && item?.picture[0]} defaultImage={dummyImg} alt="img" style={Styles.CardImage} />
                      </ItemLeft>
                      <ItemRight item={Styles.contentWrapper}>
                        <Text tagType={Styles.CardHeading.tagType} text={item.collectionName} style={Styles.CardHeading.style} />
                        <ExploreSection item={Styles.ExploarWrap}>
                          <CollectionArrow width={Styles.icon?.style?.desktop?.width} height={Styles.icon?.style?.desktop?.height} fill={Styles.icon?.style?.desktop?.color} />
                          <Text tagType={Styles.ExploarText.tagType} text={`Explore`} style={Styles.ExploarText.style} />
                        </ExploreSection>
                      </ItemRight>
                    </Groupcardmain>
                  );
                })}
              </GroupCardSection> :
              <Slider {...datas}>
                {datas.data.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Groupcardmain item={Styles.cardList} onClick={() => OnClickHandle(item)}>
                        <ItemLeft item={Styles.imageWrapper}>
                          <ImageElement src={item?.picture && item?.picture[0]} defaultImage={dummyImg} alt="img" style={Styles.CardImage} />
                        </ItemLeft>
                        <ItemRight item={Styles.contentWrapper}>
                          <Text tagType={Styles.CardHeading.tagType} text={item.collectionName} style={Styles.CardHeading.style} />
                          <ExploreSection item={Styles.ExploarWrap}>
                            {/* <Image src={image6} alt="vectorImg" /> */}
                            <CollectionArrow width={Styles.icon.style.desktop.width} height={Styles.icon.style.desktop.height} fill={Styles.icon.style.desktop.fill} />
                            <Text tagType={Styles.ExploarText.tagType} text={`Explore`} style={Styles.ExploarText.style} />
                          </ExploreSection>
                        </ItemRight>
                      </Groupcardmain>
                    </SwiperSlide>
                  );
                })}
              </Slider>
          }
        </GroupCollectionContainer>
        :
        <RecordNotFound />
      }

    </MediaGallery>
  );
};

export default CollectionsTheme2;
