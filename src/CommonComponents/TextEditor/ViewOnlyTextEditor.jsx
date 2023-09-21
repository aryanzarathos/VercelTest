import React, { useCallback, useState } from 'react';
import { withReact, Slate, Editable } from 'slate-react'
import { createEditor } from 'slate'
import { getBlock, getMarked } from '../EditorWork/SlateEditor/utils/SlateUtilityFunctions';
import { styled } from 'styled-components';

const TextEditor = ({ data, style }) => {
  // console.log("line data 16",data)
  const Element = (props) => {
    return getBlock(props);
  }
  const Leaf = ({ attributes, children, leaf }) => {
    children = getMarked(leaf, children);
    return <span {...attributes}>{children}</span>
  }
  const [editor] = useState(() => withReact(createEditor()))
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const TextEditorWrap = styled.div`
    ul li{
      list-style-type: disc;
      margin-left:20px
    }
`
  const MainContainer = styled.div`


`
  return (
    <MainContainer style={{ ...style?.desktop?.margin, ...style?.desktop?.padding }}>
      <TextEditorWrap>
        <Slate editor={editor} initialValue={data} >
          <Editable renderElement={renderElement} renderLeaf={renderLeaf} readOnly />
        </Slate>
      </TextEditorWrap>
    </MainContainer>
  )
};

export default TextEditor;
