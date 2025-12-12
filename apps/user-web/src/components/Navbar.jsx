import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 md:w-40 object-contain cursor-pointer"
          />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link className="hover:text-[#EB4C06] transition-colors" to="/">Home</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/restaurant">Restaurant</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/cart">Cart</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/orders">Orders</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/rewards">Rewards</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/support">Support</Link>
          <Link className="hover:text-[#EB4C06] transition-colors" to="/useraccount">Account</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-4 text-lg font-medium"
        >
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/restaurant">Restaurant</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/cart">Cart</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/orders">Orders</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/rewards">Rewards</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/support">Support</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#EB4C06] transition-colors" to="/useraccount">Account</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
