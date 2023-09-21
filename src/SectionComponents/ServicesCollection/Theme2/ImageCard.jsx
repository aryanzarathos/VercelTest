import React from 'react'
import { ImageContainer1, MainImage } from './ServicesCollectionStyle'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Text from "@/SectionsLayout/Elements/TextElement/Text"
import { dummyImg } from '@/Constant/constants';

const ImageCard = ({ styles, item, selectCollectionhandle }) => {

    return (
        <ImageContainer1 itemProp={styles.ImageContainer1} onClick={() => selectCollectionhandle(item.urlSlug)}>
            <MainImage itemProp={styles.MainImage}>
                <ImageElement
                    style={styles.CategoryImage}
                    src={item.image}
                    alt={item.image}
                    defaultImage={dummyImg}
                />
                <Text tagType={item.type} style={styles.h2} text={item.name} />
            </MainImage>

        </ImageContainer1>
    )
}

export default ImageCard