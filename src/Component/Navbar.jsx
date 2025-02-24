import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    
    <header className='header' >
        <nav className="flex text-lg ml-210 font-medium bg-transparent p-3  space-x-30">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-black' : 'text-white'}>
        <p className=' hover:text-violet-700 h-9 w-15 rounded-xl p-1 bg-red-900 border-rose-900 border-1  '>Home</p>
        </NavLink>
        
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-black' : 'text-white'}>
            <p className=' hover:text-violet-700 h-9 w-15 rounded-xl p-1 bg-red-900 border-rose-900 border-1     '>About</p> 
            </NavLink>

            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-black': 'text-white'}>
            <p className=' hover:text-violet-700 h-9 w-17 rounded-xl p-1 bg-red-900 border-rose-900 border-1  '>Project</p> 
            </NavLink>

           
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-black': 'text-white'}>
            <p className=' hover:text-violet-700 h-9 w-19 rounded-xl p-1 bg-red-900 border-rose-900 border-1  '>Contact</p>
            </NavLink>

        </nav>

        
    </header>
    
  )
}

export default Navbar   

