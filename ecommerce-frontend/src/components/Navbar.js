import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4 text-white shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold">MyShop</h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/products" className="hover:text-gray-200">Products</Link>
        <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
        <Link to="/register" className="hover:text-gray-200">register</Link>
      </div>
    </nav>
  );
}
