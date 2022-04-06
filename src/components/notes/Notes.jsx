import React,{useState} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { BsPin,BsPinFill } from "react-icons/bs";
import { useNote } from "../../context/NoteContext";
import {updateTrash,updateArchive,updatePin,updatePinnedArchive} from "../../services/firebaseServices"
import NoteForm from "../noteform/NoteForm";
import Note from "../note/Note";

function Notes() {
  const { notes,setIsEdit,isEdit } = useNote();
  const pinnedNotes=notes.filter(item=>item.isPinned && !item.isTrash && !item.isArchive)
  const notpinnedNotes=notes.filter(item=>!item.isPinned && !item.isTrash && !item.isArchive)
 
  
  return (
    <>
    <h3>home</h3>
    {pinnedNotes.length>0 && <h4>Pinned notes</h4>}
      {pinnedNotes.map((note) => {
        return <Note note={note}/>
      })}

      {notpinnedNotes.length>0 && <h4>unpinned notes</h4>}
      {notpinnedNotes.map((note) => {
        const { title, desc, id } = note;
       return <Note note={note}/>
      })}
    </>
  );
}

export default Notes;
