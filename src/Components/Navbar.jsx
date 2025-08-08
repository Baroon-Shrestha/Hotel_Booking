import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const dropdownRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "room", label: "Rooms", href: "/rooms" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "\u4e2d\u6587", label: "Chinese" },
    { code: "\u0646\u0627\u0645\u0627\u0633\u062a\u064a", label: "Arabic" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavLink = ({ item, mobile = false, onClick }) => {
    const isActive = currentPath === item.href;
    return (
      <motion.div
        className="relative"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
          href={item.href}
          onClick={onClick}
          className={`relative py-3 px-1 transition-colors duration-300 font-medium ${
            mobile ? "block text-lg py-4" : ""
          } ${
            isActive
              ? "text-orange-500"
              : mobile
              ? "text-blue-700 hover:text-orange-500"
              : "text-blue-700 hover:text-orange-500"
          }`}
        >
          {item.label}
          {!mobile && (
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
          {mobile && isActive && (
            <motion.div
              className="absolute left-0 top-1/2 w-1 h-6 bg-orange-500 rounded-r-full"
              layoutId="mobileindicator"
              style={{ translateY: "-50%" }}
            />
          )}
        </a>
      </motion.div>
    );
  };

  const LanguageDropdown = ({ mobile = false }) => {
    if (mobile) {
      return (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-blue-700 mb-3">Language</h3>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`px-3 py-2 rounded-lg border border-blue-700/20 text-sm font-medium transition-colors duration-200 ${
                  selectedLanguage === lang.code
                    ? "bg-orange-500 text-white"
                    : "text-blue-700 hover:text-orange-500 hover:bg-orange-100"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLanguage(lang.code)}
              >
                {lang.code}
              </motion.button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
          onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-blue-700 hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-orange-100"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe size={16} />
          <span>{selectedLanguage}</span>
          <motion.div
            animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isLanguageDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[140px] z-50"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    selectedLanguage === lang.code
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                  }`}
                  whileHover={{ x: 2 }}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setIsLanguageDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{lang.label}</span>
                    <span className="text-xs opacity-75">{lang.code}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav
      className="bg-white shadow-lg border-b border-blue-100 relative z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center justify-center">
              <img
                src="Screenshot 2025-08-07 172744.png"
                alt="Sherpa Hotel Logo"
                className="h-20 w-auto max-w-[180px] object-contain"
              />
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <LanguageDropdown />
            </div>

            <motion.div
              className="hidden sm:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm lg:text-base"
              >
                Book Now
              </a>
            </motion.div>

            {/* Mobile menu icon */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-blue-700 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-blue-700 rounded-full"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-blue-700 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
