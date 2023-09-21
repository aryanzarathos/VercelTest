import React from 'react';
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';

const BookAppointment3 = ({ style, onClickHandle }) => {

    return (
        <ButtonElement style={style?.styles}
            text={style?.text} onClick={onClickHandle} />

    )
}

export default BookAppointment3
