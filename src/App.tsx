import React from "react";
import { Route, Routes, Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import { Book } from "./pages/Book";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/signup",
      element: <Signup />,
    },
    {
      path: "/auth/signin",
      element: <Signin />,
    },
    {
      path: "/books",
      children: [
        { index: true, element: <BookList /> },
        { path: ":id", element: <Book /> },
      ],
    },
  ]);

  return element;
};

export default App;
