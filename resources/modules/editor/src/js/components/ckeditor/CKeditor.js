import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import UploadAdapterPlugin from "./Plugins/UploadAdapterPlugin";

const defaultToolbar = [
  "heading",
  "undo",
  "redo",
  "bold",
  "italic",
  "blockQuote",
  "indent",
  "outdent",
  "link",
  "numberedList",
  "bulletedList",
  "imageTextAlternative",
  "imageUpload",
  "mediaEmbed",
  "insertTable",
  "tableColumn",
  "tableRow",
  "mergeTableCells"
];

class CKeditor extends Component {
  constructor(props) {
    super(props);
    this.body = window.EditorFrame ? window.EditorFrame.contentWindow.document.body : document.body;

  }

  render() {

    const config = {
      extraPlugins: [UploadAdapterPlugin],
      body: this.body,
      toolbar: defaultToolbar
    };

    if (this.props.textWidget) {
      return (
        <>
          <CKEditor
            config={config}
            body={this.body}
            editor={InlineEditor}
            disabled={!this.props.readOnly}
            data={this.props.text || "Type text here"}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              editor.plugins.get( 'TextTransformation' ).isEnabled = false;
            }}
            onChange={(event, editor) =>
              this.props.changeText(editor.getData())
            }
          />
        </>
      );
    }
    return (
      <CKEditor
        config={config}
        body={this.body}
        editor={InlineEditor}
        data={this.props.text || "Type text here"}
        disabled={this.props.readOnly}
        onReady={editor => {
          console.log("Editor is ready to use!", editor);
          editor.plugins.get( 'TextTransformation' ).isEnabled = false;

        }}
        onChange={(event, editor) => this.props.onChange(event, editor)}
        onBlur={(event, editor) => this.props.onBlur(event, editor)}
      />
    );
  }
}

export default CKeditor;
