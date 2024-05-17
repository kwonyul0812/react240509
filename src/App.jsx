import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/list">LIST</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/1")}>
        1번 게시물 보기
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/2")}>
        2번 게시물 보기
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/3")}>
        3번 게시물 보기
      </div>
    </div>
  );
}

function BoardView() {
  const params = useParams();
  return <div>{params.id}번 게시물 보는중</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>MAIN PAGE</div>,
      },
      {
        path: "list",
        element: <BoardList />,
      },
      {
        path: "board/:id",
        element: <BoardView />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
