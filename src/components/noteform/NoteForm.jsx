import React from "react";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
function NoteForm() {
  return (
    <div className="note-editor">
      <div className="note-editor-title">
        <input type="text" className="input title-input" placeholder="Title"/>
      </div>
      <div className="note-editor-desc">
        <textarea name="" id="" cols="30" rows="5" className="input desc-input" placeholder="Take a note..."></textarea>
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
              <button className="btn btn-s">Cancel</button><button className="btn btn-s">Add</button>
          </div>
      </div>
    </div>
  );
}

export default NoteForm;
