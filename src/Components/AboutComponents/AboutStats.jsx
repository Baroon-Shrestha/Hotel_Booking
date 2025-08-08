import { Award, Heart, Star, Users } from "lucide-react";
import React from "react";

const stats = [
  { number: "15+", label: "Years of Hospitality", icon: Award },
  { number: "500+", label: "National & International Guests", icon: Users },
  { number: "24/7", label: "Guest Support", icon: Heart },
  { number: "4.8", label: "Guest Rating", icon: Star },
];

export default function AboutStats() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-orange-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-orange-500/50">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
