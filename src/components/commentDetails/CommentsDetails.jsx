import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function CommentDetails() {
  const commentDetails = useLoaderData();
  const { id, body } = commentDetails;

  const { commentId } = useParams();
  console.log(commentId);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="border p-5 rounded-md bg-gray-200">
      <h3 className="text-2xl font-bold">Comment Details about: {id}</h3>
      <div className="">{body}</div>
      <button
        className="mt-10 font-bold text-blue-600 bg-gray-300 p-2 rounded-md"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
}
