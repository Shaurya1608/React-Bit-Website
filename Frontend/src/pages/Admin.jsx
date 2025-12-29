// src/pages/CreateProductPage.jsx
import { useState } from "react";
import NeonNavbar from "../components/Navigation/NeonNavbar";
import { createProduct } from "../services/productApi";
import toast from "react-hot-toast";

const CreateProductPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "image") {
      setPreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.dismiss();

    if (!form.title || !form.price) {
      toast.error("Title & Price are required");
      return;
    }

    if (form.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      await createProduct({
        ...form,
        price: Number(form.price),
      });

      toast.success("Product created successfully 🎉");

      // reset
      setForm({ title: "", description: "", price: "", image: "" });
      setPreview("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <NeonNavbar />

      <section className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin — Create Product</h1>

          <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">
            Dashboard Control
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT — Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-[#0b0b0b]/80 border border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <div>
              <label className="text-sm text-gray-400">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
                placeholder="Product Name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
                placeholder="Short product description"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
                placeholder="999"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Image URL</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
                placeholder="https://image-link.png"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-xl py-3 font-semibold transition 
                border border-white/20
                ${loading
                  ? "bg-white/20 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20"}`}
            >
              {loading ? "Creating Product..." : "Create Product"}
            </button>
          </form>

          {/* RIGHT — Live Preview */}
          <div className="bg-[#0b0b0b]/80 border border-white/10 rounded-2xl p-6 shadow-xl">

            <h2 className="text-lg font-semibold mb-3">Preview</h2>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-72 object-cover"
                  onError={() => setPreview("")}
                />
              ) : (
                <div className="h-72 flex items-center justify-center text-gray-400">
                  No image selected
                </div>
              )}
            </div>

            <div className="mt-4 space-y-1">
              <p className="text-xl font-bold">{form.title || "Product Title"}</p>
              <p className="text-gray-400">{form.description || "Description preview..."}</p>
              <p className="text-cyan-300 font-semibold mt-2">
                {form.price ? `₹${form.price}` : "₹0.00"}
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CreateProductPage;
