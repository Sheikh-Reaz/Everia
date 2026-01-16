"use client";

import { ArrowRight, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end time to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Main Discount Offer */}
          <div className="lg:col-span-7">
            <Badge className="mb-4 sm:mb-6 bg-white text-orange-600 hover:bg-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              FLASH SALE
            </Badge>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-none">
              UP TO<br />
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem]">50%</span>
              <br />OFF
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-lg">
              Limited time offer on selected gadgets. Don't miss out!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link href="/products">
                <Button 
                  className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 text-sm sm:text-base lg:text-lg font-bold px-6 py-4 sm:px-8 sm:py-6 inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button 
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 text-sm sm:text-base lg:text-lg font-bold px-6 py-4 sm:px-8 sm:py-6 bg-transparent"
                >
                  View All Deals
                </Button>
              </Link>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-3 sm:gap-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <div className="flex gap-2 sm:gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">HOURS</div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black">:</div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">MINS</div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black">:</div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">SECS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">120+</div>
              <p className="text-xs sm:text-sm lg:text-base text-white/80">Products on Sale</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">85%</div>
              <p className="text-xs sm:text-sm lg:text-base text-white/80">Customer Satisfaction</p>
            </div>
            <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1598372170609-2fd4df73c7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWRnZXRzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg0NTYwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gadgets"
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
