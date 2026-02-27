import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPlaneDeparture,
  FaBook,
  FaFileAlt,
  FaUser
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-white shadow-md bg-gradient-to-l from-blue-900 to-amber-100 h-auto top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 relative">

        {/* Logo */}
        <div className="pointer-events-none">
          <img
            src="/logo.png"
            alt="logo"
            className="w-30 lg:w-50 md:w-45 h-auto md:-translate-x-10 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold ml-30 tracking-wide font-serif hidden md:block">
          <span className="text-blue-950">Altura</span>
          <span className="text-amber-400">Jet</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex space-x-6 text-lg font-medium items-center">

            <li>
              <Link to="/home" className="flex items-center gap-2 hover:text-black">
                <FaHome /> Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-black">
                <FaInfoCircle /> About
              </Link>
            </li>

            <li>
              <Link to="/flights" className="flex items-center gap-2 hover:text-black">
                <FaPlaneDeparture /> Flights
              </Link>
            </li>

            <li className="flex items-center gap-2 hover:text-black cursor-pointer">
              <FaBook /> Book
            </li>
          </ul>

          <a href="#" className="flex items-center gap-2 underline hover:text-black">
            <FaFileAlt /> Tariff Sheet
          </a>
               <li>
                <Link to="/login" className="flex items-center gap-2 bg-yellow-700 px-5 py-1 rounded hover:bg-yellow-800 transition">
          <button className="flex items-center gap-2 bg-yellow-700 px-5 py-1 rounded hover:bg-yellow-800 transition">
            <FaUser /> Login
          </button>
          </Link>
          </li>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl z-50"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-l from-blue-900 to-amber-100 lg:hidden z-40">
            <ul className="flex flex-col items-center gap-4 py-4 text-lg font-medium">
               <Link to="/home" className="flex items-center gap-2 hover:text-black" onClick={() => setOpen(false)}>
              <li className="flex items-center gap-2">
                <FaHome /> Home
              </li>
              </Link>
              <Link to="/about" className="flex items-center gap-2 hover:text-black" onClick={() => setOpen(false)}>
              <li className="flex items-center gap-2">
                <FaInfoCircle /> About
              </li>
                 </Link>
                 <Link to="/flights" className="flex items-center gap-2 hover:text-black" onClick={() => setOpen(false)}>
              <li className="flex items-center gap-2">
                <FaPlaneDeparture /> Flights
              </li>
                  </Link>
                  
              <li className="flex items-center gap-2">
                <FaBook /> Book
              </li>
              <a href="#" className="flex items-center gap-2 underline">
                <FaFileAlt /> Tariff Sheet
              </a>
                <Link to="/login" className="flex items-center gap-2 bg-yellow-700 px-4 py-1 rounded" onClick={() => setOpen(false)}>
              <button className="flex items-center gap-2 bg-yellow-700 px-4 py-1 rounded">
                <FaUser /> Login
              </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;