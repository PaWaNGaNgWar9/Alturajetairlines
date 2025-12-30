import React from "react";
const SingleImage=()=>
{
    return(
            <div className=" bg-center bg-cover bg-no-repeat w-full md:h-110 h-60"
           style={{backgroundImage:"url('/single.png')"}}>
            <div className="md:pt-30 pt-15 md:pl-20 pl-3">
                <p className="md:text-4xl text-2xl text-white font-serif">Seamless travel made easy</p>
                <p className="md:mt-5 mt-2 text-white md:w-100 w-70 text-xs md:text-sm">
               Book and manage flights on the go.Jet off on app-exclusive fares. 
               Enjoy unlimited access to digital content. Travel
               seamlessly with the SingaporeAir mobile app now.</p>
               <a className="cursor-pointer">
                <div className=" md:mt-10 mt-3 border border-white w-40 md:w-60 md:h-12 h-auto hover:bg-amber-500">
                    <p className="text-white text-center text-xs md:text-sm  p-2 md:p-3">Learn More</p>
                </div></a>
             </div>
             </div>
    )
}
export default SingleImage;