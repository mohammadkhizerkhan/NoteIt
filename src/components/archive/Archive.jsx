import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
  MdOutlineRestoreFromTrash
} from "react-icons/md";
import {useNote} from "../../context/NoteContext"
import { BsPin,BsPinFill } from "react-icons/bs";
import {updateArchive,updateTrash,updatePin,updateArchivePin} from "../../services/firebaseServices"
function Archive() {
    const {notes} = useNote();
    return (
        <>
        <h2>archive</h2>
        {notes.map((note) => {
        const { title, desc, id } = note;
        return (
          (note.isArchive && !note.isTrash ) && (
            <div class="note" key={id}>
              <button class="btn primary-btn btn-icon pin-icon" onClick={()=>updateArchivePin(note)}>
                  <BsPin />
              </button>
              <div class="title-div">
                <h3>{title}</h3>
              </div>
              <div class="note-desc-div text-left">
                <p>{desc}</p>
              </div>
              <div className="notes-footer">
                <div className="notes-footer-icons">
                <button class="btn primary-btn btn-icon">
                  <MdOutlineColorLens />
                </button>
                <button class="btn primary-btn btn-icon">
                  <MdOutlineLabel />
                </button>
                <button class="btn primary-btn btn-icon">
                  <MdOutlineArchive onClick={()=>updateArchive(note)}/>
                </button>
                  <button
                    class="btn primary-btn btn-icon"
                    onClick={() => updateTrash(note)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}
        </>
    )
}

export default Archive
