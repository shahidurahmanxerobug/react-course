import { useParams } from "react-router-dom";
import products from "../data/products";
import { ShoppingCart } from "lucide-react";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">

      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-2xl font-bold text-indigo-600">
          ${product.price}
        </p>

        <p className="text-yellow-500">
          {"★".repeat(Math.floor(product.rating))}
        </p>

        <p className="text-gray-600">
          {product.description}
        </p>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          <ShoppingCart size={20} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}