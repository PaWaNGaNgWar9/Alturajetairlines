import React from "react";

const Offer = () => {
  return (
    <div className="mb-4 md:mx-4">
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full min-h-[320px] md:h-[480px] rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/offer.png')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex justify-end items-center h-full px-3 md:px-12 py-6">
          <div className="w-full max-w-[255px] md:max-w-[615px] backdrop-blur-3xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 md:p-10">

            {/* Heading */}
            <p className="text-white text-xl md:text-4xl font-semibold">
              Unlock Exclusive Offers 🔔
            </p>

            {/* Subtext */}
            <p className="text-white/90 text-xs md:text-sm mt-2 md:mt-4">
              Enjoy priority access to curated AlturaJet fares and premium travel deals.
            </p>

            {/* Inputs */}
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-1/2 p-2 md:p-3 text-xs md:text-lg rounded-lg bg-white outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="text"
                placeholder="Preferred City of Departure"
                className="w-full md:w-1/2 p-2 md:p-3 text-xs md:text-lg rounded-lg bg-white outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-2 mt-4 md:mt-6">
              <input
                type="checkbox"
                className="mt-1 accent-amber-400 scale-90 md:scale-110"
              />
              <span className="text-white text-[10px] md:text-sm leading-relaxed">
                Send me exclusive AlturaJet offers and updates.
                <span className="underline ml-1 cursor-pointer">
                  Privacy Notice
                </span>.
                Unsubscribe anytime.
              </span>
            </label>

            {/* CTA */}
            <button
              className="mt-5 md:mt-8 px-6 md:px-10 py-2 md:py-3 rounded-full text-xs md:text-lg font-medium
              bg-gradient-to-r from-amber-400 to-orange-500 text-black
              hover:from-orange-500 hover:to-amber-400
              transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Exclusive Deals
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
