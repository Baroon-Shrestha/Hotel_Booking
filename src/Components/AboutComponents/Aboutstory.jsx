import { ChevronRight, MapPin } from "lucide-react";
import React from "react";

export default function Aboutstory() {
  return (
    <div>
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Enhanced Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Welcome to Hotel{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    Sherpa Soul
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                  Nestled in the heart of Thamel, Kathmandu, Hotel Sherpa Soul
                  offers a unique blend of cultural charm, comfort, and
                  convenience for both national and international travelers
                  exploring the wonders of Nepal.
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  Whether you're a local guest discovering your own country's
                  treasures or an international visitor exploring Nepal's
                  majestic landscapes and historic sites, our hotel serves as
                  the perfect base with warm hospitality and modern amenities.
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                  At Hotel Sherpa Soul, we proudly welcome guests from across
                  Nepal and around the world, sharing the authentic essence of
                  Sherpa warmth in the capital's most vibrant neighborhood.
                </div>
              </div>

              <div className="pt-4">
                <button className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <MapPin className="inline-block mr-2 w-5 h-5" />
                  Explore Our Location
                  <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Enhanced Image with overlays */}
            <div className="relative">
              <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="/About.jpg"
                  alt="Hotel Sherpa Soul View"
                  className="w-full h-full object-cover"
                />
                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Experience Nepal
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your gateway to Nepal's beauty - serving local explorers
                      and global travelers
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
