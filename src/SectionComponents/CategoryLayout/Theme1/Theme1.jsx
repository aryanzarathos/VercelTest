import React from 'react'
import { CategoryFirst, ImageContainer1, MainCategoryWrapper, MainImage } from './CategoryLayoutTheme1.style';
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import useAppNavigate from '../../../CustomHooks/useAppNavigate';
import { dummyImg } from '../../../Constant/constants';
import Slider from "../../../SectionCommon/Slider/Slider"
import { SwiperSlide } from 'swiper/react';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
const CategoryTheme1 = ({ children }) => {
  const data = children;

  let styles = {
    MainCategoryWrapper: data?.custom_section_editable[0]?.style,
    CategoryFirst: data.custom_section_editable[1].style,
    ImageContainer1: data.custom_section_editable[2].style,
    CategoryImage: data.custom_section_editable[3].style,
    h2: data.custom_section_editable[4],
    MainImage: data.custom_section_editable[5].style,

    gridCount: data.style,
    ObjectView: data.style.desktop.objectView
  }

  const navigate = useAppNavigate();

  const OnClickHandle = (item) => {
    if (item?.isPageExists) {
      if (item?.category_level === 0) {
        navigate(`/category/${item?.slug}`);
      }
      else if (item?.category_level === 1) {
        navigate(`/category/${item?.categoryId?.slug}/${item?.slug}`);
      }
      else if (item?.category_level === 2) {
        navigate(`/category/${item?.categoryId?.slug}/${item?.subCategoryId?.slug}/${item?.slug}`);
      }
    }
    else {

    }
  }

  const FindCategoryName = (item) => {
    switch (item.category_level) {
      case 0:

        return item?.categoryName
      case 1:

        return item?.subCategoryName
      case 2:

        return item?.subSubCategoryName

      default:
        return ""

    }
  }
  return (
    <MediaGallery sectionName={"ManageCategory"} manageText={"Manage Category"} fieldName={"picture"} fieldIdLabel={"_id"} data={data} >
      {data?.data?.length ?
        <MainCategoryWrapper item={styles.MainCategoryWrapper}>
          {
            styles.ObjectView.toLowerCase() === "grid".toLowerCase() ?
              <CategoryFirst itemProp={styles.CategoryFirst} gridCount={styles.gridCount}>
                {data?.data?.length > 0 && data?.data?.map((item, key) => {
                  return (
                    <ImageContainer1 key={key} itemProp={styles.ImageContainer1} onClick={() => OnClickHandle(item)}>
                      <MainImage itemProp={styles.MainImage}>
                        <ImageElement
                          style={styles.CategoryImage}
                          src={item?.picture}
                          defaultImage={dummyImg}
                          alt={`collection_page ${key}`}
                        />
                        <Text tagType={styles?.h2?.tagType} style={styles.h2.style}
                          text={FindCategoryName(item)} />
                      </MainImage>

                    </ImageContainer1>
                  )
                })}
              </CategoryFirst> :
              <Slider {...data}>
                {data.data.length > 0 && data.data?.map((item, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <ImageContainer1 itemProp={styles.ImageContainer1} onClick={() => OnClickHandle(item)}>
                        <MainImage itemProp={styles.MainImage}>
                          <ImageElement
                            style={styles.CategoryImage}
                            src={item.picture}
                            defaultImage={dummyImg}
                            alt={`collection_page ${key}`}
                          />
                             <Text tagType={"h2"} style={styles.h2.style} text={FindCategoryName(item)} />
                        </MainImage>
                     
                      </ImageContainer1>
                    </SwiperSlide>
                  )
                })}
              </Slider>
          }
        </MainCategoryWrapper>
        :
        <RecordNotFound />
      }
    </MediaGallery>
  )
}

export default CategoryTheme1