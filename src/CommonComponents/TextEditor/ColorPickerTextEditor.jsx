import React, { forwardRef } from 'react';
import styled from "styled-components";
import ColorPicker from "react-best-gradient-color-picker";
import { addMarkData, activeMark } from '../EditorWork/SlateEditor/utils/SlateUtilityFunctions.js'
import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { DragTarget } from '../DragDrop/DragTarget.jsx';
import { DragItem } from '../DragDrop/DragItem.jsx';
import InputColorPicker from '../ColorPicker/index.jsx';

const CustomColorPickerWraper = styled.div`
  border: 1px solid rgba(32, 32, 32, 0.2);
  border-radius: 8px;
  width: fit-content;
  padding: 10px;
  margin-top: 10px;
  background: #FFFFFF;
  z-index:99;
  .ColorPicker{
    margin: 0 auto 10px ;
    z-index:99;
  }
`;
const CustomHead = styled.div`
  background: #FFFFFF;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
  display:flex;
  justify-content:space-between;
  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  button{
    border:none;
    background:transparent;
  }
`;
const ColorPickerTextEditor = ({ format, editor, onclose, selection, title, ...props }, ref) => {

  const changeColor = (value) => {
    // selection && Transforms.select(editor, selection)
    // selection && ReactEditor.focus(editor);
    addMarkData(editor, { format, value: value })
  }
  const ClosePicker = () => {
    onclose()
  }

  return (
    <>
      <InputColorPicker
        ref={ref}
        onclose={ClosePicker}
        handleChange={changeColor}
        value={activeMark(editor, format)}
      />
      {
        //   <DragTarget>
        //   <DragItem>
        //     <CustomColorPickerWraper ref={ref}>
        //       <CustomHead>
        //         <h5>{title ? title : "Pick Color"}</h5>
        //         <button onClick={ClosePicker}>&#10006;</button>
        //       </CustomHead>
        //       <ColorPicker
        //         onChange={changeColor}
        //         className="ColorPicker"
        //         value={activeMark(editor, format)}
        //         {...props}
        //       />
        //     </CustomColorPickerWraper>
        //   </DragItem>
        // </DragTarget>
      }
    </>
  )
}

export default forwardRef(ColorPickerTextEditor);
