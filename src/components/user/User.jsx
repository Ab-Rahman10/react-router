import { Link } from "react-router-dom";

export default function User({ user }) {
  const { id, name, email, phone } = user;
  return (
    <div className="border p-5 rounded-md">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <Link className="text-blue-600" to={`/user/${id}`}>
        Show Details for more
      </Link>
    </div>
  );
}
