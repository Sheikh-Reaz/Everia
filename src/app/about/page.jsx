"use client";

import { Users, Target, Award, Zap, Heart, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything else"
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Only the best gadgets from trusted brands"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with the latest technology trends"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with excellence"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      bio: "Tech enthusiast with 15+ years in e-commerce"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Leading our technology and innovation initiatives"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Ensuring seamless customer experience"
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "Building connections with our community"
    }
  ];

  const milestones = [
    { year: "2018", title: "Founded", description: "Everia was born with a vision" },
    { year: "2019", title: "10K Customers", description: "Reached our first major milestone" },
    { year: "2021", title: "Global Expansion", description: "Expanded to 50+ countries" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top tech retailer" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white text-orange-600 hover:bg-white text-sm font-bold px-4 py-2">
              ABOUT US
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              Redefining Tech<br />
              <span className="text-white/90">Shopping</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              We are on a mission to make premium technology accessible to everyone, 
              delivering exceptional products with unmatched service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p>
                  Founded in 2018, Everia started with a simple belief: everyone deserves access 
                  to cutting-edge technology without compromise. What began as a small online store 
                  has grown into a trusted destination for tech enthusiasts worldwide.
                </p>
                <p>
                  Our journey has been driven by passion, innovation, and an unwavering commitment 
                  to our customers. We carefully curate every product, ensuring it meets our high 
                  standards for quality, performance, and value.
                </p>
                <p>
                  Today, we are proud to serve over 10,000 happy customers across 50+ countries, 
                  offering 500+ premium products from the world leading brands.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                To democratize access to premium technology by offering carefully curated products, 
                competitive pricing, and exceptional customer service that exceeds expectations.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                To become the world most trusted technology retailer, known for innovation, 
                quality, and creating meaningful connections between people and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600 hidden sm:block"></div>

              <div className="space-y-8 sm:space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-0 sm:pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-sm hidden sm:flex">
                      {milestone.year}
                    </div>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-2 sm:hidden">
                        <span className="text-2xl font-black text-orange-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Everia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Be part of the Everia community and experience the future of tech shopping
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-6">
                Shop Now
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg font-bold px-8 py-6 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
