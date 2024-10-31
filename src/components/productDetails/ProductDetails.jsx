import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { id, description, price } = productDetails;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="border p-5 rounded-md">
      <h1 className="text-3xl font-bold">Product Details about: {id}</h1>
      <p>{description}</p>
      <p className="mt-10 font-bold">Price: ${price}</p>

      <button
        onClick={handleGoBack}
        className="mt-10 font-bold text-blue-600 bg-gray-300 p-2 rounded-md"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
