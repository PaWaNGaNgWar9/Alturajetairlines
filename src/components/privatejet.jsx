import React from "react";
const PrivateJet=()=>
{return(
  <div className="bg-gray-100 mt-10   w-auto md:h-80 h-auto md:mb-4 mb-1">
    <div className="flex flex-col md:flex-row md:gap-2 relative md:top-5 md:mx-2">
       <div className="flex flex-col md:flex-row w-full mt-3 h-auto md:w-155 md:h-70 px-4 md:px-0 ">

          <img
          src="/largebook.png"
          alt="Private Jet"
          className="md:w-65 md:h-43  w-full h-auto object-contain md:m-13 shadow-2xl shadow-blue-500 rounded-2xl"/>
          <div className="flex flex-col md:mt-10 pl-3 md:pl-0 mt-3 md:-translate-x-[30px]">
               <p className="md:text-3xl text-2xl font-bold text-blue-950">Cargo</p>
               <p className="font-bold m-0 text-sm md:text-md">From Compact to Extra-Large Cargo</p>
               <p className="m-0 text-sm md:text-md">Every shipment handled with the highest safety standards
                 and attention to detail.</p>
                 <a className="cursor-pointer mt-4">
                      <div className="bg-amber-500 w-35 h-10 p-2 text-center text-md rounded-lg transition-all ease-in-out duration-400 hover:scale-105">
                        Book Now
                      </div>
                    </a>
                </div>
       </div>
          <div className="flex flex-col md:flex-row w-full mt-10 md:mt-3 mb-5 md:mb-0 h-auto md:w-155 md:h-70 px-4 md:px-0 ">

          <img
          src="/smallbook.png"
          alt="Private Jet"
          className="md:w-65 md:h-43  w-full h-auto object-contain md:m-13  shadow-2xl shadow-blue-500 rounded-2xl"/>
          <div className="flex flex-col md:mt-10  pl-3 md:pl-0 mt-3 md:-translate-x-[30px]">
               <p className="md:text-3xl text-2xl font-bold text-blue-950">Charter</p>
               <p className="font-bold m-0 text-sm md:text-md">Fly privately, travel in style</p>
               <p className="m-0 text-sm md:text-md">Private charters for every occasion, from intimate
                 escapes to group travel.</p>
                 <a className="cursor-pointer mt-4">
                      <div className="bg-amber-500 w-35 h-10 p-2 text-center text-md rounded-lg transition-all ease-in-out duration-400 hover:scale-105">
                        Book Now
                      </div>
                    </a>
                </div>
       </div>
       </div>
  </div>
)}
export default PrivateJet;