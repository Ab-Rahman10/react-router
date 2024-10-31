import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-9/12 mx-auto pt-5">
      <h1 className="text-3xl">This is Navbar</h1>
      <nav>
        <NavLink className="ml-5 text-blue-600" to="/">
          Home
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/about">
          About
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/users">
          Users
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/posts">
          Posts
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/comments">
          Comments
        </NavLink>
        <NavLink className="ml-5 text-blue-600" to="/products">
          Products
        </NavLink>
      </nav>
    </div>
  );
}
