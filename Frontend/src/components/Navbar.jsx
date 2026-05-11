
import React from 'react'
import { LogOutIcon, SearchIcon } from 'lucide-react'
import { Link, useNavigate } from "react-router"
import useAuthStore from "../store/authStore"

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className=' px-6 py-3'>
        <div className='flex items-center justify-between gap-2'>

          {/* Logo */}
          <Link to={"/home"} className='text-xl sm:text-3xl font-bold text-primary font-mono tracking-tight shrink-0'>
            CraftBoard
          </Link>

          {/* Search Bar - center */}
          <div className='hidden sm:block flex-1 max-w-xs'>
            <div className='relative'>
              <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content/40' />
              <input
                type='text'
                placeholder='Search Notes'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='input input-bordered w-full pl-9 pr-4 py-2 text-sm bg-base-100 text-white placeholder:text-base-content'
              />
            </div>
          </div>


          {/* Right side - grouped box like LeafNote */}
          <div className='flex items-center gap-2 sm:gap-4 sm:border sm:border-base-content/20 sm:rounded-xl sm:px-11 sm:py-1 sm:bg-base-200 shrink-0'>
            {/* Avatar circle */}
            <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-bold'>
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* Name + Logout stacked */}
            <div className='hidden sm:flex flex-col leading-tight'>
              <span className='text-base font-semibold text-primary'>{user?.name}</span>
              <button
                onClick={handleLogout}
                className='text-sm text-base-content text-left hover:underline'
              >
                Logout
              </button>
            </div>

            {/* Mobile logout icon fallback */}
            <button onClick={handleLogout} className='sm:hidden text-base-content/70 hover:text-error'>
              <LogOutIcon className='size-4' />
            </button>
          </div>

        </div>
         {/* Mobile only - search bar second row */}
        <div className='sm:hidden mt-3'>
          <div className='relative'>
            <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content/40' />
            <input
              type='text'
              placeholder='Search Notes'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='input input-bordered w-full pl-9 pr-4 py-2 text-sm bg-base-100 text-white placeholder:text-base-content'
            />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar