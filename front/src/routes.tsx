import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Realty, User, Authorization } from "./pages";
import { RequireAuth } from "./components/RequireAuth";
import { Login } from "./pages/Authorization/components/Login";
import { Registration } from "./pages/Authorization/components/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Realty />
      </RequireAuth>
    ),
  },
  {
    path: "/user",
    element: (
      <RequireAuth>
        <User />
      </RequireAuth>
    ),
  },
  {
    path: "auth",
    element: <Authorization />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);
