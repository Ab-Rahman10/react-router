import { useLoaderData } from "react-router-dom";
import Comment from "../comment/Comment";

export default function Comments() {
  const comments = useLoaderData();
  return (
    <>
      <div className="text-3xl font-bold">All Comments are here</div>
      <div className="grid grid-cols-4 gap-5">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </>
  );
}
