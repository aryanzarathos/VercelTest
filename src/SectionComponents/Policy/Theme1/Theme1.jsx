import React, { useState, useEffect } from 'react'
import PolicyContent from '../PolicyContent/PolicyContent';
import { AppLink, PolicyForwrdIcon, SubLeftContainer, SubRightContainer, TermConditionsMainContainer, TermConditionsSubContainer, Timeline, TimelineLists } from './PolicyTheme1.style';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import ForwardIcon from "../../../Assets/SectionComponent/Icons/forwardIcon.svg";



const PolicyTheme1 = ({ children }) => {
    const data = children;
    // const history = useHistory();
    const [currentTab, setCurrentTab] = useState('Terms of Service');

    const getCurrentTab = (currentTab) => {
        setCurrentTab(currentTab);
    }
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const policyData = [
        {
            TimeLineTitleList: ['Terms of Service', 'Genral Instructions', 'Your Rights', 'Copyright Policy', 'Relationship Guidelines', 'Liability Policy', 'Legal terms', 'Shipping Policy'],

            timeLineContent: [
                {
                    id: 0,
                    timeLineHeading: 'Terms of Service',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },
                {
                    id: 1,
                    timeLineHeading: 'Genral Instructions',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },
                {
                    id: 2,
                    timeLineHeading: 'Your Rights',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },
                {
                    id: 3,
                    timeLineHeading: 'Copyright Policy',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },

                {
                    id: 4,
                    timeLineHeading: 'Relationship Guidelines',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },

                {
                    id: 6,
                    timeLineHeading: 'Liability Policy',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },

                {
                    id: 7,
                    timeLineHeading: 'Legal terms',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },

                {
                    id: 8,
                    timeLineHeading: 'Shipping Policy',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. '
                },


            ]
        }
    ]
    let styles = {
        TermConditionsMainContainer: data?.custom_section_editable[0]?.style,
        TermConditionsSubContainer: data?.custom_section_editable[1]?.style,
        SubLeftContainer: data?.custom_section_editable[2]?.style,
        Timeline: data?.custom_section_editable[3]?.style,
        TimelineLists: data?.custom_section_editable[4]?.style,
        TimelineLink: data?.custom_section_editable[5]?.style,
        ForwardIcon: data?.custom_section_editable[6]?.style,
        SubRightContainer: data?.custom_section_editable[7]?.style,

    }
    return (
        <TermConditionsMainContainer item={styles?.TermConditionsMainContainer}>
            {/* <div className={`${windowSize.width < 767 ? "ActiveMobile" : ""}`}> */}
            <TermConditionsSubContainer item={styles?.TermConditionsSubContainer} >
                {
                    policyData.map(({ TimeLineTitleList, timeLineContent }, index) => {
                        return (
                            <React.Fragment key={index} >

                                <SubLeftContainer item={styles?.SubLeftContainer}>
                                    <Timeline item={styles?.Timeline}>
                                        {
                                            TimeLineTitleList.map((data, index) => (
                                                <React.Fragment key={index}>
                                                    {
                                                        windowSize.width > 767 ? (
                                                            <TimelineLists currentTab={currentTab}
                                                                data={data} onClick={() => getCurrentTab(data)}
                                                                item={styles?.TimelineLists}>{data}</TimelineLists>
                                                        ) : (
                                                            // <AnchorElement link={`/policyContent/${index}`} 
                                                            //         style={styles?.TimelineLink}>
                                                            //             {data}
                                                            //             </AnchorElement>
                                                            <TimelineLists currentTab={currentTab}
                                                                data={data}
                                                                onClick={() => getCurrentTab(data)}
                                                                item={styles?.TimelineLists} itemForwardSvg={styles?.ForwardIcon}>

                                                                <AnchorElement link={`/policyContent/${index}`} style={styles?.TimelineLink} >
                                                                    {data}
                                                                </AnchorElement>
                                                                <ForwardIcon />
                                                            </TimelineLists>
                                                        )
                                                    }
                                                </React.Fragment>
                                            ))

                                        }
                                    </Timeline>
                                </SubLeftContainer>
                                <SubRightContainer item={styles?.SubRightContainer}>
                                    {
                                        windowSize.width > 767 ? (
                                            timeLineContent.filter((item) => item.timeLineHeading === currentTab).map(({ id, timeLineHeading, timelineContent }) => (
                                                <>
                                                    <PolicyContent
                                                        data={data}
                                                        id={id}
                                                        timeLineHeading={timeLineHeading}
                                                        timelineContent={timelineContent}
                                                    />
                                                </>
                                            ))
                                        ) : ""
                                    }
                                </SubRightContainer>
                            </React.Fragment>
                        )
                    })

                }
            </TermConditionsSubContainer>
            {/* </div> */}
        </TermConditionsMainContainer >
    )
}

export default PolicyTheme1