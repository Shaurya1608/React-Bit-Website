import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const hasImage = product?.image && product.image.trim() !== "";

  return (
    <div className="w-70 h-80 rounded-2xl bg-[#0b0b0b] border border-white/10 p-4 flex flex-col">
      {hasImage && (
        <img
          src={product.image}
          alt={product.title || "Product image"}
          className="h-44 w-full rounded-xl object-cover mb-4"
        />
      )}

      <h3 className="text-sm font-semibold text-white">
        {product.title}
      </h3>

      <p className="mt-1 text-xs text-gray-400 line-clamp-2">
        {product.description}
      </p>

      <p className="mt-2 text-gray-300 font-semibold">
        ₹{product.price}
      </p>

      <div className="mt-auto flex gap-3 pt-3">
        <button
          onClick={() => navigate(`/product/${product._id}`)}
          className="cursor-target flex-1 rounded-lg border border-gray-400 text-white text-sm hover:bg-white hover:text-black transition"
        >
          Add To Cart
        </button>

        <button
          onClick={() => navigate("/purchase", { state: product })}
          className="cursor-target flex-1 rounded-lg py-2 border border-gray-400 text-white text-sm hover:bg-white hover:text-black transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
