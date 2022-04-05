import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const updateNote=async(note,property)=>{
    console.log(property)
    await updateDoc(doc(db,"notes",note.id),{
        property:!note.property
    })
}

export {updateNote}