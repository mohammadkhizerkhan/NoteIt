import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { BsPin,BsPinFill } from "react-icons/bs";
import { useNote } from "../../context/NoteContext";
import {updateTrash,updateArchive,updatePin,updatePinnedArchive} from "../../services/firebaseServices"

function Notes() {
  const { notes } = useNote();
  const pinnedNotes=notes.filter(item=>item.isPinned && !item.isTrash && !item.isArchive)
  const notpinnedNotes=notes.filter(item=>!item.isPinned && !item.isTrash && !item.isArchive)

  
  return (
    <>
    <h3>home</h3>
    {pinnedNotes.length>0 && <h4>Pinned notes</h4>}
      {pinnedNotes.map((note) => {
        const { title, desc, id } = note;
        return (
          <>
          <div class="note" key={id}>
            <button class="btn primary-btn btn-icon pin-icon" onClick={()=>updatePin(note)}>
                  <BsPinFill />
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
                  <MdOutlineArchive onClick={()=>updatePinnedArchive(note)}/>
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
          </>
        );
      })}
      {notpinnedNotes.length>0 && <h4>unpinned notes</h4>}
      {notpinnedNotes.map((note) => {
        const { title, desc, id } = note;
        return (
          <>
          <div class="note" key={id}>
            <button class="btn primary-btn btn-icon pin-icon" onClick={()=>updatePin(note)}>
                  <BsPin/>
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
          </>
        );
      })}
    </>
  );
}

export default Notes;
