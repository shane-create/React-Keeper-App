import React, {useState} from "react";
/* These material ul things are dependencies that make it easier to code, kinda like bootstrap for css but better because there is more freedom, the incons one is just premade icons we can use, but these icons can come with functions so they are better than favicons */
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";


function CreateArea(props) {

  /* This sets the useState into an object that contains the title and the content, note is what holds the title and the content, and setNote sets the title and content values */
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  /* This will be used to tell out textarea when to expand, our input area when to show up, and out button when to pop in */
  const [isExpanded, setExpanded] = useState(false);

  /* Here we are handling change or the function that is passed a bit more down in the code, this sets the value of what your typing, so it checks if your typing in the title input or the content input, it uses the spread opperater the ... looks at the prev values of the note, and if you are typing in the title input it will set the title to the value that is being sent by event, and will set content to its prev value which was empty, it does the same if you are typing in the content input, it can do this because when the input gets changed and calls this function it passes it the event, which has the .name and the .value .name is the name of the input, so here we check whether the name is title or content and change the value accordingly*/
  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        }
      });
  };

    /* This function gets called when our texarea gets clicked which then sets the isExpanded value to true */
    function expand() {
      setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
      {/* This is our title input, here, when the input changes, (which means the user is typing), we call the handleChange function and tell it to figure out which input is being changed, and we tell it to give that input the value that is being typed, now we are also asking if the isExpanded value is equal to true, and if it is we return our input that then wil be able to do all of the above, but is isExpanded is equal to false, it will just return null, or nothing*/}
        {isExpanded ? (
          <input autoComplete="off" onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
          ) : null}
      {/* Here we do the same thing just with content instead, but here we also have an onClick method, when we then click the texarea it sets of the expand function hich then sets isExpanded to true, and lets our input show up, it also expands the text area, because as you can se in the row property, that if isExpanded is equal to true, then let the textarea have 3 rows, but if it is equal to false then let rows equal to 1 row.*/}
        <textarea autoComplete="off" onChange={handleChange} 
        onClick={expand} name="content" 
        placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={note.content} />
      {/* This part is a bit complicated. We tell the browser, that when this button (here it is called fab because we are using a premade component that comes with its own styling, and actually has a small hover effect) gets clicked it will trigger a function, and since it was clicked it also passes this function an event. in this function (remember this function will ONLY get triggered when the Fab button is pressed, so you cannot acsess the props before the Fab button gets pressed) we create a prop called onAdd, and we pass this custom property the value of note, underneath it we set the input values back to the starting values, (so the user doesn't have to delete the entire note values them selves before being able to write a new note) and underneath that we prevent the browser from reloading by using the event we were passed, AddIcon is just an icon which look like a plus button, instead of hardcoded text, and the zoom that encloses the entire Fab button, tells the Fab button to only zoom in (in is the property, we can also give it other properties but you will have to look at the docs for that) when isExpanded is equal to true */}
      <Zoom in={isExpanded}>
        <Fab onClick={(event) => {
            props.onAdd(note);
            setNote({title: "", content: ""});
            event.preventDefault();
          }}>
            <AddIcon />
            </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
