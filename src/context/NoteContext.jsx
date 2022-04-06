import { createContext, useContext,useState,useEffect,useReducer} from "react";
import { colRef } from "../firebase/config";
import { addDoc,onSnapshot, query } from "firebase/firestore";
import {NoteReducer} from "../reducer/reducer"

const defaultValue={}
const NoteContext=createContext(defaultValue)

const NoteProvider=({children})=>{
    
    const [isEdit, setIsEdit] = useState(false)
    const [noteInput,setNoteInput]=useState({
        title:"",
        desc:"",
        isPinned:false,
        isArchive:false,
        isTrash:false
    })
    const [notes,setNotes]=useState([])


    const changeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setNoteInput((prev)=>({...prev,[name]:value}))
    }
    const submitNote=()=>{
        addDoc(colRef,{
            title:noteInput.title,
            desc:noteInput.desc,
            isPinned:noteInput.isPinned,
            isArchive:noteInput.isArchive,
            isTrash:noteInput.isTrash
        })
        setNoteInput({
            title:"",
            desc:"",
            isPinned:false,
            isArchive:false,
            isTrash:false
        })
    }

    const [noteState, noteDispatch] = useReducer(NoteReducer,noteInput)

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

    
    return (
        <>
        <NoteContext.Provider value={{noteInput,setNoteInput,changeHandler,notes,submitNote,isEdit,setIsEdit}}>
            {children}
        </NoteContext.Provider>
        </>
    )
}

const useNote=()=>useContext(NoteContext)

export {useNote,NoteProvider}