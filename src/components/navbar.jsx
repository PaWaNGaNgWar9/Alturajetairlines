import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-white shadow-md bg-gradient-to-l from-blue-900 to-amber-100 h-auto top-0 left-0">
      <div className="max-w-7xl  mx-auto flex justify-between items-center px-4 relative">

        {/* Left: logo */}
        <div className="pointer-events-none">
          <img
            src="/logo.png"
            alt="logo"
            className="w-30 lg:w-50 md:w-45 h-auto md:-translate-x-10 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold ml-30 tracking-wide  font-serif hidden md:block">
         <span className="text-blue-950"> Altura</span><span className="text-amber-400">Jet</span>
        </h1>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex space-x-6 text-lg font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Flights</li>
            <li className="hover:text-black cursor-pointer">Book</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>

          <a href="#" className="underline hover:text-black">
            Tariff Sheet
          </a>

          <button className="bg-yellow-700 px-5 py-1 rounded">
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-3xl z-50"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-l from-blue-900 to-amber-100 lg:hidden z-40">
            <ul className="flex flex-col items-center gap-4 py-2 text-lg font-medium">
              <li>Home</li>
              <li>About</li>
              <li>Flights</li>
              <li>Book</li>
              <li>Contact</li>
              <a href="#" className="underline">Tariff Sheet</a>
              <button className="bg-yellow-700 px-6 py-1 rounded">
                Login
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;       