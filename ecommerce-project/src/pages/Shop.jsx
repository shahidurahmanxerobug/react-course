import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import categories from "../data/categories";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "all"
  );

  const [sortBy, setSortBy] = useState("default");

  // update category if URL changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Filter products
  let filteredProducts =
    selectedCategory === "all"
      ? [...productsData]
      : productsData.filter((p) => p.category === selectedCategory);

  // Sorting
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="space-y-6">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home / <span className="text-gray-800 font-medium">Shop</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Shop Products
        </h1>

        {/* Sorting */}
        <select
          className="border rounded-lg px-4 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Best Rating</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "all"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === cat.slug
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredProducts.length} products
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

    </div>
  );
}