/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Comment({ comment }) {
  const { id, name, email } = comment;
  return (
    <div className="border p-5 rounded-md bg-gray-200 flex flex-col">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="flex-grow">{email}</p>

      <Link className="text-blue-600 " to={`/comment/${id}`}>
        Show Details
      </Link>
    </div>
  );
}
