import { NavLink } from "react-router-dom";

const TopHeroText = () => {
  return (
    <div className="w-full flex flex-col items-center text-center py-6 px-4">

      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-white font-serif font-bold tracking-wide text-3xl md:text-4xl">
          Thrift
        </span>

        <span className="text-white/80 font-serif tracking-wide text-3xl md:text-4xl">
          Store
        </span>
      </NavLink>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-400 mt-1">
        Explore more. Experience life.
      </p>

      {/* Auth Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">

        {/* LOGIN BUTTON */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `
            px-8 py-2 rounded-xl text-sm font-medium border transition
            ${
              isActive
                ? "bg-white/20 text-white border-white/40 shadow"
                : "border-gray-600 text-white/60 hover:text-white hover:bg-white/10"
            }
          `
          }
        >
          Log In
        </NavLink>

        {/* SIGNUP BUTTON */}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `
            px-8 py-2 rounded-xl text-sm font-medium border transition
            ${
              isActive
                ? "bg-white/20 text-white border-white/40 shadow"
                : "bg-white/10 border-white/20 text-white/60 hover:text-white hover:bg-white/20"
            }
          `
          }
        >
          Sign Up
        </NavLink>

      </div>
    </div>
  );
};

export default TopHeroText;
