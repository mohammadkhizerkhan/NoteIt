import React,{useEffect} from "react";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import {useNote} from "../../context/NoteContext"

function NoteForm({closeForm,editNoteData,edit}) {
  const {noteInput,changeHandler,submitNote,setNoteInput} = useNote();
  console.log(editNoteData)
  
  useEffect(() => {
    if(edit){
      setNoteInput(editNoteData)
    }
  }, [])
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
            <button className="btn btn-s" onClick={closeForm}>Cancel</button>
            <button className="btn btn-s" onClick={submitNote}>Add</button>
          </div>
        </div>
      </div>
      <div className="overlay notesForm-overlay" onClick={closeForm}></div>
    </>
  );
}

export default NoteForm;
