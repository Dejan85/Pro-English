import React from "react";
import { Editor, EditorState } from "draft-js";

const useDraftJs = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  const draftJs = () => {
    return (
      <div onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </div>
    );
  };

  return { draftJs, editorState };
};

export default useDraftJs;
