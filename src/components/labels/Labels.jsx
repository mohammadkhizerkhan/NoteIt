import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNote } from "../../context/NoteContext";
import Note from "../note/Note";
import { labelColRef } from "../../firebase/config";
import { query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { deleteLabel } from "../../services/firebaseServices";

function Labels() {
  const { labelName } = useParams();
  const { notes } = useNote();
  const labeledNotes = notes.filter((note) => note.labels.includes(labelName));
  const [labelId,setLabelId]=useState("")

  useEffect(() => {
    (async () => {
      const q = query(labelColRef, where("name", "==", labelName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setLabelId(doc.id)
      });
    })();
  }, []);
  return (
    <>
      <h1>
        {labeledNotes.length ? `This Is ${labelName}` : "This label is empty"}
      </h1>
      <button
        className="btn btn-m btn-item"
        style={{marginBottom:"10px"}}
          onClick={() => deleteLabel(labelId)}
      >
        Delete {labelName}
      </button>
      {labeledNotes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
    </>
  );
}

export default Labels;
