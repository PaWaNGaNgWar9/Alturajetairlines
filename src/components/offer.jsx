import React from "react";
const Offer =()=>
{
  
    return(
        <div className="mb-2 md:mx-2">
            <div className=" bg-cover  bg-center bg-no-repeat w-full min-h-[320px]  md:h-[480px]
 rounded-lg
            " style={{backgroundImage:"url('/offer.png')"}}>
                {/* text part */}
                <div className="flex justify-end md:py-20 py-8  md:px-10 px-2 items-center">
                <div className=" md:w-[600px] md:h-[350px] w-[240px] h-[265px] backdrop-blur-2xl shadow-2xl">
                      <div className="md:px-10 px-3 ">
                        <p className="text-white text-lg md:text-4xl px-2 md:px-0 md:pt-5 pt-1 font-normal">Never miss an offer</p>
                          <p className="text-white text-xs md:text-sm  px-2 md:px-0  md:mt-5">
                           Subscribe and be the first to receive our exclusive offers.
                          </p>
                         <div className="
                  w-full md:w-[550px] h-auto md:h-[50px]  md:mt-5 mt-1
                  md:rounded-lg flex flex-col md:flex-row items-center px-2">

       <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-1/2 p-2 md:p-3 text-xs mt-2 md:mt-0 md:text-lg md:rounded-l-md bg-white outline-none"/>
                         <input
                              type="text" placeholder="Preferred City of Departure"
                              className=" w-full md:w-1/2 p-2 md:p-3 text-xs md:text-lg mt-2 md:mt-0 md:rounded-r-md bg-white outline-none md:border-l "/>
                        </div>

                                   <div className="mt-5 ml-3   ">
                                    <input type="checkbox" className="md:scale-170 scale-90 "/>
                                    <p className="pl-3 ml-2 md:ml-4 text-white text-[6px] md:text-sm md:block -translate-y-[20px] md:-translate-y-[30px]">
                                        I’d like to receive offers and news from AlturaJet Airlines .
                                     I understand the<a href="#" className="underline px-1"> Privacy Notice</a> and acknowledge that I can
                                     unsubscribe anytime using the link at the bottom of each message.</p>    
                                  </div>
                         <div className=" md:mt-5 md:ml-10 ml-4 border border-gray-600 rounded-3xl w-[90px] md:w-[135px] h-[30px] md:h-[45px] text-center hover:bg-white">
                            <button className="cursor-pointer p-2  text-xs md:text-lg text-gray-600 hover:text-black">Subscribe</button>
                         </div>
                      </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Offer;