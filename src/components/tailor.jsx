import React from "react";
 const Tailor =()=>
 {return(
    <div className="bg-gray-100 my-5 w-full md:h-70 h-auto p-3 flex flex-col items-center md:flex-row">
       <div className=" md:pt-25">
        <p className="text-blue-950 text-3xl font-medium  p-7">Tailor-made For You</p>
       </div>
       {/* card*/}
          <div className="flex flex-col md:flex-row pt-15 gap-3 md:gap-8">
              <a href="#" className="cursor-pointer">
                <div className="bg-white w-full h-auto md:w-70 md:h-40  p-4 shadow-2xl transition-transform 
                duration-900 ease-out hover:scale-110">
                    <p className="text-lg md:text-2xl text-black font-bold ">
                        Group Bookings
                    </p>
                        <p className="text-black  pt-2 md:pt-5">
                            Quick responses, effortless tracking, and a seamless 
                             booking journey
                        </p>
               </div></a> 
             <a href="#" className="cursor-pointer">
               <div className="bg-white w-full h-auto md:w-70 md:h-40 p-4 shadow-2xl transition-transform duration-900
               ease-out hover:scale-110 ">
                            <p className="text-lg md:text-2xl text-black font-bold ">
                          SME High Flyer
                    </p>
                        <p className="text-black pt-2 md:pt-5">
                           Exclusive fares with flexible changes & premium perks for 
                           small and medium enterprises
                        </p>
               </div></a>
        
               <a href="#" className="cursor-pointer">
               <div className="bg-white w-full h-auto md:w-70 md:h-40 p-4 shadow-2xl  transition-transform duration-900
               ease-out hover:scale-110 ">
                            <p className="text-lgmd:text-2xl text-black font-bold ">
                       Corporate Traveller
                    </p>
                        <p className="text-black pt-2 md:pt-5">
                            Customised travel solutions for corporate professionals
                        </p>
               </div></a>
          </div>
    </div>
 )}
 export default Tailor;