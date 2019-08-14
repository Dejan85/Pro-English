import React, { useState } from "react";

const useEditor = () => {
  const [text, setText] = useState({
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    p: [],
    span: [],
    list: []
  });
  const [selected, setSelected] = useState();

  const onKeyUpHandler = e => {
    setText({
      ...text,
      p: [`<p>${e.target.textContent}</p>`]
    });
  };

  const onSelectHandler = e => {
    let selected = window
      .getSelection()
      .anchorNode.textContent.substring(
        window.getSelection().extentOffset,
        window.getSelection().anchorOffset
      );

    setSelected(selected);

    console.log(selected.innerHTML);
  };

  const addH1Handler = () => {
    setText({
      ...text,
      h1: `<h1 className="blogPost__h1">${selected}</h1>`
    });
    console.log(text);
  };

  const editor = () => {
    return (
      <div className="editor">
        <div className="editor__panel">
          <div className="editor__btn" onClick={addH1Handler}>
            h1
          </div>
        </div>
        <div
          className="editor__edit"
          contentEditable={true}
          onKeyUp={onKeyUpHandler}
          onSelect={onSelectHandler}
        />
      </div>
    );
  };

  return { editor };
};

export default useEditor;
