import React from "react";
import { useFilter } from "../../context/FilterContext";

import { useNote } from "../../context/NoteContext";
import Note from "../note/Note";

function Notes() {
  const filterNotes=()=>{
    let sortedNotes=[...notes]
    if(filterState.search){
      sortedNotes=sortedNotes.filter(note=>note.title.toLowerCase().includes(filterState.search.toLowerCase()))
    }
    return sortedNotes;
  }
  const { notes } = useNote();
  const {filterState}= useFilter();
  const pinnedNotes=filterNotes().filter(item=>item.isPinned && !item.isTrash && !item.isArchive)
  const notpinnedNotes=filterNotes().filter(item=>!item.isPinned && !item.isTrash && !item.isArchive)

  console.log(filterState.search)
  console.log(filterNotes())
  
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
