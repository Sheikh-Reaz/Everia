import { Gamepad2, Zap, Trophy, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const gamingProducts = [
  {
    id: 1,
    name: "ROG Gaming Mouse",
    price: "$89",
    oldPrice: "$109",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600",
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    price: "$149",
    oldPrice: "$179",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    badge: "NEW"
  },
  {
    id: 3,
    name: "Gaming Headset Pro",
    price: "$199",
    oldPrice: "$249",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    badge: "HOT"
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    price: "$599",
    oldPrice: "$699",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    badge: "PREMIUM"
  },
  {
    id: 5,
    name: "Gaming Chair Pro",
    price: "$399",
    oldPrice: "$499",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600",
    badge: "SALE"
  },
  {
    id: 6,
    name: "RGB Gaming Mousepad",
    price: "$49",
    oldPrice: "$69",
    image: "https://images.unsplash.com/photo-1616588228783-c559f41c0d6b?w=600",
    badge: "NEW"
  }
];

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-200 text-sm px-4 py-2">
              <Gamepad2 className="w-4 h-4 mr-2" />
              GAMING COLLECTION
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              LEVEL UP<br />YOUR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                GAME
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl">
              Premium gaming gear designed for champions. Elevate your performance with cutting-edge technology.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg gap-2">
              <Trophy className="w-5 h-5" />
              Explore Gaming Gear
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">High Performance</h3>
              <p className="text-gray-600">Lightning-fast response times and zero lag for competitive advantage</p>
            </div>
            <div className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Pro-Level Quality</h3>
              <p className="text-gray-600">Tournament-grade equipment used by professional esports players</p>
            </div>
            <div className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Gamepad2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Comfort First</h3>
              <p className="text-gray-600">Ergonomic designs for extended gaming sessions without fatigue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black tracking-tight mb-12 text-center">
            GAMING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              ESSENTIALS
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-orange-500"
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
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-black">{product.price}</span>
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6 text-white">READY TO DOMINATE?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of gamers who trust EVERIA for their gaming setup
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg gap-2 font-bold">
            Shop All Gaming Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
