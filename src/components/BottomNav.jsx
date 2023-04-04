import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <ul className="flex justify-around items-center py-2 h-12">
        <li className="text-center">
          <NavLink to="/" className="inline-block">
            <AiOutlineHome className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink to="/search" className="inline-block">
            <AiOutlineSearch className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink to="/profile" className="inline-block">
            <AiOutlineUser className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink to="/settings" className="inline-block">
            <AiOutlineSetting className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
