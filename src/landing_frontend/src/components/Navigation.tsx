import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollToSection } from "../hooks/useScrollToSection";

interface NavigationProps {
  onGetStarted: () => void;
  currentPath?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onGetStarted,
  currentPath = "/",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMobileMenu();
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // Si no estamos en la página principal, navegar a la página principal y luego hacer scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="bg-secondary-800/80 backdrop-blur-md border-b border-secondary-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Payment System Logo"
              className="w-8 h-8 mr-3"
            />
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-red-400 transition-colors"
            >
              PayWeb3
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionClick("features")}
              className="text-secondary-300 hover:text-red-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleSectionClick("how-it-works")}
              className="text-secondary-300 hover:text-red-400 transition-colors"
            >
              How It Works
            </button>
            <Link
              to="/contact"
              className={`transition-colors ${
                currentPath === "/contact"
                  ? "text-red-400 font-medium"
                  : "text-secondary-300 hover:text-red-400"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-red-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary-800/95 backdrop-blur-md rounded-lg mt-2 border border-secondary-700">
              <button
                onClick={() => handleSectionClick("features")}
                className="block w-full text-left px-3 py-2 text-secondary-300 hover:text-red-400 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => handleSectionClick("how-it-works")}
                className="block w-full text-left px-3 py-2 text-secondary-300 hover:text-red-400 transition-colors"
              >
                How It Works
              </button>
              <Link
                to="/contact"
                className={`block px-3 py-2 transition-colors ${
                  currentPath === "/contact"
                    ? "text-red-400 font-medium"
                    : "text-secondary-300 hover:text-red-400"
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="border-t border-secondary-700 mt-3 pt-3 space-y-2">
                <button
                  onClick={() => {
                    onGetStarted();
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-3 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
