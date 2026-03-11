import categories from "../data/categories";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold">Categories</h1>
        <p className="text-gray-500">
          Browse products by category
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden block"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">
                {cat.name}
              </h3>
            </div>
          </Link>

        ))}
      </div>

    </div>
  );
}