import React from "react";
import {
  MdOutlineDeleteForever,
  MdOutlineRestoreFromTrash,
} from "react-icons/md";
import { useNote } from "../../context/NoteContext";
import { deleteNote, updateTrash } from "../../services/firebaseServices";

function Trash() {
  const { notes } = useNote();
  const trashNotes=notes.filter(note=>note.isTrash)
  return (
    <>
      {
        trashNotes.length?<h1>Trash Notes</h1>:<h1>Your Trash is empty</h1>
      }
      {notes.map((note) => {
        const { title, desc, id,backgroundcolor } = note;
        return (
          note.isTrash && (
            <div class="note" key={id} style={{ backgroundColor: backgroundcolor }}>
              <div class="title-div">
                <h3>{title}</h3>
              </div>
              <div class="note-desc-div text-left">
                <p>{desc}</p>
              </div>
              <div className="notes-footer">
                <div className="notes-footer-icons">
                  <button
                    class="btn primary-btn btn-icon"
                    onClick={() => deleteNote(note.id)}
                  >
                    <MdOutlineDeleteForever />
                  </button>
                  <button
                    class="btn primary-btn btn-icon"
                    onClick={() => updateTrash(note)}
                  >
                    <MdOutlineRestoreFromTrash />
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

export default Trash;
