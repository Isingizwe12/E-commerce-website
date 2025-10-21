import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav
      className="flex flex-col md:flex-row bg-gradient-to-b from-pink-50 to-rose-100 shadow-md py-6 mx-auto px-4 justify-between items-center text-gray-700 font-medium"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Left part - Logo */}
      <div>
        <h1 className="text-2xl font-bold text-rose-600 tracking-wide cursor-pointer">
          <span className="text-gray-800 cursor-pointer">Ally</span>Shop
        </h1>
      </div>

      {/* Middle part - Links */}
      <div>
        <ul className="flex flex-col md:flex-row gap-5">
          <li className="hover:text-rose-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-rose-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-rose-500 cursor-pointer">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* Right part - Cart + Contact */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
      

        {/* Contact Button */}
        <button className="bg-rose-600 py-2 px-4 rounded text-white hover:opacity-80 cursor-pointer">
          <Link to='/contact'>Contact Us</Link>
        </button>

          {/* Cart Icon (SVG) */}
        <div className="relative cursor-pointer hover:text-rose-500 transition">
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" strokeWidth={1.5}stroke="currentColor"className="w-6 h-6 text-gray-700" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.09.835l.383 1.437m0 0L6.75 14.25A1.125 1.125 0 007.875 15h10.125a1.125 1.125 0 001.125-1.125l1.5-7.5A1.125 1.125 0 0019.5 5.25H5.109m0 0L4.5 2.25M9 21a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            {/* Cart counter badge */}

            {/* Cart counter badge */}
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-rose-600 text-white rounded-full text-xs px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
