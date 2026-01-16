"use client";

import React, { useState, useEffect } from "react";
import { Menu, LogOut, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-xl border-b border-white/30" 
            : "bg-transparent"
        }`}
        style={isScrolled ? {
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        } : {}}
      >
        <a href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
          <span className="text-2xl font-black tracking-tighter text-[#4A2C22]">
            EVERIA
          </span>
          <div className="h-2 w-2 bg-orange-500 mt-1"></div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#4A2C22]">
          <a href="/vr" className="hover:text-orange-600 transition-colors">
            VR PRO
          </a>
          <a href="/gaming" className="hover:text-orange-600 transition-colors">
            GAMING
          </a>
          <a href="/products" className="hover:text-orange-600 transition-colors">
            PRODUCT
          </a>
          <a href="/about" className="hover:text-orange-600 transition-colors">
            ABOUT US
          </a>
          <a href="/contact" className="hover:text-orange-600 transition-colors">
            CONTACT
          </a>
          {user && (
            <a href="/dashboard" className="hover:text-orange-600 transition-colors">
              DASHBOARD
            </a>
          )}
        </div>

        <div className="flex items-center gap-6">
          {user && (
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4A2C22]">
                {user.name}
              </span>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#4A2C22] hover:text-orange-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                LOGOUT
              </button>
            </div>
          )}
          {!user && (
            <a
              href="/login"
              className="hidden md:block text-[11px] font-bold uppercase tracking-widest text-[#4A2C22] hover:text-orange-600 transition-colors"
            >
              LOGIN
            </a>
          )}

          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-[#FBC02D] p-3 rounded-full hover:bg-yellow-500 transition-transform active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={3} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={3} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-20 right-6 left-6 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="p-6 space-y-1">
            <a
              href="/vr"
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VR PRO
            </a>
            <a
              href="/gaming"
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GAMING
            </a>
            <a
              href="/products"
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PRODUCT
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            
            {user && (
              <>
                <a
                  href="/dashboard"
                  className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#4A2C22] hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DASHBOARD
                </a>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  LOGOUT
                </button>
              </>
            )}

            {!user && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <a
                  href="/login"
                  className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LOGIN
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
