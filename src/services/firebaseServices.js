import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";


const updateTrash=async(note)=>{
    await updateDoc(doc(db,"notes",note.id),{
        isTrash:!note.isTrash
    })
}

const updateArchive=async(note)=>{
    await updateDoc(doc(db,"notes",note.id),{
        isArchive:!note.isArchive
    })
}

const deleteNote=async(id)=>{
    await deleteDoc(doc(db,"notes",id))
}

export {updateTrash,deleteNote,updateArchive}