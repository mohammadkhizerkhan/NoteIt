import { createContext, useContext,useState } from "react";

const defaultValue={}
const NoteContext=createContext(defaultValue)

const NoteProvider=({children})=>{
    const [isFormOpen, setIsFormOpen] = useState(false);;
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
    const submitHandler=()=>{
        
    }
    console.log(noteInput.title,noteInput.desc)
    return (
        <>
        <NoteContext.Provider value={{isFormOpen,setIsFormOpen,noteInput,changeHandler}}>
            {children}
        </NoteContext.Provider>
        </>
    )
}

const useNote=()=>useContext(NoteContext)

export {useNote,NoteProvider}