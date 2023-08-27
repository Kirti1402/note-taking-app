import {notesIntialState,noteReducer} from "../Reducer/NotesReducer"
import { createContext ,useEffect,useReducer} from "react";


export const NotesContext = createContext();

export const NotesContextProvider = ({children})=>{
    const [noteState,dispatch] = useReducer(noteReducer,notesIntialState)
    console.log("noteState",noteState,dispatch)

    useEffect(()=>{
        localStorage.setItem("NoteList",JSON.stringify(noteState));
    })
    return <NotesContext.Provider value={{noteState,dispatch}}>
        {children}
    </NotesContext.Provider>
}