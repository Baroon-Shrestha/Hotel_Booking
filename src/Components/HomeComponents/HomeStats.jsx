import React from "react";
import { Star, MapPin, Users, Award, Coffee } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomeStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-8 lg:px-12">
          <div
            ref={ref}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {/* TripAdvisor Rating */}
            <StatCard
              icon={<Award className="w-8 h-8 text-green-600" />}
              bgColor="bg-green-100"
              rating={4.8}
              source="TripAdvisor"
              reviews={500}
              inView={inView}
            />

            {/* Google Reviews */}
            <StatCard
              icon={<Star className="w-8 h-8 text-blue-600" />}
              bgColor="bg-blue-100"
              rating={4.9}
              source="Google"
              reviews={600}
              inView={inView}
            />

            {/* Happy Guests */}
            <StatCard
              icon={<Users className="w-8 h-8 text-orange-600" />}
              bgColor="bg-orange-100"
              count={5000}
              label="Happy Guests"
              subLabel="Since 2018"
              inView={inView}
            />

            {/* Years of Excellence */}
            <StatCard
              icon={<Coffee className="w-8 h-8 text-purple-600" />}
              bgColor="bg-purple-100"
              count={6}
              label="Years"
              subLabel="Of Excellence"
              inView={inView}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  bgColor,
  rating,
  source,
  reviews,
  count,
  label,
  subLabel,
  inView,
}) {
  return (
    <div className="transition-all duration-300">
      <div className="text-center space-y-4">
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto`}
        >
          {icon}
        </div>

        <div>
          {rating ? (
            <>
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      source === "TripAdvisor"
                        ? "fill-green-500 text-green-500"
                        : "fill-blue-500 text-blue-500"
                    }`}
                  />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-800">
                {inView && <CountUp end={rating} decimals={1} duration={2} />}
              </div>
              <div className="text-sm text-gray-600 font-medium">{source}</div>
              <div className="text-xs text-gray-500">
                {inView && <CountUp end={reviews} />}+ Reviews
              </div>
            </>
          ) : (
            <>
              <div className="text-3xl font-bold text-gray-800">
                {inView && (
                  <CountUp
                    end={count}
                    duration={2}
                    suffix={count >= 1000 ? "+" : ""}
                  />
                )}
              </div>
              <div className="text-sm text-gray-600 font-medium">{label}</div>
              <div className="text-xs text-gray-500">{subLabel}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
