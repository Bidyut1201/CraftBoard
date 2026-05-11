
import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import RateLimitedUI from '../components/RateLimitedUI';
import api from "../lib/axios"
import toast from "react-hot-toast"
import Notecard from "../components/NoteCard"
import NotesNotFound from "../components/NotesNotFound";
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const HomePage = () => {

  const [isRateLimited, setIsrateLimited] = useState(false);
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data)
        setNotes(res.data)
        setIsrateLimited(false)
      } catch (error) {
        console.log("Error fetching notes");
        if (error.response.status === 429) {
          setIsrateLimited(true)
        } else {
          toast.error("failed to load notes")
        }
      } finally {
        setLoading(false)
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen'>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}

        {filteredNotes.length === 0 && !isRateLimited && !loading && <NotesNotFound />}
        {filteredNotes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredNotes.map((note) => (
              <Notecard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>

      {/* Floating New Note button - bottom right */}
      <Link
        to={"/create"}
        className='fixed bottom-6 right-6 shadow-lg flex items-center justify-center rounded-full bg-primary'
        style={{ width: '50px', height: '50px' }}
      >
        <PlusIcon className='text-white' style={{ width: '22px', height: '22px' }} />
      </Link>

    </div>
  )
}

export default HomePage