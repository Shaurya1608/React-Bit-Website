import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern animated portfolio with dark UI and smooth effects.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1704775991298-38b9139fdad9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Landing Page",
    description: "High-conversion landing page with premium visuals.",
    price: 1499,
    image: "https://plus.unsplash.com/premium_photo-1727967288422-de27771f5999?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 29,
    image: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 2,
    image: "https://plus.unsplash.com/premium_photo-1708275308965-bde27579612d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxjbG90aGVzJTIwYnJhbmRzfGVufDB8fDB8fHww",
  },
   {
    id: 5,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 2,
    image: "https://images.unsplash.com/photo-1620812112510-ea35f4cc7875?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, {
    id: 6,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 2,
    image: "https://images.unsplash.com/photo-1587374982348-e241c6ea695f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, {
    id: 7,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 2,
    image: "https://images.unsplash.com/photo-1600609842388-3e2ed2a1454a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "E-commerce UI",
    description: "Clean and scalable e-commerce frontend design.",
    price: 24,
    image: "https://plus.unsplash.com/premium_photo-1755994149662-14c6a33cfcb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductsGrid = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
  };

  return (
      <section className="bg-black py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Products
      </h2>

      {/* Horizontal scroll container */}
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 w-max">
          {products.map(product => (
            <div key={product.id} className="min-w-[320px]">
               <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
