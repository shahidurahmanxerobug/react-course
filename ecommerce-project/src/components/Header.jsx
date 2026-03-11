import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import app from "../config/app";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  const [cartCount] = useState(3);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { APP_NAME } = app;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={logo} alt={APP_NAME} className="h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-indigo-600">
            {APP_NAME}
          </span>
        </div>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0 ml-auto">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar mobileMenu={mobileMenu} />
    </header>
  );
}