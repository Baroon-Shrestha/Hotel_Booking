import { Mountain } from "lucide-react";
import React from "react";

export default function AboutHero() {
  return (
    <div>
      <div
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/Abouts.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Enhanced overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              <Mountain className="w-6 h-6 text-white/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-2xl mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Welcoming National & International Guests with Authentic Sherpa
            Hospitality
          </p>
        </div>
      </div>
    </div>
  );
}
