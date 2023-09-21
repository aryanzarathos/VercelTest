import React from "react";
import Draggable from "react-draggable";

/**
 * make the drag items ALSO the drag targets
 * ondrag over
 * alternate the positions in array
 * onDragOver alternate array positions
 * move the
 * onDrop setState array and rerender component in order to have the element aligned nicely
 */
const handleDragStart = () => {

};
// const handleDragging = () => {

// };
// const handleDragOver = () => {

//   setDragOver();
// };

const handleDragStop = () => {

};
const handleDragDrop = () => {
};
export const DragItem = (props) => {
  const { children } = props;
  const [dragOver, setDragOver] = React.useState(false);

  const handleDragEnter = () => {

    setDragOver(true);
  };
  const handleDragLeave = () => {

    setDragOver(false);
  };

  return (
    <Draggable
      onStart={handleDragStart}
      // onDrag={handleDragging}
      onStop={handleDragStop}
      
      defaultClassNameDragging={"dragging"}
      // defaultClassNameDragged={"dragged"}
      // defaultClassNameDragged isnt dynamically REMOVED, just added
      // draggable="true"
      // onDragOver={ev => {
      //   ev.preventDefault();
      //   ev.stopPropagation();
      // }}
    >
      <li
        className={`dragItem ${dragOver ? "dragOver" : ""}`}
        onDrop={handleDragDrop}
        
      >
        {children}
      </li>
    </Draggable>
  );
};
