import React,{useState} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { BsPin,BsPinFill } from "react-icons/bs";
import {updatePin,updateArchive,updatePinnedArchive,updateTrash} from "../../services/firebaseServices"
import NoteForm from '../noteform/NoteForm';

function Note({note}) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { title, desc, id,isPinned } = note;
    
    return (
            <div class="note" key={id} onClick={() => setIsFormOpen(true)}>
            <button class="btn primary-btn btn-icon pin-icon" onClick={()=>updatePin(note)}>
                  {isPinned ? <BsPinFill />:<BsPin/>}
            </button>
            <div class="title-div">
              <h3>{title}</h3>
            </div>
            <div class="note-desc-div text-left">
              <p>{desc}</p>
            </div>
            <div className="notes-footer">
              <div className="date">Created on 06/11/20201</div>
              <div className="notes-footer-icons">
                <button class="btn primary-btn btn-icon">
                  <MdOutlineColorLens />
                </button>
                <button class="btn primary-btn btn-icon">
                  <MdOutlineLabel />
                </button>
                <button class="btn primary-btn btn-icon">
                  <MdOutlineArchive onClick={()=>isPinned? updatePinnedArchive(note):updateArchive(note)}/>
                </button>
                <button
                  class="btn primary-btn btn-icon"
                  onClick={() => updateTrash(note)}
                  >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
            {
                isFormOpen && <NoteForm editNoteData={note} edit={true} closeForm={()=>setIsFormOpen(false)}/>
            }
          </div>
    )
}

export default Note
