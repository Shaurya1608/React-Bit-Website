import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cart";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const hasImage =
    product?.image &&
    typeof product.image === "string" &&
    product.image.trim() !== "";

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Added ${product.title} to cart 🛒`);
  };

  return (
    <div
      className="
        w-[280px]
        rounded-2xl 
        bg-[#0b0b0b] 
        border border-white/10 
        p-4 
        flex flex-col
        hover:border-cyan-400/60
        hover:shadow-[0_0_20px_#00ffff22]
        transition-all duration-200
      "
    >
      {/* IMAGE */}
      <div className="h-40 w-full rounded-xl overflow-hidden border border-white/10 mb-3">
        {hasImage ? (
          <img
            src={product.image}
            alt={product.title || "Product image"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-500 text-sm">
            No Image Available
          </div>
        )}
      </div>

      {/* TITLE */}
      <h3 className="text-sm font-semibold text-white line-clamp-1">
        {product.title || "Untitled Product"}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-1 text-xs text-gray-400 line-clamp-2">
        {product.description || "No description provided"}
      </p>

      {/* PRICE */}
      <p className="mt-2 text-gray-200 font-bold">
        ₹{product.price ?? "—"}
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-auto flex gap-3 pt-3">

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="
            flex-1 rounded-lg border border-gray-400 
            text-white text-sm py-2
            hover:bg-white hover:text-black 
            transition
          "
        >
          Add To Cart
        </button>

        {/* Buy Now */}
        <button
          onClick={() => navigate("/purchase", { state: product })}
          className="
            flex-1 rounded-lg border border-cyan-400 text-cyan-300 
            text-sm py-2
            hover:bg-cyan-400 hover:text-black
            transition
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
