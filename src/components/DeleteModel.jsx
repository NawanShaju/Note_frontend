import React from 'react'
import NoteCard from './NoteCard'
import { IoMdCloseCircle } from "react-icons/io";

const Model = ({closeModal, title, content, handleDelete}) => {
  return (
    <div className='fixed w-full h-full top-0 left-0 bg-black/20'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='relative h-[550px] w-[500px] gap-y-4 border rounded-md bg-white p-8 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-3xl text-center text-black'>
                    Are you sure you want to delete this note?
                </h4>
                <NoteCard 
                    title={title}
                    content={content} 
                    isModel={true} 
                />

                <div className='flex w-full items-center justify-center gap-x-6'>
                    <button onClick={handleDelete} className='bg-red-600 p-2 rounded
                    flex items-center justify-center gap-x-2 w-[120px]
                    hover:bg-red-500'>
                        <span className='text-[12px]'>Yes</span>
                    </button>
                    <button onClick={closeModal} className='bg-green-600 p-2 rounded
                    flex items-center justify-center gap-x-2 w-[120px]
                    hover:bg-blue-500'>
                        <span className='text-[12px]'>Cancel</span>
                    </button>
                    <button onClick={closeModal} className='absolute top-2 right-2'>
                        <IoMdCloseCircle className='text-black w-6 h-6'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Model