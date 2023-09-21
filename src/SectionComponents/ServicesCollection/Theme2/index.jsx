import React from 'react';
import { SwiperSlide } from "swiper/react";
import Slider from '../../../SectionCommon/Slider/Slider';
import { ServiceCollectionWrapper, ServicesCategoryFirst, ServicesCategoryThememaingrid } from './ServicesCollectionStyle';
import ImageCard from './ImageCard';
import MediaGallery from '@/CommonComponents/MediaGalleryEditor';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const ServiceCategoriesTheme2 = ({ children }) => {
    const data = children;
    const sectiontype = data.style.desktop.objectView;
    const history = useAppNavigate();

    let styles = {
        ServiceCollectionWrapper: data.custom_section_editable[0].style,
        componentContainer: data.custom_section_editable[1].style,
        ImageContainer1: data.custom_section_editable[2].style,
        CategoryImage: data.custom_section_editable[3].style,
        h2: data.custom_section_editable[4].style,
        MainImage: data.custom_section_editable[5].style,
        sliderstyle: data.custom_section_editable[6].style,
        gridSection: data.custom_section_editable[7].style,
        gridCount: data.style,
    }

    const categoryhandle = (slug) => {

        history(`/service-collection-details/${slug}`)
    }




    return (
        <React.Fragment>
            <MediaGallery manageText={"Manage Collections"} sectionName={"ManageServiceCollections"} fieldName={"image"} fieldIdLabel={"_id"} data={data}>
                <>
                    {data.data.length ?
                        <ServiceCollectionWrapper item={styles.ServiceCollectionWrapper}>
                            {sectiontype.toLowerCase() === "slider".toLowerCase() ?
                                <ServicesCategoryFirst
                                    itemProp={styles.componentContainer}
                                >
                                    <Slider {...data}>
                                        {data.data.length > 0 && data.data?.map((item, key) => {
                                            return (
                                                <SwiperSlide key={key}>
                                                    <ImageCard styles={styles} item={item} data={data} selectCollectionhandle={(val => categoryhandle(val))} />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Slider>
                                </ServicesCategoryFirst> :

                                <ServicesCategoryThememaingrid itemProp={styles.gridSection} gridCount={styles.gridCount} >
                                    {data.data.length > 0 && data.data?.map((item, key) => {
                                        return (
                                            <SwiperSlide key={key}>
                                                <ImageCard styles={styles} item={item} key={key} data={data} selectCollectionhandle={(val => categoryhandle(val))} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </ServicesCategoryThememaingrid>

                            }
                        </ServiceCollectionWrapper>
                        :
                        <RecordNotFound />
                    }
                </>
            </MediaGallery>
        </React.Fragment >


    )
}

export default ServiceCategoriesTheme2