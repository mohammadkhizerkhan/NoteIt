import { createContext, useContext,useReducer } from "react";
import { NoteReducer } from "../reducer/reducer";

const FilterContext=createContext();

const FilterProvider=({children})=>{
    const [filterState, filterDispatch] = useReducer(NoteReducer, {
        search:""
    })
    return (
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext)

export {useFilter,FilterProvider}