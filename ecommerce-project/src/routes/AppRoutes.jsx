import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:slug" element={<ProductDetails />} />

    </Routes>
  );
}