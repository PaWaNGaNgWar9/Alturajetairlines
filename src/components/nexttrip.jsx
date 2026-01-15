import React from "react";
const NextTrip=()=>
{return(
    <div className="bg-white mb-5">
            <p className="text-3xl text-blue-900 font-semibold mt-15 m-6 mb-10">
                Plan Your Next Trip with Altura<span className="text-amber-400">Jet!</span>
            </p>
            {/* for Card */}
             <div className="flex flex-col md:flex-row gap-3 mx-5 cursor-pointer ">
                {/* Card 1 */}
                     <div className="bg-cover bg-center rounded w-full md:w-60  h-auto md:h-35 p-2 -translate-y-[10px]
                     transition-transform duration-500 ease-in-out
               hover:-translate-y-4 "
                     style={{backgroundImage:"url('earth.jpg')"}}> 
                            <a className="cursor-pointer">
                                <p className="text-xl  font-bold text-white mt-25">
                                Anywhere
                                </p>
                            </a>
                     
                     </div>
              <div className="relative w-full md:w-60 md:h-30 h-auto rounded overflow-hidden " >
                {/* Card 2 */}
                     <div className="bg-cover bg-center rounded w-full h-auto w-60 md:h-30 p-2
                     transition-transform duration-500 ease-in-out
               hover:scale-110"
                     style={{backgroundImage:"url('sant.jpg')"}}> 
                            <a className="cursor-pointer">
                                <p className="text-sm  bg-white/70 w-22 h-7 p-1 rounded text-center">
                                Short haul
                                </p>
                            </a>
                            <a className="cursor-pointer">
                                <p className="text-xl  font-bold text-white mt-12">
                                Santorini
                                </p>
                            </a>
                     </div>
                     
              </div>
              <div className="relative w-full h-auto md:w-60 md:h-30 rounded overflow-hidden " >
                {/* Card 3 */}
                     <div className="bg-cover bg-center rounded w-full h-auto md:w-60 md:h-30 p-2
                     transition-transform duration-500 ease-in-out
               hover:scale-110"
                     style={{backgroundImage:"url('swiss.jpg')"}}> 
                            <a className="cursor-pointer">
                                <p className="text-sm  bg-white/70 w-22 h-7 p-1 rounded text-center">
                                Long haul
                                </p>
                            </a>
                            <a className="cursor-pointer">
                                <p className="text-xl  font-bold text-white mt-12">
                                Swiss Alps
                                </p>
                            </a>
                     </div>
                     
              </div>
              <div className="relative w-full h-auto md:w-60 md:h-30 rounded overflow-hidden " >
                {/* Card 4 */}
                     <div className="bg-cover bg-center rounded w-full h-auto md:w-60 md:h-30 p-2
                     transition-transform duration-500 ease-in-out
               hover:scale-110"
                     style={{backgroundImage:"url('bora.jpg')"}}> 
                            <a className="cursor-pointer">
                                <p className="text-sm  bg-white/70 w-22 h-7 p-1 rounded text-center">
                                Short haul
                                </p>
                            </a>
                            <a className="cursor-pointer">
                                <p className="text-xl  font-bold text-white mt-12">
                                Bora Bora
                                </p>
                            </a>
                     </div>
                     
              </div>
              <div className="relative w-full h-auto md:w-60 md:h-30 rounded overflow-hidden " >
                {/* Card 5 */}
                     <div className="bg-cover bg-center rounded w-full h-auto md:w-60 md:h-30 p-2
                     transition-transform duration-500 ease-in-out
               hover:scale-110"
                     style={{backgroundImage:"url('kyoto.jpg')"}}> 
                            <a className="cursor-pointer">
                                <p className="text-sm  bg-white/70 w-22 h-7 p-1 rounded text-center">
                                Long haul
                                </p>
                            </a>
                            <a className="cursor-pointer">
                                <p className="text-xl  font-bold text-white mt-12">
                                Kyoto
                                </p>
                            </a>
                     </div>
                     
              </div>
              </div>
              <div className="flex justify-center mt-4  gap-3 md:gap-5 ">
                <div className=" w-full md:w-127 h-[1px] bg-amber-600  mt-3 md:mt-6"></div>
                <a href="#" className="cursor-pointer">
                    <div className="border  border-blue-950 w-30 h-auto md:w-40 md:h-12 text-center  
                    transition-transform duration-500 ease-in-out hover:bg-amber-400 ">
                          <p className="p-auto md:p-2 text-blue-900 text-md md:text-lg">Explore More</p>
                   </div>
                </a>
                 <div className=" w-full md:w-127 h-[1px] bg-amber-600 mt-3 md:mt-6"></div>
              </div>
              
    </div>
)}
export default NextTrip;