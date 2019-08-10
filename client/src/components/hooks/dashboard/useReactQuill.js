import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const useReactQuill = () => {
  const [editorHtml, setEditorHtml] = useState();

  const handleChange = html => {
    setEditorHtml(html);
  };

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];

  const reactQuill = text => {
    return (
      <div>
        <ReactQuill
          onChange={handleChange}
          value={editorHtml}
          modules={modules}
          formats={formats}
          // bounds={".app"}
          // placeholder={this.props.placeholder}
        />
      </div>
    );
  };

  return {
    reactQuill,
    editorHtml
  };
};

export default useReactQuill;
