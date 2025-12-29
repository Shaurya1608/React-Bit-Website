import { useEffect, useState } from "react";
import NeonNavbar from "../components/Navigation/NeonNavbar";
import {
  getCart,
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../services/cart";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart on mount
  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    const updated = removeFromCart(id);
    setCart(updated);
    toast.success("Item removed from cart");
  };

  const handleIncrease = (id) => {
    const updated = increaseQty(id);
    setCart(updated);
  };

  const handleDecrease = (id) => {
    const updated = decreaseQty(id);
    setCart(updated);
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <NeonNavbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 bg-[#0b0b0b] border border-white/10 rounded-2xl p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-400">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="px-3 py-1 border rounded-lg"
                    >
                      −
                    </button>

                    <span className="w-6 text-center">{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="px-3 py-1 border rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-3 py-1 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-[#060606]">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-cyan-400">₹{total}</span>
              </div>

              <button
                className="w-full mt-4 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
