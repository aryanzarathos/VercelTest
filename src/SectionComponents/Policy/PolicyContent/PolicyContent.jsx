import React, { useEffect, useState } from 'react'
import { PolicyMobileBackIcon, PolicyMobileSubContainer, PolicyMobileSubContent, PolicyMobileTopContent, PolicyMobileTopHeading, SubRightContent, SubRightTopHeading } from './PolicyContent.style';
// import { unstable_HistoryRouter } from 'react-router-dom'
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import BackwardIcon from "../../../Assets/SectionComponent/Icons/backwardIcon.svg"



const PolicyContent = ({ timeLineHeading, id, timelineContent,data }) => {
    //  const history = createBrowserHistory();

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



    const BacktoHandle = () => {
        history.push("/policy")
    }

    const policyData = [
        {
            timeLineTitleList: ['Terms of Service', 'Genral Instructions', 'Your Rights', 'Copyright Policy', 'Relationship Guidelines', 'Liability Policy', 'Legal terms', 'Shipping Policy'],

            timeLineContent: [
                {
                    id: 0,
                    timeLineHeading: 'Terms of Service',
                    timelineContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Nisi lacus sed viverra tellus in. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor. Velit aliquet sagittis id consectetur. Morbi tristique senectus et netus. Id interdum velit laoreet id donec. Sit amet dictum sit amet justo donec enim. Dui nunc mattis enim ut tellus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nibh tellus molestie nunc non. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt ornare massa. Adipiscing commodo elit at imperdiet dui.Nunc faucibus a pellentesque sit amet porttitor eget dolor.'
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
        SubRightTopHeading: data?.custom_section_editable[8]?.style,   
        SubRightContent: data?.custom_section_editable[9]?.style,   
        SubRightContentText: data?.custom_section_editable[10]?.style,   
        PolicyMobileTopContent: data?.custom_section_editable[11]?.style,   
        BackwardIcon: data?.custom_section_editable[12]?.style,   
        PolicyMobileTopHeading: data?.custom_section_editable[13]?.style,   
        PolicyMobileSubContainer: data?.custom_section_editable[14]?.style,   
        PolicyMobileSubContent: data?.custom_section_editable[15]?.style,   
    }
    return (
        <>
            <div key={id}>
                {
                    windowSize.width < 767 ? (
                        <>
                            <PolicyMobileTopContent onClick={BacktoHandle} item={styles?.PolicyMobileTopContent}
                                itemBackWardSvg={styles?.BackwardIcon} >
                                <BackwardIcon />
                                {/* <PolicyMobileTopHeading>Terms of Service</PolicyMobileTopHeading> */}
                                <Text tagType={data?.custom_section_editable[13]?.tagType}
                                    style={styles?.PolicyMobileTopHeading} text={"Terms of Service"}/>
                            </PolicyMobileTopContent>
                            <PolicyMobileSubContainer item={styles?.PolicyMobileSubContainer}>
                                <Text tagType={data?.custom_section_editable[15]?.tagType}
                                    style={styles?.PolicyMobileSubContent}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis. Pretium fusce id velit ut. Justo donec enim diam vulputate. Neque laoreet suspendisse interdum consecteturAc turpis egestas maecenas pharetra convallis posuere. Lorem ipsum dolor sit amet consectetur. Cursus turpis massa tincidunt dui ut ornare lectus sit. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum mattis"}
                                />
                               
                            </PolicyMobileSubContainer>
                        </>
                    ) : (

                        <>
                                {/* <SubRightTopHeading item={styles?.SubRightTopHeading}>
                                    {timeLineHeading}
                                    </SubRightTopHeading> */}
                                <Text tagType={data?.custom_section_editable[8]?.tagType}
                                    style={styles?.SubRightTopHeading} text={timeLineHeading} />
                            <SubRightContent item={styles?.SubRightContent}>
                                    <Text tagType={data?.custom_section_editable[10]?.tagType}
                                        style={styles?.SubRightContentText}
                                        text={timelineContent} />
                                {/* <p>
                                    {timelineContent}
                                </p> */}
                            </SubRightContent>
                        </>
                    )
                }


            </div>
        </>
    )
}

export default PolicyContent