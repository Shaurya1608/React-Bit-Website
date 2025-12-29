import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderApi";
import RecommendedProducts from "../components/Products/RecommendedProducts";

const PurchasePage = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  if (!product) return null;

  const handleOrder = async () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await createOrder({
        productId: product._id,
        name,
        email,
        amount: product.price,
      });

      alert("Order placed successfully 🎉");
      navigate("/"); // or success page
    } catch (error) {
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 py-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PRODUCT */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-56 w-full rounded-xl object-cover mb-6"
            />

            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-400 mb-4">{product.description}</p>

            <div className="flex justify-between border-t border-white/10 pt-4">
              <span>Total Price</span>
              <span className="text-cyan-400 text-xl">
                ₹{product.price}
              </span>
            </div>
          </div>

          {/* CHECKOUT */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <h3 className="text-xl font-semibold mb-6">Checkout</h3>

            <div className="space-y-5">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded-lg bg-black border border-white/10 px-4 py-2 outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleOrder}
                disabled={loading}
                className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black hover:bg-cyan-300 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>

        </div>
      </section>

      <RecommendedProducts />
    </>
  );
};

export default PurchasePage;
