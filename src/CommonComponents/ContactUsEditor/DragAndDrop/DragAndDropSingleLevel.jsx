import React from 'react';
import Draggable from 'react-draggable';

const DragAndDropSingleLevel = ({ children, item, position,handleDragStop,handleDragStart }) => {
    return (
        <Draggable
            bounds="parent"
            key={item.id}
            position={position}
            onStart={handleDragStart}
            onStop={handleDragStop}
        >
            {children}
        </Draggable>
    );
};

export default DragAndDropSingleLevel;
