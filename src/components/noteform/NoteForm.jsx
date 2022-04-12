import React, { useEffect,useState } from "react";

import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";

import { addNote, updateNote } from "../../services/firebaseServices";

function NoteForm({ closeForm, editNoteData, edit }) {
  const [noteInput, setNoteInput] = useState({
    title: "",
    desc: "",
    backgroundcolor:"white",
    isPinned: false,
    isArchive: false,
    isTrash: false,
  });

  const changeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setNoteInput((prev)=>({...prev,[name]:value}))
}

  const submitNote = () => {
    {edit?updateNote(noteInput):addNote(noteInput)}
    setNoteInput({
      title: "",
      desc: "",
      isPinned: false,
      isArchive: false,
      isTrash: false,
    });
    closeForm();
  };

  useEffect(() => {
    if (edit) {
      setNoteInput(editNoteData);
    }
  }, []);

  return (
    <>
      <div className="note-editor">
        <div className="note-editor-title">
          <input
            type="text"
            className="input title-input"
            placeholder="Title"
            name="title"
            value={noteInput.title}
            onChange={changeHandler}
          />
        </div>
        <div className="note-editor-desc">
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="5"
            className="input desc-input"
            placeholder="Take a note..."
            value={noteInput.desc}
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className="notes-editor-footer">
          <div className="notes-footer-icons">
          <div className="dropdown-color-div">
              <button className="btn primary-btn btn-icon">
                <MdOutlineColorLens />
                <div className="dropdown-color-btns">
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#f28b82" }}
                    onClick={()=>setNoteInput(prev=>({...prev,backgroundcolor:"#f28b82"}))}
                    ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#aecbfa" }}
                    onClick={()=>setNoteInput(prev=>({...prev,backgroundcolor:"#aecbfa"}))}
                    ></button>
                  <button
                    className="note-color-btn"
                    style={{ backgroundColor: "#d7aefb" }}
                    onClick={()=>setNoteInput(prev=>({...prev,backgroundcolor:"#d7aefb"}))}
                    ></button>
                  <button
                    className="note-color-btn"
                    onClick={()=>setNoteInput(prev=>({...prev,backgroundcolor:"#ccff90"}))}
                    style={{ backgroundColor: "#ccff90" }}
                  ></button>
                </div>
              </button>
            </div>
            <button className="btn primary-btn btn-icon">
              <MdOutlineLabel />
            </button>
            <button className="btn primary-btn btn-icon">
              <MdOutlineArchive />
            </button>
          </div>
          <div className="notes-footer-btn">
            <button className="btn btn-s" onClick={closeForm}>
              Cancel
            </button>
            <button className="btn btn-s" onClick={()=>submitNote()}>
              {edit?"update":"add"}
            </button>
          </div>
        </div>
      </div>
      <div className="overlay notesForm-overlay" onClick={closeForm}></div>
    </>
  );
}

export default NoteForm;
