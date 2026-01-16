"use client";

import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import productsData from "../../../data/products.json";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/products">
          <Button className="mb-8 gap-2 bg-transparent text-gray-900 border-2 border-gray-200 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-xl">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, i) => (
                <div 
                  key={i} 
                  className="aspect-square rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${i + 2}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-100">
                {product.category}
              </Badge>
              <h1 className="text-5xl font-black tracking-tight mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-orange-500 text-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black">{product.price}</span>
                <span className="text-2xl text-gray-400 line-through">{product.oldPrice}</span>
                <Badge className="bg-red-500 text-white hover:bg-red-600">
                  -{product.discount}
                </Badge>
              </div>

              <p className="text-lg text-gray-600 mb-8">{product.description}</p>

              {/* Stock */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-700 font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  In Stock - {product.stock} units available
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <div className="flex gap-4">
                <Button className="flex-1 border-2 gap-2 bg-transparent text-gray-900 hover:bg-gray-100">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </Button>
                <Button className="flex-1 border-2 gap-2 bg-transparent text-gray-900 hover:bg-gray-100">
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="specifications" className="text-lg">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="description" className="text-lg">
                Description
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-lg">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, i) => (
                  <div 
                    key={i} 
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                  >
                    <span className="font-semibold text-gray-700">{spec.label}</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="description" className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Product Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Experience unparalleled performance with cutting-edge technology. This product combines 
                innovative design with powerful features to deliver an exceptional user experience. 
                Whether for work or play, it exceeds expectations in every way.
              </p>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-orange-500 text-orange-500" 
                          />
                        ))}
                      </div>
                      <span className="font-semibold">John Doe</span>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <p className="text-gray-600">
                      Amazing product! The quality exceeds my expectations and the performance is outstanding. 
                      Highly recommended for anyone looking for a premium experience.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
