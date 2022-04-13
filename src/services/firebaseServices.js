import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc,serverTimestamp,arrayUnion,arrayRemove } from "firebase/firestore";
import { addDoc} from "firebase/firestore";
import { colRef,labelColRef } from "../firebase/config";

const addLabel=(labelName)=>{
    addDoc(labelColRef,{
        name:labelName
    })
}

const addNote=(noteInput)=>{
    addDoc(colRef,{
        title:noteInput.title,
        desc:noteInput.desc,
        backgroundcolor:noteInput.backgroundcolor,
        isPinned:noteInput.isPinned,
        isArchive:noteInput.isArchive,
        isTrash:noteInput.isTrash,
        labels:[],
        createdAt:serverTimestamp()
    })
}

// 
const updateNote=(note)=>{
    updateDoc(doc(db,"notes",note.id),{
        title:note.title,
        desc:note.desc,
        backgroundcolor:note.backgroundcolor,
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

const addLabelToNote=async(id,labelInput)=>{
    try {
        await updateDoc(doc(db,"notes",id),{
            labels:arrayUnion(labelInput)
        })
    } catch (error) {
        console.log("error from addLabelToNote",error)
    }
}
const removeLabelFromNote=async(id,labelInput)=>{
    try {
        await updateDoc(doc(db,"notes",id),{
            labels:arrayRemove(labelInput)
        })
    } catch (error) {
        console.log("error from addLabelToNote",error)
    }
}


const deleteNote=async(id)=>{
    try {
        await deleteDoc(doc(db,"notes",id))
    } catch (error) {
        console.log("error from updateDeleteNote",error)  
    }
}

export {addLabelToNote,removeLabelFromNote,addLabel,addNote,updateNote,updateTrash,deleteNote,updateArchive,updatePin,updatePinnedArchive,updateArchivePin,updateNoteColor}