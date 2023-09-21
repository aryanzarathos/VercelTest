import React, { useRef } from 'react';

const ElementSelection = () => {
  const selectedTextRef = useRef(null);

  const handleSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'highlighted';
      range.surroundContents(span);
      selectedTextRef.current = span.innerHTML;
    } else {
      selectedTextRef.current = null;
    }
  };

  return (
    <div>
      <p>Select some text:</p>
      <div onMouseUp={handleSelection}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
          lorem eu metus viverra tincidunt. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
          eu tincidunt lacus.
        </p>
      </div>
      {selectedTextRef.current && (
        <div>
          <p>Selected Text:</p>
          <p>{selectedTextRef.current}</p>
        </div>
      )}
    </div>
  );
};

export default ElementSelection;
