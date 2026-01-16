"use client";

import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: "$1,199",
    image: "https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY4NDQ3NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    badge: "NEW"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: "$399",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.8,
    badge: "HOT"
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2",
    category: "Smartwatches",
    price: "$799",
    image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=600",
    rating: 5.0,
    badge: "PREMIUM"
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Earbuds",
    price: "$249",
    image: "https://images.unsplash.com/photo-1598371611276-1bc503a270a4?w=600",
    rating: 4.9,
    badge: "TRENDING"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: "$899",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
    rating: 4.8,
    badge: "NEW"
  },
  {
    id: 6,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: "$329",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",
    rating: 4.7,
    badge: "SALE"
  },
  {
    id: 7,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: "$329",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",
    rating: 4.7,
    badge: "SALE"
  },
  {
    id: 8,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: "$329",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",
    rating: 4.7,
    badge: "SALE"
  },
  
];

export default function Featured() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4">
          <div>
            <Badge className="mb-3 sm:mb-4 bg-orange-100 text-orange-600 hover:bg-orange-100 text-xs sm:text-sm">
              FEATURED COLLECTION
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
              TOP PICKS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                FOR YOU
              </span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-10">
                <Badge className="bg-orange-500 text-white hover:bg-orange-600 text-xs sm:text-sm px-2 py-1 sm:px-3">
                  {product.badge}
                </Badge>
              </div>

              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                  {product.category}
                </p>
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-500 text-orange-500" />
                    <span className="text-xs sm:text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>

                <Button className="w-full mt-4 sm:mt-6 bg-gray-900 text-white hover:bg-orange-500 py-2 sm:py-3 text-sm sm:text-base">
                  Add to Cart
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
