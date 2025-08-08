import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const RoomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rooms = [
    {
      id: 1,
      name: "Standard Room (Single/Double)",
      guests: 2,
      size: "35 Feets Size",
      price: 150,
      image: "room1.jpg",
    },
    {
      id: 2,
      name: "Deluxe Room",
      guests: 2,
      size: "42 Feets Size",
      price: 200,
      image: "room2.jpg",
    },
    {
      id: 3,
      name: "Superior Room",
      guests: 2,
      size: "50 Feets Size",
      price: 350,
      image: "room3.jpg",
    },
    {
      id: 4,
      name: "Suite (Junior Suite / Executive Suite)",
      guests: 4,
      size: "55 Feets Size",
      price: 400,
      image: "room4.jpg",
    },
    {
      id: 5,
      name: "Luxury Suite / Presidential Suite",
      guests: 4,
      size: "60 Feets Size",
      price: 475,
      image: "room5.jpg",
    },
    {
      id: 6,
      name: "Connecting / Family Room",
      guests: 5,
      size: "65 Feets Size",
      price: 600,
      image: "room6.jpg",
    },
  ];

  // Calculate max index based on screen size
  const getMaxIndex = () => {
    if (isMobile) {
      return rooms.length - 1; // Show one card at a time on mobile
    }
    return Math.max(0, rooms.length - 3); // Show 3 cards at a time on desktop
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (getMaxIndex() + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + getMaxIndex() + 1) % (getMaxIndex() + 1)
    );
  };

  // Calculate slide width based on screen size
  const getSlideWidth = () => {
    return isMobile ? 280 : 400;
  };

  const getSlideGap = () => {
    return isMobile ? 16 : 32;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16 px-4">
        <p className="text-xs md:text-sm tracking-[0.2em] text-amber-600 uppercase mb-2 md:mb-4 font-light">
          ROOMS & SUITES
        </p>
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 tracking-wide">
          Our Rooms
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Navigation Buttons - Now inside container */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#AB8865] text-white shadow-lg flex items-center justify-center z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ChevronLeft size={isMobile ? 16 : 20} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#AB8865] text-white shadow-lg flex items-center justify-center z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ChevronRight size={isMobile ? 16 : 20} />
        </motion.button>

        {/* Carousel */}
        <div className="overflow-hidden mx-8 md:mx-16">
          <motion.div
            className="flex"
            style={{ gap: `${getSlideGap()}px` }}
            animate={{
              x: -currentIndex * (getSlideWidth() + getSlideGap()),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className="relative cursor-pointer group flex-shrink-0"
                style={{
                  width: `${getSlideWidth()}px`,
                  height: isMobile ? "400px" : "500px",
                }}
                onHoverStart={() => !isMobile && setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={!isMobile ? { y: -10 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Room Image */}
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Dark Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-20"
                    initial={{ opacity: 0.3 }}
                    whileHover={!isMobile ? { opacity: 0.5 } : {}}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={!isMobile ? { y: -10 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg md:text-2xl font-light mb-2 md:mb-3 tracking-wide line-clamp-2">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm opacity-90">
                        <span>{room.guests} Guests</span>
                        <span>{room.size}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Price Display */}
                  {isMobile && (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-lg px-3 py-2 text-white">
                      <span className="text-sm opacity-80">from </span>
                      <span className="text-lg font-light">${room.price}</span>
                    </div>
                  )}

                  {/* Desktop Hover Overlay */}
                  <AnimatePresence>
                    {!isMobile && hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-center items-center text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="text-center"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 30, opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <p className="text-sm opacity-80 mb-2 tracking-wider">
                            from
                          </p>
                          <div className="text-6xl font-light mb-8 tracking-wide">
                            ${room.price}
                          </div>
                          <motion.button
                            className="px-8 py-3 border border-white/50 text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            VIEW DETAILS
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator for Mobile */}
        {isMobile && (
          <div className="flex justify-center mt-6 gap-2">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#AB8865] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center mt-8 md:mt-6 px-4">
        <button className="flex items-center gap-3 justify-between hover:text-[#AB8865] transition-colors duration-300">
          <span className="text-lg md:text-xl">View All rooms</span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default RoomCarousel;
