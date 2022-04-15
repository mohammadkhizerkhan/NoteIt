import { ACTION } from "../action";

const NoteReducer=(state,action)=>{
    switch (action.type) {
        case ACTION.SEARCH:
            return {...state,search:action.payload};
        case ACTION.SORT:
            return {...state,sortBy:action.payload}
        default:
            return state;
    }
}

export {NoteReducer}
