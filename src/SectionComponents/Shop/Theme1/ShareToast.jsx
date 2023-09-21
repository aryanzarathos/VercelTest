import React from 'react'
import { styled } from 'styled-components'
import Email from "../../../Assets/SectionComponent/Icons/email.svg";
import Facebook from "../../../Assets/SectionComponent/Icons/facebook-icon.svg";
import Twiter from "../../../Assets/SectionComponent/Icons/twiter-icon.svg";
import Copy from "../../../Assets/SectionComponent/Icons/copyChain.svg";
import AnchorElement from '@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import useShare from '@/CustomHooks/useShare';

const ShareToastContainer = styled.div`
        position: absolute;
        top: 100%;
        left: -4px;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: #FFFFFF;
        align-items: center;
        min-width: 27px;
        max-width: 27px;
        padding: 4px 3px;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 4px;
`;


const ShareToast = ({ outsideRef }) => {
    const [shareUrl, copyToClipBoard, copySuccess] = useShare("", "")

    const HandleShare = (e) => {
        e.stopPropagation();
    }
    return (
        <ShareToastContainer ref={outsideRef} onClick={HandleShare}>
            <AnchorElement
                link={`mailto:info@example.com?subject=&cc=&bcc=&body=${encodeURIComponent(shareUrl)}%0A`}
                onClick={(e) => HandleShare(e)}
                title="Email"
            >
                <Email
                    height={19}
                    width={19}
                />
            </AnchorElement>
            <AnchorElement
                link={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => HandleShare(e)}
                title="Facebook"
            >
                <Facebook
                    height={19}
                    width={19}
                />
            </AnchorElement>
            <AnchorElement
                link={`https://twitter.com/intent/tweet?url=${shareUrl}&text=`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => HandleShare(e)}
                title="Twiter"
            >
                <Twiter
                    height={19}
                    width={19}
                />
            </AnchorElement>
            <AnchorElement
                ref={outsideRef}
                onClick={() => copyToClipBoard()}
                title="Copy"
            >
                <Copy
                    height={19}
                    width={19}
                />
            </AnchorElement>
        </ShareToastContainer>
    )
}

export default ShareToast