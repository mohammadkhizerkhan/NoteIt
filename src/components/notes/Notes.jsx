import React from "react";

import { useNote } from "../../context/NoteContext";
import Note from "../note/Note";

function Notes() {
  const { notes } = useNote();
  const pinnedNotes=notes.filter(item=>item.isPinned && !item.isTrash && !item.isArchive)
  const notpinnedNotes=notes.filter(item=>!item.isPinned && !item.isTrash && !item.isArchive)
 
  
  return (
    <>
    <h3>home</h3>
    {pinnedNotes.length>0 && <h4>Pinned notes</h4>}
      {pinnedNotes.map((note) => {
        return <Note note={note} key={note.id}/>
      })}

      {notpinnedNotes.length>0 && <h4>unpinned notes</h4>}
      {notpinnedNotes.map((note) => {
       return <Note note={note} key={note.id}/>
      })}
    </>
  );
}

export default Notes;
