import React from 'react'
import { CategoryFirst, ImageContainer1, MainCategoryWrapper, MainImage } from "./CollectionTheme11.style";
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import useAppNavigate from '../../../CustomHooks/useAppNavigate';
import { dummyImg } from '../../../Constant/constants';
import Slider from "../../../SectionCommon/Slider/Slider"
import { SwiperSlide } from 'swiper/react';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
const CollectionTheme11 = ({ children }) => {
    const data = children;


    let styles = {
        MainCategoryWrapper: data?.custom_section_editable[0]?.style,
        CategoryFirst: data.custom_section_editable[1].style,
        ImageContainer1: data.custom_section_editable[2].style,
        CategoryImage: data.custom_section_editable[3].style,
        h2: data.custom_section_editable[4],
        MainImage: data.custom_section_editable[5].style,
        gridCount: data.style,
        ObjectView: data.style.desktop.objectView,
    }


    const navigate = useAppNavigate();

    const OnClickHandle = (item) => {
        if (item?.isPageExists) {
            navigate(`/collection/${item?.slug}`);
        }
        else {

        }
    }

    console.log(styles.ObjectView, "grid view collections")

    return (
        <>
            <MediaGallery arrayofImages={true} fieldName={"picture"} fieldIdLabel={"_id"} sectionName={"ManageCollections"} manageText={"Manage Collection"} data={data} >
                {data.data.length ?
                    <MainCategoryWrapper item={styles.MainCategoryWrapper}>
                        {
                            styles.ObjectView.toLowerCase() === "grid" ?
                                <CategoryFirst itemProp={styles.CategoryFirst} gridCount={styles.gridCount}>
                                    {data.data.length > 0 && data.data?.map((item, key) => {
                                        return (
                                            <ImageContainer1 key={key} itemProp={styles.ImageContainer1} onClick={() => OnClickHandle(item)}>
                                                <MainImage itemProp={styles.MainImage}>
                                                    <ImageElement
                                                        style={styles.CategoryImage}
                                                        src={item?.picture && item?.picture[0]}
                                                        defaultImage={dummyImg}
                                                        alt={`collection_page ${key}`}
                                                    />
                                                </MainImage>
                                                <Text tagType={styles?.h2?.tagType} style={styles.h2.style}
                                                    text={item.collectionName} />
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
                                                            src={item?.picture && item?.picture[0]}
                                                            defaultImage={dummyImg}
                                                            alt={`collection_page ${key}`}
                                                        />
                                                    </MainImage>
                                                    <Text tagType={"h2"} style={styles.h2} text={item.collectionName} />
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
        </>
    )
}

export default CollectionTheme11