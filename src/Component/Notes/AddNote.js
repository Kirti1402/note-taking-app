import {useContext,useState} from 'react'
import { NotesContext } from '../../Context/NotesContext'

export const AddNote = () => {
  const {dispatch}  = useContext(NotesContext);
  const [addNote,setAddNote] = useState("")
  console.log(addNote);
  return (
    <div className='flex flex-col w-64 bg-[yellow] rounded'>
        <textarea onChange={(e)=>setAddNote(e.target.value)}  value={addNote} type='text' placeholder='Add Note.....' class="h-40 resize-none bg-[inherit] p-5 rounded"></textarea>
        <button onClick={()=> dispatch({type:"ADD_NOTE",payload:addNote})}>Add</button>
    </div>
  )
}

