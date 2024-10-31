import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import CommentDetails from "./components/commentDetails/CommentsDetails";
import Comments from "./components/comments/comments";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import PostDetails from "./components/postDetails/PostDetails";
import Posts from "./components/posts/posts";
import UserDetails from "./components/userDetails/UserDetails";
import Users from "./components/users/Users";
import "./index.css";
import ErrorPage from "./components/errorPage/ErrorPage";
import Products from "./components/products/Products";
import ProductDetails from "./components/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/comments",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Comments></Comments>,
      },
      {
        path: "/comment/:commentId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
          ),
        element: <CommentDetails></CommentDetails>,
      },
      {
        path: "/products",
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: <Products></Products>,
      },
      {
        path: "/product/:productId",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
