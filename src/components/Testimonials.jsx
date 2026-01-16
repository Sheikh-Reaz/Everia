"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    comment: "Absolutely love my new iPhone 15 Pro Max! The camera quality is outstanding and the titanium design feels premium. Fast shipping and excellent customer service.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    comment: "The Sony WH-1000XM5 headphones are a game-changer. Noise cancellation is incredible, and the sound quality is pristine. Worth every penny!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    comment: "Apple Watch Ultra 2 has transformed my fitness routine. The battery life is amazing, and the GPS accuracy is spot-on. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Park",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 4,
    comment: "Great selection of products and competitive prices. The AirPods Pro 2 I purchased exceeded my expectations. Will definitely shop here again!",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    comment: "As a music producer, I need quality audio equipment. The Bose QuietComfort 45 delivers exceptional sound clarity. Everia's service was top-notch!",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Early Adopter",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    rating: 5,
    comment: "Best online shopping experience I've had. Fast delivery, authentic products, and excellent packaging. The Samsung Galaxy S24 is phenomenal!",
    date: "3 days ago"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full mb-4 sm:mb-6">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6">
            CUSTOMER<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">
              TESTIMONIALS
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < testimonial.rating
                        ? "fill-orange-500 text-orange-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8 line-clamp-4">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-orange-500 ring-offset-2"
                />
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-500 mb-2">
              4.9
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-500 mb-2">
              15K+
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-500 mb-2">
              99%
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-500 mb-2">
              24/7
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
