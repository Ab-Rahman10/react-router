import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Home = () => {
  return (
    <div className="text-center items-center">
      <Navbar></Navbar>
      <h1 className="text-3xl">I am from Home</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
