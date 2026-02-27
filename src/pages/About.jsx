const About = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="/bg4.png"
          alt="AlturaJet"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/70 to-black/60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-400/20 blur-[120px]" />
        <div className="relative z-10 max-w-5xl px-6">
          <p className="uppercase tracking-[0.35em] text-amber-400 mb-4">
            Altura Jet Airline. Elevating Private Aviation.
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-wide mb-6">
            The <span className="text-amber-400">AlturaJet</span> Experience
          </h1>

          <p className="text-lg md:text-2xl text-blue-100 leading-relaxed">
            Where precision meets discretion, and every journey is a masterpiece
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-amber-500 mb-4">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950 mb-8">
            Crafted for Those Who Expect More
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            AlturaJet was founded with a singular philosophy — to redefine
            what premium air travel truly means. Every aircraft, every
            service touchpoint, and every decision is guided by precision,
            discretion, and excellence.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From private terminals to bespoke in-flight experiences,
            we serve those who value time, comfort, and absolute trust.
          </p>
        </div>

        <div className="relative">
          <img
            src="/bg2.png"
            alt="Luxury Jet"
            className="rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
          />

          <div className="absolute -bottom-9 -right-5 bg-amber-400 px-8 py-6 rounded-xl shadow-2xl">
            <p className="text-3xl font-bold text-blue-950">1+</p>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </section>
      <section className="bg-blue-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center text-white">

          <div>
            <p className="text-5xl font-serif font-bold text-amber-400">120+</p>
            <p className="tracking-wide text-blue-100 mt-2">Luxury Aircraft</p>
          </div>

          <div>
            <p className="text-5xl font-serif font-bold text-amber-400">350+</p>
            <p className="tracking-wide text-blue-100 mt-2">Global Routes</p>
          </div>

          <div>
            <p className="text-5xl font-serif font-bold text-amber-400">99.9%</p>
            <p className="tracking-wide text-blue-100 mt-2">Safety Record</p>
          </div>

          <div>
            <p className="text-5xl font-serif font-bold text-amber-400">24/7</p>
            <p className="tracking-wide text-blue-100 mt-2">Concierge Service</p>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY CARDS */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-amber-500 mb-4">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950">
            Excellence Without Compromise
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Mission",
              text: "To deliver refined, safe, and personalized aviation experiences that redefine global travel."
            },
            {
              title: "Vision",
              text: "To become the world’s most admired premium airline brand through innovation and trust."
            },
            {
              title: "Values",
              text: "Precision, Integrity, Discretion, Innovation, and Customer-First Excellence."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-amber-50 backdrop-blur-xl p-12 rounded-3xl shadow-2xl hover:shadow-[0_30px_80px_rgba(0,0,300,0.15)] transition duration-500"
            >
              <h3 className="text-2xl font-serif font-bold text-blue-950 mb-6">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default About;
