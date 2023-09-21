import React from 'react'
import { ImageContainer1, MainImage } from './Servicetheme2.style'
import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import { dummyImg } from '@/Constant/constants';

const ServiceCategory = ({ styles, item, selectCategoryHandle }) => {
    return (
        <>
            <ImageContainer1 itemProp={styles.ImageContainer1} onClick={() => selectCategoryHandle(item?.slug)} >
                <MainImage itemProp={styles.MainImage}>
                    <ImageElement
                        style={styles.CategoryImage}
                        src={item?.uploadefile}
                        alt={item?.uploadefile}
                        defaultImage={dummyImg}
                    />
                </MainImage>
                <Text tagType={item?.heading?.type} style={styles.h2} text={item?.main_category_name} />
                <Text tagType={item?.paragraph?.type} style={styles.para} text={item?.description} />
            </ImageContainer1>
        </>
    )
}

export default ServiceCategory