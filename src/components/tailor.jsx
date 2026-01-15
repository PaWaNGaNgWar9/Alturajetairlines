import React from "react";
import { FaUsers, FaPlaneDeparture, FaBriefcase, FaCrown } from "react-icons/fa";

const Tailor = () => {
  return (
    <div className="bg-gray-100 my-8 w-full p-6 flex flex-col items-center">
      
      {/* Heading */}
      <p className="text-blue-950 text-3xl font-semibold mb-6 text-center">
       Fly the Way You Want
      </p>
      <p className=" text-sm  text-center mb-7">Masterfully curated travel experiences—where comfort,
         elegance, and precision define every flight.</p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-5 ">

        {/* Card 1 */}
        <a href="#" className="cursor-pointer">
          <div className="bg-amber-50 w-full md:w-[240px] h-[200px] p-4 rounded-lg
            shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:bg-white
            transition-all duration-300 ease-out flex flex-col">
            <FaUsers className="text-blue-900 text-3xl mb-3" />
            <p className="text-lg text-blue-950 font-bold mb-1">
              Group Travel Solutions
            </p>
            <p className="text-gray-700 text-sm pt-7">
             Where swift responses, effortless tracking, and seamless booking come together.
            </p>
          </div>
        </a>

        {/* Card 2 */}
        <a href="#" className="cursor-pointer">
          <div className="bg-amber-50 w-full md:w-[240px] h-[200px] p-4 rounded-lg
            shadow-lg hover:shadow-2xl transform hover:-translate-y-1  hover:bg-white
            transition-all duration-300 ease-out flex flex-col">
            <FaPlaneDeparture className="text-blue-900 text-3xl mb-3" />
            <p className="text-lg text-blue-950 font-bold mb-1">
             SME Altitude Program
            </p>
            <p className="text-gray-700 text-sm pt-7">
             Preferential fares and flexible change privileges designed for SMEs.
            </p>
          </div>
        </a>

        {/* Card 3 */}
        <a href="#" className="cursor-pointer">
          <div className="bg-amber-50 w-full md:w-[240px] h-[200px] p-4 rounded-lg
            shadow-lg hover:shadow-2xl transform hover:-translate-y-1  hover:bg-white
            transition-all duration-300 ease-out flex flex-col">
            <FaBriefcase className="text-blue-900 text-3xl mb-3" />
            <p className="text-lg text-blue-950 font-bold mb-1">
              Corporate Elite Travel
            </p>
            <p className="text-gray-700 text-sm pt-7">
             Bespoke travel solutions crafted for modern business needs.
            </p>
          </div>
        </a>

        {/* Card 4 */}
        <a href="#" className="cursor-pointer">
          <div className="bg-amber-50 w-full md:w-[240px] h-[200px] p-4 rounded-lg
            shadow-lg hover:shadow-2xl transform hover:-translate-y-1  hover:bg-white
            transition-all duration-300 ease-out flex flex-col">
            <FaCrown className="text-amber-500 text-3xl mb-3" />
            <p className="text-lg text-blue-950 font-bold mb-1">
              Premium Rewards
            </p>
            <p className="text-gray-700 text-sm pt-7">
              Priority services & exclusive flight benefits
            </p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Tailor;
