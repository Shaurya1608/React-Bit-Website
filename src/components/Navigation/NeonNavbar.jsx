import { Link } from "react-router-dom";


const NeonNavbar = () => {
  const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];
  return (
    <header className="w-full sticky top-0 z-30">
      <nav className="mx-auto w-[90%] max-w-6xl flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-8 py-3 text-sm text-white backdrop-blur-lg">
        
        {/* Logo */}
        <Link to="/" className="hidden md:flex items-baseline gap-1 font-semibold">
          <span className="text-white">NEON</span>
          <span className="text-white/60">MORPHIC</span>
        </Link>

        {/* <div className="">
          <BubbleMenu        
          logo={<span style={{ fontWeight: 100 }}>RB</span>}
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        </div> */}

        {/* Center links */}
        <ul className="flex items-center gap-10 text-sm">
          <li>
            <Link to="/" className=" cursor-target hover:text-white/70 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-target hover:text-white/70 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-target hover:text-white/70 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/products" className="cursor-target hover:text-white/70 transition-colors">
              Products
            </Link>
          </li>
        </ul>

        {/* Right CTA */}
        {/*  */}
        <div>
         <button className="cursor-target hidden md:inline-flex items-center justify-center rounded-full border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
          Connect wallet
        </button>
         </div>
      </nav>
    </header>
  );
};

export default NeonNavbar;
