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
  updateNoteColor
} from "../../services/firebaseServices";
import NoteForm from "../noteform/NoteForm";

function Note({ note }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { title, desc, id, isPinned, createdAt,backgroundcolor } = note;
  const createdInfo = createdAt?.toDate();

  return (
    <>
      <div className="note" key={id} style={{backgroundColor:backgroundcolor}}>
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
              `Created On ${
                createdInfo.getDate() < 10
                  ? `0${createdInfo.getDate()}`
                  : `${createdInfo.getDate()}`
              }/${
                createdInfo.getMonth() < 10
                  ? `0${createdInfo.getMonth()}`
                  : `${createdInfo.getMonth()}`
              }/${createdInfo.getFullYear()}`}
            &nbsp;
            {createdInfo &&
              `${createdInfo.getHours()}:${createdInfo.getMinutes()}`}
          </div>
          <div className="notes-footer-icons">
            <div className="dropdown-color-div">
              <button className="btn primary-btn btn-icon">
                <MdOutlineColorLens />
                <div className="dropdown-color-btns">
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#f28b82" }}
                    onClick={()=>updateNoteColor(id,"#f28b82")}
                    ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#aecbfa" }}
                    onClick={()=>updateNoteColor(id,"#aecbfa")}
                    ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#d7aefb" }}
                    onClick={()=>updateNoteColor(id,"#d7aefb")}
                    ></button>
                  <button
                    className="note-color-btn"
                    onClick={()=>updateNoteColor(id,"#ccff90")}
                    style={{ backgroundColor: "#ccff90" }}
                  ></button>
                </div>
              </button>
            </div>
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
