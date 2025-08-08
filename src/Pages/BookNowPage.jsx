import React, { useState } from "react";
import { motion } from "framer-motion";

const roomOptions = ["Single Room", "Double Room", "Deluxe Room", "Suite"];

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    roomType: "",
    numberOfPeople: 1,
    numberOfRooms: 1,
    checkIn: "",
    checkOut: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send data to the backend here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-cover bg-center h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">Instant Book Now</h1>
      </motion.div>

      {/* Booking Form */}
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white shadow-lg p-8 my-10 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Booking Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Room Type</label>
              <select
                name="roomType"
                required
                value={formData.roomType}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
              >
                <option value="">Select a room</option>
                {roomOptions.map((room, idx) => (
                  <option key={idx} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Number of People
                </label>
                <input
                  type="number"
                  name="numberOfPeople"
                  required
                  min="1"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  name="numberOfRooms"
                  required
                  min="1"
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </form>
        </motion.div>
      ) : (
        // Thank You Section
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white shadow-md p-10 mt-10 text-center rounded-lg"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700">
            Hi <strong>{formData.fullName}</strong>, your booking for a{" "}
            <strong>{formData.roomType}</strong> has been received!
          </p>
          <p className="mt-4 text-gray-600">
            We look forward to hosting you from{" "}
            <strong>{formData.checkIn}</strong> to{" "}
            <strong>{formData.checkOut}</strong>.
          </p>
          <p className="mt-6">You’ll receive a confirmation email shortly.</p>
        </motion.div>
      )}
    </div>
  );
}
