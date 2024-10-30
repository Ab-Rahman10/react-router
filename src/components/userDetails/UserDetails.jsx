import { useLoaderData } from "react-router-dom";

export default function UserDetails() {
  const userDetails = useLoaderData();
  const { name } = userDetails;
  return (
    <div>
      <h3 className="text-3xl font-bold">Details about user: {name}</h3>
    </div>
  );
}
