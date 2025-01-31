import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const EditModel = ({closeModal, title, updateContent, updateTitle, handleUpdate, setTitle, setContent}) => {

  return (
    <div className='fixed w-full h-full top-0 left-0 bg-black/20'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='relative h-[550px] w-[500px] gap-y-4 border rounded-md bg-white p-8 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-3xl text-center text-black'>
                    Are you sure you want to edit this note?
                </h4>

                <p className='text-black text-left'>title: {title}</p>

                <div className='w-full bg-slate-800 rounded-lg p-6 flex
                flex-col gap-y-8 h-[400px]'>
                    <input 
                        type="text" 
                        id='title' 
                        onChange={(evt) => setTitle(evt.target.value)}
                        value={updateTitle}
                        placeholder='Enter title here...' 
                        className='outline-none p-3 bg-slate-200 rounded-sm text-black placeholder:text-grey-700' 
                    />
                    <textarea 
                        name="content" 
                        id="content"
                        onChange={(evt) => setContent(evt.target.value)}
                        value={updateContent}
                        placeholder='Enter your notes contents...'
                        className='outline-none p-3 bg-slate-200 rounded-sm
                        text-black placeholder:text-grey-700 h-[60%]' 
                    />
                </div>

                <div className='flex w-full items-center justify-center gap-x-6'>
                    <button onClick={handleUpdate} className={`bg-red-600 p-2 rounded
                    flex items-center justify-center gap-x-2 w-[120px]
                    ${updateTitle.length < 1 || updateContent.length < 1 ? "cursor-not-allowed" : "cursor-pointer hover:bg-red-500 "}`}>
                        <span className='text-[12px]'>Update</span>
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

export default EditModel