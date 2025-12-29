import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { addToCart } from "../../services/cart";
import { getProducts } from "../../services/productApi";

gsap.registerPlugin(ScrollTrigger);

const fallbackProducts = [
  {
    _id: "demo-1",
    title: "Portfolio Website",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1704775991298-38b9139fdad9",
  },
  {
    _id: "demo-2",
    title: "Landing Page",
    price: 1499,
    image:
      "https://plus.unsplash.com/premium_photo-1727967288422-de27771f5999",
  },
  {
    _id: "demo-3",
    title: "E-commerce UI Kit",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1537274942065-eda9d00a6293",
  },
];

const RecommendedProducts = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  // 🟢 Load real products — fallback to demo if request fails
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data.slice(0, 3)); // show top 3
      } catch {
        setProducts(fallbackProducts);
      }
    };

    loadProducts();
  }, []);

  // 🟢 GSAP card reveal animation
  useEffect(() => {
    if (!cardsRef.current.length) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, [products]);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`Added ${item.title} to cart 🛒`);
  };

  return (
    <section className="bg-black py-20">
      <h3 className="mb-10 text-center text-2xl font-semibold text-white">
        Recommended For You
      </h3>

      {/* GRID */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {products.map((item, index) => {
          const hasImage =
            item?.image &&
            typeof item.image === "string" &&
            item.image.trim() !== "";

          return (
            <motion.div
              key={item._id || item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 hover:border-cyan-400/50 hover:shadow-[0_0_25px_#00ffff25] transition"
            >
              {/* IMAGE */}
              <div className="h-44 w-full rounded-xl overflow-hidden border border-white/10 mb-4">
                {hasImage ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                  </div>
                )}
              </div>

              {/* TITLE */}
              <h4 className="text-lg font-medium text-white line-clamp-1">
                {item.title}
              </h4>

              {/* PRICE */}
              <p className="mt-2 text-cyan-400 font-semibold">
                ₹{item.price}
              </p>

              {/* BUTTONS */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="rounded-lg border border-white/20 py-2 text-sm text-white hover:bg-white hover:text-black transition"
                >
                  View
                </button>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="rounded-lg border border-cyan-400/60 py-2 text-sm text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
                >
                  Add To Cart
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedProducts;
