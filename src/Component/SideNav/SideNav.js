import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotesContext } from '../../Context/NotesContext'


export const SideNav = () => {
  const {SetPageHeading} = useContext(NotesContext)
  return (
    <>
    <ul>
        <li className='cursor-pointer' onClick={()=> SetPageHeading("Notes")}>All Notes</li>
        <li className='cursor-pointer'>Archived Notes</li>
        <li className='cursor-pointer'  onClick={()=> SetPageHeading("Deleted Notes")}>Deleted Notes </li>
    </ul>
    </>
  )
}
