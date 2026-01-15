import React from "react";

const services = [
  {
    title: "Change Assist",
    desc: "Modify or reschedule bookings",
    icon: "/icon1.png",
    link: "#",
  },
  {
    title: "Taxi",
    desc: "Book airport transfers",
    icon: "/icon2.png",
    link: "#",
  },
  {
    title: "GST Invoice",
    desc: "Download business invoices",
    icon: "/icon3.png",
    link: "#",
  },
  {
    title: "Visa Services",
    desc: "Travel documentation support",
    icon: "/icon4.png",
    link: "#",
  },
  {
    title: "AlturaJet Loyalty Card",
    desc: "Earn and redeem rewards",
    icon: "/icon5.png",
    link: "#",
  },
];

const Slidebar = () => {
  return (
    <>
      {/* Heading */}
      <div className="w-full flex mt-6 justify-center">
        <p className="md:text-3xl text-xl text-blue-950 font-bold text-center">
          Refined Travel Services
        </p>
      </div>

      {/* Services */}
      <div
        className="
          mt-4 md:mt-10
          flex
          md:grid md:grid-cols-5
          gap-5 md:gap-10
          overflow-x-auto md:overflow-visible
          px-4 md:px-0
          scroll-smooth
          scrollbar-hide
        "
      >
        {services.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="
              flex flex-col items-center
              min-w-[90px] md:min-w-0
              group
            "
          >
            {/* Icon Box – Rounded Square */}
            <div
              className="
                bg-gray-100
                w-20 h-20 md:w-28 md:h-28
                p-4 md:p-6
                rounded-full
                shadow-lg
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                group-hover:scale-105
                group-hover:-translate-y-1
                group-hover:shadow-blue-300
                group-hover:shadow-2xl
              "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <p
              className="
                mt-3
                font-medium
                md:text-lg
                text-[10px]
                text-center
                text-blue-900
                group-hover:text-blue-600
                transition-colors duration-300
              "
            >
              {item.title.includes("Loyalty") ? (
                <>
                  AlturaJet <br /> Loyalty Card
                </>
              ) : (
                item.title
              )}
            </p>

            {/* Description */}
            <p
              className="
                mt-1
                text-[9px]
                md:text-sm
                text-gray-500
                text-center
                max-w-[140px]
              "
            >
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Slidebar;
