import React from 'react'

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row bg-gradient-to-b from-pink-50 to-rose-100 shadow-md py-6 mx-auto px-4 justify-between items-center text-gray-700 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Left part */}
      <div>
 <h1 className="text-2xl font-bold text-rose-600 tracking-wide cursor-pointer">
  <span className="text-gray-800 cursor-pointer">Shop</span>Ease
</h1>
      </div>

      {/* Middle part */}
      <div>
  <ul className='flex flex-col md:flex-row gap-5 '>
    <li className='hover:text-rose-500  cursor-pointer'>Home</li>
    <li className='hover:text-rose-500  cursor-pointer'>Products</li>
    <li className='hover:text-rose-500  cursor-pointer'>About</li>
  </ul>
      </div>
        {/* Right part */}
        <div>
  <button className='bg-rose-600 py-2 px-4 rounded text-white hover:opacity-80 cursor-pointer'>Contact Us</button>
        </div>

    </nav>
  )
}

export default Navbar
