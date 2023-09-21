import React,{useState} from 'react'
import styled from 'styled-components'
import ColorPicker from 'react-best-gradient-color-picker'

const CustomColorPickerWraper = styled.div`
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 8px;
    position:absolute;
    top: 51px;
    right: -134px;
    width: 100%;
    background:#F3F4F6;
    .chrome-picker {
      width: initial !important;
      background: none !important;;
      border-radius:none !important;;
      box-shadow: none !important;;
    }
    .Color_picker{
      margin:auto;
    }
`
const CustomHead = styled.div`
background-color:#F3F4F6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding:10px;
    h5{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color:#000000;
    }
`

const CustomFoot = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(32,32,32,0.1);
    width: 100%;

    button{
      border:none;
      padding:10px;
      cursor:pointer;
      &:first-child{
        border-right:1px solid rgba(32,32,32,0.1);
        border-bottom-left-radius: 8px;
      }
      &:last-child{
        border-bottom-right-radius: 8px;
      }
    }
`

const CustomColorPicker = ({Close,ClassName,setBackgroundFill}) => {
    const [ActiveState, setActiveState] = useState("Color");
    const [ActiveBackgroundColor, setActiveBackgroundColor] = useState("#673ab7");
    const [displayColorPicker, setdisplayColorPicker] = useState(false);

    const CloseHandle=()=> {
        setdisplayColorPicker(Close)
    }
  
    const HandleChangeBackground = (color, activeColor) => {
      setActiveBackgroundColor(color.hex)
      setActiveState(activeColor)
    }

    return (
        <CustomColorPickerWraper className={ClassName}>
            <CustomHead>
                <h5>Custom color</h5>
            </CustomHead>
            <ColorPicker 
                value={ActiveBackgroundColor}
                onChange={setActiveBackgroundColor}
                className="Color_picker"
            />
            <CustomFoot>
                <button onClick={CloseHandle}>Submit</button>
                <button onClick={CloseHandle}>Cancel</button>
            </CustomFoot>
        </CustomColorPickerWraper>
    )
}

export default CustomColorPicker