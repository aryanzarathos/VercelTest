import React from 'react'
import { ServiceCaregoryWrapper, ServicesCategoryFirst, ServicesCategoryThememaingrid } from './ServiceCategories1.style';
import { SwiperSlide } from "swiper/react";
import Slider from '../../../SectionCommon/Slider/Slider';
import ServiceCategory from './ServiceCategoryFirst';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const ServiceCategoryFirst = ({ children }) => {
    const data = children;
    const sectiontype = data.style.desktop.objectView;
    const history = useAppNavigate();

    let styles = {
        ServiceCaregoryWrapper: data.custom_section_editable[0].style,
        componentContainer: data.custom_section_editable[1].style,
        ImageContainer1: data.custom_section_editable[2].style,
        CategoryImage: data.custom_section_editable[3].style,
        h2: data.custom_section_editable[4].style,
        MainImage: data.custom_section_editable[5].style,
        sliderstyle: data.custom_section_editable[6].style,
        gridSection: data.custom_section_editable[7].style,
        gridCount: data.style,
    }

    const serviceCategoryHandle = (slug) => {
        history(`/service-category-details/${slug}`)
    }


    return (
        <>
            <MediaGallery manageText={"Manage Categories"} sectionName={"ManageServiceCategories"} fieldName={"thumbnail"} fieldIdLabel={"_id"} data={data}>
                {data.data.length ?
                    <ServiceCaregoryWrapper item={styles.ServiceCaregoryWrapper}>
                        {sectiontype.toLowerCase() === "slider".toLowerCase() ?
                            <ServicesCategoryFirst
                                itemProp={styles.componentContainer}
                            >
                                <Slider {...data}>
                                    {data.data.length > 0 && data.data?.map((item, key) => {
                                        return (
                                            <SwiperSlide key={key}>
                                                <ServiceCategory styles={styles} item={item} selectCategoryHandle={(val) => serviceCategoryHandle(val)} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Slider>
                            </ServicesCategoryFirst> :
                            <ServicesCategoryThememaingrid itemProp={styles.gridSection} gridCount={styles.gridCount} >
                                {data.data.length > 0 && data.data?.map((item, key) => {
                                    return (
                                        <ServiceCategory styles={styles} item={item} key={key} selectCategoryHandle={(val) => serviceCategoryHandle(val)} />
                                    )
                                })}
                            </ServicesCategoryThememaingrid>

                        }
                    </ServiceCaregoryWrapper>
                    :
                    <RecordNotFound />
                }
            </MediaGallery>
        </>
    )
}

export default ServiceCategoryFirst;