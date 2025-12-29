// src/pages/AddToCart.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productApi";
import { addToCart } from "../services/cart"
import toast from "react-hot-toast";
import NeonNavbar from "../components/Navigation/NeonNavbar";

const AddToCart = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res);
      } catch {
        toast.error("Product not found");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart 🛒");
  };

  if (loading) return <div className="p-10 text-white">Loading...</div>;

  if (!product)
    return <div className="p-10 text-red-400">Product not found</div>;

  return (
    <div className="bg-black min-h-screen text-white">
      <NeonNavbar />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 p-10">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-400">{product.description}</p>

          <p className="text-2xl text-cyan-300 font-bold">
            ₹{product.price}
          </p>

          <button
            onClick={handleAdd}
            className="mt-4 w-full rounded-xl py-3 font-semibold
              bg-white/10 border border-white/20 
              hover:bg-white/20 transition"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
