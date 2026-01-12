import React from "react";

const cityImages = {
  London: [
    "/card1.jpg",
    "/card2.jpg",
    "/card3.jpg",
    "/card4.jpg",
     "/card5.jpg",
    "/card6.jpg",
    "/card7.jpg",
    "/card8.jpg"
  ],
  York: [
    "/york1.jpg",
    "/york5.jpg",
    "/york7.jpg",
    "/york4.jpg",
    "/york2.jpg",
    "/york6.jpg",
    "/york3.jpg",
    "/york8.jpg"
  ],
  Cambridge: [
   "/cam1.jpg",
    "/cam2.jpg",
    "/cam3.jpg",
    "/cam4.jpg",
     "/cam5.jpg",
    "/cam6.jpg",
    "/cam7.jpg",
    "/cam8.jpg"
  ],
  Coventry: [
     "/cov7.jpg",
    "/cov8.jpg",
    "/cov3.jpg",
    "/cov4.jpg",
     "/cov5.jpg",
    "/cov6.jpg",
    "/cov1.jpg",
    "/cov2.jpg"
  ],
};

const CardLayout = ({ selectedCity = "London" }) => {
  const images = cityImages[selectedCity] || [];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 my-8">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={img}
              alt={selectedCity}
              className="w-full h-56 sm:h-64 object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>

        <div className="border px-6 h-14 flex items-center justify-center">
          <a href="#" className="text-md">
            View More Deals
          </a>
        </div>

        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

    </div>
  );
};

export default CardLayout;
