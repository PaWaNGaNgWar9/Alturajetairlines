import React from "react";
const LoyaltyCard =()=>
{return(
    // main div
    <div className="w-full  h-auto md:h-98  md:mt-10 mb-5 flex flex-col md:flex-row">
               <div>
                <p className="text-3xl  font-medium text-blue-900 m-3 ">
                    AlturaJet Loyalty Program
                </p>
                <div className="bg-cover bg-no-repeat bg-center w-102 md:w-190  h-50 md:h-75 ml-1 md:ml-5 md:rounded-2xl "
                   style={{backgroundImage: "url('/loyal.png')"}}>
                    <div className="p-2 md:p-5">
                       <img src="/cardlogo.png" className="w-23 h-6 md:w-35 md:h-13" alt="logo"/>
                       <h1 className="text-xs md:text-lg md:font-medium  mt-4 md:mt-5 md:m-0">
                         Join our frequent flyer program and<br/>
                          enjoy unmatched rewards,added <br/>
                          comforts and exclusive privileges.
                       </h1>
                   </div>
                        <a href="#"  className="cursor-pointer">
                            <div className="border-2 border-white w-30 md:w-50 h-9  mt-5  md:ml-5 ml-2 text-center 
                            hover:bg-amber-600
                            ">
                           <p className="p-2  text-white text-xs md:text-lg md:font-medium ">Know More</p>
                        </div></a>
                </div>
                </div>
                {/* Second div */}
                <div className="  w-full md:w-150 md:h-98 h-auto">
                       <a href="#" className="cursor-pointer">
                        <div className=" flex flex-row md:gap-3 justify-center mt-6 md:mt-40 ml-4 md:ml-6 items-center ">
                            <div>
                            <img src="/free.png" alt="logo" className=" w-20 h-20 md:w-25 md:h-25 rounded-full 
                            transition-transform duration-1000 hover:scale-110
                            shadow-2xl border-2 border-amber-500 object-contain"/>
                            <p className="text-center mt-2 md:font-medium  text-blue-900">
                                Earn Free Flights
                            </p>
                           
                            </div>
                             <div className="ml-6">
                            <img src="/upgrd.png" alt="logo" className="  w-20 h-20 md:w-25 md:h-25 ml-6 rounded-full 
                            transition-transform duration-1000 hover:scale-110
                            shadow-2xl border-2 border-amber-500 object-contain"/>
                            <p className="text-center mt-2 md:font-medium text-blue-900">
                                Complimentary Upgrades
                            </p>
                           
                            </div>
                             <div >
                            <img src="/earn.png" alt="logo" className="  w-20 h-20 md:w-25 md:h-25 ml-5 rounded-full 
                            transition-transform duration-1000 hover:scale-110
                            shadow-2xl border-2 border-amber-500 object-contain"/>
                            <p className="text-center mt-2 md:font-medium text-blue-900">
                                Earn Free AlturaJet Coins
                            </p>
                           
                            </div>
                             
                        </div>
                       </a>
                </div>
             
    </div>
)}
export default LoyaltyCard;