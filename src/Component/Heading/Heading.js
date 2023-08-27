import React from 'react'
import { NotesContext } from '../../Context/NotesContext'
import { useContext } from 'react'


export const Heading = () => {
  const {pageHeading} = useContext(NotesContext)
  return (
    <div>{pageHeading}</div>
  )
}
