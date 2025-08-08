import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../HelperComponents/RoomsData";

export default function RoomDetail() {
  const { id } = useParams();
  const roomId = Number(id);
  const room = rooms.find((r) => r.id === roomId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Room not found
          </h2>
          <p className="text-gray-600">
            The room you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );

  console.log(room.name);

  // Handle both single image and array of images
  const images = Array.isArray(room.image) ? room.image : [room.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section with Carousel */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-black">
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt={`${room.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          <div className="absolute top-0">
            <button>Back</button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Navigation Arrows (only show if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-amber-400 w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Room Title Overlay */}
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{room.name}</h1>
            <div className="flex gap-4 text-lg opacity-90">
              <span className="flex items-center gap-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8A2 2 0 0116 6V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8z" />
                </svg>
                {room.guests} Guests
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  />
                </svg>
                {room.size} sq ft
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                {room.beds}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Room Details - Takes 2/3 of the space */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Room
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {room.description}
              </p>
            </div>

            {/* Amenities Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Room Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-amber-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Special Features
              </h3>
              {room.features && room.features.length > 0 ? (
                <div className="space-y-3">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg
                    className="w-12 h-12 text-gray-300 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <p className="text-gray-500 italic">
                    No special features listed for this room.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Booking Form - Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Reserve Your Stay</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-amber-400">
                      Rs. {room.price}
                    </span>
                    <span className="text-gray-300">/ night</span>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Check In
                      </label>
                      <input
                        type="date"
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Check Out
                      </label>
                      <input
                        type="date"
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Guest & Room Details */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Adults
                    </label>
                    <input
                      type="number"
                      defaultValue={1}
                      min="1"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Children
                    </label>
                    <input
                      type="number"
                      defaultValue={0}
                      min="0"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Rooms
                    </label>
                    <input
                      type="number"
                      defaultValue={1}
                      min="1"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200">
                      Extra Beds
                    </label>
                    <input
                      type="number"
                      defaultValue={0}
                      min="0"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                    />
                  </div>
                </div>

                {/* Extra Services */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-200">
                    Extra Services
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        id: "pet",
                        label: "Pet-friendly Amenities",
                        price: "$10",
                      },
                      { id: "spa", label: "Spa Services", price: "$20" },
                      { id: "laundry", label: "Laundry Service", price: "$30" },
                    ].map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id={service.id}
                            className="w-4 h-4 text-amber-400 bg-gray-700 border-gray-600 rounded focus:ring-amber-400 focus:ring-2"
                          />
                          <label
                            htmlFor={service.id}
                            className="text-gray-200 cursor-pointer"
                          >
                            {service.label}
                          </label>
                        </div>
                        <span className="text-amber-400 font-medium">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total & Book */}
                <div className="border-t border-gray-700 pt-6 mb-6">
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-medium text-gray-200">
                      Total Cost
                    </span>
                    <span className="font-bold text-amber-400">$129</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                  Book Your Stay
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Free cancellation up to 24 hours before check-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
