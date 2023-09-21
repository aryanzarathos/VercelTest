import React, { useEffect, useState } from "react";
import EdneedEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import S3 from "react-aws-s3";
const TextEditor = ({ preFilledData, currentResponse, feature }) => {
  const [editorPreFilled, setEditorPreFilled] = useState(``);


  const handleEditorChange = (content) => {
    currentResponse(content);
  };

  useEffect(() => {
    if (preFilledData) {
      setEditorPreFilled(preFilledData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preFilledData]);

  return (
    <React.Fragment>
      <EdneedEditor
        setContents={editorPreFilled}
        showToolbar={true}
        onChange={handleEditorChange}
        setDefaultStyle="min-height: 200px"

        placeholder={feature ? feature : ""}
        setOptions={feature === "Enter blog content here..." ?
          {
            buttonList: [
              [
                "undo",
                "redo",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
                "removeFormat",
                "outdent",
                "indent",
                "align",
                "horizontalRule",
                "list",
                "lineHeight",
                "table",
                "link",
                // "image",
                "video",
                "audio",
                "imageGallery",
                "fullScreen",
                "showBlocks",
                "codeView",
                "preview",
                "print",
                "save",
                "template",
              ],
            ],
          } :
          {
            buttonList: [
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "list",
                "align",
                // "table",
                // "font",
                // "fontSize",
              ],
            ],
          }
        }

      // controller={
      //   "maxSize" = "50"
      // }
      />
    </React.Fragment>
  );
};
export default TextEditor;
