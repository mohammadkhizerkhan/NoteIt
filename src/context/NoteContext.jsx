import { createContext, useContext,useState,useEffect} from "react";
import { colRef } from "../firebase/config";
import { onSnapshot, query} from "firebase/firestore";

const defaultValue={}
const NoteContext=createContext(defaultValue)

const NoteProvider=({children})=>{
    
    
    const [notes,setNotes]=useState([])


    useEffect(() => {
        const q=query(colRef);
        const unSub=onSnapshot(q,(QuerySnapshot)=>{
          let notesArray=[]
          QuerySnapshot.forEach((doc)=>{
            notesArray.push({...doc.data(),id:doc.id})
          })
          setNotes(notesArray)
        })
        return ()=>unSub();
      }, []);
      // console.log(notes)

    
    return (
        <>
        <NoteContext.Provider value={{notes}}>
            {children}
        </NoteContext.Provider>
        </>
    )
}

const useNote=()=>useContext(NoteContext)

export {useNote,NoteProvider}