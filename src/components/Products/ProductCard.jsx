import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // ✅ correct hook

  return (
    <div className="
      w-[320px] 
      rounded-2xl 
      bg-[#0b0b0b] 
      border border-white/10 
      p-4 
      flex flex-col
    ">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-44 w-full rounded-xl object-cover mb-4"
      />

      {/* Content */}
      <h3 className="text-lg font-semibold text-white">
        {product.title}
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {product.description}
      </p>

      <p className="mt-3 text-cyan-400 font-semibold">
        ₹{product.price}
      </p>

      {/* Buttons */}
      <div className="mt-auto flex gap-3 pt-4">
        <button
          className="cursor-target flex-1 rounded-lg border border-cyan-400/40 text-cyan-400 py-2 text-sm hover:bg-cyan-400 hover:text-black transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => navigate("/purchase")}
          className="cursor-target flex-1 rounded-lg bg-cyan-400 text-black py-2 text-sm hover:bg-cyan-300 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
