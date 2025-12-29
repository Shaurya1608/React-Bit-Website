import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { getCart } from "../../services/cart";   // ✅ correct path
import { ShoppingCart } from "lucide-react";

const NeonNavbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const baseLink = "cursor-target transition-colors text-sm";
  const getLinkClass = ({ isActive }) =>
    `${baseLink} ${
      isActive ? "text-cyan-400" : "text-white hover:text-white/70"
    }`;

  // 🔹 Load user + cart when navbar mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));

    setCartCount(getCart().length);
  }, []);

  // 🔹 Update cart count when cart changes
  useEffect(() => {
    const handler = () => setCartCount(getCart().length);

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <header className="w-full sticky top-0 z-30">
      <nav className="mx-auto w-[90%] max-w-6xl flex items-center justify-between 
        rounded-full border border-white/10 bg-black/20 px-8 py-3 
        text-sm text-white backdrop-blur-lg">

        {/* Logo */}
        <NavLink to="/" className="hidden md:flex items-baseline gap-1 font-semibold">
          <span className="text-white">NEON</span>
          <span className="text-white/60">MORPHIC</span>
        </NavLink>

        {/* Center Links */}
        <ul className="flex items-center gap-10 text-sm">
          <li><NavLink to="/" className={getLinkClass} end>Home</NavLink></li>
          <li><NavLink to="/about" className={getLinkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={getLinkClass}>Contact</NavLink></li>

          {/* Products Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setOpen(prev => !prev)}
              className="flex items-center gap-1 cursor-target text-white hover:text-white/70"
            >
              <span>Products</span>
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-40 rounded-lg bg-[#050505] 
                border border-white/10 shadow-lg py-2">
                
                <NavLink to="/products" className={getLinkClass} onClick={() => setOpen(false)} end>
                  All
                </NavLink>

                <NavLink to="/products/mens" className={getLinkClass} onClick={() => setOpen(false)}>
                  Mens
                </NavLink>

                <NavLink to="/products/womens" className={getLinkClass} onClick={() => setOpen(false)}>
                  Womens
                </NavLink>

                <NavLink to="/products/kids" className={getLinkClass} onClick={() => setOpen(false)}>
                  Kids
                </NavLink>
              </div>
            )}
          </li>

          <li><NavLink to="/order" className={getLinkClass}>Orders</NavLink></li>

          <li><NavLink to="/admin" className={getLinkClass}>Admin</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* 🛒 Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="relative cursor-target rounded-full border border-white/30 
              px-4 py-2 hover:bg-white/10 transition"
          >
            <ShoppingCart size={18} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs 
                bg-cyan-400 text-black px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* 👤 User Logged In */}
          {user ? (
            <>
              <span className="hidden md:flex text-white/80">
                Welcome, <span className="text-cyan-400 ml-1 mr-6">{user.name}</span>
              </span>

              <button
                onClick={handleLogout}
                className="cursor-target hidden md:inline-flex rounded-full 
                  border border-white px-6 py-2 text-sm font-medium 
                  hover:bg-white hover:text-black transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="cursor-target hidden md:inline-flex rounded-full 
                  border border-white/40 px-6 py-2 text-sm font-medium 
                  hover:bg-white/10"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="cursor-target hidden md:inline-flex rounded-full 
                  border border-white px-6 py-2 text-sm font-medium 
                  hover:bg-white hover:text-black transition-colors"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NeonNavbar;
