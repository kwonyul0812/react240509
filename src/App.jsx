import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// /about
// /search
// /home
// 위 경로에 다른 컴포넌트가 출력되도록 작성

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div>about 컴포넌트</div>,
  },
  {
    path: "/search",
    element: <div>search 컴포넌트</div>,
  },
  {
    path: "/home",
    element: <div>home 컴포넌트</div>,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
