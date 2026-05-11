
import React, { useState } from 'react'
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router"
import { formatDate } from '../lib/utils';
import api from "../lib/axios"
import toast from "react-hot-toast"

const NoteCard = ({ note, setNotes }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note._id}`)
      setNotes((prev) => prev.filter(n => n._id !== note._id))
      toast.success("Note deleted successfully")
    } catch (error) {
      console.log('Error in handleDelete', error)
      toast.error("failed to delete note")
    } finally {
      setShowModal(false)
    }
  }

  return (
    <>
      <Link to={`/notes/${note._id}`}
        className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] h-auto min-h-0'
      >
        <div className='card-body p-4'>
          <h3 className='card-title text-base-content'>{note.title}</h3>
          <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
          <div className='card-action justify-between items-center mt-4'>
            <span className='text-sm text-base-content/60'>
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className='flex items-center gap-1'>
              <PenSquareIcon className="size-4" />
              <button
                className='btn btn-ghost btn-xs text-error'
                onClick={(e) => { e.preventDefault(); setShowModal(true); }}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Custom Delete Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-6'>
          <div className='rounded-2xl p-6 shadow-xl flex flex-col gap-4' style={{ backgroundColor: '#1a1a2e', width: '420px' }}>
            <p className='text-white text-sm'>Are you sure you want to delete this note?</p>
            <div className='flex justify-end gap-3'>
              <button
                className='btn btn-sm rounded-full text-sm font-normal hover:scale-105 transition-transform duration-150'
                style={{ backgroundColor: '#e8e8e8', color: '#1a1a2e', minWidth: '70px' }}
                onClick={handleDelete}
              >
                OK
              </button>
              <button
                className='btn btn-sm rounded-full text-sm font-normal text-white hover:scale-105 transition-transform duration-150'
                style={{ backgroundColor: '#2d4a6e', minWidth: '90px' }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NoteCard