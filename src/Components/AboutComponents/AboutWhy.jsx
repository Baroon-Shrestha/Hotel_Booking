import { Mountain } from "lucide-react";
import React from "react";

export default function AboutWhy() {
  const features = [
    {
      title: "Authentic Sherpa Culture",
      description:
        "Experience the genuine warmth and traditions of Sherpa hospitality, welcoming both Nepali and international guests with equal care and cultural richness.",
      gradient: "from-orange-400 to-pink-500",
    },
    {
      title: "Prime Thamel Location",
      description:
        "Perfectly positioned for national guests exploring Kathmandu and international visitors discovering Nepal's vibrant markets, restaurants, and cultural landmarks.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Inclusive Hospitality",
      description:
        "Contemporary amenities and thoughtful service designed to meet the diverse needs of local Nepali travelers and guests from around the world.",
      gradient: "from-green-400 to-blue-500",
    },
  ];
  return (
    <div>
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Sherpa Soul
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover what makes our hotel the perfect choice for your
              Kathmandu adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
