import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold ">Oops!</h1>
      {error.statusText || error.message}
      <Link
        className="mt-10 font-bold text-blue-600 bg-gray-300 p-2 rounded-md"
        to="/"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
