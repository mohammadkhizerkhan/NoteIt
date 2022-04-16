import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
  MdOutlineModeEditOutline,
  MdOutlineAddCircleOutline,
} from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPin, BsPinFill } from "react-icons/bs";
import {
  updatePin,
  updateArchive,
  updatePinnedArchive,
  updateTrash,
  updateNoteColor,
  deleteLabel,
  addLabel,
  addLabelToNote,
  removeLabelFromNote,
} from "../../services/firebaseServices";
import NoteForm from "../noteform/NoteForm";
import { useNote } from "../../context/NoteContext";

function Note({ note }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLabel, setIsLabel] = useState(false);
  const [labelName, setLabelName] = useState("");
  const {
    title,
    desc,
    id,
    isPinned,
    createdAt,
    backgroundcolor,
    labels: noteLables,
  } = note;
  const createdInfo = createdAt?.toDate();
  const { labels } = useNote();
  const submitLabel = (e) => {
    e.preventDefault();
    {
      labelName && addLabel(labelName);
    }
    setLabelName("");
  };
  console.log(labels.map(item=>item.name))

  return (
    <>
      <div
        className="note"
        key={id}
        style={{ backgroundColor: backgroundcolor }}
        onMouseLeave={() => setIsLabel(false)}
      >
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
        <div className="notes-label-div">
          {noteLables.map((noteLabel) => {
            if(labels.map(label=>label.name).includes(noteLabel)){
              return (
                <div className="label-chip">
                  {noteLabel}
                  <button
                    className="btn btn-icon btn-chip-delete"
                    onClick={() => removeLabelFromNote(id, noteLabel)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              );
            }
          })}
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
              <button className="btn btn-icon">
                <MdOutlineColorLens />
                <div className="dropdown-color-btns">
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#f28b82" }}
                    onClick={() => updateNoteColor(id, "#f28b82")}
                  ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#aecbfa" }}
                    onClick={() => updateNoteColor(id, "#aecbfa")}
                  ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#d7aefb" }}
                    onClick={() => updateNoteColor(id, "#d7aefb")}
                  ></button>
                  <button
                    className="note-color-btn"
                    onClick={() => updateNoteColor(id, "#ccff90")}
                    style={{ backgroundColor: "#ccff90" }}
                  ></button>
                  <button
                    className="note-color-btn"
                    onClick={() => updateNoteColor(id, "#e8eaed")}
                    style={{ backgroundColor: "#e8eaed" }}
                  ></button>
                  <button
                    className="note-color-btn"
                    onClick={() => updateNoteColor(id, "#a7ffeb")}
                    style={{ backgroundColor: "#a7ffeb" }}
                  ></button>
                </div>
              </button>
            </div>
            <div className="dropdown-label-div">
              <button
                className="btn btn-icon"
                onClick={() => setIsLabel(!isLabel)}
              >
                <MdOutlineLabel />
              </button>
              {isLabel && (
                <div className="dropdown-label-checkbox">
                  <form action="" className="label-form">
                    <input
                      type="text"
                      className="input-style label-input"
                      value={labelName}
                      onChange={(e) => setLabelName(e.target.value)}
                    />
                    <button
                      className="btn btn-icon"
                      onClick={(e) => submitLabel(e)}
                    >
                      <MdOutlineAddCircleOutline />
                    </button>
                  </form>
                  <div className="underline"></div>
                  {labels.map((label) => {
                    return (
                      <div className="label-cont" key={label.id}>
                      <label htmlFor={label.name}>
                        <input
                          type="checkbox"
                          name={label.name}
                          id={label.name}
                          checked={noteLables.includes(label.name)}
                          onChange={() =>
                            noteLables.includes(label.name)
                              ? removeLabelFromNote(id, label.name)
                              : addLabelToNote(id, label.name)
                          }
                        />
                        {label.name}
                      </label>
                        <button
                          className="btn btn-icon btn-chip-delete"
                          onClick={() => deleteLabel(label.id)}
                        >
                          <TiDeleteOutline />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              className="btn  btn-icon"
              onClick={() => setIsFormOpen(true)}
            >
              <MdOutlineModeEditOutline />
            </button>
            <button className="btn  btn-icon">
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
