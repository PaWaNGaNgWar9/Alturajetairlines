import React, { useState, useEffect } from "react";
import HeroImage from "/bg.jpg";
import HeroImage1 from "/bg2.png";
import HeroImage2 from "/bg3.png";
import HeroImage3 from "/bg4.png";

const Herosection = () => {
  const images = [HeroImage, HeroImage1, HeroImage2, HeroImage3];
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // ✅ Preload images
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) setLoaded(true);
      };
    });
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <section className="relative h-[75vh] md:h-[120vh] w-full overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000
            ${current === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 flex items-center h-full px-6 sm:px-10 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-md sm:text-3xl md:text-4xl mt-28 font-bold text-amber-400 drop-shadow-lg">
            ⌯✈︎ Fly the World With Confidence
          </p>
          <p className="mt-2 md:mt-4 text-xs sm:text-base md:text-xl font-semibold drop-shadow-md">
            Enjoy smooth bookings, on-time flights, and customer-first service
            every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
