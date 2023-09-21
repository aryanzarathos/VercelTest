import React from 'react'
import { useState } from "react";
// import Image1 from '../../Assets/Images/Popup/popupcross.png';
import data from '../AddressData.json'
import { Address, AddressContainer, BtnEdit, BtnEditRemove, BtnRemove, Detail, HeaderItem, HeaderText, InputRadio, Mobile, Name, PopUpItem } from './PopUpAddressTheme2.style';


const PopupTheme2 = () => {


    const [activeTab, setActiveTab] = useState(false);
    const [activeTab1, setActiveTab1] = useState('BtnEditRemove');

    const handleActive = (index) => {
        setActiveTab(index)
        setActiveTab1('show')
    }

    return (
        <PopUpItem>
            <HeaderItem>
                <HeaderText>Change Delivery Address</HeaderText>
            </HeaderItem>
            {data.map((e, index) => {
                return (
                    <label htmlFor={e.id} key={index}>
                        <AddressContainer className={`${"AdressContainer"} ${activeTab === e.id && ('active')}`}
                            key={e.id} onClick={() => handleActive(e.id)}>
                            <InputRadio type="radio" name='radio' id={e.id} />
                            <Detail>
                                <Name>{e.name}</Name>
                                <Address>{e.address}</Address>
                                <Mobile>Mobile: {e.mobileNo}</Mobile>
                                <BtnEditRemove className={activeTab === e.id ? 'show' : ''}>
                                    <BtnEdit>EDIT</BtnEdit>
                                    <BtnRemove>REMOVE</BtnRemove>
                                </BtnEditRemove>
                            </Detail>
                        </AddressContainer>
                    </label>
                )
            })}
        </PopUpItem>
    )
}

export default PopupTheme2;