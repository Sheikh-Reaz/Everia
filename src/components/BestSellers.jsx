"use client";

import { ShoppingCart, Star, Heart } from "lucide-react";
import { Button } from "./ui/button";

const bestSellers = [
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Wireless Earbuds",
    price: "$249",
    oldPrice: "$299",
    image: "https://images.unsplash.com/photo-1598371611276-1bc503a270a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwd2lyZWxlc3N8ZW58MXx8fHwxNzY4Mzk1MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 1250,
    discount: "17%"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: "$899",
    oldPrice: "$999",
    image: "https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY4NDQ3NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 890,
    discount: "10%"
  },
  {
    id: 8,
    name: "Anker PowerCore",
    category: "Power Banks",
    price: "$69",
    oldPrice: "$89",
    image: "https://images.unsplash.com/photo-1766639214202-7eab6e6d1c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBjaGFyZ2VyfGVufDF8fHx8MTc2ODQ1NjAzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 650,
    discount: "22%"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Wireless Headphones",
    price: "$399",
    oldPrice: "$449",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY4MzY1ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviews: 1420,
    discount: "11%"
  }
];

export default function BestSellers() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6">
            BEST<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              SELLERS
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Most loved products by our customers
          </p>
        </div>

        {/* Complex Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((product, index) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              {/* Discount badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-20 bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                -{product.discount}
              </div>

              {/* Wishlist button */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className={`relative overflow-hidden aspect-square`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className={`p-4 sm:p-6 ${index === 0 ? 'sm:p-6 lg:p-8' : ''}`}>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                  {product.category}
                </p>
                <h3 className={`font-bold mb-2 sm:mb-3 line-clamp-2 ${
                  index === 0 ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg lg:text-xl'
                }`}>
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-orange-500 text-orange-500' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`font-black ${
                    index === 0 ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {product.price}
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="w-full bg-gray-900 text-white hover:bg-orange-500 gap-2 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <ShoppingCart className="w-4 h-4" />
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
