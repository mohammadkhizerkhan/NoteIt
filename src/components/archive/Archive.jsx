import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { useNote } from "../../context/NoteContext";
import { BsPin } from "react-icons/bs";
import {
  updateArchive,
  updateTrash,
  updateArchivePin,
} from "../../services/firebaseServices";
function Archive() {
  const { notes } = useNote();
  const archiveNotes=notes.filter(note=>note.isArchive).filter(archived=>!archived.isTrash)
  return (
    <>
      {archiveNotes.length ? <h1>Archived Notes</h1> : <h1>Your Archive is empty</h1>}
      {notes.map((note) => {
        const { title, desc, id,backgroundcolor } = note;
        return (
          note.isArchive &&
          !note.isTrash && (
            <div class="note" key={id} style={{ backgroundColor: backgroundcolor }}>
              <button
                class="btn primary-btn btn-icon pin-icon"
                onClick={() => updateArchivePin(note)}
              >
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
                    <MdOutlineArchive onClick={() => updateArchive(note)} />
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
  );
}

export default Archive;
