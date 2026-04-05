import React, { useEffect, useState } from "react";
const tariffs = [
  { route: "Delhi → Milan", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Delhi → Dubai", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Mumbai → London", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Delhi → New York", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Delhi → Singapore", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Mumbai → Paris", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Delhi → Tokyo", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Bangalore → Dubai", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Delhi → Sydney", economy: "$49.99", business: "$199.99", first: "$399.99" },
  { route: "Mumbai → Frankfurt", economy: "$49.99", business: "$199.99", first: "$399.99" },
];
const Tariff = () => { 
  const [visibleRows, setVisibleRows] = useState([]);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i == tariffs.length-1) {
        clearInterval(interval);
        return;
      }
      setVisibleRows((prev) => [...prev, tariffs[i]]);
      i++;
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-amber-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-12 animate-title">
        AlturaJet Tariff Sheet
      </h1>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden backdrop-blur-lg">
        <table className="w-full text-center">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-4">Route</th>
              <th>Economy</th>
              <th>Business</th>
              <th>First Class</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((item, index) => (
              <tr
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="border-b animate-row hover:scale-[1.02] hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                <td className="py-4 font-semibold">{item.route}</td>
                <td>{item.economy}</td>

                <td className="text-blue-900 font-semibold hover:text-blue-600 transition">
                  {item.business}
                </td>
                <td className="text-amber-600 font-bold hover:text-amber-500 transition">
                  {item.first}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>
        {`
        @keyframes titleFade {
          from {
            opacity:0;
            transform: translateY(-30px);
          }
          to{
            opacity:1;
            transform: translateY(0);
          }
        }

        .animate-title{
          animation: titleFade 1s ease forwards;
        }

        @keyframes rowEnter {
          from{
            opacity:0;
            transform: translateY(30px) scale(0.95);
          }
          to{
            opacity:1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-row{
          animation: rowEnter 0.7s ease forwards;
        }
        `}
      </style>
    </div>
  );
};
export default Tariff;