/* eslint-disable react/display-name */
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import styled from "styled-components";
import ColorPicker from "react-best-gradient-color-picker";
import ReactDOM from 'react-dom';
import { useGlobalVariable } from '@/CommonFunctions/changeColorType';

const ColorPickerWrap = styled.div`
position: relative;
z-index: 999;

`
const CustomColorPickerWraper = styled.div`
  border: 1px solid rgba(32, 32, 32, 0.2);
  border-radius: 8px;
  width: 100%;
  background: #FFFFFF;
  z-index:99;
  padding:0 10px;

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
    cursor: pointer;
  }
`;



const InputColorPickerPortal = React.memo(({ title, Color, handleChange, value, onclose, ref, ...props }) => {
  const [dragging, setDragging] = useState(false);
  const [boundary, setBoundry] = useState({})
  const [position, setPosition] = useState({ x: 92, y: 0 });
  const startPosition = useRef({ x: 0, y: 0 });
  const colorPickerRef = useRef(null);

  const [globalVariable] = useGlobalVariable()
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setDragging(true);
    startPosition.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  }, [position]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const x = e.clientX - startPosition.current.x;
      const y = e.clientY - startPosition.current.y;

      // Check if the new position is within the boundaries
      const boundedX = Math.max(boundary.left, Math.min(x, boundary.right));
      const boundedY = Math.max(boundary.top, Math.min(y, boundary.bottom));

      setPosition({ x: boundedX, y: boundedY });
    },
    [dragging]
  );

  useLayoutEffect(() => {
    const colorPickerWrapper = colorPickerRef.current;
    if (colorPickerWrapper) {
      colorPickerWrapper.style.left = `${position.x}px`;
      colorPickerWrapper.style.top = `${position.y}px`;
    }
    // Attach event listeners to the document
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position, handleMouseUp, handleMouseMove]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBoundry({
        top: 0,
        bottom: window.innerHeight - 555.19, // Height of the color picker (200px) + 10px margin
        left: 96,
        right: window.innerWidth - 332, // Width of the color picker (200px) + 10px margin

      })
    }
  }, [])

  const handleClose = (e) => {
    e.stopPropagation();
    setDragging(false)
    onclose()
  };



  return ReactDOM.createPortal(
    <div ref={ref}>
      <ColorPickerWrap
        ref={colorPickerRef}
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
        }}
      >
        <CustomColorPickerWraper>
          <CustomHead
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              cursor: dragging ? 'grabbing' : 'grab',
            }}
          >
            <h5>{title ? title : 'Pick Color'}</h5>
            <button onClick={(e) => handleClose(e)}>&#10006;</button>
          </CustomHead>
          <ColorPicker
            color={Color}
            onChange={handleChange}
            className="ColorPicker"
            value={globalVariable(value)}
            hideGradientStop={true}
            hideAdvancedSliders={true}
            hidePresets={true}
            hideColorGuide={true}
            hideInputType={true}
            {...props}
          />
        </CustomColorPickerWraper>
      </ColorPickerWrap>
    </div>,
    document.getElementById("portal")
  );
});

export default InputColorPickerPortal;