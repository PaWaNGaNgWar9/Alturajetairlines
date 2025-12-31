import React from "react";

const Slidebar = () => {
    return (
        <>
        <div className="w-full flex mt-4 justify-center">
                               <div className="flex  items-center">
                               <p className="md:text-3xl text-xl  text-blue-950 font-bold text-center">
                                I Am Here For...</p>
                                </div>
        </div>
        <div  className="justify-center gap-7 md:gap-28 md:mt-8 mt-3 flex flex-row"> 
             <div className="md:px-0">
            <div className="bg-gray-100 w-13 h-13 p-3 md:w-30 md:h-30 md:p-6  shadow-2xl object-contain rounded-full">
                 <a href="#" className="cursor-pointer "><img src="/icon1.png" alt="Image"/></a>
             </div> 
                 <div className="pt-3 pt-1 ">
                    <p className="font-medium md:text-xl text-[8px]">Change Asist</p>
                </div>
             </div>
             <div>
                  <div className="bg-gray-100 w-13 h-13 p-3  md:w-30 md:h-30 md:p-6 shadow-2xl object-contain rounded-full">
                   <a href="#" className="cursor-pointer "><img src="/icon2.png" alt="Image"/></a>
             </div> 
                  <div className="pt-3  md:pl-10 pl-4 ">
                    <p className="font-medium md:text-xl text-[8px]">Taxi</p>
                    
                </div>
             </div>
             <div>
                           <div className="bg-gray-100 w-13 h-13 p-3 md:w-30 md:h-30 md:p-6 shadow-2xl object-contain rounded-full">
                <a href="#" className="cursor-pointer "><img src="/icon3.png" alt="Image"/></a>
             </div> 
             <div className="pt-3 ">
                    <p className="font-medium md:text-xl text-[8px]">GST Invoice</p>
                   
                </div>
                </div>
                <div>
                   <div className="bg-gray-100 w-13 h-13 p-3 md:w-30 md:h-30 md:p-6 shadow-2xl object-contain rounded-full">
                 <a href="#" className="cursor-pointer "><img src="/icon4.png" alt="Image"/></a>
             </div> 
             <div className="pt-3 ">
                    <p className="font-medium md:text-xl text-[8px]">Visa Services</p>
                </div>
                </div>
                <div>
               <div className="bg-gray-100 w-13 h-13 p-3 md:w-30 md:h-30 md:p-6 shadow-2xl object-contain rounded-full">
                  <a href="#" className="cursor-pointer "><img src="/icon5.png" alt="Image"/></a>
             </div>
             <div className="pt-3 text-center ">
                    <p className="font-medium md:text-xl text-[8px]">AlturaJet<br/> Loyalty
                     Card</p>
                </div>
               </div>  
        </div>
        </>
    );
};

export default Slidebar;
