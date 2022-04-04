import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";

function Notes() {
    return (
        <div class="note">
            <div class="title-div">
              <h3>This will be Title</h3>
            </div>
            <div class="note-desc-div text-left">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur blanditiis sapiente incidunt unde similique commodi
                soluta reprehenderit sequi vero quia.
              </p>
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
                <button class="btn primary-btn btn-icon">
                <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
    )
}

export default Notes
