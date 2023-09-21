import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
// import IconDelete from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-Delete.svg";
// import IconLink from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-Link.svg";
// import IconText from "../../Assets/SiteEditor/Icons/ButtonEditor/Icon-Text.svg";
import { isBrowser } from '../../CommonFunctions/isBrowser';
import LinkDropdown from '../Dropdown/TextEditorDropDowm';
import FontSizeDropdown from './FontSizeDropdown';
import TagHandlerDopDrown from './TagHandlerDopDrown';
import { Editable, withReact, useSlate, Slate, ReactEditor } from 'slate-react'
import {
  Editor,
  createEditor,
  Element as SlateElement,
  Transforms,
  // Range
} from 'slate'
import { withHistory } from 'slate-history';
import { getMarked, getBlock, toggleMark, toggleBlock, activeMark } from '../EditorWork/SlateEditor/utils/SlateUtilityFunctions.js'
import withLinks from '../EditorWork/SlateEditor/plugins/withLinks.js';
import ColorPickerTextEditor from './ColorPickerTextEditor';
import { useOutsideClick } from 'rooks';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION } from '@/store/reducers/SiteEditor';
import { updateButtonElement } from '@/store/actions/siteEditor';
import { insertLink } from '../EditorWork/SlateEditor/utils/link';
// import FontFamilyDropdown from './FontFamilyDropdown';
import B from "../../Assets/SiteEditor/Icons/textEditor/B.svg";
import I from "../../Assets/SiteEditor/Icons/textEditor/I.svg";
import U from "../../Assets/SiteEditor/Icons/textEditor/U.svg";
import Strike from "../../Assets/SiteEditor/Icons/textEditor/strike.svg";
import AlignLeft from "../../Assets/SiteEditor/Icons/textEditor/alignLeft.svg";
import AlignCenter from "../../Assets/SiteEditor/Icons/textEditor/alignCenter.svg";
import AlignRight from "../../Assets/SiteEditor/Icons/textEditor/alignRight.svg";
import OrderList from "../../Assets/SiteEditor/Icons/textEditor/orderList.svg";
import UnorderList from "../../Assets/SiteEditor/Icons/textEditor/unorderList.svg";
import LinkIcon from "../../Assets/SiteEditor/Icons/textEditor/linkIcon.svg";
import TextBackground from "../../Assets/SiteEditor/Icons/textEditor/textBackground.svg";
import TextColor from "../../Assets/SiteEditor/Icons/textEditor/textColor.svg";
// import LineHeight from "../../Assets/SiteEditor/Icons/textEditor/lineHeight.svg";
import { UPDATE_BUTTON_DATA } from '@/store/reducers/websiteTemplate';
import LineHeightDropDown from './LineHeight';
import { updateSlide } from '@/store/actions/appearanceSettings';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import useTemplateData from '@/CustomHooks/useTemplateData';

const ParentTextEditorWraper = styled.div`
  position:relative;
  display: inline-block;
  /* transition: all ease  0.7s; */
  width: 100%;
  &.ActiveEdit{
    border-radius: 4px;
    /* padding: 8px 16px; */
    display: inline-block;
  }
`
const SlateContainer = styled.div`
  
  /* animation-name: slideLeft;
   animation-duration: 2s;

   @keyframes slideLeft {
      0% {
         margin-left: -400px;
      } 
      
      100% {
        margin-left: 0;
      }
   } */
`

