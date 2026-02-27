const destinations = [
  {
    route: "Dubai → London",
    price: "$3,200",
    image: "/flightcrd1.jpg",
  },
  {
    route: "New York → Paris",
    price: "$3,450",
    image: "/flightcrd2.jpg",
  },
  {
    route: " Paris → Milan",
    price: "$3,800",
    image: "/flightcrd3.jpg",
  },
  {
    route: "Dubai → Maldives",
    price: "$2,900",
    image: "/flightcrd4.jpg",
  },
];

const Flights = () => {
  return (
    <div className="bg-blue-100 text-white w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/bg4.png')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl text-amber-400 tracking-wide">
            Fly Beyond Expectations
          </h1>
          <div className="w-24 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-gray-300 text-base md:text-lg">
            Premium flights crafted for comfort, privacy, and elegance
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-gold text-jetblack px-8 py-3 font-medium hover:bg-yellow-400 transition">
              Search Flights
            </button>
            <button className="border border-gold px-8 py-3 text-gold hover:bg-gold hover:text-jetblack transition">
              Explore Cabins
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ROUTES ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-15">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-400 mb-14">
          Curated Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="h-[360px] bg-cover bg-center relative overflow-hidden group rounded-lg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-gold font-medium">{item.route}</p>
                <p className="text-sm text-gray-300 mt-1">
                  From {item.price}
                </p>
                <p className="text-sm mt-3 opacity-0 group-hover:opacity-100 transition">
                  View Flights →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CABIN EXPERIENCE ================= */}
     <section className="bg-gray-900 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="font-serif text-3xl md:text-4xl text-amber-400 mb-14 text-center">
      Cabin Experience
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        ["Economy", "Elevated comfort"],
        ["Business", "Work & relax"],
        ["First Class", "Total indulgence"],
        ["Private Jet", "Ultimate freedom"],
      ].map(([title, desc]) => (
        <div
          key={title}
          className="border border-white/10 p-8 rounded-xl 
                     hover:border-amber-400 
                     hover:-translate-y-2 
                     hover:shadow-xl 
                     transition-all duration-300"
        >
          <h3 className="font-serif text-xl mb-3 text-white">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            {desc}
          </p>

          <span className="text-amber-400 text-sm cursor-pointer hover:underline">
            Explore Cabin →
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= FEATURES ================= */}
     

      {/* ================= PRIVATE JET ================= */}
      <section className="bg-gradient-to-r from-gold/30 to-black py-28 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Private aviation, redefined
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Tailored journeys with absolute privacy and freedom
        </p>
        <button className="bg-gold text-jetblack px-10 py-3 font-medium border-1 hover:bg-yellow-400 transition">
          Request a Private Flight
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500">
        © 2026 AlturaJet Airlines — Elevating Every Journey
      </footer>

    </div>
  );
};

export default Flights;
