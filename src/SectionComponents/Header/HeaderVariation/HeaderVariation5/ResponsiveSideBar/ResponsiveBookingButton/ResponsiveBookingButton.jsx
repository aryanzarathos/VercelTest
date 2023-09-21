import React from 'react'
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement'

const ResponsiveBookingButton = ({ style, onClickHandle }) => {
    return (
        <>
            <ButtonElement style={style?.styles}
                text={style?.text} onClick={onClickHandle} />
        </>
    )
}

export default ResponsiveBookingButton
