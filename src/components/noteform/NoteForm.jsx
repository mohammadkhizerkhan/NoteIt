import React, { useEffect,useState } from "react";

import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";

import { addNote, updateNote } from "../../services/firebaseServices";

function NoteForm({ closeForm, editNoteData, edit }) {
  console.log(editNoteData);
  const [noteInput, setNoteInput] = useState({
    title: "",
    desc: "",
    isPinned: false,
    isArchive: false,
    isTrash: false,
  });

  const changeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setNoteInput((prev)=>({...prev,[name]:value}))
}
console.log(noteInput)

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
            <button class="btn primary-btn btn-icon">
              <MdOutlineColorLens />
            </button>
            <button class="btn primary-btn btn-icon">
              <MdOutlineLabel />
            </button>
            <button class="btn primary-btn btn-icon">
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
