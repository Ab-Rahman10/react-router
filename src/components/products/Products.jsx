import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold">
        All Products are here: {products.length}
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-7">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
