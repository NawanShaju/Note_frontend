import React, {useState} from 'react'
import { RiSendPlane2Line } from "react-icons/ri";
import { FaHourglassEnd } from "react-icons/fa6";
import { postNotes } from '../services/note.service';

const TopSection = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const resetForm = () => {
        setTitle("")
        setContent("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = postNotes({
                title: title,
                content: content,
            })

            console.log(res)

            resetForm()

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-[60%] my-8 z-10'>
        <h1 className='text-4xl font-extrabold text-center'>Hello, welcome to Jotter</h1>
        <input 
            type="text" 
            id='title' 
            onChange={(evt) => setTitle(evt.target.value)}
            value={title}
            placeholder='Enter title here...' 
            className='outline-none p-3 rounded-md text-black placeholder:text-grey-700' 
        />
        <textarea 
            name="content" 
            id="content"
            onChange={(evt) => setContent(evt.target.value)}
            value={content}
            placeholder='Enter your notes contents...'
            className='outline-none p-3 rounded-md
            text-black placeholder:text-grey-700 h-[120px]' 
        />
        <div className='flex w-full items-center justify-end'>
            <button type='submit' className='bg-green-600 p-2 rounded w-[20%] flex items-center justify-center gap-x-2 hover:bg-green-500'>
                {loading ? 
                    <FaHourglassEnd className='h-5 w-5 animate-spin'/> 
                :
                <> 
                    <span>Add Note</span>
                    <RiSendPlane2Line className='h-5 w-5'/>
                </>}
                
                
                
            </button>
        </div>
    </form>
  )
}

export default TopSection