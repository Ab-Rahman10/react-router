import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { id, title, category, price } = product;

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="border p-5 rounded-md flex flex-col">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>Category: {category}</p>
      <p className="flex-grow">Price: ${price}</p>

      <button onClick={handleDetails} className="text-blue-600 font-bold">
        Click me to see details
      </button>
    </div>
  );
};

export default Product;
