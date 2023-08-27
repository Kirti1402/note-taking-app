import {notesIntialState,noteReducer} from "../Reducer/NotesReducer"
import { createContext ,useEffect,useReducer, useState} from "react";


export const NotesContext = createContext();

export const NotesContextProvider = ({children})=>{
    const [pageHeading,SetPageHeading] = useState("Notes")
    const [noteState,dispatch] = useReducer(noteReducer,notesIntialState)
    console.log("notestate in cotext",noteState)

    useEffect(()=>{
        localStorage.setItem("NoteList",JSON.stringify(noteState));
    })
    return <NotesContext.Provider value={{noteState,dispatch,pageHeading,SetPageHeading}}>
        {children}
    </NotesContext.Provider>
}