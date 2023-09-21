import React from 'react';
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';

const BookAppointment = ({ style, onClickHandle }) => {
    console.log(style, "style")

    return (
        <ButtonElement style={style?.styles}
            text={style?.text} onClick={onClickHandle} />

    )
}

export default BookAppointment
