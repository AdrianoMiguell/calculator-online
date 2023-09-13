import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Contacts from "./routes/Contacts.jsx";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/contact", element: <Contacts /> }
// ]);
const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
