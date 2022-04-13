import { createContext, useContext,useState,useEffect} from "react";
import { colRef,labelColRef } from "../firebase/config";
import { onSnapshot, query} from "firebase/firestore";

const defaultValue={}
const NoteContext=createContext(defaultValue)

const NoteProvider=({children})=>{
    
    
    const [notes,setNotes]=useState([])
    const [labels,setLabels]=useState([])


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

    useEffect(() => {
        const q=query(labelColRef);
        const unSub=onSnapshot(q,(QuerySnapshot)=>{
          let labelArray=[]
          QuerySnapshot.forEach((doc)=>{
            labelArray.push({...doc.data(),id:doc.id})
          })
          setLabels(labelArray)
        })
        return ()=>unSub();
      }, []);

      console.log(notes)

    
    return (
        <>
        <NoteContext.Provider value={{notes,labels}}>
            {children}
        </NoteContext.Provider>
        </>
    )
}

const useNote=()=>useContext(NoteContext)

export {useNote,NoteProvider}