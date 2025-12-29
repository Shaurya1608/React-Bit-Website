import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import toast from "react-hot-toast";
import Lightning from "../components/animations/Lightning";
import TopHeroText from "../components/Auth/TopHeroText";
import RightSideLogin from "../components/Auth/RightSideLogin";

const LoginLeft = ({ goToSignup }) => {   // 👈 receive slide action
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Email & password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await login({
        email: form.email.trim(),
        password: form.password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(`Welcome back, ${user.name} 👋`);

      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex relative overflow-hidden">

      {/* Background lightning */}
      <div className="absolute inset-0 z-0">
        <Lightning
          hue={920}
          xOffset={0.4}
          speed={0.8}
          intensity={0.3}
          size={0.8}
        />
      </div>

      {/* LEFT — FORM */}
      <div className="h-screen w-full md:w-1/2 flex flex-col justify-center items-center p-8 relative z-100">

        <TopHeroText />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-2 
                     text-sm font-medium px-3 py-2 rounded-lg
                     border border-white/30 text-white
                     hover:bg-white/10 transition cursor-pointer"
        >
          ← Back
        </button>

        {/* Card */}
        <div className="w-full max-w-md mt-8 rounded-3xl p-8">

          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Welcome Back
          </h1>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="text-xs font-bold mb-2 block text-white">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="bg-white/5 text-white rounded-xl py-3 px-4 w-full 
                           border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-bold mb-2 block text-white">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="bg-white/5 text-white rounded-xl py-3 px-4 w-full 
                           border border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-2xl font-semibold text-lg
                text-white border border-white/20 transition
                ${
                  loading
                    ? "bg-white/30 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* 🔁 SWITCH TO SIGNUP USING SWIPER */}
          <div className="text-center space-y-2 pt-4">
            <button
              type="button"
              onClick={goToSignup}
              className="text-white font-semibold hover:text-blue-200 text-sm"
            >
              Don’t have an account? Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="hidden md:block w-1/2 h-screen relative overflow-hidden">
        <RightSideLogin />
      </div>
    </div>
  );
};

export default LoginLeft;
