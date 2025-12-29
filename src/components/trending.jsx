import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Trending = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("London");

  const options = ["London", "York", "Cambridge", "Coventry"];

  return (
    <div className="px-4 sm:px-10 my-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-5 ml-10  s:ml-0 relative">

        {/* Vertical line */}
        <div className="h-8 w-[3px] bg-amber-600"></div>

        {/* Heading */}
        <p className="text-2xl sm:text-3xl text-blue-950  font-mono font-bold">
          Trending in
        </p>

        {/* Selected value */}
        <span className="text-blue-950 font-semibold text-2xl sm:text-3xl underline">
          {selected}
        </span>

        {/* Dropdown toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center"
        >
          <IoIosArrowDown
            className={`text-gray-400 text-xl sm:text-2xl transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 sm:left-auto top-12 sm:top-14 
          bg-white text-lg shadow-lg w-44 sm:w-48 z-50 rounded-md
          transition-all duration-200 origin-top
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        >
          <ul className="py-2">
            {options.map((city, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(city);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer 
                           text-blue-950 font-semibold"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Trending;
