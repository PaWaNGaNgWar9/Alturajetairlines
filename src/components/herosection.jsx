import React, { useState, useEffect } from "react";
import HeroImage from "/bg.jpg";
import HeroImage1 from "/bg2.jpg";
import HeroImage2 from "/bg3.png";
import HeroImage3 from "/bg4.png";
const Herosection = () => {
  const images = [HeroImage, HeroImage1, HeroImage2,HeroImage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative  h-80  md:h-110  w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-md sm:text-3xl md:text-4xl mt-28 font-bold text-amber-400 drop-shadow-lg">
            ⌯✈︎ Fly the World With Confidence
          </p>

          <p className="md:mt-4 text-base text-xs md:text-xl font-semibold drop-shadow-md">
            Enjoy smooth bookings, on-time flights, and customer-first service
            every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
