import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const NoteCard = ({title, content, isModel, isDeleteBtnClicked, id, setNoteId, isEditBtnClicked}) => {

    return (
    <>
        <div className={`w-[380px] h-[320px] bg-slate-800 rounded-lg px-6 flex
        flex-col gap-y-8 hover:bg-slate-800 ${isModel ? 'h-fit py-4' : 'h-[320px] py-6'}`}>
            <h2 className='text-2xl font-semibold pb-2 border-b border-gray-700'>
                {title}
            </h2>
            <p className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin h-[144px] overflow-y-auto'>
                {content}
            </p>

            {

                !isModel ? (
                    <div className='flex w-full items-center justify-end gap-x-6'>
                        <button onClick={() => {
                            isEditBtnClicked()
                            setNoteId(id);
                        }} className='bg-blue-600 p-2 rounded w-[120px]
                        flex items-center justify-center gap-x-2
                        hover:bg-blue-500'>
                            <span className='text-[12px]'>Edit Note</span>
                            <CiEdit className='h-5 w-5'/>
                        </button>
                        <button onClick={() => {
                            isDeleteBtnClicked()
                            setNoteId(id);
                        }} className='bg-red-600 p-2 rounded
                        flex items-center justify-center gap-x-2 w-[120px]
                        hover:bg-red-500'>
                            <span className='text-[12px]'>Delete Note</span>
                            <MdDeleteOutline className='w-5 h-5'/>
                        </button>
                    </div>
                ) : (
                    ""
                )

            }

        </div>
    </>
  )
}

export default NoteCard