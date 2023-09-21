import React from 'react'
import { CategoryWrapper, ServicesCategoryThememain, ServicesCategoryThememaingrid } from './Servicetheme2.style'
import { SwiperSlide } from "swiper/react";
import Slider from '../../../SectionCommon/Slider/Slider';
import ServiceCategory from './ServiceCategoryTheme2';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const ServiceCategoryTheme2 = ({ children }) => {
    const data = children;
    const history = useAppNavigate();
    const sectiontype = data.style.desktop.objectView
    let styles = {
        CategoryWrapper: data.custom_section_editable[0].style,
        componentContainer: data.custom_section_editable[1].style,
        ImageContainer1: data.custom_section_editable[2].style,
        CategoryImage: data.custom_section_editable[3].style,
        h2: data.custom_section_editable[4].style,

        MainImage: data.custom_section_editable[5].style,
        sliderstyle: data.custom_section_editable[6].style,
        para: data.custom_section_editable[7].style,
        gridSection: data.custom_section_editable[8].style,
        gridCount: data.style,


    }

    const serviceCategoryHandle = (slug) => {
        history(`/service-category-details/${slug}`)
    }


    // console.log(styles.gridCount, "gridcount")
    return (
        <React.Fragment>
            <MediaGallery manageText={"Manage Categories"} sectionName={"ManageServiceCategories"} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data}>
                {data.data.length ?
                    <CategoryWrapper item={styles.CategoryWrapper}>
                        {
                            sectiontype.toLowerCase() === "slider" ?
                                <ServicesCategoryThememain
                                    itemProp={styles.componentContainer}
                                >
                                    <Slider  {...data}>
                                        {data.data.length > 0 && data.data?.map((item, key) => {
                                            return (
                                                <SwiperSlide key={key}>
                                                    <ServiceCategory styles={styles} item={item} selectCategoryHandle={(val) => serviceCategoryHandle(val)} />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Slider>

                                </ServicesCategoryThememain>
                                :
                                <ServicesCategoryThememaingrid itemProp={styles.gridSection} gridCount={styles.gridCount}>
                                    {data.data.length > 0 && data.data?.map((item, key) => {
                                        return (
                                            <ServiceCategory styles={styles} item={item} key={key} selectCategoryHandle={(val) => serviceCategoryHandle(val)} />
                                        )
                                    })}
                                </ServicesCategoryThememaingrid>
                        }
                    </CategoryWrapper>
                    :
                    <RecordNotFound />
                }

            </MediaGallery>
        </React.Fragment>

    )
}

export default ServiceCategoryTheme2