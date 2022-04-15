import React from 'react'
import { useParams } from 'react-router-dom'
import {useNote} from "../../context/NoteContext"
import Note from '../note/Note';

function Labels() {
    const {labelName}=useParams();
    const {notes}=useNote();

    
    return (
       <>
       <h1>this is {labelName}</h1>
       {
           notes.map(note=>{
               return (
                   (note.labels.includes(labelName)) && <Note note={note} key={note.id}/> 
               )
           })
       }
       </>
    )
}

export default Labels
