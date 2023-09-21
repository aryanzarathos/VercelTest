import React from "react";
// import { NavLink } from "react-router-dom";
import { NoticeBoard } from "./NoticeTheme1.style";
import Link from "next/link";



const NoticeTheme1 = () => {
    return (
        <NoticeBoard>
            <marquee width="100%" direction="left">
                <ul>
                    <li>
                        <Link href="#" onClick={() => handleDownload(item)}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, obcaecati!
                            {/* Click Here To Apply */}
                        </Link>
                    </li>
                </ul>
            </marquee>
        </NoticeBoard>
    );
};

export default NoticeTheme1;
