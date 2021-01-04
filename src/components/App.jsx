import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  /* Here we create an array called notes, and ofcourse something to set the notes with, the usestate default value (which is notes) therefore holds an array, because this array of notes will contain multiple notes */

  const [notes, setNotes] = useState([]);

  /* Here we get passed the note value from underneath, and we also call the addNote function, here we set the notes to the previous notes plus the new note values we were passed.*/
  function addNote(note){
    setNotes(prevNotes =>{
      return [...prevNotes, note];
    })
  };

  /* This part is kinda complicated, and i dont understand it too well, but i will try to explain it. Here we get passed the value of id from further down in the code, we set the notes to be the previous notes, but this time we filter through those notes, and return all of the previous notes that dont have the index of id, because as you can se further down in the code, the id is really just the index of the note. */
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      {/* Here we use the props onAdd and call the function addNote, but in the createArea.jsx file we passed this custom property the values of the note that the user created so we also pass those values to the addNote function */}
      <CreateArea onAdd={addNote} />
      {/* Here we map through the enire notes array, and create a new note for every item in that array, createdNote is each and every note inside the array, and index is the index of that note, (fx i have 3 items in an array, and i want to get the 2 item, its index would be 1 because array indexes start at 0) we use the index do define a unique key and id for each note, because no note can have the same index, as it is quite impossible. we then let the title property equal the created notes title and the content property equal the content of the created note. Now we also have a clickedButton property, which we said should only be triggered when the button in note.jsx is clicked, then we would send this property the id, or index of the note whos delete button was clicked, then the clickedbutton property sends the id to the deleteNote function.*/}
      {notes.map((createdNote, index) => (
        <Note key={index} id={index} title={createdNote.title} content={createdNote.content} clickedButton={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
