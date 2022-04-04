import React from 'react'

function Search() {
    return (
        <div class="input-icons">
            <div class="icon-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                link="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--bi"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#020202"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                ></path>
              </svg>
            </div>
            <input type="text" class="input input-search" />
          </div>
    )
}

export default Search