const CustomizeTextEditorWrapper = styled.div`
    position: absolute;
    padding: 10px;
    background-color: #202020;
    border-radius: 5px;
    /* top: -60px; */
    left: 0;
    display: flex;
    gap: 10px;
    place-items: center;
    z-index: 9;
    min-width: 400px;
    &:after{
        content: " ";
        left: 17px;
        bottom: -8px;
        border-top:  ${({ position }) => position ? "" : "20px solid  #202020"} ;
        border-bottom:${({ position }) => position ? "20px solid  #202020" : ""} ; 
        border-right: 19px solid transparent;
        border-left: 19px solid transparent;    
        border-bottom: none;
        z-index: -1;
    }
    &:before{
        height:100%;
        width:100%;
        bottom: -16px;
        left: 0;
        background:transparent;
        z-index: -1;
    }
    .active{
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.10);
    }
`
const TextEditorWrap = styled.div`
    position:relative;  
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* padding: 10px; */
    transition: all .03s;
    border: 2px solid transparent;
    transition: all ease  0.7s;
    ul li{
      list-style-type: disc;
    }
    &.ActiveEditor{
      padding:8px 16px;
      border: 2px solid #0184FF;
      border-radius: 8px;
    }
`
const EditText = styled.div`
position:absolute; 
top: 12px;
left: 50%;
transform: translate(-50%,-50%);
z-index:1;
`
const IconBold = styled.i`
    width: 20px;
    height: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align:center;
    text-transform: capitalize;
    color: #FFFFFF;
    cursor: pointer;
    transition:all .2s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;   

`
const IconItalic = styled.i`
    width: 20px;
    height: 20px;
    font-weight: 500;
    font-size: 16px;
    text-align:center;
    line-height: 26px;
    text-transform: capitalize;
    color: #FFFFFF;
    cursor: pointer;
    transition:all .2s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
`;
const IconEighteen = styled.i`
    width: 20px;
    text-align:center;
    height: 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-transform: capitalize;
    color: #FFFFFF;
    cursor: pointer;
    transition:all .2s ease-in-out;
    &:hover{
      color:#0184FF;
    }
`
const IconLinkWrap = styled.div`
    display: flex;
    cursor: pointer;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    svg{
        fill: #fff;
        transition:all .2s ease-in-out;
    }
    &:hover{
        svg{
            fill: #0184FF;
        }
    }
`
const IconTextWrap = styled.div`
    display: flex;
    cursor: pointer;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    svg,stroke{
        fill: #fff;
        transition:all .2s ease-in-out;
    }
    &:hover{
        svg,stroke{
            fill: #0184FF;
        }
    }
`
const IconDeleteWrap = styled.div`
    display: flex;
    cursor: pointer;
    svg{
        fill: #fff;
        transition:all .2s ease-in-out;
    }
    &:hover{
        svg{
            fill: #0184FF;
        }
    }
`
const List = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    text-align:center;
    color: #FFFFFF;
    &:hover{
        background:#0184FF;   
    }
    &.active{
        background:#0184FF;   
    }
