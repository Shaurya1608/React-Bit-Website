// RightSideLogin.jsx
import React from "react";

const RightSideLogin = () => {
  return (
    <div
      className="
        hidden        /* ❌ hidden on small screens */
        md:flex       /* ✅ visible from md and above */
        h-full 
        w-full 
        relative
      "
    >
      <img
        src="https://i.pinimg.com/1200x/54/a2/ce/54a2cefb9f3bf2a144afee9a87e97348.jpg"
        alt="Login background"
        className="
          h-full 
          w-full 
          object-cover 
          object-center 
          rounded-none
        "
      />

      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default RightSideLogin;
