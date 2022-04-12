import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc,serverTimestamp } from "firebase/firestore";
import { addDoc} from "firebase/firestore";
import { colRef } from "../firebase/config";


const addNote=(noteInput)=>{
    addDoc(colRef,{
        title:noteInput.title,
        desc:noteInput.desc,
        backgroundcolor:"white",
        isPinned:noteInput.isPinned,
        isArchive:noteInput.isArchive,
        isTrash:noteInput.isTrash,
        createdAt:serverTimestamp()
    })
}

// 
const updateNote=(note)=>{
    updateDoc(doc(db,"notes",note.id),{
        title:note.title,
        desc:note.desc,
        isPinned:note.isPinned,
        isArchive:note.isArchive,
        isTrash:note.isTrash,
        createdAt:serverTimestamp()
    })
}



const updatePin=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isPinned:!note.isPinned,
        })
    } catch (error) {
        console.log("error from updatePin",error)
    }
}

const updateArchivePin=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isPinned:!note.isPinned,
            isArchive:false
        })
    } catch (error) {
        console.log("error from updateArchivePin",error)
    }
}

const updatePinnedArchive=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isPinned:false,
            isArchive:!note.isArchive
        })
    } catch (error) {
        console.log("error from updatePinnedArchive",error) 
    }
}

const updateArchive=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isArchive:!note.isArchive
        })
    } catch (error) {
        console.log("error from updateArchive",error) 
    }
}

const updateTrash=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isTrash:!note.isTrash
        })
    } catch (error) {
        console.log("error from updateTrash",error)
    }
}
const updateNoteColor=async(id,color)=>{
    try {
        await updateDoc(doc(db,"notes",id),{
            backgroundcolor:color
        })
    } catch (error) {
        console.log("error from updateTrash",error)
    }
}
const deleteNote=async(id)=>{
    try {
        await deleteDoc(doc(db,"notes",id))
    } catch (error) {
        console.log("error from updateDeleteNote",error)  
    }
}

export {addNote,updateNote,updateTrash,deleteNote,updateArchive,updatePin,updatePinnedArchive,updateArchivePin,updateNoteColor}