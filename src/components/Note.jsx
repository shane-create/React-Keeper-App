import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
    {/* These props allow us to tap into the title value and the content value */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* This onClick button sends the note id to the clickedButton prop but only when the buttom is clicked*/}
      <button onClick={() => {
        props.clickedButton(props.id);
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
