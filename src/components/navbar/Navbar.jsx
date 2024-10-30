import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between w-9/12 mx-auto pt-5">
      <h1 className="text-3xl">This is Navbar</h1>
      <div>
        <Link className="ml-5 text-blue-600" to="/">
          Home
        </Link>
        <Link className="ml-5 text-blue-600" to="/about">
          About
        </Link>
        <Link className="ml-5 text-blue-600" to="/contact">
          Contact Us
        </Link>
        <Link className="ml-5 text-blue-600" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
}
