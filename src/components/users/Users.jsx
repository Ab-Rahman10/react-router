import { useLoaderData } from "react-router-dom";
import User from "../user/User";

export default function Users() {
  const users = useLoaderData();
  return (
    <>
      <h2 className="text-5xl font-bold">Users:{users.length} </h2>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </>
  );
}
