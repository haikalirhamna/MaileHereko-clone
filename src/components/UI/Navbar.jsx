import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isScrolled }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setShow(false);
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 ${isScrolled ? 'bg-neutral-800/40 backdrop-blur-md' : ''} flex justify-between items-center py-4 px-2.5 sm:px-4 lg:px-8 xl:px-32`}>
        <Link to={'/'}>
          <div className="brand w-10 h-10">
            <img src="/icons/icon.svg" alt="Logo MaileHereko" className="w-full h-full" />
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-x-4 text-neutral-200 text-base">
          <Link to={'/movie'}>
            <li className="relative py-3 px-4 hover:before:w-full">Movies</li>
          </Link>
          <Link to={'/tv'}>
            <li className="relative py-3 px-4 hover:before:w-full">TV Shows</li>
          </Link>
          <Link to={'/login'}>
            <li className="relative py-3 px-4 hover:before:w-full">Login</li>
          </Link>
        </ul>
        <div
          onClick={() => setShow((prev) => !prev)}
          className='bugger w-10 h-10 cursor-pointer flex lg:hidden flex-col justify-between items-center transition-all duration-200 ease-in-out py-1'
        >
          <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${show ? "rotate-45 translate-y-3.5" : ""}`}></span>
          <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${show ? 'opacity-0 translate-x-full' : ''}`}></span>
          <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${show ? "-rotate-45 -translate-y-3.5" : ""}`}></span>
        </div>
      </nav>
      <aside className={`fixed inset-0 bg-neutral-900 transition-all duration-300 ease-in-out z-20 overflow-hidden pt-[72px] ${show ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex lg:hidden flex-col items-center gap-y-4 text-neutral-200 text-base">
          <li onClick={() => handleNavigate('/movie')} className="py-3 px-4 hover:opacity-85 cursor-pointer">Movies</li>
          <li onClick={() => handleNavigate('/tv')} className="py-3 px-4 hover:opacity-85 cursor-pointer">TV Shows</li>
          <li onClick={() => handleNavigate('/login')} className="py-3 px-4 hover:opacity-85 cursor-pointer">Login</li>
        </ul>
      </aside>
    </>
  );
}

Navbar.propTypes = {
  isScrolled: PropTypes.bool,
};