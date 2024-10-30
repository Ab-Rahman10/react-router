import { useLoaderData } from "react-router-dom";
import Post from "../post/post";

export default function Posts() {
  const posts = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold">All Post are here</h1>
      <div className="grid grid-cols-4 gap-5 ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}
