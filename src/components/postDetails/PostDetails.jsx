import { useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const postDetails = useLoaderData();
  const { body } = postDetails;
  return (
    <div className="border p-5 rounded-md">
      <h2 className="text-2xl font-bold">{body}</h2>
    </div>
  );
}
