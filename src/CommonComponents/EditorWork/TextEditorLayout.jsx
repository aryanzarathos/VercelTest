// import Text from '@/SectionsLayout/Elements/TextElement/Text';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
display:flex;
  align-items: center;
  justify-content: center;
  justify-align: center;
  height: 100vh;
  background-color: #f5f5f5;
  flex-direction:column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

// const TextArea = styled.textarea`
//   width: 100%;
//   height: 200px;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   resize: none;
//   margin-top: 10px;
//   clear: both; /* Add clear: both to force the textarea on a new line */
// `;

const Button = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin:5px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }
`;

const NumberInput = styled.input`
  width: 40px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ColorInput = styled.input`
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
`;
const TextEditorLayout = () => {
    const ref = useRef(null);
    const [value, setValue] = useState("HELLOOOOOO");
    const [EditorValue, setEditorValue] = useState("<h1>HELLOOOOOO</h1>");
    const [fontSize, setFontSize] = useState(16);
    const handleFontChange = (e) => {
        setFontSize(fontSize)
        ref.current.style.fontSize = value + "px";
    };

    const handleBold = (e) => {
        if (ref.current.style.fontWeight == "bold") {
            ref.current.style.fontWeight = "normal";
            e.classList.remove("active");
        }
        else {
            ref.current.style.fontWeight = "bold";
            e.classList.add("active");
        }
    };

    const handleItalic = (e) => {
        if (ref.current.style.fontStyle == "italic") {
            ref.current.style.fontStyle = "normal";
            e.classList.remove("active");
        }
        else {
            ref.current.style.fontStyle = "italic";
            e.classList.add("active");
        }
    };

    const handleUnderline = (e) => {
        if (ref.current.style.textDecoration == "underline") {
            ref.current.style.textDecoration = "none";
            e.classList.remove("active");
        }
        else {
            ref.current.style.textDecoration = "underline";
            e.classList.add("active");
        }
    };

    const handleAlignLeft = (e) => {
        ref.current.style.textAlign = "left";
    };

    const handleAlignCenter = (e) => {
        ref.current.style.textAlign = "center";
    };

    const handleAlignRight = (e) => {
        ref.current.style.textAlign = "right";
    };

    const handleTransform = (e) => {
        if (ref.current.style.textTransform == "uppercase") {
            ref.current.style.textTransform = "none";
            e.classList.remove("active");
        }
        else {
            ref.current.style.textTransform = "uppercase";
            e.classList.add("active");
        }
    };

    const handleSlash = (e) => {
        ref.current.style.fontWeight = "normal";
        ref.current.style.textAlign = "left";
        ref.current.style.fontStyle = "normal";
        ref.current.style.textTransform = "capitalize";
        ref.current.value = "";
    };

    const handleColorChange = (e) => {
        let value = e.target.value;;
        ref.current.style.color = value;
    };

    // const handleKeyDown = () => {
    //     const caretPosition = ref.current.selectionStart;
    //     const html = ref.current.value.substring(0, caretPosition);
    //     const openingTagMatch = html.match(/<(\w+)/);
    //     const closingTagMatch = html.match(/<\/(\w+)/);
    // };


    const handleEditorKeyDown = (e) => {
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
                setEditorValue(updatedContent);
            } else if (liRegex.test(lastLine) || h1Regex.test(lastLine)) {
                setEditorValue(`${editorContent}\n`);
            } else {
                setEditorValue(`${editorContent}\n- `); // default to ul li
            }
        }

        if (e.key !== "Enter") {
            const caretPosition = ref.current.selectionStart;
            const html = ref.current.value.substring(0, caretPosition);
            const openingTagMatch = html.match(/<(\w+)/);
            const closingTagMatch = html.match(/<\/(\w+)/);

        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const HandleFontChange = (e) => {
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
                setValue(updatedContent);
            } else if (liRegex.test(lastLine) || h1Regex.test(lastLine)) {
                setValue(`${editorContent}\n`);
            } else {
                setValue(`${editorContent}\n- `); // default to ul li
            }
        }
        // setValue(e.target.value)
    }
    return (
        <Section>
            <Row>
                <Col>
                    <Box>
                        <div className="first box">
                            <NumberInput
                                type="number"
                                value={fontSize}
                                min="1"
                                max="100"
                                onChange={(e) => handleFontChange(e)}
                            />
                        </div>
                        <div className="second box">
                            <Button type="button" onClick={handleBold}>
                                <i className="fa-solid fa-bold">Bold</i>
                            </Button>
                            <Button type="button" onClick={handleItalic}>
                                <i className="fa-solid fa-italic">Italic</i>
                            </Button>
                            <Button type="button" onClick={handleUnderline}>
                                <i className="fa-solid fa-underline">UnderLine</i>
                            </Button>
                        </div>
                        <div className="third box">
                            <Button type="button" onClick={handleAlignLeft}>
                                <i className="fa-solid fa-align-left">Left Align</i>
                            </Button>
                            <Button type="button" onClick={handleAlignCenter}>
                                <i className="fa-solid fa-align-center">Center Align</i>
                            </Button>
                            <Button type="button" onClick={handleAlignRight}>
                                <i className="fa-solid fa-align-right">Right Align</i>
                            </Button>
                        </div>
                        <div className="fourth box">
                            <Button type="button" onClick={handleTransform}>
                                aA
                            </Button>
                            <Button type="button" onClick={handleSlash}>
                                <i className="fa-solid fa-text-slash"></i>
                            </Button>
                            <ColorInput type="color" onChange={handleColorChange} />
                        </div>
                    </Box>
                    <br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <textarea value={value} onKeyDown={(e) => handleEditorKeyDown(e)} ref={ref} id="textarea1" placeholder="Your text here" onChange={(e) => handleChange(e)} />
                </Col>
            </Row>
        </Section>
    );

};

export default TextEditorLayout;

