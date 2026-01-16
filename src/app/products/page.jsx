"use client";

import { useState } from "react";
import { Filter, ShoppingCart, Star, Heart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useProducts } from "@/contexts/ProductContext";

export default function ProductsPage() {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const categories = ["All", "Smartphones", "Headphones", "Smartwatches", "Earbuds", "Power Banks", "Gaming", "VR"];
  const priceRanges = ["All", "$0 - $100", "$100 - $300", "$300 - $500", "$500+"];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (priceRange !== "All") {
      const price = parseInt(product.price.replace("$", "").replace(",", ""));
      if (priceRange === "$0 - $100" && (price < 0 || price > 100)) return false;
      if (priceRange === "$100 - $300" && (price < 100 || price > 300)) return false;
      if (priceRange === "$300 - $500" && (price < 300 || price > 500)) return false;
      if (priceRange === "$500+" && price < 500) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black tracking-tighter mb-4">
            ALL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              PRODUCTS
            </span>
          </h1>
          <p className="text-xl text-gray-600">Browse our complete collection of premium gadgets ({products.length} products)</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5" />
            <h3 className="text-lg font-bold">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Price Range</label>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      priceRange === range
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Discount Badge */}
              <div className="relative">
                {product.discount && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 left-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>

                {product.rating && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-orange-500 text-orange-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.rating})</span>
                  </div>
                )}

                <p className="text-xs text-gray-500 mb-3">Stock: {product.stock}</p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black">{product.price}</span>
                  {product.oldPrice && product.oldPrice !== product.price && (
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>

                <Button className="w-full bg-gray-900 text-white hover:bg-orange-500 gap-2 py-3">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </a>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No products found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
