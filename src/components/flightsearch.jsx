import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

const Flightssearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  // Passenger state
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <div className="bg-white -translate-y-10 rounded-lg max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
        <p className="text-lg font-bold text-blue-950 p-3 text-center w-50">
          BOOK TRIP
        </p>

        {/* Tabs */}
        <div className="bg-black text-white p-4 md:w-205 overflow-x-auto">
          <div className="flex gap-4 md:gap-20 whitespace-nowrap">
            <a className="cursor-pointer py-2 hover:bg-gray-600">MANAGE BOOKING</a>
            <a className="cursor-pointer py-2 hover:bg-gray-600">CHECK IN</a>
            <a className="cursor-pointer py-2 hover:bg-gray-600">FLIGHT STATUS</a>
            <a className="cursor-pointer py-2 hover:bg-gray-600">FLIGHT SCHEDULE</a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <p className="text-3xl font-mono text-blue-950">
          Hi, where would you like to go?
        </p>

        <div className="w-full h-[1px] mt-5 bg-gray-200"></div>

        {/* Booking */}
        <div className="flex flex-col md:flex-row gap-5 mt-5 items-center">
          {/* From */}
          <div className="border border-gray-300 w-60 p-4 md:border-r-0 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <input
              type="text"
              placeholder="From"
              className="w-full text-lg font-bold outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Plane Icon */}
          <IoIosAirplane
            className={`text-3xl transition-all duration-300 ${
              isFocused ? "text-blue-500" : "text-gray-500"
            }`}
          />

          {/* To */}
          <div className="border border-gray-300 w-60 p-4  md:border-l-0 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <input
              type="text"
              placeholder="To"
              className="w-full text-lg font-bold outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Dates */}
          <div className="border border-gray-300 p-2">
            <label className="block text-sm text-gray-500 mb-1">Depart Date</label>
            <input type="date" className="w-60 outline-none" />
          </div>

          <div className="border border-gray-300 p-2">
            <label className="block text-sm text-gray-500 mb-1">Return Date</label>
            <input type="date" className="w-60 outline-none" />
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row pt-5 items-center gap-3 relative">
          {/* Class */}
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 w-85 h-14 px-3"
          >
            <option value="">Economy</option>
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="Suites">First / Suites</option>
          </select>

          {/* PASSENGER DROPDOWN (FIXED PART) */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="border border-gray-300 w-85 h-14 px-4 flex items-center justify-between cursor-pointer bg-white"
            >
              <span>{adults + children + infants} Passenger</span>
              <span>▼</span>
            </div>

            {open && (
              <div className="absolute mt-2 w-85 bg-white border rounded-md shadow-lg z-50">
                <PassengerRow label="Adults" value={adults} setValue={setAdults} min={1} />
                <PassengerRow label="Children" value={children} setValue={setChildren} min={0} />
                <PassengerRow label="Infants" value={infants} setValue={setInfants} min={0} />

                <button
                  onClick={() => setOpen(false)}
                  className="w-full py-2 bg-blue-600 text-white rounded-b-md"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="bg-blue-950 p-3 text-center w-full cursor-pointer w-full md:w-50">
            <button className="text-blue-50 text-xl ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Passenger Row Component */
const PassengerRow = ({ label, value, setValue, min }) => (
  <div className="flex justify-between items-center px-4 py-3 border-b">
    <span>{label}</span>
    <div className="flex items-center gap-3">
      <button
        onClick={() => value > min && setValue(value - 1)}
        className="w-8 h-8 border rounded-full"
      >
        −
      </button>
      <span>{value}</span>
      <button
        onClick={() => setValue(value + 1)}
        className="w-8 h-8 bg-blue-600 text-white rounded-full"
      >
        +
      </button>
    </div>
  </div>
);

export default Flightssearch;
