import React from 'react'
import SpotlightCard from '../animations/SpotlightCard'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-24 relative overflow-hidden">
  {/* Top glow line */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Brand Card */}
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.3)"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          About Me
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          I design and build modern, interactive web experiences focused on
          performance, motion, and clean UI. Turning ideas into digital products.
        </p>
      </SpotlightCard>

      {/* Links Card */}
     <SpotlightCard
  className="custom-spotlight-card"
  spotlightColor="rgba(0, 229, 255, 0.3)"
>
  <h3 className="text-xl font-semibold text-white mb-5">
    Explore
  </h3>

  <ul className="cursor-target grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
    {[
      { label: "Home", path: "/" },
      { label: "Blog", path: "/blog" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ].map(item => (
      <li key={item.label}>
        <Link
          to={item.path}
          className="group flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all duration-300" />
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</SpotlightCard>


      {/* Contact Card */}
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.3)"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          Let’s Work Together
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Have an idea or project in mind? Let’s create something meaningful.
        </p>
        <a
          href="mailto:hello@yourmail.com"
          className="cursor-target text-cyan-400 hover:text-cyan-300 text-sm font-medium"
        >
          hello@yourmail.com
        </a>
      </SpotlightCard>

    </div>

    {/* Bottom text */}
    <div className="mt-16 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </div>
  </div>
</footer>

  )
}

export default Footer