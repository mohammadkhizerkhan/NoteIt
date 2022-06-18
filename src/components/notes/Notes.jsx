import React from "react";
import { useFilter } from "../../context/FilterContext";

import { useNote } from "../../context/NoteContext";
import Note from "../note/Note";
import Sort from "../sort/Sort";

function Notes() {
  const { notes } = useNote();
  const filterNotes = () => {
    let sortedNotes = [...notes];
    if (filterState.search) {
      sortedNotes = sortedNotes.filter((note) =>
        note.title.toLowerCase().includes(filterState.search.toLowerCase())
      );
    }
    if (filterState.sortBy === "new_to_old") {
      sortedNotes = sortedNotes.sort(
        (note1, note2) => note2.createdAt - note1.createdAt
      );
    }
    if (filterState.sortBy === "old_to_new") {
      sortedNotes = sortedNotes.sort(
        (note1, note2) => note1.createdAt - note2.createdAt
      );
    }
    if (filterState.sortBy === "A_Z") {
      sortedNotes = sortedNotes.sort((note1, note2) =>
        note1.title.localeCompare(note2.title)
      );
    }
    if (filterState.sortBy === "Z_A") {
      sortedNotes = sortedNotes.sort((note1, note2) =>
        note2.title.localeCompare(note1.title)
      );
    }

    return sortedNotes;
  };

  const { filterState } = useFilter();
  const pinnedNotes = filterNotes().filter(
    (item) => item.isPinned && !item.isTrash && !item.isArchive
  );
  const notpinnedNotes = filterNotes().filter(
    (item) => !item.isPinned && !item.isTrash && !item.isArchive
  );

  return (
    <>
      <Sort />
      {pinnedNotes.length > 0 && <h4 className="main-headers">Pinned notes</h4>}
      {pinnedNotes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
      {notpinnedNotes.length > 0 && (
        <h4 className="main-headers">unpinned notes</h4>
      )}
      {notpinnedNotes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
    </>
  );
}

export default Notes;
