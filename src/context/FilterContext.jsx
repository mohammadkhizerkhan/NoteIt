import { createContext, useContext,useReducer } from "react";
import { NoteReducer } from "../reducer/reducer";

const FilterContext=createContext();

const FilterProvider=({children})=>{
    const [filterState, filterDispatch] = useReducer(NoteReducer, {
        search:"",
        sortBy:"new_to_old"
    })
    console.log(filterState)
    return (
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext)

export {useFilter,FilterProvider}