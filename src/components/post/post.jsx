import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { id, title } = post;
  return (
    <div className="border p-5 rounded-md bg-gray-200">
      <h2 className="text-2xl font-bold">Post of ID: {id}</h2>
      <h2 className="text-2xl ">{title}</h2>
      <Link className="text-blue-600 mt-5" to={`/post/${id}`}>
        Show details
      </Link>
    </div>
  );
}
