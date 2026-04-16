import React from 'react'
import { PlusIcon, LogOutIcon } from 'lucide-react'
import { Link, useNavigate } from "react-router"
import useAuthStore from "../store/authStore"

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");  
  };

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <Link to={"/home"} className='text-3xl font-bold text-primary font-mono tracking-tight'>
                  CraftBoard
                </Link>
                <div className='flex items-center gap-4'>
                    <span className='text-sm text-base-content/70 hidden sm:block'>👋 {user?.name}</span>
                    <Link to={"/create"} className='btn btn-primary'>
                        <PlusIcon className='size-5' />
                        <span>New Note</span>
                    </Link>
                    <button onClick={handleLogout} className='btn btn-outline btn-error btn-sm'>
                        <LogOutIcon className='size-5' />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar