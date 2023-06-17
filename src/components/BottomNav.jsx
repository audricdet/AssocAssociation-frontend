import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineFilter } from 'react-icons/ai';

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-assoc shadow-md">
      <ul className="flex justify-around items-center py-2 h-12">
        <li className="text-center">
          <NavLink to="/associations" className="inline-block">
            <AiOutlineHome className="text-assoc-gray text-2xl" />
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink to="/categories" className="inline-block">
            <AiOutlineFilter className="text-assoc-gray text-2xl" />
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink to="/profile" className="inline-block">
            <AiOutlineUser className="text-assoc-gray text-2xl" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;

