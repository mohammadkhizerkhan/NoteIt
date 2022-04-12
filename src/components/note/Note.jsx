import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { BsPin, BsPinFill } from "react-icons/bs";
import {
  updatePin,
  updateArchive,
  updatePinnedArchive,
  updateTrash,
} from "../../services/firebaseServices";
import NoteForm from "../noteform/NoteForm";

function Note({ note }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { title, desc, id, isPinned, createdAt } = note;
  const createdInfo = createdAt?.toDate();
  console.log(`${createdInfo.getDate()<10?`0${createdInfo.getDate()}`:`${createdInfo.getDate()}`}`);
  return (
    <>
      <div className="note" key={id}>
        <button
          className="btn primary-btn btn-icon pin-icon"
          onClick={() => updatePin(note)}
        >
          {isPinned ? <BsPinFill /> : <BsPin />}
        </button>
        <div className="title-div">
          <h3>{title}</h3>
        </div>
        <div className="note-desc-div text-left">
          <p>{desc}</p>
        </div>
        <div className="notes-footer">
          <div className="date">
            {createdInfo &&
              `Created On ${createdInfo.getDate()<10?`0${createdInfo.getDate()}`:`${createdInfo.getDate()}`}/${createdInfo.getMonth()<10?`0${createdInfo.getMonth()}`:`${createdInfo.getMonth()}`}/${createdInfo.getFullYear()}`}
              &nbsp;
            {
              createdInfo && `${createdInfo.getHours()}:${createdInfo.getMinutes()}`
            }
          </div>
          <div className="notes-footer-icons">
            <button className="btn primary-btn btn-icon">
              <MdOutlineColorLens />
            </button>
            <button className="btn primary-btn btn-icon">
              <MdOutlineLabel />
            </button>
            <button
              className="btn primary-btn btn-icon"
              onClick={() => setIsFormOpen(true)}
            >
              <MdOutlineModeEditOutline />
            </button>
            <button className="btn primary-btn btn-icon">
              <MdOutlineArchive
                onClick={() =>
                  isPinned ? updatePinnedArchive(note) : updateArchive(note)
                }
              />
            </button>
            <button
              className="btn primary-btn btn-icon"
              onClick={() => updateTrash(note)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <NoteForm
          editNoteData={note}
          edit={true}
          closeForm={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}

export default Note;
