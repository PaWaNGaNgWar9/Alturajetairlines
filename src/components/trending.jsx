import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Trending = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  const options = ["London", "York", "Cambridge", "Coventry"];

  return (
    <div className="px-4 sm:px-10 my-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-5 ml-10 s:ml-0 relative">

        {/* Vertical Line */}
        <div className="h-8 w-[3px] bg-amber-600"></div>

        {/* Text */}
        <p className="text-2xl sm:text-3xl text-blue-950 font-mono font-bold">
          Trending in
        </p>

        <span className="text-blue-950 font-semibold text-2xl sm:text-3xl underline">
          {selected}
        </span>

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoIosArrowDown
            className={`text-gray-400 text-xl sm:text-2xl transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute left-0 top-12 bg-white shadow-lg w-44 rounded-md z-[999]
          transition-all duration-200 origin-top
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="py-2">
            {options.map((city) => (
              <li
                key={city}
                onClick={(e) => {
                  e.stopPropagation();
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
