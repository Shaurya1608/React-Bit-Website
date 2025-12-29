import { NavLink } from "react-router-dom";
import { useState } from "react";

const NeonNavbar = () => {
  const [open, setOpen] = useState(false);

  const baseLink = "cursor-target transition-colors text-sm";
  const getLinkClass = ({ isActive }) =>
    `${baseLink} ${
      isActive ? "text-cyan-400" : "text-white hover:text-white/70"
    }`;

  return (
    <header className="w-full sticky top-0 z-30">
      <nav className="mx-auto w-[90%] max-w-6xl flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-8 py-3 text-sm text-white backdrop-blur-lg">
        {/* Logo */}
        <NavLink
          to="/"
          className="hidden md:flex items-baseline gap-1 font-semibold"
        >
          <span className="text-white">NEON</span>
          <span className="text-white/60">MORPHIC</span>
        </NavLink>

        {/* Center links */}
        <ul className="flex items-center gap-10 text-sm">
          <li>
            <NavLink to="/" className={getLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </li>

          {/* Products + dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-1 cursor-target text-sm text-white hover:text-white/70"
            >
              <span>Products</span>
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-40 rounded-lg bg-[#050505] border border-white/10 shadow-lg py-2">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isActive ? "text-cyan-400" : "text-white hover:bg-white/10"
                    }`
                  }
                  onClick={() => setOpen(false)}
                  end
                >
                  All
                </NavLink>
                <NavLink
                  to="/products/mens"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isActive ? "text-cyan-400" : "text-white hover:bg-white/10"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Mens
                </NavLink>
                <NavLink
                  to="/products/womens"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isActive ? "text-cyan-400" : "text-white hover:bg-white/10"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Womens
                </NavLink>
                <NavLink
                  to="/products/kids"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isActive ? "text-cyan-400" : "text-white hover:bg-white/10"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  Kids
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/order" className={getLinkClass}>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={getLinkClass}>
              Admin
            </NavLink>
          </li>
        </ul>

        {/* Right CTA */}
        <div>
          {/* <button className="">
            Sign up
          </button> */}
          <NavLink
          to="/signup"
          className="cursor-target hidden md:inline-flex items-center justify-center rounded-full border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
           Sign Up
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NeonNavbar;
