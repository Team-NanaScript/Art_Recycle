import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  formats = [
    "header",
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
    "align",
    "color",
    "background",
  ];

  render() {
    const { value, changeContent, name } = this.props;
    return (
      <div style={{ height: "350px" }}>
        <ReactQuill
          name={name}
          style={{ height: "300px" }}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          //   value={content}
          onChange={(content, delta, source, editor) => changeContent(editor.getHTML())}
        />
      </div>
    );
  }
}
export default EditorComponent;
