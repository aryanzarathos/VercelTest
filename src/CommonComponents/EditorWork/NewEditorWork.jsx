import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  width: 100vh;
  heigth: 100vh;
  padding: 50px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 10px;
  box-shadow: 0 25px 50px rgba(7, 20, 35, 0.2);
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  height: 28px;
  width: 28px;
  display: grid;
  place-items: center;
  border-radius: 3px;
  border: none;
  background-color: #ffffff;
  outline: none;
  color: #020929;
`;

const Select = styled.select`
  padding: 7px;
  border: 1px solid #020929;
  border-radius: 3px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 40px;
  height: 28px;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 15px;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #020929;
  }

  &::-moz-color-swatch {
    border-radius: 15px;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #020929;
  }
`;

const TextInput = styled.div`
  margin-top: 10px;
  border: 1px solid #dddddd;
  padding: 20px;
  height: 50vh;
`;

const RichTextEditor = () => {
    const textAreaRef = useRef(null);
    const [fontList] = useState([
        'Arial',
        'Verdana',
        'Times New Roman',
        'Garamond',
        'Georgia',
        'Courier New',
        'cursive',
    ]);

    const modifyText = (command, value) => {
        document.execCommand(command, false, value);
    };

    const handleButtonClick = (command) => {
        modifyText(command, null);
    };

    const handleSelectChange = (command, e) => {
        modifyText(command, e.target.value);
    };

    const handleColorChange = (command, e) => {
        modifyText(command, e.target.value);
    };

    const handleLinkButtonClick = () => {
        let userLink = prompt('Enter a URL');
        if (userLink) {
            if (!/^https?:\/\//i.test(userLink)) {
                userLink = 'https://' + userLink;
            }
            modifyText('createLink', userLink);
        }
    };
let data =`<font face="Garamond"><b>asdwdw<font color="#ec2727" style="">d</font><i style=""><font color="#ec2727" style="">dwdwddwd</font>wddwdwdwd</i></b></font>`
    return (
        <>
            <Container>
                <Options>
                    <Button id="bold" onClick={() => handleButtonClick('bold')}>
                        <i className="fa-solid fa-bold"> bold</i>
                    </Button>
                    <Button id="italic" onClick={() => handleButtonClick('italic')}>
                        <i className="fa-solid fa-italic"> italic</i>
                    </Button>
                    <Button id="underline" onClick={() => handleButtonClick('underline')}>
                        <i className="fa-solid fa-underline">underline</i>
                    </Button>
                    <Button
                        id="strikethrough"
                        onClick={() => handleButtonClick('strikethrough')}
                    >
                        <i className="fa-solid fa-strikethrough">strikethrough</i>
                    </Button>
                    <Button id="superscript" onClick={() => handleButtonClick('superscript')}>
                        <i className="fa-solid fa-superscript"> superscript</i>
                    </Button>
                    <Button id="subscript" onClick={() => handleButtonClick('subscript')}>
                        <i className="fa-solid fa-subscript"> subscript</i>
                    </Button>

                    {/* List */}
                    <Button
                        id="insertOrderedList"
                        onClick={() => handleButtonClick('insertOrderedList')}
                    >
                        <div className="fa-solid fa-list-ol"> OrderList</div>
                    </Button>
                    <Button
                        id="insertUnorderedList"
                        onClick={() => handleButtonClick('insertUnorderedList')}
                    >
                        <i className="fa-solid fa-list">UnorderedList</i>
                    </Button>

                    {/* Undo/Redo */}
                    <Button id="undo" onClick={() => handleButtonClick('undo')}>
                        <i className="fa-solid fa-rotate-left">undo</i>
                    </Button>
                    <Button id="redo" onClick={() => handleButtonClick('redo')}>
                        <i className="fa-solid fa-rotate-right">redo</i>
                    </Button>

                    {/* Link */}
                    <Button id="createLink" onClick={handleLinkButtonClick}>
                        <i className="fa fa-link">link</i>
                    </Button>
                    <Button id="unlink" onClick={() => handleButtonClick('unlink')}>
                        <i className="fa fa-unlink">unlink</i>
                    </Button>

                    {/* Alignment */}
                    <Button id="justifyLeft" onClick={() => handleButtonClick('justifyLeft')}>
                        <i className="fa-solid fa-align-left">justifyLeft</i>
                    </Button>
                    <Button
                        id="justifyCenter"
                        onClick={() => handleButtonClick('justifyCenter')}
                    >
                        <i className="fa-solid fa-align-center">justifyCenter</i>
                    </Button>
                    <Button
                        id="justifyRight"
                        onClick={() => handleButtonClick('justifyRight')}
                    >
                        <i className="fa-solid fa-align-right">justifyRight</i>
                    </Button>
                    <Button
                        id="justifyFull"
                        onClick={() => handleButtonClick('justifyFull')}
                    >
                        <i className="fa-solid fa-align-justify">justifyFull</i>
                    </Button>
                    <Button id="indent" onClick={() => handleButtonClick('indent')}>
                        <i className="fa-solid fa-indent">indent</i>
                    </Button>
                    <Button id="outdent" onClick={() => handleButtonClick('outdent')}>
                        <i className="fa-solid fa-outdent">outdent</i>
                    </Button>

                    {/* Headings */}
                    <Select
                        id="formatBlock"
                        className="adv-option-button"
                        onChange={(e) => handleSelectChange('formatBlock', e)}
                    >
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                        <option value="H6">H6</option>
                    </Select>

                    {/* Font */}
                    {/* Font */}
                    <Select
                        id="fontName"
                        className="adv-option-button"
                        onChange={(e) => handleSelectChange('fontName', e)}
                    >
                        {fontList.map((font, index) => (
                            <option key={index} value={font}>
                                {font}
                            </option>
                        ))}
                    </Select>
                    <Select
                        id="fontSize"
                        className="adv-option-button"
                        onChange={(e) => handleSelectChange('fontSize', e)}
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </Select>

                    {/* Color */}
                    <InputWrapper>
                        <ColorInput
                            type="color"
                            id="foreColor"
                            className="adv-option-button"
                            onChange={(e) => handleColorChange('foreColor', e)}
                        />
                        <label htmlFor="foreColor">Font Color</label>
                    </InputWrapper>
                    <InputWrapper>
                        <ColorInput
                            type="color"
                            id="backColor"
                            className="adv-option-button"
                            onChange={(e) => handleColorChange('backColor', e)}
                        />
                        <label htmlFor="backColor">Highlight Color</label>
                    </InputWrapper>
                </Options>
            </Container>
            <p>dahiudyaiwudyiuawydiaywiya HHELLOPOOOO</p>
            <TextInput
                id="text-input"
                contentEditable={true}
                ref={textAreaRef}
                dangerouslySetInnerHTML={{
                    __html: data
                }}
            ></TextInput>
        </>
    );
}

export default RichTextEditor