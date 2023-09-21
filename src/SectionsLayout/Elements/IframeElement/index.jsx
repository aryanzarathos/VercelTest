import React from 'react'
import ImageEditor from '@/CommonComponents/ImageEditor'

const IframeElement = ({ mapSrc, style, index, customFrame, ...rest }) => {

    return (
        <>
            {

                customFrame ?
                    (
                        <ImageEditor index={index}>
                            <iframe src={mapSrc}></iframe>
                        </ImageEditor>
                    ) :
                    <iframe src={mapSrc}></iframe>
            }
        </>
    )
}

export default IframeElement