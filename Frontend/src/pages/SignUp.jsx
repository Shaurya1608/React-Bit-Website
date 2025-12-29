// LoginLeft.jsx - FIXED
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Lightning from "../components/animations/Lightning";
import TopHeroText from "../components/Auth/TopHeroText";
import RightSideLogin from "../components/Auth/RightSideLogin";


const SignUp = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="h-screen flex relative overflow-hidden">
      {/* Lightning background - FULL SCREEN */}
      <div className="absolute inset-0 z-0">
        <Lightning
          hue={920} 
          xOffset={-1}
          speed={0.8}
          intensity={0.3}
          size={0.8}
        />
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 h-screen relative overflow-hidden">
        <RightSideLogin />
      </div>

          {/* Left side - Login form (on top of lightning) */}
      <div className="h-screen w-1/2  flex flex-col justify-center items-center p-8 relative z-100">
        <TopHeroText />
        
        <div className="w-full max-w-md mt-8 space-y-6  rounded-3xl p-8 ">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Register
          </h1>

           <div>
            <label className="text-xs font-bold mb-2 block text-white">
              Name
            </label>
            <input
              type="name"
              placeholder="Enter your full name"
              className=" text-white rounded-xl py-3 px-4 w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-bold mb-2 block text-white">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className=" text-white rounded-xl py-3 px-4 w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-bold mb-2 block text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className=" text-white rounded-xl py-3 px-4 w-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-400 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Button */}
          <button className="cursor-pointer text-white w-full py-4 rounded-2xl font-semibold text-lg transition-all hover:text-blue-200">
            Sign In
          </button>

          {/* Links */}
          <div className="text-center space-y-2 pt-4 ">
            <NavLink 
              to="/signup"
              className="text-white font-semibold hover:text-blue-200 text-sm block"
            >
              Don't have an account? Sign Up
            </NavLink>
            <NavLink 
              to="/forgot-password" 
              className="text-white font-semibold hover:text-blue-200 text-sm block"
            >
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
