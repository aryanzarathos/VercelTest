import React from 'react';
import ImageEditor from '@/CommonComponents/ImageEditor'
import { Iframe, MapContainer } from './mapStyle'
import ImageElement from '../ImageElement/ImageElement';

const Map = ({ mapSrc, style, index, customFrame, ...rest }) => {
    return (
        <React.Fragment>
            {
                customFrame ? (
                    <ImageEditor index={index} >
                        <MapContainer item={style} key={mapSrc} >
                            {
                                 mapSrc ?
                            <Iframe src={mapSrc} loading="lazy" item={style} allowfullscreen>
                            </Iframe> :
                            <ImageElement  src={"https://webneed-images-uat.s3.ap-south-1.amazonaws.com/defaultMap.png"} style={style}  />
                             }
                        </MapContainer>
                    </ImageEditor>
                ) : (
                    <MapContainer item={style}>
                        {
                               mapSrc ?
                        <Iframe src={mapSrc} loading="lazy" item={style}  allowfullscreen>
                        </Iframe>
                        : 
                        <ImageElement  src={"https://webneed-images-uat.s3.ap-south-1.amazonaws.com/defaultMap.png"} style={style}  />
}
                    </MapContainer>
                )
            }
        </React.Fragment>
    )
}

export default Map