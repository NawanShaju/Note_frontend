import React, {useEffect, useState} from 'react'
import NoteCard from './NoteCard'
import { deleteNote, getNote, getNotes, updateNote } from '../services/note.service'
import { LuLoader } from "react-icons/lu";
import Model from './DeleteModel';
import EditModel from './EditModel.jsx';


const BottonSection = () => {
    const [notes, setNotes] = useState([])
    const [noteId, setNoteId] = useState(null)
    const [modalContent, setModalContent] = useState({});

    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        setLoading(true)

        async function getNotesArray() {
            try {
                setLoading(true)
                const data = await getNotes();
                setNotes(data)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getNotesArray()
    }, [])

    useEffect(() => {

        async function getNotesArray() {
            try {
                const note = await getNote(noteId);
                setModalContent(note);
            } catch (error) {
                console.log(error)
            }
        }

        if (noteId) {
            getNotesArray()
        }
    }, [noteId])

    const handleDeleteNote = async () => {
        try {
            const res = noteId && (await deleteNote(noteId));
            setIsModalOpen(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateNote = async () => {
        try {
            const data = {
                title: title,
                content: content,
            }

            const res = noteId && (await updateNote(noteId, data));

            setIsEditModalOpen(false);

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        {isModalOpen && modalContent?.content && 
            (<Model 
                content={modalContent.content} 
                title={modalContent.title} 
                closeModal={() => setIsModalOpen(false)} 
                handleDelete={handleDeleteNote}
            />)}
        {isEditModalOpen && modalContent?.content && 
            (<EditModel 
                title={modalContent?.title}
                updateTitle={title}
                updateContent={content}
                setTitle={setTitle}
                setContent={setContent} 
                closeModal={() => setIsEditModalOpen(false)} 
                handleUpdate={title.length < 1 || content.length < 1 ? () => {} : handleUpdateNote}
            />)}
        <div className='my-8 px-8 w-full flex items-center gap-8 flex-wrap'>
            {
                loading ? (
                    <div className='w-full h-full flex items-center justify-center'>
                        <LuLoader className='w-14 h-14 animate-spin text-blue-400 mt-14'/>
                    </div>
                ) : (
                    <>
                        {notes.map((note) => (
                            <NoteCard 
                                key={note.id} 
                                content={note.content} 
                                title={note.title} 
                                id={note.id}
                                setNoteId={() => setNoteId(note.id)}
                                isDeleteBtnClicked={() => setIsModalOpen(true)}
                                isEditBtnClicked={() => setIsEditModalOpen(true)}
                            />
                        ))}
                    </>
                )
            }

        </div>
    </>
  )
}

export default BottonSection
