import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <ul className="flex justify-around items-center py-3">
        <li className="w-1/4 text-center">
          <NavLink to="/">
            <AiOutlineHome className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="w-1/4 text-center">
          <NavLink to="/search">
            <AiOutlineSearch className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="w-1/4 text-center">
          <NavLink to="/profile">
            <AiOutlineUser className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
        <li className="w-1/4 text-center">
          <NavLink to="/settings">
            <AiOutlineSetting className="text-gray-400 text-2xl" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