`
const FontDropdown = styled.ul`
list-style:none;
position:absolute;
top: 32px;
left:0;
width:40px;
background-color: #202020;
padding:8px 0;
`
const styledComponents = {
  IconBold: IconBold,
  IconItalic: IconItalic,
  IconEighteen: IconEighteen,
  IconLinkWrap: IconLinkWrap,
  IconTextWrap: IconTextWrap,
  IconDeleteWrap: IconDeleteWrap
};
const TextEditorWrapUL = styled.div`
ul li{
  list-style-type: disc;
  margin-left:20px
}
.link{
  a{
    pointer-events: none;
  }
}
`

const TextEditor = ({ data, index, slider, ContextChange, style, sliderKey, sliderId }) => {

  const Element = (props) => {
    return getBlock(props);
  }
  const Leaf = ({ attributes, children, leaf }) => {
    children = getMarked(leaf, children);
    return <span {...attributes}>{children}</span>
  }
  const EditButtonRef = useRef(null)
  const TextEditorLinkref = useRef();
  const bgcolorPickerRef = useRef();
  const colorPickerRef = useRef();
  const dispatch = useDispatch()

  const [selectedElementDataSlider, setSelectedElementData] = useState({})
  const [isHovering, setIsHovering] = useState(false);
  const [BackgroundFill, setBackgroundFill] = useState(false);
  const [colorFill, setColorFill] = useState(false);
  const [editTextButton, setEditTextButton] = useState(false);
  const [selection, setSelection] = useState();
  const [fontStyles, setFontStyles] = useState('bold');
  const [fontBold, setFontBold] = useState('italic');
  const [randomKey, setRandomKey] = useState("")
  const [linkPopUpOpen, setLinkPoUpOpen] = useState(false)
  const [selectedElement, setSelectedElement] = useState("")
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editor = useMemo(() => withHistory(withLinks(withReact(createEditor()))), []);
  const [value, setValue] = useState();
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
  const {
    selectedElementActive,
    buttonActive
  } = useSelector((state) => state.editor.selectedIndexAndId);
  const { websiteTemplateData } = useSelector((state) => {
    return {
      websiteTemplateData: state.websiteTemplate.getTemplate.data
    }
  })
  useEffect(() => {
    setValue(data)
  }, [data, index, slider, ContextChange])

  const debouncedApiCalling = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const handleEditorChange = (newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (editTextButton && value && !slider) {
      debouncedApiCalling(() =>
        handleSave(value)
      );
    }
  }, [value])

  const useOutsideClick = (ref, callback) => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [ref, callback]);
  };

  useOutsideClick(EditButtonRef, () => {
    if (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "" && !linkPopUpOpen) {
      setSelectedElement(``)
      if (editTextButton) {
        handleSave();
      }
      dispatch(SELECT_OPTION({ selectedElementActive: ``, buttonActive: false }))
      setEditTextButton(false);
    }
  })

  const handleSelection = () => {

    setSelectedElement(`${gridId}_${index}`)
    if (selectedElementActive !== `${gridId}_${index}`) {
      dispatch(SELECT_OPTION({ selectedElementActive: `${gridId}_${index}`, buttonActive: true }))
    }
  }

  const renderElement = useCallback(props => <Element {...props} />, [])

  const isBlockActive = (editor, format) => {

    const [match] = Editor.nodes(editor, {
      match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    })


    return !!match;
  }

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  }

  const BlockButton = ({ format, buttonClass, text }) => {
    const editor = useSlate();
    const DynamicStyledComponent = styledComponents[buttonClass];
    // console.log("line 351", format)
    return (
      <DynamicStyledComponent
        active={isBlockActive(editor, format)} format={format} onMouseDown={
          e => {
            e.preventDefault();
            toggleBlock(editor, format)
          }
        }
        onClick={() => toggleBlock(editor, format)}
      >
        {text}
      </DynamicStyledComponent>
    )
  }

  const MarkButton = ({ format, buttonClass, text }) => {
    const editor = useSlate()
    const DynamicStyledComponent = styledComponents[buttonClass];
    // console.log(format, "line 356")
    return (

      <DynamicStyledComponent
        active={isMarkActive(editor, format)} format={format} onMouseDown={
          e => {
            e.preventDefault();
            toggleMark(editor, format)
          }
        }
        onClick={() => toggleMark(editor, format)}
      >
        {text}
      </DynamicStyledComponent>
    )
  }

  const Dropdown = ({ format, options }) => {
    return (
      <FontDropdown value={activeMark(editor, format)} onChange={e => changeMarkData(e, format)}>
        {
          options.map((item, index) =>
            <List key={index} value={item.value}>{item.text}</List>
          )
        }
      </FontDropdown>
    )
  }

  const changeMarkData = (event, format) => {
    event.preventDefault();
    const value = event.target.value
    addMarkData(editor, { format, value })
  }

  const MouseOver = () => {
    setIsHovering(true)
  }

  const MouseOut = () => {
    setIsHovering(false)
  }

  function CustomizeButtonHandle() {
    setEditTextButton(!editTextButton);
    if (!editTextButton) {
      selectAll()
    } else {
      handleSave();
    }
  }

  const HandleChangeBGTextColor = () => {
    setSelection(editor.selection);
    selection && ReactEditor.focus(editor);
    setBackgroundFill(!BackgroundFill)
    setColorFill(false)
  }

  const HandleChangeTextColor = () => {
    setSelection(editor.selection);
    selection && ReactEditor.focus(editor);
    setColorFill(!colorFill)
    setBackgroundFill(false)
  }

  const TextActionHandle = () => {
    TextEditorLinkref.current.open();
    setLinkPoUpOpen(true)
  }

  const TextActionCloseHandle = () => {
    // console.log("line 426")
    TextEditorLinkref.current.close()
    setLinkPoUpOpen(false)
  }

  const addMarkData = (editor, data) => {
    Editor.addMark(editor, data.format, data.value);
  }
  useEffect(() => {
    if (gridData) {
      let data = gridData?.data?.length && gridData?.data?.find((item) => item._id === sliderId)
      setSelectedElementData(data)
    }
  }, [gridData, index])

  const handleSave = (MegaValue) => {
    if (slider) {
      let data = {
        ...selectedElementDataSlider,
        [ContextChange]: { ...selectedElementDataSlider[ContextChange], data: MegaValue ? MegaValue : value }
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: selectedElementDataSlider._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      }))
    } else {
      let gridPayload = [...gridData.data];
      const updatedObject = {
        ...gridPayload[selectedElementIndex],
        data: MegaValue ? MegaValue : value
      };
      gridPayload[selectedElementIndex] = updatedObject
      if (!MegaValue) {
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
      }

      dispatch(
        updateButtonElement({
          pageId: pageId,
          gridId: gridId,
          body: { data: gridPayload },
        })
      );
    }

  };

  const LinkSubmit = (action, pathname, urlSlug, email, telnumber, webUrl, file, actionRandom) => {

    switch (action) {
      case "Open Page":
        data = {
          action: "openpage",
          pathname: pathname,
          urlSlug: urlSlug
        }
        Transforms.select(editor, selection);
        insertLink(editor, { url: `${pathname}/${urlSlug}`, showInNewTab: false, data: data })
        break;

      case "Open web address":
        data = {
          action: "webUrl",
          webUrl: webUrl
        }
        Transforms.select(editor, selection);
        insertLink(editor, { url: webUrl, showInNewTab: true, data: data })
        break;

      case "Click to call":
        data = {
          action: "call",
          telnumber: telnumber
        }
        Transforms.select(editor, selection);
        insertLink(editor, { url: telnumber, showInNewTab: false, data: data })
        break;

      case "Send an email":
        data = {
          action: "email",
          email: email
        }
        Transforms.select(editor, selection);
        insertLink(editor, { url: email, showInNewTab: false, data: data })
        break;

      case "Download a file":
        data = {
          action: "download",
          file: file
        }
        Transforms.select(editor, selection);
        insertLink(editor, { url: file, showInNewTab: true, data: data })
        break;

      default:
        break;
    }
    TextActionCloseHandle();
  };
  const FontData = ["10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "40", "44", "48", "56", "64", "64", "128"];
  const LineHeightData = ["10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "40", "44", "48", "56"];
  const HeadingData = ["h1", "h2", "h3", "h4", "h5", "h6", "p"]
  const FamilyData = ["Sans Serif", "Serif", "MonoSpace", "Agdasima"];

  const selectAll = useCallback(() => {

    const range = { anchor: Editor?.start(editor, []), focus: Editor?.end(editor, []) };
    Transforms.select(editor, range);

  }, [editor]);

  useEffect(() => {
    setRandomKey(Math.random())
  }, [websiteTemplateData]);

  // get the pop ref
  const mainDiv = isBrowser && document.querySelector(".Theme2-style__BannerMainContainer-sc-3ea0ec80-0 ");
  const [popupPosition, setPopupPosition] = useState({ top: "-60px" });
  const popupRef = useRef(null);
  const [postionDown, setPostionDown] = useState(false)

  const changepopUpPosition = () => {
    let parentTop = mainDiv?.getBoundingClientRect().top;
    let top = editTextButton && popupRef?.current?.getBoundingClientRect().top;
    // let right = editTextButton && popupRef.current.getBoundingClientRect().right;
    if (top - parentTop < 200) {
      setPostionDown(true);
      setPopupPosition({
        top: "150%"
      })
    }
    if (top - parentTop > 201) {
      setPostionDown(false);
      setPopupPosition({
        top: "-60px"
      })
    }
  }

  useEffect(() => {
    if (editTextButton) {
      changepopUpPosition();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editTextButton])


  return (
    <>
      <SlateContainer style={{ ...style?.desktop?.margin, ...style?.desktop?.padding }}>
        <ParentTextEditorWraper key={randomKey} className={isHovering || (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "") ? "ActiveEdit" : ""} onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={handleSelection} ref={EditButtonRef}>
          {(
            <Slate editor={editor} initialValue={data} onChange={handleEditorChange} >
              <TextEditorWrap className={isHovering || (`${gridId}_${selectedElementActive}` === `${gridId}_${selectedElement}` && selectedElement !== "") ? "ActiveEditor" : ""}>
                {isHovering && <EditText className="button btn-3xs button-primary rounded-0" style={{ fontStyle: fontStyles, fontWeight: fontBold }} onClick={() => CustomizeButtonHandle()}>{editTextButton ? "Close" : "Edit"}</EditText>}
                {editTextButton && (
                  <CustomizeTextEditorWrapper style={{ top: popupPosition.top }} position={postionDown} ref={popupRef} data-test-id="menu">
                    <IconBold className={`${isMarkActive(editor, "bold") ? "active" : ""}`} active={isMarkActive(editor, "bold")} format={"bold"} onClick={() => toggleMark(editor, "bold")}
                    ><B fill={'#fff'} /></IconBold>
                    <IconItalic className={`${isMarkActive(editor, "italic") ? "active" : ""}`} active={isMarkActive(editor, "italic")} format={"italic"} onClick={() => toggleMark(editor, "italic")}><I fill={'#fff'} /></IconItalic>
                    <IconItalic className={`${isMarkActive(editor, "underline") ? "active" : ""}`} active={isMarkActive(editor, "underline")} format={"underline"} onClick={() => toggleMark(editor, "underline")}><U fill={'#fff'} /></IconItalic>
                    <IconItalic className={`${isMarkActive(editor, "strikethrough") ? "active" : ""}`} active={isMarkActive(editor, "strikethrough")} format={"strikethrough"} onClick={() => toggleMark(editor, "strikethrough")}><Strike fill={'#fff'} /></IconItalic>
                    {/* <MarkButton format="bold" text={<B fill={true ? '#0184FF' : '#fff'} />} buttonClass={"IconBold"} /> */}
                    {/* <MarkButton format="italic" text={<I fill={true ? '#0184FF' : '#fff'} />} buttonClass={"IconItalic"} /> */}
                    {/* <MarkButton format="underline" text={<U fill={true ? '#0184FF' : '#fff'} />} buttonClass={"IconItalic"} /> */}
                    {/* <MarkButton format="strikethrough" text={<Strike fill={true ? '#0184FF' : '#fff'} />} buttonClass={"IconItalic"} /> */}

                    <FontSizeDropdown editor={editor} valuesData={FontData} manage={"Size"} />
                    <TagHandlerDopDrown editor={editor} valuesData={HeadingData} manage={"Tag"} />
                    {/* {console.log(isBlockActive(editor, "alignLeft"),"line 64666666666666666666666666666666666666")} */}
                    <IconItalic className={`${isBlockActive(editor, "alignLeft") ? "active" : ""}`} active={isBlockActive(editor, "alignLeft")} format={"alignLeft"} onClick={() => toggleBlock(editor, "alignLeft")}><AlignLeft stroke={isBlockActive(editor, "alignLeft") ? '#0184FF' : '#fff'} fill={'#fff'} /></IconItalic>
                    <IconItalic className={`${isBlockActive(editor, "alignCenter") ? "active" : ""}`} active={isBlockActive(editor, "alignCenter")} format={"alignCenter"} onClick={() => toggleBlock(editor, "alignCenter")}><AlignCenter fill={'#fff'} /></IconItalic>
                    <IconItalic className={`${isBlockActive(editor, "alignRight") ? "active" : ""}`} active={isBlockActive(editor, "alignRight")} format={"alignRight"} onClick={() => toggleBlock(editor, "alignRight")}><AlignRight fill={'#fff'} /></IconItalic>

                    {/* <BlockButton format="alignLeft" text={<AlignLeft />} buttonClass={"IconItalic"} />
                    <BlockButton format="alignCenter" text={<AlignCenter />} buttonClass={"IconItalic"} />
                    <BlockButton format="alignRight" text={<AlignRight />} buttonClass={"IconItalic"} /> */}
                    <IconLinkWrap onClick={TextActionHandle}>
                      <LinkIcon />
                    </IconLinkWrap>
                    <IconTextWrap onClick={HandleChangeBGTextColor}>
                      <TextBackground />
                    </IconTextWrap>
                    <IconTextWrap onClick={HandleChangeTextColor}>
                      <TextColor />
                    </IconTextWrap>
                    <LineHeightDropDown editor={editor} valuesData={LineHeightData} manage={"lineHeight"} />
                    <IconItalic className={`${isBlockActive(editor, "orderedList") ? "active" : ""}`} active={isBlockActive(editor, "orderedList")} format={"orderedList"} onClick={() => toggleBlock(editor, "orderedList", style)}><OrderList fill={isBlockActive(editor, "orderedList") ? '#0184FF' : '#fff'} /></IconItalic>
                    <IconItalic className={`${isBlockActive(editor, "unorderedList") ? "active" : ""}`} active={isBlockActive(editor, "unorderedList")} format={"unorderedList"} onClick={() => toggleBlock(editor, "unorderedList", style)}><UnorderList fill={isBlockActive(editor, "unorderedList") ? '#0184FF' : '#fff'} /></IconItalic>
                    {/* <BlockButton format="orderedList" text={<OrderList />} buttonClass={"IconItalic"} />
                    <BlockButton format="unorderedList" text={<UnorderList />} buttonClass={"IconItalic"} /> */}
                  </CustomizeTextEditorWrapper>
                )}
                <TextEditorWrapUL>
                  <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    readOnly={editTextButton ? false : true}
                  />
                </TextEditorWrapUL>
              </TextEditorWrap>
            </Slate>
          )}
          {BackgroundFill && (
            <ColorPickerTextEditor onclose={HandleChangeBGTextColor} editor={editor} format={"bgColor"} ref={bgcolorPickerRef} selection={selection}
            />
          )}
          {colorFill && (
            <ColorPickerTextEditor editor={editor} format={"color"} ref={colorPickerRef} onclose={HandleChangeTextColor} selection={selection} />
          )}

          {isBrowser() && <LinkDropdown LinkSubmit={LinkSubmit} ModalsRef={TextEditorLinkref} onClose={TextActionCloseHandle} />}
        </ParentTextEditorWraper>
      </SlateContainer>
    </>
  );
};

export default TextEditor;
