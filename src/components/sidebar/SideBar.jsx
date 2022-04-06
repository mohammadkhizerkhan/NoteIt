import React,{useState} from 'react'
import {Link} from "react-router-dom"
import NoteForm from '../noteform/NoteForm';
function SideBar() {
  
  const [isFormOpen, setIsFormOpen] = useState(false);
    return (
      <>
        <aside class="aside-cont">
          <ul class="list list-stack">
            <Link to="/Home">
            <li class="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--carbon"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#020202"
                  d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"
                ></path>
              </svg>
              <span>Home</span>
            </li>
            </Link>
            <Link to="/Labels">
            <li class="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--ci"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#020202"
                  d="m15.5 19l-11-.01a2 2 0 0 1-2-1.99V7a2 2 0 0 1 2-1.99l11-.01a2 2 0 0 1 1.63.84L21.5 12l-4.37 6.16a2 2 0 0 1-1.63.84ZM4.5 7v10h11l3.55-5l-3.55-5h-11Z"
                ></path>
              </svg>
              <span>Labels</span>
            </li>
            </Link>
            <Link to="Archive">
            <li class="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fluent"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#020202"
                  d="M8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2 4.75C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.832A1.75 1.75 0 0 1 2 6.25v-1.5ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75ZM4 8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8H4Z"
                ></path>
              </svg>
              <span>Archive</span>
            </li>
            </Link>
            <Link to="/Trash">
            <li class="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--raphael"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#020202"
                  d="m20.826 5.75l.396 1.188c1.54.575 2.59 1.44 2.59 2.626c0 2.405-4.31 3.498-8.313 3.498c-4.004 0-8.312-1.093-8.312-3.498c0-1.272 1.21-2.174 2.938-2.746l.388-1.165C8.07 6.3 6.187 7.53 6.187 9.563v2.264c0 1.224.685 2.155 1.76 2.845l.395 9.265c0 1.38 3.274 2.5 7.312 2.5s7.313-1.12 7.313-2.5l.405-9.493c.885-.664 1.438-1.52 1.438-2.617V9.562c.002-1.937-1.71-3.142-3.984-3.812zm-9.733 18.377c-.476-.286-1.022-.846-1.166-1.237c-1.007-2.76-.73-4.92-.53-7.51c.748.28 1.58.492 2.45.643c-.215 2.658-.43 4.923.004 7.828c.066.428-.283.56-.757.277zm6.126.202c-.02.444-.692.855-1.518.855c-.828 0-1.498-.413-1.517-.858c-.126-2.996-.032-5.322.068-8.04c.418.023.835.038 1.246.038c.542 0 1.096-.02 1.65-.06c.1 2.73.196 5.06.07 8.064zm4.256-1.438c-.143.392-.69.95-1.165 1.235c-.473.284-.816.15-.753-.276c.437-2.93.214-5.208-.005-7.896c.88-.174 1.708-.417 2.44-.73c.202 2.66.51 4.852-.516 7.668zM11.338 9.512a1.006 1.006 0 0 0 1.268-.633h-.002l.77-2.317h4.56l.772 2.316a1.003 1.003 0 0 0 1.265.632a1 1 0 0 0 .634-1.265l-1.002-3a1 1 0 0 0-.945-.684h-6.002c-.428 0-.812.275-.948.683l-1 3c-.175.524.108 1.09.63 1.266z"
                ></path>
              </svg>
              <span>Trash</span>
            </li>
            </Link>
            <Link to="/Profile">
            <li class="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--gg"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="#020202" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path>
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"></path>
                </g>
              </svg>
              <span>Profile</span>
            </li>
            </Link>
          </ul>
          <button class="btn btn-m btn-item" onClick={()=>setIsFormOpen(true)}>Create New Note</button>
        </aside>
        {
          isFormOpen && <NoteForm closeForm={()=>setIsFormOpen(false)}/>
        }
      </>
    )
}

export default SideBar
