import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";



const updatePin=async(note)=>{
    try {
        await updateDoc(doc(db,"notes",note.id),{
            isPinned:!note.isPinned,
            // isArchive:!note.isArchive
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
const deleteNote=async(id)=>{
    try {
        await deleteDoc(doc(db,"notes",id))
    } catch (error) {
        console.log("error from updateDeleteNote",error)  
    }
}

export {updateTrash,deleteNote,updateArchive,updatePin,updatePinnedArchive,updateArchivePin}