import React from 'react'

const MailIcon = ({height,width,currentColor}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" >
            <path d="M24 4.875C24 3.56875 22.92 2.5 21.6 2.5H2.4C1.08 2.5 0 3.56875 0 4.875V19.125C0 20.4313 1.08 21.5 2.4 21.5H21.6C22.92 21.5 24 20.4313 24 19.125V4.875ZM21.6 4.875L12 10.8125L2.4 4.875H21.6ZM21.6 19.125H2.4V7.25L12 13.1875L21.6 7.25V19.125Z" fill={currentColor} />
        </svg>
    )
}

export default MailIcon