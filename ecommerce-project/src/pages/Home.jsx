import categories from "../data/categories";
import products from "../data/products";
import { Link } from "react-router-dom";

// Import hero banner from assets
import heroBanner from "../assets/images/hero_banner.png";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative rounded-lg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="text-center cursor-pointer hover:scale-105 transform transition block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-24 object-cover rounded"
                />

                <h3 className="mt-2 font-semibold">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onClick={() => alert(`Clicked on ${prod.name}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
