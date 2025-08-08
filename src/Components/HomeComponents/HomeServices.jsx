import React from "react";
import { Tv2, Wifi, Building2, ShieldCheck, Briefcase } from "lucide-react";

import { MdBalcony } from "react-icons/md";

export default function HomeServices() {
  const services = [
    {
      icon: <Tv2 className="w-8 h-8 text-[#8B4513]" />,
      title: "Cable TV",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#8B4513]" />,
      title: "Work Desk",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#8B4513]" />,
      title: "Free Wifi",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#8B4513]" />,
      title: "Safebox",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
    {
      icon: <MdBalcony className="w-8 h-8 text-[#8B4513]" />,
      title: "Balcony",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#8B4513]" />,
      title: "City View",
      desc: "Sunt dolor aliquip consectetur laborum incididunt tempor.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff5ed] py-16">
      <div className="contaner mx-auto -4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-amber-600 uppercase mb-4 font-light">
            SERVICES
          </p>
          <h1 className="text-5xl font-light text-gray-900 tracking-wide">
            Our SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left Side with Image */}
          <div className="bg-red-100 rounded-2xl md:rounded-r-full h-[75vh] overflow-hidden flex items-center justify-center">
            <img
              src="/services.jpg"
              alt="Services"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Side with Icons and Features */}
          <div className="mt-0 md:mt-16 container mx-auto px-4">
            <div className="flex items-start flex-col mb-6">
              <div className="text-2xl font-extrabold mb-2">
                What We Provide
              </div>
              <div className="max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                ut nisi esse suscipit iusto consequuntur ab? Minus at voluptate
                omnis.
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div>{service.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1a1a1a]">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
