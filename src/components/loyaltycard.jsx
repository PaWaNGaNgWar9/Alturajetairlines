import React from "react";

const LoyaltyCard = () => {
  return (
    <div className="w-full h-auto md:h-98 md:mt-10 mb-8 flex flex-col md:flex-row gap-8">
      
      {/* Left Section */}
      <div className="flex-1">
        <p className="text-3xl md:text-4xl font-semibold text-blue-950 m-3">
          Altura<span className="text-amber-400">Jet</span> Altitude Rewards
        </p>

        <div
          className="bg-cover bg-no-repeat bg-center w-105 md:w-190 h-60 md:h-80 ml-1 md:ml-5 md:rounded-2xl shadow-2xl relative overflow-hidden"
          style={{ backgroundImage: "url('/loyal.png')" }}
        >
          <div className="p-4 md:p-6 bg-black/30 rounded-2xl h-full flex flex-col justify-between">
            <div>
              <img
                src="/cardlogo.png"
                className="w-24 h-6 md:w-36 md:h-14 mb-4"
                alt="logo"
              />
              <h1 className="text-xs md:text-lg md:font-medium text-white leading-relaxed w-58 md:w-100">
                Become part of our frequent flyer program and unlock unparalleled rewards, 
                elevated comfort, and exclusive privileges—every journey, every flight.
              </h1>
            </div>

            {/* CTA Button */}
            <a href="#" className="mt-4">
              <div className="w-32 md:w-48 h-10 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-medium text-sm md:text-lg flex items-center justify-center 
              rounded-full shadow-lg hover:from-yellow-400 hover:to-amber-500 
              transition-all duration-300">
                Know More
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-row justify-center md:gap-10 gap-4 mt-6 md:mt-24">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/free.png"
              alt="Free Flights"
              className="w-20 h-20 md:w-25 md:h-25 rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center md:text-lg">
              Free Flight Rewards
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/upgrd.png"
              alt="Upgrades"
              className="w-20 h-20 md:w-25 md:h-25 rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center md:text-lg">
              Complimentary Upgrades
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/earn.png"
              alt="AlturaJet Coins"
              className="w-20 h-20 md:w-25 md:h-25 rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center md:text-lg">
              Earn AlturaJet Coins
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LoyaltyCard;
