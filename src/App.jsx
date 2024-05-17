import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {BoardAdd} from "./BoardAdd.jsx";
import {BoardEdit} from "./BoardEdit.jsx";

function BoardList() {
  return <div>게시물 목록 페이지</div>
}

// router 객체
const router = createBrowserRouter([
  {
    path: "/add",
    element: <BoardAdd />,
  },
  {
    path: "/edit",
    element: <BoardEdit />,
  },
  {
    path: "/list",
    element: <BoardList>,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
