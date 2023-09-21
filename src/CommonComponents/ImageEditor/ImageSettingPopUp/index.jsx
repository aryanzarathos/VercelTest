import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import CloseIcon from "../../../Assets/SiteEditor/Icons/closeIcon.svg"
import SelectDropDown from '@/CommonComponents/SelectDropdown';
import SwitchButton from '@/CommonComponents/SwitchButton';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_BUTTON, UPDATE_BUTTON_DATA } from '@/store/reducers/websiteTemplate';
import { UPDATE_SELECTED_ELEMENT } from '@/store/reducers/SiteEditor';
import { updateButtonElement } from '@/store/actions/siteEditor';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { isBrowser } from '@/CommonFunctions/isBrowser';
const MainEditPopUp = styled.div`
padding:16px;
background:#fff;
width:316px;
position: absolute;
z-index: 4;
border-radius: 8px;
top: 60px;
box-shadow: 2px 5px 10px 0px rgba(32, 32, 32, 0.25);

`;
const SettingHeadingWrapper = styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
gap:10px;
padding-bottom: 12px;
border-bottom: 1px solid rgba(234, 234, 234, 1);
`;
const SettingHeadingWrapperButton = styled.button`
background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
`;
const SettingHeadingWrapperP = styled.p`
  font-family: "Poppins";
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`;
const BorderRadiusWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
justify-content:space-between;
width:100%;
align-items:center;
gap:10px;
margin-top: 12px;

`;
const BorderRadiusWrapperP = styled.p`
font-family: "Poppins";
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`;
const NumberValue = styled.div`
position: relative;
height: 33px;
`;
const NumberValueP = styled.p`
  position: absolute;
    top: 9px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    right: 15px;
    color: rgba(120, 120, 120, 1);
`;
const NumberValueInput = styled.input`
    width: 100%;
    background: #FCFCFC;
    color: rgba(32, 32, 32, 1);
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding: 6px 35px 6px 12px ;
    border: 1.5px solid #ECECEC;
    border-radius: 6px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    
}
`;

const ObjectFitWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
justify-content:space-between;
width:100%;
align-items:center;
gap:10px;
margin-top: 12px;
`;
const ObjectFitWrapperP = styled.p`
font-family: "Poppins";
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`;
const PositionWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
justify-content:space-between;
width:100%;
align-items:center;
gap:10px;
margin-top: 12px;
`;
const PositionWrapperP = styled.p`
font-family: "Poppins";
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`;

const TumbnailSwitch = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
width: 100%;
align-items: center;
margin-bottom: 16px;
&:last-child{
    margin-bottom: 0;
}
p{
    color: #202020;
    font-family: 'Poppins',sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    
}
`;

const VideoWrapper = styled.div`
    border-top: 1px solid #EAEAEA;
    margin-top: 12px;
    padding-top: 12px;
