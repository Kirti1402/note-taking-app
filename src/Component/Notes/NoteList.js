import {useContext} from 'react'
import { NotesContext } from '../../Context/NotesContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';


export const NoteList = () => {
    const {noteState,dispatch} = useContext(NotesContext)
    const onClickHandleDeleteNote = (index,note)=>{
        console.log("delete",index,note)
        dispatch({type:"DELETENOTE",payload:index})
    }
    
  return (
    <>{noteState.noteLists.length > 0 && noteState.noteLists.map((note,index) =>{
        return <div  key={index} className='flex w-64 bg-[#fef08a] rounded p-5 flex-col justify-between'>
            <p>{note}</p>
            <div className='flex justify-evenly'>
                <button className='bg-[blue] rounded w-15'> Edit</button>
                <button className='bg-[red] rounded w-15'onClick={()=>onClickHandleDeleteNote(index,note)}>Delete</button>
                <button className='bg-[lime] rounded w-15'>Archive</button>
            </div>
            </div>
    })}</>
  )
}
