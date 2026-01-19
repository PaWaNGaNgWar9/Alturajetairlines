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
          className="bg-cover bg-no-repeat bg-center w-105 md:w-170 h-60 md:h-80 ml-1 md:ml-5  md:rounded-2xl shadow-2xl relative overflow-hidden "
          style={{ backgroundImage: "url('/loyal.png')" }}
        >
          <div className="p-4 md:p-6 bg-black/30 rounded-2xl h-full flex flex-col justify-between">
            <div>
              <img
                src="/cardlogo.png"
                className="w-28 md:w-40 mb-6 drop-shadow-lg"
                alt="logo"
              />
               <h1 className="text-xs md:text-lg text-white leading-relaxed w-55 md:w-85 max-w-xl tracking-wide">
                Enter an elite world of privileges. Earn premium rewards,
                seamless upgrades, and bespoke travel experiences crafted
                exclusively for AlturaJet members.
              </h1>
            </div>

            {/* CTA Button */}
            <a href="#">
              <div
                className="w-36 md:w-52 h-11 md:h-14
                bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500
                text-blue-950 font-semibold tracking-wide
                flex items-center justify-center rounded-full
                shadow-[0_8px_25px_rgba(255,191,36,0.4)]
                hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,191,36,0.6)]
                transition-all duration-500"
              >
                Discover Benefits
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-2 md:px-1">
        <div className="flex flex-row justify-center   gap-2 md:gap-6 mt-6 md:mt-24">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center shadow-xl shadow-blue-200 px-7 py-8 md:px-9 md:py-10 rounded-2xl">
            <img
              src="/free.png"
              alt="Free Flights"
              className="w-12 h-12 md:w-20 md:h-20  rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center text-md">
              Free Flight <br/>Rewards
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center shadow-xl shadow-blue-200 px-2  py-8 md:px-5 md:py-10 rounded-2xl">
            <img
              src="/upgrd.png"
              alt="Upgrades"
              className="w-12 h-12 md:w-20 md:h-20  rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center text-md">
              Complimentary<br/> Upgrades
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center  shadow-xl shadow-blue-200 px-4  py-8  md:px-6 md:py-10 rounded-2xl">
            <img
              src="/earn.png"
              alt="AlturaJet Coins"
              className="w-12 h-12 md:w-20 md:h-20  rounded-full border-2 border-amber-500 shadow-2xl object-contain transition-transform duration-700 hover:scale-110 hover:shadow-amber-400"
            />
            <p className="mt-3 md:mt-4 text-blue-950 font-medium text-center text-md">
              Earn AlturaJet<br/> Coins
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LoyaltyCard;
