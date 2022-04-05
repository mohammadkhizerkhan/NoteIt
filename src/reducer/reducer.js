import { updateNote } from "../services/firebaseServices";
import { ACTION } from "../store/constant";

const NoteReducer=(state,action)=>{
    switch (action.type) {
        case ACTION.TRASH_DOC:
            console.log("click")
            return updateNote(action.payload,"isTrash")
        default:
            return state;
    }
}

export {NoteReducer}
