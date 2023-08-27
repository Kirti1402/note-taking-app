import {useContext} from 'react'
import { NotesContext } from '../Context/NotesContext';
import { AddNote } from '../Component/Notes/AddNote'
import { NoteList } from '../Component/Notes/NoteList';

export const AllNotes = () => {
    const {noteState}  = useContext(NotesContext);
    console.log("noteState",noteState.noteLists)
  return (
    <div className='flex gap-10  '>
        {noteState.noteLists.length > 0 && <NoteList/>}
        <AddNote/>
        </div>
  )
}
