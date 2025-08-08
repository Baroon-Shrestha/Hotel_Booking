import { Clock, Mail, MapPin, Phone, Send, Users } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Optional: redirect to WhatsApp with prefilled message
    const whatsappNumber = "9851068219";
    const whatsappURL = `https://wa.me/977${whatsappNumber}?text=Hello%20Hotel%20Sherpa%20Soul!%0AName:%20${encodeURIComponent(
      formData.name
    )}%0AEmail:%20${encodeURIComponent(
      formData.email
    )}%0AMessage:%20${encodeURIComponent(formData.message)}`;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappURL, "_blank");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      detail: "+977-9851068219",
      description: "Direct message us on WhatsApp anytime",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "mingmasaino@gmail.com",
      description: "We usually respond within 24 hours",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Thamel, Kathmandu, Nepal",
      description: "Heart of Kathmandu's tourist district",
      gradient: "from-orange-400 to-red-500",
    },
  ];
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-500 mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to experience authentic Sherpa hospitality? Reach out to us
              for bookings, questions, or suggestions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {info.detail}
                  </p>
                  <p className="text-gray-500">{info.description}</p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Message */}
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
                  Send us a message
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Start a{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-clip-text text-transparent">
                    Conversation
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Whether you're planning your visit, need assistance, or want
                  to share feedback, we're here to help make your experience at
                  Hotel Sherpa Soul unforgettable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    <Clock className="w-8 h-8 text-pink-500 mr-3" />
                    <div>
                      <h4 className="font-bold text-white">Quick Response</h4>
                      <p className="text text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    <Users className="w-8 h-8 text-pink-400 mr-3" />
                    <div>
                      <h4 className="font-bold text-white">Personal Touch</h4>
                      <p className="text-gray-400 text-sm">Dedicated support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <Send className="w-6 h-6 mr-3" />
                    Send Message
                  </h3>
                  <p className="text-orange-100 mt-2">
                    Fill out the form below and we'll get back to you soon!
                  </p>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl p-4 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl p-4 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full border-2 border-gray-200 rounded-xl p-4 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 resize-none"
                      placeholder="Tell us about your inquiry or request..."
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By sending this message, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
