import React, { useState } from "react";

export default function TxtForm(props) {
  const [text, setText] = useState(""); //textarea is blank initially
  //setText("new placeholer for textarea");
  const handleUpClick = () => {
    console.log("Button 'Convert to Uppercase' clicked " + text);
    setText(text.toUpperCase());
    props.showAlert("Text converted to Uppercase", "success");
  };
  //lowercase
  const handleLoClick = () => {
    console.log("Button 'Convert to Lowercase' clicked " + text);
    setText(text.toLowerCase());
    props.showAlert("Text converted to Lowercase", "success");
  };
  //clear text
  const handleClearTextClick = () => {
    console.log("cleart text");
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handle on change funcion called");
    setText(event.target.value);
  };
  //copy text
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  //Remove Extra spaces
  const removeExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed from the paragraph", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="container mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-outline-primary mx-1 my-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-outline-primary mx-1"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-outline-primary mx-1"
            onClick={handleClearTextClick}
          >
            Clear text
          </button>
          <button className="btn btn-outline-primary mx-1" onClick={copyText}>
            Copy text
          </button>
          <button
            className="btn btn-outline-primary mx-1"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="container mb-3">
          <h3>Your text summary</h3>
          <p>
            Word count:{text.split(" ").length} and Characters: {text.length}
          </p>
          <p>
            Average time to read the text: {0.08 * text.split(" ").length}{" "}
            minutes
          </p>
          <h3>Text Preview</h3>
          <p>{text.length > 0 ? text : "Enter the text to preview"}</p>
        </div>
      </div>
    </>
  );
}
