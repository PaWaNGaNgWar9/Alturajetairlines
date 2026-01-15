import React, { useState, useEffect } from "react";
import HeroImage from "/bg.jpg";
import HeroImage1 from "/bg2.png";
import HeroImage2 from "/bg3.png";
import HeroImage3 from "/bg4.png";

const Herosection = () => {
  const images = [HeroImage, HeroImage1, HeroImage2, HeroImage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-75 md:h-120 w-full overflow-hidden">

      {/* 🔄 Sliding Images */}
      <div
        className="absolute inset-0 flex transition-transform duration-600 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-md sm:text-3xl md:text-4xl mt-28 font-bold text-amber-400 drop-shadow-lg">
            ⌯✈︎ The World Feels Closer When You Fly Certain
          </p>

          <p className="md:mt-4 text-base text-xs md:text-xl font-semibold drop-shadow-md">
            Enjoy seamless bookings, punctual flights, and a customer-first experience
             at every step.
            </p>
        </div>
      </div>

    </section>
  );
};

export default Herosection;
