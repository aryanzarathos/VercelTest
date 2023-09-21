import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import Layout1 from "../../../../../Assets/SiteEditor/images/WebsiteDesign/Layout1.jpg"
import Layout2 from "../../../../../Assets/SiteEditor/images/WebsiteDesign/Layout2.jpg"
import Layout3 from "../../../../../Assets/SiteEditor/images/WebsiteDesign/Layout3.jpg"
import Layout4 from "../../../../../Assets/SiteEditor/images/WebsiteDesign/Layout4.jpg"
import Checkicon from "../../../../../Assets/SiteEditor/images/Icons/Icon-check.png"


const Layoutdata = [
    {
        id: 1,
        url: Layout1
    },
    {
        id: 2,
        url: Layout2
    },
    {
        id: 3,
        url: Layout3
    },
    {
        id: 4,
        url: Layout4
    }
]

const HeaderWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap: 16px;

    
`
const SelectlayoutWrap = styled.div`
    position:relative;
    cursor:pointer;
    height: 144px;
    &.ActiveLayout {
        border: 2px solid #0184FF;
        border-radius: 4px;
    }
`
const SelectIcon = styled.i`
    position:absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    cursor: pointer;
    z-index: 1;
    background:url(${({itemProp}) => itemProp.src}) no-repeat center;
    height: 16px;
    width: 16px;
`




const HeaderLayout = () => {

    const [selectLayout, setSelectlayout] = useState(1)

    const selectlayoutHandle = (index) => {
        // //// console.log(index,"index")
        setSelectlayout(selectLayout === index ? selectLayout : index)
    }

    // //// console.log(selectLayout,"selectLayout")
    return (
        <HeaderWrapper>
            {
                Layoutdata.map((item, key) => {
                    return (
                        <SelectlayoutWrap className={selectLayout === item.id ? "ActiveLayout" : ""} key={key} onClick={() => selectlayoutHandle(item.id)}>
                            <Image src={item.url}
                                alt="image"
                                sizes="100vw"
                                fill 
                            />
                            {
                                selectLayout === item.id && (
                                    <SelectIcon itemProp={Checkicon}></SelectIcon>
                                )
                            }
                        </SelectlayoutWrap>
                    )
                })
            }
        </HeaderWrapper>
    )
}

export default HeaderLayout