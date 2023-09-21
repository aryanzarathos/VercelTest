import React, { useState } from 'react';

const  TextEditor=()=> {
    const [editorContent, setEditorContent] = useState('');
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
  
        const ulRegex = /^- (.+)/; // Matches "- " followed by content
        const liRegex = /^\* (.+)/; // Matches "* " followed by content
        const h1Regex = /^# (.+)/; // Matches "# " followed by content
  
        const lines = editorContent.split('\n');
        const lastLine = lines[lines.length - 1];
  
        if (ulRegex.test(lastLine)) {
          const content = lastLine.replace(ulRegex, '<li>$1</li>');
          const updatedContent = [...lines.slice(0, -1), content].join('\n');
          setEditorContent(updatedContent);
        } else if (liRegex.test(lastLine) || h1Regex.test(lastLine)) {
          setEditorContent(`${editorContent}\n`);
        } else {
          setEditorContent(`${editorContent}\n- `); // default to ul li
        }
      }
    };
  
    const handleChange = (e) => {
      setEditorContent(e.target.value);
    };
  
    return (
      <textarea
        value={editorContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  }
  export default TextEditor