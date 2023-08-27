import React from 'react'
import {useContext} from 'react'
import { NotesContext } from '../Context/NotesContext';

export const DeletedNotes = () => {
    const {noteState,dispatch} = useContext(NotesContext)
  return (
    <>{noteState.deletedNotes.length> 0 ? noteState.deletedNotes.map(note =>{
        return <div className='flex w-64 bg-[#fef08a] rounded p-5 flex-col justify-between'>
            <p>{note}</p>
            </div>
    }) :<p>No junk</p>}
        </>
  )
}
