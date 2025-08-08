import React, { useState, useEffect, useRef } from "react";

const HomeFacilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-stone-50 py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-widest uppercase text-amber-600 mb-5 font-light">
            FACILITIES
          </p>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight">
            Our Facilites
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-6">
          {/* First Card */}
          <div
            className={`relative group transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel Room"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="max-w-xl bg-[#AB8865] text-white flex items-start justify-center flex-col absolute -bottom-5 left-5 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-amber-600/20 hover:scale-105 transition-all duration-300 group-hover:shadow-amber-900/25">
              <div className="text-4xl font-light mb-3 tracking-wide">
                <span className="inline-block">1</span>
                <span className="inline-block">2</span>
                <span className="inline-block">0</span>
                <span className="text-2xl">+</span>
                <span className="text-lg ml-2 font-normal">rooms</span>
              </div>
              <div className="text-amber-100 leading-relaxed text-sm">
                Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea
                velit deserunt. Experience luxury redefined.
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className={`mt-[15%] relative group transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gourmet Cuisine"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="max-w-xl bg-[#AB8865] text-white flex items-start justify-center flex-col absolute -bottom-5 left-5 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-amber-600/20 hover:scale-105 transition-all duration-300 group-hover:shadow-amber-900/25">
              <div className="text-4xl font-light mb-3 tracking-wide">
                <span className="inline-block">1</span>
                <span className="inline-block">0</span>
                <span className="inline-block">5</span>
                <span className="text-2xl">+</span>
                <span className="text-lg ml-2 font-normal">menu items</span>
              </div>
              <div className="text-amber-100 leading-relaxed text-sm">
                Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea
                velit deserunt. Culinary excellence awaits.
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Enhancement */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-3 h-3 bg-amber-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-1 h-1 bg-amber-500 rounded-full opacity-80 animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default HomeFacilities;
