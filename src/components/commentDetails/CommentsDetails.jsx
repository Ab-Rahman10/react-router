import { useLoaderData } from "react-router-dom";

export default function CommentDetails() {
  const commentDetails = useLoaderData();
  const { body } = commentDetails;
  return <div className="border p-5 rounded-md bg-gray-200">{body}</div>;
}
