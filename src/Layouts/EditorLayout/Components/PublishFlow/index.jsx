import React from 'react'
import PublishPopUp from './PublishPopUp/PublishPopUp'

const PublishFlow = ({ ModalsRef, onClose }) => {

    return (
        <>
            <PublishPopUp ModalsRef={ModalsRef} onClose={onClose} />
        </>
    )
}

export default PublishFlow
