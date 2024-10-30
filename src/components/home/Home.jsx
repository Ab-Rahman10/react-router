import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Home = () => {
  return (
    <div className="text-center items-center">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
