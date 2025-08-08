import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const HomeTestimonials = () => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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

  const testimonials = [
    {
      id: 1,
      text: "Switching to Credenza was a game-changer for us. Their platform streamlined our financial processes, saving us countless hours each month.",
      name: "William Ashford",
      title: "Product Manager, Google",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      text: "The security features offered give us peace of mind knowing that our customer data is protected.",
      name: "Scarlett Palmer",
      title: "Marketing Director, Adobe",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      text: "The integration process was seamless and we were up and running quickly.",
      name: "Ruby Hayes",
      title: "IT Director, Mailchimp",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

      faded: true,
    },
    {
      id: 4,
      text: "The customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.",
      name: "Laila Smith",
      title: "Account Executive, Notion",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

      faded: true,
    },
    {
      id: 5,
      text: "We've seen a significant improvement in our compliance management since the switch.",
      name: "Marion Wright",
      title: "Product Manager, Slack",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 6,
      text: "I can't recommend Credenza enough! Their lending solutions have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.",
      name: "Samuel Kingsley",
      title: "Financial Analyst, Squarespace",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}

        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-widest uppercase text-amber-600 mb-5 font-light">
            Testimonials
          </p>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We take pride in delivering exceptional solutions that deliver great
            results. But don't just take our word for it.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 ${
                testimonial.faded ? "opacity-40" : "opacity-100"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Reviews Button */}
        <div
          className={`text-center transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium">
            See all Reviews
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
