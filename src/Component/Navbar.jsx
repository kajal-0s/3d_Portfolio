import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full bg-transparent">
      <nav className="lg:px-8 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-1 text-sm ">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Projects', path: '/projects' },
          { name: 'Contact', path: '/contact' },
        ].map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl border border-rose-900 bg-red-900 transition hover:text-violet-300 ${
                isActive ? 'text-black' : 'text-white'
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
