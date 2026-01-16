"use client";

import { Eye, Cpu, Play, ArrowRight, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const vrProducts = [
  {
    id: 1,
    name: "Meta Quest 3",
    price: "$499",
    oldPrice: "$599",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",
    badge: "BESTSELLER",
    specs: "128GB Storage"
  },
  {
    id: 2,
    name: "PlayStation VR2",
    price: "$549",
    oldPrice: "$649",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",
    badge: "NEW",
    specs: "4K HDR Display"
  },
  {
    id: 3,
    name: "HTC Vive Pro 2",
    price: "$799",
    oldPrice: "$899",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",
    badge: "PREMIUM",
    specs: "5K Resolution"
  },
  {
    id: 4,
    name: "Valve Index",
    price: "$999",
    oldPrice: "$1,099",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600",
    badge: "PRO",
    specs: "144Hz Display"
  }
];

export default function VRProPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-red-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200"
            alt="VR Experience"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-6 bg-orange-500 text-white hover:bg-orange-600 text-sm px-4 py-2 inline-flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              VR PRO COLLECTION
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none text-gray-900">
              STEP INTO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">
                THE FUTURE
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience reality like never before with our premium VR headsets. Immersive worlds await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
              <Button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg gap-2 bg-transparent">
                Explore VR
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-12 text-center">WHY VR PRO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Ultra HD Visuals</h3>
              <p className="text-gray-600">Crystal-clear 4K+ resolution with 120Hz refresh rates for the most immersive experience</p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Powerful Performance</h3>
              <p className="text-gray-600">Advanced processors and GPUs deliver seamless, lag-free virtual experiences</p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Comfort Design</h3>
              <p className="text-gray-600">Ergonomically designed for extended sessions with adjustable straps and cushioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* VR Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-center">VR HEADSETS</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Choose from our selection of premium VR headsets
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vrProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-lg"
                >
                  <div className="relative">
                    <Badge className="absolute top-6 left-6 z-10 bg-orange-500 text-white hover:bg-orange-600">
                      {product.badge}
                    </Badge>
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{product.specs}</p>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-black">{product.price}</span>
                      <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    </div>
                    <Button className="w-full bg-gray-900 text-white hover:bg-orange-500 gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12 text-center">
            EXPERIENCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              ENDLESS POSSIBILITIES
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1614179524506-b37c55045e5b?w=600"
                alt="Gaming"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Gaming</h3>
                <p className="text-gray-200">Immersive gaming experiences</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600"
                alt="Entertainment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Entertainment</h3>
                <p className="text-gray-200">Movies and virtual experiences</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
                alt="Work"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Work</h3>
                <p className="text-gray-200">Virtual meetings and collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">READY FOR YOUR VR JOURNEY?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform the way you see the world with our cutting-edge VR technology
          </p>
          <Link href="/products">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg gap-2 font-bold">
              Shop VR Headsets
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}