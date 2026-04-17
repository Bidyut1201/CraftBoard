
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
      <div className='mx-auto max-w-6xl px-4 py-3'>
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <Link to={"/home"} className='text-xl sm:text-3xl font-bold text-primary font-mono tracking-tight'>
            CraftBoard
          </Link>

          {/* Right side */}
          <div className='flex items-center gap-2 sm:gap-4'>
            {/* User greeting - hidden on mobile */}
            <span className='text-sm text-base-content/70 hidden sm:block'>👋 {user?.name}</span>

            {/* New Note button */}
            <Link to={"/create"} className='btn btn-primary btn-xs sm:btn-sm'>
              <PlusIcon className='size-4' />
              <span className='hidden sm:inline'>New Note</span>
            </Link>

            {/* Logout button */}
            <button onClick={handleLogout} className='btn btn-ghost btn-sm text-base-content/100 hover:text-error hover:bg-transparent '>
              <LogOutIcon className='size-4' />
              <span className='hidden sm:inline'>Logout</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar