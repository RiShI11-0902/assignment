import React, { useState } from 'react';
import { e, g, logo, x, y, h } from '../assets';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="navBar py-6 flex  lg:flex-row items-center justify-between">
        <div className="logo flex items-center">
          <img className='bg-white w-8' src={logo} alt="Logo" />
          <div className="chars flex items-center ml-2">
            <img className='w-4' src={h} alt="" />
            <img className='w-4' src={y} alt="" />
            <img className='w-4' src={g} alt="" />
            <img className='w-4' src={g} alt="" />
            <img className='w-4' src={e} alt="" />
            <img className='-mt-2' src={x} alt="" />
          </div>
        </div>
        <div className="lg:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleNavbar} className="text-3xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleNavbar} className="text-3xl cursor-pointer" />
          )}
        </div>
        <div className={`list mt-4 lg:mt-0 ${isOpen ? 'block absolute w-full rounded-3xl mx-auto top-10 left-0 bg-blue-200 p-5' : 'hidden'} lg:block`}>
          <ul className='flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-5'>
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li><button className='lg:ml-4 gradient rounded-full text-white px-4 py-2'>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
