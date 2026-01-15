import React from "react";
const SingleImage=()=>
{
    return(
            <div className=" bg-center bg-cover bg-no-repeat w-full md:h-110 h-60 "
           style={{backgroundImage:"url('/single.png')"}}>
            <div className="md:pt-30 pt-3 md:pl-20 pl-3">
                <p className="md:text-4xl text-2xl text-white font-serif">Travel without <br/>friction</p>
                <p className="md:mt-5 mt-2 text-white md:w-100 w-40 text-xs md:text-sm">
               Your journey, at your fingertips. Exclusive fares, unlimited content, seamless 
               travel—download the SingaporeAir mobile app today.</p>
               <a className="cursor-pointer">
                <div className=" md:mt-10 mt-3 border border-white w-40 md:w-60 md:h-12 h-auto hover:bg-amber-500">
                    <p className="text-white text-center text-xs md:text-sm  p-2 md:p-3">Learn More</p>
                </div></a>
             </div>
             </div>
    )
}
export default SingleImage;