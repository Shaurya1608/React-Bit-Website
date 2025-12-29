import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const recommended = [
  {
    id: 1,
    title: "Portfolio Website",
    price: 1999,
    image: "https://images.unsplash.com/photo-1704775991298-38b9139fdad9",
  },
  {
    id: 2,
    title: "Landing Page",
    price: 1499,
    image: "https://plus.unsplash.com/premium_photo-1727967288422-de27771f5999",
  },
  {
    id: 3,
    title: "E-commerce UI Kit",
    price: 2499,
    image: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293",
  },
];

const RecommendedProducts = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-black py-20">
      <h3 className="mb-10 text-center text-2xl font-semibold text-white">
        Recommended for you
      </h3>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {recommended.map((item, index) => (
          <motion.div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-44 w-full rounded-xl object-cover mb-4"
            />

            <h4 className="text-lg font-medium text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-cyan-400 font-semibold">
              ₹{item.price}
            </p>

            <button
              onClick={() => navigate(`/product/${item.id}`)}
              className="mt-4 w-full rounded-lg border border-cyan-400/40 py-2 text-sm text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Add To Carts
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
