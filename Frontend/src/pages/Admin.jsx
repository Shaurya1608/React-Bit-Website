// src/pages/CreateProductPage.jsx
import React, { useState } from "react";
import NeonNavbar from "../components/Navigation/NeonNavbar";
import { createProduct } from "../services/productApi";

const CreateProductPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and price are required");
      return;
    }

    try {
      setLoading(true);

      const product = {
        title,
        description,
        price: Number(price),
        image,
      };

      await createProduct(product); // POST -> /api/products

      alert("Product created ✅");
      // optionally clear the form
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <NeonNavbar />

      <section className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Create Product</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-400">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg bg-[#0b0b0b] border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              placeholder="Test Product"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full rounded-lg bg-[#0b0b0b] border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              rows={3}
              placeholder="Short description"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 w-full rounded-lg bg-[#0b0b0b] border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              placeholder="999"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Image URL</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 w-full rounded-lg bg-[#0b0b0b] border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              placeholder="https://example.com/image.png"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black hover:bg-cyan-300 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateProductPage;
