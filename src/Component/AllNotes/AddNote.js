import React from 'react'

export const AddNote = () => {
  return (
    <div className='flex flex-col w-64 bg-[yellow] rounded'>
        <textarea  type='text' placeholder='Add Note.....' class="h-40 resize-none bg-[inherit] p-5 rounded"></textarea>
        <button>Add</button>
    </div>
  )
}

