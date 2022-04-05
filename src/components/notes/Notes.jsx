import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { useNote } from "../../context/NoteContext";
import { ACTION } from "../../store/constant";

function Notes() {
  const { notes,noteDispatch } = useNote();
  return (
    <>
      {notes.map((note) => {
        const { title, desc, id } = note;
        return (
          (!note.isTrash && !note.isArchive) &&(
          <div class="note" key={id}>
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
                  <MdOutlineArchive />
                </button>
                <button
                  class="btn primary-btn btn-icon"
                  onClick={() => noteDispatch({type:ACTION.TRASH_DOC,payload:note})}
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

export default Notes;
