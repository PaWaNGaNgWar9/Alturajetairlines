import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
const Footer = () => (
    <div className="w-full md:h-100 h-auto bg-blue-950 mt-10">
        {/* Social Media Links */}
        <div className=" flex  flex-col  md:flex-row  items-center md:items-end justify-end p-2 gap-3">
           <p className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent text-md mr-2 flex">
  Follow us on....
</p>
<div className=" flex flex-row  gap-4 ">

          <a href="#" className=" inline-block cursor-pointer transition-all duration-500 ease-in hover:scale-130" >
             <FaFacebookSquare className="w-6 h-6 text-blue-700 rounded " />
         </a>
         <a href="#" className=" inline-block cursor-pointer transition-all duration-500 ease-in hover:scale-130" >
            <FaSquareInstagram className="w-6 h-6 text-[#dc2195] rounded" />
         </a>
         <a href="#" className=" inline-block cursor-pointer transition-all duration-500 ease-in hover:scale-130" >  
            <BsTwitterX  className="w-6 h-6 text-white"/>
         </a>  
         <a href="#" className=" inline-block cursor-pointer transition-all duration-500 ease-in hover:scale-130" >
            <FaYoutube className="w-6 h-6 text-red-600  rounded" />
         </a> 
         <a href="#" className=" inline-block cursor-pointer transition-all duration-500 ease-in hover:scale-130" >
            <BsLinkedin className="w-6 h-6 text-blue-800  rounded"/>
          </a> 
          </div> 
        </div>
             <div className=" flex  flex-col md:flex-row  pl-2 md:p-3  md:gap-20 ">
                <div className=" flex flex-col text-white ">
                    <p className=" text-lg font-bold mb-2 text-amber-600">About Us</p>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Company Information</a>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Careers</a>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Press Releases</a>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Blog</a>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Our Fleet</a>
                    <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Destinations</a>
                </div>
                       <div className=" flex flex-col text-white ">
                            <p className=" text-lg  text-amber-600 font-bold mb-2">Customer Service</p>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Contact Us</a>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">FAQs</a>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Booking Guide</a>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Baggage Information</a>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Travel Alerts</a>
                            <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Refund Policy</a>
                      </div>
                       <div className=" flex flex-col text-white ">
                        <p className=" text-lg font-bold  text-amber-600 mb-2">Travel Information</p>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Book a Flight</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Manage Booking</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Check-in Online</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Flight Status</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Route Map </a>
                      </div>
                      <div className=" flex flex-col text-white ">
                        <p className=" text-lg font-bold  text-amber-600 mb-2">Legal</p>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Privacy Policy</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Terms of Service</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Cookie Policy</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Accessibility</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Corporate Responsibility</a>
                        <a href="#" className=" text-md mb-1 cursor-pointer hover:underline">Safety Security</a>
                      </div>
                      <div className=" flex flex-col text-white ">
                        <p className=" text-lg font-bold text-amber-600 mb-2">Contact Information</p>
                        <p className=" text-md mb-1">123 Aviation Way, Suite 100</p>
                        <p className=" text-md mb-1">Cityville, ST 12345</p>
                        <p className=" text-md mb-1">Phone: (123) 456-7890</p>
                        <p className=" text-md mb-1">Email:alturajet@airline.com</p>    
                        </div>
             </div>
             <div className=" text-center text-white p-4 border-t border-amber-500">
                <p className=" text-md">© 2026 AlturaJet Airlines. All rights reserved.</p>
                </div>
         <div className=" flex flex-row p-2  md:gap-3">
                {/* Payment Methods */}
<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mt-4">

  {/* Visa */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-white
      opacity-50 hover:opacity-100 transition
      w-14 h-8 sm:w-16 sm:h-9 md:w-18 md:h-10">
      <img
        src="/visacard.png"
        alt="Visa Card"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

  {/* Mastercard */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-black
      opacity-50 hover:opacity-100 transition
      w-14 h-8 sm:w-16 sm:h-9 md:w-18 md:h-10">
      <img
        src="/mastercard.png"
        alt="Mastercard"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

  {/* Net Banking */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-[#930fa5]
      opacity-50 hover:opacity-100 transition
      w-14 h-8 sm:w-16 sm:h-9 md:w-18 md:h-10">
      <img
        src="/netcard.png"
        alt="Net Banking"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

  {/* Bar Card */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-[#11bca2]
      opacity-50 hover:opacity-100 transition
      w-14 h-8 sm:w-16 sm:h-9 md:w-18 md:h-10">
      <img
        src="/barcard.png"
        alt="Bar Card"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

  {/* PayPal */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-white
      opacity-50 hover:opacity-100 transition
      w-16 h-8 sm:w-18 sm:h-9 md:w-20 md:h-10">
      <img
        src="/paypal.png"
        alt="PayPal"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

  {/* American Express */}
  <a href="#" className="cursor-pointer">
    <div className="flex items-center justify-center  bg-blue-700
      opacity-50 hover:opacity-100 transition
      w-16 h-8 sm:w-18 sm:h-9 md:w-20 md:h-10">
      <img
        src="/american.png"
        alt="American Express"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </a>

</div>

         </div>
         
         
    </div>
    
)
export default Footer;