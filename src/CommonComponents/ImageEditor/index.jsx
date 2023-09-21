import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import SettingIcon from "../../Assets/SiteEditor/Icons/Reposition/Icon-setting.svg";
import EditMediaPopUp from './EditMediaPopUp/index';
import ImageSettingPopUp from './ImageSettingPopUp';
import { useOutsideClick } from "rooks";
import MediaAltTextPopup from './AltTextPopUp';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION } from '@/store/reducers/SiteEditor';
import { isBrowser } from '@/CommonFunctions/isBrowser';
import AppLinkUrl from '../AppLink/AppLinkUrl';

const MainImageEditor = styled.div`
position: relative;
min-width: 1px;
padding: 10px;
height: 100%;
width: 100%;
&:after{
        content: "Click To Customize";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    transition: all .3s ease-in-out;
    opacity: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(55, 88, 249, 0.8);
    font-weight: 400;
    font-size: 24px;
    line-height: 47px;
    background:rgba(55, 88, 249, 0.1);
    border: 1px solid #3758F9;
}
&:hover:after{
opacity: 1;
}
`;
const BtnContainer = styled.div`
display:flex;
gap:14px;
flex-wrap:wrap;
position:absolute;
z-index:2;
`;
const BtnEditMedia = styled.button`
    padding: 7px 17px;
    background-color: #202020;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 5rem;
    font-family: "Poppins",sans-serif;
    transition: all .3s;
    &:hover{
        background: #3758f9;
    }
    /* &:nth-child(2){
        height:36px;
        width:36px;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        background: #202020;
        padding: 0px;
        &:hover{
        background: #3758f9;
        }
    } */
`;
const BtnEditSetting = styled.button`
height:36px;
width:36px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background: #202020;
    transition: all .3s;
    border: none;

    &:hover{
        background: #3758f9;
    }

`;
const MainBtnEdit = styled.div`
position: relative;
`;
const ImageEditor = ({ children,index }) => {
    const Setting = useRef();
    const EditMedia = useRef();
    const AltMedia = useRef();
    const selectedElementRef = useRef(null)
    const dispatch = useDispatch()
    const [selectedElement, setSelectedElement] = useState("");
    const [editMedia, setEditMedia] = useState(false);
    const [setting, setSetting] = useState(false);
    const { modalState, user } = useSelector((state) => {
    return {
      modalState: state.commonStates.modalState,
      user: state.user
    }
  })
     const {
    selectedElementActive,buttonActive
  } = useSelector((state) => state.editor.selectedIndexAndId);
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
    selectedElementData,pageId] =useTemplateData()
 useOutsideClick(selectedElementRef, () => {
    if (!modalState &&buttonActive&& `${selectedElementActive}` === `${selectedElement}`&&selectedElement!=="") {
      setSelectedElement(``)
      dispatch(SELECT_OPTION({ selectedElementActive: ``, buttonActive: false }))
      setEditMedia(false)
      setSetting(false)
    }
  })
    const closeAltText = () => {
        AltMedia.current.close();
    }

    const closeSetting = (item) => {
        setSetting(item)
    }
    useOutsideClick(Setting, () => {
        setSetting(false)
    })
    // useOutsideClick(EditMedia, () => {
    //     setEditMedia(false)
    // })
const handleSelection = () => {
    setSelectedElement(`${gridId}_${index}`)
    if (selectedElementActive !== `${gridId}_${index}`) {
      dispatch(SELECT_OPTION({ selectedElementActive: `${gridId}_${index}`, buttonActive: true }))
    }
  }

    return (
        isBrowser() && AppLinkUrl.isEditor() ?
        <React.Fragment>
              
        <MainImageEditor onClick={() => handleSelection() } ref={selectedElementRef}>
            {
                 (`${selectedElementActive}` === `${selectedElement}`&&selectedElement!=="") && <BtnContainer >
                    <MainBtnEdit ref={EditMedia}>
                        <BtnEditMedia onClick={() => { setEditMedia(!editMedia);setSetting(false) }}>Edit Media</BtnEditMedia>
                        {
                            editMedia &&
                            <EditMediaPopUp />
                        }
                    </MainBtnEdit>
                    <MainBtnEdit ref={Setting}>
                        <BtnEditSetting onClick={() => { setSetting(!setting);setEditMedia(false) }}>
                            <SettingIcon fill={'#fff'} />
                        </BtnEditSetting>
                        {
                            setting &&
                            <ImageSettingPopUp closeSetting={closeSetting} />
                        }
                    </MainBtnEdit>
                    <BtnEditMedia onClick={() => { AltMedia?.current?.open() ;setSetting(false);setEditMedia(false)}} >Edit Alt Text</BtnEditMedia>
             
                        <MediaAltTextPopup onclose={closeAltText} ref={AltMedia} />
                </BtnContainer>
            }

            {
                children
            }
        </MainImageEditor>
        
          </React.Fragment>:children
    )
}

export default ImageEditor
