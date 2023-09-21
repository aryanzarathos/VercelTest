import React, { useRef } from 'react';
import Image from 'next/image';
import SwitchDesignTemplate from "../../../../../Assets/SiteEditor/images/WebsiteDesign/SwitchDesign.jpg"
import styled from 'styled-components';
import SwitchtemplatePopup from './SwitchtemplatePopup';

const SwitchDesignWrapper = styled.div`
    h2{
        font-size: 14px;
        line-height: 21px;
    }
`
const TemplateDesignWrap = styled.div`
    position:relative;
    height: 144.2px;
`

const Switchtemplate = () => {
    const SwitchTemplateRef = useRef();

    const SwitchOpenHandle = () => {
        SwitchTemplateRef.current.open()
    }
    const SwitchCloseHandle = () => {
        SwitchTemplateRef.current.close()
    }
    
    return (
        <SwitchDesignWrapper>
            <TemplateDesignWrap className="mb-5">
                <Image
                    src={SwitchDesignTemplate}
                    alt="switch design"
                    sizes="100vw"
                    fill
                />
            </TemplateDesignWrap>
            <h5 className="text-2xs primary mb-15">Greenville</h5>
            <h2 className="base capitalize w-600 mb-3">Switch template</h2>
            <p className="mb-20 text-3xs">Switch website template if you want to start using
                anotherone. All text content and images will be
                saved.
            </p>

            <button className="button btn-o-gray btn-xs rounded-5" onClick={SwitchOpenHandle}>Switch Template</button>
            <SwitchtemplatePopup SwitchTemplateRef={SwitchTemplateRef} onClose={SwitchCloseHandle}/>
        </SwitchDesignWrapper>
    )
}

export default Switchtemplate