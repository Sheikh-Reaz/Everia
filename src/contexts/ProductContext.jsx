"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

// Initial products from the data
const initialProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: "$1,199",
    oldPrice: "$1,299",
    image: "https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?w=600",
    rating: 4.9,
    stock: 45,
    discount: "8%",
    description: "The iPhone 15 Pro Max represents the pinnacle of smartphone technology."
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: "$399",
    oldPrice: "$449",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.8,
    stock: 32,
    discount: "11%",
    description: "Industry-leading noise cancellation with premium sound quality."
  },
  {
    id: 3,
    name: "Apple Watch Ultra 2",
    category: "Smartwatches",
    price: "$799",
    oldPrice: "$849",
    image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=600",
    rating: 5.0,
    stock: 18,
    discount: "6%",
    description: "The most rugged and capable Apple Watch ever."
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Earbuds",
    price: "$249",
    oldPrice: "$299",
    image: "https://images.unsplash.com/photo-1598371611276-1bc503a270a4?w=600",
    rating: 4.9,
    stock: 67,
    discount: "17%",
    description: "Next-level Active Noise Cancellation and Adaptive Transparency."
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: "$899",
    oldPrice: "$999",
    image: "https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?w=600",
    rating: 4.8,
    stock: 23,
    discount: "10%",
    description: "Meet Galaxy AI with powerful features and stunning display."
  },
  {
    id: 6,
    name: "Anker PowerCore 20K",
    category: "Power Banks",
    price: "$69",
    oldPrice: "$89",
    image: "https://images.unsplash.com/photo-1766639214202-7eab6e6d1c53?w=600",
    rating: 4.7,
    stock: 89,
    discount: "22%",
    description: "Ultra-high capacity portable charger with 20,000mAh battery."
  },
  {
    id: 7,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: "$329",
    oldPrice: "$379",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.7,
    stock: 41,
    discount: "13%",
    description: "Legendary noise cancellation meets premium comfort."
  },
  {
    id: 8,
    name: "Google Pixel Watch 2",
    category: "Smartwatches",
    price: "$349",
    oldPrice: "$399",
    image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?w=600",
    rating: 4.6,
    stock: 29,
    discount: "13%",
    description: "Google's smartest watch yet with Fitbit integration."
  },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Load products from localStorage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("everia_products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem("everia_products", JSON.stringify(initialProducts));
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("everia_products", JSON.stringify(products));
    }
  }, [products]);

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(), // Generate unique ID
      rating: 4.5, // Default rating
      discount: calculateDiscount(productData.price, productData.oldPrice),
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const calculateDiscount = (price, oldPrice) => {
    if (!oldPrice || oldPrice === price) return "0%";
    const priceNum = parseFloat(price.replace(/[$,]/g, ""));
    const oldPriceNum = parseFloat(oldPrice.replace(/[$,]/g, ""));
    const discount = Math.round(((oldPriceNum - priceNum) / oldPriceNum) * 100);
    return `${discount}%`;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
