import Image from 'next/image'
import React from 'react'
import { LoginSubmitBtn } from './SignUpLoginTheme1.style'


const Button = ({ text, disabled, loader, Cancle }) => {
    return (
        <LoginSubmitBtn>
            <button disabled={disabled} className={Cancle ? 'Cancle' : ''} > {loader ? <Image src={loader} alt="" /> : ''}{text}</button>
        </LoginSubmitBtn>
    )
}

export default Button
