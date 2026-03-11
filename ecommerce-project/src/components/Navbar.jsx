import { Link } from "react-router-dom";

export default function Navbar({ mobileMenu }) {
  return (
    <nav
      className={`bg-gray-100 md:bg-white md:border-t ${
        mobileMenu ? "block" : "hidden md:block"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-col md:flex-row md:space-x-8 py-3 text-gray-700 font-medium">
          <li>
            <Link to="/" className="block py-2 hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block py-2 hover:text-indigo-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/categories" className="block py-2 hover:text-indigo-600">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}