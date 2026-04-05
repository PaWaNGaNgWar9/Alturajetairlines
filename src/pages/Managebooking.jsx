import React, { useState } from "react";
import { FaSearch, FaTicketAlt } from "react-icons/fa";

const ManageBooking = () => {
  const [pnr, setPnr] = useState("");
  const [lastName, setLastName] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!pnr || !lastName) {
      setError("Please enter PNR and Last Name");
      return;
    }

    // Dummy data (Replace with API)
    if (pnr === "123456" && lastName.toLowerCase() === "kumar") {
      setBooking({
        name: "Ravi Kumar",
        flight: "Delhi → Dubai",
        date: "2026-04-10",
        status: "Confirmed",
      });
      setError("");
    } else {
      setBooking(null);
      setError("Booking not found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FaTicketAlt className="text-2xl text-blue-900" />
          <h1 className="text-2xl font-bold text-blue-900">Manage Booking</h1>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter PNR Number"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleSearch}
            className="w-full bg-blue-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800"
          >
            <FaSearch /> Search Booking
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {/* Booking Details */}
        {booking && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-3">Booking Details</h2>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Flight:</strong> {booking.flight}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Status:</strong> 
              <span className="text-green-600 font-semibold"> {booking.status}</span>
            </p>

            {/* Actions */}
            <div className="mt-4 flex gap-3">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Modify
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;
