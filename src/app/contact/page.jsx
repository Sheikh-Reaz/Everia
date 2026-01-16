"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-200 text-sm px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              GET IN TOUCH
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
              CONTACT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                US
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">support@everia.com</p>
              <p className="text-gray-600 text-sm">sales@everia.com</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">Mon-Fri 9am-6pm EST</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-2">123 Tech Street</p>
              <p className="text-gray-600 text-sm">San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-black mb-4">
                  SEND US A{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    MESSAGE
                  </span>
                </h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                FREQUENTLY ASKED{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  QUESTIONS
                </span>
              </h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold mb-2">What are your shipping options?</h3>
                <p className="text-gray-600">We offer free standard shipping on orders over $50. Express shipping is available for an additional fee.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold mb-2">What is your return policy?</h3>
                <p className="text-gray-600">We accept returns within 30 days of purchase. Items must be in original condition with all packaging.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold mb-2">Do you offer warranty on products?</h3>
                <p className="text-gray-600">Yes, all our products come with a manufacturer's warranty. Extended warranty options are available at checkout.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold mb-2">How can I track my order?</h3>
                <p className="text-gray-600">Once your order ships, you'll receive a tracking number via email. You can also track orders in your account dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6">BUSINESS HOURS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <div>
                <p className="font-bold mb-2">Monday - Friday</p>
                <p className="text-orange-100">9:00 AM - 6:00 PM EST</p>
              </div>
              <div>
                <p className="font-bold mb-2">Saturday - Sunday</p>
                <p className="text-orange-100">10:00 AM - 4:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
