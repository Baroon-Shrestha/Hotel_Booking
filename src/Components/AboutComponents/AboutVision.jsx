import { ChevronRight, Heart } from "lucide-react";
import React from "react";

export default function AboutVision() {
  return (
    <div>
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <div className="inline-block p-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-8 shadow-2xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              To be the most trusted and beloved hotel in Kathmandu — where
              every guest, whether from Nepal or abroad, experiences the harmony
              of{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Sherpa hospitality
              </span>
              , cultural richness, and thoughtful comfort that bridges local
              warmth with international standards in the heart of the Himalayas.
            </p>
          </div>

          <div className="mt-12">
            <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
              Start Your Journey
              <ChevronRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
