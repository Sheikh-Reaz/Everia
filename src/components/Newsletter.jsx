"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full mb-6 sm:mb-8">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6">
            STAY IN THE<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">
              LOOP
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter and get exclusive deals, new product launches, and tech insights delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-0 text-xs sm:text-sm text-red-400 mt-1">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          ) : (
            <div className="max-w-2xl mx-auto bg-green-500/10 border-2 border-green-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                <h3 className="text-xl sm:text-2xl font-bold text-green-500">
                  Successfully Subscribed!
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Thank you for subscribing! Check your inbox for a confirmation email and exclusive welcome offer.
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">
                🎁
              </div>
              <h4 className="text-sm sm:text-base font-bold mb-1">Exclusive Deals</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Get access to subscriber-only discounts
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">
                🚀
              </div>
              <h4 className="text-sm sm:text-base font-bold mb-1">Early Access</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Be first to know about new products
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">
                💡
              </div>
              <h4 className="text-sm sm:text-base font-bold mb-1">Tech Insights</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Expert reviews and buying guides
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