`

const ImageSettingPopUp = ({ closeSetting, type }) => {

    const dispatch = useDispatch();

    const debouncedAppearance = useDebounceFunction(
        (callback) => callback(),
        1000
    );

    const Values = ["Fill", "Cover", "Contain"];
    const PositionValue = ["Center Center", "Center Left", "Center Right", "Top Center", "Top Left", "Top Right", "Bottom Center", "Bottom Left", "Bottom Right"]

    const [border_radius, setborder_radius] = useState("");
    const [objectFit, setObjectFit] = useState("Fill");
    const [position, setPosition] = useState("Center Center");

    const [videoSettings, setVideoSettings] = useState({
        controls: true,
        muted: true,
        autoPlay: false,
        loop: true
    });
    ;

    const [mainContainerId,
        mainContainerIndex,
        mainContainerData,
        subcontainerId,
        subcontainerIndex,
        subcontainerData,
        sectionId,
        sectionIndex,
        sectionData,
        gridId,
        gridIndex,
        gridData,
        selectedElementId,
        selectedElementIndex,
        selectedElementData, pageId] = useTemplateData()

    useEffect(() => {
        if (selectedElementData) {
            setborder_radius(selectedElementData?.style?.["desktop"]?.borderRadius?.borderTopLeftRadius.split("px")[0]);
            setObjectFit(selectedElementData?.style?.["desktop"]?.objectFit);
            setPosition(selectedElementData?.style?.["desktop"]?.objectPosition);
            setVideoSettings(selectedElementData?.videoSetting)
        }

    }, [selectedElementData])

    const selectBorderRadius = (val) => {
        setborder_radius(val);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        let data = {
            desktop: {
                ...gridData.data[selectedElementIndex]["style"].desktop,
                borderRadius:
                {
                    borderTopLeftRadius: `${val}px`,
                    borderTopRightRadius: `${val}px`,
                    borderBottomLeftRadius: `${val}px`,
                    borderBottomRightRadius: `${val}px`,
                }
                ,
            },
            mobile: {
                ...gridData.data[selectedElementIndex]["style"].mobile,
                borderRadius:
                {
                    borderTopLeftRadius: `${val}px`,
                    borderTopRightRadius: `${val}px`,
                    borderBottomLeftRadius: `${val}px`,
                    borderBottomRightRadius: `${val}px`,
                },
            },
            tablet: {
                ...gridData.data[selectedElementIndex]["style"].tablet,
                borderRadius:
                {
                    borderTopLeftRadius: `${val}px`,
                    borderTopRightRadius: `${val}px`,
                    borderBottomLeftRadius: `${val}px`,
                    borderBottomRightRadius: `${val}px`,
                },
            },
        };
        // Create a new object with the updated property value
        const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
        // Create a new array with the updated object
        const updatedData = [
            ...gridPayload.slice(0, selectedElementIndex),
            updatedObject,
            ...gridPayload.slice(selectedElementIndex + 1),
        ];
        // console.log(updatedObject, "line no 2221111");
        debouncedAppearance(() =>
            dispatch(
                UPDATE_BUTTON({
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    gridIndex: gridIndex,
                    selectedElementIndex: selectedElementIndex,
                    sectionIndex: sectionIndex,
                    data: updatedData[selectedElementIndex]["style"],
                })
            ),
            dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData })),
            dispatch(
                updateButtonElement({
                    pageId: pageId,
                    gridId: gridId,
                    body: { data: updatedData },
                })
            )

        );
    };

    const selectObjectFit = (val) => {
        setObjectFit(val);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        let data = {
            desktop: {
                ...gridData.data[selectedElementIndex]["style"].desktop,
                objectFit: val
                ,
            },
            mobile: {
                ...gridData.data[selectedElementIndex]["style"].mobile,
                objectFit: val
            },
            tablet: {
                ...gridData.data[selectedElementIndex]["style"].tablet,
                objectFit: val
            },
        };
        // Create a new object with the updated property value
        const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
        // Create a new array with the updated object
        const updatedData = [
            ...gridPayload.slice(0, selectedElementIndex),
            updatedObject,
            ...gridPayload.slice(selectedElementIndex + 1),
        ];
        // console.log(updatedObject, "line no 2221111");
        dispatch(
            UPDATE_BUTTON({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: updatedData[selectedElementIndex]["style"],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: updatedData },
            })
        );
    };

    const selectPosition = (val) => {
        setPosition(val);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        let data = {
            desktop: {
                ...gridData.data[selectedElementIndex]["style"].desktop,
                objectPosition: val
                ,
            },
            mobile: {
                ...gridData.data[selectedElementIndex]["style"].mobile,
                objectPosition: val
            },
            tablet: {
                ...gridData.data[selectedElementIndex]["style"].tablet,
                objectPosition: val
            },
        };
        // Create a new object with the updated property value
        const updatedObject = { ...gridPayload[selectedElementIndex], style: data };
        // Create a new array with the updated object
        const updatedData = [
            ...gridPayload.slice(0, selectedElementIndex),
            updatedObject,
            ...gridPayload.slice(selectedElementIndex + 1),
        ];
        // console.log(updatedObject, "line no 2221111");
        dispatch(
            UPDATE_BUTTON({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: updatedData[selectedElementIndex]["style"],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: updatedData[selectedElementIndex], gridData: updatedData }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: updatedData },
            })
        );
    };


    const switchHandle = (e, type) => {
        setVideoSettings({ ...videoSettings, [type]: e.target.checked })
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        let videoInputs = {
            ...gridPayload[selectedElementIndex]['videoSetting'],
            [type]: e.target.checked
        }
        gridPayload[selectedElementIndex]['videoSetting'] = videoInputs;
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }

    const [popupPosition, setPopupPosition] = useState({left: "" , right: ""});
    const popupRef = useRef(null)
    const changepopUpPosition = () => {

        let left = popupRef?.current?.getBoundingClientRect().left;
        let right = popupRef?.current.getBoundingClientRect().right;
        if (left < 100) {
            setPopupPosition({
                left: "0"
            })
        }

        if (isBrowser && (window?.innerWidth < right)) {
            setPopupPosition({
                right: "0"
            })
        }

    }
    useEffect(()=>{
        changepopUpPosition();
    })
    return (
        <MainEditPopUp ref={popupRef} style={{  left: popupPosition.left , right: popupPosition.right }}>
            <SettingHeadingWrapper>
                <SettingHeadingWrapperP>Settings</SettingHeadingWrapperP>
                <SettingHeadingWrapperButton onClick={() => closeSetting(false)}><CloseIcon /></SettingHeadingWrapperButton>
            </SettingHeadingWrapper>
            <BorderRadiusWrapper>
                <BorderRadiusWrapperP>Border Radius</BorderRadiusWrapperP>
                <NumberValue>
                    <NumberValueInput type='number' value={border_radius} onChange={(e) => selectBorderRadius(e?.target?.value)} />
                    <NumberValueP>px</NumberValueP>
                </NumberValue>
            </BorderRadiusWrapper>

            {selectedElementData?.tagType === "video" ?
                <VideoWrapper>
                    <TumbnailSwitch>
                        <p>Video AutoPlay</p>
                        <SwitchButton layout={true} onChange={(e) => switchHandle(e, "autoPlay")} checked={videoSettings?.autoPlay} />
                    </TumbnailSwitch>
                    <TumbnailSwitch>
                        <p>Mute Audio</p>
                        <SwitchButton layout={true} onChange={(e) => switchHandle(e, "muted")} checked={videoSettings?.muted} />
                    </TumbnailSwitch>
                    <TumbnailSwitch>
                        <p>Play in Loop</p>
                        <SwitchButton layout={true} onChange={(e) => switchHandle(e, "loop")} checked={videoSettings?.loop} />
                    </TumbnailSwitch>
                    <TumbnailSwitch>
                        <p>Player Control</p>
                        <SwitchButton layout={true} onChange={(e) => switchHandle(e, "controls")} checked={videoSettings?.controls} />
                    </TumbnailSwitch>

                </VideoWrapper>
                :
                <React.Fragment>
                    <ObjectFitWrapper>
                        <ObjectFitWrapperP>Object Fit</ObjectFitWrapperP>
                        <SelectDropDown
                            showValue={objectFit}
                            values={Values}
                            handleSelect={(val) => selectObjectFit(val)}
                        // value={objectFit}
                        />
                    </ObjectFitWrapper>
                    <PositionWrapper>
                        <PositionWrapperP>Position</PositionWrapperP>
                        <SelectDropDown
                            showValue={position}
                            values={PositionValue}
                            handleSelect={(val) => selectPosition(val)}
                        //    value={position} 
                        />
                    </PositionWrapper>
                </React.Fragment>
            }
        </MainEditPopUp>
    )
}

export default ImageSettingPopUp
