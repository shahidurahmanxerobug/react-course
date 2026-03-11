import headphoneImg from "../assets/images/products/headphone.jpg";
import smartwatchImg from "../assets/images/products/smartwatch.jpg";
import tshirtImg from "../assets/images/products/tshirt.jpg";
import blenderImg from "../assets/images/products/blender.jpg";
import yogaMatImg from "../assets/images/products/yoga_mat.jpg";
import lipstickImg from "../assets/images/products/lipstick.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    slug: "wireless-headphones",
    category: "electronics",
    price: 59.99,
    image: headphoneImg,
    rating: 4.5,
    stock: 12,
  },
  {
    id: 2,
    name: "Smart Watch",
    slug: "smart-watch",
    category: "electronics",
    price: 129.99,
    image: smartwatchImg,
    rating: 4.2,
    stock: 8,
  },
  {
    id: 3,
    name: "Men's T-Shirt",
    slug: "mens-tshirt",
    category: "fashion",
    price: 19.99,
    image: tshirtImg,
    rating: 4.8,
    stock: 20,
  },
  {
    id: 4,
    name: "Blender",
    slug: "blender",
    category: "home-kitchen",
    price: 49.99,
    image: blenderImg,
    rating: 4.0,
    stock: 15,
  },
  {
    id: 5,
    name: "Yoga Mat",
    slug: "yoga-mat",
    category: "sports-outdoors",
    price: 29.99,
    image: yogaMatImg,
    rating: 4.7,
    stock: 10,
  },
  {
    id: 6,
    name: "Lipstick Set",
    slug: "lipstick-set",
    category: "beauty-health",
    price: 24.99,
    image: lipstickImg,
    rating: 4.3,
    stock: 25,
  },
];

export default products;