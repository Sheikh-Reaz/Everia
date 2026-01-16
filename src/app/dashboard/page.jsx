"use client";

import { useState } from "react";
import { Plus, Package, DollarSign, Users, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProducts } from "@/contexts/ProductContext";

export default function AdminDashboard() {
  const { products, addProduct, deleteProduct } = useProducts();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    description: "",
    image: ""
  });

  const stats = [
    { icon: Package, label: "Total Products", value: products.length.toString(), change: "+12%" },
    { icon: DollarSign, label: "Revenue", value: "$124,563", change: "+18%" },
    { icon: Users, label: "Customers", value: "10,234", change: "+7%" },
    { icon: TrendingUp, label: "Orders", value: "1,842", change: "+23%" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add $ to prices if not present
    const formattedPrice = formData.price.startsWith("$") ? formData.price : `$${formData.price}`;
    const formattedOldPrice = formData.oldPrice ? 
      (formData.oldPrice.startsWith("$") ? formData.oldPrice : `$${formData.oldPrice}`) : 
      formattedPrice;

    const newProduct = {
      name: formData.name,
      category: formData.category,
      price: formattedPrice,
      oldPrice: formattedOldPrice,
      stock: parseInt(formData.stock),
      description: formData.description,
      image: formData.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    };

    addProduct(newProduct);
    alert("Product added successfully!");
    setShowAddForm(false);
    setFormData({
      name: "",
      category: "",
      price: "",
      oldPrice: "",
      stock: "",
      description: "",
      image: ""
    });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
      alert("Product deleted successfully!");
    }
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 10) return "Low Stock";
    return "In Stock";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              ADMIN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                DASHBOARD
              </span>
            </h1>
            <p className="text-gray-600">Manage your products and inventory</p>
          </div>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
          >
            {showAddForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            {showAddForm ? "Cancel" : "Add Product"}
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </CardTitle>
                  <Icon className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600 font-semibold mt-1">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>
                Fill in the details to add a new product to your store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g. iPhone 15 Pro Max"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Smartphones">Smartphones</SelectItem>
                        <SelectItem value="Headphones">Headphones</SelectItem>
                        <SelectItem value="Smartwatches">Smartwatches</SelectItem>
                        <SelectItem value="Earbuds">Earbuds</SelectItem>
                        <SelectItem value="Power Banks">Power Banks</SelectItem>
                        <SelectItem value="Gaming">Gaming</SelectItem>
                        <SelectItem value="VR">VR Headsets</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price *</Label>
                    <Input
                      id="price"
                      type="text"
                      placeholder="999 or $999"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="oldPrice">Original Price</Label>
                    <Input
                      id="oldPrice"
                      type="text"
                      placeholder="1099 or $1,099"
                      value={formData.oldPrice}
                      onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity *</Label>
                    <Input
                      id="stock"
                      type="number"
                      placeholder="100"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Recent Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products ({products.length})</CardTitle>
            <CardDescription>Manage your product inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="pb-4 font-semibold">Product Name</th>
                    <th className="pb-4 font-semibold hidden md:table-cell">Category</th>
                    <th className="pb-4 font-semibold">Price</th>
                    <th className="pb-4 font-semibold hidden sm:table-cell">Stock</th>
                    <th className="pb-4 font-semibold">Status</th>
                    <th className="pb-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b last:border-0">
                      <td className="py-4 font-medium">{product.name}</td>
                      <td className="py-4 text-gray-600 hidden md:table-cell">{product.category}</td>
                      <td className="py-4 font-semibold">{product.price}</td>
                      <td className="py-4 hidden sm:table-cell">{product.stock}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            getStockStatus(product.stock) === "In Stock"
                              ? "bg-green-100 text-green-700"
                              : getStockStatus(product.stock) === "Low Stock"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {getStockStatus(product.stock)}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700 text-xs"
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
