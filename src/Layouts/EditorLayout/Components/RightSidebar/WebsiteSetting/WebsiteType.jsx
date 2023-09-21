import React, { useState } from 'react'
import styled from 'styled-components';
import CheckIcon from "../../../../../Assets/SiteEditor/images/Icons/Icon-check.jpg"
// import CheckIcon from "../../../../../Assets/SiteEditor/Icons/Reposition/Icon-checked.svg"

const SocialMediaContainer = styled.div`
    .socialMediaTitleText{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
    }
`
const CardWrap = styled.div`
    cursor: pointer;
    margin-bottom:16px;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 8px;
    &.ActivePage{
        border: 1px solid #0184FF;
    }
`
const CardBody = styled.div`
    padding:12px;
    display: flex;
    align-items: flex-start;
    gap: 5px;
`
const IconWrap = styled.div`
    height: 18px;
    width: 18px;
`
const SelectIcon = styled.i`
    background: url(${({ itemProp }) => itemProp.src}) no-repeat center;
    display: block;
    height: 100%;
    width: 100%;
`

const WebsiteType = () => {

    const [SelectPages, setSelectPages] = useState(false)

    const SelectPageshandle = (val) => {
        setSelectPages(SelectPages === val ? true : val)
    }
    return (
        <SocialMediaContainer className={`socialMediaContainer`}>
            <p className={`${`socialMediaTitleText`} w-400 base mb-15`}>Select the type of Website you would like to build.</p>
            <CardWrap className={SelectPages === 1 ? "ActivePage" : ""} onClick={() => SelectPageshandle(1)}>
                <CardBody>
                    {
                        SelectPages === 1 && (
                            <IconWrap>
                                <SelectIcon itemProp={CheckIcon}></SelectIcon>
                            </IconWrap>
                        )
                    }
                    <div>
                        <h5 className="text-2xs base w-600 mb-3">Multipage</h5>
                        <p className="socialMediaTitleText base">Suaitable for small websites</p>
                    </div>
                </CardBody>
            </CardWrap>
            <CardWrap className={SelectPages === 2 ? "ActivePage" : ""} onClick={() => SelectPageshandle(2)}>
                <CardBody>
                    {
                        SelectPages === 2 && (
                            <IconWrap>
                                <SelectIcon itemProp={CheckIcon}></SelectIcon>
                            </IconWrap>
                        )
                    }
                    <div>
                        <h5 className="text-2xs base w-600 mb-3">Single Page</h5>
                        <p className="socialMediaTitleText base">Suaitable for small websites</p>
                    </div>
                </CardBody>
            </CardWrap>
        </SocialMediaContainer>
    )
}

export default WebsiteType