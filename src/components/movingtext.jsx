import React, { useState, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Movingtext = () => {
  const texts = [
    "Winter schedule takes effect from 26th October. Please check your flight status for any timing changes.",
    "Dangerous goods, sharp items, and flammable materials are strictly prohibited in all baggage",
    "Arrive at least 2 hours before departure for seamless check-in and security clearance.",
    "Ensure all required travel documents are updated before arrival at the airport."
  ];

  const [current, setCurrent] = useState(0);

  const nextText = () => {
    setCurrent((prev) => (prev + 1) % texts.length);
  };

  const prevText = () => {
    setCurrent((prev) => (prev - 1 + texts.length) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 w-full py-3 md:py-4">

      {/* Text + Arrows */}
      <div className="flex items-center justify-center gap-3 md:gap-6 px-3 md:px-6">

        {/* Left Arrow */}
        <BiSolidLeftArrow
          className="text-xs sm:text-sm md:text-lg cursor-pointer text-yellow-500"
          onClick={prevText}
        />

        {/* Text */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base 
                       font-sans text-center max-w-xs sm:max-w-md md:max-w-2xl">
          {texts[current]}
        </p>

        {/* Right Arrow */}
        <BiSolidRightArrow
          className="text-xs sm:text-sm md:text-lg cursor-pointer text-yellow-500"
          onClick={nextText}
        />
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {texts.map((_, index) => (
          <span
            key={index}
            className={`rounded-full transition-all duration-300
              ${index === current
                ? "bg-yellow-500 w-2 h-2"
                : "bg-gray-400 w-1.5 h-1.5"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Movingtext;
