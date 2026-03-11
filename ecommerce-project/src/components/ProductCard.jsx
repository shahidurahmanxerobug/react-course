import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="relative border rounded-lg p-2 shadow hover:shadow-lg transition">

      {/* Product Image */}
      <div className="relative">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 md:h-40 object-cover rounded cursor-pointer"
          />
        </Link>

        {/* Add to Cart Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart && onAddToCart(product);
          }}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ShoppingCart size={20} className="text-indigo-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-2">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-sm md:text-base font-semibold hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>

        <p className="text-indigo-600 font-bold">${product.price}</p>

        {/* Rating */}
        {product.rating && (
          <p className="text-yellow-500 text-xs mt-1">
            {"★".repeat(Math.floor(product.rating))}
          </p>
        )}
      </div>

    </div>
  );
}