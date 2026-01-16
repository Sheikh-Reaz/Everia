"use client";

import { Truck, Shield, Headphones, CreditCard } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure transaction guarantee",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service team",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day money back guarantee",
    color: "from-orange-500 to-orange-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6">
            WHY CHOOSE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              EVERIA
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Experience the best in class service and quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="group relative text-center"
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  {/* Animated background circle */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-150`}
                  ></div>

                  {/* Icon container */}
                  <div 
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              10K+
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              500+
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">Products</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              98%
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              50+
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">Top Brands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
