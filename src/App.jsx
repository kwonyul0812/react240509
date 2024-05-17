import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"; // /react/doc

// /react/doc
// /react/tutorial
// /react/sample

function SpringBoot() {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <div
        style={{
          padding: "10px",
          backgroundColor: "linen",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <Link to="/react/doc">DOC</Link>
        </div>
        <div>
          <Link to="/react/tutorial">tutorial</Link>
        </div>
        <div>
          <Link to="/react/sample">sample</Link>
        </div>
      </div>

      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/react",
    element: <SpringBoot />,
    children: [
      { path: "doc", element: <div>react doc</div> },
      { path: "tutorial", element: <div>react tutorial</div> },
      { path: "sample", element: <div>react sample</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
