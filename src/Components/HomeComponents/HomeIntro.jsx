import React, { useEffect, useState } from "react";
import { Star, MapPin, Users, Award, Coffee } from "lucide-react";

export default function HomeIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=1200&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <section className="h-[80vh] flex relative overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>

        {/* Left Content Panel with Radial Gradient */}
        <div
          className="w-full lg:w-[50%] flex flex-col justify-center px-8 lg:px-16 py-20 relative"
          style={{
            background: `linear-gradient(to right, rgba(171, 136, 101, 0.95) 0%, rgba(171, 136, 101, 0.85) 40%, rgba(171, 136, 101, 0.7) 70%, rgba(171, 136, 101, 0.4) 100%)`,
          }}
        >
          <div className="relative z-10 space-y-8 max-w-2xl">
            {/* Brand */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                Hotel
                <span className="text-4xl lg:text-5xl xl:text-6xl block mt-2 text-white/90 font-light tracking-wide">
                  Sherpa
                </span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-lg font-medium">
                Thamel, Kathmandu, Nepal
              </span>
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Luxury Redefined
              </h2>
              <p className="text-white/90 text-lg font-light">
                Where Comfort Meets Excellence
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-white/80 text-base leading-relaxed max-w-lg">
                Experience unparalleled hospitality in the heart of Kathmandu.
                Our boutique hotel combines traditional Nepalese charm with
                contemporary luxury.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
    </div>
  );
}
