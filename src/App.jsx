import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// router 객체
const router = createBrowserRouter([
  {
    path: "/add",
    element: <dive>글 작성 페이지</dive>,
  },
  {
    path: "/edit",
    element: <dive>게시물 수정 페이지</dive>,
  },
  {
    path: "/list",
    element: <dive>게시물 목록 페이지</dive>,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
